var TAB = {
    MYPHOTO : 0,
    FAVORITE : 1
};

var tab = TAB.MYPHOTO;

$(function(){
    var defaultColumn = 3;

    var article = $('article');

    var i;
    var wWidth,wHeight;
    (function getWindowSize() {
        wWidth = $(window).width();
        wHeight = $(window).height();
    })();

    (function setHeaderBg() {
        var bgImgRes = 'img/005_mypage/profile_sample.jpg';
        var bgImg = new Image();
        bgImg.onload = function() {
            var wWidth = $(window).width();
            $('.prof_mypage_bg').css({
                'background-image' : 'url(' + this.src + ')'
            });
        };
        bgImg.src = bgImgRes;
    })();

    var iWidth, iHeight;

    var paddingRight = parseInt(article.children('div').css('padding-right'));
    var paddingTop = parseInt(article.children('div').css('padding-top'));
    (function getImageSize(){
        var column = defaultColumn;

        var side = wWidth / column;
        iWidth = side - paddingRight;
        iHeight = side - paddingTop;
    }());

    function getDummy(length){
        var i;
        var srcs = [];
        for (i = 1; i <= length; i += 1) {
            if(i % 2 === 0){
                srcs[i-1] = 'img/003_post-all/post_sample_h.jpg';
            }else{
                srcs[i-1] = 'img/003_post-all/post_sample_w.jpg';
            }
        }
        return srcs;
    }

    var srcs = getDummy(20);

    function setPicture(srcs){
        function onImgClick(event){
            alert(event.target.id);
        }
        function onPhotoload(){
            var top, left, imgWidth, imgHeight;
            var divWidth = this.div.width();
            var divHeight = this.div.height();
            if(this.width > this.height){
                imgHeight = divHeight;
                imgWidth = this.width * (divHeight / this.height);
                left = -((imgWidth/2) - (divWidth/2));
                top = 0;
                this.img.css({
                    'position' : 'absolute',
                    'width' : imgWidth.toString() + 'px',
                    'height' : '100%',
                    'top' : top.toString() + 'px',
                    'left' : left.toString() + 'px'
                });
            } else {
                imgWidth = divWidth;
                imgHeight = this.height * (divWidth / this.width);
                top = -((imgHeight/2) - (divHeight/2));
                left = 0;
                this.img.css({
                    'position' : 'absolute',
                    'width' : '100%',
                    'height' : imgHeight.toString() + 'px',
                    'top' : top.toString() + 'px',
                    'left' : left.toString() + 'px'
                });
            }
        }
        if(srcs){
            var top = 0, left = 0;

            article.empty();
            for (i = 0; i < srcs.length; i += 1) {
                var divId = 'post_div_' + i.toString();
                var imgId = 'post_photo_' + i.toString();
                article.append(
                    '<div id=\"'+ divId +'\"><img id=\"'+ imgId +'\"src=\"'+ srcs[i] +'\"></div>'
                );
                var div = $('#' + divId);

                div.css({
                    'position' : 'absolute',
                    'width' : iWidth.toString() + 'px',
                    'height' : iHeight.toString() + 'px',
                    'top' : top.toString() + 'px',
                    'left' : left.toString() + 'px',
                    'z-index' : '-' + i.toString(),
                });

                var img = $('#' + imgId);
                var photo = new Image();
                photo.onload = onPhotoload;
                photo.src = srcs[i];

                photo.div = div;
                photo.img = img;

                img.click(onImgClick);

                if((left + iWidth + paddingRight) >= wWidth){
                    top += iHeight + paddingTop;
                    left = 0;
                }else{
                    left += iWidth + paddingRight;
                }
            }
        }
    }

    $('.tab_left').css('border-bottom','2px #FD9327 solid');
    $('.tab_left').children('.tab_text').css('color','#FD9327');
    $('.tab_right').css('border-bottom','2px #FFF solid');
    $('.tab_right').children('.tab_text').css('color','#000');

    $('.tab_left').click(onTabClick);

    $('.tab_right').click(onTabClick);

    setPicture(srcs);

    function onTabClick(){
        var srcs = [];
        if($(this).hasClass('tab_left')){
            if(tab !== TAB.MYPHOTO){
                srcs = getDummy(20);
                setPicture(srcs);
                $(this).css('border-bottom','2px #FD9327 solid');
                $(this).children('.tab_text').css('color','#FD9327');
                $('.tab_right').css('border-bottom','2px #FFF solid');
                $('.tab_right').children('.tab_text').css('color','#000');
                tab = TAB.MYPHOTO;
            }
        }else if($(this).hasClass('tab_right')){
            if(tab !== TAB.FAVORITE){
                srcs = getDummy(31);
                setPicture(srcs);
                $(this).css('border-bottom','2px #FD9327 solid');
                $(this).children('.tab_text').css('color','#FD9327');
                $('.tab_left').css('border-bottom','2px #FFF solid');
                $('.tab_left').children('.tab_text').css('color','#000');
                tab = TAB.FAVORITE;
            }
        }
    }

    $(window).load(function(){
        var top =  $('header').outerHeight(true);
        article.css({
            'top' : top.toString() + 'px',
            'bottom' : $('footer').outerHeight(true).toString() + 'px'
        });
    });
});
