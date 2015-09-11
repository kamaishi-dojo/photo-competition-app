$(function () {

    if ($('#launch').length > 0) {
        setTimeout(function () {
            var permanentStorage = window.localStorage;
            if (permanentStorage.getItem('shown_tutorial')) {
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
            permanentStorage.setItem('shown_tutorial', true);
        });
    }

    if ($('#preview').length > 0) {
        var permanentStorage = window.localStorage;
        var fileURL = permanentStorage.getItem('last_taken_file_url');
        $('#preview_image').attr('src', fileURL);

        $('#cancel').on('click', function() {
            history.back();
        });
        $('#submit').on('click', function() {
            var permanentStorage = window.localStorage;
            if (permanentStorage.getItem('user')) {
                // TODO 投稿画面へ
            }
            else {
                location.href = "login.html";
            }
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
