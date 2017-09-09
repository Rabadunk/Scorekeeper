var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input");
var dispList = document.getElementsByTagName("span");
var p1Score = 0;
var p2Score = 0;
var winningScoreDisplay = document.querySelector("p span");
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score ++;
		if(p1Score === winningScore){
			dispList[0].classList.add("winner");
			gameOver = true;
		}
		dispList[0].textContent = p1Score;
	}
});

p2Button.addEventListener("click", function(){
	if (!gameOver){
		p2Score ++;
		if(p2Score === winningScore){
			dispList[1].classList.add("winner");
			gameOver = true;
		}
		dispList[1].textContent = p2Score;
	}
});

resetButton.addEventListener("click", function(){
	reset();
});

numInput.addEventListener("change", function(){
	winningScore = Number(numInput.value);
	winningScoreDisplay.textContent = winningScore;
	reset();


});

function reset(){
	p1Score = 0;
	p2Score = 0;
	gameOver = false;
	dispList[0].textContent = 0;
	dispList[1].textContent = 0;
	dispList[0].classList.remove("winner");
	dispList[1].classList.remove("winner");

};

