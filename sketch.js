
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ground,log1,log2,log3;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(800,600,2000,20)
	log1 = new Log(1400,580,200,20);
	log2 = new Log(1300,540,20,100);
	log3= new Log(1500,540,20,100);
}


function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  log1.display();
  log2.display();
  log3.display();
}



