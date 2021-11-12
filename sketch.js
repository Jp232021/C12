
var trex ,trex_running;
var ground,invisbleground;
var groundImage;
var cloud,cloudImage;

function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage=loadImage("ground2.png");
  cloudImage=loadImage("cloud.png");

}

function setup(){
  createCanvas(600,200)
  
  //crear sprite del t-rex.
  trex=createSprite(50,180,20,50);
  trex.addAnimation("running",trex_running);

 
 //crea sprite del suelo
  ground=createSprite(200,180,400,20);
   ground.addImage("ground",groundImage);
  ground.x=ground.width/2
  //CREA EL PISO INVISIBLE
  invisbleground=createSprite(200,190,400,10)
  invisbleground.visible=false;
  //var ran=Math.round(random(10,60));
  //console.log (ran);

 //agregar tamaño y posiciòn al t-rex
  trex.scale=0.5;
  trex.x=50;
 
}

function draw(){
 background(150);
 console.log(trex.y);
 //pone velocidad al piso
  ground.velocityX=-2;



  //hacemos el piso infinito
 if(ground.x<0){
    ground.x=ground.width                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              /2;
 }


 if(keyDown("space")&&trex.y>=100){
   trex.velocityY=-10;
 }
   trex.velocityY=trex.velocityY+0.8;


 //evitar que el trex se caiga
   trex.collide(invisbleground);

  spawnclouds();


  drawSprites();

 }

 function spawnclouds(){
   if(frameCount%60===0){
    cloud=createSprite(600,100,40,10);
    cloud.addImage(cloudImage);
     cloud.y=Math.round(random(10,60));

    cloud.scale=0.4;
    cloud.velocityX=-3;
    //Ajustar la profundidad
    cloud.depht=trex.depht;
    trex.depht=trex.depht+1;

   }

  
  
 }