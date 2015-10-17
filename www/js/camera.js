$(function() {

    var win = function () {
        alert('ok');
    };

    var fail = function (error) {
        alert('error!' + error.code + '\n' + error.source + '\n' + error.target);
    };


    $('#camera').click(function() {

        // カメラのチェク
        if (!navigator.camera) {
            alert("Camera API not supported", "Error");
            return;
        }

        // カメラ起動時のオプション
        var options = {
            quality: 80,
            allowEdit: false,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA,
            encodingType: Camera.EncodingType.JPEG,
            saveToPhotoAlbum: true
        };

        // カメラを起動
        navigator.camera.getPicture(
            function(fileURL) {
                var permanentStorage = window.localStorage;
                permanentStorage.setItem(kamachare.localStoreKey.lastTakenFileUrl, fileURL);
                location.href = "preview.html";
            },
            function(message) {
                if(message !== 'Camera cancelled.'){
                    alert('Error : ' + message);
                }
            },
            options
        );

    });

    $('#album').click(function() {

        // カメラのチェク
        if (!navigator.camera) {
            alert("Camera API not supported", "Error");
            return;
        }

        var options = {
            quality: 80,
            allowEdit: false,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY ,
            encodingType: Camera.EncodingType.JPEG
        };

        // カメラを起動
        navigator.camera.getPicture(
            function(fileURL) {
                var permanentStorage = window.localStorage;
                permanentStorage.setItem(kamachare.localStoreKey.lastTakenFileUrl, fileURL);
                location.href = "preview.html";
            },
            function(message) {
                if(message !== 'Camera cancelled.'){
                    alert('Error : ' + message);
                }
            },
            options
        );
    });
});
