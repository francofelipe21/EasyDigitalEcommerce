var lng= -70.653510;
var lat=  -33.443668;
var map=L.map('mapa').setView([lat, lng], 13);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'}).addTo(map);
var data = window.parent.datos;

var ProviderIcon = L.Icon.extend({
    options: {
        iconUrl: '../../static/appCentral/images/proveedor.png',
        iconSize:     [30, 30],
        iconAnchor:   [15, 15],
        popupAnchor:  [0, -10]
    }
});

$(function (){
    document.getElementById("mapa").insertAdjacentHTML("beforebegin",'<p>Se muestran '+data.geo_jsons.length+' sucursales en el mapa</p>')
});

for(let i=0; i<data.geo_jsons.length; i++){
	L.geoJSON(data.geo_jsons[i], {
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: new ProviderIcon()});
		}}).addTo(map).bindPopup(('<div class="card text-center" style="width: 18rem;">\n' +
               '  <div class="card-body">\n' +
               '    <h5 class="card-title">'+data.geo_jsons[i].properties.name+'</h5>\n' +
               '    <p class="card-text">'+data.geo_jsons[i].properties.goods+'</p>\n' +
               data.geo_jsons[i].properties.button +
               '  </div>\n' +
               '<div class="card-footer">Icono de <a href="https://icons8.com/icon/53882/supplier">Icons8</a></div>'+
               '</div>'));
}