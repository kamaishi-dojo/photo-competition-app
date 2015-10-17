var kamachare = kamachare || {};

kamachare.modal = {
    open : function(modalId){
        // スクロールバーの横幅を取得
        $('html').append('<div class="scrollbar" style="overflow:scroll;"></div>');
        var scrollsize = window.innerWidth - $('.scrollbar').prop('clientWidth');
        $('.scrollbar').hide();

        // html、bodyを固定（overflow:hiddenにする）
        $('html, body').addClass('lock');

        // オーバーレイ用の要素を追加
        $('body').append('<div class="modal-overlay"></div>');

        // オーバーレイをフェードイン
        $('.modal-overlay').fadeIn('slow');

        // モーダルコンテンツのIDを取得
        var modal;
        if (jQuery.type(modalId) === "string"){
            modal= modalId;
        } else {
            modal= '#' + $(this).attr('data-target');
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
        $(modal).click(function(e){
            e.stopPropagation();
        });

        // 「.modal-overlay」あるいは「.modal-close」をクリック
        $('.modal-wrap, .modal-close').off().click(function(){
            // モーダルコンテンツとオーバーレイをフェードアウト
            $(modal).fadeOut('slow');
            $('.modal-overlay').fadeOut('slow',function(){
                // html、bodyの固定解除
                $('html, body').removeClass('lock');
                // オーバーレイを削除
                $('.modal-overlay').remove();
                // モーダルコンテンツを囲む要素を削除
                $(modal).unwrap("<div class='modal-wrap'></div>");
            });
        });

        // リサイズしたら表示位置を再取得
        $(window).on('resize', function(){
            modalResize();
        });

        // モーダルコンテンツの表示位置を設定する関数
        function modalResize(){
            // ウィンドウの横幅、高さを取得
            var w = $(window).width();
            var h = $(window).height();

            // モーダルコンテンツの横幅、高さを取得
            var mw = $(modal).outerWidth(true);
            var mh = $(modal).outerHeight(true);

            // モーダルコンテンツの表示位置を設定
            var x, y;
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
    close : function(modalId,callBack){
        if(modalId){
            var modal = modalId;
            // モーダルコンテンツとオーバーレイをフェードアウト
            $(modal).fadeOut('slow');
            $('.modal-overlay').fadeOut('slow',function(){
                // html、bodyの固定解除
                $('html, body').removeClass('lock');
                // オーバーレイを削除
                $('.modal-overlay').remove();
                // モーダルコンテンツを囲む要素を削除
                $(modal).unwrap("<div class='modal-wrap'></div>");
                if(callBack){
                    callBack();
                }
            });
        }
    }
};

$(function(){
    // 「.modal-open」をクリック
    $('.modal-open').click(kamachare.modal.open);
});
