if($args[0] -eq "uninstall") {
    Remove-Item -Recurse -Force "$env:USERPROFILE\Documents\tumanako-inverter-fw-motorControl-master"
}else{
    $console=$args[0]
    $shell = new-object -com Shell.Application
    
    Set-Location "$env:USERPROFILE\Documents\"
    if (-Not (Test-Path tumanako-inverter-fw-motorControl-master)) {
        Write-Host "UnZipping Source Code" -ForegroundColor Yellow
    	$zip = $shell.NameSpace("$env:USERPROFILE\Downloads\tumanako-inverter-fw-motorControl-master.zip")
    	foreach($item in $zip.items())
    	{
    		$shell.Namespace("$env:USERPROFILE\Documents\").copyhere($item)
    	}
    }else{
        if ($console -eq 1)
        {
			$GCC_WIN = "C:\SysGCC\MinGW64"
			$GCC_ARM = "C:\SysGCC\arm-eabi"
			$MSYS = "C:\msys64\usr"

            $env:Path += ";$GCC_WIN\bin"
            $env:Path += ";$GCC_ARM\bin"
			$env:Path += ";$MSYS\bin"
			
    		#--------- MSYS Fix --------------
			Rename-Item "$GCC_WIN\bin\mingw32-make.exe" "$GCC_WIN\bin\make.exe" -ErrorAction SilentlyContinue
    		Rename-Item "$MSYS\bin\find.exe" "$MSYS\bin\sfind.exe" -ErrorAction SilentlyContinue
    		Copy-Item "$MSYS\bin\sh.exe" "$MSYS\bin\shell.exe" -ErrorAction SilentlyContinue
			
			#----------- ARM-EABI Fix ----------
			Copy-Item "$GCC_ARM\bin\arm-eabi-gcc.exe" "$GCC_ARM\bin\arm-none-eabi-gcc.exe" -ErrorAction SilentlyContinue
			Copy-Item "$GCC_ARM\bin\arm-eabi-g++.exe" "$GCC_ARM\bin\arm-none-eabi-g++.exe" -ErrorAction SilentlyContinue
			Remove-Item "$GCC_ARM\bin\make.exe" -ErrorAction SilentlyContinue
			
            #--------- LIBOPENCM3 ------------
            Set-Location "$env:USERPROFILE\Documents\tumanako-inverter-fw-motorControl-master"
            if (-Not (Test-Path "libopencm3")) {
                if (-Not (Test-Path "$env:USERPROFILE\Downloads\libopencm3-master.zip")) {
                    Write-Host "Downloading Libopencm3" -ForegroundColor Green
                    Invoke-WebRequest -Uri "https://github.com/libopencm3/libopencm3/archive/master.zip" -OutFile "$env:USERPROFILE\Downloads\libopencm3-master.zip"
                }
                Write-Host "UnZipping Libopencm3" -ForegroundColor Yellow
                $zip = $shell.NameSpace("$env:USERPROFILE\Downloads\libopencm3-master.zip")
                foreach($item in $zip.items())
                {
                    $shell.Namespace("$env:USERPROFILE\Documents\tumanako-inverter-fw-motorControl-master\").copyhere($item)
                }
                Rename-Item libopencm3-master libopencm3
            }

            if (-Not (Test-Path libopencm3\li\libopencm3_stm32f1.a)) {
                Write-Host "Building Libopencm3" -ForegroundColor Green
    			
                $env:Path += ";$env:USERPROFILE\AppData\Local\Programs\Python\Python36-32\"
                $env:Path += ";$env:USERPROFILE\AppData\Local\Programs\Python\Python36-32\Scripts\"
                ##!c:/Python27/python.exe
    			
                Set-Location libopencm3
    			make.exe clean
                make.exe TARGETS=stm32/f1
    			
                #Overwrite existing with new version
                Copy-Item lib "$GCC_ARM\arm-none-eabi\lib\" -Recurse -ErrorAction SilentlyContinue
                Copy-Item include "$GCC_ARM\arm-none-eabi\include\" -Recurse -ErrorAction SilentlyContinue
            }
            #--------- BOOTLOADER ------------
            Set-Location "$env:USERPROFILE\Documents\tumanako-inverter-fw-motorControl-master"
            if (-Not (Test-Path src\bootloader)) {
                $zip = $shell.NameSpace((Split-Path $PSScriptRoot -Parent) + "\Web\firmware\bootloader.zip")
                foreach($item in $zip.items())
                {
                    $shell.Namespace("$env:USERPROFILE\Documents\tumanako-inverter-fw-motorControl-master\src\").copyhere($item)
                }
            }
            Set-Location src\bootloader
            make.exe clean
            make.exe
            Move-Item stm32_loader.bin (Split-Path (Split-Path (Get-Location) -Parent) -Parent) -ErrorAction SilentlyContinue
            Move-Item stm32_loader.hex (Split-Path (Split-Path (Get-Location) -Parent) -Parent) -ErrorAction SilentlyContinue

            #--------- FIRMWARE --------------
            Set-Location "$env:USERPROFILE\Documents\tumanako-inverter-fw-motorControl-master"
            Set-Location src\sine
            make.exe clean
            make.exe
            Move-Item stm32_sineHWCONFIG_REV1.bin (Split-Path (Split-Path (Get-Location) -Parent) -Parent) -ErrorAction SilentlyContinue
            Move-Item stm32_sineHWCONFIG_REV1.hex (Split-Path (Split-Path (Get-Location) -Parent) -Parent) -ErrorAction SilentlyContinue

            #--------- ATtiny13 --------------
			
			$GCC_AVR = "C:\SysGCC\avr"
			$env:Path += ";$GCC_AVR\bin"
				
            Set-Location "$env:USERPROFILE\Documents\tumanako-inverter-fw-motorControl-master"
            if (-Not (Test-Path src\attiny13)) {
                $zip = $shell.NameSpace((Split-Path $PSScriptRoot -Parent) + "\Web\firmware\attiny13.zip")
                foreach($item in $zip.items())
                {
                    $shell.Namespace("$env:USERPROFILE\Documents\tumanako-inverter-fw-motorControl-master\src\").copyhere($item)
                }
            }
            Set-Location src\attiny13
            avr-gcc.exe -g -mmcu=attiny13 -Os -Os -o volt-pwm-attiny13.o volt-pwm-attiny13.c -DF_CPU=96000000
            avr-objcopy.exe -R .eeprom -O binary volt-pwm-attiny13.o volt-pwm-attiny13.bin
            avr-objcopy.exe -R .eeprom -O ihex volt-pwm-attiny13.o volt-pwm-attiny13.hex
            Move-Item volt-pwm-attiny13.bin (Split-Path (Split-Path (Get-Location) -Parent) -Parent) -ErrorAction SilentlyContinue
            Move-Item volt-pwm-attiny13.hex (Split-Path (Split-Path (Get-Location) -Parent) -Parent) -ErrorAction SilentlyContinue
            #---------------------------------

            Start-Process "explorer.exe" -ArgumentList "$env:USERPROFILE\Documents\tumanako-inverter-fw-motorControl-master\"

        }else{
            Start-Process -FilePath "cmd.exe" -ArgumentList "/k ""powershell.exe -ExecutionPolicy Bypass -File ""$PSCommandPath"" 1"" 2>&1"
        }
    }
}