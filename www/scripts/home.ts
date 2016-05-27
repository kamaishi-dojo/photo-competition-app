$(function(): void {
    var permanentStorage: Storage = window.localStorage;
    var isOldThemeEnable: boolean = false;
    var checkAgree: boolean = false;
    var bgImgRes: string = 'img/001_top/bgi_sample.jpg';
    var logoImg: string = 'img/001_top/top_title.png';

    var agreed: boolean = kamachare.util.toBool(permanentStorage.getItem(kamachare.localStoreKey.agreed));
    var logedin: boolean = kamachare.util.toBool(permanentStorage.getItem(kamachare.localStoreKey.loggedIn));

    $('.home').css('background-image', 'url(\"' + bgImgRes + '\")');

    $('#img_logo').attr('src', logoImg);

    if($('#home').length > 0){

        if(isOldThemeEnable){
            $('section.menu03').css('color','rgb(255,255,255)');
            $('section.menu03').css('border','1px solid rgb(255,255,255)');
            //TODO 過去のテーマに飛ばす；
            // $('section.menu03').click(function{
            //
            // });
        }else{
            $('section.menu03').css('color','rgba(255,255,255,0.3)');
            $('section.menu03').css('border','1px solid rgba(255,255,255,0.3)');
        }
        $('#post_photo').click(function(): void {
            logedin = kamachare.util.toBool(permanentStorage.getItem(kamachare.localStoreKey.loggedIn));
            if(!agreed){
                kamachare.modal.open('#agreement_modal');
            }else if(!logedin){
                window.location.href = 'login.html';
            }else{
                kamachare.modal.open('#start');
            }
        });
    }

    $('#mypage_button').click(function(): void {
        logedin = kamachare.util.toBool(permanentStorage.getItem(kamachare.localStoreKey.loggedIn));
        if(agreed && logedin){
            window.location.href = 'mypage.html';
        }else{
            kamachare.modal.open('#agreement_modal');
        }
    });

    //agreement modal
    $('.modal_agreement_check').click(function(): void {
        var agreeImg: JQuery = $(this).children('span').children('img');
        checkAgree = !checkAgree;

        if(checkAgree){
            agreeImg.attr('src', 'img/001_top/check_box_on.png');
        }else{
            agreeImg.attr('src', 'img/001_top/check_box_off.png');
        }
     });

     var agreementButton: JQuery = $('#agreement_button');

     agreementButton.click(function(): void {
         if(checkAgree){
             agreed = true;
             var itemAgreed: string = agreed.toString();
             permanentStorage.setItem(kamachare.localStoreKey.agreed, itemAgreed);
             kamachare.modal.close('#agreement_modal', function(): void {
                 if(logedin){
                     if('#home'){
                         kamachare.modal.open('#start');
                     }
                 }else{
                     window.location.href = 'login.html';
                 }
             });
         }
     });

     if(logedin){
        if($('#home')){
            agreementButton.css('background-color','#F60');
            agreementButton.children('p').html('投稿へ進む');
        } else{
            agreementButton.css('background-color','#F60');
            agreementButton.children('p').html('進む');
        }

     }else{
         agreementButton.css('background-color','#2ECC71');
         agreementButton.children('p').html('ログインする');
     }

     $('footer').children('p').html('募集期間：2015年8月10日〜8月25日');
});
