function AvisarInicioSesion(){
    let code=' <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">\n' +
        '<symbol id="info-fill" viewBox="0 0 16 16">\n' +
        '<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>\n' +
        '</symbol>\n' +
        '</svg>\n' +
        '<div class="alert alert-primary d-flex align-items-center" role="alert">\n' +
        '<svg class="bi flex-shrink-0 me-2" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg>\n' +
        'No ha iniciado sesión o no es un usuario de tipo "cliente"\n' +
        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>\n' +
        '</div>';
    document.getElementById("header").insertAdjacentHTML("afterend",code);
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}