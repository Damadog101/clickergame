let clickBox = document.getElementById("clickHere");
let displayScore = document.getElementById("scoreBox");
let score = 0;
let coins = `<i class="fa-solid fa-coins gold"></i>`;
function playSound(sound) {
	let soundPlayed = new Audio(sound);
	soundPlayed.play();
}

clickBox.addEventListener("click", () => {
	score += 1;
	displayScore.innerHTML = `${score} ${coins}`;
	playSound("/sound/bonk.mp3");
});
