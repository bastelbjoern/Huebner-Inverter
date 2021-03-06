<meta content="text/html;charset=utf-8" http-equiv="Content-Type">
<title>Huebner Inverter</title>

<link rel="stylesheet" type="text/css" href="/css/style.css" />
<link rel="stylesheet" type="text/css" href="/css/alertify.css">
<link rel="stylesheet" type="text/css" href="/css/animate.css" />
<link rel="stylesheet" type="text/css" href="/css/bootstrap.css" />
<link rel="stylesheet" type="text/css" href="/css/glyphicons.css">
<link rel="stylesheet" type="text/css" href="/css/fancybox.css" media="screen"/>

<script type="text/javascript" src="/js/jquery.js"></script>
<script>
    var os = "linux";
    $(document).ready(function() {
        if (navigator.userAgent.match(/Android|webOS|iPhone|iPod|Blackberry/i)) {
            os = "mobile";
            $.getScript("/js/mobile.js", function() {
                optimizeMobile();
            });
        }else if (navigator.userAgent.match(/Mac/i)) {
            os = "mac";
        }else if (navigator.userAgent.match(/Win/i)) {
            os = "windows";
        }
        //DEBUG
        //os = "mobile";
    });
</script>
<script type="text/javascript" src="/js/svg-injector.js"></script>
<script type="text/javascript" src="/js/alertify.js"></script>
<script type="text/javascript" src="/js/download.js"></script>
<script type="text/javascript" src="/js/jquery.knob.js"></script>
<script type="text/javascript" src="/js/fancybox.js"></script>
<script type="text/javascript" src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/bootstrap-notify.js"></script>
<script type="text/javascript" src="/js/menu.js"></script>

<?php
    include_once("install.php");
?>
