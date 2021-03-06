<!DOCTYPE html>
<html>
    <head>
        <?php include "header.php" ?>
        <script type="text/javascript" src="/js/components.js"></script>
        <script>
        $(document).ready(function () {

            var pcb = "/pcb/";

            <?php
            if(isset($_GET["hardware"])){
            ?>
				giveCredit(pcb + "/design.txt");
				$("#components").empty();
			<?php
                if($_GET["hardware"] == "1"){
            ?>
                pcb += "Hardware v1.0";
                buildTable("Main Board v4", pcb + "/bom/base_board4.csv");
                buildTable("Gate Driver v2", pcb + "/bom/gate_driver2.csv", "Note: DC-DC has changed. PCB \"gate_driver.brd\" contains different size (old) component RH0515D or IH0515S");
                buildTable("Sensor Board v3", pcb + "/bom/sensor_board3.csv", "Add C4 & C5 100nF when using LEM HTFS current sensors");
            <?php
                }else if($_GET["hardware"] == "2"){
            ?>
                pcb += "Hardware v2.0";
                buildTable("Main Board v5", pcb + "/bom/base_board5.csv");
            <?php
                }else if($_GET["hardware"] == "damien"){
            ?>
                pcb += "Hardware v1.0 (Damien Mod)";
                buildTable("Combined Board v8", pcb + "/bom/combi_v8.csv");
                buildTable("Main Board v2", pcb + "/bom/main_board_v2.csv");
                buildTable("Gate Driver v2", pcb + "/bom/igbt_v2.csv", "U1, U1 and link out ZD1, ZD2 components are optional for Desat detection tuning");
                buildTable("Sensor Board v1", pcb + "/bom/sensor_board_v1.csv");
            <?php
                }else if($_GET["hardware"] == "tesla_rdu"){
            ?>
                pcb += "Hardware v2.0 (Tesla Rear Drive)";
                buildTable("Tesla Large Drive Unit Logic Board v3", pcb + "/bom/tesla_rdu_v3.csv");
            <?php
                }else if($_GET["hardware"] == "tesla_fdu"){
            ?>
                pcb += "Hardware v2.0 (Tesla Front Drive)";
                buildTable("Tesla Small Drive Unit Logic Board v1", pcb + "/bom/tesla_fdu_v1.csv");
            <?php } }else{ ?>
                
            <?php } ?>
			
            $("#components").show();
        });
        </script>
    </head>
    <body>
        <div class="container">
            <?php include "menu.php" ?>
            <br/>
            <div class="row">
                <div class="col" id="components" style="display:none">
                     <table class="table table-active bg-light table-bordered">
                        <tbody>
                            <tr align="center">
                                <td>
                                    <a href="/components.php?hardware=1">
                                        <img src="/img/hardware_v1.jpg" class="img-thumbnail rounded" />
                                    </a><br/><br/>
                                    Hardware v1.0 (Johannes Huebner)
                                </td>
                                <td>
                                    <a href="/components.php?hardware=2">
                                        <img src="/img/hardware_v2.jpg" class="img-thumbnail rounded" />
                                    </a><br/><br/>
                                    Hardware v2.0 (Johannes Huebner)
                                </td>
                            </tr>
                            <tr align="center">
                                <td>
                                    <a href="/components.php?hardware=damien">
                                        <img src="/img/hardware_v1_damien.jpg" class="img-thumbnail rounded" />
                                    </a><br/><br/>
                                    Hardware v1.0 (Damien Maguire)
                                </td>
                                <td>
                                </td>
                            </tr>
                            <tr align="center">
                                <td>
                                    <a href="/components.php?hardware=tesla_rdu">
                                        <img src="/img/hardware_v2_tesla_rdu.jpg" class="img-thumbnail rounded" />
                                    </a><br/><br/>
                                    Hardware v2.0 (Tesla Rear Drive Unit)
                                </td>
                                <td>
                                    <a href="/components.php?hardware=tesla_fdu">
                                        <img src="/img/hardware_v2_tesla_fdu.jpg" class="img-thumbnail rounded" />
                                    </a><br/><br/>
                                    Hardware v2.0 (Tesla Front Drive Unit)
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/>
        </div>
    </body>
</html>