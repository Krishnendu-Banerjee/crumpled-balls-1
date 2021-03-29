
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(100, 100, 20)

	stand1= new Dustbin(600, 580, 190, 20 );
	stand2= new Dustbin(505, 555, 20, 70);
	stand3= new Dustbin(695, 555, 20, 70);

	ground=new Ground(400, 600, 800, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if (keyDown(UP_ARROW)){
	  keypressed();
  }
  
  drawSprites();
 paper.display();
 ground.display();
 stand1.display();
 stand2.display();
 stand3.display();
}
function keypressed(){
	if(keyCode== UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:20, y:-20});
	}
}



