/// <reference path="./libs.d.ts" />
$(function (): void {
    // $.getScript('js/key.js');
    if ($('#launch').length > 0) {
        setTimeout(function (): void {
            var permanentStorage: Storage = window.localStorage;

            //init
            permanentStorage.setItem(kamachare.localStoreKey.loggedIn, false.toString());
            permanentStorage.setItem(kamachare.localStoreKey.agreed, false.toString());
            if(!permanentStorage.getItem(kamachare.localStoreKey.userIconSrc)){
                permanentStorage.setItem(kamachare.localStoreKey.userIconSrc, 'img/005_mypage/prof_img_null.png');
            }

            if (kamachare.util.toBool(permanentStorage.getItem(kamachare.localStoreKey.shownTutorial))) {
                location.replace("home.html");
            }
            else {
                location.replace("tutorial001.html");
            }
        }, 2000);
    }

    if ($('#tutorial').length > 0) {
        $('a[href="home.html"]').on('click', function (): void {
            var permanentStorage = window.localStorage;
            permanentStorage.setItem(kamachare.localStoreKey.shownTutorial, true.toString());
        });
    }

    if ($('#preview').length > 0) {
        var permanentStorage = window.localStorage;
        var fileURL: string = permanentStorage.getItem(kamachare.localStoreKey.lastTakenFileUrl);
        $('#preview_image').attr('src', fileURL);

        $('#cancel').on('click', function(): void {
            history.back();
        });
        $('#submit').on('click', function(): void {
            var permanentStorage = window.localStorage;
            // if (permanentStorage.getItem(kamachare.localStoreKey.loggedIn)) {
                location.href = "post.html";
            // }
            // else {
            //     location.href = "login.html";
            // }
        });
    }

    if($('.page_back').length > 0){
        $('.page_back').on('click', function(): void {
            history.back();
        });
    }

    // $('home').ready(function () {
    //     $('#take_picture').click(function () {
    //
    //     });
    // });

});
