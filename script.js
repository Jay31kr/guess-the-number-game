"use strict";

// console.log(document.querySelector(".message").textContent);
let num = Math.trunc(Math.random() * 20 + 1);
console.log(num);
let score = 20;
let highScore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // checks if the format of guess is right or not
  if (!guess) {
    document.querySelector(".message").textContent = " No Number !!";
  }
  //   checks if the number is guessd right
  else if (guess === num) {
    document.querySelector(".message").textContent = " Correct Number!!";
    document.querySelector(".number").textContent = num;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  //  checks if the guess number is > than required manipulate the content ad score  accordingly
  else if (guess > num) {
    if (score > 0) {
      document.querySelector(".message").textContent = " Too High!!";
      document.querySelector(".score").textContent = --score;
    } else {
      document.querySelector(".message").textContent = "You Lost the Game!!";
    }
  }
  //  checks if the guess number is < than required manipulate the content ad score  accordingly
  else if (guess < num) {
    if (score > 0) {
      document.querySelector(".message").textContent = " Too Low!!";
      document.querySelector(".score").textContent = --score;
    } else {
      document.querySelector(".message").textContent = "You Lost the Game!!";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  num = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
