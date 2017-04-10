var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0; 
var isSunk = false;

while (isSunk == false) {
	guess = prompt("введи число от 0 до 6 для выстрела:");
	if (guess < 0 || guess > 6) {
		alert("Введи правильное число");
	} else {
		guesses = guesses + 1;
		if (guess >=location1 && guess <= location3) {
			hits = hits + 1;
			alert("Попал");
			if (hits == 3) {
				isSunk = true;
				alert("Ты потопил корабль!");
			}
		} else {
			alert("Промахнлся!")
		}
	}
}
var stats = "Тебе потребовалось " + guesses + "попыток чтобы потопить корабль, " + "что означает точность твоей стрельбы равна " + (3/guesses*100) + "%";
alert(stats);







//if (guess >=location1 && guess <= location3) {
//	hits = hits + 1;
//}