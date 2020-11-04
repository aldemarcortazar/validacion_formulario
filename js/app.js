const $formulario = document.getElementById('formulario');
const $inputs = document.querySelectorAll('#formulario input');
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
const campos = {
    usuario: false,
    nombre: false,
    password: false,
    correo : false,
    telefono : false,
    
}
const validarCampo =(expresion , input , campo)=>{
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} img`).classList.remove('formulario__validacion-estado-incorrecto');
        document.querySelector(`#grupo__${campo} .formulario__validacion-estado-c`).classList.add('formulario__validacion-estado-correcto');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo]= true;
    }else{  
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} .formulario__validacion-estado-c`).classList.remove('formulario__validacion-estado-correcto');
        document.querySelector(`#grupo__${campo} img`).classList.add('formulario__validacion-estado-incorrecto');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo]= false;
    }
}
const validarPassword2 = () =>{
    const $password1 = document.getElementById('password');
    const $password2 = document.getElementById('password2');

    if($password1.value !== $password2.value){
        document.getElementById('grupo__password2').classList.add('formulario__grupo-incorrecto');
        document.getElementById('grupo__password2').classList.remove('formulario__grupo-correcto');
        document.querySelector('#grupo__password2 .formulario__validacion-estado-c').classList.remove('formulario__validacion-estado-correcto');
        document.querySelector('#grupo__password2 img').classList.add('formulario__validacion-estado-incorrecto');
        document.querySelector('#grupo__password2 .formulario__input-error').classList.add('formulario__input-error-activo');
        campos['password']= false;
    }else{
        document.getElementById('grupo__password2').classList.remove('formulario__grupo-incorrecto');
        document.getElementById('grupo__password2').classList.add('formulario__grupo-correcto');
        document.querySelector('#grupo__password2 img').classList.remove('formulario__validacion-estado-incorrecto');
        document.querySelector('#grupo__password2 .formulario__validacion-estado-c').classList.add('formulario__validacion-estado-correcto');
        document.querySelector('#grupo__password2 .formulario__input-error').classList.remove('formulario__input-error-activo');
        campos['password']=true;
    }
}
const validarFormulario = (e)=>{
    switch (e.target.name){
        case "usuario":
          validarCampo(expresiones.usuario , e.target , e.target.name);
        break;
        case "nombre":
          validarCampo(expresiones.nombre, e.target , e.target.name);
        break;
        case "password":
          validarCampo(expresiones.password, e.target , e.target.name);
          validarPassword2();
        break;
        case "password2":
          validarPassword2();
        break;
        case "correo":
          validarCampo(expresiones.correo, e.target , e.target.name);
        break;
        case "telefono":
          validarCampo(expresiones.password, e.target , e.target.name);
        break;
    }
}
$inputs.forEach((input)=>{
    input.addEventListener('keyup' , validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

$formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    let terminos = document.getElementById('terminos');
    if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked){
    let datos = new FormData($formulario);
    
    
    /*let usuario = datos.get('usuario');
    let nombre = datos.get('nombre');
    let password = datos.get('password');
    let correo = datos.get('correo');
    let telefono = datos.get('telefono');
    let terminos = datos.get('terminos');*/

        console.log(datos.get('usuario'));
        console.log(datos.get('terminos'));
        $formulario.reset();
        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo')
        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono)=>{
            icono.classList.remove('formulario__grupo-correcto');
        })

        fetch('js/registrar.php',{
            method: 'POST',
            body: datos
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTimeout(() => {
                    document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
                },500);

                if(data === "creado"){
                    setTimeout(()=>{
                        alert("el usuario se creo correctamente");
                    },1000);
                
                    /*setTimeout(() => {
                        window.location="../login.html";
                    }, 4000);*/
                }else if(data === "errorexistente"){
                    setTimeout(()=>{
                        alert("el usuario ya esta creado");
                    },1000);
                }
            })
   }else{
    document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
   }
});

/*const $ terminos = document.getElementById('terminos');
if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && $terminos.checked){
    // $formulario.reset();
    document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo')
    document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
    setTimeout(() => {
        document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
    }, 3000);
    document.querySelectorAll('.formulario__grupo-correcto').forEach((icono)=>{
        icono.classList.remove('formulario__grupo-correcto');
    })
}else{
    e.preventDefault();
    document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
}*/