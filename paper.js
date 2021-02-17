class paper
{
	constructor(x,y,r)
	{
		var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
            			
			}
			if(keyDown(DOWN_ARROW)){
				this.position.x = 100
				this.position.y = 80
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("paper.png")
		this.body=Bodies.circle(this.x,this.y, this.r , options);
 		World.add(world, this.body);
       
	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
            fill("white")
            imageMode(CENTER)
            image(this.image,0,0,this.r,this.r)
            
			
			pop()
			
	}

}