function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
	fill(0,0,0)
	ellipse(mouseX-20,mouseY-20,25,25)
	fill(255,0,0)
	ellipse(mouseX+20,mouseY-20,25,25)
	fill(0,255,0)
	ellipse(mouseX+20,mouseY+20,25,25)
	fill(0,0,255)
	ellipse(mouseX-20,mouseY+20,25,25)
}
