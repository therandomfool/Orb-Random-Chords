function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);

  //  stroke using alpha value
  stroke(0, 0, 0, random(1,15));
}

function draw() {
  // two random chords each frame
  randomChord();
  randomChord();
}

function randomChord() {
  // find a random point on a circle
  let angle1 = random(0, 2 * PI);
  let xpos1 = 200 + 200 * cos(angle1);
  let ypos1 = 200 + 200 * sin(angle1);

  //  another random point on the circle
  let angle2 = random(0, 2 * PI);
  let xpos2 = 200 + 200 * cos(angle2);
  let ypos2 = 200 + 200 * sin(angle2);

  //  a line between them
  line(xpos1, ypos1, xpos2, ypos2);
}