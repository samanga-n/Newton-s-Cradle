
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	myRoof= new Roof(460,100,500,10);
	ball1=new ball(320,400,30);
	ball2=new ball(380,400,30);
	ball3=new ball(440,400,30);
	ball4=new ball(500,400,30);
	ball5=new ball(560,400,30);
	
	chain1 = new Chain(ball1.body,myRoof.body,-120,0);
	chain2 = new Chain(ball2.body,myRoof.body,-60,0);
	chain3 = new Chain(ball3.body,myRoof.body,0,0);
	chain4 = new Chain(ball4.body,myRoof.body,60,0);
	chain5 = new Chain(ball5.body,myRoof.body,120,0);
	Engine.run(engine);
  
}


function draw() {

  background('white');
  myRoof.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
 
}



