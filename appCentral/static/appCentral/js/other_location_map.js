var lng= -70.653510;
var lat=  -33.443668;
var map=L.map('map').setView([lat, lng], 13);
var marker_actual;
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'}).addTo(map);

navigator.geolocation.getCurrentPosition(function(position) {
    lat =  position.coords.latitude;
    lng = position.coords.longitude;
	L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'}).addTo(map);
    map.setView([lat, lng], 18);
	map.on('click', function (e){
		for(var key in map._layers){
			if (key != "25" && key != "44"){
				map.removeLayer(map._layers[key]);
			}
		}
		lat=e.latlng.lat;
		lng=e.latlng.lng;
		marker_actual = L.marker([lat, lng]);
		writeCustomSearchCoordinatedFromMap(lat,lng);
		marker_actual.addTo(map);

	})}
    ,
	function(err) {
    console.error(err);
	L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'}).addTo(map);
	map.setView([lat, lng], 18);
	map.on('click', function (e){
		for(var key in map._layers){
			if (key != "25" && key != "44"){
				map.removeLayer(map._layers[key]);
			}
		}
		lat=e.latlng.lat;
		lng=e.latlng.lng;
		marker_actual = L.marker([lat, lng]);
		writeCustomSearchCoordinatedFromMap(lat,lng);
		marker_actual.addTo(map);
	})
});

function writeCustomSearchCoordinatedFromMap(lat, lng){
	window.parent.document.querySelector("#latitude").value = lat;
	window.parent.document.querySelector("#longitude").value = lng;
}