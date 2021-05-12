
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper;
var bg;
var gameState=0;
var START=0;
var PLAY=1;
var END = 2;
function preload()
{
 bg =loadImage("office.jpg");

}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,700);
	paper= new Paper(200,height-35,40);
  cool = new Cool(width/2,height/2,100)
  uhoh = new OhNo(width/2,height/2,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  Engine.update(engine);

  if(gameState===0)
  {
	fill("white");
	rect(250,310,340,200);
	strokeWeight(7);
	stroke("black")
	fill("darkblue")
	textFont("Algerian");
	textSize(80);
	text("Lazy Cleanup",700,350);

	strokeWeight(6);
	stroke("green")
	fill("lightgreen")
	textFont("Algerian");
	textSize(50);
	text("Press DOWN ARROW key to start",550,400);

  }

if(keyCode===DOWN_ARROW && gameState===0)
{
	gameState=1;
}
if(gameState===1)
{
  keyPressed();
 // groundObject.display();
  paper.display();
  dustbinObj.display();

  fill("white");
  rect(254,310,350,200);
  textSize(18);
  strokeWeight(2);
  stroke("black");
  fill("black");
  text("1.Press UP ARROW key to launch the ball",85,240);
  text("2.Press any other arrow key to activate ",85,270);
  text("gravity",85,300);
  strokeWeight(3);
  stroke("red");
  fill("red");
  text("WARNING",200,320);
  textSize(18);
  strokeWeight(2);
  stroke("red");
  fill("black");
  text("The paper ball launches with jet speed ",85,350);
  text("so act quickly",85 ,380);
}
if(gameState===2)
{
  paper.display();
  dustbinObj.display();
  
}
if(paper.body.position.x<1030 && paper.body.position.y > 615 && paper.body.position.x>250)
{
 uhoh.display();
 gameState=2;
}
else
 if(paper.body.position.x > 1030 && paper.body.position.y > 615 && paper.body.position.x < 1225 && paper.body.position.y > 615)
{
	
  cool.display();
	gameState=2;
}

if(paper.body.position.x > 1240 && paper.body.position.y> 615)
{
uhoh.display();
 gameState=2;
}
 console.log(paper.body.position.x,paper.body.position.y)
}
function keyPressed()
{
  if(keyCode===UP_ARROW)
  {
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-55})
  }
if(keyCode===LEFT_ARROW && gameState===2)
 {
   gameState=1;
   paper.position.x=200;
 }
}


