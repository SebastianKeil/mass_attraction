class Mass{
  
  constructor(x, y, m){
    this.pos = createVector(x, y);
    this.m = m;
  }
  
  show(){
    noStroke();
    fill(150,200,250);
    ellipse(this.pos.x, this.pos.y, this.m*7)
  }
  
  showLast(){
    stroke(100);
    strokeWeight(3);
    fill(150,200,250);
    ellipse(this.pos.x, this.pos.y, this.m*7)
  }
  
  applyForceTo(movers){
    for(let mover of movers){
      let force = p5.Vector.sub(this.pos, mover.pos);
      let dist = p5.Vector.dist(mover.pos, this.pos);
      //this.drawRope(mover, force.mag());
      
      force.normalize();
      force.mult(this.m*100);
      mover.applyForce(force.div(dist*10));
    }
  }
  drawRope(mover, mag){
    let antiRed = this.magToRed(mag);
    stroke(255 - antiRed,100,100);
    strokeWeight(this.m*2)
    line(mover.pos.x, mover.pos.y, this.pos.x, this.pos.y);
  }
  
  magToRed(mag){
    return -map(mag,10,20,100,255);
  }
}