
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var chão;
var block1, block2, block3;

function preload()
{
	
}

function setup() {
	createCanvas(400, 500);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

	var chão_options = {
		isStatic:true
	  };

	  var block1_options = {
		  restituition:0.9,
		  friction:0.02,
			frictionAir:0.2
	  };

	  var block2_options = {
		restituition:0.7,
		friction:0.01,
		  frictionAir:0.1
	};

	var block3_options = {
		restituition:1,
		friction:0,
		  frictionAir:0.3
	};



	  chão = Bodies.rectangle(200, 490, 400, 20, chão_options);
  World.add(world, chão);
	
	  block1 = Bodies.circle(220, 20, 20, block1_options);
	  World.add(world,block1);

	  block2 = Bodies.rectangle(120, 70, 10, 10, block2_options);
	  World.add(world,block1);

	  block3 = Bodies.rectangle(350, 50, 10, 10, block3_options);
	  World.add(world,block1);

	  rectMode(CENTER);
	  ellipseMode(RADIUS);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('yellow');
  Engine.update(engine);

  ellipse(block1.position.x, block1.position.y, 20);

  rect(chão.position.x, chão.position.y, 400, 20);

  rect(block2.position.x, block2.position.y, 10, 10);

  rect(block3.position.x, block3.position.y, 10, 10);

  drawSprites();
 
}



