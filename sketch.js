let movers = [];
let masses =[];
let mass = 15;

function setup() {
  //frameRate(120);
  createCanvas(windowWidth, windowHeight);
  n = createSlider(1,20,2,1);
  n.position(20,50);
  /*masses triangle
  masses.push(new Mass(windowWidth/3,windowHeight/3,10));
  masses.push(new Mass(windowWidth*2/3,windowHeight/3,12));
  masses.push(new Mass(windowWidth/2,windowHeight*2/3,15));
  */
  //masses raw
  masses.push(new Mass(windowWidth/4,windowHeight/2,10));
  masses.push(new Mass(windowWidth/2,windowHeight/2,12));
  masses.push(new Mass(windowWidth*3/4,windowHeight/2,12));
}

function draw() {
  background(120);
  
  if(movers.length < n.value()){
    movers.push(new Mover(windowWidth/2+100, windowHeight/4));
  }
  if (movers.length > n.value()) {
    movers.splice(0, 1);
  }
  
  //showing mass than calculate forces
  let j = 0;
  for(let mass of masses){
    if(j==0){
      mass.showLast();
    }else{
      mass.show();
    }
    mass.applyForceTo(movers);
    j++;
  }
  
  for(let mover of movers){
    mover.move();
    mover.show();
  }
  
  noStroke();
  fill(150,200,250,80);
  ellipse(mouseX, mouseY, mass*7);
}


function mousePressed(){
  if(mouseY>90 && mouseX<width-10){
    masses.push(new Mass(mouseX, mouseY, mass));
    if(mass < 25){
      mass = random(10,17);
    }
    if(masses.length > 3){
      masses.splice(0, 1);
    }
  }
}