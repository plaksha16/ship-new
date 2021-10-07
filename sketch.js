var ship ,ship_sailing
var sea,seaimg




function preload(){

shipimg=loadAnimation("ship-2.png","ship-3.png","ship-1.png","ship-4.png")


seaimg=loadImage("sea.png")
}




function setup(){
  createCanvas(600,400);
  sea=createSprite(400,250)
  sea.addImage("sea",seaimg)

console.log(sea.width)
 ship=createSprite(240,200,50,50)
  ship.addAnimation("ship_sailing",shipimg) ; 
 edges=createEdgeSprites()
 ship.scale=0.2
 sea.scale=0.5
}




function draw() {
  background("black") 
 

if(keyDown("space"))
{
  sea.velocityX=-7 
}
if (sea.x<0){
  sea.x=300
}

//ship.collide(edges[4])
drawSprites()
}
