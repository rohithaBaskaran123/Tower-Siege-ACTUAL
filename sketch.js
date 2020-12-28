const Constraint=Matter.Constraint
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

polygon = Bodies.circle(50,200,20);;
World.add(world,polygon);

function preload(){}

function setup(){
    createCanvas(800,400);
    engine= Engine.create();
    world = engine.world;
    block8 = new Box (630,195,30,40);
    block9 = new Box (660,195,30,40);
    block10 = new Box (690,195,30,40);
    block11 = new Box (720,195,30,40);
    block12 = new Box (750,195,30,40);

    block13 = new Box (720,155,30,40); 
    block14 = new Box (690,155,30,40);
    block15 = new Box (660,155,30,40);

    block16 = new Box (690,115,30,40);
    block200 = new Box (300,325,30,40);
    block26 = new Box (330,325,30,40);
    block27 = new Box (360,325,30,40);
    block28 = new Box (390,325,30,40);
    block29 = new Box (420,325,30,40);
    block30 = new Box (450,325,30,40);
    block209 = new Box (480,325,30,40);
    block17 = new Box (330,285,30,40);
    block18 = new Box (360,285,30,40);
    block19 = new Box (390,285,30,40);
    block20 = new Box (420,285,30,40);
    block21 = new Box (450,285,30,40);

    block22 = new Box (360,245,30,40);
    block23 = new Box (390,245,30,40);
    block24 = new Box (420,245,30,40);

    block25 = new Box (390,195,30,40);

    polygon = new Box (50,200,30,40);

    ground1 = new Ground (690,220,175,10);
    ground2 = new Ground (390,355,250,10)
//polygon = Bodies.circle(50,200,20);
//World.add(world,polygon);
    slingshot = new SlingShot(polygon.body,{x:50, y:200});

}

function draw(){
    background("lightblack");
    Engine.update(engine);
    slingshot.display();
    fill ("lightblue");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill ("lightgreen");
    block13.display();
    block14.display();
    
    block15.display();
    fill ("lightpink");
    block16.display();
    ground1.display();
    


    fill ("lightblue");
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    fill ("lightgreen");
    block22.display();
    block23.display();
    
    block24.display();
    fill ("lightpink");
    block25.display();
    ground1.display();
    ground2.display();
fill ("turquoise");
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block200.display();
    block209.display();
fill ("gold");
    polygon.display();
}
function mouseDragged(){
    if (gameState=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(bird.body);
    }
}
