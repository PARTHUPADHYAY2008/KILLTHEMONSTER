
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
function preload() {
//preload the images here
backgroundI=loadImage("bg1.png")
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine = Engine.create();
  world = engine.world;
ground=new Ground(600,600,1200,20)
hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 })
}

function draw() {
  background(backgroundI);
  Engine.update(engine);

  ground.display()
  hero.display(
  rope.display()
  )
  
}
function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });

  
}

