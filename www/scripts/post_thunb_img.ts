class PostThunbImg {
    private img: HTMLImageElement;
    private divElement: JQuery;
    private imgElement: JQuery;

    constructor (divElement: JQuery, imgElement: JQuery){
        this.img = new Image();
        this.divElement = divElement;
        this.imgElement = imgElement;
    }

    public setOnClick(onClick: any): void{
        this.imgElement.click(onClick);
    }

    public doPhotoload(src: string): void{
        this.img.onload = (() =>  this.onPhotoload());
        this.img.src = src;
    }

    public onPhotoload(): void {
        var top: number, left: number, imgWidth: number, imgHeight: number;
        var divWidth: number = this.divElement.width();
        var divHeight: number = this.divElement.height();
        if(this.img.width > this.img.height){
            imgHeight = divHeight;
            imgWidth = this.img.width * (divHeight / this.img.height);
            left = -((imgWidth/2) - (divWidth/2));
            top = 0;
            this.imgElement.css({
                'position' : 'absolute',
                'width' : imgWidth.toString() + 'px',
                'height' : '100%',
                'top' : top.toString() + 'px',
                'left' : left.toString() + 'px'
            });
        } else {
            imgWidth = divWidth;
            imgHeight = this.img.height * (divWidth / this.img.width);
            top = -((imgHeight/2) - (divHeight/2));
            left = 0;
            this.imgElement.css({
                'position' : 'absolute',
                'width' : '100%',
                'height' : imgHeight.toString() + 'px',
                'top' : top.toString() + 'px',
                'left' : left.toString() + 'px'
            });
        }
    }
}
