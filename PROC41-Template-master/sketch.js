const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var umbrella,drops;
var maxDrops=100;

function setup(){
   createCanvas(500,800);   
    
   umbrella=new Umbrella(250,700);

   for(var i=0; i<maxDrops;i++){
       drops.push(new createDrop(random(0,400),random(0,400)));
   }

}

function draw(){
    umbrella.display();

    drawSprites();
}   

