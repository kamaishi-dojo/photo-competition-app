var kamachare = kamachare || {};

kamachare.util = {
    fakeUpdate : function(cb): void{
        setTimeout(function(){
            cb();
        },3000);
    },
    getDummy : function(length: number): string[]{
        var i: number;
        var srcs: string[] = [];
        for (i = 1; i <= length; i += 1) {
            if(i % 2 === 0){
                srcs[i-1] = 'img/003_post-all/post_sample_h.jpg';
            }else{
                srcs[i-1] = 'img/003_post-all/post_sample_w.jpg';
            }
        }
        return srcs;
    },
    toBool : function(string: string): boolean{
        if(!string){
            return;
        }
        if(string === 'true'){
            return true;
        }
        return false;
    }

}
