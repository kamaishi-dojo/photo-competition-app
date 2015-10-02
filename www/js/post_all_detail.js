$(function(){
    var userPhotoRes = "img/003_post-all/post_sample_h.jpg";
    var yoisa_count = 0;
    var isYoisaClick = false;

    $('#header_yoisa_button').click(function (){
        if(!isYoisaClick) {
            isYoisaClick = true;
            yoisa_count += 1;
            $(this).children('img').attr('src', 'img/003_post-all/btn_like_on.png');
            $(this).children('p').css('color', '#FFF');
            $('#header_yoisa_count').children('p').html(yoisa_count.toString());
        }
    });

    (function setPostPhoto(){
        var width, height;
        var img = new Image();
        img.src = userPhotoRes;
        width = img.width;
        height = img.height;
        if(width > height){
            $('#header_user_photo').css('width','100%');
        }else{
            $('#header_user_photo').css('height','100%');
        }

        $('#header_user_photo').attr('src', userPhotoRes);
    })();

    $(window).load(function(){
        var isVisivleMap = true;
        (function setMapHeight (isVisivle){
            var mapSection = '#map_section';
            isVisivle = isVisivle === undefined ? true : isVisivle;
            if(isVisivle){
                var width = $(mapSection).width();
                $(mapSection).css('height', width.toString() + 'px');
            }else{
                $(mapSection).css('height', '50%');
            }
        })(isVisivleMap);

        if(isVisivleMap){
            kamachare.mapUtil.init('map_field', 35.656956, 139.695518);
        }else{
            $('#post_all_detail').css('overflow-y', 'hidden');
        }
    });
});
