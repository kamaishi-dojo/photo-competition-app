var kamachare = kamachare || {};

kamachare.camera = {
    camera : function(){
        // カメラのチェック
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
    },
    album : function(){
        // カメラのチェック
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

        // 画像選択へ
        navigator.camera.getPicture(
            function(fileURL) {
                var permanentStorage = window.localStorage;
                permanentStorage.setItem(kamachare.localStoreKey.lastTakenFileUrl, fileURL);
                location.href = "preview.html";
            },
            function(message) {
                if(message !== 'Selection cancelled.'){
                    alert('Error : ' + message);
                }
            },
            options
        );
    }
};

$(function() {
    if(document.getElementById("camera") !== null){
        $('#camera').click(function() {
            kamachare.camera.camera();
        });
    }

    if(document.getElementById("album") !== null){
        $('#album').click(function() {
            kamachare.camera.album();
        });
    }

    if(document.getElementById("selectUserIcon") !== null){
        $('#selectUserIcon').click(function() {
            kamachare.camera.album();
        });
    }
});
