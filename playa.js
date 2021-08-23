class playa
{
    constructor(x,y,width,height)
    {
        var gah ={
            isStatic:true
        }

        this.body=Bodies.rectangle(x,y,width,height,gah)
        this.width=width;
        this.height=height;
        this.image=loadImage("assets/player.png")
        World.add(world,this.body)
        
    }
    show()
    {
        var pos= this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop()
    }

}