var car1;
var car2;
var car3;
var car4;
var wall;
var wall1;
var wall2;

var speed;
var weight;

var thickness;


function setup() {
  createCanvas(1000,800);
  
wall = createSprite(940,200,30,400);
wall.shapeColor="grey";

wall1 = createSprite(1000,200,30,400);
wall1.shapeColor="red";

wall2 = createSprite(970,200,30,400);
wall2.shapeColor="black";


car1 = createSprite(60,100,20,10);
car1.shapeColor="white";

car2 = createSprite(60,180,20,10);
car2.shapeColor="white";

car3 = createSprite(60,280,20,10);
car3.shapeColor="white";

car4 = createSprite(60,370,20,10);
car4.shapeColor="white";

speed = random(223,321);
weight = random(30,52);

thickness = random(22,83);

}




function draw() {
  background(128,0,32);  

car1.velocityX=3;
car2.velocityX=6;
car3.velocityX=3;
car4.velocityX=5.4;

if (wall.x-car1.x < (car1.width+wall.width)/2) {
  car1.velocityX=0;

var deformation= 0.5*speed*speed*weight/(thickness*thickness*thickness);
if (deformation>10) {
  car1.shapeColor="green";
}
if (deformation<10) {
  car1.shapeColor="red";
}

}


if (wall.x-car2.x < (car2.width+wall.width)/2) {
  car2.velocityX=0;

var deformation= 0.5*speed*speed*weight/thickness*thickness*thickness;
if (deformation>10) {
  car2.shapeColor="green";
}
if (deformation<10) {
  car2.shapeColor="red";
}

}


if (wall.x-car3.x < (car3.width+wall.width)/2) {
  car3.velocityX=0;

var deformation= 0.5*speed*speed*weight/thickness*thickness*thickness;
if (deformation>10) {
  car3.shapeColor="green";
}
if (deformation<10) {
  car3.shapeColor="red";
}

}


if (wall.x-car4.x < (car4.width+wall.width)/2) {
  car4.velocityX=0;

var deformation= 0.5*speed*speed*weight/thickness*thickness*thickness;
if (deformation>10) {
  car4.shapeColor="green";
}
if (deformation<10) {
  car4.shapeColor="red";
}

}


  drawSprites();
}