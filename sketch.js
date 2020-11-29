var helicopterIMG, helicopterSprite, packageSprite,packageIMG,bounceoffIMG,bounceGIF;
var packageBody,ground;
var box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	bounceGIF=loadImage("bounceoff.gif");

}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	var options={
 
		restitution: true
	  
	  
	  }



	packageSprite=createSprite(width/2,200, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6
	
	box1=createSprite(250,610, 20,100);
	box1.shapeColor=color("red");

	box2=createSprite(360,650, 200,20);
	box2.shapeColor=color("red");

	box3=createSprite(470,610, 20,100);
	box3.shapeColor=color("red");
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  packageSprite.collide(box2);

  if(packageSprite.collide(groundSprite)){
	bounceoffIMG=createSprite(width/2, 530);
	bounceoffIMG.addImage(bounceGIF);
	bounceoffIMG.scale=2;

	console.log("hi");
  }
  if(mousePressedOver(bounceoffIMG)) {
	bounceoffIMG.remove(bounceGIF);
  }


   keyPressed();
   drawSprites();
}

function keyPressed() {
	if (keyDown("down")||touches.length>0) 
	{
		packageSprite.velocityY = 5;
		touches = [];
		console.log("test");
	}
}





