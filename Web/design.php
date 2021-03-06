<!DOCTYPE html>
<html>
    <head>
        <?php include "header.php" ?>
        <link rel="stylesheet" type="text/css" href="/css/bootstrap-slider.css" />
        <script type="text/javascript" src="/js/bootstrap-slider.js"></script>
        <script type="text/javascript" src="/js/three.js"></script>
        <script type="text/javascript" src="/js/OrbitControls.js"></script>
        <script type="text/javascript" src="/js/Projector.js"></script>
        <script type="text/javascript" src="/js/design.js"></script>
    </head>
    <body>
        <div class="container">
            <?php include "menu.php" ?>
            <br/>
            <div class="row">
                <div class="col">
                    <center>
                    <?php if(isset($_GET["id"])){ ?>
                        <script>
                            $(document).ready(function() {
                                //$.notify({ message: 'Layout design by' },{ type: 'success' });
                                initialize3D("<?php echo $_GET['id'] ?>");
                                giveCredit("/3d/<?php echo $_GET['id'] ?>.txt");
                            });
                        </script>
                        <input id="explode" type="hidden" data-slider-orientation="horizontal" data-slider-tooltip="hide" />
                        <table class="table table-active table-bordered">
                            <tbody>
                                <tr>
                                    <td>
                                        <div id="container"></div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    <?php }else{ ?>
                    <h1>Power Stage - Design Ideas</h1><br/>
                        <script>
                            $(document).ready(function() {
                                fill3DTable()
                            });
                        </script>
                        <table class="table table-active table-bordered" id="ideaTable"></table>
                    <?php } ?>
                    </center>
                </div>
            </div>
        </div>
    </body>
</html>