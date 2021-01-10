class Particle{
    constructor(x,y,r){
        var options={
            isStatic:false
        }
        this.r=r;
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(x,y,r,options);
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
    display(){
        var position=this.body.position;
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(position.x,position.y,this.r,this.r);
    }

}