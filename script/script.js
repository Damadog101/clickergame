let clickBox = document.getElementById("clickHere");
let displayScore = document.getElementById("scoreBox");
let coins = `<i class="fa-solid fa-coins gold"></i>`;
let yoshiButton = document.getElementById("buyYoshi");
let cpsBox = document.getElementById("cpsBox");
let yoshiAmountBox = document.getElementById("yoshiAmount");
let yoshiCostBox = document.getElementById("yoshiCostDisplay");

let yoshiAmount = 0;
let score = 0;
let cps = 0;
let yoshiCost = 20;

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
	if (score < yoshiCost) {
		console.log("not enough money");
	} else {
		cps += 2;
		score -= yoshiCost;
		yoshiCost = Math.ceil(yoshiCost * 1.2);
		yoshiAmount += 1;

		yoshiCostBox.innerHTML = yoshiCost;
		yoshiAmountBox.innerHTML = yoshiAmount;
		displayScore.innerHTML = `${score} ${coins}`;
		cpsBox.innerHTML = `${cps} ${coins}`;
	}
});

setInterval(() => {
	if (cps == 0) {
		console.log("cps is 0");
	} else {
		score += cps;
		displayScore.innerHTML = `${score} ${coins}`;
	}
}, 1000);
