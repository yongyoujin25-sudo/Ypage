class Walker {
  
  constructor() {
    this.pos = createVector(0,height/2);
    this.vel = createVector(random(1,10),0);
    // this.acc = createVector(0,0.5);
  	this.w = 20;
  }
  
  move() {
    let g = createVector(0,0.3);
    this.vel.add(g);
    
    // let nv = this.vel + g;
    // let nv = p5.Vector.add(this.vel, g);
    // //3+4=7
    
    // this.vel.add(this.acc);
    this.pos.add(this.vel);
    
  }
  
  bongGround() {
    
    if(this.pos.y > height) {
    this.vel.y+= -6
  }
}
  
  bongWall() {
    
    if(this.pos.x > width) {
    this.vel.x+= -6
  } if(this.pos.x < 0) {
    this.vel.x+= 6
  }
    
  }
  
  show() {
    strokeWeight(0);
    circle(this.pos.x, this.pos.y, this.w);
  }
}