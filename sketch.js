let ball;
let ball2;


function setup() {
  createCanvas(400, 400); 
  ball = new Walker();
  ball2 = new Walker();
}


function draw() {
  background(0,5);
  ball.move();
  ball.show();
  ball.bongGround();
  ball.bongWall();
  ball2.move();
  ball2.show();
  ball2.bongGround();
  ball2.bongWall();

}