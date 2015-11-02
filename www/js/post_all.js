$(function(){
    var _this = this;
    var defaultColumn = 3;

    var article = $('article');

    var i;
    var wWidth,wHeight;
    (function getWindowSize() {
        wWidth = $(window).width();
        wHeight = $(window).height();
    })();

    (function setHeaderBg() {
        var bgImgRes = 'img/004_old-thema/theme_thumb_01.jpg';
        var bgImg = new Image();
        bgImg.onload = function() {
            var wWidth = $(window).width();
            var par = (wWidth / this.width);
            var iHeight = (this.height * par);
            $('header').css({
                'height' : iHeight.toString() + 'px',
                'background-image' : 'url(' + this.src + ')'
            });
            $('#post_all').children('article').css({
                'top' : iHeight.toString() + 'px'
            });
        };
        bgImg.src = bgImgRes;
    })();

    var iWidth, iHeight;

    var paddingRight = parseInt($('article').children('div').css('padding-right'));
    var paddingTop = parseInt($('article').children('div').css('padding-top'));
    (function getImageSize(){
        var column = defaultColumn;

        var side = wWidth / column;
        iWidth = side - paddingRight;
        iHeight = side - paddingTop;
    }());

    function getDummy(length){
        if(length){
            var i, srcs = [];
            for (i = 1; i <= length; i += 1) {
                if(i % 2 === 0){
                    srcs[i-1] = 'img/003_post-all/post_sample_h.jpg';
                }else{
                    srcs[i-1] = 'img/003_post-all/post_sample_w.jpg';
                }
            }
            return srcs;
        }
    }

    (function setPicture(srcs){
        var top = 0, left = 0;
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
                'z-index' : '-' + i.toString()
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
    })(getDummy(20));

    $('select[name=sort_select]').change(function(){
        // ソート操作
    });

    $(window).load(function(){
        article.css('bottom', $('footer').outerHeight(true).toString() + 'px');
    });
});
