$(function() {
    var map = new GMaps({
        div: '#slide01',
        lat: 65.0126143,
        lng: 25.4714526,
        zoom: 5,
        disableDefaultUI: true
    });

    var marker = map.addMarker({
        lat: 65.0126143,
        lng: 25.4714526,
        title: 'Oulu',
        animation: google.maps.Animation.BOUNCE
    });

    var ouluOverlay = map.drawOverlay({
        lat: 65.0126143,
        lng: 25.4714526,
        content: '<div class="oulu-overlay animated slideInDown">We are here, in Oulu, Finland</div>',
        horizontalAlign: 'center',
        verticalAlign: 'bottom'
    });

    setTimeout(function() {
        $('div.oulu-overlay').removeClass('slideInDown swing').addClass('swing');
    }, 2000);

    // setTimeout(function() {
    //     $('#btn-start').click();
    // }, 5000);

    $('#btn-start').on('click', function() {
        var hcmc = new google.maps.LatLng(15.206343, 107.672707);
        
        // Remove it
        ouluOverlay.setMap(null);

        marker.setPosition(hcmc);
        marker.setAnimation(google.maps.Animation.DROP);

        setTimeout(function() {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }, 500);

        var hcmcOverlay = map.drawOverlay({
            lat: 15.206343,
            lng: 108.672707,
            content: '<div class="hcmc-overlay animated tada">This is Vietnam.</div>',
            horizontalAlign: 'center',
            verticalAlign: 'bottom'
        });

        map.panTo(hcmc);

        // Change content of HCMC overlay
        setTimeout(function() {

            hcmcOverlay.setMap(null);

            map.drawOverlay({
                lat: 10.768451,
                lng: 100.6943626,
                content: '<div class="hcmc-overlay animated slideInDown">We have a long history.</div>',
                horizontalAlign: 'center',
                verticalAlign: 'bottom'
            });
        }, 3000);

    });
});