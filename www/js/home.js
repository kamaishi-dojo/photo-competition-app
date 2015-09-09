$(function(){
    var _this = $('.home');
    var isOldThemeEnable = false;
    var agreed = false;
    var agree = false;
    var logedin = false;
    var bgImgRes = 'img/001_top/bgi_sample.jpg';
    var logoImg = 'img/001_top/top_title.png';

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
            if(agreed){
                kamachare.modal.open('#start');
            }else{
                kamachare.modal.open('#agreement_modal');
            }
        });
    }

    //agreement modal
    $('.modal_agreement_check').click(function(){
        var agreeImg = $(this).children('span').children('img');
        agree = !agree;

        if(agree){
            agreeImg.attr('src', 'img/001_top/check_box_on.png');
        }else{
            agreeImg.attr('src', 'img/001_top/check_box_off.png');
        }
     });

     var agreementButton = $('#agreement_button');

     agreementButton.click(function(){
         if(agree){
             agreed = true;
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
         if('#home'){
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
