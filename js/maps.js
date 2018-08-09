/*
 * Implements the visualizzation of a marker in goole maps
 */
function myMap() {

    let map = null;
    let latlng = new google.maps.LatLng(44.409138, 8.934794);
    let mapProp= {
        scrollwheel: false,
        center: latlng,
        zoom:18
    };

    if(document.querySelector('#map')) {
        map = new google.maps.Map(document.getElementById("map"), mapProp);

        let marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: 'Il mio studio'
        });


        let infoWindow = new google.maps.InfoWindow({
            content: "Centro di Psicoterapia 2.0"
        });

        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(map, marker);
        });

        google.maps.event.addListener(map, 'click', function () {
            this.setOptions({scrollwheel: true});
        });

        google.maps.event.addListener(map, 'mouseout', function () {
            this.setOptions({scrollwheel: false});
        });
    }
    else{
        console.debug('no map');
    }
}