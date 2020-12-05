const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var block10,block11,block12,block13,block14,block15,block16;
var polygon, slingshot;

function setup() {
  createCanvas(800,550);
  engine = Engine.create();
	world = engine.world;
  

  ground1 = new Ground(590,505,210,20);

  //first tier
  block1 = new Box(500, 475, 30, 40);
  block2 = new Box(530, 475, 30, 40);
  block3 = new Box(560, 475, 30, 40);
  block4 = new Box(590, 475, 30, 40);
  block5 = new Box(620, 475, 30, 40);
  block6 = new Box(650, 475, 30, 40);
  block7 = new Box(680, 475, 30, 40);

  //second tier
  block8 = new Box(530, 435, 30, 40);
  block9 = new Box(560, 435, 30, 40);
  block10 = new Box(590, 435, 30, 40);
  block11 = new Box(620, 435, 30, 40);
  block12 = new Box(650, 435, 30, 40);
  
  //third tier
  block13 = new Box(560, 395, 30, 40);
  block14 = new Box(590, 395, 30, 40);
  block15 = new Box(620, 395, 30, 40);

  //fourth tier
  block16 = new Box(590, 355, 30, 40);

  polygon = new Polygon(200,200,50);

  slingshot = new SlingShot(polygon.body, {x:200, y:200});


}

function draw() {

  background("#F4E8FF");
  Engine.update(engine);

  ground1.display();

  //first tier
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  //second tier
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  //third tier
  block13.display();
  block14.display();
  block15.display();
  //fourth tier
  block16.display();

  slingshot.display();
  polygon.display();
  
  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY});
}

function mouseReleased() {
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(polygon.body,{x:235, y:420});
    slingshot.attach(polygon.body);
  }
}