class hero{
  constructor(x,y){
    
    this.body=Bodies.rectangle(x,y,300,150)
      this.image=loadImage("s1.png")
      World.add(world,this.body)

  }
  display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("green");
      image(this.image,pos.x, pos.y,300,150);
    }
  }
