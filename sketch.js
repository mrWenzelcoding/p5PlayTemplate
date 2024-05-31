let ball;
let player;

function setup() {
	new Canvas(720, 480, 'fullscreen');

	ball = new Sprite();
	ball.diameter = 50;
	ball.color = "grey"
}

function draw() {
	background('skyblue');

	if (mouse.presses()) {
		ball.speed = 10;
		ball.moveTo(mouse, 5);
	}
}
