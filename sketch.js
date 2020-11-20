var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,wall1Sprite,wall2Sprite,wall3Sprite
var wall1Body,wall2Body,wall3Body
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	var wall1={
		isStatic:true
	}
	wall1Body = Bodies.rectangle(width/2-80,610,20,100,wall1)
	wall2Body = Bodies.rectangle(width/2+20,650,200,20,wall1)
	wall3Body = Bodies.rectangle(width/2+130,610,20,100,wall1)

	wall1Sprite=createSprite(wall1Body.position.x,wall1Body.position.y,20,100)
	wall2Sprite=createSprite(wall2Body.position.x,wall2Body.position.y,200,20)
	wall3Sprite=createSprite(wall3Body.position.x,wall3Body.position.y,20,100)
	wall1Sprite.shapeColor="red"
	wall2Sprite.shapeColor="red"
	wall3Sprite.shapeColor="red"
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW)
  {
    Matter.Body.setStatic(packageBody, false)

    
  }
}



