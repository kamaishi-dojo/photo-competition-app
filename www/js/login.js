$(function(){

    // parse initialize //
    Parse.initialize("nSXGhoP36HfTirY21zKhglOB3FXPRjVu04S3alfK", "5aQYFbFo5DYoKsZgDUi9ZoXoOayi6VQuoXMQdWDS");

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

            var user = new Parse.User();
            user.set("username", userName);
            user.set("password", '1234');
            user.set("email", email);

            user.signUp(null, {
              success: function(user) {

                alert("登録ありがとうございました。");

              },
              error: function(user, error) {
                // Show the error message somewhere and let the user try again.
                switch (error.code) {
                case 202 :
                    alert("入力した表示名は既に使用されています。");
                    break;
                case 203 :
                    alert("入力したメールアドレスは既に使用されています。");
                    break;
                default:
                    alert("Error: " + error.code + " " + error.message);
                };
              }
            });

//            kamachare.modal.open('#loading', false);

//           fakeUpdate(function(){
//                kamachare.modal.close('#loading',
//                function(){
//                    kamachare.modal.open('#success', false);
//                    window.localStorage.setItem(kamachare.localStoreKey.loggedIn, true);
//                    window.localStorage.setItem(kamachare.localStoreKey.userName, userName);
//                    window.localStorage.setItem(kamachare.localStoreKey.userEmail, email);
//                    setTimeout(function(){
//                        kamachare.modal.close('#success');
//                        history.back();
//                    },2000);
//                });
//            });
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
