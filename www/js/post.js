var dateFormat = 'YYYY年MM月DD日';
var pictureSrc = 'img/003_post-all/post_sample_h.jpg';

function onThumbnailLoad(){
    var top, left, imgWidth, imgHeight;
    var div = $('#post_thumbnail_div');
    var img = $('#post_thumbnail');
    var divWidth = div.width();
    var divHeight = div.height();
    if(this.width > this.height){
        imgHeight = divHeight;
        imgWidth = this.width * (divHeight / this.height);
        left = -((imgWidth/2) - (divWidth/2));
        top = 0;
        img.css({
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
        img.css({
            'position' : 'absolute',
            'width' : '100%',
            'height' : imgHeight.toString() + 'px',
            'top' : top.toString() + 'px',
            'left' : left.toString() + 'px'
        });
    }
}

$(function(){
    var permanentStorage = window.localStorage;
    pictureSrc = permanentStorage.getItem(kamachare.localStoreKey.lastTakenFileUrl);

    var thumbnail = new Image();
    thumbnail.onload = onThumbnailLoad;
    thumbnail.src = pictureSrc;

    $('#post_thumbnail').attr('src',pictureSrc);
    $('#post_thumbnail').click(function(){
        var title = $("#title").val();
        var comments = $("#comments").val();
        $('#post_detail_title').html(title);
        $('#post_detail_text').html(comments);

        var date = new Date();
        var dateString = dateFormat;
        dateString = dateString.replace(/YYYY/g, date.getFullYear());
        dateString = dateString.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
        dateString = dateString.replace(/DD/g, ('0' + date.getDate()).slice(-2));

        $('#post_detail_date').html(dateString);

        kamachare.modal.open('#post_picture_detail_modal');
    });

    $('#post_detail_img').attr('src',pictureSrc);

    $('#sns_twiter').children('.sns').click(function(){
        var title = $("#title").val();
        var comments = $("#comments").val();
        location.replace('https://twitter.com/intent/tweet?text=' + title + ' ' + comments);
    });

    $('#sns_facebook').children('.sns').click(function(){

    });

    $('#post_picture_detail_modal').click(function(){
        setTimeout(function(){
            kamachare.modal.close('#post_picture_detail_modal');
        },2000);
    });
});
