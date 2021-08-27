class Mover{
  
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.tail = [];
  }
  
  applyForce(force){
    this.acc.add(force.mult(1.1));
    //print("acc: " + this.acc.mag());
    this.acc.limit(100);
  }
  
  move(){
    this.vel.add(this.acc);
    this.vel.limit(9);
    
    let pos = createVector(this.pos.x, this.pos.y);
    this.tail.push(pos);
    if(this.tail.length > 20){
      this.tail.shift();
    }
    
    this.pos.add(this.vel.mult(random(0.95,1.05)));
  }
  
  show(){
    noStroke();
    fill(255,160,50);
    ellipse(this.pos.x, this.pos.y, 30);
    
    for(let i = 0; i < this.tail.length; i++){
      noStroke();
      fill(170,180,50,5*i);
      ellipse(this.tail[i].x, this.tail[i].y, 30);
    }
  }
  
}