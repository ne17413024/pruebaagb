const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, fire1;
var backgroundImg,platform;
var drop, bob;
var kid;
var score = 0;

function preload() {
    backgroundImg = loadImage("sprites/bg2.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    fire1 = new Fire(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    fire3 = new Fire(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    drop = new Drop(200,120);

    //log6 = new Log(230,180,80, PI/2);
    bob = new Bob(drop.body,{x:183, y:105});

   
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    textSize(35)
        fill("white")
        text("Puntuación  " + score, width-250, 50)

    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();   
    fire1.display();
    fire1.score();
    log1.display();

    box3.display();
    box4.display();
    fire3.display();
    fire3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    drop.display();
    platform.display();
    //log6.display();
    bob.display();  
 
}

function mouseDragged(){
    Matter.Body.setPosition(drop.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    bob.fly();
}

function keyPressed(){
    if(keyCode === 32){
        drop.trayectory =[];
        Matter.Body.setPosition(drop.body,{x:200,y:50});
        bob.attach(drop.body);

    }
}