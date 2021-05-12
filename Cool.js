class Cool {
    constructor(x,y,r)
    {
   
     this.x=x;
     this.y=y;
     this.r=r;
     this.body=Bodies.circle(this.x,this.y,this.r)
     World.add(world,this.body);
     this.image=loadImage("Cool.jpg");
    }
    display()
    {
    
      imageMode(CENTER);
      image(this.image,this.x,this.y,300,300);
     
    }
}