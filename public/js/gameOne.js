
let guessItem = null;
let interval = 64;
let results = [];
let solution = null;
let gameOver = false;

function setup() {
    mode = 0;
  	textAlign(CENTER, CENTER);
    textFont('Helvetica');
     // set height to window width 
    width = windowWidth;
    height = windowHeight;
    //create Canvas of size of window size and 1080
    createCanvas(width, height);

}

function preload() {

}

function draw() {

    clear();
    background(0);
    textSize(32);
  
  if (mode==0) {
      

    text('Press TAB To Start', width/2, height/2);
    let alternatingValue = map(sin(frameCount/60), -1, 1, 0, 255);
	fill(237, 34, 93, alternatingValue);
    
  }
  
  
  if (mode ==1){
    let gameScore = getGameScore(results);

	if (gameScore.loss === 3 || gameScore.total === 50){
		gameOver = true;
		displayGameOver(gameScore);
		return;
	}

	background(0);
	if (frameCount === 1 || frameCount % interval === 0){
		solution = null;
		guessItem = new GuessItem(width/2, height/2, 10);
	}

	if (guessItem){
		guessItem.render();
	}

if(solution == true || solution === false){
	solutionMessage(gameScore.total, solution);
}

}
  
}


function solutionMessage (seed, solution) {
	let trueMessages = [
		'GOOD JOB',
		'OUTSTANDING',
		'WAY TO GO',
		'KEEP IT UP',
		'NEXT ONE',
		'ALRIGHT'
	];

	let falseMessages = [
		'MISSED',
		'SKILL ISSUE',
		'PFFFTT',
		'LATE'
	];

	let messages;

	push();
	textAlign(CENTER, CENTER);
	textSize(36);
	fill(237, 34, 93);
	randomSeed(seed * 10000);

	if (solution === true){
		background(0);
		messages = trueMessages;
	} else if (solution === false){
		background(0);
		messages = falseMessages;
	}

	translate(width/2, height/2);
	text(messages[parseInt(random(messages.length), 10)], 0, 0);
	randomSeed();
	pop();
}
  


function displayGameOver(score){
	push();
	background(255);
	textAlign(CENTER, CENTER);
	translate(width/2, height/2);

	fill(237, 34, 93);
	textSize(24);
	text('GAME OVER', 0, 0)

	fill(0);
	translate(0, 36);
	text('You have ' + score.win + ' Correct Guesses Out Of 50', 0, 0);

	let alternatingValue = map(sin(frameCount/60), -1, 1, 0, 255);
	fill(237, 34, 93, alternatingValue);
	textSize(16);
	translate(0, 100);
	text('PRESS ENTER', 0, 0);
	pop();   
}

function getGameScore(score){
	let wins = 0;
	let losses = 0;
	let total = score.length;

	for(var i = 0; i < total; i++){
		let item = score[i];
		if (item === true) {
			wins = wins + 1;
		} else {
			losses = losses + 1;
		}
	}
	return {win: wins, loss: losses, total: total};
}

function restartTheGame() {
	results = [];
	solution = null;
	gameOver = false;
}

function keyPressed(){
  if (keyCode===TAB)
    mode = 1;
  
  
  	if (gameOver === true){
		if(keyCode === ENTER){
			restartTheGame()
			return;
		}
	}
  if (guessItem !== null){
console.log('You Pressed', key);
solution = guessItem.solve(key);

if(solution){
	results.push(true);
} else{
	results.push(false);
}
guessItem = null;
	} else {
		console.log('Nothing Solved');
	}
}


function GuessItem(x, y, scl) {
	this.x = x; 
	this.y = y;
	this.scale = scl;
	this.scaleIncrement = 0.33;
	this.content = getContent();
	this.alpha = 255;
	this.alphaDecrement = 6;
	this.solved; 
	this.contentMap = {
		'1': 'one',
		'2': 'two',
		'3': 'three',
		'4': 'four',
		'5': 'five',
		'6': 'six', 
		'7': 'seven',
		'8': 'eight',
		'9': 'nine',
		'0': 'zero'
	};

	this.colors = [
	[242, 186, 201],
	[186, 215, 242],
	[242, 226, 186],
	[244, 172, 69],
	[166, 28, 60],
	[93, 211, 158],
	[112, 3, 83],
	[255, 147, 79],
	[255, 170, 90],
	[26, 27, 65]
	];
	
	function getContent() {
		return String(parseInt(random(10), 10));
	}

	this.solve = function(input){
		console.log(typeof input);
		console.log(typeof this.content)
		if(input === this.content){
			this.solved = true;
		} else {
			this.solved = false;
		}
		return this.solved;
	}

	this.drawEllipse = function (size, strkWght, spdMult, seed){
		push();
		randomSeed(seed);
		translate(this.x, this.y);
		scale(this.scale * 0.5 * spdMult);
		let clr = this.colors[parseInt(random(this.colors.length), 10)];
		stroke(clr);

		noFill();
		strokeWeight(strkWght);
		ellipse(0, 0, size, size);
		randomSeed
		pop();
	}

	this.render = function(){
		if (this.solved === false){
			return;
		}

		this.drawEllipse(100, 15, 1.4, this.content * 1000);
		this.drawEllipse(70, 7, 1.1, this.content * 2000);
		this.drawEllipse(50, 5, 0.9, this.content * 3000);

		push();
		fill(255, this.alpha);
		textAlign(CENTER, CENTER);
		translate(this.x, this.y);
		scale(this.scale);
		text(this.contentMap[this.content], 0, 0);
		this.scale = this.scale + this.scaleIncrement;
		this.alpha = this.alpha - this.alphaDecrement;
		pop();
	}
}