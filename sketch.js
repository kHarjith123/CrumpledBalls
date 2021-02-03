
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world;
var ground, ball;
var dustbinimg , bin , paperObject ; 



function setup() {

	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	
	
	
  
	paperObject = new PaperClass(200,650,200);
	ground      = new Ground(width/2,890,width,2);
	bin1        = new Dustbin(1200,650);
     

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperObject.display();
  ground.display();
  bin1.display();
 
  Engine.update(engine);
  drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW){
 Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145})
}

}



