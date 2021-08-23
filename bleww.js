class bleww
{
    constructor(x,y,w,h)
    {
        var august={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,august);
        this.width=w;
        this.height=h;
        this.image=loadImage("assets/base2.png");
        World.add(world,this.body);
    }
    show()
   {
    var mf = this.body.position;
    var ang = this.body.angle;
    push()
    translate(mf.x,mf.y);
    rotate(ang);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop()
    
   }
}

