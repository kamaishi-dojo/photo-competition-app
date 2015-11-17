$(function(){
    var permanentStorage = window.localStorage;
    var isOldThemeEnable = false;
    var checkAgree = false;
    var bgImgRes = 'img/001_top/bgi_sample.jpg';
    var logoImg = 'img/001_top/top_title.png';

    function toBool (string){
        if(!string){
            return;
        }
        if(string === 'true'){
            return true;
        }
        return false;
    }

    var agreed = toBool(permanentStorage.getItem(kamachare.localStoreKey.agreed));
    var logedin = toBool(permanentStorage.getItem(kamachare.localStoreKey.loggedIn));

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
        $('#post_photo').click(function(){
            logedin = toBool(permanentStorage.getItem(kamachare.localStoreKey.loggedIn));
            if(!agreed){
                kamachare.modal.open('#agreement_modal');
            }else if(!logedin){
                window.location.href = 'login.html';
            }else{
                kamachare.modal.open('#start');
            }
        });
    }

    $('#mypage_button').click(function(){
        logedin = toBool(permanentStorage.getItem(kamachare.localStoreKey.loggedIn));
        if(agreed && logedin){
            window.location.href = 'mypage.html';
        }else{
            kamachare.modal.open('#agreement_modal');
        }
    });

    //agreement modal
    $('.modal_agreement_check').click(function(){
        var agreeImg = $(this).children('span').children('img');
        checkAgree = !checkAgree;

        if(checkAgree){
            agreeImg.attr('src', 'img/001_top/check_box_on.png');
        }else{
            agreeImg.attr('src', 'img/001_top/check_box_off.png');
        }
     });

     var agreementButton = $('#agreement_button');

     agreementButton.click(function(){
         if(checkAgree){
             agreed = true;
             permanentStorage.setItem(kamachare.localStoreKey.agreed, agreed);
             kamachare.modal.close('#agreement_modal', function(){
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
            camera.jsagreementButton.css('background-color','#F60');
            agreementButton.children('p').html('進む');
        }

     }else{
         agreementButton.css('background-color','#2ECC71');
         agreementButton.children('p').html('ログインする');
     }

     $('footer').children('p').html('募集期間：2015年8月10日〜8月25日');

 });
