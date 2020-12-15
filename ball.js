class ball {
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:1,
            friction:0,
            density:0.8
        }
        this.r=r;
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(x,y,r,options);
        
        
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);      
        fill(204, 102, 153);
        ellipse(0,0,this.r,this.r); // if in ellipseMode(CENTER), either change this.r given here
        pop();                      // to this.r*2 OR   in 12th line change it to r/2
    }
}