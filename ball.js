class Ball{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic: false
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
      }
      display(){
        var pos =this.body.position;
        translate(pos.x,pos.y)
        rectMode(CENTER);

        fill("gold");
        rect(0,0, this.width, this.height);
      }
    }