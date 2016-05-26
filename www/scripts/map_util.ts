/// <reference path="./util.ts" />
/// <reference path="./libs/google-maps/google-maps.d.ts" />
/// <reference path="./libs/googlemaps/google.maps.d.ts" />

/*
* with <script src="https://maps.googleapis.com/maps/api/js?key={APIキー}"></script>
* css上で対象mapIDの高さと幅が決まっていないと動きません
*/

kamachare = kamachare || {};

kamachare.mapUtil ={

    init : function (mapId, lat, lng) {
        if(!mapId){
            return;
        }

        var option = {
            zoom: 15,
            mapTypeId : google.maps.MapTypeId.ROADMAP,
            center : null
        };

        var centerPosition;
        if(lat && lng){
            centerPosition = new google.maps.LatLng(lat, lng);
            option.center = centerPosition;
        }

        var googlemap = new google.maps.Map(document.getElementById(mapId), option);

        var markerOption = {
            map : googlemap,
            position : null
        };
        if (centerPosition){
            markerOption.position = centerPosition;
        }
        var marker = new google.maps.Marker(markerOption);
    }
};
