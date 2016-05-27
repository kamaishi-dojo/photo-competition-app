var dateFormat: string = 'YYYY年MM月DD日';
var pictureSrc: string = 'img/003_post-all/post_sample_h.jpg';

function onThumbnailLoad(): void {
    var top: number, left: number, imgWidth: number, imgHeight: number;
    var div: JQuery = $('#post_thumbnail_div');
    var img: JQuery = $('#post_thumbnail');
    var divWidth: number = div.width();
    var divHeight: number = div.height();
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

$(function(): void {
    var permanentStorage: Storage = window.localStorage;
    pictureSrc = permanentStorage.getItem(kamachare.localStoreKey.lastTakenFileUrl);

    var thumbnail: HTMLImageElement = new Image();
    thumbnail.onload = onThumbnailLoad;
    thumbnail.src = pictureSrc;

    $('#post_thumbnail').attr('src',pictureSrc);
    $('#post_thumbnail').click(function(): void {
        var title: any = $("#title").val();
        var comments: any = $("#comments").val();
        $('#post_detail_title').html(title);
        $('#post_detail_text').html(comments);

        var date: Date = new Date();
        var dateString: string = dateFormat;
        dateString = dateString.replace(/YYYY/g, date.getFullYear().toString());
        dateString = dateString.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
        dateString = dateString.replace(/DD/g, ('0' + date.getDate()).slice(-2));

        $('#post_detail_date').html(dateString);

        kamachare.modal.open('#post_picture_detail_modal');
    });

    $('#post_detail_img').attr('src',pictureSrc);

    $('#sns_twiter').children('.sns').click(function(): void {
        var title: any = $("#title").val();
        var comments: any = $("#comments").val();
        location.replace('https://twitter.com/intent/tweet?text=' + title + ' ' + comments);
    });

    $('#sns_facebook').children('.sns').click(function(): void {

    });

    $('#post_picture_detail_modal').click(function(): void {
        setTimeout(function(): void {
            kamachare.modal.close('#post_picture_detail_modal');
        },2000);
    });
});
