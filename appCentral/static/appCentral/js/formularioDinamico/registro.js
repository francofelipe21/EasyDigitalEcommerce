var existence_personal_map=false;
var existence_trade_map=false;
var lat_personal_location;
var lng_personal_location;
var array_markers_trade_locations;
var counter_branch_office=0;

function writeTradeCoordinatedFromMap(){
    array_markers_trade_locations=document.getElementById("trade_location_map").contentWindow.map._layers;
    for(var i=0; i<counter_branch_office; i++){
        $("#id_trade_latitude"+i).remove();
        $("#id_trade_longitude"+i).remove();
    }
    $("#id_number_branch_office").remove();
    counter_branch_office=0;
    for (const m in array_markers_trade_locations) {
        if (m !== 25 && array_markers_trade_locations[m]._latlng!== undefined){
            trade_latitude=' <input type="text" hidden="true" name="trade_latitude'+counter_branch_office+'" class="textinput textInput form-control" id="id_trade_latitude'+counter_branch_office+'">';
            trade_longitude=' <input type="text" hidden="true" name="trade_longitude'+counter_branch_office+'" class="textinput textInput form-control" id="id_trade_longitude'+counter_branch_office+'">';
            document.querySelector("#form").insertAdjacentHTML("beforeend",trade_latitude);
            document.querySelector("#form").insertAdjacentHTML("beforeend",trade_longitude);
            document.querySelector("#id_trade_latitude"+counter_branch_office).value=array_markers_trade_locations[m]._latlng.lat;
            document.querySelector("#id_trade_longitude"+counter_branch_office).value=array_markers_trade_locations[m]._latlng.lng;
            counter_branch_office=counter_branch_office+1;
        }
    }
    number_branch_office=' <input type="text" hidden="true" name="number_branch_office" class="textinput textInput form-control" id="id_number_branch_office">';
    document.querySelector("#form").insertAdjacentHTML("beforeend", number_branch_office);
    document.querySelector("#id_number_branch_office").value = counter_branch_office;
    console.log(document.querySelector("#id_number_branch_office").value);
}

function writePersonalCoordinatedFromMap() {
    lng_personal_location=document.getElementById("personal_location_map").contentWindow.marker_actual._latlng.lng;
    lat_personal_location=document.getElementById("personal_location_map").contentWindow.marker_actual._latlng.lat;
    document.querySelector("#id_personal_latitude").value = lat_personal_location;
    document.querySelector("#id_personal_longitude").value = lng_personal_location;
}

function show_map_personal_location(){
    let width;
    width=window.innerWidth;
    let height;
    height=window.innerHeight;
    if($("#id_personal_location_0").prop("checked") && !existence_personal_map){
        existence_personal_map=true;
        let iframe_map;
        let html_personal_latitude;
        iframe_map='<iframe id="personal_location_map" ondrag="clickMapPersonalLocation()" onload="clickMapPersonalLocation()" src="leaflet_map_personal_location" width='+width+' height= '+height+' style="max-width: 100%; max-height: 90vh; box-sizing: border-box;"></iframe>'
        personal_latitude=' <input type="text" hidden="true" name="personal_latitude" class="textinput textInput form-control" id="id_personal_latitude">';
        personal_longitude=' <input type="text" hidden="true" name="personal_longitude" class="textinput textInput form-control" id="id_personal_longitude">';
        document.querySelector("#div_id_personal_location").insertAdjacentHTML("afterend", iframe_map);
        document.querySelector("#form").insertAdjacentHTML("beforeend",personal_latitude);
        document.querySelector("#form").insertAdjacentHTML("beforeend",personal_longitude);
    }
    if($("#id_personal_location_1").prop("checked")){
        existence_personal_map=false;
        if(document.querySelector("#personal_location_map") !== null){
            document.querySelector("#personal_location_map").remove();
            document.querySelector("#id_personal_latitude").remove();
            document.querySelector("#id_personal_longitude").remove();
        }

    }
}

function clickMapPersonalLocation(){
    document.getElementById("personal_location_map").contentWindow.document.body.onclick = function() {
        writePersonalCoordinatedFromMap();
    }
}

function seleccionarTodasComunasProvinciaMelipilla(){
    if ($("#provincia_melipilla").is(":checked")) {
        $("#melipilla").prop('checked', true);
        $("#alhue").prop('checked', true);
        $("#curacavi").prop('checked', true);
        $("#maria_pinto").prop('checked', true);
        $("#san_pedro").prop('checked', true);
    }
    else{
        $("#melipilla").prop('checked', false);
        $("#alhue").prop('checked', false);
        $("#curacavi").prop('checked', false);
        $("#maria_pinto").prop('checked', false);
        $("#san_pedro").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaMaipo(){
    if ($("#provincia_maipo").is(":checked")) {
        $("#san_bernardo").prop('checked', true);
        $("#buin").prop('checked', true);
        $("#calera_de_tango").prop('checked', true);
        $("#paine").prop('checked', true);
    }
    else{
        $("#san_bernardo").prop('checked', false);
        $("#buin").prop('checked', false);
        $("#calera_de_tango").prop('checked', false);
        $("#paine").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaCordillera() {
    if ($("#provincia_cordillera").is(":checked")) {
        $("#puente_alto").prop('checked', true);
        $("#pirque").prop('checked', true);
        $("#san_jose_de_maipo").prop('checked', true);
    }
    else{
        $("#puente_alto").prop('checked', false);
        $("#pirque").prop('checked', false);
        $("#san_jose_de_maipo").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaChacabuco(){
    if($("#provincia_chacabuco").is(":checked")) {
        $("#colina").prop('checked', true);
        $("#lampa").prop('checked', true);
        $("#tiltil").prop('checked', true);
    }
    else{
        $("#colina").prop('checked', false);
        $("#lampa").prop('checked', false);
        $("#tiltil").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaSantiago(){
    if ($("#provincia_santiago").is(":checked")) {
        $("#la_pintana").prop('checked', true);
        $("#la_reina").prop('checked', true);
        $("#las_condes").prop('checked', true);
        $("#lo_barnechea").prop('checked', true);
        $("#lo_espejo").prop('checked', true);
        $("#lo_prado").prop('checked', true);
        $("#macul").prop('checked', true);
        $("#maipu").prop('checked', true);
        $("#nnunnoa").prop('checked', true);
        $("#pedro_aguirre_cerda").prop('checked', true);
        $("#pennalolen").prop('checked', true);
        $("#providencia").prop('checked', true);
        $("#pudahuel").prop('checked', true);
        $("#quilicura").prop('checked', true);
        $("#quinta_normal").prop('checked', true);
        $("#recoleta").prop('checked', true);
        $("#renca").prop('checked', true);
        $("#san_joaquin").prop('checked', true);
        $("#san_miguel").prop('checked', true);
        $("#san_ramon").prop('checked', true);
        $("#vitacura").prop('checked', true);
        $("#santiago").prop('checked', true);
        $("#cerrillos").prop('checked', true);
        $("#cerro_navia").prop('checked', true);
        $("#conchali").prop('checked', true);
        $("#el_bosque").prop('checked', true);
        $("#estacion_central").prop('checked', true);
        $("#huechuraba").prop('checked', true);
        $("#independencia").prop('checked', true);
        $("#la_cisterna").prop('checked', true);
        $("#la_florida").prop('checked', true);
        $("#la_granja").prop('checked', true);
    }
    else{
        $("#la_pintana").prop('checked', false);
        $("#la_reina").prop('checked', false);
        $("#las_condes").prop('checked', false);
        $("#lo_barnechea").prop('checked', false);
        $("#lo_espejo").prop('checked', false);
        $("#lo_prado").prop('checked', false);
        $("#macul").prop('checked', false);
        $("#maipu").prop('checked', false);
        $("#nnunnoa").prop('checked', false);
        $("#pedro_aguirre_cerda").prop('checked', false);
        $("#pennalolen").prop('checked', false);
        $("#providencia").prop('checked', false);
        $("#pudahuel").prop('checked', false);
        $("#quilicura").prop('checked', false);
        $("#quinta_normal").prop('checked', false);
        $("#recoleta").prop('checked', false);
        $("#renca").prop('checked', false);
        $("#san_joaquin").prop('checked', false);
        $("#san_miguel").prop('checked', false);
        $("#san_ramon").prop('checked', false);
        $("#vitacura").prop('checked', false);
        $("#santiago").prop('checked', false);
        $("#cerrillos").prop('checked', false);
        $("#cerro_navia").prop('checked', false);
        $("#conchali").prop('checked', false);
        $("#el_bosque").prop('checked', false);
        $("#estacion_central").prop('checked', false);
        $("#huechuraba").prop('checked', false);
        $("#independencia").prop('checked', false);
        $("#la_cisterna").prop('checked', false);
        $("#la_florida").prop('checked', false);
        $("#la_granja").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaTalagante() {
    if ($("#provincia_talagante").is(":checked")) {
        $("#talagante").prop('checked', true);
        $("#isla_de_maipo").prop('checked', true);
        $("#el_monte").prop('checked', true);
        $("#padre_hurtado").prop('checked', true);
        $("#pennaflor").prop('checked', true);
    }
    else{
        $("#talagante").prop('checked', false);
        $("#isla_de_maipo").prop('checked', false);
        $("#el_monte").prop('checked', false);
        $("#padre_hurtado").prop('checked', false);
        $("#pennaflor").prop('checked', false);
    }
}

function seleccionarTodasComunasRegionRM(){
    if($("#region_rm").is(":checked")){
        $("#provincia_talagante").prop("checked",true);
        $("#provincia_santiago").prop("checked",true);
        $("#provincia_chacabuco").prop("checked",true);
        $("#provincia_cordillera").prop("checked",true);
        $("#provincia_maipo").prop("checked",true);
        $("#provincia_melipilla").prop("checked",true);
    }
    else{
        $("#provincia_talagante").prop("checked",false);
        $("#provincia_santiago").prop("checked",false);
        $("#provincia_chacabuco").prop("checked",false);
        $("#provincia_cordillera").prop("checked",false);
        $("#provincia_maipo").prop("checked",false);
        $("#provincia_melipilla").prop("checked",false);
    }
    seleccionarTodasComunasProvinciaTalagante();
    seleccionarTodasComunasProvinciaSantiago();
    seleccionarTodasComunasProvinciaChacabuco();
    seleccionarTodasComunasProvinciaCordillera();
    seleccionarTodasComunasProvinciaMaipo();
    seleccionarTodasComunasProvinciaMelipilla();
}

function mostrarComunasMetropolitana(){
    if ($("#metropolitana").select && document.querySelector("#comunas_metropolitana")==null){
          let aux = '<div id="comunas_metropolitana" class="form-group">' +
         '<label for="comunas_metropolitana" class=" requiredField">' +
         '2°) Seleccione la/s comuna/s en la/s que despacha' +
         '<span class="asteriskField">*</span>' +
         '</label>' +
          '<div class="container" id="id_comunas_metropolitana">' +
              '<div class="row">' +
              '    <div class="col bg-dark bg-opacity-80" style="text-align: center"><b style="color: white" >RM Región Metropolitana de Santiago<br><input id="region_rm" onclick="seleccionarTodasComunasRegionRM();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
              '</div>'+
              '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Talagante<br><input id="provincia_talagante" onclick="seleccionarTodasComunasProvinciaTalagante()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Talagante</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">El Monte</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Isla de Maipo</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Padre Hurtado</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Peñaflor</b></div>\n' +
            '  </div>' +
             '  <div class="row">\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="talagante" id="talagante" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="el_monte" id="el_monte" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="isla_de_maipo" id="isla_de_maipo" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="padre_hurtado" id="padre_hurtado" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="pennaflor" id="pennaflor" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '  </div>' +
              '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center" ><b style="color: white">Provincia de Santiago</b><br><abbr title="Haga click en el checbox para seleccionar o deseleccionar todas las comunas de la provincia de Santiago"><input id="provincia_santiago" onclick="seleccionarTodasComunasProvinciaSantiago()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></abbr></div>\n' +
            '</div>' +
              '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">La Pintana</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">La Reina</b></div>\n' +
               '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Las Condes</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Lo Barnechea</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Lo Espejo</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Lo Prado</b></div>\n' +
               '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Macul</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Maipú</b></div>\n' +
      '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="la_pintana" id="la_pintana" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="la_reina" id="la_reina" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="las_condes" id="las_condes" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="lo_barnechea" id="lo_barnechea" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="lo_espejo" id="lo_espejo" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="lo_prado" id="lo_prado" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="macul" id="macul" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="maipu" id="maipu" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
    '  </div>' +
                            '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Ñuñoa</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Pedro Aguirre Cerda</b></div>\n' +
               '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Peñalolén</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Providencia</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Pudahuel</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Quilicura</b></div>\n' +
               '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Quinta Normal</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Recoleta</b></div>\n' +
      '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="nnunnoa" id="nnunnoa" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="pedro_aguirre_cerda" id="pedro_aguirre_cerda" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="pennalolen" id="pennalolen" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="providencia" id="providencia" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="pudahuel" id="pudahuel" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="quilicura" id="quilicura" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="quinta_normal" id="quinta_normal" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="recoleta" id="recoleta" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
    '  </div>' +
                            '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Renca</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">San Joaquín</b></div>\n' +
               '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">San Miguel</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">San Ramón</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Vitacura</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Santiago</b></div>\n' +
               '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Cerrillos</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Cerro Navia</b></div>\n' +
      '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="renca" id="renca" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="san_joaquin" id="san_joaquin" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="san_miguel" id="san_miguel" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="san_ramon" id="san_ramon" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="vitacura" id="vitacura" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="santiago" id="santiago" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="cerrillos" id="cerrillos" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="cerro_navia" id="cerro_navia" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
    '  </div>' +
                            '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Conchalí</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">El Bosque</b></div>\n' +
               '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Estación Central</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Huechuraba</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Independencia</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">La Cisterna</b></div>\n' +
               '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">La Florida</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">La Granja</b></div>\n' +
      '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="conchali" id="conchali" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="el_bosque" id="el_bosque" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="estacion_central" id="estacion_central" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="huechuraba" id="huechuraba" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="independencia" id="independencia" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="la_cisterna" id="la_cisterna" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="la_florida" id="la_florida" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="la_granja" id="la_granja" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
    '  </div>' +
              '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Chacabuco<br><input id="provincia_chacabuco" onclick="seleccionarTodasComunasProvinciaChacabuco()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Colina</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Lampa</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Tiltil</b></div>\n' +
 '  </div>' +
             '  <div class="row">\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="colina" id="colina" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="lampa" id="lampa" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="tiltil" id="tiltil" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
          '  </div>' +
     '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Cordillera<br><input id="provincia_cordillera" onclick="seleccionarTodasComunasProvinciaCordillera()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
              '  <div class="row">\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Puente Alto</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Pirque</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">San José de Maipo</b></div>\n' +
              '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="puente_alto" id="puente_alto" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="pirque" id="pirque" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="san_jose_de_maipo" id="san_jose_de_maipo" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '  </div>' +
                   '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Maipo<br><input id="provincia_maipo" onclick="seleccionarTodasComunasProvinciaMaipo()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
              '  <div class="row">\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">San Bernardo</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Buin</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Calera de Tango</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Paine</b></div>\n' +
              '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="san_bernardo" id="san_bernardo" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="buin" id="buin" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="calera_de_tango" id="calera_de_tango" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="paine" id="paine" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '  </div>' +
                   '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Melipilla<br><input id="provincia_melipilla" onclick="seleccionarTodasComunasProvinciaMelipilla()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
              '  <div class="row">\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Melipilla</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Alhué</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Curacaví</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">María Pinto</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">San Pedro</b></div>\n' +
              '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="melipilla" id="melipilla" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="alhue" id="alhue" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="curacavi" id="curacavi" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="maria_pinto" id="maria_pinto" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="san_pedro" id="san_pedro" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '  </div>' +
              '</div>'+
         '</div>';
          document.querySelector("#div_id_ask_region").insertAdjacentHTML("beforeend",aux);
    }
    else{
        $("#comunas_metropolitana").remove();
    }
}

function seleccionarTodasComunasProvinciaAntartica(){
    if($("#provincia_antartica").is(":checked")) {
        $("#antartica").prop('checked', true);
        $("#cabo_de_hornos").prop('checked', true);
    }
    else{
        $("#antartica").prop('checked', false);
        $("#cabo_de_hornos").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaUltimaEsperanza(){
    if($("#provincia_ultima_esperanza").is(":checked")) {
        $("#natales").prop('checked', true);
        $("#torres_del_paine").prop('checked', true);
    }
    else{
        $("#natales").prop('checked', false);
        $("#torres_del_paine").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaMagallanes(){
    if($("#provincia_magallanes").is(":checked")) {
        $("#punta_arenas").prop('checked', true);
        $("#laguna_blanca").prop('checked', true);
        $("#rio_verde").prop('checked', true);
        $("#san_gregorio").prop('checked', true);
    }
    else{
        $("#punta_arenas").prop('checked', false);
        $("#laguna_blanca").prop('checked', false);
        $("#rio_verde").prop('checked', false);
        $("#san_gregorio").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaTierraFuego(){
    if($("#provincia_tierra_fuego").is(":checked")) {
        $("#porvenir").prop('checked', true);
        $("#primavera").prop('checked', true);
        $("#timaukel").prop('checked', true);
    }
    else{
        $("#porvenir").prop('checked', false);
        $("#primavera").prop('checked', false);
        $("#timaukel").prop('checked', false);
    }
}

function seleccionarTodasComunasRegion12(){
    if($("#region_12").is(":checked")){
        $("#provincia_tierra_fuego").prop("checked",true);
        $("#provincia_magallanes").prop("checked",true);
        $("#provincia_ultima_esperanza").prop("checked",true);
        $("#provincia_antartica").prop("checked",true);
    }
    else{
        $("#provincia_tierra_fuego").prop("checked",false);
        $("#provincia_magallanes").prop("checked",false);
        $("#provincia_ultima_esperanza").prop("checked",false);
        $("#provincia_antartica").prop("checked",false);
    }
    seleccionarTodasComunasProvinciaTierraFuego();
    seleccionarTodasComunasProvinciaMagallanes();
    seleccionarTodasComunasProvinciaUltimaEsperanza();
    seleccionarTodasComunasProvinciaAntartica();
}

function mostrarComunasMagallanes(){
    if ($("#magallanes").select && document.querySelector("#comunas_magallanes")==null){
          let aux = '<div id="comunas_magallanes" class="form-group">' +
         '<label for="comunas_magallanes" class=" requiredField">' +
         '2°) Seleccione la/s comuna/s en la/s que despacha' +
         '<span class="asteriskField">*</span>' +
         '</label>' +
          '<div class="container" id="id_comunas_magallanes">' +
              '<div class="row">' +
              '    <div class="col bg-dark bg-opacity-80" style="text-align: center"><b style="color: white" >XII Región de Magallanes y de la Antártica Chilena<br><input id="region_12" onclick="seleccionarTodasComunasRegion12();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
              '</div>'+
              '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Tierra del Fuego<br><input id="provincia_tierra_fuego" onclick="seleccionarTodasComunasProvinciaTierraFuego()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Porvenir</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Primavera</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Timaukel</b></div>\n' +
            '  </div>' +
             '  <div class="row">\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="porvenir" id="porvenir" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="primavera" id="primavera" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="timaukel" id="timaukel" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '  </div>' +
              '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Magallanes<br><input id="provincia_magallanes" onclick="seleccionarTodasComunasProvinciaMagallanes()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
              '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Punta Arenas</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Laguna Blanca</b></div>\n' +
               '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Río Verde</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">San Gregorio</b></div>\n' +
      '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="punta_arenas" id="punta_arenas" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="laguna_blanca" id="laguna_blanca" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="rio_verde" id="rio_verde" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="san_gregorio" id="san_gregorio" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
    '  </div>' +
              '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Última Esperanza<br><input id="provincia_ultima_esperanza" onclick="seleccionarTodasComunasProvinciaUltimaEsperanza()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Natales</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Torres del Paine</b></div>\n' +
 '  </div>' +
             '  <div class="row">\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="natales" id="natales" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="torres_del_paine" id="torres_del_paine" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
          '  </div>' +
     '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Antártica Chilena<br><input id="provincia_antartica" onclick="seleccionarTodasComunasProvinciaAntartica()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
              '  <div class="row">\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Cabo de Hornos</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Antártica</b></div>\n' +
              '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="cabo_de_hornos" id="cabo_de_hornos" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="antartica" id="antartica" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '  </div>' +
              '</div>'+
         '</div>';
          document.querySelector("#div_id_ask_region").insertAdjacentHTML("beforeend",aux);
    }
    else{
        $("#comunas_magallanes").remove();
    }
}

function seleccionarTodasComunasProvinciaCarrera(){
    if($("#provincia_carrera").is(":checked")) {
        $("#chile_chico").prop('checked', true);
        $("#rio_ibañez").prop('checked', true);
    }
    else{
        $("#chile_chico").prop('checked', false);
        $("#rio_ibañez").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaPrat(){
    if($("#provincia_prat").is(":checked")) {
        $("#cochrane").prop('checked', true);
        $("#ohiggins").prop('checked', true);
        $("#tortel").prop('checked', true);
    }
    else{
        $("#cochrane").prop('checked', false);
        $("#ohiggins").prop('checked', false);
        $("#tortel").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaCoyhaique(){
    if($("#provincia_coyhaique").is(":checked")) {
        $("#lago_verde").prop('checked', true);
        $("#coyhaique").prop('checked', true);
    }
    else{
        $("#lago_verde").prop('checked', false);
        $("#coyhaique").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaAysen(){
    if($("#provincia_aysen").is(":checked")) {
        $("#aysen").prop('checked', true);
        $("#cisnes").prop('checked', true);
        $("#guaitecas").prop('checked', true);
    }
    else{
        $("#aysen").prop('checked', false);
        $("#cisnes").prop('checked', false);
        $("#guaitecas").prop('checked', false);
    }
}

function seleccionarTodasComunasRegion11(){
    if($("#region_11").is(":checked")){
        $("#provincia_aysen").prop("checked",true);
        $("#provincia_coyhaique").prop("checked",true);
        $("#provincia_prat").prop("checked",true);
        $("#provincia_carrera").prop("checked",true);
    }
    else{
        $("#provincia_aysen").prop("checked",false);
        $("#provincia_coyhaique").prop("checked",false);
        $("#provincia_prat").prop("checked",false);
        $("#provincia_carrera").prop("checked",false);
    }
    seleccionarTodasComunasProvinciaAysen();
    seleccionarTodasComunasProvinciaCoyhaique();
    seleccionarTodasComunasProvinciaPrat();
    seleccionarTodasComunasProvinciaCarrera();
}

function mostrarComunasAysen(){
    if ($("#region_aysen").select && document.querySelector("#comunas_aysen")==null){
          let aux = '<div id="comunas_aysen" class="form-group">' +
         '<label for="comunas_aysen" class=" requiredField">' +
         '2°) Seleccione la/s comuna/s en la/s que despacha' +
         '<span class="asteriskField">*</span>' +
         '</label>' +
          '<div class="container" id="id_comunas_aysen">' +
              '<div class="row">' +
              '    <div class="col bg-dark bg-opacity-80" style="text-align: center"><b style="color: white" >XI Región de Aysén del G. Carlos Ibáñez del Campo<br><input id="region_11" onclick="seleccionarTodasComunasRegion11();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
              '</div>'+
              '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Aysén<br><input id="provincia_aysen" onclick="seleccionarTodasComunasProvinciaAysen()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Aysén</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Cisnes</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Guaitecas</b></div>\n' +
            '  </div>' +
             '  <div class="row">\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="aysen" id="aysen" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="cisnes" id="cisnes" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="guaitecas" id="guaitecas" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '  </div>' +
              '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Coyhaique<br><input id="provincia_coyhaique" onclick="seleccionarTodasComunasProvinciaCoyhaique()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
              '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Lago Verde</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Coyhaique</b></div>\n' +
      '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="lago_verde" id="lago_verde" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="coyhaique" id="coyhaique" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
    '  </div>' +
              '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Capitán Prat<br><input id="provincia_prat" onclick="seleccionarTodasComunasProvinciaPrat()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Cochrane</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Ohiggins</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Tortel</b></div>\n' +
 '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="cochrane" id="cochrane" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="ohiggins" id="ohiggins" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="tortel" id="tortel" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
          '  </div>' +
     '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de General Carrera<br><input id="provincia_carrera" onclick="seleccionarTodasComunasProvinciaCarrera()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
              '  <div class="row">\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Chile Chico</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Río Ibáñez</b></div>\n' +
              '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="chile_chico" id="chile_chico" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="rio_ibañez" id="rio_ibañez" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '  </div>' +
              '</div>'+
         '</div>';
          document.querySelector("#div_id_ask_region").insertAdjacentHTML("beforeend",aux);
    }
    else{
        $("#comunas_aysen").remove();
    }
}

function seleccionarTodasComunasProvinciaPalena(){
    if($("#provincia_palena").is(":checked")) {
        $("#chaiten").prop('checked', true);
        $("#futaleufu").prop('checked', true);
        $("#hualaihue").prop('checked', true);
        $("#palena").prop('checked', true);
    }
    else {
        $("#chaiten").prop('checked', false);
        $("#futaleufu").prop('checked', false);
        $("#hualaihue").prop('checked', false);
        $("#palena").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaLlanquihue(){
    if($("#provincia_llanquihue").is(":checked")) {
        $("#puerto_montt").prop('checked', true);
        $("#calbuco").prop('checked', true);
        $("#cochamo").prop('checked', true);
        $("#fresia").prop('checked', true);
        $("#frutillar").prop('checked', true);
        $("#los_muermos").prop('checked', true);
        $("#llanquihue").prop('checked', true);
        $("#maullin").prop('checked', true);
        $("#puerto_varas").prop('checked', true);
    }
    else{
        $("#puerto_montt").prop('checked', false);
        $("#calbuco").prop('checked', false);
        $("#cochamo").prop('checked', false);
        $("#fresia").prop('checked', false);
        $("#frutillar").prop('checked', false);
        $("#los_muermos").prop('checked', false);
        $("#llanquihue").prop('checked', false);
        $("#maullin").prop('checked', false);
        $("#puerto_varas").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaOsorno(){
    if($("#provincia_osorno").is(":checked")) {
        $("#rio_negro").prop('checked', true);
        $("#osorno").prop('checked', true);
        $("#puerto_octay").prop('checked', true);
        $("#purranque").prop('checked', true);
        $("#puyehue").prop('checked', true);
        $("#san_juan_de_la_costa").prop('checked', true);
        $("#san_pablo").prop('checked', true);
    }
    else {
        $("#rio_negro").prop('checked', false);
        $("#osorno").prop('checked', false);
        $("#puerto_octay").prop('checked', false);
        $("#purranque").prop('checked', false);
        $("#puyehue").prop('checked', false);
        $("#san_juan_de_la_costa").prop('checked', false);
        $("#san_pablo").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaChiloe(){
    if($("#provincia_chiloe").is(":checked")) {
        $("#quinchao").prop('checked', true);
        $("#castro").prop('checked', true);
        $("#ancud").prop('checked', true);
        $("#chonchi").prop('checked', true);
        $("#curaco_de_velez").prop('checked', true);
        $("#dalcahue").prop('checked', true);
        $("#puqueldon").prop('checked', true);
        $("#queilen").prop('checked', true);
        $("#quellon").prop('checked', true);
        $("#quemchi").prop('checked', true);
    }
    else{
        $("#quinchao").prop('checked', false);
        $("#castro").prop('checked', false);
        $("#ancud").prop('checked', false);
        $("#chonchi").prop('checked', false);
        $("#curaco_de_velez").prop('checked', false);
        $("#dalcahue").prop('checked', false);
        $("#puqueldon").prop('checked', false);
        $("#queilen").prop('checked', false);
        $("#quellon").prop('checked', false);
        $("#quemchi").prop('checked', false);
    }
}

function seleccionarTodasComunasRegion10(){
    if($("#region_10").is(":checked")){
        $("#provincia_chiloe").prop("checked",true);
        $("#provincia_osorno").prop("checked",true);
        $("#provincia_llanquihue").prop("checked",true);
        $("#provincia_palena").prop("checked",true);
    }
    else{
        $("#provincia_chiloe").prop("checked",false);
        $("#provincia_osorno").prop("checked",false);
        $("#provincia_llanquihue").prop("checked",false);
        $("#provincia_palena").prop("checked",false);
    }
    seleccionarTodasComunasProvinciaOsorno();
    seleccionarTodasComunasProvinciaChiloe();
    seleccionarTodasComunasProvinciaPalena();
    seleccionarTodasComunasProvinciaLlanquihue();
}

function mostrarComunasLosLagos(){
    if ($("#lagos").select && document.querySelector("#comunas_lagos")==null){
          let aux = '<div id="comunas_lagos" class="form-group">' +
         '<label for="comunas_lagos" class=" requiredField">' +
         '2°) Seleccione la/s comuna/s en la/s que despacha' +
         '<span class="asteriskField">*</span>' +
         '</label>' +
          '<div class="container" id="id_comunas_lagos">' +
              '<div class="row">' +
              '    <div class="col bg-dark bg-opacity-80" style="text-align: center"><b style="color: white" >X Región de Los Lagos<br><input id="region_10" onclick="seleccionarTodasComunasRegion10();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
              '</div>'+
              '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Chiloé<br><input id="provincia_chiloe" onclick="seleccionarTodasComunasProvinciaChiloe()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Quinchao</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Castro</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Ancud</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Chonchi</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Curaco de Vélez</b></div>\n' +
            '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="quinchao" id="quinchao" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="castro" id="castro" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="ancud" id="ancud" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="chonchi" id="chonchi" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="curaco_de_velez" id="curaco_de_velez" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '  </div>' +
              '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Dalcahue</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Puqueldón</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Queilén</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Quellón</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Quemchi</b></div>\n' +
            '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="dalcahue" id="dalcahue" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="puqueldon" id="puqueldon" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="queilen" id="queilen" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="quellon" id="quellon" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="quemchi" id="quemchi" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '  </div>' +
              '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Osorno<br><input id="provincia_osorno" onclick="seleccionarTodasComunasProvinciaOsorno()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
              '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Río Negro</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Osorno</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Puerto Octay</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Purranque</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Puyehue</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">San Juan de la Costa</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">San Pablo</b></div>\n' +
              '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="rio_negro" id="rio_negro" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="osorno" id="osorno" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="puerto_octay" id="puerto_octay" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="purranque" id="purranque" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="puyehue" id="puyehue" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="san_juan_de_la_costa" id="san_juan_de_la_costa" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="san_pablo" id="san_pablo" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '  </div>' +
              '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Llanquihue<br><input id="provincia_llanquihue" onclick="seleccionarTodasComunasProvinciaLlanquihue()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Puerto Montt</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Calbuco</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Cochamó</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Fresia</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Frutillar</b></div>\n' +
            '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="puerto_montt" id="puerto_montt" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="calbuco" id="calbuco" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="cochamo" id="cochamo" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="fresia" id="fresia" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="frutillar" id="frutillar" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '  </div>' +
              '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Los Muermos</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Llanquihue</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Maullín</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Puerto Varas</b></div>\n' +
            '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="los_muermos" id="los_muermos" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="llanquihue" id="llanquihue" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="maullin" id="maullin" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="puerto_varas" id="puerto_varas" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '  </div>' +
              '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Palena<br><input id="provincia_palena" onclick="seleccionarTodasComunasProvinciaPalena()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
              '  <div class="row">\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Chaitén</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Futaleufú</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Hualaihué</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Palena</b></div>\n' +
              '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="chaiten" id="chaiten" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="futaleufu" id="futaleufu" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="hualaihue" id="hualaihue" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="palena" id="palena" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '  </div>' +
              '</div>'+
         '</div>';
          document.querySelector("#div_id_ask_region").insertAdjacentHTML("beforeend",aux);
    }
    else{
        $("#comunas_lagos").remove();
    }
}

function seleccionarTodasComunasProvinciaRanco(){
    if($("#provincia_ranco").is(":checked")) {
        $("#la_union").prop('checked', true);
        $("#futrono").prop('checked', true);
        $("#lago_ranco").prop('checked', true);
        $("#rio_bueno").prop('checked', true);
    }
    else{
        $("#la_union").prop('checked', false);
        $("#futrono").prop('checked', false);
        $("#lago_ranco").prop('checked', false);
        $("#rio_bueno").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaValdivia() {
    if ($("#provincia_valdivia").is(":checked")) {
        $("#valdivia").prop('checked', true);
        $("#corral").prop('checked', true);
        $("#lanco").prop('checked', true);
        $("#los_lagos").prop('checked', true);
        $("#mafil").prop('checked', true);
        $("#mariquina").prop('checked', true);
        $("#paillaco").prop('checked', true);
        $("#panguipulli").prop('checked', true);
    }
    else{
        $("#valdivia").prop('checked', false);
        $("#corral").prop('checked', false);
        $("#lanco").prop('checked', false);
        $("#los_lagos").prop('checked', false);
        $("#mafil").prop('checked', false);
        $("#mariquina").prop('checked', false);
        $("#paillaco").prop('checked', false);
        $("#panguipulli").prop('checked', false);
    }
}

function seleccionarTodasComunasRegion14(){
    if($("#region_14").is(":checked")){
        $("#provincia_valdivia").prop("checked",true);
        $("#provincia_ranco").prop("checked",true);
    }
    else{
        $("#provincia_valdivia").prop("checked",false);
        $("#provincia_ranco").prop("checked",false);
    }
    seleccionarTodasComunasProvinciaValdivia();
    seleccionarTodasComunasProvinciaRanco();
}

function mostrarComunasLosRios(){
    if ($("#rios").select && document.querySelector("#comunas_rios")==null){
          let aux = '<div id="comunas_rios" class="form-group">' +
         '<label for="comunas_rios" class=" requiredField">' +
         '2°) Seleccione la/s comuna/s en la/s que despacha' +
         '<span class="asteriskField">*</span>' +
         '</label>' +
          '<div class="container" id="id_comunas_rios">' +
              '<div class="row">' +
              '    <div class="col bg-dark bg-opacity-80" style="text-align: center"><b style="color: white" >XIV Región de Los Ríos<br><input id="region_14" onclick="seleccionarTodasComunasRegion14();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
              '</div>'+
              '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Valdivia<br><input id="provincia_valdivia" onclick="seleccionarTodasComunasProvinciaValdivia()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Valdivia</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Corral</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Lanco</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Los Lagos</b></div>\n' +
            '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="valdivia" id="valdivia" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="corral" id="corral" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="lanco" id="lanco" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="los_lagos" id="los_lagos" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '  </div>' +
              '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Máfil</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Mariquina</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Paillaco</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Panguipulli</b></div>\n' +
            '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="mafil" id="mafil" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="mariquina" id="mariquina" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="paillaco" id="paillaco" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="panguipulli" id="panguipulli" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '  </div>' +
              '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Ranco<br><input id="provincia_ranco" onclick="seleccionarTodasComunasProvinciaRanco()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
              '  <div class="row">\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">La Unión</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Futrono</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Lago Ranco</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Río Bueno</b></div>\n' +
              '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="la_union" id="la_union" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="futrono" id="futrono" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="lago_ranco" id="lago_ranco" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="rio_bueno" id="rio_bueno" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '  </div>' +
              '</div>'+
         '</div>';
          document.querySelector("#div_id_ask_region").insertAdjacentHTML("beforeend",aux);
    }
    else{
        $("#comunas_rios").remove();
    }
}

function seleccionarTodasComunasProvinciaCautin(){
    if($("#provincia_cautin").is(":checked")) {
        $("#gorbea").prop('checked', true);
        $("#lautaro").prop('checked', true);
        $("#loncoche").prop('checked', true);
        $("#melipeuco").prop('checked', true);
        $("#nueva_imperial").prop('checked', true);
        $("#padre_las_casas").prop('checked', true);
        $("#perquenco").prop('checked', true);
        $("#pitrufquen").prop('checked', true);
        $("#pucon").prop('checked', true);
        $("#saavedra").prop('checked', true);
        $("#teodoro_schmidt").prop('checked', true);
        $("#tolten").prop('checked', true);
        $("#vilcun").prop('checked', true);
        $("#villarrica").prop('checked', true);
        $("#cholchol").prop('checked', true);
        $("#temuco").prop('checked', true);
        $("#carahue").prop('checked', true);
        $("#cunco").prop('checked', true);
        $("#curarrehue").prop('checked', true);
        $("#freire").prop('checked', true);
        $("#galvarino").prop('checked', true);
    }
    else{
        $("#gorbea").prop('checked', false);
        $("#lautaro").prop('checked', false);
        $("#loncoche").prop('checked', false);
        $("#melipeuco").prop('checked', false);
        $("#nueva_imperial").prop('checked', false);
        $("#padre_las_casas").prop('checked', false);
        $("#perquenco").prop('checked', false);
        $("#pitrufquen").prop('checked', false);
        $("#pucon").prop('checked', false);
        $("#saavedra").prop('checked', false);
        $("#teodoro_schmidt").prop('checked', false);
        $("#tolten").prop('checked', false);
        $("#vilcun").prop('checked', false);
        $("#villarrica").prop('checked', false);
        $("#cholchol").prop('checked', false);
        $("#temuco").prop('checked', false);
        $("#carahue").prop('checked', false);
        $("#cunco").prop('checked', false);
        $("#curarrehue").prop('checked', false);
        $("#freire").prop('checked', false);
        $("#galvarino").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaMalleco(){
    if($("#provincia_malleco").is(":checked")) {
        $("#angol").prop('checked', true);
        $("#collipulli").prop('checked', true);
        $("#curacautin").prop('checked', true);
        $("#ercilla").prop('checked', true);
        $("#lonquimay").prop('checked', true);
        $("#los_sauces").prop('checked', true);
        $("#lumaco").prop('checked', true);
        $("#puren").prop('checked', true);
        $("#renaico").prop('checked', true);
        $("#traiguen").prop('checked', true);
        $("#victoria").prop('checked', true);
    }
    else{
        $("#angol").prop('checked', false);
        $("#collipulli").prop('checked', false);
        $("#curacautin").prop('checked', false);
        $("#ercilla").prop('checked', false);
        $("#lonquimay").prop('checked', false);
        $("#los_sauces").prop('checked', false);
        $("#lumaco").prop('checked', false);
        $("#puren").prop('checked', false);
        $("#renaico").prop('checked', false);
        $("#traiguen").prop('checked', false);
        $("#victoria").prop('checked', false);
    }
}

function seleccionarTodasComunasRegion9() {
    if($("#region_9").is(":checked")){
        $("#provincia_malleco").prop("checked",true);
        $("#provincia_cautin").prop("checked",true);
    }
    else{
        $("#provincia_malleco").prop("checked",false);
        $("#provincia_cautin").prop("checked",false);
    }
    seleccionarTodasComunasProvinciaMalleco();
    seleccionarTodasComunasProvinciaCautin();
}

function mostrarComunasAraucania(){
    if ($("#araucania").select && document.querySelector("#comunas_araucania")==null){
          let aux = '<div id="comunas_araucania" class="form-group">' +
         '<label for="comunas_araucania" class=" requiredField">' +
         '2°) Seleccione la/s comuna/s en la/s que despacha' +
         '<span class="asteriskField">*</span>' +
         '</label>' +
          '<div class="container" id="id_comunas_araucania">' +
              '<div class="row">' +
              '    <div class="col bg-dark bg-opacity-80" style="text-align: center"><b style="color: white" >IX Región de La Araucanía<br><input id="region_9" onclick="seleccionarTodasComunasRegion9();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
              '</div>'+
              '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Malleco<br><input id="provincia_malleco" onclick="seleccionarTodasComunasProvinciaMalleco()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Angol</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Collipulli</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Curacautín</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Ercilla</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Lonquimay</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Los Sauces</b></div>\n' +
            '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="angol" id="angol" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="collipulli" id="collipulli" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="curacautin" id="curacautin" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="ercilla" id="ercilla" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="lonquimay" id="lonquimay" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="los_sauces" id="los_sauces" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '  </div>' +
              '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Lumaco</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Purén</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Renaico</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Traiguén</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Victoria</b></div>\n' +
            '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="lumaco" id="lumaco" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="puren" id="puren" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="renaico" id="renaico" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="traiguen" id="traiguen" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="victoria" id="victoria" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '  </div>' +
              '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Cautín<br><input id="provincia_cautin" onclick="seleccionarTodasComunasProvinciaCautin()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
              '  <div class="row">\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Gorbea</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Lautaro</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Loncoche</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Melipeuco</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Nueva Imperial</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Padre Las Casas</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Perquenco</b></div>\n' +
              '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="gorbea" id="gorbea" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="lautaro" id="lautaro" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="loncoche" id="loncoche" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="melipeuco" id="melipeuco" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="nueva_imperial" id="nueva_imperial" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="padre_las_casas" id="padre_las_casas" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="perquenco" id="perquenco" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '  </div>' +
                            '  <div class="row">\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Pitrufquén</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Pucón</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Saavedra</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Teodoro Schmidt</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Toltén</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Vilcún</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Villarrica</b></div>\n' +
              '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="pitrufquen" id="pitrufquen" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="pucon" id="pucon" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="saavedra" id="saavedra" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="teodoro_schmidt" id="teodoro_schmidt" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="tolten" id="tolten" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="vilcun" id="vilcun" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="villarrica" id="villarrica" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '  </div>' +
                            '  <div class="row">\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Cholchol</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Temuco</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Carahue</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Cunco</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Curarrehue</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Freire</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Galvarino</b></div>\n' +
              '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="cholchol" id="cholchol" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="temuco" id="temuco" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="carahue" id="carahue" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="cunco" id="cunco" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="curarrehue" id="curarrehue" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="freire" id="freire" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="galvarino" id="galvarino" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '  </div>' +
             '</div>'+
         '</div>';
          document.querySelector("#div_id_ask_region").insertAdjacentHTML("beforeend",aux);
    }
    else{
        $("#comunas_araucania").remove();
    }
}

function seleccionarTodasComunasProvinciaBioBio(){
    if($("#provincia_biobio").is(":checked")) {
        $("#los_angeles").prop('checked', true);
        $("#antuco").prop('checked', true);
        $("#laja").prop('checked', true);
        $("#mulchen").prop('checked', true);
        $("#nacimiento").prop('checked', true);
        $("#negrete").prop('checked', true);
        $("#quilaco").prop('checked', true);
        $("#quilleco").prop('checked', true);
        $("#san_rosendo").prop('checked', true);
        $("#santa_barbara").prop('checked', true);
        $("#tucapel").prop('checked', true);
        $("#alto_biobio").prop('checked', true);
        $("#cabrero").prop('checked', true);
        $("#yumbel").prop('checked', true);
    }
    else{
        $("#los_angeles").prop('checked', false);
        $("#antuco").prop('checked', false);
        $("#laja").prop('checked', false);
        $("#mulchen").prop('checked', false);
        $("#nacimiento").prop('checked', false);
        $("#negrete").prop('checked', false);
        $("#quilaco").prop('checked', false);
        $("#quilleco").prop('checked', false);
        $("#san_rosendo").prop('checked', false);
        $("#santa_barbara").prop('checked', false);
        $("#tucapel").prop('checked', false);
        $("#alto_biobio").prop('checked', false);
        $("#cabrero").prop('checked', false);
        $("#yumbel").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaArauco(){
    if($("#provincia_arauco").is(":checked")) {
        $("#lebu").prop('checked', true);
        $("#arauco").prop('checked', true);
        $("#cannete").prop('checked', true);
        $("#contulmo").prop('checked', true);
        $("#curanilahue").prop('checked', true);
        $("#los_alamos").prop('checked', true);
        $("#tirua").prop('checked', true);
    }
    else{
        $("#lebu").prop('checked', false);
        $("#arauco").prop('checked', false);
        $("#cannete").prop('checked', false);
        $("#contulmo").prop('checked', false);
        $("#curanilahue").prop('checked', false);
        $("#los_alamos").prop('checked', false);
        $("#tirua").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaConcepcion(){
    if($("#provincia_concepcion").is(":checked")) {
        $("#concepcion").prop('checked', true);
        $("#coronel").prop('checked', true);
        $("#chiguayante").prop('checked', true);
        $("#florida").prop('checked', true);
        $("#hualqui").prop('checked', true);
        $("#lota").prop('checked', true);
        $("#penco").prop('checked', true);
        $("#san_pedro_de_la_paz").prop('checked', true);
        $("#santa_juana").prop('checked', true);
        $("#talcahuano").prop('checked', true);
        $("#tome").prop('checked', true);
        $("#hualpen").prop('checked', true);
    }
    else{
        $("#concepcion").prop('checked', false);
        $("#coronel").prop('checked', false);
        $("#chiguayante").prop('checked', false);
        $("#florida").prop('checked', false);
        $("#hualqui").prop('checked', false);
        $("#lota").prop('checked', false);
        $("#penco").prop('checked', false);
        $("#san_pedro_de_la_paz").prop('checked', false);
        $("#santa_juana").prop('checked', false);
        $("#talcahuano").prop('checked', false);
        $("#tome").prop('checked', false);
        $("#hualpen").prop('checked', false);
    }
}

function seleccionarTodasComunasRegion8(){
    if($("#region_8").is(":checked")){
        $("#provincia_concepcion").prop("checked",true);
        $("#provincia_arauco").prop("checked",true);
        $("#provincia_biobio").prop("checked",true);
    }
    else{
        $("#provincia_concepcion").prop("checked",false);
        $("#provincia_arauco").prop("checked", false);
        $("#provincia_biobio").prop("checked", false);
    }
    seleccionarTodasComunasProvinciaConcepcion();
    seleccionarTodasComunasProvinciaArauco();
    seleccionarTodasComunasProvinciaBioBio();
}

function mostrarComunasBioBio(){
    if ($("#biobio").select && document.querySelector("#comunas_biobio")==null){
          let aux = '<div id="comunas_biobio" class="form-group">' +
         '<label for="comunas_biobio" class=" requiredField">' +
         '2°) Seleccione la/s comuna/s en la/s que despacha' +
         '<span class="asteriskField">*</span>' +
         '</label>' +
          '<div class="container" id="id_comunas_biobio">' +
              '<div class="row">' +
              '    <div class="col bg-dark bg-opacity-80" style="text-align: center"><b style="color: white" >VIII Región del Biobío<br><input id="region_8" onclick="seleccionarTodasComunasRegion8();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
              '</div>'+
              '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Concepción <br><input id="provincia_concepcion" onclick="seleccionarTodasComunasProvinciaConcepcion()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Concepción</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Coronel</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Chiguayante</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Florida</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Hualqui</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Lota</b></div>\n' +
            '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="concepcion" id="concepcion" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="coronel" id="coronel" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="chiguayante" id="chiguayante" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="florida" id="florida" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="hualqui" id="hualqui" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="lota" id="lota" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '  </div>' +
              '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Penco</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">San Pedro de la Paz</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Santa Juana</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Talcahuano</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Tomé</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Hualpén</b></div>\n' +
            '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="penco" id="penco" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="san_pedro_de_la_paz" id="san_pedro_de_la_paz" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="santa_juana" id="santa_juana" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="talcahuano" id="talcahuano" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="tome" id="tome" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="hualpen" id="hualpen" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '  </div>' +
              '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Arauco<br><input id="provincia_arauco" onclick="seleccionarTodasComunasProvinciaArauco()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
              '  <div class="row">\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Lebu</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Arauco</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Cañete</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Contulmo</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Curanilahue</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Los Alamos</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Tirúa</b></div>\n' +
              '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="lebu" id="lebu" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="arauco" id="arauco" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="cannete" id="cannete" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="contulmo" id="contulmo" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="curanilahue" id="curanilahue" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="los_alamos" id="los_alamos" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="tirua" id="tirua" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '  </div>' +
                '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Bio-Bío<br><input id="provincia_biobio" onclick="seleccionarTodasComunasProvinciaBioBio()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
              '  <div class="row">\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Los Angeles</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Antuco</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Laja</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Mulchén</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Nacimiento</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Negrete</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Quilaco</b></div>\n' +
              '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="los_angeles" id="los_angeles" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="antuco" id="antuco" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="laja" id="laja" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="mulchen" id="mulchen" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="nacimiento" id="nacimiento" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="negrete" id="negrete" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="quilaco" id="quilaco" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '  </div>' +
              '  <div class="row">\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Quilleco</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">San Rosendo</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Santa Bárbara</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Tucapel</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Alto Biobío</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Cabrero</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Yumbel</b></div>\n' +
             '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="quilleco" id="quilleco" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="san_rosendo" id="san_rosendo" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="santa_barbara" id="santa_barbara" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="tucapel" id="tucapel" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="alto_biobio" id="alto_biobio" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="cabrero" id="cabrero" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="yumbel" id="yumbel" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '  </div>' +
             '</div>'+
         '</div>';
          document.querySelector("#div_id_ask_region").insertAdjacentHTML("beforeend",aux);
    }
    else{
        $("#comunas_biobio").remove();
    }
}

function seleccionarTodasComunasProvinciaDiguillin(){
    if($("#provincia_diguillin").is(":checked")) {
        $("#chillan").prop('checked', true);
        $("#bulnes").prop('checked', true);
        $("#chillan_viejo").prop('checked', true);
        $("#el_carmen").prop('checked', true);
        $("#pemuco").prop('checked', true);
        $("#pinto").prop('checked', true);
        $("#quillon").prop('checked', true);
        $("#san_ignacio").prop('checked', true);
        $("#yungay").prop('checked', true);
    }
    else{
        $("#chillan").prop('checked', false);
        $("#bulnes").prop('checked', false);
        $("#chillan_viejo").prop('checked', false);
        $("#el_carmen").prop('checked', false);
        $("#pemuco").prop('checked', false);
        $("#pinto").prop('checked', false);
        $("#quillon").prop('checked', false);
        $("#san_ignacio").prop('checked', false);
        $("#yungay").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaPunilla(){
    if($("#provincia_punilla").is(":checked")) {
        $("#san_carlos").prop('checked', true);
        $("#coihueco").prop('checked', true);
        $("#nniquen").prop('checked', true);
        $("#san_fabian").prop('checked', true);
        $("#san_nicolas").prop('checked', true);
    }
    else {
        $("#san_carlos").prop('checked', false);
        $("#coihueco").prop('checked', false);
        $("#nniquen").prop('checked', false);
        $("#san_fabian").prop('checked', false);
        $("#san_nicolas").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaItata(){
    if($("#provincia_itata").is(":checked")) {
        $("#quirihue").prop('checked', true);
        $("#cobquecura").prop('checked', true);
        $("#coelemu").prop('checked', true);
        $("#ninhue").prop('checked', true);
        $("#portezuelo").prop('checked', true);
        $("#ranquil").prop('checked', true);
        $("#treguaco").prop('checked', true);
    }
    else{
        $("#quirihue").prop('checked', false);
        $("#cobquecura").prop('checked', false);
        $("#coelemu").prop('checked', false);
        $("#ninhue").prop('checked', false);
        $("#portezuelo").prop('checked', false);
        $("#ranquil").prop('checked', false);
        $("#treguaco").prop('checked', false);
    }
}

function seleccionarTodasComunasRegion16(){
    if($("#region_16").is(":checked")){
        $("#provincia_itata").prop("checked",true);
        $("#provincia_punilla").prop("checked",true);
        $("#provincia_diguillin").prop("checked",true);
    }
    else{
        $("#provincia_itata").prop("checked",false);
        $("#provincia_punilla").prop("checked",false);
        $("#provincia_diguillin").prop("checked",false);
    }
    seleccionarTodasComunasProvinciaItata();
    seleccionarTodasComunasProvinciaPunilla();
    seleccionarTodasComunasProvinciaDiguillin();
}

function mostrarComunasNnuble(){
    if ($("#nnuble").select && document.querySelector("#comunas_nnuble")==null){
          let aux = '<div id="comunas_nnuble" class="form-group">' +
         '<label for="comunas_nnuble" class=" requiredField">' +
         '2°) Seleccione la/s comuna/s en la/s que despacha' +
         '<span class="asteriskField">*</span>' +
         '</label>' +
          '<div class="container" id="id_comunas_nnuble">' +
              '<div class="row">' +
              '    <div class="col bg-dark bg-opacity-80" style="text-align: center"><b style="color: white" >XVI Región de Ñuble<br><input id="region_16" onclick="seleccionarTodasComunasRegion16();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
              '</div>'+
              '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Itata<br><input id="provincia_itata" onclick="seleccionarTodasComunasProvinciaItata()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Quirihue</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Cobquecura</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Coelemu</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Ninhue</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Portezuelo</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Ránquil</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Treguaco</b></div>\n' +
            '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="quirihue" id="quirihue" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="cobquecura" id="cobquecura" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="coelemu" id="coelemu" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="ninhue" id="ninhue" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="portezuelo" id="portezuelo" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="ranquil" id="ranquil" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="treguaco" id="treguaco" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '  </div>' +
              '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Punilla<br><input id="provincia_punilla" onclick="seleccionarTodasComunasProvinciaPunilla()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
              '  <div class="row">\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">San Carlos</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Coihueco</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Ñiquén</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">San Fabián</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">San Nicolás</b></div>\n' +
              '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="san_carlos" id="san_carlos" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="coihueco" id="coihueco" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="nniquen" id="nniquen" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="san_fabian" id="san_fabian" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="san_nicolas" id="san_nicolas" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '  </div>' +
                '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Diguillín<br><input id="provincia_diguillin" onclick="seleccionarTodasComunasProvinciaDiguillin()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
              '  <div class="row">\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Chillán</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Bulnes</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Chillán Viejo</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">El Carmen</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Pemuco</b></div>\n' +
              '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="chillan" id="chillan" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="bulnes" id="bulnes" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="chillan_viejo" id="chillan_viejo" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="el_carmen" id="el_carmen" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="pemuco" id="pemuco" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '  </div>' +
              '  <div class="row">\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Pinto</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Quillón</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">San Ignacio</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Yungay</b></div>\n' +
             '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="pinto" id="pinto" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="quillon" id="quillon" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="san_ignacio" id="san_ignacio" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="yungay" id="yungay" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '  </div>' +
             '</div>'+
         '</div>';
          document.querySelector("#div_id_ask_region").insertAdjacentHTML("beforeend",aux);
    }
    else{
        $("#comunas_nnuble").remove();
    }
}

function seleccionarTodasComunasProvinciaTalca() {
    if ($("#provincia_talca").is(":checked")) {
        $("#talca").prop('checked', true);
        $("#constitucion").prop('checked', true);
        $("#curepto").prop('checked', true);
        $("#empedrado").prop('checked', true);
        $("#maule").prop('checked', true);
        $("#pelarco").prop('checked', true);
        $("#rio_claro").prop('checked', true);
        $("#san_clemente").prop('checked', true);
        $("#san_rafael").prop('checked', true);
        $("#pencahue").prop('checked', true);
    }
    else{
        $("#talca").prop('checked', false);
        $("#constitucion").prop('checked', false);
        $("#curepto").prop('checked', false);
        $("#empedrado").prop('checked', false);
        $("#maule").prop('checked', false);
        $("#pelarco").prop('checked', false);
        $("#rio_claro").prop('checked', false);
        $("#san_clemente").prop('checked', false);
        $("#san_rafael").prop('checked', false);
        $("#pencahue").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaCauquenes(){
    if($("#provincia_cauquenes").is(":checked")) {
        $("#cauquenes").prop('checked', true);
        $("#chanco").prop('checked', true);
        $("#pelluhue").prop('checked', true);
    }
    else{
        $("#cauquenes").prop('checked', false);
        $("#chanco").prop('checked', false);
        $("#pelluhue").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaCurico() {
    if ($("#provincia_curico").is(":checked")) {
        $("#curico").prop('checked', true);
        $("#hualanne").prop('checked', true);
        $("#licanten").prop('checked', true);
        $("#molina").prop('checked', true);
        $("#rauco").prop('checked', true);
        $("#romeral").prop('checked', true);
        $("#sagrada_familia").prop('checked', true);
        $("#teno").prop('checked', true);
        $("#vichuquen").prop('checked', true);
    }
    else{
        $("#curico").prop('checked', false);
        $("#hualanne").prop('checked', false);
        $("#licanten").prop('checked', false);
        $("#molina").prop('checked', false);
        $("#rauco").prop('checked', false);
        $("#romeral").prop('checked', false);
        $("#sagrada_familia").prop('checked', false);
        $("#teno").prop('checked', false);
        $("#vichuquen").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaLinares() {
    if ($("#provincia_linares").is(":checked")) {
        $("#parral").prop('checked', true);
        $("#linares").prop('checked', true);
        $("#colbun").prop('checked', true);
        $("#longavi").prop('checked', true);
        $("#retiro").prop('checked', true);
        $("#san_javier").prop('checked', true);
        $("#villa_alegre").prop('checked', true);
        $("#yerbas_buenas").prop('checked', true);
    }
    else{
        $("#parral").prop('checked', false);
        $("#linares").prop('checked', false);
        $("#colbun").prop('checked', false);
        $("#longavi").prop('checked', false);
        $("#retiro").prop('checked', false);
        $("#san_javier").prop('checked', false);
        $("#villa_alegre").prop('checked', false);
        $("#yerbas_buenas").prop('checked', false);
    }
}

function seleccionarTodasComunasRegion7(){
    if($("#region_7").is(":checked")){
        $("#provincia_linares").prop("checked",true);
        $("#provincia_curico").prop("checked",true);
        $("#provincia_cauquenes").prop("checked",true);
        $("#provincia_talca").prop("checked",true);
    }
    else{
        $("#provincia_linares").prop("checked",false);
        $("#provincia_curico").prop("checked",false);
        $("#provincia_cauquenes").prop("checked",false);
        $("#provincia_talca").prop("checked", false);
    }
    seleccionarTodasComunasProvinciaLinares();
    seleccionarTodasComunasProvinciaCauquenes();
    seleccionarTodasComunasProvinciaCurico();
    seleccionarTodasComunasProvinciaTalca();
}

function mostrarComunasMaule(){
    if ($("#region_maule").select && document.querySelector("#comunas_maule")==null){
          let aux = '<div id="comunas_maule" class="form-group">' +
         '<label for="comunas_maule" class=" requiredField">' +
         '2°) Seleccione la/s comuna/s en la/s que despacha' +
         '<span class="asteriskField">*</span>' +
         '</label>' +
          '<div class="container" id="id_comunas_maule">' +
              '<div class="row">' +
              '    <div class="col bg-dark bg-opacity-80" style="text-align: center"><b style="color: white" >VII Región del Maule<br><input id="region_7" onclick="seleccionarTodasComunasRegion7();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
              '</div>'+
              '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Linares<br><input id="provincia_linares" onclick="seleccionarTodasComunasProvinciaLinares()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Parral</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Linares</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Colbún</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Longaví</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Retiro</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">San Javier</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Villa Alegre</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Yerbas Buenas</b></div>\n' +
              '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="parral" id="parral" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="linares" id="linares" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="colbun" id="colbun" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="longavi" id="longavi" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="retiro" id="retiro" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="san_javier" id="san_javier" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="villa_alegre" id="villa_alegre" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="yerbas_buenas" id="yerbas_buenas" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '  </div>' +
                '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Curico<br><input id="provincia_curico" onclick="seleccionarTodasComunasProvinciaCurico()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
              '  <div class="row">\n' +
 '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Curicó</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Hualañé</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Licantén</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Molina</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Rauco</b></div>\n' +
              '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="curico" id="curico" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="hualanne" id="hualanne" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="licanten" id="licanten"  type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="molina" id="molina" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="rauco" id="rauco" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '  </div>' +
              '  <div class="row">\n' +

             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Romeral</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Sagrada Familia</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Teno</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Vichuquén</b></div>\n' +
              '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="romeral" id="romeral" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="sagrada_familia" id="sagrada_familia" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="teno" id="teno" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="vichuquen" id="vichuquen" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '  </div>' +
                '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Cauquenes<br><input id="provincia_cauquenes" onclick="seleccionarTodasComunasProvinciaCauquenes()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
              '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Cauquenes</b></div>\n' +
                    '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Chanco</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Pelluhue</b></div>\n' +
        '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="cauquenes" id="cauquenes" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="chanco" id="chanco" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="pelluhue" id="pelluhue" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '  </div>' +
              '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Talca<br><input id="provincia_talca" onclick="seleccionarTodasComunasProvinciaTalca()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
              '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Talca</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Constitución</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Curepto</b></div>\n' +
              '<div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Empedrado</b></div>' +
              '<div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Maule</b></div>' +
              '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="talca" id="talca" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="constitucion" id="constitucion" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="curepto" id="curepto" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="empedrado" id="empedrado" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="maule" id="maule" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '  </div>' +
              '  <div class="row">\n' +
              '<div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Pelarco</b></div>' +
              '<div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Pencahue</b></div>' +
             '<div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Río Claro</b></div>' +
            '<div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">San Clemente</b></div>' +
            '<div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">San Rafael</b></div>' +
              '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="pelarco" id="pelarco" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="pencahue" id="pencahue" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="rio_claro" id="rio_claro" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="san_clemente" id="san_clemente" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="san_rafael" id="san_rafael" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '  </div>' +
             '</div>'+
         '</div>';
          document.querySelector("#div_id_ask_region").insertAdjacentHTML("beforeend",aux);
    }
    else{
        $("#comunas_maule").remove();
    }
}

function seleccionarTodasComunasProvinciaColchagua() {
    if ($("#provincia_colchagua").is(":checked")) {
        $("#san_fernando").prop('checked', true);
        $("#chepica").prop('checked', true);
        $("#chimbarongo").prop('checked', true);
        $("#lolol").prop('checked', true);
        $("#nancagua").prop('checked', true);
        $("#palmilla").prop('checked', true);
        $("#peralillo").prop('checked', true);
        $("#placilla").prop('checked', true);
        $("#pumanque").prop('checked', true);
        $("#santa_cruz").prop('checked', true);
    }
    else{
        $("#san_fernando").prop('checked', false);
        $("#chepica").prop('checked', false);
        $("#chimbarongo").prop('checked', false);
        $("#lolol").prop('checked', false);
        $("#nancagua").prop('checked', false);
        $("#palmilla").prop('checked', false);
        $("#peralillo").prop('checked', false);
        $("#placilla").prop('checked', false);
        $("#pumanque").prop('checked', false);
        $("#santa_cruz").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaCardenalCaro() {
    if ($("#provincia_cardenal_caro").is(":checked")) {
        $("#navidad").prop('checked', true);
        $("#paredones").prop('checked', true);
        $("#pichilemu").prop('checked', true);
        $("#la_estrella").prop('checked', true);
        $("#litueche").prop('checked', true);
        $("#marchihue").prop('checked', true);
    }
    else{
        $("#navidad").prop('checked', false);
        $("#paredones").prop('checked', false);
        $("#pichilemu").prop('checked', false);
        $("#la_estrella").prop('checked', false);
        $("#litueche").prop('checked', false);
        $("#marchihue").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaCachapoal() {
    if ($("#provincia_cachapoal").is(":checked")) {
        $("#rancagua").prop('checked', true);
        $("#codegua").prop('checked', true);
        $("#coinco").prop('checked', true);
        $("#coltauco").prop('checked', true);
        $("#donnihue").prop('checked', true);
        $("#graneros").prop('checked', true);
        $("#las_cabras").prop('checked', true);
        $("#machali").prop('checked', true);
        $("#malloa").prop('checked', true);
        $("#mostazal").prop('checked', true);
        $("#olivar").prop('checked', true);
        $("#peumo").prop('checked', true);
        $("#pichidegua").prop('checked', true);
        $("#quinta_de_tilcoco").prop('checked', true);
        $("#rengo").prop('checked', true);
        $("#requinoa").prop('checked', true);
        $("#san_vicente").prop('checked', true);
    }
    else{
        $("#rancagua").prop('checked', false);
        $("#codegua").prop('checked', false);
        $("#coinco").prop('checked', false);
        $("#coltauco").prop('checked', false);
        $("#donnihue").prop('checked', false);
        $("#graneros").prop('checked', false);
        $("#las_cabras").prop('checked', false);
        $("#machali").prop('checked', false);
        $("#malloa").prop('checked', false);
        $("#mostazal").prop('checked', false);
        $("#olivar").prop('checked', false);
        $("#peumo").prop('checked', false);
        $("#pichidegua").prop('checked', false);
        $("#quinta_de_tilcoco").prop('checked', false);
        $("#rengo").prop('checked', false);
        $("#requinoa").prop('checked', false);
        $("#san_vicente").prop('checked', false);
    }
}

function seleccionarTodasComunasRegion6(){
    if($("#region_6").is(":checked")){
        $("#provincia_cachapoal").prop("checked",true);
        $("#provincia_cardenal_caro").prop("checked",true);
        $("#provincia_colchagua").prop("checked",true);
    }
    else{
        $("#provincia_cachapoal").prop("checked",false);
        $("#provincia_cardenal_caro").prop("checked",false);
        $("#provincia_colchagua").prop("checked",false);
    }
    seleccionarTodasComunasProvinciaCachapoal();
    seleccionarTodasComunasProvinciaCardenalCaro();
    seleccionarTodasComunasProvinciaColchagua();
}

function mostrarComunasOhiggins(){
    if ($("#region_ohiggins").select && document.querySelector("#comunas_ohiggins")==null) {
        let aux = '<div id="comunas_ohiggins" class="form-group">' +
            '<label for="comunas_ohiggins" class=" requiredField">' +
            '2°) Seleccione la/s comuna/s en la/s que despacha' +
            '<span class="asteriskField">*</span>' +
            '</label>' +
            '<div class="container" id="id_comunas_ohiggins">' +
            '<div class="row">' +
              '    <div class="col bg-dark bg-opacity-80" style="text-align: center"><b style="color: white" >VI Región del Libertador General Bernardo OHiggins<br><input id="region_6" onclick="seleccionarTodasComunasRegion6();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
              '</div>'+
            '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Cachapoal<br><input id="provincia_cachapoal" onclick="seleccionarTodasComunasProvinciaCachapoal()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Rancagua</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Codegua</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Coinco</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Coltauco</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Doñihue</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Graneros</b></div>\n' +
            '  </div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="rancagua" id="rancagua" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="codegua" id="codegua" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="coinco" id="coinco" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="coltauco" id="coltauco" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="donnihue" id="donnihue" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="graneros" id="graneros" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '  </div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Las Cabras</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Machalí</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Malloa</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Mostazal</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Olivar</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Peumo</b></div>\n' +
            '  </div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="las_cabras" id="las_cabras" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="machali" id="machali" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="malloa" id="malloa" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="mostazal" id="mostazal" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="olivar" id="olivar" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="peumo" id="peumo" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '  </div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Pichidegua</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Quinta de Tilcoco</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Rengo</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Requínoa</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">San Vicente</b></div>\n' +
            '  </div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="pichidegua" id="pichidegua" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="quinta_de_tilcoco" id="quinta_de_tilcoco" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="rengo" id="rengo" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="requinoa" id="requinoa" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="san_vicente" id="san_vicente" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '  </div>' +
            '<div class="row"><div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Cardenal Caro<br><input id="provincia_cardenal_caro" onclick="seleccionarTodasComunasProvinciaCardenalCaro()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div></div>\n' +
            '  <div class="row">\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Navidad</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Paredones</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Pichilemu</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">La Estrella</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Litueche</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Marchihue</b></div>\n' +
            '  </div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="navidad" id="navidad" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="paredones" id="paredones" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="pichilemu" id="pichilemu" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="la_estrella" id="la_estrella" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="litueche" id="litueche" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="marchihue" id="marchihue" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '  </div>' +
            '<div class="row"><div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Colchagua<br><input id="provincia_colchagua" onclick="seleccionarTodasComunasProvinciaColchagua()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div></div>\n' +
              '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">San Fernando</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Chépica</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Chimbarongo</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Lolol</b></div>\n' +
              '<div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Nancagua</b></div>' +
              '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="san_fernando" id="san_fernando" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="chepica" id="chepica" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="chimbarongo" id="chimbarongo" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="lolol" id="lolol" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="nancagua" id="nancagua" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '  </div>' +
              '  <div class="row">\n' +
              '<div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Palmilla</b></div>' +
              '<div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Peralillo</b></div>' +
              '<div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Placilla</b></div>' +
             '<div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Pumanque</b></div>' +
            '<div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Santa Cruz</b></div>' +
              '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="palmilla" id="palmilla" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="peralillo" id="peralillo" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="placilla" id="placilla" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="pumanque" id="pumanque" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="santa_cruz" id="santa_cruz" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '  </div>' +
            '  </div>' +
             '</div>';
          document.querySelector("#div_id_ask_region").insertAdjacentHTML("beforeend",aux);
    }
    else{
        $("#comunas_ohiggins").remove();
    }
}

function seleccionarTodasComunasProvinciaMargaMarga(){
    if($("#provincia_marga_marga").is(":checked")) {
        $("#quilpue").prop('checked', true);
        $("#limache").prop('checked', true);
        $("#olmue").prop('checked', true);
        $("#villa_alemana").prop('checked', true);
    }
    else{
        $("#quilpue").prop('checked', false);
        $("#limache").prop('checked', false);
        $("#olmue").prop('checked', false);
        $("#villa_alemana").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaSanFelipeAconcagua() {
    if ($("#provincia_aconcagua").is(":checked")) {
        $("#san_felipe").prop('checked', true);
        $("#catemu").prop('checked', true);
        $("#llaillay").prop('checked', true);
        $("#panquehue").prop('checked', true);
        $("#putaendo").prop('checked', true);
        $("#santa_maria").prop('checked', true);
    }
    else{
        $("#san_felipe").prop('checked', false);
        $("#catemu").prop('checked', false);
        $("#llaillay").prop('checked', false);
        $("#panquehue").prop('checked', false);
        $("#putaendo").prop('checked', false);
        $("#santa_maria").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaSanAntonio() {
    if ($("#provincia_san_antonio").is(":checked")) {
        $("#san_antonio").prop('checked', true);
        $("#algarrobo").prop('checked', true);
        $("#cartagena").prop('checked', true);
        $("#el_quisco").prop('checked', true);
        $("#el_tabo").prop('checked', true);
        $("#santo_domingo").prop('checked', true);
    }
    else{
        $("#san_antonio").prop('checked', false);
        $("#algarrobo").prop('checked', false);
        $("#cartagena").prop('checked', false);
        $("#el_quisco").prop('checked', false);
        $("#el_tabo").prop('checked', false);
        $("#santo_domingo").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaPetorca() {
    if ($("#provincia_petorca").is(":checked")) {
        $("#la_ligua").prop('checked', true);
        $("#cabildo").prop('checked', true);
        $("#papudo").prop('checked', true);
        $("#petorca").prop('checked', true);
        $("#zapallar").prop('checked', true);
    }
    else{
        $("#la_ligua").prop('checked', false);
        $("#cabildo").prop('checked', false);
        $("#papudo").prop('checked', false);
        $("#petorca").prop('checked', false);
        $("#zapallar").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaValparaiso() {
    if ($("#provincia_valparaiso").is(":checked")) {
        $("#valparaiso").prop('checked', true);
        $("#casablanca").prop('checked', true);
        $("#concon").prop('checked', true);
        $("#juan_fernandez").prop('checked', true);
        $("#puchuncavi").prop('checked', true);
        $("#quintero").prop('checked', true);
        $("#vinna_del_mar").prop('checked', true);
    }
    else{
        $("#valparaiso").prop('checked', false);
        $("#casablanca").prop('checked', false);
        $("#concon").prop('checked', false);
        $("#juan_fernandez").prop('checked', false);
        $("#puchuncavi").prop('checked', false);
        $("#quintero").prop('checked', false);
        $("#vinna_del_mar").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaQuillota(){
    if($("#provincia_quillota").is(":checked")) {
        $("#quillota").prop('checked', true);
        $("#la_calera").prop('checked', true);
        $("#hijuelas").prop('checked', true);
        $("#la_cruz").prop('checked', true);
        $("#nogales").prop('checked', true);
    }
    else{
        $("#quillota").prop('checked', false);
        $("#la_calera").prop('checked', false);
        $("#hijuelas").prop('checked', false);
        $("#la_cruz").prop('checked', false);
        $("#nogales").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaLosAndes(){
    if($("#provincia_los_andes").is(":checked")) {
        $("#calle_larga").prop('checked', true);
        $("#los_andes").prop('checked', true);
        $("#rinconada").prop('checked', true);
        $("#san_esteban").prop('checked', true);
    }
    else{
        $("#calle_larga").prop('checked', false);
        $("#los_andes").prop('checked', false);
        $("#rinconada").prop('checked', false);
        $("#san_esteban").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaIslaPascua() {
    if ($("#provincia_isla_pascua").is(":checked")) {
        $("#isla_de_pascua").prop('checked', true);
    }
    else{
        $("#isla_de_pascua").prop('checked', false);
    }
}

function seleccionarTodasComunasRegion5(){
    if($("#region_5").is(":checked")){
        $("#provincia_isla_pascua").prop("checked",true);
        $("#provincia_los_andes").prop("checked",true);
        $("#provincia_quillota").prop("checked",true);
        $("#provincia_valparaiso").prop("checked",true);
        $("#provincia_petorca").prop("checked",true);
        $("#provincia_san_antonio").prop("checked",true);
        $("#provincia_aconcagua").prop("checked",true);
        $("#provincia_marga_marga").prop("checked",true);
    }
    else{
        $("#provincia_isla_pascua").prop("checked",false);
        $("#provincia_los_andes").prop("checked",false);
        $("#provincia_quillota").prop("checked",false);
        $("#provincia_valparaiso").prop("checked",false);
        $("#provincia_petorca").prop("checked",false);
        $("#provincia_san_antonio").prop("checked",false);
        $("#provincia_aconcagua").prop("checked",false);
        $("#provincia_marga_marga").prop("checked",false);
    }
    seleccionarTodasComunasProvinciaIslaPascua();
    seleccionarTodasComunasProvinciaLosAndes();
    seleccionarTodasComunasProvinciaQuillota();
    seleccionarTodasComunasProvinciaValparaiso();
    seleccionarTodasComunasProvinciaPetorca();
    seleccionarTodasComunasProvinciaSanAntonio();
    seleccionarTodasComunasProvinciaSanFelipeAconcagua();
    seleccionarTodasComunasProvinciaMargaMarga();
}

function mostrarComunasValparaiso(){
    if ($("#region_valparaiso").select && document.querySelector("#comunas_valparaiso")==null) {
        let aux = '<div id="comunas_valparaiso" class="form-group">' +
            '<label for="comunas_valparaiso" class=" requiredField">' +
            '2°) Seleccione la/s comuna/s en la/s que despacha' +
            '<span class="asteriskField">*</span>' +
            '</label>' +
            '<div class="container" id="id_comunas_valparaiso">' +
            '<div class="row">' +
              '    <div class="col bg-dark bg-opacity-80" style="text-align: center"><b style="color: white" >V Región de Valparaíso<br><input id="region_5" onclick="seleccionarTodasComunasRegion5();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
              '</div>'+
            '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Isla de Pascua<br><input id="provincia_isla_pascua" onclick="seleccionarTodasComunasProvinciaIslaPascua()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Isla de Pascua</b></div>\n' +
            '  </div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="isla_de_pascua" id="isla_de_pascua" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '  </div>' +
            '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Los Andes<br><input id="provincia_los_andes" onclick="seleccionarTodasComunasProvinciaLosAndes()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Los Andes</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Calle Larga</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Rinconada</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">San Esteban</b></div>\n' +

            '  </div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="los_andes" id="los_andes" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="calle_larga" id="calle_larga" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="rinconada" id="rinconada" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="san_esteban" id="san_esteban" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '  </div>' +
            '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Quillota<br><input id="provincia_quillota" onclick="seleccionarTodasComunasProvinciaQuillota()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Quillota</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">La Calera</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Hijuelas</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">La Cruz</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Nogales</b></div>\n' +
            '  </div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="quillota" id="quillota" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="la_calera" id="la_calera" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="hijuelas" id="hijuelas" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="la_cruz" id="la_cruz" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="nogales" id="nogales" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '  </div>' +
            '<div class="row">' +
            '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Valparaíso<br><input id="provincia_valparaiso" onclick="seleccionarTodasComunasProvinciaValparaiso()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '</div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Valparaíso</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Casablanca</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Concón</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Juan Fernández</b></div>\n' +
            '  </div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="valparaiso" id="valparaiso" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="casablanca" id="casablanca" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="concon" id="concon" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="juan_fernandez" id="juan_fernandez" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            '  </div>' +
              '  <div class="row">\n' +
                '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Puchuncaví</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Quintero</b></div>\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Viña del Mar</b></div>\n' +
              '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="puchuncavi" id="puchuncavi" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="quintero" id="quintero" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="vinna_del_mar" id="vinna_del_mar" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n'+
             '  </div>' +
            '<div class="row">' +
              '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Petorca<br><input id="provincia_petorca" onclick="seleccionarTodasComunasProvinciaPetorca()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
              '</div>'+
            '  <div class="row">\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">La Ligua</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Cabildo</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Papudo</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Petorca</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Zapallar</b></div>\n' +
              '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="la_ligua" id="la_ligua" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="cabildo" id="cabildo" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="papudo" id="papudo" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="petorca" id="petorca" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="zapallar" id="zapallar" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '  </div>' +
            '<div class="row">' +
              '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de San Antonio<br><input id="provincia_san_antonio" onclick="seleccionarTodasComunasProvinciaSanAntonio()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
              '</div>'+
              '  <div class="row">\n' +
           '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">San Antonio</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Algarrobo</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Cartagena</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">El Quisco</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">El Tabo</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Santo Domingo</b></div>\n' +
            '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="san_antonio" id="san_antonio" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="algarrobo" id="algarrobo" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="cartagena" id="cartagena" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="el_quisco" id="el_quisco" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="el_tabo" id="el_tabo" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="santo_domingo" id="santo_domingo" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '  </div>' +
           '<div class="row">' +
              '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de San Felipe de Aconcagua<br><input id="provincia_aconcagua" onclick="seleccionarTodasComunasProvinciaSanFelipeAconcagua()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
              '  <div class="row">\n' +
            '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">San Felipe</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Catemu</b></div>\n' +
              '<div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Llaillay</b></div>' +
              '<div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Panquehue</b></div>' +
              '<div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Putaendo</b></div>' +
              '<div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Santa María</b></div>' +
             '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="san_felipe" id="san_felipe" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="catemu" id="catemu" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="llaillay" id="llaillay" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="panquehue" id="panquehue" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="putaendo" id="putaendo" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="santa_maria" id="santa_maria" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '  </div>' +
            '<div class="row">' +
              '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Marga Marga<br><input id="provincia_marga_marga" onclick="seleccionarTodasComunasProvinciaMargaMarga()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
              '</div>'+
              '  <div class="row">\n' +
                '<div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Quilpué</b></div>' +
             '<div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Limache</b></div>' +
              '<div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Olmué</b></div>' +
              '<div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Villa Alemana</b></div>' +
              '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="quilpue" id="quilpue" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="limache" id="limache" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="olmue" id="olmue" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="villa_alemana" id="villa_alemana" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
            ' </div>' +
             '</div>'+
         '</div>';
          document.querySelector("#div_id_ask_region").insertAdjacentHTML("beforeend",aux);
    }
    else{
        $("#comunas_valparaiso").remove();
    }
}

function seleccionarTodasComunasProvinciaLimari() {
    if ($("#provincia_limari").is(":checked")) {
        $("#ovalle").prop('checked', true);
        $("#combarbala").prop('checked', true);
        $("#monte_patria").prop('checked', true);
        $("#punitaqui").prop('checked', true);
        $("#rio_hurtado").prop('checked', true);
    }
    else{
        $("#ovalle").prop('checked', false);
        $("#combarbala").prop('checked', false);
        $("#monte_patria").prop('checked', false);
        $("#punitaqui").prop('checked', false);
        $("#rio_hurtado").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaElqui(){
    if($("#provincia_elqui").is(":checked")) {
        $("#la_serena").prop('checked', true);
        $("#coquimbo").prop('checked', true);
        $("#andacollo").prop('checked', true);
        $("#la_higuera").prop('checked', true);
        $("#paihuano").prop('checked', true);
        $("#vicunna").prop('checked', true);
    }
    else{
        $("#la_serena").prop('checked', false);
        $("#coquimbo").prop('checked', false);
        $("#andacollo").prop('checked', false);
        $("#la_higuera").prop('checked', false);
        $("#paihuano").prop('checked', false);
        $("#vicunna").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaChoapa(){
    if($("#provincia_choapa").is(":checked")){
        $("#illapel").prop('checked', true);
        $("#canela").prop('checked', true);
        $("#los_vilos").prop('checked', true);
        $("#salamanca").prop('checked', true);
    }
    else{
        $("#illapel").prop('checked', false);
        $("#canela").prop('checked', false);
        $("#los_vilos").prop('checked', false);
        $("#salamanca").prop('checked', false);
    }
}

function seleccionarTodasComunasRegion4(){
    if($("#region_4").is(":checked")){
        $("#provincia_elqui").prop("checked",true);
        $("#provincia_choapa").prop("checked",true);
        $("#provincia_limari").prop("checked",true);
    }
    else{
        $("#provincia_elqui").prop("checked",false);
        $("#provincia_choapa").prop("checked",false);
        $("#provincia_limari").prop("checked",false);
    }
    seleccionarTodasComunasProvinciaElqui();
    seleccionarTodasComunasProvinciaChoapa();
    seleccionarTodasComunasProvinciaLimari();
}

function mostrarComunasCoquimbo(){
    if ($("#region_coquimbo").select && document.querySelector("#comunas_coquimbo")==null){
          let aux = '<div id="comunas_coquimbo" class="form-group">' +
         '<label for="comunas_coquimbo" class=" requiredField">' +
         '2°) Seleccione la/s comuna/s en la/s que despacha' +
         '<span class="asteriskField">*</span>' +
         '</label>' +
          '<div class="container" id="id_comunas_coquimbo">' +
              '<div class="row">' +
              '    <div class="col bg-dark bg-opacity-80" style="text-align: center"><b style="color: white" >IV Región de Coquimbo<br><input id="region_4" onclick="seleccionarTodasComunasRegion4();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
              '</div>'+
              '<div class="row">' +
              '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Choapa<br><input id="provincia_choapa" onclick="seleccionarTodasComunasProvinciaChoapa()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
              '</div>'+
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Illapel</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Canela</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Los Vilos</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Salamanca</b></div>\n' +
            '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="illapel" id="illapel" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="canela" id="canela" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="los_vilos" id="los_vilos" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="salamanca" id="salamanca" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '  </div>' +
              '<div class="row">' +
              '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Elqui<br><input id="provincia_elqui" onclick="seleccionarTodasComunasProvinciaElqui()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
              '</div>'+
             '  <div class="row">\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">La Serena</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Coquimbo</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Andacollo</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">La Higuera</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Paihuano</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Vicuña</b></div>\n' +
         '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="salamanca" id="la_serena" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="coquimbo" id="coquimbo" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="andacollo" id="andacollo" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="la_higuera" id="la_higuera" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="paihuano" id="paihuano" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="vicunna" id="vicunna" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
           '  </div>' +
              '<div class="row">' +
              '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Limarí<br><input id="provincia_limari" onclick="seleccionarTodasComunasProvinciaLimari()" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
              '</div>'+
              '  <div class="row">\n' +
           '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Ovalle</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Combarbalá</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Monte Patria</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Punitaqui</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Río Hurtado</b></div>\n' +
            '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="ovalle" id="ovalle" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="combarbala" id="combarbala" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="monte_patria" id="monte_patria" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="punitaqui" id="punitaqui" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="rio_hurtado" id="rio_hurtado" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '  </div>' +
             '</div>'+
         '</div>';
          document.querySelector("#div_id_ask_region").insertAdjacentHTML("beforeend",aux);
    }
    else{
        $("#comunas_coquimbo").remove();
    }
}

function seleccionarTodasComunasProvinciaChannaral(){
    if($("#provincia_channaral").is(":checked")) {
        $("#channaral").prop('checked', true);
        $("#diego_de_almagro").prop('checked', true);
    }
    else{
        $("#channaral").prop('checked', false);
        $("#diego_de_almagro").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaHuasco() {
    if ($("#provincia_huasco").is(":checked")) {
        $("#vallenar").prop('checked', true);
        $("#alto_del_carmen").prop('checked', true);
        $("#freirina").prop('checked', true);
        $("#huasco").prop('checked', true);
    }
    else{
        $("#vallenar").prop('checked', false);
        $("#alto_del_carmen").prop('checked', false);
        $("#freirina").prop('checked', false);
        $("#huasco").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaCopiapo() {
    if ($("#provincia_copiapo").is(":checked")) {
        $("#copiapo").prop('checked', true);
        $("#caldera").prop('checked', true);
        $("#tierra_amarilla").prop('checked', true);
    }
    else{
        $("#copiapo").prop('checked', false);
        $("#caldera").prop('checked', false);
        $("#tierra_amarilla").prop('checked', false);
    }
}

function seleccionarTodasComunasRegion3(){
    if($("#region_3").is(":checked")){
        $("#provincia_copiapo").prop("checked",true);
        $("#provincia_huasco").prop("checked",true);
        $("#provincia_channaral").prop("checked",true);
    }
    else{
        $("#provincia_copiapo").prop("checked",false);
        $("#provincia_huasco").prop("checked",false);
        $("#provincia_channaral").prop("checked",false);
    }
    seleccionarTodasComunasProvinciaCopiapo();
    seleccionarTodasComunasProvinciaHuasco();
    seleccionarTodasComunasProvinciaChannaral();
}

function mostrarComunasAtacama(){
    if ($("#atacama").select && document.querySelector("#comunas_atacama")==null){
          let aux = '<div id="comunas_atacama" class="form-group">' +
         '<label for="comunas_atacama" class=" requiredField">' +
         '2°) Seleccione la/s comuna/s en la/s que despacha' +
         '<span class="asteriskField">*</span>' +
         '</label>' +
          '<div class="container" id="id_comunas_atacama">' +
              '<div class="row">' +
              '    <div class="col bg-dark bg-opacity-80" style="text-align: center"><b style="color: white" >III Región de Atacama<br><input id="region_3" onclick="seleccionarTodasComunasRegion3();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
              '</div>'+
              '<div class="row">' +
              '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Copiapó<br><input id="provincia_copiapo" onclick="seleccionarTodasComunasProvinciaCopiapo();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
              '</div>'+
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Copiapó</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Caldera</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Tierra Amarilla</b></div>\n' +
            '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="copiapo" id="copiapo" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="caldera" id="caldera" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="tierra_amarilla" id="tierra_amarilla" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '  </div>' +
              '<div class="row">' +
              '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Huasco<br><input id="provincia_huasco" onclick="seleccionarTodasComunasProvinciaHuasco();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
              '</div>'+
              '  <div class="row">\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Vallenar</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Alto del Carmen</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Freirina</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Huasco</b></div>\n' +
            '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="vallenar" id="vallenar" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="alto_del_carmen" id="alto_del_carmen" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="freirina" id="freirina" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="huasco" id="huasco" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '  </div>' +
              '<div class="row">' +
              '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de Chañaral <br><input id="provincia_channaral" onclick="seleccionarTodasComunasProvinciaChannaral();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
              '</div>'+
              '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Chañaral</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Diego de Almagro</b></div>\n' +
            '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="channaral" id="channaral" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="diego_de_almagro" id="diego_de_almagro" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '  </div>' +
             '</div>'+
         '</div>';
          document.querySelector("#div_id_ask_region").insertAdjacentHTML("beforeend",aux);
    }
    else{
        $("#comunas_atacama").remove();
    }
}

function seleccionarTodasComunasProvinciaElLoa(){
    if($("#provincia_el_loa").is(":checked")){
        $("#calama").prop('checked', true);
        $("#ollague").prop('checked', true);
        $("#san_pedro_de_atacama").prop('checked', true);
    }
    else{
        $("#calama").prop('checked', false);
        $("#ollague").prop('checked', false);
        $("#san_pedro_de_atacama").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaTocopilla(){
    if($("#provincia_tocopilla").is(":checked")){
        $("#tocopilla").prop('checked', true);
        $("#maria_elena").prop('checked', true);
    }
    else{
        $("#tocopilla").prop('checked', false);
        $("#maria_elena").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaAntofagasta(){
    if($("#provincia_antofagasta").is(":checked")){
        $("#antofagasta").prop('checked', true);
        $("#mejillones").prop('checked', true);
        $("#sierra_gorda").prop('checked', true);
        $("#taltal").prop('checked', true);
    }
    else{
        $("#antofagasta").prop('checked', false);
        $("#mejillones").prop('checked', false);
        $("#sierra_gorda").prop('checked', false);
        $("#taltal").prop('checked', false);
    }
}

function seleccionarTodasComunasRegion2(){
    if($("#region_2").is(":checked")){
        $("#provincia_antofagasta").prop("checked",true);
        $("#provincia_tocopilla").prop("checked",true);
        $("#provincia_el_loa").prop("checked",true);
    }
    else{
        $("#provincia_antofagasta").prop("checked",false);
        $("#provincia_tocopilla").prop("checked",false);
        $("#provincia_el_loa").prop("checked",false);
    }
    seleccionarTodasComunasProvinciaAntofagasta();
    seleccionarTodasComunasProvinciaTocopilla();
    seleccionarTodasComunasProvinciaElLoa();
}

function mostrarComunasAntofagasta(){
    if ($("#region_antofagasta").select && document.querySelector("#comunas_antofagasta")==null){
          let aux = '<div id="comunas_antofagasta" class="form-group">' +
         '<label for="comunas_antofagasta" class=" requiredField">' +
         '2°) Seleccione la/s comuna/s en la/s que despacha' +
         '<span class="asteriskField">*</span>' +
         '</label>' +
          '<div class="container" id="id_comunas_antofagasta">' +
              '<div class="row">' +
              '    <div class="col bg-dark bg-opacity-80" style="text-align: center"><b style="color: white" >II Región de Antofagasta<br><input id="region_2" onclick="seleccionarTodasComunasRegion2();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
              '</div>'+
              '<div class="row">' +
              '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white" >Provincia de Antofagasta<br><input id="provincia_antofagasta" onclick="seleccionarTodasComunasProvinciaAntofagasta();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
              '</div>'+
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Antofagasta</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Mejillones</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Sierra Gorda</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Taltal</b></div>\n' +
             '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="antofagasta" id="antofagasta" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="mejillones" id="mejillones" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="sierra_gorda" id="sierra_gorda" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="taltal" id="taltal" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '  </div>' +
              '<div class="row">' +
              '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white" >Provincia de Tocopilla<br><input id="provincia_tocopilla" onclick="seleccionarTodasComunasProvinciaTocopilla();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
              '</div>'+
             '  <div class="row">\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Tocopilla</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">María Elena</b></div>\n' +
             '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="tocopilla" id="tocopilla" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="maria_elena" id="maria_elena" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '  </div>' +
              '<div class="row">' +
              '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white">Provincia de El Loa<br><input id="provincia_el_loa" onclick="seleccionarTodasComunasProvinciaElLoa();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
              '</div>'+
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Calama</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Ollagüe</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">San Pedro de Atacama</b></div>\n' +
             '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="calama" id="calama" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="ollague" id="ollague" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="san_pedro_de_atacama" id="san_pedro_de_atacama" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '  </div>' +
             '</div>'+
         '</div>';
          document.querySelector("#div_id_ask_region").insertAdjacentHTML("beforeend",aux);
    }
    else{
        $("#comunas_antofagasta").remove();
    }
}

function seleccionarTodasComunasProvinciaTamarugal() {
    if($("#provincia_tamarugal").is(":checked")) {
        $("#pozo_almonte").prop('checked', true);
        $("#caminna").prop('checked', true);
        $("#colchane").prop('checked', true);
        $("#huara").prop('checked', true);
        $("#pica").prop('checked', true);
    }
    else{
        $("#pozo_almonte").prop('checked', false);
        $("#caminna").prop('checked', false);
        $("#colchane").prop('checked', false);
        $("#huara").prop('checked', false);
        $("#pica").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaIquique(){
    if($("#provincia_iquique").is(':checked')) {
        $("#iquique").prop('checked', true);
        $("#alto_hospicio").prop('checked', true);
    }
    else{
        $("#iquique").prop('checked', false);
        $("#alto_hospicio").prop('checked', false);
    }
}

function seleccionarTodasComunasRegion1(){
    if($("#region_1").is(":checked")){
        $("#provincia_iquique").prop("checked",true);
        $("#provincia_tamarugal").prop("checked",true);
    }
    else{
        $("#provincia_iquique").prop("checked",false);
        $("#provincia_tamarugal").prop("checked",false);
    }
    seleccionarTodasComunasProvinciaIquique();
    seleccionarTodasComunasProvinciaTamarugal();
}

function mostrarComunasTarapaca(){
    if ($("#tarapaca").select && document.querySelector("#comunas_tarapaca")==null){
          let aux = '<div id="comunas_tarapaca" class="form-group">' +
         '<label for="comunas_tarapaca" class=" requiredField">' +
         '2°) Seleccione la/s comuna/s en la/s que despacha' +
         '<span class="asteriskField">*</span>' +
         '</label>' +
          '<div class="container" id="id_comunas_tarapaca">' +
              '<div class="row">' +
              '    <div class="col bg-dark bg-opacity-80" style="text-align: center"><b style="color: white" >I Región de Tarapacá<br><input id="region_1" onclick="seleccionarTodasComunasRegion1();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
              '</div>'+
              '<div class="row">' +
              '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white" >Provincia de Iquique<br><input id="provincia_iquique" onclick="seleccionarTodasComunasProvinciaIquique();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
              '</div>'+
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Iquique</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Alto Hospicio</b></div>\n' +
             '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="iquique" id="iquique" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="alto_hospicio" id="alto_hospicio" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '  </div>' +
              '<div class="row">' +
              '<div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white" >Provincia de Tamarugal<br><input id="provincia_tamarugal" onclick="seleccionarTodasComunasProvinciaTamarugal();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
              '</div>'+
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Pozo Almonte</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Camiña</b></div>\n' +
              '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Colchane</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Huara</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Pica</b></div>\n' +
             '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="pozo_almonte" id="pozo_almonte" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="caminna" id="caminna" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="colchane" id="colchane" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="huara" id="huara" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
               '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="pica" id="pica" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '  </div>' +
             '</div>'+
         '</div>';
          document.querySelector("#div_id_ask_region").insertAdjacentHTML("beforeend",aux);
    }
    else{
        $("#comunas_tarapaca").remove();
    }
}

function seleccionarTodasComunasProvinciaArica(){
    if($("#provincia_arica").is(':checked')){
        $("#arica").prop('checked', true);
        $("#camarones").prop('checked', true);
    }
    else{
        $("#arica").prop('checked', false);
        $("#camarones").prop('checked', false);
    }
}

function seleccionarTodasComunasProvinciaParinacota() {
    if ($("#provincia_parinacota").prop('checked')) {
        $("#putre").prop('checked', true);
        $("#general_lagos").prop('checked', true);
    }
    else{
        $("#putre").prop('checked', false);
        $("#general_lagos").prop('checked', false);
    }
}

function seleccionarTodasComunasRegion15(){
    if($("#region_15").is(":checked")){
        $("#provincia_arica").prop("checked",true);
        $("#provincia_parinacota").prop("checked",true);
    }
    else{
        $("#provincia_arica").prop("checked",false);
        $("#provincia_parinacota").prop("checked",false);
    }
    seleccionarTodasComunasProvinciaArica();
    seleccionarTodasComunasProvinciaParinacota();
}

function mostrarComunasAricaParinacota(){
    if ($("#arica_parinacota").select && document.querySelector("#comunas_arica_parinacota")==null){
          let aux = '<div id="comunas_arica_parinacota" class="form-group">' +
         '<label for="comunas_arica_parinacota" class=" requiredField">' +
         '2°) Seleccione la/s comuna/s en la/s que despacha' +
         '<span class="asteriskField">*</span>' +
         '</label>' +
          '<div class="container" id="id_comunas_arica_parinacota">' +
              '<div class="row">' +
              '    <div class="col bg-dark bg-opacity-80" style="text-align: center"><b style="color: white" >XV Región de Arica y Parinacota<br><input id="region_15" onclick="seleccionarTodasComunasRegion15();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
              '</div>'+
              '<div class="row">' +
              '    <div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white" >Provincia de Arica<br><input id="provincia_arica" onclick="seleccionarTodasComunasProvinciaArica();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
              '</div>'+
              '<div class="row">' +
              '</div>'+
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Arica</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Camarones</b></div>\n' +

             '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input  name="arica" id="arica" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="camarones" id="camarones" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
                 '  </div>' +
              '<div class="row">' +
              '    <div class="col bg-primary bg-opacity-100" style="text-align: center"><b style="color: white" >Provincia de Parinacota<br><input id="provincia_parinacota" onclick="seleccionarTodasComunasProvinciaParinacota();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
              '</div>'+
              '<div class="row">' +
              '<div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">Putre</b></div>\n' +
             '<div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black">General Lagos</b></div>\n' +
              '</div>'+
              '<div class="row">' +
              '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="putre" id="putre" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" style="height: 100px; text-align: center"><input name="general_lagos" id="general_lagos" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
              '</div>'+
               '</div>'+
         '</div>';
          document.querySelector("#div_id_ask_region").insertAdjacentHTML("beforeend",aux);
    }
    else{
        $("#comunas_arica_parinacota").remove();
    }
}

function generarCodigoHtmlAskRegion() {
         var code='<div id="div_id_ask_region" class="form-group col-md-12">' +
         '<label for="id_prefijo_phonenumber" class=" requiredField">' +
         '1°) Seleccione la/s región/es en la/s que despacha' +
         '<span class="asteriskField">*</span>' +
         '</label>' +
          '<div class="container" id="id_regiones">' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black"> XV <br> Región de Arica y Parinacota</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black"> I <br> Región de Tarapacá</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black"> II <br> Región de Antofagasta</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black"> III <br> Región de Atacama</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black"> IV <br> Región de Coquimbo</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black"> V <br> Región de Valparaíso</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black"> VI <br> Región del Libertador General Bernardo OHiggins</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black"> VII <br> Región del Maule</b></div>\n' +
             '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" id="arica_parinacota" style="height: 100px; text-align: center"><input onclick="mostrarComunasAricaParinacota();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" id="tarapaca" style="height: 100px; text-align: center"><input onclick="mostrarComunasTarapaca();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" id="region_antofagasta" style="height: 100px; text-align: center"><input onclick="mostrarComunasAntofagasta();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" id="atacama" style="height: 100px; text-align: center"><input onclick="mostrarComunasAtacama();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" id="region_coquimbo" style="height: 100px; text-align: center"><input onclick="mostrarComunasCoquimbo();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" id="region_valparaiso" style="height: 100px; text-align: center"><input onclick="mostrarComunasValparaiso();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" id="region_ohiggins" style="height: 100px; text-align: center"><input onclick="mostrarComunasOhiggins();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50 border-bottom" id="region_maule" style="height: 100px; text-align: center"><input onclick="mostrarComunasMaule();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black"> XVI <br> Región de Ñuble</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black"> VIII <br> Región del Biobío</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black"> IX <br> Región de La Araucanía</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black"> XIV <br> Región de Los Ríos</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black"> X <br> Región de Los Lagos</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black"> XI <br> Región de Aysén del G. Carlos Ibáñez del Campo</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black"> XII <br> Región de Magallanes y de la Antártica Chilena</b></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="text-align: center"><b style="color: black"> RM <br> Región Metropolitana de Santiago</b></div>\n' +
             '  </div>' +
             '  <div class="row">\n' +
             '    <div class="col bg-info bg-opacity-50" style="height: 100px; text-align: center"><input id="nnuble" onclick="mostrarComunasNnuble();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="height: 100px; text-align: center"><input id="biobio" onclick="mostrarComunasBioBio();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="height: 100px; text-align: center"><input id="araucania" onclick="mostrarComunasAraucania();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="height: 100px; text-align: center"><input id="rios" onclick="mostrarComunasLosRios();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="height: 100px; text-align: center"><input id="lagos" onclick="mostrarComunasLosLagos();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="height: 100px; text-align: center"><input id="region_aysen" onclick="mostrarComunasAysen();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="height: 100px; text-align: center"><input id="magallanes" onclick="mostrarComunasMagallanes();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '    <div class="col bg-info bg-opacity-50" style="height: 100px; text-align: center"><input id="metropolitana" onclick="mostrarComunasMetropolitana();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>\n' +
             '  </div>' +
             '</div>'+
         '</div>';
     return code;
}

function generarCodigoHtmlAskZone() {
    return '<div id="div_ask_zone" name="div_ask_zone" class="form-group col-md-6" onclick="consultaDespachosEnTodoChileOMenos();">' +
        '<label class=" requiredField">' +
        ' ¿Desea indicar la zona en la que efectua despachos o realiza sus servicios? ' +
        '<span class="asteriskField">*</span>' +
        '</label>' +
        '<div >' +
        '<div class="form-check">' +
        '<input type="radio" class="form-check-input" name="div_ask_zone" value="yes"  id="id_zone_0" required>' +
        '<label class="form-check-label" for="id_zone_0">' +
        ' Sí' +
        ' </label>' +
        '</div>' +
        '<div class="form-check">' +
        '<input type="radio" class="form-check-input" name="div_ask_zone" value="no"  id="id_zone_1" required>' +
        '<label class="form-check-label" for="id_zone_1">' +
        ' No' +
        '</label> </div> </div> ' +
        '<div ><small id="succes_ask_zone" style="color: green"></small></div>\n' +
        '<div><small id="error_ask_zone" style="color: red"></small></div>' +
        '</div>';
}

function consultaDespachosEnTodoChileOMenos(){
    if ($("#id_zone_0").prop("checked") && document.querySelector("#div_id_radio_country_or_commune")==null) {
          let aux = '<div id="div_id_radio_country_or_commune" name="radio_country_or_commune" class="form-group col-md-6" onclick="mostrarRegiones();">' +
              '<label class=" requiredField">' +
              ' ¿En qué área efectua despachos? ' +
              '<span class="asteriskField">*</span>' +
        '</label>' +
        '<div >' +
        '<div class="form-check">' +
        '<input type="radio" class="form-check-input" name="radio_country_or_commune" value="todo_chile"  id="id_country_or_commune_0" required>' +
        '<label class="form-check-label" for="id_country_or_commune_0">' +
        ' En todas las comunas de Chile' +
        ' </label>' +
        '</div>' +
        '<div class="form-check">' +
        '<input type="radio" class="form-check-input" name="radio_country_or_commune" value="no_todo_chile"  id="id_country_or_commune_1" required>' +
        '<label class="form-check-label" for="id_country_or_commune_1">' +
        ' En un conjunto de comunas que no abarca todas las comunas de Chile' +
        '</label> </div> </div>' +
              '<div ><small id="succes_radio_country_commune" style="color: green"></small></div>\n' +
              '<div><small id="error_radio_country_commune" style="color: red"></small></div>' +
              ' </div>';
          document.querySelector("#div_ask_zone").insertAdjacentHTML("afterend", aux);
    }
    if($("#id_zone_1").prop("checked")){
        $("#div_id_radio_country_or_commune").remove();
        $("#div_id_ask_region").remove();
    }
}

function generarCodigoHtmlAskTradeLocation() {
    let code='<div id="div_id_ask_personal_trade_location" name="ask_personal_trade_location" class="form-group col-md-6" onclick="generarCodigoHtmlSumarSucursales()">' +
        '<label class=" requiredField">' +
        '¿Su ubicación personal corresponde a una ubicación de sucursal?' +
        '<span class="asteriskField">*</span>' +
        '</label>' +
        '<div >' +
        '<div class="form-check">' +
        '<input type="radio" class="form-check-input" value="yes" name="ask_personal_trade_location"  id="id_ask_personal_trade_location_0" required>' +
        '<label class="form-check-label" for="id_ask_personal_trade_location_0">' +
        ' Sí' +
        ' </label>' +
        '</div>' +
        '<div class="form-check">' +
        '<input type="radio" class="form-check-input" value="no" name="ask_personal_trade_location"  id="id_ask_personal_trade_location_1" required>' +
        '<label class="form-check-label" for="id_ask_personal_trade_location_1">' +
        ' No' +
        '</label> </div> </div>' +
        '<div><small id="succes_ask_personal_trade_location" style="color: green"></small></div>\n' +
        '<div><small id="error_ask_personal_trade_location" style="color: red"></small></div>' +
        ' </div>';
    return code;
}

var counter_intervalo=0;
var counter_set=0;

function setMaxMinute(e) {
    if (document.getElementById("hora_inicio" + e).value == document.getElementById("hora_termino" + e).value) {
        document.getElementById("minuto_inicio" + e).setAttribute("max", document.getElementById("minuto_termino" + e).value);
    }
}

function reestablecerLimitesMinutos(e){
    document.getElementById("minuto_termino" + e).setAttribute("max", "59");
    document.getElementById("minuto_termino" + e).setAttribute("min", "0");
    document.getElementById("minuto_inicio" + e).setAttribute("max", "59");
    document.getElementById("minuto_inicio" + e).setAttribute("min", "0");
}

function setMaxHour(e){
    document.getElementById("hora_inicio"+e).setAttribute("max",document.getElementById("hora_termino"+e).value);
    reestablecerLimitesMinutos(e);
}

function setMinMinute(e) {
    if (document.getElementById("hora_inicio" + e).value == document.getElementById("hora_termino" + e).value) {
        document.getElementById("minuto_termino" + e).setAttribute("min", document.getElementById("minuto_inicio" + e).value);
    }
}

function setMinHour(e){
    document.getElementById("hora_termino"+e).setAttribute("min",document.getElementById("hora_inicio"+e).value);
    reestablecerLimitesMinutos(e);
}

function desecharIntervalo(e,w){
    $("#intervalo"+e+"_conjunto"+w).remove();
    counter_intervalo=counter_intervalo-1;
}

function eliminarConjuntoIntervalos(e){
    counter_set=counter_set-1;
    $("#div_id_dynamic_table_schedule"+e).remove();
}

function sumarIntervalo(e, w){
    counter_intervalo=counter_intervalo+1;
    let aux='<div id="intervalo'+counter_intervalo+'_conjunto'+counter_set+'">'+
        '<div class="row">' +
        '<div class="col col-3" style="border-style: groove">Horas</div>' +
        '<div class="col col-2" style="border-style: groove">Minutos</div>' +
        '<div class="col col-3" style="border-style: groove">Horas</div>' +
        '<div class="col col-2" style="border-style: groove">Minutos</div>' +
        '<div class="col col-2" style="border-top: groove; border-right: groove; border-left: groove"></div>' +
        '</div>' +
        '<div class="row">' +
        '<div class="col col-3" style="border-style: groove"><input name="hora_inicio'+counter_intervalo+'_conjunto'+counter_set+'" id="hora_inicio'+counter_intervalo+'" type="number" min="0" max="23" onclick="setMinHour('+counter_intervalo+');"></div>' +
        '<div class="col col-2" style="border-style: groove"><input name="minuto_inicio'+counter_intervalo+'_conjunto'+counter_set+'" id="minuto_inicio'+counter_intervalo+'" type="number" min="0" max="59" onclick="setMinMinute('+counter_intervalo+');"></div>' +
        '<div class="col col-3" style="border-style: groove"><input name="hora_termino'+counter_intervalo+'_conjunto'+counter_set+'" id="hora_termino'+counter_intervalo+'" type="number" min="0" max="23" onclick="setMaxHour('+counter_intervalo+');"></div>' +
        '<div class="col col-2" style="border-style: groove"><input name="minuto_termino'+counter_intervalo+'_conjunto'+counter_set+'" id="minuto_termino'+counter_intervalo+'" type="number" min="0" max="59" onclick="setMaxMinute('+counter_intervalo+');"></div>' +
        '<div class="col col-2" style="border-left: groove; border-bottom: groove; border-right: groove">' +
        '<abbr title="Eliminar intervalo"><button type="button" class="btn btn-outline-secondary" onclick="desecharIntervalo('+counter_intervalo+', '+counter_set+');">\n' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">\n' +
        '<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>\n' +
        '<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>\n' +
        '</svg></button></abbr>'+
        '</div>' +
        '</div>' +
        '</div>';
    document.querySelector("#intervalo"+e+"_conjunto"+w).insertAdjacentHTML("afterend",aux)
}

function sumarConjuntoIntervalos(e){
    counter_intervalo=counter_intervalo+1;
    counter_set=counter_set+1;
    let aux='<div style="margin-top: 10px; margin-bottom: 10px; text-align: center" id="div_id_dynamic_table_schedule'+counter_set+'">' +
        '<div class="row">' +
        '<div class="col col-5" style="border-style: groove; overflow: auto">Inicio del intervalo de funcionamiento</div>' +
        '<div class="col col-5" style="border-style: groove; overflow: auto">Fin del intervalo de funcionamiento</div>' +
        '<div class="col col-2" style="border-top: groove; border-right: groove; border-left: groove"></div>' +
        '</div>' +
        '<div name="intervalo'+counter_intervalo+'_conjunto'+counter_set+'" id="intervalo'+counter_intervalo+'_conjunto'+counter_set+'">'+
        '<div class="row">' +
        '<div class="col col-3" style="border-style: groove; overflow: auto">Horas</div>' +
        '<div class="col col-2" style="border-style: groove; overflow: auto">Minutos</div>' +
        '<div class="col col-3" style="border-style: groove; overflow: auto">Horas</div>' +
        '<div class="col col-2" style="border-style: groove; overflow: auto">Minutos</div>' +
        '<div class="col col-2" style="border-right: groove; border-left: groove"></div>' +
        '</div>' +
        '<div class="row">' +
        '<div class="col col-3" style="border-style: groove"><input name="hora_inicio'+counter_intervalo+'_conjunto'+counter_set+'" id="hora_inicio'+counter_intervalo+'" type="number" min="0" max="23" onclick="setMinHour('+counter_intervalo+');"></div>' +
        '<div class="col col-2" style="border-style: groove"><input name="minuto_inicio'+counter_intervalo+'_conjunto'+counter_set+'" id="minuto_inicio'+counter_intervalo+'" type="number" min="0" max="59" onclick="setMinMinute('+counter_intervalo+');"></div>' +
        '<div class="col col-3" style="border-style: groove"><input name="hora_termino'+counter_intervalo+'_conjunto'+counter_set+'" id="hora_termino'+counter_intervalo+'" type="number" min="0" max="23" onclick="setMaxHour('+counter_intervalo+');"></div>' +
        '<div class="col col-2" style="border-style: groove"><input name=minuto_termino'+counter_intervalo+'_conjunto'+counter_set+'" id="minuto_termino'+counter_intervalo+'_conjunto'+counter_set+'" type="number" min="0" max="59" onclick="setMaxMinute('+counter_intervalo+');"></div>' +
        '<div class="col col-2" style="border-right: groove; border-left: groove; border-bottom: groove">' +
        '<abbr title="Añadir intervalo horario valido para los días seleccionados"><button type="button" class="btn btn-outline-secondary" onclick="sumarIntervalo('+counter_intervalo+','+counter_set+');">\n' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">\n' +
        '<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>\n' +
        '</svg></button></abbr>'+
        '</div>' +
        '</div>' +
        '</div>'+
        '<div class="row bg-primary" style="color: white">' +
        '<div class="col col-1" style="overflow: auto">Valido para:</div>' +
        '<div class="col col-1" style="overflow: auto">Lunes</div>' +
        '<div class="col col-1" style="overflow: auto">Martes</div>' +
        '<div class="col col-2" style="overflow: auto">Miercoles</div>' +
        '<div class="col col-1" style="overflow: auto">Jueves</div>' +
        '<div class="col col-2" style="overflow: auto">Viernes</div>' +
        '<div class="col col-1" style="overflow: auto">Sabado</div>' +
        '<div class="col col-2" style="overflow: auto">Domingo</div>' +
        '<div class="col col-1"></div>' +
        '</div>' +
        '<div class="row bg-primary" style="color: white">' +
        '<div class="col col-1"></div>' +
        '<div class="col col-1"><input type="checkbox" name="lunes_conjunto'+counter_set+'" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>' +
        '<div class="col col-1"><input type="checkbox" name="martes_conjunto'+counter_set+'" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>' +
        '<div class="col col-2"><input type="checkbox" name="miercoles_conjunto'+counter_set+'" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>' +
        '<div class="col col-1"><input type="checkbox" name="jueves_conjunto'+counter_set+'" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>' +
        '<div class="col col-2"><input type="checkbox" name="viernes_conjunto'+counter_set+'" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>' +
        '<div class="col col-1"><input type="checkbox" name="sabado_conjunto'+counter_set+'" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>' +
        '<div class="col col-2"><input type="checkbox" name="domingo_conjunto'+counter_set+'" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>' +
        '<div class="col col-1">' +
        '<abbr title="Eliminar tabla"><button onclick="eliminarConjuntoIntervalos('+counter_set+');" type="button" class="btn btn-primary">\n' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">\n' +
        '<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>\n' +
        '</svg></button></abbr>' +
        '</div>' +
        '</div>' +
        '</div>';
    document.querySelector("#div_id_dynamic_table_schedule"+e).insertAdjacentHTML("afterend",aux);
}

function generarCodigoHtmlTablaHorariosDinamica(){
    return '<div style="margin-top: 10px; margin-bottom: 10px; text-align: center" id="div_id_dynamic_table_schedule'+counter_set+'">' +
        '<div class="row">' +
        '<div class="col col-5" style="border-style: groove; overflow: auto">Inicio del intervalo de funcionamiento</div>' +
        '<div class="col col-5" style="border-style: groove; overflow: auto">Fin del intervalo de funcionamiento</div>' +
        '<div class="col col-2" style="border-top: groove; border-right: groove; border-left: groove"></div>' +
        '</div>' +
        '<div name="intervalo'+counter_intervalo+'_conjunto'+counter_set+'" id="intervalo'+counter_intervalo+'_conjunto'+counter_set+'">'+
        '<div class="row">' +
        '<div class="col col-3" style="border-style: groove; overflow: auto">Horas</div>' +
        '<div class="col col-2" style="border-style: groove; overflow: auto">Minutos</div>' +
        '<div class="col col-3" style="border-style: groove; overflow: auto">Horas</div>' +
        '<div class="col col-2" style="border-style: groove; overflow: auto">Minutos</div>' +
        '<div class="col col-2" style="border-right: groove; border-left: groove"></div>' +
        '</div>' +
        '<div class="row">' +
        '<div class="col col-3" style="border-style: groove"><input name="hora_inicio'+counter_intervalo+'_conjunto'+counter_set+'" id="hora_inicio'+counter_intervalo+'" type="number" min="0" max="23" onclick="setMinHour('+counter_intervalo+');"></div>' +
        '<div class="col col-2" style="border-style: groove"><input name="minuto_inicio'+counter_intervalo+'_conjunto'+counter_set+'" id="minuto_inicio'+counter_intervalo+'" type="number" min="0" max="59" onclick="setMinMinute('+counter_intervalo+');"></div>' +
        '<div class="col col-3" style="border-style: groove"><input name="hora_termino'+counter_intervalo+'_conjunto'+counter_set+'" id="hora_termino'+counter_intervalo+'" type="number" min="0" max="23" onclick="setMaxHour('+counter_intervalo+');"></div>' +
        '<div class="col col-2" style="border-style: groove"><input name="minuto_termino'+counter_intervalo+'_conjunto'+counter_set+'" id="minuto_termino'+counter_intervalo+'" type="number" min="0" max="59" onclick="setMaxMinute('+counter_intervalo+');"></div>' +
        '<div class="col col-2" style="border-right: groove; border-left: groove; border-bottom: groove">' +
        '<abbr title="Añadir intervalo horario valido para los días seleccionados">' +
        '<button type="button" class="btn btn-outline-secondary" onclick="sumarIntervalo('+counter_intervalo+','+counter_set+');">\n' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">\n' +
        '<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>\n' +
        '</svg></button></abbr>'+
        '</div>' +
        '</div>' +
        '</div>'+
        '<div class="row bg-primary" style="color: white">' +
        '<div class="col col-1" style="overflow: auto">Valido para:</div>' +
        '<div class="col col-1" style="overflow: auto">Lunes</div>' +
        '<div class="col col-1" style="overflow: auto">Martes</div>' +
        '<div class="col col-2" style="overflow: auto">Miercoles</div>' +
        '<div class="col col-1" style="overflow: auto">Jueves</div>' +
        '<div class="col col-2" style="overflow: auto">Viernes</div>' +
        '<div class="col col-1" style="overflow: auto">Sabado</div>' +
        '<div class="col col-2" style="overflow: auto">Domingo</div>' +
        '<div class="col col-1"></div>' +
        '</div>' +
        '<div class="row bg-primary" style="color: white">' +
        '<div class="col col-1"></div>' +
        '<div class="col col-1"><input name="lunes_conjunto'+counter_set+'" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>' +
        '<div class="col col-1"><input name="martes_conjunto'+counter_set+'" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>' +
        '<div class="col col-2"><input name="miercoles_conjunto'+counter_set+'" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>' +
        '<div class="col col-1"><input name="jueves_conjunto'+counter_set+'" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>' +
        '<div class="col col-2"><input name="viernes_conjunto'+counter_set+'" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>' +
        '<div class="col col-1"><input name="sabado_conjunto'+counter_set+'" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>' +
        '<div class="col col-2"><input name="domingo_conjunto'+counter_set+'" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></div>' +
        '<div class="col col-1">' +
        '<abbr title="Crear una nueva tabla dinámica"><button onclick="sumarConjuntoIntervalos('+counter_set+');" type="button" class="btn btn-primary">\n' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-journal-plus" viewBox="0 0 16 16">\n' +
        '<path fill-rule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"/>\n' +
        '<path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>\n' +
        '<path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>\n' +
        '</svg></button></abbr></div>' +
        '</div>' +
        '</div>';
}

function showDynamicTable(){
        /*
        if($("#id_ask_dynamic_static_table_0").prop("checked")){
        for(var i=0; i<=counter_set; i++){
            $("#div_id_dynamic_table_schedule"+i).remove();
        }
        counter_set=0;
        counter_intervalo=0;
        if(document.querySelector("#id_div_table_static_schedule")==null){
            let static_table=generarCodigoHtmlTablaHorariosEstatica();
            document.querySelector("#div_id_ask_dynamic_static_table").insertAdjacentHTML("afterend",static_table);
        }
    }
    else{
        $("#id_div_table_static_schedule").remove();
        if(document.querySelector("#div_id_dynamic_table_schedule0")==null){
            let dynamic_table=generarCodigoHtmlTablaHorariosDinamica();
            document.querySelector("#div_id_ask_dynamic_static_table").insertAdjacentHTML("afterend",dynamic_table);
        }
    }
        * */
    if($("#id_ask_schedule_0").prop('checked')){
        if(document.getElementById("div_id_dynamic_table_schedule0") === null){
            let dynamic_table=generarCodigoHtmlTablaHorariosDinamica();
            document.querySelector("#div_id_ask_schedule").insertAdjacentHTML("afterend",dynamic_table);
        }
    }
    else{
        for(var i=0; i<=counter_set+1; i++){
            $("#div_id_dynamic_table_schedule"+i).remove();
        }
        counter_set=0;
        counter_intervalo=0;
    }
}

function askDynamicStaticTable() {
    if ($("#id_ask_schedule_0").prop("checked")) {
        if (document.querySelector("#div_id_ask_dynamic_static_table") == null) {
            let ask = '<div id="div_id_ask_dynamic_static_table" name="ask_dynamic_static_table" class="form-group" onclick="showDynamicTable();"> <label class=" requiredField">\n' +
                '¿Desea indicar sus horarios en una tabla estática o dinámica?<span class="asteriskField">*</span> </label> ' +
                '<div > <div class="form-check">' +
                '<input type="radio" class="form-check-input" name="ask_dynamic_static_table" value="static"  id="id_ask_dynamic_static_table_0" required\n' +
                '> <label class="form-check-label" for="id_ask_dynamic_static_table_0">\n' +
                '            Tabla estática\n' +
                '        </label> </div> <div class="form-check"> <input type="radio" class="form-check-input" name="ask_dynamic_static_table" value="dynamic"  id="id_ask_dynamic_static_table_1" required\n' +
                '> <label class="form-check-label" for="id_ask_dynamic_static_table_1">\n' +
                '            Tabla dinámica\n' +
                '        </label> </div> </div> </div>';
            document.querySelector("#div_id_ask_schedule").insertAdjacentHTML("afterend", ask);
        }
    }
    else{
        $("#div_id_ask_dynamic_static_table").remove();
        $("#id_div_table_static_schedule").remove();
        for(var i=0; i<=counter_set; i++){
            $("#div_id_dynamic_table_schedule"+i).remove();
        }
        counter_set=0;
        counter_intervalo=0;
    }
}

function generarCodigoHtmlAskSchedule(){
    return '<div id="div_id_ask_schedule" name="ask_schedule" class="form-group col-md-6" onclick="showDynamicTable();"> <label class=" requiredField">\n' +
        '¿Desea agregar sus horarios en los que está activo/a?<span class="asteriskField">*</span> </label> ' +
        '<div > <div class="form-check">' +
        '<input type="radio" class="form-check-input" name="ask_schedule" value="yes"  id="id_ask_schedule_0" required\n' +
        '> <label class="form-check-label" for="id_ask_schedule_0">\n' +
        '            Sí\n' +
        '        </label> </div> <div class="form-check"> <input type="radio" class="form-check-input" name="ask_schedule" value="no"  id="id_ask_schedule_1" required> ' +
        '<label class="form-check-label" for="id_ask_schedule_1" > ' +
        'No' +
        '</label> </div> </div> ' +
        '<div ><small id="succes_ask_schedule" style="color: green"></small></div>\n' +
        '<div><small id="error_ask_schedule" style="color: red"></small></div>' +
        '</div>';
}

function generarCodigoHtmlAskTradeName() {
    return '<div id="div_id_ask_trade_name" class="form-group col-md-6 mb-3">' +
        '<label for="id_ask_trade_name" class=" requiredField">Nombre comercial:<span class="asteriskField">*</span></label>' +
        '<div><input type="text" name="ask_trade_name" class="textinput textInput form-control" required id="id_ask_trade_name">' +
        '</div></div>';
}

function annadirCampoNombreComercial(){
    if (document.querySelector("#div_id_ask_trade_name")==null && $("#id_ask_existence_trade_name_0").prop("checked")) {
          let aux = generarCodigoHtmlAskTradeName();
          document.querySelector("#div_id_ask_existence_trade_name").insertAdjacentHTML("afterend", aux);
    }
    if($("#id_ask_existence_trade_name_1").prop("checked")){
        $("#div_id_ask_trade_name").remove();
    }
}

function generarCodigoHtmlAskExistenceTradeName() {
    return '<div id="div_id_ask_existence_trade_name" name="ask_existence_trade_name" onclick="annadirCampoNombreComercial();" class="form-group col-md-6 mb-3">' +
        '<label class=" requiredField">\n' +
        '¿Desea añadir un nombre comercial?<span class="asteriskField">*</span></label> ' +
        '<div><div class="form-check">' +
        '<input type="radio" class="form-check-input" name="ask_existence_trade_name" value="yes"  id="id_ask_existence_trade_name_0" required\n>' +
        '<label class="form-check-label" for="id_ask_existence_trade_name_0">\n' +
        'Sí</label></div>' +
        '<div class="form-check">' +
        '<input type="radio" class="form-check-input" name="ask_existence_trade_name" value="no"  id="id_ask_existence_trade_name_1" required>' +
        '<label class="form-check-label" for="id_ask_existence_trade_name_1">\n' +
        'No</label> </div> </div> ' +
        '<div><small id="succes_ask_existence_trade_name" style="color: green"></small></div>\n' +
        '<div><small id="error_ask_existence_trade_name" style="color: red"></small></div>' +
        '</div>';
}

function agregar_consultas() {
    let html_ask_zone=generarCodigoHtmlAskZone();
    let html_ask_trade_location=generarCodigoHtmlAskTradeLocation();
    let html_ask_schedule=generarCodigoHtmlAskSchedule();
    let html_ask_existence_trade_name=generarCodigoHtmlAskExistenceTradeName();
    let html_show_type_user = '<input hidden="true" type="text" name="text_type_user" id="id_text_type_user">';
    let existence_html_ask_schedule=document.querySelector("#div_id_ask_schedule")==null;
    let existence_html_ask_existence_trade_name=document.querySelector("#div_id_ask_existence_trade_name")==null;
    let existence_html_ask_trade_location=document.querySelector("#div_id_ask_personal_trade_location")==null;
    let existence_ask_zone=document.querySelector("#div_ask_zone")==null;
    let existence_show_type_user=document.querySelector("#id_text_type_user")==null;
    if ($('#t_u_1').prop('checked')) {
        if (existence_html_ask_schedule && existence_html_ask_trade_location && existence_html_ask_existence_trade_name && existence_ask_zone) {
            document.querySelector("#div_id_type_user").insertAdjacentHTML("afterend", html_ask_schedule);
            document.querySelector("#div_id_type_user").insertAdjacentHTML("afterend", html_ask_zone);
            document.querySelector("#div_id_type_user").insertAdjacentHTML("afterend", html_ask_trade_location);
            document.querySelector("#div_id_type_user").insertAdjacentHTML("afterend", html_ask_existence_trade_name);
            if (existence_show_type_user) {
                existence_show_type_user = false;
                document.querySelector("#form").insertAdjacentHTML("beforeend", html_show_type_user);
            }
        }
        if ($('#t_u_0').prop('checked')) {
            document.querySelector("#id_text_type_user").value = "client - provider";
        }
        else{
            document.querySelector("#id_text_type_user").value = "provider";
        }
    }
    else{
        if (existence_show_type_user) {
            existence_show_type_user = false;
            document.querySelector("#form").insertAdjacentHTML("beforeend", html_show_type_user);
        }
        if ($('#t_u_0').prop('checked')) {
            document.querySelector("#id_text_type_user").value = "client";
        }
        else{
            document.querySelector("#id_text_type_user").value = "";
            $("#id_text_type_user").remove();
            existence_show_type_user=true;
        }
        $("#div_id_ask_existence_trade_name").remove();
        $("#div_id_ask_schedule").remove();
        $("#id_schedule").remove();
        $("#div_id_ask_region").remove();
        $("#div_ask_zone").remove();
        $("#div_id_ask_personal_trade_location").remove();
        $("#div_ask_branch").remove();
        $("#trade_location_map").remove();
        $("#div_id_ask_dynamic_static_table").remove();
        for(var i=0; i<=counter_set; i++){
            $("#div_id_dynamic_table_schedule"+i).remove();
        }
        counter_set=0;
        counter_intervalo=0;
   }
  }

function seleccionarTodosLosHorariosDelDomingo(){
    if($("#domingo").is(":checked")){
        $("#domingo0").prop("checked",true);
        $("#domingo1").prop("checked",true);
        $("#domingo2").prop("checked",true);
        $("#domingo3").prop("checked",true);
        $("#domingo4").prop("checked",true);
        $("#domingo5").prop("checked",true);
        $("#domingo6").prop("checked",true);
        $("#domingo7").prop("checked",true);
        $("#domingo8").prop("checked",true);
        $("#domingo9").prop("checked",true);
        $("#domingo10").prop("checked",true);
        $("#domingo11").prop("checked",true);
        $("#domingo12").prop("checked",true);
        $("#domingo13").prop("checked",true);
        $("#domingo14").prop("checked",true);
        $("#domingo15").prop("checked",true);
        $("#domingo16").prop("checked",true);
        $("#domingo17").prop("checked",true);
        $("#domingo18").prop("checked",true);
        $("#domingo19").prop("checked",true);
        $("#domingo20").prop("checked",true);
        $("#domingo21").prop("checked",true);
        $("#domingo22").prop("checked",true);
        $("#domingo23").prop("checked",true);
    }
    else{
        $("#domingo0").prop("checked",false);
        $("#domingo1").prop("checked",false);
        $("#domingo2").prop("checked",false);
        $("#domingo3").prop("checked",false);
        $("#domingo4").prop("checked",false);
        $("#domingo5").prop("checked",false);
        $("#domingo6").prop("checked",false);
        $("#domingo7").prop("checked",false);
        $("#domingo8").prop("checked",false);
        $("#domingo9").prop("checked",false);
        $("#domingo10").prop("checked",false);
        $("#domingo11").prop("checked",false);
        $("#domingo12").prop("checked",false);
        $("#domingo13").prop("checked",false);
        $("#domingo14").prop("checked",false);
        $("#domingo15").prop("checked",false);
        $("#domingo16").prop("checked",false);
        $("#domingo17").prop("checked",false);
        $("#domingo18").prop("checked",false);
        $("#domingo19").prop("checked",false);
        $("#domingo20").prop("checked",false);
        $("#domingo21").prop("checked",false);
        $("#domingo22").prop("checked",false);
        $("#domingo23").prop("checked",false);
    }
}

function seleccionarTodosLosHorariosDelSabado(){
    if($("#sabado").is(":checked")){
        $("#sabado0").prop("checked",true);
        $("#sabado1").prop("checked",true);
        $("#sabado2").prop("checked",true);
        $("#sabado3").prop("checked",true);
        $("#sabado4").prop("checked",true);
        $("#sabado5").prop("checked",true);
        $("#sabado6").prop("checked",true);
        $("#sabado7").prop("checked",true);
        $("#sabado8").prop("checked",true);
        $("#sabado9").prop("checked",true);
        $("#sabado10").prop("checked",true);
        $("#sabado11").prop("checked",true);
        $("#sabado12").prop("checked",true);
        $("#sabado13").prop("checked",true);
        $("#sabado14").prop("checked",true);
        $("#sabado15").prop("checked",true);
        $("#sabado16").prop("checked",true);
        $("#sabado17").prop("checked",true);
        $("#sabado18").prop("checked",true);
        $("#sabado19").prop("checked",true);
        $("#sabado20").prop("checked",true);
        $("#sabado21").prop("checked",true);
        $("#sabado22").prop("checked",true);
        $("#sabado23").prop("checked",true);
    }
    else{
        $("#sabado0").prop("checked",false);
        $("#sabado1").prop("checked",false);
        $("#sabado2").prop("checked",false);
        $("#sabado3").prop("checked",false);
        $("#sabado4").prop("checked",false);
        $("#sabado5").prop("checked",false);
        $("#sabado6").prop("checked",false);
        $("#sabado7").prop("checked",false);
        $("#sabado8").prop("checked",false);
        $("#sabado9").prop("checked",false);
        $("#sabado10").prop("checked",false);
        $("#sabado11").prop("checked",false);
        $("#sabado12").prop("checked",false);
        $("#sabado13").prop("checked",false);
        $("#sabado14").prop("checked",false);
        $("#sabado15").prop("checked",false);
        $("#sabado16").prop("checked",false);
        $("#sabado17").prop("checked",false);
        $("#sabado18").prop("checked",false);
        $("#sabado19").prop("checked",false);
        $("#sabado20").prop("checked",false);
        $("#sabado21").prop("checked",false);
        $("#sabado22").prop("checked",false);
        $("#sabado23").prop("checked",false);
    }
}

function seleccionarTodosLosHorariosDelViernes(){
    if($("#viernes").is(":checked")){
        $("#viernes0").prop("checked",true);
        $("#viernes1").prop("checked",true);
        $("#viernes2").prop("checked",true);
        $("#viernes3").prop("checked",true);
        $("#viernes4").prop("checked",true);
        $("#viernes5").prop("checked",true);
        $("#viernes6").prop("checked",true);
        $("#viernes7").prop("checked",true);
        $("#viernes8").prop("checked",true);
        $("#viernes9").prop("checked",true);
        $("#viernes10").prop("checked",true);
        $("#viernes11").prop("checked",true);
        $("#viernes12").prop("checked",true);
        $("#viernes13").prop("checked",true);
        $("#viernes14").prop("checked",true);
        $("#viernes15").prop("checked",true);
        $("#viernes16").prop("checked",true);
        $("#viernes17").prop("checked",true);
        $("#viernes18").prop("checked",true);
        $("#viernes19").prop("checked",true);
        $("#viernes20").prop("checked",true);
        $("#viernes21").prop("checked",true);
        $("#viernes22").prop("checked",true);
        $("#viernes23").prop("checked",true);
    }
    else{
        $("#viernes0").prop("checked",false);
        $("#viernes1").prop("checked",false);
        $("#viernes2").prop("checked",false);
        $("#viernes3").prop("checked",false);
        $("#viernes4").prop("checked",false);
        $("#viernes5").prop("checked",false);
        $("#viernes6").prop("checked",false);
        $("#viernes7").prop("checked",false);
        $("#viernes8").prop("checked",false);
        $("#viernes9").prop("checked",false);
        $("#viernes10").prop("checked",false);
        $("#viernes11").prop("checked",false);
        $("#viernes12").prop("checked",false);
        $("#viernes13").prop("checked",false);
        $("#viernes14").prop("checked",false);
        $("#viernes15").prop("checked",false);
        $("#viernes16").prop("checked",false);
        $("#viernes17").prop("checked",false);
        $("#viernes18").prop("checked",false);
        $("#viernes19").prop("checked",false);
        $("#viernes20").prop("checked",false);
        $("#viernes21").prop("checked",false);
        $("#viernes22").prop("checked",false);
        $("#viernes23").prop("checked",false);
    }
}

function seleccionarTodosLosHorariosDelJueves(){
    if($("#jueves").is(":checked")){
        $("#jueves0").prop("checked",true);
        $("#jueves1").prop("checked",true);
        $("#jueves2").prop("checked",true);
        $("#jueves3").prop("checked",true);
        $("#jueves4").prop("checked",true);
        $("#jueves5").prop("checked",true);
        $("#jueves6").prop("checked",true);
        $("#jueves7").prop("checked",true);
        $("#jueves8").prop("checked",true);
        $("#jueves9").prop("checked",true);
        $("#jueves10").prop("checked",true);
        $("#jueves11").prop("checked",true);
        $("#jueves12").prop("checked",true);
        $("#jueves13").prop("checked",true);
        $("#jueves14").prop("checked",true);
        $("#jueves15").prop("checked",true);
        $("#jueves16").prop("checked",true);
        $("#jueves17").prop("checked",true);
        $("#jueves18").prop("checked",true);
        $("#jueves19").prop("checked",true);
        $("#jueves20").prop("checked",true);
        $("#jueves21").prop("checked",true);
        $("#jueves22").prop("checked",true);
        $("#jueves23").prop("checked",true);
    }
    else{
        $("#jueves0").prop("checked",false);
        $("#jueves1").prop("checked",false);
        $("#jueves2").prop("checked",false);
        $("#jueves3").prop("checked",false);
        $("#jueves4").prop("checked",false);
        $("#jueves5").prop("checked",false);
        $("#jueves6").prop("checked",false);
        $("#jueves7").prop("checked",false);
        $("#jueves8").prop("checked",false);
        $("#jueves9").prop("checked",false);
        $("#jueves10").prop("checked",false);
        $("#jueves11").prop("checked",false);
        $("#jueves12").prop("checked",false);
        $("#jueves13").prop("checked",false);
        $("#jueves14").prop("checked",false);
        $("#jueves15").prop("checked",false);
        $("#jueves16").prop("checked",false);
        $("#jueves17").prop("checked",false);
        $("#jueves18").prop("checked",false);
        $("#jueves19").prop("checked",false);
        $("#jueves20").prop("checked",false);
        $("#jueves21").prop("checked",false);
        $("#jueves22").prop("checked",false);
        $("#jueves23").prop("checked",false);
    }
}

function seleccionarTodosLosHorariosDelMiercoles(){
    if($("#miercoles").is(":checked")){
        $("#miercoles0").prop("checked",true);
        $("#miercoles1").prop("checked",true);
        $("#miercoles2").prop("checked",true);
        $("#miercoles3").prop("checked",true);
        $("#miercoles4").prop("checked",true);
        $("#miercoles5").prop("checked",true);
        $("#miercoles6").prop("checked",true);
        $("#miercoles7").prop("checked",true);
        $("#miercoles8").prop("checked",true);
        $("#miercoles9").prop("checked",true);
        $("#miercoles10").prop("checked",true);
        $("#miercoles11").prop("checked",true);
        $("#miercoles12").prop("checked",true);
        $("#miercoles13").prop("checked",true);
        $("#miercoles14").prop("checked",true);
        $("#miercoles15").prop("checked",true);
        $("#miercoles16").prop("checked",true);
        $("#miercoles17").prop("checked",true);
        $("#miercoles18").prop("checked",true);
        $("#miercoles19").prop("checked",true);
        $("#miercoles20").prop("checked",true);
        $("#miercoles21").prop("checked",true);
        $("#miercoles22").prop("checked",true);
        $("#miercoles23").prop("checked",true);
    }
    else{
        $("#miercoles0").prop("checked",false);
        $("#miercoles1").prop("checked",false);
        $("#miercoles2").prop("checked",false);
        $("#miercoles3").prop("checked",false);
        $("#miercoles4").prop("checked",false);
        $("#miercoles5").prop("checked",false);
        $("#miercoles6").prop("checked",false);
        $("#miercoles7").prop("checked",false);
        $("#miercoles8").prop("checked",false);
        $("#miercoles9").prop("checked",false);
        $("#miercoles10").prop("checked",false);
        $("#miercoles11").prop("checked",false);
        $("#miercoles12").prop("checked",false);
        $("#miercoles13").prop("checked",false);
        $("#miercoles14").prop("checked",false);
        $("#miercoles15").prop("checked",false);
        $("#miercoles16").prop("checked",false);
        $("#miercoles17").prop("checked",false);
        $("#miercoles18").prop("checked",false);
        $("#miercoles19").prop("checked",false);
        $("#miercoles20").prop("checked",false);
        $("#miercoles21").prop("checked",false);
        $("#miercoles22").prop("checked",false);
        $("#miercoles23").prop("checked",false);
    }
}

function seleccionarTodosLosHorariosDelMartes(){
    if($("#martes").is(":checked")){
        $("#martes0").prop("checked",true);
        $("#martes1").prop("checked",true);
        $("#martes2").prop("checked",true);
        $("#martes3").prop("checked",true);
        $("#martes4").prop("checked",true);
        $("#martes5").prop("checked",true);
        $("#martes6").prop("checked",true);
        $("#martes7").prop("checked",true);
        $("#martes8").prop("checked",true);
        $("#martes9").prop("checked",true);
        $("#martes10").prop("checked",true);
        $("#martes11").prop("checked",true);
        $("#martes12").prop("checked",true);
        $("#martes13").prop("checked",true);
        $("#martes14").prop("checked",true);
        $("#martes15").prop("checked",true);
        $("#martes16").prop("checked",true);
        $("#martes17").prop("checked",true);
        $("#martes18").prop("checked",true);
        $("#martes19").prop("checked",true);
        $("#martes20").prop("checked",true);
        $("#martes21").prop("checked",true);
        $("#martes22").prop("checked",true);
        $("#martes23").prop("checked",true);
    }
    else{
        $("#martes0").prop("checked",false);
        $("#martes1").prop("checked",false);
        $("#martes2").prop("checked",false);
        $("#martes3").prop("checked",false);
        $("#martes4").prop("checked",false);
        $("#martes5").prop("checked",false);
        $("#martes6").prop("checked",false);
        $("#martes7").prop("checked",false);
        $("#martes8").prop("checked",false);
        $("#martes9").prop("checked",false);
        $("#martes10").prop("checked",false);
        $("#martes11").prop("checked",false);
        $("#martes12").prop("checked",false);
        $("#martes13").prop("checked",false);
        $("#martes14").prop("checked",false);
        $("#martes15").prop("checked",false);
        $("#martes16").prop("checked",false);
        $("#martes17").prop("checked",false);
        $("#martes18").prop("checked",false);
        $("#martes19").prop("checked",false);
        $("#martes20").prop("checked",false);
        $("#martes21").prop("checked",false);
        $("#martes22").prop("checked",false);
        $("#martes23").prop("checked",false);
    }
}

function seleccionarTodosLosHorariosDelLunes(){
    if($("#lunes").is(":checked")){
        $("#lunes0").prop("checked",true);
        $("#lunes1").prop("checked",true);
        $("#lunes2").prop("checked",true);
        $("#lunes3").prop("checked",true);
        $("#lunes4").prop("checked",true);
        $("#lunes5").prop("checked",true);
        $("#lunes6").prop("checked",true);
        $("#lunes7").prop("checked",true);
        $("#lunes8").prop("checked",true);
        $("#lunes9").prop("checked",true);
        $("#lunes10").prop("checked",true);
        $("#lunes11").prop("checked",true);
        $("#lunes12").prop("checked",true);
        $("#lunes13").prop("checked",true);
        $("#lunes14").prop("checked",true);
        $("#lunes15").prop("checked",true);
        $("#lunes16").prop("checked",true);
        $("#lunes17").prop("checked",true);
        $("#lunes18").prop("checked",true);
        $("#lunes19").prop("checked",true);
        $("#lunes20").prop("checked",true);
        $("#lunes21").prop("checked",true);
        $("#lunes22").prop("checked",true);
        $("#lunes23").prop("checked",true);
    }
    else{
        $("#lunes0").prop("checked",false);
        $("#lunes1").prop("checked",false);
        $("#lunes2").prop("checked",false);
        $("#lunes3").prop("checked",false);
        $("#lunes4").prop("checked",false);
        $("#lunes5").prop("checked",false);
        $("#lunes6").prop("checked",false);
        $("#lunes7").prop("checked",false);
        $("#lunes8").prop("checked",false);
        $("#lunes9").prop("checked",false);
        $("#lunes10").prop("checked",false);
        $("#lunes11").prop("checked",false);
        $("#lunes12").prop("checked",false);
        $("#lunes13").prop("checked",false);
        $("#lunes14").prop("checked",false);
        $("#lunes15").prop("checked",false);
        $("#lunes16").prop("checked",false);
        $("#lunes17").prop("checked",false);
        $("#lunes18").prop("checked",false);
        $("#lunes19").prop("checked",false);
        $("#lunes20").prop("checked",false);
        $("#lunes21").prop("checked",false);
        $("#lunes22").prop("checked",false);
        $("#lunes23").prop("checked",false);
    }
}

function generarCodigoHtmlTablaHorariosEstatica(){
    return '<div class="container" id="id_div_table_static_schedule">' +
            '  <div class="row">\n' +
            '    <div class="col bg-primary bg-opacity-75"><b style="color: white"> </b></div>\n' +
            '    <div class="col bg-primary bg-opacity-75"><b style="color: white">Lunes<input id="lunes" onclick="seleccionarTodosLosHorariosDelLunes();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-primary bg-opacity-75"><b style="color: white">Martes<input id="martes" onclick="seleccionarTodosLosHorariosDelMartes();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-primary bg-opacity-75"><b style="color: white">Miercoles<input id="miercoles" onclick="seleccionarTodosLosHorariosDelMiercoles();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-primary bg-opacity-75"><b style="color: white">Jueves<input id="jueves" onclick="seleccionarTodosLosHorariosDelJueves();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-primary bg-opacity-75"><b style="color: white">Viernes<input id="viernes" onclick="seleccionarTodosLosHorariosDelViernes();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-primary bg-opacity-75"><b style="color: white">Sábado<input id="sabado" onclick="seleccionarTodosLosHorariosDelSabado();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-primary bg-opacity-75"><b style="color: white">Domingo<input id="domingo" onclick="seleccionarTodosLosHorariosDelDomingo();" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '  </div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black">00:00 - 01:00</b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="lunes_0" id="lunes0" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="martes_0" id="martes0"  type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="miercoles_0" id="miercoles0" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="jueves_0" id="jueves0" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="viernes_0" id="viernes0" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="sabado_0" id="sabado0" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="domingo_0" id="domingo0" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '  </div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white">01:00-02:00</b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="lunes_1" id="lunes1" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="martes_1" id="martes1" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="miercoles_1" id="miercoles1" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="jueves_1" id="jueves1" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="viernes_1" id="viernes1" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="sabado_1" id="sabado1" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="domingo_1" id="domingo1" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '  </div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black">02:00 - 03:00</b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="lunes_2" id="lunes2" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="martes_2" id="martes2" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="miercoles_2" id="miercoles2" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="jueves_2" id="jueves2" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="viernes_2" id="viernes2" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="sabado_2" id="sabado2" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="domingo_2" id="domingo2" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '  </div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white">03:00-04:00</b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="lunes_3" id="lunes3" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="martes_3" id="martes3" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="miercoles_3" id="miercoles3" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="jueves_3" id="jueves3" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="viernes_3" id="viernes3" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="sabado_3" id="sabado3" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="domingo_3" id="domingo3" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '  </div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black">04:00 - 05:00</b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="lunes_4" id="lunes4" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="martes_4" id="martes4" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="miercoles_4" id="miercoles4" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="jueves_4" id="jueves4" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="viernes_4" id="viernes4" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="sabado_4" id="sabado4" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="domingo_4" id="domingo4" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '  </div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white">05:00-06:00</b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="lunes_5" id="lunes5" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="martes_5" id="martes5" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="miercoles_5" id="miercoles5" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="jueves_5" id="jueves5" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="viernes_5" id="viernes5" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="sabado_5" id="sabado5" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="domingo_5" id="domingo5" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '  </div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black">06:00 - 07:00</b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="lunes_6" id="lunes6" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="martes_6" id="martes6" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="miercoles_6" id="miercoles6" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="jueves_6" id="jueves6" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="viernes_6" id="viernes6" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="sabado_6" id="sabado6" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="domingo_6" id="domingo6" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '  </div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white">07:00-08:00</b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="lunes_7" id="lunes7" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="martes_7" id="martes7" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="miercoles_7" id="miercoles7" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="jueves_7" id="jueves7" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="viernes_7" id="viernes7" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="sabado_7" id="sabado7" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="domingo_7" id="domingo7" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '  </div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black">08:00-09:00</b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="lunes_8" id="lunes8" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="martes_8" id="martes8" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="miercoles_8" id="miercoles8" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="jueves_8" id="jueves8" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="viernes_8" id="viernes8" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="sabado_8" id="sabado8" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="domingo_8" id="domingo8" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '  </div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white">09:00 - 10:00</b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="lunes_9" id="lunes9" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="martes_9" id="martes9" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="miercoles_9" id="miercoles9" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="jueves_9" id="jueves9" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="viernes_9" id="viernes9" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="sabado_9" id="sabado9" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="domingo_9" id="domingo9" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '  </div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black">10:00-11:00</b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="lunes_10" id="lunes10" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="martes_10" id="martes10" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="miercoles_10" id="miercoles10" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="jueves_10" id="jueves10" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="viernes_10" id="viernes10" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="sabado_10" id="sabado10" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="domingo_10" id="domingo10" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '  </div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white">11:00 - 12:00</b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="lunes_11" id="lunes11" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="martes_11" id="martes11" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="miercoles_11" id="miercoles11" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="jueves_11" id="jueves11" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="viernes_11" id="viernes11" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="sabado_11" id="sabado11" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="domingo_11" id="domingo11" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '  </div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black">12:00-13:00</b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="lunes_12" id="lunes12" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="martes_12" id="martes12" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="miercoles_12" id="miercoles12" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="jueves_12" id="jueves12" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="viernes_12" id="viernes12" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="sabado_12" id="sabado12" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="domingo_12" id="domingo12" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '  </div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white">13:00-14:00</b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="lunes_13" id="lunes13" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="martes_13" id="martes13" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="miercoles_13" id="miercoles13" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="jueves_13" id="jueves13" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="viernes_13" id="viernes13" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="sabado_13" id="sabado13" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="domingo_13" id="domingo13" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '  </div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black">14:00 - 15:00</b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="lunes_14" id="lunes14" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="martes_14" id="martes14" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="miercoles_14" id="miercoles14" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="jueves_14" id="jueves14" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="viernes_14" id="viernes14" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="sabado_14" id="sabado14" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="domingo_14" id="domingo14" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '  </div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white">15:00-16:00</b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="lunes_15" id="lunes15" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="martes_15" id="martes15" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="miercoles_15" id="miercoles15" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="jueves_15" id="jueves15" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="viernes_15" id="viernes15" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="sabado_15" id="sabado15" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="domingo_15" id="domingo15" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '  </div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black">16:00 - 17:00</b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="lunes_16" id="lunes16" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="martes_16" id="martes16" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="miercoles_16" id="miercoles16" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="jueves_16" id="jueves16" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="viernes_16" id="viernes16" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="sabado_16" id="sabado16" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="domingo_16" id="domingo16" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '  </div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white">17:00-18:00</b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="lunes_17" id="lunes17" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="martes_17" id="martes17" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="miercoles_17" id="miercoles17" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="jueves_17" id="jueves17" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="viernes_17" id="viernes17" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="sabado_17" id="sabado17" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="domingo_17" id="domingo17" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '  </div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-secondary bg-opacity-25"><strong style="color: black">18:00-19:00</strong></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="lunes_18" id="lunes18" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="martes_18" id="martes18" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="miercoles_18" id="miercoles18" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="jueves_18" id="jueves18" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="viernes_18" id="viernes18" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="sabado_18" id="sabado18" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="domingo_18" id="domingo18" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '  </div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white">19:00 - 20:00</b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="lunes_19" id="lunes19" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="martes_19" id="martes19" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="miercoles_19" id="miercoles19" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="jueves_19" id="jueves19" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="viernes_19" id="viernes19" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="sabado_19" id="sabado19" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="domingo_19" id="domingo19" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '  </div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-secondary bg-opacity-25"><strong style="color: black">20:00-21:00</strong></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="lunes_20" id="lunes20" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="martes_20" id="martes20" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="miercoles_20" id="miercoles20" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="jueves_20" id="jueves20" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="viernes_20" id="viernes20" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="sabado_20" id="sabado20" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="domingo_20" id="domingo20" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '  </div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white">21:00 - 22:00</b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="lunes_21" id="lunes21" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="martes_21" id="martes21" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="miercoles_21" id="miercoles21" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="jueves_21" id="jueves21" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="viernes_21" id="viernes21" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="sabado_21" id="sabado21" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="domingo_21" id="domingo21" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '  </div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-secondary bg-opacity-25"><strong style="color: black">22:00-23:00</strong></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="lunes_22" id="lunes22" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="martes_22" id="martes22" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="miercoles_22" id="miercoles22" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="jueves_22" id="jueves22" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="viernes_22" id="viernes22" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="sabado_22" id="sabado22" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-25"><b style="color: black; alignment: center; width: 50%"><input name="domingo_22" id="domingo22" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '  </div>' +
            '  <div class="row">\n' +
            '    <div class="col bg-secondary bg-opacity-75"><strong style="color: white">23:00-00:00</strong></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="lunes_23" id="lunes23" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="martes_23" id="martes23" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="miercoles_23" id="miercoles23" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="jueves_23" id="jueves23" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="viernes_23" id="viernes23" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="sabado_23" id="sabado23" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
            '    <div class="col bg-secondary bg-opacity-75"><b style="color: white; alignment: center; width: 50%"><input name="domingo_23" id="domingo23" type="checkbox" style="width: 20px; height: 20px" style="width: 30px; height: 30px"></b></div>\n' +
             '  </div>' +
            '</div>';
}

function mostrarRegiones() {
      if (document.querySelector("#div_id_ask_region")==null && $("#id_country_or_commune_1").prop("checked")) {
          let aux = generarCodigoHtmlAskRegion();
          document.querySelector("#div_id_radio_country_or_commune").insertAdjacentHTML("afterend", aux);
      }
      if($("#id_country_or_commune_0").prop("checked")){
          $("#div_id_ask_region").remove();
      }
  }

function show_map_trade_locations(){
    let width;
    width=window.innerWidth;
    let height;
    height=window.innerHeight;
    if($("#id_ask_branch_0").prop("checked") && !existence_trade_map){
        existence_trade_map=true;
        let text;
        text='<iframe id="trade_location_map" src="leaflet_map_trade_locations" width='+width+' height= '+height+' style="max-width: 100%; margin-top: 20px"></iframe>' +
            '<div ><small id="succes_trade_location_map" style="color: green"></small></div>\n' +
            '<div ><small id="error_trade_location_map" style="color: red"></small></div>';
        document.querySelector("#div_ask_branch").insertAdjacentHTML("afterend", text);
        number_branch_office=' <input type="text" hidden="true" name="number_branch_office" class="textinput textInput form-control" id="id_number_branch_office">';
        document.querySelector("#form").insertAdjacentHTML("beforeend", number_branch_office);
        document.querySelector("#id_number_branch_office").value='0';
    }
    if($("#id_ask_branch_1").prop("checked")){
        existence_trade_map=false;
        if( document.querySelector("#trade_location_map") !== null){
            document.querySelector("#trade_location_map").remove();
        }
        $("#id_number_branch_office").remove();
    }
}

function generarCodigoHtmlSumarSucursales() {
    let question="";
    if(document.querySelector("#div_ask_branch")!=null){
        $("#div_ask_branch").remove();
    }
    if($("#id_ask_personal_trade_location_0").prop("checked")){
        question=' ¿Desea añadir más ubicaciones de sucursales? ';
    }
    if($("#id_ask_personal_trade_location_1").prop("checked")){
        question=' Si tiene sucursales ¿Desea añadir sus ubicaciones? ';
    }
    let aux= '<div id="div_ask_branch" name="ask_branch" class="form-group col-md-6" onclick="show_map_trade_locations();">' +
        '<label class=" requiredField">' +
        question +
        '<span class="asteriskField">*</span>' +
        '</label>' +
        '<div >' +
        '<div class="form-check">' +
        '<input type="radio" class="form-check-input" name="ask_branch" value="yes"  id="id_ask_branch_0" required>' +
        '<label class="form-check-label" for="id_ask_branch_0">' +
        ' Sí' +
        ' </label>' +
        '</div>' +
        '<div class="form-check">' +
        '<input type="radio" class="form-check-input" name="ask_branch" value="no"  id="id_ask_branch_1" required>' +
        '<label class="form-check-label" for="id_ask_branch_1">' +
        ' No' +
        '</label> </div> </div> ' +
        '<div><small id="succes_ask_branch" style="color: green"></small></div>\n' +
        '<div><small id="error_ask_branch" style="color: red"></small></div>' +
        '</div>';
    document.querySelector("#div_id_ask_personal_trade_location").insertAdjacentHTML("afterend", aux);
}
