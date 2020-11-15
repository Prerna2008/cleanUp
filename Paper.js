class Paper {
    constructor(x, y,radius) {
      var options = {
      
      }
      this.body = Bodies.circle(x, y,20, options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("green");
      ellipse(0, 0, this.radius);
      pop();
    }
  };
  