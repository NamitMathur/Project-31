const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world;
  text(width,240,400);
  for (var k=0;k<=width;k=k+80) {
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,100));
  }  
  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,200));
  }
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,300));
  }
  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,400));
  }

  ground=new Ground(240,800,480,20);

  Engine.run(engine);
  
}

function draw() {
  background(0);
  ground.display();

  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-180,width/2+180),10,10));
  }

  for(k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  for(j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }
  for(i=0;i<particles.length;i++){
    particles[i].display();
  }

}