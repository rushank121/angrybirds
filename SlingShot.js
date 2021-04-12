class SlingShot {
    constructor(body1,body2) {
    var options={
        bodyA: body1,
        bodyB: body2,
        length:10,
        stiffness:0.03
    }
     this.sling=Constraint.create(options);
     World.add(world,this.sling);
    }
    display(){
        var posA=this.sling.bodyA.position;
        var posB=this.sling.bodyB.position;
        strokeWeight(5);
        line(posA.x,posA.y,posB.x,posB.y);
    
    }
}