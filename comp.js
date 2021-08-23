class comp{
    constructor(x,y,width,height){
        var huh={
            isStatic:true

        }
        this.body=Bodies.rectangle(x,y,width,height,huh)
        this.width=width;
        this.height=height;
        this.image=loadImage("assets/player.png");
        World.add(world,this.body);

    }

    show()
    {
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height);
        pop();

            
    }
    
    
  
        
    
}