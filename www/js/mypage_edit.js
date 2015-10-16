$(function(){
    var permanentStorage = window.localStorage;
    var userName = permanentStorage.getItem(kamachare.localStoreKey.userName);
    var email = permanentStorage.getItem(kamachare.localStoreKey.userEmail);

    if(userName){
        $('#user_name').val(userName);
    }
    if(email){
        $('#email').val(email);
    }

    $('#send_button').click(function(){
        var errorMessage = '';

        userName = $('#user_name').val();
        email = $('#email').val();

        if(userName === ''){
            errorMessage += '\n表示名を入力してください';
        }

        if(email === ''){
            errorMessage += '\nメールアドレスを入力してください';
        }

        if(errorMessage === ''){

            kamachare.modal.open('#loading');

            fakeUpdate(function(){
                kamachare.modal.close('#loading',
                function(){
                    kamachare.modal.open('#success');
                    window.localStorage.setItem(kamachare.localStoreKey.userName, userName);
                    window.localStorage.setItem(kamachare.localStoreKey.userEmail, email);
                    setTimeout(function(){
                        kamachare.modal.close('#success');
                    },2000);
                });
            });
        }else{
            alert(errorMessage);
        }
    });

    $(window).load(function(){
        $('.prof_mypage_bg_div').css('height', $('header').height().toString() + 'px');
    });
});

function fakeUpdate(cb){
    setTimeout(function(){
        cb();
    },3000);
}
