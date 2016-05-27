/// <reference path="./libs.d.ts" />
var kamachare = kamachare || {};

kamachare.camera = {
    camera : function(): void {
        // カメラのチェック
        if (!navigator.camera) {
            navigator.notification.alert("Camera API not supported", function(): void{}, "Error");
            return;
        }

        // 画像選択へ
        navigator.camera.getPicture(
            function(fileURL): void {
                var permanentStorage = window.localStorage;
                permanentStorage.setItem(kamachare.localStoreKey.lastTakenFileUrl, fileURL);
                location.href = "preview.html";
            },
            function(message): void {
                if(message !== 'Camera cancelled.'){
                    navigator.notification.alert('Error : ' + message, function(): void{});
                }
            },
            kamachare.cameraOption.camera
        );
    },
    album : function(): void {
        // カメラのチェック
        if (!navigator.camera) {
            navigator.notification.alert("Camera API not supported", function(): void{}, "Error");
            return;
        }

        // 画像選択へ
        navigator.camera.getPicture(
            function(fileURL): void {
                var permanentStorage = window.localStorage;
                permanentStorage.setItem(kamachare.localStoreKey.lastTakenFileUrl, fileURL);
                location.href = "preview.html";
            },
            function(message): void {
                if(message !== 'Selection cancelled.'){
                    navigator.notification.alert('Error : ' + message, function(): void{});
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
        $('#camera').click(function(): void {
            kamachare.camera.camera();
        });
    }

    if(document.getElementById("album") !== null){
        $('#album').click(function(): void {
            kamachare.camera.album();
        });
    }

    if(document.getElementById("selectUserIcon") !== null){
        $('#selectUserIcon').click(function(): void {
            // カメラのチェック
            if (!navigator.camera) {
                navigator.notification.alert("Camera API not supported", function(): void{}, "Error");
                return;
            }

            if(!iconDirectoryEntry){
                navigator.notification.alert('オブジェクトの取得に失敗しました。\n\'DirectoryEntry\'', function(): void{}, 'Error');
                return;
            }

            // 画像選択へ
            navigator.camera.getPicture(
                function(fileURL): void {
                    function fileSystemError(error): void{
                        navigator.notification.alert('ファイル操作に失敗しました。\nエラーコード: ' + error.code, function(): void{});
                    }
                    window.resolveLocalFileSystemURI(fileURL,
                        function(fileEntry): void{
                            fileEntry.copyTo(iconDirectoryEntry, 'prof_icon',
                               function(fileEntry): void{
                                   var permanentStorage = window.localStorage;
                                   permanentStorage.setItem(kamachare.localStoreKey.userIconSrc,
                                        fileEntry.nativeURL);
                                   $('.prof_default').attr('src', fileEntry.nativeURL);
                               },fileSystemError
                            );
                        },fileSystemError
                    );
                },
                function(message): void {
                    if(message !== 'Selection cancelled.'){
                        navigator.notification.alert('Error : ' + message, function(): void{});
                    }
                },
                kamachare.cameraOption.album
            );
        });
    }
});

document.addEventListener("deviceready", function onDeviceReady(): void {
    window.resolveLocalFileSystemURI(cordova.file.dataDirectory,
    function(directoryEntry): void {
        iconDirectoryEntry = directoryEntry;
    },function (error): void {
        navigator.notification.alert('ファイル操作に失敗しました。\nエラーコード: ' + error.code, function(): void{});
    });
}, false);
