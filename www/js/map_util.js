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
            zoom : 15,
            mapTypeId : google.maps.MapTypeId.ROADMAP
        };

        var centerPosition;
        if(lat && lng){
            centerPosition = new google.maps.LatLng(lat, lng);
            option.center = centerPosition;
        }

        var googlemap = new google.maps.Map(document.getElementById(mapId), option);

        var markerOption = {
            map : googlemap
        };
        if (centerPosition){
            markerOption.position = centerPosition;
        }
        var marker = new google.maps.Marker(markerOption);
    }
};
