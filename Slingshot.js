class rope{
    constructor(bodyA,B){
        var options = {
            bodyA: bodyA,
            pointB: B,
            stiffness: 0.004,
            length:3
        }
        this.pointB=B
        this.Sling = Constraint.create(options);
        World.add(world, this.Sling);
    }
    fly()
    {
        this.Sling.bodyA=null

    }
    attach(body){
        this.Sling.bodyA = body
    }

    display(){
        if(this.Sling.bodyA)
        {
            var pointA = this.Sling.bodyA.position;
            var pointb = this.pointB
            strokeWeight(4);
            fill("yellow")
            line(pointA.x, pointA.y, pointb.x, pointb.y);
        }
        }
        
     
    
}