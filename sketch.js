var pinkbox, yellowbox;
var bluebox, greenbox;
var moving , edges;
function setup() {
  createCanvas(400,400);
  bluebox = createSprite(35,390, 100, 30);
  bluebox.shapeColor = "blue";
  
  yellowbox = createSprite(140,390,100,30);
  yellowbox.shapeColor = "yellow";
greenbox = createSprite(245,390, 100, 30);
greenbox.shapeColor = "green";
  
  pinkbox = createSprite(350,390,100,30);
pinkbox.shapeColor = "pink";
moving = createSprite(200,80, 30, 30);
  moving.shapeColor = "white";
  moving.velocityY=3;
  moving.velocityX=4
  
  
}

function draw() {
  background(0,0,0);  
  edges=createEdgeSprites();
  
  //if(bluebox.isTouching(moving)){
  // moving.shapeColor="blue";
  //}
  if(pinkbox.isTouching(moving)&&moving.bounceOff(pinkbox)){
    moving.shapeColor="pink";
  }
  if(bluebox.isTouching(moving)&&moving.bounceOff(bluebox)){
    moving.shapeColor="blue";
  }
  if(yellowbox.isTouching(moving)&&moving.bounceOff(yellowbox)){
    moving.shapeColor="yellow";
  }
  if(greenbox.isTouching(moving)&&moving.bounceOff(greenbox)){
    moving.shapeColor="green";
  }
  moving.bounceOff(edges)
  moving.bounceOff(yellowbox);
  moving.bounceOff(greenbox);
  moving.bounceOff(pinkbox);
  moving.bounceOff(bluebox);
  drawSprites();
}
