/// <reference path="./libs.ts" />

$(function(){
    $(window).load(function(){
        $('article').css('padding-bottom', $('footer').outerHeight(true).toString() + 'px')
    });
});
