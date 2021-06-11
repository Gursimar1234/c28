class Chain{

constructor(ba,pb){

var options = {
    bodyA:ba,
    pointB:pb,
    stiffness:0.05,
    length:10
}

this.chain = Constraint.create(options);
World.add(world,this.chain);
}

display(){
    if (this.chain.bodyA){
    var pos = this.chain.bodyA.position;
    var pos1 = this.chain.pointB;
    strokeWeight(4);
    line(pos.x,pos.y,pos1.x,pos1.y);
    }
}
fly(){
    this.chain.bodyA = null;
}
}