const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var steve,block;


var i=0;


function preload() {
    


}

function setup(){
    var canvas = createCanvas(1600, 700);
	rectMode(CENTER);
    engine = Engine.create();
    world = engine.world;

steve= new Steve(0,0,70,140);

   ground= new Ground (800,690,1600,5);

  
}

function draw(){
  
  			background(0);
  for( i; i<1600;i=i+60){
    block= new Block (i,650);
    block.display();
   }
    
 ground.display();
    
    Engine.update(engine);




function keyPressed(){
   
}
}



