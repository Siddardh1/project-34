const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
const Constraint=Matter.Constraint
const Render=Matter.Render

var engine,world
var gameState="onSling"

function preload() {
back= loadImage("gb.png")
monst=loadAnimation("m8.png","m7.png")



}

function setup() {
  createCanvas(1000, 600);
  engine=Engine.create()
  world=engine.world
  g1=new ground(400,350,800,10)
  h1=new hero(150,150)
  m1=new monster(750,150)
  b1=new block(350,350-5-12.5,50,25)
  b2=new block(350+50,350-5-12.5,50,25)
  b3=new block(350+50+50,350-5-12.5,50,25)
  b4=new block(350+50+50+50,350-5-12.5,50,25)
  b5=new block(350+50+50+50+50,350-5-12.5,50,25)
  b6=new block(350+50+50+50+50+50,350-5-12.5,50,25)
  b7=new block(350-12.5,350-5-12.5-12.5,25,25)
  b8=new block(350-12.5+12.5+25,350-5-12.5-12.5,50,25)
  b9=new block(350-12.5+12.5+25+50,350-5-12.5-12.5,50,25)
  b10=new block(350-12.5+12.5+25+50+50,350-5-12.5-12.5,50,25)
  b11=new block(350-12.5+12.5+25+50+50+50,350-5-12.5-12.5,50,25)
  b12=new block(350-12.5+12.5+25+50+50+50+50,350-5-12.5-12.5,50,25)
  b13=new block(350-12.5+12.5+25+50+50+50+50+25+12.5,350-5-12.5-12.5,25,25)
  b14=new block(350,350-5-12.5-12.5-12.5,50,25)
  b15=new block(350+50,350-5-12.5-12.5-12.5,50,25)
  b16=new block(350+50+50,350-5-12.5-12.5-12.5,50,25)
  b17=new block(350+50+50+50,350-5-12.5-12.5-12.5,50,25)
  b18=new block(350+50+50+50+50,350-5-12.5-12.5-12.5,50,25)
  b19=new block(350+50+50+50+50+50,350-5-12.5-12.5-12.5,50,25)
  b20=new block(350-12.5,350-5-12.5-12.5-50,25,25)
  b21=new block(350-12.5+12.5+25,350-5-12.5-12.5-50,50,25)
  b22=new block(350-12.5+12.5+25+50,350-5-12.5-12.5-50,50,25)
  b23=new block(350-12.5+12.5+25+50+50,350-5-12.5-12.5-50,50,25)
  b24=new block(350-12.5+12.5+25+50+50+50,350-5-12.5-12.5-50,50,25)
  b25=new block(350-12.5+12.5+25+50+50+50+50,350-5-12.5-12.5-50,50,25)
  b26=new block(350-12.5+12.5+25+50+50+50+50+25+12.5,350-5-12.5-12.5-50,25,25)
  b27=new block(350,350-5-12.5-50-50,50,25)
  b28=new block(350+50,350-5-12.5-50-50,50,25)
  b29=new block(350+50+50,350-5-12.5-50-50,50,25)
  b30=new block(350+50+50+50,350-5-12.5-50-50,50,25)
  b31=new block(350+50+50+50+50,350-5-12.5-50-50,50,25)
  b32=new block(350+50+50+50+50+50,350-5-12.5-50-50,50,25)
  b33=new block(350-12.5,350-5-12.5-12.5-50-50,25,25)
  b34=new block(350-12.5+12.5+25,350-5-12.5-12.5-50-50,50,25)
  b35=new block(350-12.5+12.5+25+50,350-5-12.5-12.5-50-50,50,25)
  b36=new block(350-12.5+12.5+25+50+50,350-5-12.5-12.5-50-50,50,25)
  b37=new block(350-12.5+12.5+25+50+50+50,350-5-12.5-12.5-50-50,50,25)
  b38=new block(350-12.5+12.5+25+50+50+50+50,350-5-12.5-12.5-50-50,50,25)
  b39=new block(350-12.5+12.5+25+50+50+50+50+25+12.5,350-5-12.5-12.5-50-50,25,25)
  r1=new rope(h1.body,{x:150,y:130})
  background1= createSprite(500,350,1000,600)
  background1.addImage(back)

  var render = Render.create({ 
    element: document.body, engine: engine, 
    options: { width: 1350, height: 600, wireframes: false } });
   Render.run(render);
  
}

function draw() {
  background(0);
  Engine.update(engine);
  drawSprites();
  g1.display()
  h1.display()
  m1.display()
  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()
  b6.display()
  b7.display()
  b8.display()
  b9.display()
  b10.display()
  b11.display()
  b12.display()
  b13.display()
  b14.display()
  b15.display()
  b16.display()
  b17.display()
  b18.display()
  b19.display()
  b20.display()
  b21.display()
  b22.display()
  b23.display()
  b24.display()
  b25.display()
  b26.display()
  b27.display()
  b28.display()
  b29.display()
  b30.display()
  b31.display()
  b32.display()
  b33.display()
  b34.display()
  b35.display()  
  b36.display()
  b37.display()
  b38.display()
  b39.display()

  if(m1.body.position.y>=550){
    gameState="end"
    textSize(58)
    stroke("black")
    fill("orange")
    text("GameOver",332,50)
    text("you win",382,100)
    text("refresh your page to play again",90,450)
  
  }
}
function mouseDragged(){
  if (gameState==="onSling"){
      Matter.Body.setPosition(h1.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  r1.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32&&gameState ==="launched"){
      Matter.Body.setPosition(h1.body,{x:150, y:130} );
     r1.attach(h1.body);
     gameState="onSling"

  }
}



