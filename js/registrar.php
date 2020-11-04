<?php
     require_once("../connection/conexion.php");
    try {
        if(isset($_POST)){
            $usuario = $_POST['usuario'];
            $nombre = $_POST['nombre'];
            $password = $_POST['password'];
            $correo = $_POST['correo'];
            $telefono = $_POST['telefono'];

            //$titulo = $_POST['titulo'];

            $consulta = "SELECT * from usuario where usuario = '{$usuario}'";
            $query = mysqli_query($mysqli , $consulta);
            $bd = mysqli_fetch_assoc($query);

            if(empty($bd)){
                $insert = "INSERT into usuario(usuario,nombre,password,correo,telefono) values ('{$usuario}','{$nombre}','{$password}','{$correo}','{$telefono}')";
                $queryi = mysqli_query($mysqli, $insert) or die(mysqli_error($mysqli));
                if($queryi){
                    echo json_encode('creado');
                }
               // echo json_encode('<script>window.location="../login.html"</script>');
            }else{
                echo json_encode('errorexistente');
               // echo json_encode('<script>window.location="../index.html"</script>');
            }
        }  
    } catch (Throwable $th) {
        echo "el error esta en".$th;
    }
       
?>