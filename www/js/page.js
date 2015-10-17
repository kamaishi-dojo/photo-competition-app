
$(function () {
    // $.getScript('js/key.js');
    if ($('#launch').length > 0) {
        setTimeout(function () {
            var permanentStorage = window.localStorage;

            //init
            permanentStorage.setItem(kamachare.localStoreKey.loggedIn, false);
            permanentStorage.setItem(kamachare.localStoreKey.agreed, false);

            if (toBool(permanentStorage.getItem(kamachare.localStoreKey.shownTutorial))) {
                location.replace("home.html");
            }
            else {
                location.replace("tutorial001.html");
            }
        }, 2000);
    }

    if ($('#tutorial').length > 0) {
        $('a[href="home.html"]').on('click', function () {
            var permanentStorage = window.localStorage;
            permanentStorage.setItem(kamachare.localStoreKey.shownTutorial, true);
        });
    }

    if ($('#preview').length > 0) {
        var permanentStorage = window.localStorage;
        var fileURL = permanentStorage.getItem(kamachare.localStoreKey.lastTakenFileUrl);
        $('#preview_image').attr('src', fileURL);

        $('#cancel').on('click', function() {
            history.back();
        });
        $('#submit').on('click', function() {
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
        $('.page_back').on('click', function() {
            history.back();
        });
    }

    // $('home').ready(function () {
    //     $('#take_picture').click(function () {
    //
    //     });
    // });

});

function toBool (string){
    if(!string){
        return;
    }
    if(string === 'true'){
        return true;
    }
    return false;
}
