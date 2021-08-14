var ship ,ship_sailing





function preload(){

ship=loadAnimation("ship-2.png","ship-3.png","ship-1.png","ship-4.png")
}




function setup(){
  createCanvas(400,400);
  
}
ship=createSprite(240,160,50,50)
ship.addAnimation("ship_sailing") ; 




function draw() {
  
 

if(keyDown("space"))
{
  ship.velocitx=7 
}

ship.collide(Edges[4])
drawSprites()
}
background("white")