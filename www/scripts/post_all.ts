/// <reference path="./libs.d.ts" />
$(function(): void {
    var _this: any = this;
    var defaultColumn: number = 3;

    var article: JQuery = $('article');

    var i: number;
    var wWidth: number,wHeight: number;
    (function getWindowSize(): void  {
        wWidth = $(window).width();
        wHeight = $(window).height();
    })();

    (function setHeaderBg(): void {
        var bgImgRes: string = 'img/004_old-thema/theme_thumb_01.jpg';
        var bgImg: HTMLImageElement = new Image();
        bgImg.onload = function(): void {
            var wWidth: number = $(window).width();
            var par: number = (wWidth / this.width);
            var iHeight: number = (this.height * par);
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

    var iWidth: number, iHeight: number;

    var paddingRight: number = parseInt($('article').children('div').css('padding-right'));
    var paddingTop: number = parseInt($('article').children('div').css('padding-top'));
    (function getImageSize(): void {
        var column : number= defaultColumn;

        var side: number = wWidth / column;
        iWidth = side - paddingRight;
        iHeight = side - paddingTop;
    }());

    (function setPicture(srcs): void {
        var top: number = 0, left: number = 0;

        function onImgClick(event): void {
            navigator.notification.alert(event.target.id, function(): void{});
        }

        article.empty();
        for (i = 0; i < srcs.length; i += 1) {
            var divId: string = 'post_div_' + i.toString();
            var imgId: string = 'post_photo_' + i.toString();
            article.append(
                '<div id=\"'+ divId +'\"><img id=\"'+ imgId +'\"src=\"'+ srcs[i] +'\"></div>'
            );
            var div: JQuery = $('#' + divId);

            div.css({
                'position' : 'absolute',
                'width' : iWidth.toString() + 'px',
                'height' : iHeight.toString() + 'px',
                'top' : top.toString() + 'px',
                'left' : left.toString() + 'px',
                'z-index' : '-' + i.toString()
            });

            var img: JQuery = $('#' + imgId);
            var photo: PostThunbImg = new PostThunbImg(div, img);
            photo.setOnClick(onImgClick);
            photo.doPhotoload(srcs[i]);

            if((left + iWidth + paddingRight) >= wWidth){
                top += iHeight + paddingTop;
                left = 0;
            }else{
                left += iWidth + paddingRight;
            }
        }
    })(kamachare.util.getDummy(20));

    $('select[name=sort_select]').change(function(): void {
        // ソート操作
    });

    $(window).load(function(): void {
        article.css('bottom', $('footer').outerHeight(true).toString() + 'px');
    });
});
