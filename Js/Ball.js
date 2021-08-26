class Ball{
    constructor(x,y,w,h){
        var options={
            density: 0.001,
            //restitution: 0.01
        }
        this.body= Bodies.rectangle(x,y,w,h,options);
        this.w= w;
        this.h= h;
        World.add(world, this.body);
    }
    display(){
        push();
        fill("green");
        ellipse(this.body.position.x, this.body.position.y,this.w, this.h);
        pop();
    }
}