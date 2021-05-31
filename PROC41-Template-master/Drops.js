class Drops{
    constructor(x,y){
        var options={
            'friction':0.1,
            'restitution':0.33,
            'density':1.0,
        }
        this.body=Bodies.circle(x,y,2.5,options);
        this.width = width;
        this.height = height;
    }



update(){
    if(this.rain.position.y>height){
        Matter.Body.setPosition(this.rain, {x:random(0,400),y:random(0,400)})
    }
}

display(){
    ellipse(x,y,this.width,this.height);
    
}
}