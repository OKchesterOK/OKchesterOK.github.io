(function(){
    $('.logo-triangle').delay(4000).show(0);
})();

function showGoogleMaps() {
    var mapOptions = {
        zoom: 18,
        streetViewControl: false,
        scaleControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: {lat: 50.458509281147066, lng: 30.42157966466516}
    };
    map = new google.maps.Map(document.getElementById('googlemaps'), mapOptions);
        marker = new google.maps.Marker({
        position: {lat: 50.45848034713743, lng: 30.42351667728076},
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP
    });
}

google.maps.event.addDomListener(window, 'load', showGoogleMaps);

(function() {
    $('.contact-button').on('click', function () {
        $('.banner').animate({
            right: '100%'
        }, 1000);
        $('.contact-button').hide();
    });
    $('.back-link').on('click', function () {
        $('.banner').animate({
            right: '0'
        }, 1000);
        $('.contact-button').delay(1000).show(0);
    });
})();
