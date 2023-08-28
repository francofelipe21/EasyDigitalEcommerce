var array=[];
var bool_valid = true;

function unique_email(){
    fetch("",{
        method:"POST",
        body: new FormData(document.getElementById("form")),
        headers:{
            'X-CSRFToken': getCookie('csrftoken'),
            "X-Requested-With": "XMLHttpRequest"
        }}).then(function (response){
            return response.json();}).then(
                function (data){
                    if(data.valid === false){
                        document.getElementById('id_email').classList.add('is-invalid');
                        document.getElementById("succes_email").innerHTML= "";
                        document.getElementById("error_email").innerHTML= "Este correo electrónico ya cuenta con una cuenta en esta plataforma";
                        array.push("Correo electrónico");
                        bool_valid = false;
                        show_errors_list();
                        stop();
                    }
                    else{
                        document.getElementById('id_email').classList.remove('is-invalid');
                        document.getElementById('id_email').classList.add('is-valid');
                        document.getElementById("succes_email").innerHTML= "Correo válido";
                        document.getElementById("error_email").innerHTML= "";
                    }});}

function show_errors_list(){
    let errors_list='<ul>';
    for (let error in array){
        errors_list = errors_list + '<li>' + array[error] + '</li>';
    }
    array = [];
    errors_list = errors_list + '</ul>';
    $("#alert_form").remove();
        let code='<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">\n' +
            '  <symbol id="check-circle-fill" viewBox="0 0 16 16">\n' +
            '    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>\n' +
            '  </symbol>\n' +
            '  <symbol id="info-fill" viewBox="0 0 16 16">\n' +
            '    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>\n' +
            '  </symbol>\n' +
            '  <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">\n' +
            '    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>\n' +
            '  </symbol>\n' +
            '</svg><div id="alert_form" style="width: 100%; margin-top: 25px" class="alert alert-danger d-flex align-items-center alert-dismissible fade show" role="alert"><svg class="bi flex-shrink-0 me-2" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>' +
            '<div>Errores en los campos:</div>' +
            errors_list +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
        document.getElementById("form").insertAdjacentHTML("beforeend", code);
}

$('#form').submit(function (e) {
    let first_name = document.getElementById("id_first_name").value;
    let last_name = document.getElementById("id_last_name").value;
    let email = document.getElementById("id_email").value;
    let phonenumber = document.getElementById("id_phonenumber").value;
    let password1 = document.getElementById("id_password1").value;
    let password2 = document.getElementById("id_password2").value;
    let pattern_name = new RegExp("[0-9]", "i");
    let pattern_email = new RegExp("@", "");
    let pattern_phonenumber = new RegExp("^[0-9]{8}$", "i");
    let pattern_not_password = new RegExp("^[0-9]*$", "i");
    if (first_name.length === 0 || first_name.length > 50 || pattern_name.test(first_name)) {
        array.push("Nombre");
        document.getElementById('id_first_name').classList.add('is-invalid');
        document.getElementById("succes_first_name").innerHTML = "";
        bool_valid = false;
        if (first_name.length === 0) {
            document.getElementById("error_first_name").innerHTML = "El nombre es obligatorio";
        }
        if (first_name.length > 50) {
            document.getElementById("error_first_name").innerHTML = "El nombre tiene un máximo de 50 carácteres";
        }
        if (pattern_name.test(first_name)) {
            document.getElementById("error_first_name").innerHTML = "El nombre no puede contener números";
        }
    }
    else {
        document.getElementById('id_first_name').classList.remove('is-invalid');
        document.getElementById('id_first_name').classList.add('is-valid');
        document.getElementById("succes_first_name").innerHTML = "Nombre válido";
        document.getElementById("error_first_name").innerHTML = "";
    }
    if (last_name.length === 0 || last_name.length > 50 || pattern_name.test(last_name)) {
        array.push("Apellido");
        document.getElementById('id_last_name').classList.add('is-invalid');
        document.getElementById("succes_last_name").innerHTML = "";
        bool_valid = false;
        if (last_name.length === 0) {
            document.getElementById("error_last_name").innerHTML = "El apellido es obligatorio";
        }
        if (last_name.length > 50) {
            document.getElementById("error_last_name").innerHTML = "El apellido tiene un máximo de 50 carácteres";
        }
        if (pattern_name.test(last_name)) {
            document.getElementById("error_last_name").innerHTML = "El apellido no puede contener números";
        }
    }
    else {
        document.getElementById('id_last_name').classList.remove('is-invalid');
        document.getElementById('id_last_name').classList.add('is-valid');
        document.getElementById("succes_last_name").innerHTML = "Apellido válido";
        document.getElementById("error_last_name").innerHTML = "";
    }
    if (phonenumber.length  > 0 ) {
        if(phonenumber.length !== 8 || !pattern_phonenumber.test(phonenumber)){
            array.push("Número de celular");
            document.getElementById('id_phonenumber').classList.add('is-invalid');
            bool_valid = false;
            if (phonenumber.length !== 8) {
                document.getElementById("error_phonenumber").innerHTML = "El número de contacto debe ser de exactamente 8 números";
            }
            if (!pattern_phonenumber.test(phonenumber)) {
                document.getElementById("error_phonenumber").innerHTML = "El número de contacto añadido es inválido";
            }
        }
        else{
            document.getElementById('id_phonenumber').classList.remove('is-invalid');
            document.getElementById('id_phonenumber').classList.add('is-valid');
            document.getElementById("error_phonenumber").innerHTML = "";
        }
    }
    else {
        document.getElementById('id_phonenumber').classList.remove('is-invalid');
        document.getElementById('id_phonenumber').classList.add('is-valid');
        document.getElementById("error_phonenumber").innerHTML = "";
    }
    if (document.querySelector('input[name=personal_location]:checked') === null) {
        array.push("Ubicación personal");
        bool_valid = false;
        document.getElementById("error_personal_location").innerHTML = "Debe contestar esta pregunta";
    }
    else {
        document.getElementById("succes_personal_location").innerHTML = "Respondida";
        document.getElementById("error_personal_location").innerHTML = "";
    }
    if ($("#t_u_0").prop('checked') === false && $("#t_u_1").prop('checked') === false) {
        array.push("Tipo de usuario");
        bool_valid = false;
        document.getElementById("error_type_user").innerHTML = "Debe contestar esta pregunta";
        document.getElementById("succes_type_user").innerHTML = "";
    }
    else {
        document.getElementById("succes_type_user").innerHTML = "Respondida";
        document.getElementById("error_type_user").innerHTML = "";
    }
    if (password1 !== password2 || password1.length < 8 || pattern_not_password.test(password1) || password2.length < 8 || pattern_not_password.test(password2)) {
        array.push("Contraseña");
        document.getElementById('id_password1').classList.remove('is-valid');
        document.getElementById('id_password2').classList.remove('is-valid');
        document.getElementById('id_password1').classList.add('is-invalid');
        document.getElementById('id_password2').classList.add('is-invalid');
        document.getElementById('error_password2').innerHTML = "";
        if (password1 !== password2) {
            document.getElementById('error_password2').innerHTML = "Las contraseñas no coinciden";
        }
        bool_valid = false;
    }
    else {
        document.getElementById('error_password2').innerHTML = "";
        document.getElementById('id_password1').classList.remove('is-invalid');
        document.getElementById('id_password1').classList.add('is-valid');
        document.getElementById('id_password2').classList.remove('is-invalid');
        document.getElementById('id_password2').classList.add('is-valid');
    }
    if ($("#t_u_1").prop('checked')) {
        if (document.querySelector('input[name=ask_existence_trade_name]:checked') === null) {
            array.push("Nombre comercial");
            bool_valid = false;
            document.getElementById("error_ask_existence_trade_name").innerHTML = "Debe contestar esta pregunta";
            document.getElementById("succes_ask_existence_trade_name").innerHTML = "";
        }
        else {
            document.getElementById("error_ask_existence_trade_name").innerHTML = "";
            document.getElementById("succes_ask_existence_trade_name").innerHTML = "Respondida";
            if (document.querySelector('input[name=ask_existence_trade_name]:checked').value === "yes") {
                let trade_name = document.getElementById("id_ask_trade_name").value;
                if (trade_name.length === 0) {
                    array.push("Nombre comercial");
                    document.getElementById("id_ask_trade_name").classList.add("is-invalid");
                    document.getElementById("id_ask_trade_name").classList.remove("is-valid");
                } else {
                    document.getElementById("id_ask_trade_name").classList.add("is-valid");
                    document.getElementById("id_ask_trade_name").classList.remove("is-invalid");
                }
            }
        }
        if (document.querySelector('input[name=ask_personal_trade_location]:checked') === null) {
            array.push("Ubicación comercial");
            bool_valid = false;
            document.getElementById("error_ask_personal_trade_location").innerHTML = "Debe contestar esta pregunta";
            document.getElementById("succes_ask_personal_trade_location").innerHTML = "";
        }
        else {
            document.getElementById("error_ask_personal_trade_location").innerHTML = "";
            document.getElementById("succes_ask_personal_trade_location").innerHTML = "Respondida";
            if (document.querySelector('input[name=ask_branch]:checked') === null) {
                array.push("Ubicación comercial");
                bool_valid = false;
                document.getElementById("error_ask_branch").innerHTML = "Debe contestar esta pregunta";
                document.getElementById("succes_ask_branch").innerHTML = "";
            }
            else {
                document.getElementById("error_ask_branch").innerHTML = "";
                document.getElementById("succes_ask_branch").innerHTML = "Respondida";
                if($("#id_ask_branch_0").prop('checked')){
                    let number_branch_office = document.getElementById("id_number_branch_office").value;
                    if(Number(number_branch_office) === 0){
                        array.push("Ubicación comercial");
                        document.getElementById("error_trade_location_map").innerHTML = "Debe indicar al menos una sucursal";
                    }
                    else {
                        document.getElementById("error_trade_location_map").innerHTML = "";
                    }
                }
                else{
                    document.getElementById("error_ask_branch").innerHTML = "";
                }
            }
        }
        if (document.querySelector('input[name=div_ask_zone]:checked') === null){
            array.push("Zona de operación");
            bool_valid=false;
            document.getElementById("error_ask_zone").innerHTML = "Debe contestar esta pregunta";
            document.getElementById("succes_ask_zone").innerHTML = "";
        }
        else{
            document.getElementById("error_ask_zone").innerHTML = "";
            document.getElementById("succes_ask_zone").innerHTML = "Respondida";
            if($("#id_zone_0").prop('checked')){
                if (document.querySelector('input[name=radio_country_or_commune]:checked') === null){
                    array.push("Zona de operación");
                    bool_valid = false;
                    document.getElementById("error_radio_country_commune").innerHTML = "Debe contestar esta pregunta" ;
                    document.getElementById("succes_radio_country_commune").innerHTML = "" ;
                }
                else{
                    document.getElementById("succes_radio_country_commune").innerHTML = "Respondida" ;
                    document.getElementById("error_radio_country_commune").innerHTML = "" ;
                }
            }
        }
        if (document.querySelector('input[name=ask_schedule]:checked') === null){
            array.push("Horario de atención");
            bool_valid=false;
            document.getElementById("error_ask_schedule").innerHTML = "Debe contestar esta pregunta";
            document.getElementById("succes_ask_schedule").innerHTML = "";
        }
        else{
            document.getElementById("error_ask_schedule").innerHTML = "";
            document.getElementById("succes_ask_schedule").innerHTML = "Respondida";
        }
    }
    if (email.length === 0 || email.length > 255 || !pattern_email.test(email)) {
        array.push("Correo electrónico");
        document.getElementById('id_email').classList.add('is-invalid');
        document.getElementById("succes_email").innerHTML = "";
        bool_valid = false;
        if (email.length === 0) {
            document.getElementById("error_email").innerHTML = "El correo electrónico es obligatorio";
        }
        if (email.length > 255) {
            document.getElementById("error_email").innerHTML = "El correo eletrónico no puede ecceder los 255 carácteres";
        }
        if (!pattern_email.test(email)) {
            document.getElementById("error_email").innerHTML = "El correo electrónico añadido es inválido";
        }
    }
    else {
        unique_email();
    }
    if(array.length > 0){
        show_errors_list();
        return false;
    }
    return true;
});