function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("self-portrait-container");
  background("#fff44f");

  stroke("#ff007f");
  strokeWeight(3);
  fill("white");
  ellipse(200, 200, 400, 400);

  noStroke();
  fill("#d100ff");
  ellipse(130, 150, 40, 40);
  ellipse(270, 150, 40, 40);

  fill("#ff6f00");
  triangle(195, 200, 205, 200, 200, 250);

  fill("#00f5d4");
  ellipse(200, 300, 60, 60);

  stroke("#0096ff");
  strokeWeight(10);
  noFill();
  ellipse(200, 300, 80, 80);
}

function draw() {
  if (mouseIsPressed) {
    noStroke();
    fill(random(255), random(255), random(255));
    ellipse(mouseX, mouseY, 15, 15);
  }
}
