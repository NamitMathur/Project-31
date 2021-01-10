class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
    }
    display(){
        push();
        rectMode(CENTER);
        fill("lightgrey");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
}