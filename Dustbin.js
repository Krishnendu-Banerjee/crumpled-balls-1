class Dustbin{
    constructor(x, y,width, height){
        var options={
            isStatic: true,
        }
        this.body=Bodies.rectangle(x, y, 100, height, options);
        this.width= width
        this.height=height
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill("red");
        rect(0, 0, this.width, this.height);
        
        pop();
    }
}