//<script type="text/javascript" src="cordova.js"></script>
//<script src="js/key.js"></script>
var kamachare = kamachare || {};

kamachare.camera = {
    camera : function() {
        // カメラのチェック
        if (!navigator.camera) {
            alert("Camera API not supported", "Error");
            return;
        }

        // 画像選択へ
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
            kamachare.cameraOption.camera
        );
    },
    album : function() {
        // カメラのチェック
        if (!navigator.camera) {
            alert("Camera API not supported", "Error");
            return;
        }

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
            kamachare.cameraOption.album
        );
    }
};

kamachare.cameraOption = {
    camera : {
        quality: 80,
        allowEdit: false,
        destinationType: 1, //Camera.DestinationType.FILE_URI
        sourceType: 1, //Camera.PictureSourceType.CAMERA
        encodingType: 0,//Camera.EncodingType.JPEG
        saveToPhotoAlbum: true
    },
    album : {
        allowEdit: false,
        destinationType: 2, //Camera.DestinationType.FILE_URI
        sourceType: 0 //Camera.PictureSourceType.PHOTOLIBRARY
    }
};

var iconDirectoryEntry;

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
            // カメラのチェック
            if (!navigator.camera) {
                alert("Camera API not supported", "Error");
                return;
            }

            if(!iconDirectoryEntry){
                alert('オブジェクトの取得に失敗しました。\n\'DirectoryEntry\'', 'Error');
                return;
            }

            // 画像選択へ
            navigator.camera.getPicture(
                function(fileURL) {
                    function fileSystemError(error){
                        alert('ファイル操作に失敗しました。\nエラーコード: ' + error.code);
                    }
                    window.resolveLocalFileSystemURI(fileURL,
                        function(fileEntry){
                            fileEntry.copyTo(iconDirectoryEntry, 'prof_icon',
                               function(fileEntry){
                                   var permanentStorage = window.localStorage;
                                   permanentStorage.setItem(kamachare.localStoreKey.userIconSrc,
                                        fileEntry.nativeURL);
                                   $('.prof_default').attr('src', fileEntry.nativeURL);
                               },fileSystemError
                            );
                        },fileSystemError
                    );
                },
                function(message) {
                    if(message !== 'Selection cancelled.'){
                        alert('Error : ' + message);
                    }
                },
                kamachare.cameraOption.album
            );
        });
    }
});

document.addEventListener("deviceready", function onDeviceReady() {
    window.resolveLocalFileSystemURI(cordova.file.dataDirectory,
    function(directoryEntry){
        iconDirectoryEntry = directoryEntry;
    },function (error){
        alert('ファイル操作に失敗しました。\nエラーコード: ' + error.code);
    });
}, false);
