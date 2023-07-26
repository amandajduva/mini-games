// var guessItem = null;
// var interval = 100;
// var results = [];
// var solution = null;
// var gameOver = false;

// function setup(){
// 	createCanvas(800, 300);
// }

// function draw(){
// 	var gameScore = getGameScore(results);


// 	if (gameScore.loss === 3 || gameScore.total === 10){
// 		gameOver = true;
// 		displayGameOver(gameScore);
// 		return;
// 	}
// 	background(220);

// 	if (frameCount === 1 || frameCount % interval === 0){
// 		solution = null;
// 		guessItem = new GuessItem(width/2, height/2, 10);
// 	}	

// 	if (guessItem) {
// 		guessItem.render();
// 	}
// 	if (solution === true || solution === false ){
// 		solutionMessage(gameScore.total, solution);
// 	}	
// }

// function solutionMessage(seed, solution){
// 	var trueMessages = [
// 		'GOOD JOB!',
// 		'KEEP IT UP',
// 		'GREAT',
// 		'NICE ON'
// 	];


// 	var falseMessages = [
// 		'JUST MISSED IT',
// 		'AND YOU MISSED',
// 		'TRY AGAIN',
// 		'BOGEY',
// 	];

// 	var messages;
// 	push();
// 	textAlign(CENTER, CENTER);
// 	randomSeed(seed * 10000);

// 	if (solution === true){
// 		messages= trueMessages;
// 	} else if (solution=== false){
// 		messagges = falseMessages;
// 	}
	
// 	translate(width/2, height/2);
// 	text(messages[parseInt(random(messages.length), 10), 0, 0]);
// 	pop();
// }

// function displayGameOver(score){
// 	push();

// 	background(255);
// 	textAlign(CENTER, CENTER);
// 	translate(width/2, height/2);

// 	fill(237, 34, 93);
// 	textSize(24);
// 	text('GAME OVER!', 0, 0);

// 	fill(0);
// 	translate(0, 36);
// 	text('You have ' + score.win + ' correct guesses', 0, 0);

// 	var alternatingValue = map(sin(frameCount / 60), -1, 1, 0, 255);
// 	fill(237, 34, 93, alternatingValue);
// 	textSize(16);
// 	translate(0, 78);
// 	text('PRESS ENTER', 0, 0);
// 	pop();
// }

// function getGameScore(score){
// 	var wins = 0;
// 	var losses = 0;
// 	var total = score.length;

// 	for (var i = 0; i<score.length; i++){
// 		var item = score[i];
// 		if (item === true){
// 			wins = wins + 1;
// 		} else {
// 			losses = losses + 1;
// 		}
// 	}	

// 	return {win: wins, loss: losses, total: total}
// }


// function restartTheGame(){
// 	results = [];
// 	solution = null;
// 	gameOver = false;
// }

// function keyPressed(){
// 	if (gameOver === true){
//  		if (keyCode === ENTER){
// 			restartTheGame();
// 			return;
// 		 }
// 	}
// 	if (guessItem !== null){
// 	console.log('You Pressed', key);
// 	solution = guessItem.solve(key);

// 	if (solution) { 
// 		results.push(true);
// 	} else{
// 		results.push(false);    
// 	}
// 	guessItem = null;
// 	} else {
// 		console.log('Nothing to be solved');
// 	}
// }

// function GuessItem(x, y, scl){
// 	this.x = x;
// 	this.y = y;
// 	this.scale = scl;
// 	this.scaleIncrement = 0.5;
// 	this.content = getContent();
// 	this.alpha = 255;
// 	this.alphaDecrement = 3;
// 	this.solved;

// 	function getContent(){
// 		return String(parseInt(random(10), 10));
// 	}

// 	this.solve = function(input){
// 		console.log(typeof input);
// 		console.log(typeof this.content)
// 		if (input === this.content){
// 			this.solved = true;
// 		} else {
// 			this.solved === false;
// 		}
// 		return this.solved;
// 	}

// 	this.render = function(){
// 		if(this.solved === false) {
// 			return;
// 		}
// 		push();
// 		fill(0, this.alpha);
// 		textAlign(CENTER, CENTER);
// 		translate(this.x, this.y);
// 		scale(this.scale);
// 		text(this.content, 0, 0);
// 		this.scale = this.scale + this.scaleIncrement;
// 		this.alpha = this.alpha - this.alphaDecrement;
// 		pop();
// 	}	
// }

let guessItem = null;
let interval = 80;
let results = [];
let solution = null;

function setup(){
    createCanvas(800, 400);
}

function draw(){
    background(220);
    if (frameCount === 1 || frameCount % interval === 0){
        solution = null;
        guessItem = new GuessItem(width/2, height/2, 10);
    }

    if (guessItem){
        guessItem.render();
    }

    if (solution === true){
        background(255);
    } else if (solution === false){
        background(0);
    }
}

function getGameScore(score){
    
}
function keyPressed() {
   if (guessItem !== null){
   console.log('You Pressed', key);
   solution = guessItem.solve(key);
   guessItem = null;
    } else {
        console.log('Nothing Solved');
    }
}


function GuessItem(x, y, scl) {
    this.x = x; 
    this.y = y;
    this.scale = scl;
    this.scaleIncrement = 0.5;
    this.content = getContent();
    this.alpha = 255;
    this.alphaDecrement = 3;
    this.solved; 
    
    function getContent() {
        return String(parseInt(random(10), 10));
    }

    this.solve = function(input){
        if(input === this.content){
            this.solved = true;
        } else {
            this.solved = false;
        }
    }

    this.render = function(){
        if (this.solved === false){
            return;
        }
        push();
        fill(0, this.alpha);
        textAlign(CENTER, CENTER);
        translate(this.x, this.y);
        scale(this.scale);
        text(this.content, 0, 0);
        this.scale = this.scale + this.scaleIncrement;
        this.alpha = this.alpha - this.alphaDecrement;
        pop();
        
    }

}


