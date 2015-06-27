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
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: 1,     // 0:Photo Library, 1=Camera, 2=Saved Album
            encodingType: 0     // 0=JPG 1=PNG
        };

        // カメラを起動
        navigator.camera.getPicture(
            function(fileURL) {
                var ft = new FileTransfer();
                ft.upload(fileURL, encodeURI("http://192.168.1.101/upload.php"), win, fail);
            },
            function() {
                alert('Error taking picture', 'Error');
            },

            options
        );

    });
});
