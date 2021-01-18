class monster{
    constructor(x,y){
      
      this.body=Bodies.rectangle(x,y,200,200)
        this.image=monst
        World.add(world,this.body)
  
    }
    display(){
        var pos =this.body.position;
        imageMode(CENTER);
        fill("green");
        animation(this.image,pos.x, pos.y+15,200,200);
      }
    }