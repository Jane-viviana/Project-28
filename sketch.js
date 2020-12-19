
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango,mango2,mango3,mango4,mango5,mango6;
var tree;
var ground;
var body;
var elastic;
var stone;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
    ground = new Ground(400,height-70,800,15);
    mango = new Mango(600,100,15);
    mango2 = new Mango(600,125,15);
    mango3 = new Mango(600,145,15);
    mango4 = new Mango(635,125,15);
    mango5 = new Mango(585,115,15);
    mango6 = new Mango(575,120,15);
    tree = new Tree(600,200,30,30);
    boy = new Boy(250,275,30,30);
    elastic = new Elastic(boy.body,{x:200, y:50});
    stone = new Stone(275,275,30,30);
   	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
 
  tree.display();
  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  ground.display();
  boy.display();
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(boy.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  elastic.fly();
}

function keyPressed(){
  
  if(keyCode === 32){

  elastic.attach(boy.body)
  }
}


