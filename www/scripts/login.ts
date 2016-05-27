/// <reference path="./libs.d.ts" />
$(function(){

    // parse initialize //
    Parse.initialize("nSXGhoP36HfTirY21zKhglOB3FXPRjVu04S3alfK", "5aQYFbFo5DYoKsZgDUi9ZoXoOayi6VQuoXMQdWDS");

    $('#send_button').click(function(): void {

        var errorMessage: string = '';
        var angle: number = 0;

        var userName: string = $('#user_name').val();
        var email: string = $('#email').val();

        if(userName === ''){
            errorMessage += '\n表示名を入力してください';
        }

        if(email === ''){
            errorMessage += '\nメールアドレスを入力してください';
        }

        if(errorMessage === ''){

            var user: Parse.User = new Parse.User();
            user.set("username", userName);
            user.set("password", '1234');
            user.set("email", email);

            user.signUp(null, {
              success: function(user): void {

                navigator.notification.alert("登録したメールアドレスに確認メールを送信しました", function(): void{}, "Error");

              },
              error: function(user, error): void {
                // Show the error message somewhere and let the user try again.

                switch (error.code) {
                case 202 :
                    errorMessage += '\n入力した表示名は既に使用されています';
                    navigator.notification.alert(errorMessage, function(): void{}, "Error");
                    break;
                case 203 :
                    errorMessage += '\n入力したメールアドレスは既に使用されています';
                    navigator.notification.alert(errorMessage, function(): void{}, "Error");
                    break;
                default:
                    navigator.notification.alert("Error: " + error.code + " " + error.message, function(): void{}, "Error");
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
            navigator.notification.alert(errorMessage, function(): void{}, "Error");
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
