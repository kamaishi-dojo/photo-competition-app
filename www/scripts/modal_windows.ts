/// <reference path="./libs.d.ts" />
var kamachare = kamachare || {};

kamachare.modal = {
    open : function(modalId?: string, isWrapClickClose?: boolean): void{
        // スクロールバーの横幅を取得
        $('html').append('<div class="scrollbar" style="overflow:scroll;"></div>');
        var scrollsize: number = window.innerWidth - $('.scrollbar').prop('clientWidth');
        $('.scrollbar').hide();

        // html、bodyを固定（overflow:hiddenにする）
        $('html, body').addClass('lock');

        // オーバーレイ用の要素を追加
        $('body').append('<div class="modal-overlay"></div>');

        // オーバーレイをフェードイン
        $('.modal-overlay').fadeIn('slow');

        // モーダルコンテンツのIDを取得
        var modal: string;
        if (jQuery.type(modalId) === "string"){
            modal= modalId;
        } else {
            modal= '#' + $(this).attr('data-target');
        }

        if(jQuery.type(isWrapClickClose) !== 'boolean'){
            isWrapClickClose = true;
        }

        // モーダルコンテンツを囲む要素を追加
        $(modal).wrap("<div class='modal-wrap'></div>");

        // モーダルコンテンツを囲む要素を表示
        $('.modal-wrap').show();

        // モーダルコンテンツの表示位置を設定
        modalResize();

        // モーダルコンテンツフェードイン
        $(modal).fadeIn('slow');

        // モーダルコンテンツをクリックした時はフェードアウトしない
        $(modal).click(function(e): void{
            e.stopPropagation();
        });

        // 「.modal-overlay」あるいは「.modal-close」をクリック
        $('.modal-wrap, .modal-close').off().click(function(): void{
            if($(this).hasClass('modal-wrap') && !isWrapClickClose){
                return;
            }

            // モーダルコンテンツとオーバーレイをフェードアウト
            $(modal).fadeOut('slow');
            $('.modal-overlay').fadeOut('slow',function(): void{
                // html、bodyの固定解除
                $('html, body').removeClass('lock');
                // オーバーレイを削除
                $('.modal-overlay').remove();
                // モーダルコンテンツを囲む要素を削除
                // $(modal).unwrap("<div class='modal-wrap'></div>");
                $(modal).unwrap();
            });
        });

        // リサイズしたら表示位置を再取得
        $(window).on('resize', function(): void{
            modalResize();
        });

        // モーダルコンテンツの表示位置を設定する関数
        function modalResize(): void{
            // ウィンドウの横幅、高さを取得
            var w: number = $(window).width();
            var h: number = $(window).height();

            // モーダルコンテンツの横幅、高さを取得
            var mw: number = $(modal).outerWidth(true);
            var mh: number = $(modal).outerHeight(true);

            // モーダルコンテンツの表示位置を設定
            var x: number, y: number;
            if ((mh > h) && (mw > w)) {
                $(modal).css({'left': 0 + 'px','top': 0 + 'px'});
            } else if ((mh > h) && (mw < w)) {
                x = (w - scrollsize - mw) / 2;
                $(modal).css({'left': x + 'px','top': 0 + 'px'});
            } else if ((mh < h) && (mw > w)) {
                y = (h - scrollsize - mh) / 2;
                $(modal).css({'left': 0 + 'px','top': y + 'px'});
            } else {
                x = (w - mw) / 2;
                y = (h - mh) / 2;
                $(modal).css({'left': x + 'px','top': y + 'px'});
            }
        }

    },
    close : function(modalId: string, callBack?: any): void{
        var modal: string = modalId;
        // モーダルコンテンツとオーバーレイをフェードアウト
        $(modal).fadeOut('slow');
        $('.modal-overlay').fadeOut('slow',function(): void {
            // html、bodyの固定解除
            $('html, body').removeClass('lock');
            // オーバーレイを削除
            $('.modal-overlay').remove();
            // モーダルコンテンツを囲む要素を削除
            // $(modal).unwrap("<div class='modal-wrap'></div>");
            $(modal).unwrap();
            if(callBack){
                callBack();
            }
        });
    }
};

$(function(): void{
    // 「.modal-open」をクリック
    $('.modal-open').click(kamachare.modal.open);
});
