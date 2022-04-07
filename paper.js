class Paper{
    
    constructor(x,y,radius){

       var options = {
           
        isStatic : false,
        "restitiution" : 3,
        "friction" : 0.5,
        "density" : 1.2,
       }
       
       paper = loadImage("paper.png");

       this.body = Bodies.circle(x,y,radius,options);
       this.radius = radius;

       World.add(world, this.body);

       function keyPressed(){

		if(keyCode === UP_ARROW){

			Matter.Body.applyForce(paperObject.body,paperObject.Body.body.position,{x:130, y:-145});
		}
	

	}
 
    }

    display(){

        ellipseMode(RADIUS);

        circle(this.bodyPosition.x, this.bodyPosition.y, this.radius);

    }
    
}