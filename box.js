class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var ps =this.body.position;
      rectMode(CENTER);
      rect(ps.x, ps.y, this.width, this.height);
    }
  };
