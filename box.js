class Box  {
    constructor(x, y, width,height){
      var options = {
        isStatic : false,
        restitution : 1.2
      }
      this.width = width
      this.height = height
      this.body = Bodies.rectangle(x,y,this.width,this.height,options);
      this.image = loadImage("polygon.png");
      World.add(world,this.body)
    }
  display(){
    var pos =this.body.position;
    push()
    imageMode(CENTER)
    image(this.image,pos.x,pos.y,this.width,this.height)
    pop()
  }
  };
  