/*
* with <script src="https://maps.googleapis.com/maps/api/js?key={APIキー}"></script>
* css上で対象mapIDの高さと幅が決まっていないと動きません
*/

kamachare = kamachare || {};

kamachare.mapUtil ={

    init : function (mapId: string, lat?: number, lng?: number): void {
        if(!mapId){
            return;
        }

        var option = {
            zoom: 15,
            mapTypeId : google.maps.MapTypeId.ROADMAP,
            center : null
        };

        var centerPosition: google.maps.LatLng;
        if(lat && lng){
            centerPosition = new google.maps.LatLng(lat, lng);
            option.center = centerPosition;
        }

        var googlemap: google.maps.Map = new google.maps.Map(document.getElementById(mapId), option);

        var markerOption = {
            map : googlemap,
            position : null
        };
        if (centerPosition){
            markerOption.position = centerPosition;
        }
        var marker: google.maps.Marker = new google.maps.Marker(markerOption);
    }
};
