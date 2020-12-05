class Polygon{
    constructor(x,y,radius) {
        var options = {
            isStatic: false,
            restitution:0,
            friction:1,
            density:1.2,
        }
        this.x=x; this.y=y; 
        this.r=radius;
        this.image=loadImage("polygon.png"); 
        this.body=Bodies.circle(this.x, this.y, this.r, options)
        World.add(world, this.body);
    }
    display(){
        //console.log(this.body.position);
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        //ellipseMode(RADIUS);
        image(this.image, 0, 0, this.r, this.r);
        pop();
    }
}