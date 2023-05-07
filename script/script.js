let clickBox = document.getElementById("clickHere");
let displayScore = document.getElementById("scoreBox");
let score = 0;

function playSound(sound) {
	let soundPlayed = new Audio(sound);
	soundPlayed.play();
}

clickBox.addEventListener("click", () => {
	score += 1;
	displayScore.innerText = score;
	playSound("/sound/bonk.mp3");
});
