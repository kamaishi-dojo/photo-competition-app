$(function(): void {
    var permanentStorage: Storage = window.localStorage;
    var userName: string = permanentStorage.getItem(kamachare.localStoreKey.userName);
    var email: string = permanentStorage.getItem(kamachare.localStoreKey.userEmail);
    var iconRes: string = permanentStorage.getItem(kamachare.localStoreKey.userIconSrc);

    if(iconRes){
        $('.prof_mypage_bg').attr('src', iconRes);
        $('.prof_default').attr('src', iconRes);
    }

    if(userName){
        $('#user_name').val(userName);
    }
    if(email){
        $('#email').val(email);
    }

    $('#send_button').click(function(): void{
        var errorMessage: string = '';

        userName = $('#user_name').val();
        email = $('#email').val();

        if(userName === ''){
            errorMessage += '\n表示名を入力してください';
        }

        if(email === ''){
            errorMessage += '\nメールアドレスを入力してください';
        }

        if(errorMessage === ''){

            kamachare.modal.open('#loading', false);

            kamachare.util.fakeUpdate(function(): void {
                kamachare.modal.close('#loading',
                function(): void{
                    kamachare.modal.open('#success', false);
                    window.localStorage.setItem(kamachare.localStoreKey.userName, userName);
                    window.localStorage.setItem(kamachare.localStoreKey.userEmail, email);
                    setTimeout(function(): void{
                        kamachare.modal.close('#success');
                    },2000);
                });
            });
        }else{
            navigator.notification.alert(errorMessage, function(): void{});
        }
    });

    $(window).load(function(): void{
        $('.prof_mypage_bg_div').css('height', $('header').height().toString() + 'px');
    });
});
