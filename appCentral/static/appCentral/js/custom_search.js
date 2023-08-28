var data=JSON.parse(document.getElementById("types_categories_subcategories").textContent);
var options_type_good=""
var options_category=""
var options_subcategory="";
var existence_custom_search_map=false;
var existence_custom_output_map=false;
var datos;


function run_query(){
    fetch("",{
        method:"POST",
        body: new FormData(document.getElementById("dynamic_query_form")),
        headers:{
            'X-CSRFToken': getCookie('csrftoken'),
            "X-Requested-With": "XMLHttpRequest"
        }
    }).then(
        function (response){
            return response.json();
        }).then(
            function (data){
                if(data.error.length > 0){
                    for(let i=0; i<data.error.length; i++){
                        document.getElementById("dynamic_query_form").insertAdjacentHTML("beforebegin",'<div class="alert alert-danger d-flex align-items-center" role="alert">\n' +
                                '  <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>\n' +
                                '  <div>\n' +
                                data.error[i] +
                                '  </div>\n' +
                                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'+
                                '</div>')
                    }
                }
                else{
                    remove_custom_output_map();
                    remove_goods_list();
                    if(data.type === 'map') {
                        show_custom_output_map(data);
                    }
                    if(data.type === 'list') {
                        add_goods_list(data.goods);
                    }
                }
                })}

function remove_goods_list(){
    $("#goods_list").remove();
}

function add_goods_list(info){
    let file="<div id='goods_list' class='container'>";
    for(let i=0; i<info.length; i++){
        file = file+'<div class="card mb-3" style="max-width: 100%;">\n' +
            '<div class="row g-0">\n' +
            '<div class="col-md-4">\n' +
            '<img src="'+info[i].url+'" class="img-fluid rounded-start" alt="..."></div>\n' +
            '<div class="col-md-6">\n' +
            '<div class="card-body">\n' +
            '<h5 class="card-title">Nombre: '+info[i].name+'</h5>\n' +
            '<p class="card-text">Precio: $'+info[i].price+' el '+info[i].unit_measurement+'</p>\n' +
            '<p class="card-text">Descripción: '+info[i].description+'</p></div></div>\n' +
            '<div class="col-md-2">\n' +
            '<div class="row">\n' +
            '<div class="card" style="height: 50%; text-align: center">\n';
        if(info[i].logged){
            file = file + '<a href="'+ info[i].link +'" class="bi bi-cart-plus" style="user-select: none; text-decoration: none">';
        }
        else{
            file = file + '<a href="#" onclick="AvisarInicioSesion();" class="bi bi-cart-plus" style="user-select: none; text-decoration: none">';
        }
        file = file +'<div class="card-body">\n' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">\n' +
            '<path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>\n' +
            '<path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>\n' +
            '</svg></div>\n' +
            '<div class="card-footer">\n' +
            'Comprar</div></a></div></div>\n' +
            '<div class="row"><div class="card" style="height: 50%; text-align: center">\n' +
            '<div class="card-header">\n' +
            'Calificación del producto</div>\n' +
            '<div class="card-body">'+info[i].mark+'</div></div></div></div></div></div>';
    }
    file=file+"</div>"
    document.getElementById("button_form").insertAdjacentHTML("afterend",file)
}

function remove_custom_output_map(){
    $("#custom_output_map").remove();
    existence_custom_search_map=false;
}

function show_custom_output_map(info){
    if(!existence_custom_search_map){
        existence_custom_search_map=true;
        datos= info;
        let iframe_map='<iframe id="custom_output_map" src="leaflet_custom_output_map" width='+window.innerWidth*0.8+' height= '+window.innerHeight*0.8+' style="margin-left: 10% ;max-width: 100%; box-sizing: border-box; margin-top: 25px; margin-bottom: 5%"></iframe>';
        document.getElementById("button_form").insertAdjacentHTML("afterend", iframe_map);
    }
}

function custom_search_map(){
    remove_custom_output_map();
    remove_custom_search_map();
    if (!existence_custom_search_map) {
        existence_custom_search_map=true;
        let iframe_map='<iframe id="custom_search_map" src="leaflet_map_custom_search" width='+window.innerWidth+' height= '+window.innerHeight+' style="max-width: 100%; box-sizing: border-box; margin-top: 25px"></iframe><input hidden id="latitude" name="latitude" type="text"><input hidden id="longitude" name="longitude" type="text">';
        document.querySelector("#filter_search_container").insertAdjacentHTML("beforeend",iframe_map);
    }
}

function ask_for_type_location(){
        if($("#geographic_coverage_area_with_personal_location").prop('checked')) {
                let code = '<div class="row" id="ask_type_location" style="margin-top: 25px">' +
                    '<div class="col-md-6 mb-3">' +
                    '<div class="form-check">\n' +
                    '  <input onclick="remove_custom_search_map();" class="form-check-input" type="radio" name="type_location" id="personal" value="personal" checked>\n' +
                    '  <label class="form-check-label" for="type_location">\n' +
                    'Sólo mostrar a los proveedores cuya zona de operación llegue a mi ubicación personal' +
                    '  </label>\n' +
                    '</div>' +
                    '</div>' +
                    '<div class="col-md-6 mb-3">' +
                    '<div class="form-check">\n' +
                    '  <input onclick="custom_search_map();" class="form-check-input" type="radio" name="type_location" id="other" value="other">\n' +
                    '  <label class="form-check-label" for="type_location">\n' +
                    'Sólo mostrar a los proveedores cuya zona de operación llegue a la ubicación a elegir en el mapa' +
                    '</label>\n' +
                    '</div>' +
                    '</div>' +
                    '</div>';
                document.querySelector("#filter_search_container").insertAdjacentHTML("beforeend", code);

        }
        else{
            $("#ask_type_location").remove();
            remove_custom_search_map();
        }
    }

    function remove_custom_search_map(){
        $("#custom_search_map").remove();
        existence_custom_search_map=false;
    }

    function slider_range(){
        if($("#office_hours").prop('checked')){
            let code='<div id="range_hours"><p>\n' +
                '  <label for="range">Rango horario de atención</label>\n' +
                '  <input type="text" id="range" name="range" readonly style="border:0; color:#f6931f; width: 100%">\n' +
                '</p>\n' +
                '<div id="slider-range"></div>' +
                '<div class="row" style="margin-top: 25px">' +
                '<p>Día/s de atención</p>'+
                '<div class="form-check col-md-2">\n' +
                '<input class="form-check-input" type="checkbox" value="lunes" id="lunes" name="lunes">\n' +
                '<label class="form-check-label" for="lunes">\n' +
                'Lunes\n' +
                '</label>\n' +
                '</div>'+
                '<div class="form-check col-md-2">\n' +
                '<input class="form-check-input" type="checkbox" value="lunes" id="martes" name="martes">\n' +
                '<label class="form-check-label" for="martes">\n' +
                'Martes\n' +
                '</label>\n' +
                '</div>'+
                '<div class="form-check col-md-2">\n' +
                '<input class="form-check-input" type="checkbox" value="lunes" id="miercoles" name="miercoles">\n' +
                '<label class="form-check-label" for="miercoles">\n' +
                'Miercoles\n' +
                '</label>\n' +
                '</div>'+
                '<div class="form-check col-md-2">\n' +
                '<input class="form-check-input" type="checkbox" value="lunes" id="jueves" name="jueves">\n' +
                '<label class="form-check-label" for="jueves">\n' +
                'Jueves\n' +
                '</label>\n' +
                '</div>'+
                '<div class="form-check col-md-2" >\n' +
                '<input class="form-check-input" type="checkbox" value="lunes" id="viernes" name="viernes">\n' +
                '<label class="form-check-label" for="viernes">\n' +
                'Viernes\n' +
                '</label>\n' +
                '</div>'+
                '<div class="form-check col-md-1">\n' +
                '<input class="form-check-input" type="checkbox" value="lunes" id="sabado" name="sabado">\n' +
                '<label class="form-check-label" for="sabado">\n' +
                'Sabado\n' +
                '</label>\n' +
                '</div>'+
                '<div class="form-check col-md-1">\n' +
                '<input class="form-check-input" type="checkbox" value="lunes" id="domingo" name="domingo">\n' +
                '<label class="form-check-label" for="domingo">\n' +
                'Domingo\n' +
                '</label></div></div></div>\n';
        document.querySelector("#filter_search_container").insertAdjacentHTML("beforeend",code);
        $(function(){
            $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 1439,
            values: [ 0, 1440 ],
            slide: function( event, ui ) {
                $( "#range" ).val( "Hora de inicio -> " + parseInt((ui.values[ 0 ]/60).toString()) +":"+ ui.values[ 0 ]%60 + " \t|\t Hora de termino -> "  + parseInt((ui.values[ 1 ]/60).toString()) +":"+ ui.values[ 1 ]%60 );
            }
    });
    $( "#range" ).val( "Hora de inicio-> " + parseInt(($( "#slider-range" ).slider( "values", 0 )/60).toString())+ ":"+parseInt(($( "#slider-range" ).slider( "values", 0 )%60).toString())+
      " \t|\t Hora de termino-> " +parseInt(($( "#slider-range" ).slider( "values", 1 )/60).toString())+ ":"+parseInt(($( "#slider-range" ).slider( "values", 1 )%60).toString()));
        });
        }
        else{
            $("#range_hours").remove();
        }
    }

    function checkStars(m,n){
        if( m < 2){
            if(document.getElementById("min_stars_quality").value > document.getElementById("max_stars_quality").value){
                document.getElementById("min_stars_quality").value = n + 1;
                document.getElementById("max_stars_quality").value = n + 1;
            }
        }
        else{
            if(document.getElementById("min_stars_puntuality").value > document.getElementById("max_stars_puntuality").value){
                document.getElementById("min_stars_puntuality").value = n + 1;
                document.getElementById("max_stars_puntuality").value = n + 1;
            }
        }
    }

    function fill_stars(n,m){
        let array=[["first_minimun_quality","second_minimun_quality","third_minimun_quality","fourth_minimun_quality","fifth_minimun_quality"],["first_maximun_quality","second_maximun_quality","third_maximun_quality","fourth_maximun_quality","fifth_maximun_quality"],["first_minimun_puntuality","second_minimun_puntuality","third_minimun_puntuality","fourth_minimun_puntuality","fifth_minimun_puntuality"],["first_maximun_puntuality","second_maximun_puntuality","third_maximun_puntuality","fourth_maximun_puntuality","fifth_maximun_puntuality"]];
        if(m === 0) {
            document.getElementById("min_stars_quality").value = n + 1;
        }
        if(m === 1) {
            document.getElementById("max_stars_quality").value = n + 1;
        }
        if(m === 2){
            document.getElementById("min_stars_puntuality").value=n+1;
        }
        if(m === 3){
            document.getElementById("max_stars_puntuality").value=n+1;
        }
        checkStars(m,n);
        if(document.getElementById(array[m][Number(n)]).classList.contains("star-checked") === false){
            for(let i=0; i<=n; i++){
                document.getElementById(array[m][Number(i)]).classList.add("star-checked");
                if(m%2===0){
                    document.getElementById(array[Number(m)+1][Number(i)]).classList.add("star-checked");
                }

            }

        }
        else{
            for(let i=Number(n)+1; i<5; i++){
                document.getElementById(array[m][Number(i)]).classList.remove("star-checked");
                if(m%2===1){
                    document.getElementById(array[Number(m)-1][Number(i)]).classList.remove("star-checked");
                }
            }
        }
    }

    function filter_puntuality(){
        if($("#puntuality").prop('checked')){
            let code=' <div class="row" id="amount_stars_puntuality">' +
                '<div class="col-md-4 mb-3"><label>Seleccione, si lo desea, la cantidad mínima de estrellas de los bienes, según la puntualidad de entrega, a mostrar en pantalla</label></div>'+
                '<div class="col-md-2 mb-3"><span onclick="fill_stars(0,2)" id="first_minimun_puntuality" class="fa star fa-star"></span>\n' +
                '  <span onclick="fill_stars(1,2)" class="fa fa-star star" id="second_minimun_puntuality"></span>\n' +
                '  <span onclick="fill_stars(2,2)" class="fa fa-star star" id="third_minimun_puntuality"></span>\n' +
                '  <span onclick="fill_stars(3,2)" class="fa fa-star star" id="fourth_minimun_puntuality"></span>\n' +
                '  <span onclick="fill_stars(4,2)" class="fa fa-star star" id="fifth_minimun_puntuality"></span></div>'+
                '<div class="col-md-4 mb-3"><label>Seleccione, si lo desea, la cantidad máxima de estrellas de los bienes, según la puntualidad de entrega, a mostrar en pantalla</label></div>'+
                '<div class="col-md-2 mb-3"><span onclick="fill_stars(0,3)" id="first_maximun_puntuality" class="fa star fa-star"></span>\n' +
                '  <span onclick="fill_stars(1,3)" class="fa fa-star star" id="second_maximun_puntuality"></span>\n' +
                '  <span onclick="fill_stars(2,3)" class="fa fa-star star" id="third_maximun_puntuality"></span>\n' +
                '  <span onclick="fill_stars(3,3)" class="fa fa-star star" id="fourth_maximun_puntuality"></span>\n' +
                '  <span onclick="fill_stars(4,3)" class="fa fa-star star" id="fifth_maximun_puntuality"></span></div>'+
                '<input id="min_stars_puntuality" name="min_stars_puntuality" type="number" hidden>' +
                '<input id="max_stars_puntuality" name="max_stars_puntuality" type="number" hidden>' +
                '</div>';
            document.querySelector("#filter_search_container").insertAdjacentHTML("beforeend",code);
        }
        else{
            $("#amount_stars_puntuality").remove();
        }
    }

    function filter_quality(){
        if($("#quality").prop('checked')){
            let code=' <div class="row" id="amount_stars_quality">' +
                '<div class="col-md-4 mb-3"><label>Seleccione, si lo desea, la cantidad mínima de estrellas de los bienes a mostrar en pantalla</label></div>'+
                '<div class="col-md-2 mb-3"><span onclick="fill_stars(0,0)" id="first_minimun_quality" class="fa star fa-star"></span>\n' +
                '  <span onclick="fill_stars(1,0)" class="fa fa-star star" id="second_minimun_quality"></span>\n' +
                '  <span onclick="fill_stars(2,0)" class="fa fa-star star" id="third_minimun_quality"></span>\n' +
                '  <span onclick="fill_stars(3,0)" class="fa fa-star star" id="fourth_minimun_quality"></span>\n' +
                '  <span onclick="fill_stars(4,0)" class="fa fa-star star" id="fifth_minimun_quality"></span></div>'+
                '<div class="col-md-4 mb-3"><label>Seleccione, si lo desea, la cantidad máxima de estrellas de los bienes a mostrar en pantalla</label></div>'+
                '<div class="col-md-2 mb-3"><span onclick="fill_stars(0,1)" id="first_maximun_quality" class="fa star fa-star"></span>\n' +
                '  <span onclick="fill_stars(1,1)" class="fa fa-star star" id="second_maximun_quality"></span>\n' +
                '  <span onclick="fill_stars(2,1)" class="fa fa-star star" id="third_maximun_quality"></span>\n' +
                '  <span onclick="fill_stars(3,1)" class="fa fa-star star" id="fourth_maximun_quality"></span>\n' +
                '  <span onclick="fill_stars(4,1)" class="fa fa-star star" id="fifth_maximun_quality"></span></div>'+
                '<input id="min_stars_quality" name="min_stars_quality" type="number" hidden>' +
                '<input id="max_stars_quality" name="max_stars_quality" type="number" hidden>' +
                '</div>';
            document.querySelector("#filter_search_container").insertAdjacentHTML("beforeend",code);
        }
        else{
            $("#amount_stars_quality").remove();
        }
    }

    function set_max_price(){
        document.getElementById("min_range_prices").setAttribute("max",document.getElementById("max_range_prices").value)
    }

    function set_min_price(){
        document.getElementById("max_range_prices").setAttribute("min",document.getElementById("min_range_prices").value)

    }

    function delete_max_price(){
        document.getElementById("max_range_prices").value=null;
        document.getElementById("min_range_prices").setAttribute("max","inf");
    }

    function delete_min_price(){
        document.getElementById("min_range_prices").value=null;
        document.getElementById("max_range_prices").setAttribute("min","0");
    }

    function filter_price() {
        if ($("#price").prop('checked')) {
            let code_range_prices = '<div id="id_range_prices" style="margin-top: 20px; text-align: center" class="row">' +
                '<div class="input-group mb-3">'+
                '<div class="col-md-3 mb-3"><label>Precio mínimo</label></div>' +
                '<div class="col-md-2 mb-3"><input min="0" id="min_range_prices" name="min_range_prices" onchange="set_min_price();" type="number" class="form-control"></div>' +
                '<span><a onclick="delete_min_price()" class="btn btn-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash2-fill" viewBox="0 0 16 16">\n' +
                '  <path d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z"/>\n' +
                '</svg></a></span>'+
                '<div class="col-md-3 mb-3"><label>Precio máximo</label></div>' +
                '<div class="col-md-2 mb-2"><input min="0" id="max_range_prices" name="max_range_prices" onclick="set_max_price();" type="number" class="form-control"></div>' +
                '<span><a onclick="delete_max_price()" class="btn btn-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash2-fill" viewBox="0 0 16 16">\n' +
                '  <path d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z"/>\n' +
                '</svg></a></span>'+
                '</div></div>';
            document.querySelector("#filter_search_container").insertAdjacentHTML("beforeend", code_range_prices);
        }
        else{
            $("#id_range_prices").remove();
        }
    }

    function update_select_subcategory() {
        let options=document.getElementById("options_subcategory").options;
        for(let i=0; i<=options.length; i++){
            options[i].remove();
        }
        for (let i = 0; i < data.length; i++) {
            if (data[i].type === "subcategory" && data[i].father === document.getElementById("options_category").options[document.getElementById("options_category").selectedIndex].text) {
                const option=document.createElement('option');
                option.value=data[i].name;
                option.text=data[i].name;
                document.getElementById("options_subcategory").appendChild(option);
            }
        }
    }

    function update_select_category(){
        let options=document.getElementById("options_category").options;
        for(let i=0; i<=options.length; i++){
            options[i].remove();
        }
        for (let i = 0; i < data.length; i++) {
            if (data[i].type === "category" && data[i].father === document.getElementById("options_type_good").options[document.getElementById("options_type_good").selectedIndex].text) {
                const option=document.createElement('option');
                option.value=data[i].name;
                option.text=data[i].name;
                document.getElementById("options_category").appendChild(option);
            }
        }
    }

    function get_code_select_switch(id, name, label_select, options, filter_type, id_switch, category_subcategory) {
        return '<div style="margin-top: 20px" class="row" id="filter_'+id+'" style="text-align: center">' +
                '<div class="col-md-4 mb-3">'+
                '<label>'+label_select+'</label>'+
                '</div>' +
                '<div class="col-md-3 mb-3">'+
                '<select onclick="'+category_subcategory+';" name="options_'+name+'" id ="options_'+id+'" class="form-select" aria-label="Default select example">\n'+
                options+
                '</select></div>' +
                '<div class="col-md-3 mb-3">'+
                filter_type+
                '</div>'+
                '<div class="col-md-2 mb-3">' +
                '<div class="form-check form-switch">\n'+
                '<input class="form-check-input" type="checkbox"  role="switch" onclick="filter_good()" name="'+id_switch+'" id="'+id_switch+'">\n' +
                '</div>'+
                '</div>' +
                '</div>';
    }

    function fill_options_category() {
        for (let i = 0; i < data.length; i++) {
            if (data[i].type === "category" && data[i].father === document.getElementById("options_type_good").options[document.getElementById("options_type_good").selectedIndex].text) {
                options_category=options_category+ "<option value='"+data[i].name+"'>" +data[i].name+"</option>";
            }
        }
    }

    function filter_good(){
        if($("#type_good").prop('checked') == false){
            $("#filter_type_good").remove();
            $("#filter_category").remove();
            $("#filter_subcategory").remove();
        }
        else{
            if($("#category").prop("checked") == false){
                $("#filter_category").remove();
                $("#filter_subcategory").remove();
            }
            else{
                if($("#subcategory").prop("checked") == false){
                    $("#filter_subcategory").remove();
                }
                else{
                    if (options_type_good.length==0) {
                        for (let i = 0; i < data.length; i++) {
                            if (data[i].type === "type_good") {
                                options_type_good=options_type_good+ "<option value='"+data[i].name+"'>" +data[i].name+"</option>";
                            }
                        }
                    }
                    if ($("#type_good").prop('checked') && $("#category").prop("checked")) {
                        options_category="";
                        fill_options_category();
                    }
                    if ($("#type_good").prop('checked') && $("#category").prop("checked") && $("#subcategory").prop("checked")) {
                        options_subcategory="";
                        for (let i = 0; i < data.length; i++) {
                            if (data[i].type === "subcategory" && data[i].father === document.getElementById("options_category").options[document.getElementById("options_category").selectedIndex].text) {
                                options_subcategory=options_subcategory+ "<option value='"+data[i].name+"'>" +data[i].name+"</option>";
                            }
                        }
                    }
                    let label_select="";
                    let options="";
                    let filter_type="";
                    let id_switch='';
                    let id="";
                    let code_select_type_good="";
                    let code_select_category="";
                    let code_select_subcategory="";
                    if ($("#subcategory").prop('checked')){
                        code_select_subcategory='<div class="row" id="filter_subcategory">' +
                            '<div class="col-md-4 mb-3">'+
                            '<label>Escoja la subcategoria a mostrar:</label>'+
                            '</div>' +
                            '<div class="col-md-3 mb-3">'+
                            '<select id="options_subcategory" name="options_subcategory" class="form-select" aria-label="Default select example">\n'+
                            options_subcategory+
                            '</select></div>' +
                            '</div>';
                        document.querySelector("#filter_search_container").insertAdjacentHTML("beforeend",code_select_subcategory);
                        return;
                    }
                    if ($("#category").prop('checked')){
                        id="category";
                        label_select="Escoja el tipo la categoría a mostrar:";
                        filter_type="Filtar por subcategoría";
                        id_switch='subcategory';
                        options=options_category;
                        code_select_category=get_code_select_switch(id, id,label_select,options,filter_type,id_switch,'update_select_subcategory()');
                        document.querySelector("#filter_search_container").insertAdjacentHTML("beforeend",code_select_category);
                        return;
                    }
                    if ($("#type_good").prop('checked')){
                        id="type_good"
                        label_select='Escoja el tipo de bien a mostrar:';
                        filter_type='Filtar por categoría';
                        id_switch='category';
                        options=options_type_good;
                        code_select_type_good=get_code_select_switch(id, id,label_select,options,filter_type,id_switch,'update_select_category()');
                        document.querySelector("#filter_search_container").insertAdjacentHTML("beforeend",code_select_type_good);
                        return;
                    }
                }
            }
        }
    }