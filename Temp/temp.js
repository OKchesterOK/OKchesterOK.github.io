function showGoogleMaps() {
    var mapOptions = {
        zoom: 17,
        streetViewControl: false,
        scaleControl: true,
        mapTypeControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: {lat: 50.458509281147066, lng: 30.42147965456450}
    };
    map = new google.maps.Map(document.getElementById('googlemaps'), mapOptions);
    marker = new google.maps.Marker({
        position: {lat: 50.458509281147066, lng: 30.42351667728076},
        map: map,
        draggable: false
    });
}

google.maps.event.addDomListener(window, 'load', showGoogleMaps);
