$(function() {

    var win = function () {
        alert('ok');
    };

    var fail = function (error) {
        alert('error!' + error.code + '\n' + error.source + '\n' + error.target);
    };


    $('#camera').on('click', function() {

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
                permanentStorage.setItem('last_taken_file_url', fileURL);
                location.href = "preview.html";
                // var ft = new FileTransfer();
                // ft.upload(fileURL, encodeURI("http://192.168.1.101/upload.php"), win, fail);
            },
            function() {
                alert('Error taking picture', 'Error');
            },
            options
        );

    });
});
