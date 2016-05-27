$(function(): void {
    $(window).load(function(): void {
        $('article').css('padding-bottom', $('footer').outerHeight(true).toString() + 'px')
    });
});
