class Block  {
    constructor(x, y, width,height){
      var options = {
        isStatic : false,
      }
      this.width = width
      this.height = height
      this.body = Bodies.rectangle(x,y,this.width,this.height,options);
      this.visibility = 255
      World.add(world,this.body)
    }
  display(){
    var pos =this.body.position;
    push()

    pop()
    if(this.body.speed >= 3 || this.visibility < 255){
    
      this.visibility-= 20
    }
    if (this.visibility < 0){
      World.remove(world,this.body)
    }
    else{
    push()
    tint(255,this.visibility)
    rectMode(CENTER)
    rect(pos.x,pos.y,this.width,this.height)
    pop()
    }
  }
  score(){
    if (this.visibility < 0 && this.visibility >- 105){
      score++
    }
  }
  }
  
  