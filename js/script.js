function validar(){
    var resultado_direccion = validar_direccion();
    var resultado_comuna = validar_comuna();
    var resultado_telefono = validar_telefono();
    var resultado_correo = validar_correo();
    var resultado_contrasena = validar_contrasena();
    var resultado_confirmacion = validar_confirmacion_contrasena();
    var resultado_sitioweb = validar_sitioweb();
    var resultado_aficion = validar_aficiones();
    var resultado = resultado_sitioweb && resultado_confirmacion && resultado_contrasena && resultado_direccion && resultado_comuna && resultado_telefono && resultado_correo && resultado_aficion;
    return resultado;
}

function validar_contrasena(){
    var input_contrasena = document.getElementById("input-password");
    var error_contrasena = document.getElementById("error-password");
    var numeros = false;
    var letras = false;
    var contrasena = input_contrasena.value;
    if (contrasena == ""){
        error_contrasena.innerHTML = "La contraseña es obligatoria";
        error_contrasena.className = "text-danger small";
        return false;
    }
    else if(contrasena.length < 3){
        error_contrasena.innerHTML = "La contraseña es muy Corta <br> * Minimo de 3 caracteres <br> * Maximo de 6 caracteres"
        error_contrasena.className = "text-danger small";
        return false;
    } else if(contrasena.length > 6){
        error_contrasena.innerHTML = "La contraseña es muy Larga <br> * Minimo de 3 caracteres <br> * Maximo de 6 caracteres"
        error_contrasena.className = "text-danger small";
        return false;
    }
    for (var i = 0; i < contrasena.length; i++) {
        var char = contrasena[i];
        if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
            letras = true;
        } else if(char >= "0" && char <= "9"){
            numeros = true;
        }
    }
    
    if (!letras || !numeros) {
        error_contrasena.innerHTML = "La contraseña debe contener letras y números";
        error_contrasena.className = "text-danger small";
        return false;
    }
    
    error_contrasena.innerHTML = "";
    return true;
}

function validar_confirmacion_contrasena(){
    var input_contrasena = document.getElementById("input-password");
    var input_confirmacion = document.getElementById("input-passwordverif");
    var error_confirmacion = document.getElementById("error-passwordverif");
    var contrasena = input_contrasena.value;
    var confirmacion = input_confirmacion.value;
    if (confirmacion !== contrasena){
        error_confirmacion.innerHTML = "La contraseña no coincide";
        error_confirmacion.className = "text-danger small";
        return false;
    } else {
        error_confirmacion.innerHTML = "";
        return true;
    }
}

function validar_direccion(){
    var input_direccion = document.getElementById("input-direccion");
    var error_direccion = document.getElementById("error-direccion");
    var direccion = input_direccion.value;
    if (direccion == ""){
        error_direccion.innerHTML = "La Direccion es Obligatoria";
        error_direccion.className = "text-danger small";
        return false;
    } else {
        error_direccion.innerHTML = "";
        return true;
    }
}

function validar_comuna(){
    var input_comuna = document.getElementById("select-comuna");
    var error_comuna = document.getElementById("error-comuna");
    var comuna = input_comuna.value;
    if (comuna == ""){
        error_comuna.innerHTML = "Porfavor seleccione una Comuna";
        error_comuna.className = "text-danger small";
        return false;
    } else {
        error_comuna.innerHTML = "";
        return true;
    }
}

function validar_telefono(){
    var input_telefono = document.getElementById("input-telefono");
    var error_telefono = document.getElementById("error-telefono");
    var telefono = input_telefono.value.trim();
    var pos_mas = telefono.indexOf("+569");
    var numtelf = 0;
    if (pos_mas === 0){
        for (var i = pos_mas + 4; i < telefono.length; i++ ) {
            if (telefono[i] === ' '){
                continue;
            }
            if (!isNaN(telefono[i])) {
                numtelf++;
            } else {
                break;
            }
        }
        if (numtelf === 8) {
            error_telefono.innerHTML = "";
            return true;
        } else {
            error_telefono.innerHTML = "Por favor ingrese un número de teléfono con formato correcto (+569 xxxx xxxx)";
            error_telefono.className = "text-danger small";
            return false;
        }
    } else if (telefono == ""){
        error_telefono.innerHTML = "Por favor ingrese un número de teléfono";
        error_telefono.className = "text-danger small";
        return false;
    } else {
        error_telefono.innerHTML = "Por favor ingrese un número de teléfono con formato correcto (+569 xxxx xxxx)";
        error_telefono.className = "text-danger small";
        return false;
    }
}


function validar_correo() {
    var input_correo = document.getElementById("input-correo");
    var error_correo = document.getElementById("error-correo");
    var correo = input_correo.value;
    var pos_arroba = correo.indexOf("@");
    var pos_punto = correo.lastIndexOf(".");
    var arr_correo = correo.split(".");
    var extension = arr_correo[arr_correo.length - 1];           
    if (pos_arroba > 0 && pos_punto > pos_arroba && (extension.length > 1 && extension.length <= 3) ) {
        error_correo.innerHTML = "";
        return true;
    } else if(correo == ""){
        error_correo.innerHTML = "El correo es obligatorio";
        error_correo.className = "text-danger small";
        return false;
    } else {
        error_correo.innerHTML = "Porfavor ingrese un correo con formato correcto";
        error_correo.className = "text-danger small"
        return false;
    }           
}

function validar_sitioweb() {
    var input_paginaweb = document.getElementById("input-paginaweb");
    var error_paginaweb = document.getElementById("error-paginaweb");
    var paginaweb = input_paginaweb.value;
    var https = paginaweb.startsWith("https://");
    var pos_https = paginaweb.lastIndexOf("https://");
    var pos_dot = paginaweb.lastIndexOf(".");

    if(https && pos_dot > pos_https + 8) {
        var dominio = paginaweb.substring(pos_dot + 1);
        if (dominio.length >= 2 && dominio.length <=3) {
            error_paginaweb.innerHTML = "";
            return true;
        } else  {
            error_paginaweb.innerHTML = "El dominio tiene un minimo de 2 y un maximo de 3 caracteres";
            error_paginaweb.className = "text-danger small";
            return false;
        }
    } else if (paginaweb == "") {
        error_paginaweb.innerHTML = "";
        return true;
    } else {
        error_paginaweb.innerHTML = "Porfavor ingrese su sitio web con el formato correcto (https://) y un dominio despues del punto";
        error_paginaweb.className = "text-danger small";
        return false;
    }
}

function validar_aficiones() {
    var lista_aficiones = document.getElementById("lista-aficiones").getElementsByTagName("li");
    var error_aficion = document.getElementById("error-aficion2");

    if (lista_aficiones.length < 2){
        error_aficion.innerHTML = "Debe agregar al menos 2 aficiones diferentes.";
        error_aficion.className = "text-danger small";
        return false;
    } else {
        error_aficion.innerHTML = "";
        return true;
    }
}

var aficiones = [];

function agregar_aficion() {

    var input_aficion = document.getElementById("input-aficion");
    var error_aficion = document.getElementById("error-aficion");
    var aficion = input_aficion.value;
    var aficion_lista = document.createElement("li");
    
    if (aficion == '') {
        error_aficion.innerHTML = "Porfavor Ingrese una Aficion o Pasatiempo";
        error_aficion.className = 'text-danger small';
        return;

    } else {
        error_aficion.innerHTML = "";
        aficion_lista.textContent = aficion;
        aficion_lista.classList.add("list-group-item");
        document.getElementById("lista-aficiones").appendChild(aficion_lista);
        aficiones.push(aficion);
        console.log(aficiones);
    }
}