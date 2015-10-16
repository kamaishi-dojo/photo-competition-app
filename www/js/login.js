$(function(){
    $('#send_button').click(function(){
        var errorMessage = '';
        var angle = 0;

        var userName = $('#user_name').val();
        var email = $('#email').val();

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
                    window.localStorage.setItem(kamachare.localStoreKey.loggedIn, true);
                    window.localStorage.setItem(kamachare.localStoreKey.userName, userName);
                    window.localStorage.setItem(kamachare.localStoreKey.userEmail, email);
                    setTimeout(function(){
                        kamachare.modal.close('#success');
                        history.back();
                    },2000);
                });
            });
        }else{
            alert(errorMessage);
        }
        // $('#login_form').submit();
    });
    // $('#login_form').submit(function(){
    //     var angle = 0;
    //
    //     kamachare.modal.open('#loading');
    //
    //     fakeUpdate(function(){
    //         kamachare.modal.close('#loading',
    //         function(){
    //             kamachare.modal.open('#success');
    //             window.localStorage.setItem(kamachare.localStoreKey.loggedIn, true);
    //             setTimeout(function(){
    //                 kamachare.modal.close('#success');
    //                 history.back();
    //             },2000);
    //         });
    //     });
    // });
});

function fakeUpdate(cb){
    setTimeout(function(){
        cb();
    },3000);
}
