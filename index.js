// Create a variable that hold random numbers from 1 to 6

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

let randomDiceImage = "dice" + randomNumber1 + ".png";
console.log(randomDiceImage);

let randomImageSource = "./images/" + randomDiceImage;
console.log(randomImageSource);

//Change the image to random dice
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

//Second random dice
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let imageSource2 = "./images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", imageSource2);

//Change title depending on the result of dice roll
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw";
} else {
  document.querySelector("h1").innerHTML = "Player 2 wins";
}
