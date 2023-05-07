let clickBox = document.getElementById("clickHere");
let displayScore = document.getElementById("scoreBox");
let score = 0;

clickBox.addEventListener("click", () => {
	score += 1;
	displayScore.innerText = score;
});
