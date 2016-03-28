//Your Drawing

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  background("magenta");

  triangle(30, 75, 58, 20, 86, 75);
  triangle(10,55,20,100,30,45);
  arc(50, 55, 50, 50, 0, HALF_PI);
noFill();
arc(50, 55, 60, 60, HALF_PI, PI);
arc(50, 55, 70, 70, PI, PI+QUARTER_PI);
arc(50, 55, 80, 80, PI+QUARTER_PI, TWO_PI);
quad(38, 31, 86, 20, 69, 63, 30, 76);
ellipse(56, 46, 55, 55);



}
