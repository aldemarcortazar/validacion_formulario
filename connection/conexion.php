<?php
    $hostname ="localhost";
    $username ="root";
    $password ="";
    $database ="formulario";
    $mysqli = new mysqli ($hostname,$username,$password,$database);
    if($mysqli ->connect_errno){
        die('fallo la conexion a la base de datos $hostname'. mysqli_connect_errno());
    }else{
       // echo "conexion_correta con ".$database;
    }
    session_start();
?>