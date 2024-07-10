let ball;
let amplitude = 50;
let frequency = 0.05;
let minAmplitude = 2;
let maxDistance = 100;

function setup() {
  createCanvas(800, 800);
  ball = {
    x: width / 2,
    y: height / 2,
    yStart: height / 2,
    diameter: 15
  };
}

function draw() {
  background(220);
  let distanceToMouse = dist(mouseX, mouseY, ball.x, ball.y);
  if (distanceToMouse < maxDistance) {
    amplitude = lerp(minAmplitude, 50, distanceToMouse / maxDistance);
  } else {
    amplitude = 50;
  }
  ball.y = ball.yStart + sin(frameCount * frequency) * amplitude;
  if (distanceToMouse < minAmplitude) {
    ball.y = mouseY; 
  fill(0, 255, 0);
  ellipse(ball.x, ball.y, ball.diameter);
}
