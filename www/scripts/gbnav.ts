/// <reference path="./libs.ts" />

$(function(){
    class CheckMove {
        private patern: any;
        // private currentPathName: string;
        private nextPathName: string;
        constructor(patern: any, nextPathName: string) {
            this.patern = patern;
            this.nextPathName = nextPathName;
        }
        private isNotCurrentPath(): boolean{
            var currentPathName = location.pathname;
            var found = currentPathName.match(this.patern);
            return (!found);
        }
        public move(): void{
            if(this.isNotCurrentPath()){
                location.href = this.nextPathName;
            }
        }
        public setPatern(patern: string): void{
            this.patern = patern;
        }
        public setNextPathName(nextPathName: string): void{
            this.nextPathName = nextPathName;
        }
    }
	$("#open-submenu").click(function(){
		$(".hide-submenu").slideDown("show");
	});
	$(".close_submenu_btn").click(function(){
		$(".hide-submenu").slideUp("show");
	});

    $('.home_btn').click(function(){
        location.replace('home.html');
    });

    $('.post_btn').click(function(){
        kamachare.camera.camera();
    });

    $('#submenu_post_all').click(function(){
        // var patern = /.*post_all\.html$/g;
        // var pathname: string = location.pathname;
        // var found = pathname.match(patern);
        // if(!found){
        //     location.href = 'post_all.html';
        // }
        var checkMove: CheckMove = new CheckMove(/.*post_all\.html$/g, 'post_all.html');
        checkMove.move();
    });

    $('#submenu_old_theme').click(function(){
        // var patern = /.*old_theme\.html$/g;
        // var pathname = location.pathname;
        // var found = pathname.match(patern);
        // if(!found){
        //     location.href = 'old_theme.html';
        // }

        // var checkMove: CheckMove = new CheckMove(/.*old_theme\.html$/g, 'old_theme.html');
        // checkMove.move();
    });

    $('#submenu_mypage').click(function(){
        if(kamachare.util.toBool(window.localStorage.getItem(kamachare.localStoreKey.loggedIn))){
            // var patern = /.*mypage\.html$/g;
            // var pathname: string = location.pathname;
            // var found = pathname.match(patern);
            // if(!found){
            //     location.href = 'mypage.html';
            // }
            var checkMove: CheckMove = new CheckMove(/.*mypage\.html$/g, 'mypage.html');
            checkMove.move();
        }
    });

    $('#submenu_about').click(function(){
        // var patern = /.*about\.html$/g;
        // var pathname: string = location.pathname;
        // var found = pathname.match(patern);
        // if(!found){
        //     location.href = 'about.html';
        // }
        var checkMove: CheckMove = new CheckMove(/.*about\.html$/g, 'about.html');
        checkMove.move();
    });
});
