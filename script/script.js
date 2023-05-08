let body = document.getElementById("body");

let clickBox = document.getElementById("clickHere");
let displayScore = document.getElementById("scoreBox");
let coins = `<i class="fa-solid fa-coins gold"></i>`;
let cpsBox = document.getElementById("cpsBox");

let yoshiButton = document.getElementById("buyYoshi");
let yoshiAmountBox = document.getElementById("yoshiAmount");
let yoshiCostBox = document.getElementById("yoshiCostDisplay");
let yoshiAmount = 0;
let yoshiCost = 20;

let steveButton = document.getElementById("buySteve");
let steveAmountBox = document.getElementById("steveAmount");
let steveCostBox = document.getElementById("steveCostDisplay");
let steveAmount = 0;
let steveCost = 20;

let score = 0;
let cps = 0;

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
		playSound("/sound/error.mp3");
	} else {
		cps += 2;
		score -= yoshiCost;
		yoshiCost = Math.ceil(yoshiCost * 1.2);
		yoshiAmount += 1;

		yoshiCostBox.innerHTML = yoshiCost;
		yoshiAmountBox.innerHTML = yoshiAmount;
		displayScore.innerHTML = `${score} ${coins}`;
		cpsBox.innerHTML = `${cps} ${coins}`;
		playSound("/sound/itemGet.mp3");
	}
});

steveButton.addEventListener("click", () => {
	if (score < steveCost) {
		console.log("not enough money");
	} else {
		cps += 15;
		score -= steveCost;
		steveCost = Math.ceil(steveCost * 1.2);
		steveAmount += 1;

		steveCostBox.innerHTML = steveCost;
		steveAmountBox.innerHTML = steveAmount;
		displayScore.innerHTML = `${score} ${coins}`;
		cpsBox.innerHTML = `${cps} ${coins}`;
		playSound("/sound/itemGet.mp3");
	}
});

setInterval(() => {
	if (cps != 0) {
		score += cps;
		displayScore.innerHTML = `${score} ${coins}`;
	}
	if (score > 1000) {
		body.style.backgroundColor = "yellow";
	}
}, 1000);
