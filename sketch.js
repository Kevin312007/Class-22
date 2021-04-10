
const mEngine=Matter.Engine
const mWorld=Matter.World
const mBodies=Matter.Bodies

var ground,ball
var engine,world

function setup() {
  createCanvas(800,400);
  engine=mEngine.create()
  world=engine.world
  var ground_options={
    isStatic:true
  }
  ground=mBodies.rectangle(400,390,800,10,ground_options)
  mWorld.add(world,ground)
  var ball_options={
    restitution:2
  }

ball=mBodies.circle(400,200,20,ball_options)
mWorld.add(world,ball)

}

function draw() {
  background(0); 
  mEngine.update(engine) 
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)
  circle(ball.position.x,ball.position.y,40)
  
}