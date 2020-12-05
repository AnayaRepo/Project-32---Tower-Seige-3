class Box {
  constructor(x, y, width, height) {
    var options = {
        isStatic: false,
        'restitution':0.8,
        'friction':1.0,
        'density':0.4
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility = 255;
    //this.image = loadImage("sprites/base.png");
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed<3){
    push();
    var pos= this.body.position;
    fill("lavender");
    strokeWeight(3);
    stroke("black");
    rectMode(CENTER);
    translate(pos.x, pos.y);
    rect(0, 0, this.width, this.height);
    pop();
    }else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility-5;
      tint(255, this.visibility);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop()
    }
  }

};
