var lng= -70.653510;
var lat=  -33.443668;
var map=L.map('map').setView([lat, lng], 18);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'}).addTo(map);
var marker_actual=L.marker([lat, lng], { draggable: true });

navigator.geolocation.getCurrentPosition(function(position) {
    lat =  position.coords.latitude;
    lng = position.coords.longitude;
	window.parent.lat_personal_location=lat;
	window.parent.lng_personal_location=lng;
	window.parent.document.querySelector("#id_personal_latitude").value = lat;
    window.parent.document.querySelector("#id_personal_longitude").value = lng;
	//window.parent.writePersonalCoordinatedFromMap();
	map=map.setView([lat, lng], 17);
	L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'}).addTo(map);
	marker_actual = L.marker([lat, lng], { draggable: true });
	marker_actual.addTo(map);
    marker_actual.bindPopup('Ubicación aproximada').openPopup();
    map.setView([lat, lng], 18);
	map.on('click', function (e){
		map.removeLayer(marker_actual);
		lat=e.latlng.lat;
		lng=e.latlng.lng;
		marker_actual = L.marker([lat, lng], { draggable: true });
		marker_actual.addTo(map);
	})},
	function(err) {
    console.error(err);
	//window.parent.lat_personal_location=lat;
	//window.parent.lng_personal_location=lng;
	window.parent.writePersonalCoordinatedFromMap();
	map=map.setView([lat, lng], 17);
	L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'}).addTo(map);
	marker_actual = L.marker([lat, lng], { draggable: true });
	marker_actual.addTo(map);
    marker_actual.bindPopup('Ubicación aproximada').openPopup();
    map.setView([lat, lng], 18);
	map.on('click', function (e){
		map.removeLayer(marker_actual);
		lat=e.latlng.lat;
		lng=e.latlng.lng;
		marker_actual = L.marker([lat, lng], { draggable: true });
		marker_actual.addTo(map);
	})
});