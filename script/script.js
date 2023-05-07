let clickBox = document.getElementById("clickHere");
let displayScore = document.getElementById("scoreBox");
let coins = `<i class="fa-solid fa-coins gold"></i>`;
let yoshiButton = document.getElementById("buyYoshi");
let cpsBox = document.getElementById("cpsBox");

let score = 0;
let cps = 10;

function playSound(sound) {
	let soundPlayed = new Audio(sound);
	soundPlayed.play();
}

clickBox.addEventListener("click", () => {
	score += 1;
	displayScore.innerHTML = `${score} ${coins}`;
	playSound("/sound/bonk.mp3");
});

yoshiButton.addEventListener("click", () => {
	cps += 10;
	score -= 20;

	displayScore.innerHTML = `${score} ${coins}`;
	cpsBox.innerHTML = `${cps} ${coins}`;
});

window.addEventListener("load", () => {
	setInterval(() => {
		if ((cps = 0)) {
			return;
		} else {
			score += cps;
		}
	}, 1000);
});
