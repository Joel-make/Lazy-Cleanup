class Paper {
    constructor(x,y,r)
    {
     var options={
         isStatic:false,
         "restitution":0.3,
         "friction":0,
         "density":1.2
     }
     this.x=x;
     this.y=y;
     this.r=r;
     this.body=Bodies.circle(this.x,this.y,this.r,options)
     World.add(world,this.body);
     this.image=loadImage("crumbled paper.png");
    }
    display()
    {
      var pos=this.body.position;
      var angle = this.body.angle
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,60,60);
      pop();
    }
    
}