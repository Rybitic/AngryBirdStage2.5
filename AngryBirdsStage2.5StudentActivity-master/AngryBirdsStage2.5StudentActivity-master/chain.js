class chain{
    constructor(bodyA,bodyB){
        var option={
            bodyA:bodyA,
            bodyB:bodyB,
            stifness:0.04,
            length:10
        }
        this.Chain=constraint.create(option)
        World.add(world,this.Chain)
    }
    display(){
var pointA = this.Chain.bodyA.position
var pointB = this.Chain.bodyB.position
strokeWeight(3)
line(pointA.x,pointA.y,pointB.x,pointB.y)

    }
}


        
    

