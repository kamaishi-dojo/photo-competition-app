$(function(): void {
    class CurrentPageCheck {
        private patern: RegExp;
        private nextPathName: string;
        constructor(patern: RegExp, nextPathName: string) {
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
        public setPatern(patern: RegExp): void{
            this.patern = patern;
        }
        public setNextPathName(nextPathName: string): void{
            this.nextPathName = nextPathName;
        }
    }
	$("#open-submenu").click(function(): void {
		$(".hide-submenu").slideDown("show");
	});
	$(".close_submenu_btn").click(function(): void {
		$(".hide-submenu").slideUp("show");
	});

    $('.home_btn').click(function(): void {
        location.replace('home.html');
    });

    $('.post_btn').click(function(): void {
        kamachare.camera.camera();
    });

    $('#submenu_post_all').click(function(): void {
        var checkMove: CurrentPageCheck = new CurrentPageCheck(/.*post_all\.html$/g, 'post_all.html');
        checkMove.move();
    });

    $('#submenu_old_theme').click(function(): void {

        // var checkMove: CurrentPageCheck = new CurrentPageCheck(/.*old_theme\.html$/g, 'old_theme.html');
        // checkMove.move();
    });

    $('#submenu_mypage').click(function(): void {
        if(kamachare.util.toBool(window.localStorage.getItem(kamachare.localStoreKey.loggedIn))){
            var checkMove: CurrentPageCheck = new CurrentPageCheck(/.*mypage\.html$/g, 'mypage.html');
            checkMove.move();
        }
    });

    $('#submenu_about').click(function(): void {
        var checkMove: CurrentPageCheck = new CurrentPageCheck(/.*about\.html$/g, 'about.html');
        checkMove.move();
    });
});
