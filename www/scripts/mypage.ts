/// <reference path="./libs.ts" />

var TAB = {
    MYPHOTO : 0,
    FAVORITE : 1
};

var tab: number = TAB.MYPHOTO;

$(function(){
    var defaultColumn: number = 3;

    var article = $('article');

    var i: number;
    var wWidth: number;
    var wHeight: number;
    (function getWindowSize(): void {
        wWidth = $(window).width();
        wHeight = $(window).height();
    })();

    (function setUserData(): void {
        var username: string = window.localStorage.getItem(kamachare.localStoreKey.userName);
        var iconRes: string = window.localStorage.getItem(kamachare.localStoreKey.userIconSrc);
        $('#user_name').html(username);
        if(iconRes){
            $('.prof_mypage_bg').attr('src', iconRes);
            $('.prof_mypage').attr('src', iconRes);
        }
    })();

    var iWidth: number;
    var iHeight: number;

    var paddingRight: number = parseInt(article.children('div').css('padding-right'));
    var paddingTop: number = parseInt(article.children('div').css('padding-top'));
    (function getImageSize(){
        var column: number = defaultColumn;

        var side: number = wWidth / column;
        iWidth = side - paddingRight;
        iHeight = side - paddingTop;
    }());

    var srcs: string[] = kamachare.util.getDummy(20);

    function setPicture(srcs): void {
        class PostThunbImg {
            private img: any;
            private divElement: any;
            private imgElement: any;
            constractor (divElement: any, imgElement: any){
                this.img = new Image();
                this.divElement = divElement;
                this.imgElement = imgElement;
                this.imgElement.click(this.onImgClick);
            }

            public doPhotoload(src: string): void{
                this.img.onload = this.onPhotoload();
                this.img.src = src;
            }

            public onPhotoload(): void {
                var top, left, imgWidth, imgHeight;
                var divWidth = this.divElement.width();
                var divHeight = this.divElement.height();
                if(this.img.width > this.img.height){
                    imgHeight = divHeight;
                    imgWidth = this.img.width * (divHeight / this.img.height);
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
                    imgHeight = this.img.height * (divWidth / this.img.width);
                    top = -((imgHeight/2) - (divHeight/2));
                    left = 0;
                    this.imgElement.css({
                        'position' : 'absolute',
                        'width' : '100%',
                        'height' : imgHeight.toString() + 'px',
                        'top' : top.toString() + 'px',
                        'left' : left.toString() + 'px'
                    });
                }
            }

            public onImgClick(event): void {
                alert(event.target.id);
            }
        }

        if(srcs){
            var top: number = 0, left: number = 0;

            article.empty();
            for (i = 0; i < srcs.length; i += 1) {
                var divId: string = 'post_div_' + i.toString();
                var imgId: string = 'post_photo_' + i.toString();
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
                // var photo = new Image();
                // photo.onload = onPhotoload;
                // photo.src = srcs[i];
                //
                // photo.div = div;
                // photo.img = img;

                // img.click(onImgClick);
                var photo: PostThunbImg = new PostThunbImg(div, img);
                photo.doPhotoload(srcs[i]);

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

    function onTabClick(): void {
        var srcs: string[] = [];
        if($(this).hasClass('tab_left')){
            if(tab !== TAB.MYPHOTO){
                srcs = kamachare.util.getDummy(20);
                setPicture(srcs);
                $(this).css('border-bottom','2px #FD9327 solid');
                $(this).children('.tab_text').css('color','#FD9327');
                $('.tab_right').css('border-bottom','2px #FFF solid');
                $('.tab_right').children('.tab_text').css('color','#000');
                tab = TAB.MYPHOTO;
            }
        }else if($(this).hasClass('tab_right')){
            if(tab !== TAB.FAVORITE){
                srcs = kamachare.util.getDummy(31);
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
