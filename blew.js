class blew
    {
        constructor(x,y,w,h)
        {
            var god ={
                isStatic:true
            }
            this.body=Bodies.rectangle(x,y,w,h,god);
            this.width=w;
            this.height=h;
            this.image=loadImage("assets/base1.png");
            World.add(world,this.body);
        }
        
        show()
        {
            var p = this.body.position;
            var angle = this.body.angle;
            push();
            rotate(angle);
            translate(p.x,p.y);
            imageMode(CENTER);
            image(this.image,0,0,this.width,this.height);
            pop();
        }

        

    }