var lng= -70.653510;
var lat =  -33.443668;
var arr_ubicaciones=[];
let counter=0;
var marker_actual;
var map;

navigator.geolocation.getCurrentPosition(function(position) {
	lat =  position.coords.latitude;
	lng = position.coords.longitude;
	map=L.map('map').setView([lat, lng], 17);
	L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'}).addTo(map);
	map.setView([lat,lng], 18);
	map.on('click', function (e){
		lat=e.latlng.lat;
		lng=e.latlng.lng;
		marker_actual = L.marker([lat, lng], { draggable: true });
		marker_actual.on('drag',()=>{window.parent.writeTradeCoordinatedFromMap();});
		marker_actual.addTo(map);
		arr_ubicaciones.push(marker_actual);
		let aux=arr_ubicaciones[counter];
		arr_ubicaciones[counter].on('click',()=>{map.removeLayer(aux);window.parent.writeTradeCoordinatedFromMap();})
		counter=counter+1;
		window.parent.writeTradeCoordinatedFromMap();
})},
	function(err) {
    console.error(err);
	map=L.map('map').setView([lat, lng], 13);
	L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'}).addTo(map);
	map.setView([lat,lng], 18);
	map.on('click', function (e){
		lat=e.latlng.lat;
		lng=e.latlng.lng;
		marker_actual = L.marker([lat, lng], { draggable: true });
		marker_actual.on('drag',()=>{window.parent.writeTradeCoordinatedFromMap();});
		marker_actual.addTo(map);
		arr_ubicaciones.push(marker_actual);
		let aux=arr_ubicaciones[counter];
		arr_ubicaciones[counter].on('click',()=>{map.removeLayer(aux);window.parent.writeTradeCoordinatedFromMap();})
		counter=counter+1;
		window.parent.writeTradeCoordinatedFromMap();
})
});