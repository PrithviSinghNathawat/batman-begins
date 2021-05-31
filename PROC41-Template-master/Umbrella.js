class Umbrella{
    constructor(x,y){
        var options={
            friction:0.1,
            isStatic:'true',
            density:1.0
        }
        this.image=loadImage('umbrella.png');
        this.width=width;
        this.height=height;
    }

    display(){
        imageMode(CENTER);
        image(this.image, x, y, this.width, this.height);
    }
}