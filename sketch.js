
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var ball,ball1,ball2,ball3,ball4
var engine, world
var chain, chain1,chain2, chain3,chain4;
function setup() {
	createCanvas(600, 600);
	engine = Engine.create();
	world = engine.world;

ball = new Ball(300,300,10,10)
ball1 = new Ball(300,200,10,10)
ball2 = new Ball(300,100,10,10)
ball3 = new Ball(300,400,10,10)
ball4 = new Ball(300,500,10,10)
	
	//Create the Bodies Here.

    chain = new Chain(ball,{x:200,y:80});
    chain1 = new Chain(ball1,{x:200,y:80});
    chain2 = new Chain(ball3,{x:200,y:80});
    chain3 = new Chain(ball2,{x:200,y:80});
    chain4 = new Chain(ball4,{x:200,y:80});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230,230,230);
  chain.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  ball.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();

  drawSprites();
 
}



