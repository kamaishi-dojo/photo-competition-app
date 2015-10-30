//need <script src="js/camera.js"></script>
//need <script src="js/key.js"></script>

$(function(){
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
        var patern = /.*post_all\.html$/g;
        var pathname = location.pathname;
        var found = pathname.match(patern);
        if(!found){
            location.href = 'post_all.html';
        }
    });

    $('#submenu_old_theme').click(function(){
        // var patern = /.*old_theme\.html$/g;
        // var pathname = location.pathname;
        // var found = pathname.match(patern);
        // if(!found){
        //     location.href = 'old_theme.html';
        // }
    });

    $('#submenu_mypage').click(function(){
        if(toBool(window.localStorage.getItem(kamachare.localStoreKey.loggedIn))){
            var patern = /.*mypage\.html$/g;
            var pathname = location.pathname;
            var found = pathname.match(patern);
            if(!found){
                location.href = 'mypage.html';
            }
        }
    });

    $('#submenu_about').click(function(){
        var patern = /.*about\.html$/g;
        var pathname = location.pathname;
        var found = pathname.match(patern);
        if(!found){
            location.href = 'about.html';
        }
    });
});
