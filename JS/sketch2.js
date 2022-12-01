function setup() {
  createCanvas(400, 400);
  background("#8CD7F8");
}

function draw() {
  fill("#FFCD38");
  rect(frameCount % 400, 280, 80, 30);
  rect(frameCount % 400, 200, 20, 30);
  fill("#673AB7");
  rect(400 - (frameCount % 400) / 2, 200, 20, 30);
  fill("#FF9800");
  rect(frameCount % 400, frameCount % 400, 20, 30);
  fill("#CDDC39");
  rect((frameCount % 400) + 100, (frameCount % 400) + 50, 20, 30);

  circle(frameCount % 400, 30, frameCount % 20);
  fill("#673AB7");
  circle(frameCount % 400, 50, frameCount % 20);
  fill("#FF9800");
  circle((frameCount % 800) / 2, 70, frameCount % 20);
  fill("#FFCD38");
  circle(frameCount % 800, 90, frameCount % 30);
  fill("#673AB7");
  circle(frameCount % 400, 130, frameCount % 40);
  fill("#CDDC39");
  circle(frameCount % 400, 180, frameCount % 50);
  fill("#FF9800");
  circle(frameCount % 400, 250, frameCount % 60);
  fill("#FFCD38");
  circle(frameCount % 400, 300, frameCount % 70);
  fill("#673AB7");
  circle(frameCount % 400, 360, frameCount % 80);
  rect(50, (frameCount % 1200) / 3 + 50, 20, 30);
}
