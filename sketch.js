const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;
var canvas;
var blower;
var Button; 
var blower_mouth;
var ball;

function setup() {
 createCanvas(800,400);
  engine= Engine.create();
  world= engine.world;
  //createSprite(400, 200, 50, 50);

  blower= new Blower(690, 300, 20, 120);

  Button= createButton("Click to Blow");
  Button.position(width-90, height-20);
  Button.class("blowButton");
  Button.mousePressed(blow);

  blower_mouth= new BlowerMouth(605, 350,150,20);
  ball= new Ball(690,200,30, 30);


}

function draw() {
  background(255);  
 Engine.update(engine);
  //drawSprites();
  blower.show();
  blower_mouth.show();
  ball.display()
}

function blow(){
  Matter.Body.applyForce(ball.body,{x: 0, y:0}, {x:0, y:-0.05});
}