/*
 * Implements the visualizzation of a marker in goole maps
 */
function myMap() {

    let map = null;
    var latlng = new google.maps.LatLng(44.409138, 8.934794);
    var mapProp= {
        scrollwheel: false,
        center: latlng,
        zoom:18
    };

    if(document.querySelector('#map')) {
        console.log('inside map');
        map = new google.maps.Map(document.getElementById("map"), mapProp);

        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: 'Il mio studio'
        });


        var infoWindow = new google.maps.InfoWindow({
            //content: "" + addStudioImage()
        });

        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(map, marker);
        });

        google.maps.event.addListener(map, 'click', function (event) {
            this.setOptions({scrollwheel: true});
        });

        google.maps.event.addListener(map, 'mouseout', function (event) {
            this.setOptions({scrollwheel: false});
        });
    }
    else{
        console.log('no map');
    }
}