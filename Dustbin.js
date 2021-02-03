class Dustbin{
    constructor(x,y){
        this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=213;
		this.wallThickness=20;
        var options = {
            isStatic : true
        }
         this.image = loadImage("dustbingreen.png");
         this.body = Bodies.rectangle(x,y,width,height,options);
        
         World.add(world,this.body);

         
    }

    display(){

            var pos = this.body.position;
            push()
	        translate(pos.x, pos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
			
			pop()
    }
}