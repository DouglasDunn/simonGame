//buttons
const greenButton = document.getElementById('green');
const redButton = document.getElementById('red');
const yellowButton = document.getElementById('yellow');
const blueButton = document.getElementById('blue');
const onButton = document.getElementById("onButton");
const offButton = document.getElementById("offButton");


//arrays
let userColors = [];
const computerColors = [];
const colors = ["green", "red", "yellow", "blue"];

let randomNumber;
let count = 0;

function clickedColor(color) {
  console.log(count);
  userColors.push(color);
  count++;
  console.log(userColors);

  for (let i = 0; i < userColors.length; i++) {
    checkColors(userColors.length - 1);
  }

  if (userColors.length === computerColors.length) {
    randomNumber = Math.floor(Math.random() * 4);
    computerColors.push(colors[randomNumber]);
    console.log("computer colors: " + computerColors);

    //bright(colors[randomNumber]);
    colorSequence(computerColors);
    userColors = [];
    count = 0;
  }
}

function buttonHeldDown(color) {
  if (color === "green") {
    greenButton.style.filter = "brightness(3)";
  } else if (color === "red") {
    redButton.style.filter = "brightness(3)";
  } else if (color === "yellow") {
    yellowButton.style.filter = "brightness(3)";
  } else if (color === "blue") {
    blueButton.style.filter = "brightness(3)";
  }
}

function buttonReleased(color) {
  if (color === "green") {
    greenButton.style.filter = "brightness(1)";
  } else if (color === "red") {
    redButton.style.filter = "brightness(1)";
  } else if (color === "yellow") {
    yellowButton.style.filter = "brightness(1)";
  } else if (color === "blue") {
    blueButton.style.filter = "brightness(1)";
  }
}

function checkColors(count) {
  console.log(count);

  //for (let i = 0; i < userColors.length; i++) {
    if (userColors[count] !== computerColors[count]) {
      alert("you lose!");
    }
  //}
}

// function clicked(color) {
//   userColors.push(color);
//   //count++;
//   //console.log("user colors: " + userColors);*******
//
//   randomNumber = Math.floor(Math.random() * 4);
//   computerColors.push(colors[randomNumber]);
//   console.log("computer colors: " + computerColors);
//
//   //bright(colors[randomNumber]);
//   colorSequence(computerColors);
// }

function colorSequence(array) {
  for (let i = 0; i < array.length; i++) {
    setTimeout(function() {bright(array[i])}, 1000 + (i * 3000));
  }
}

//makes the color button brighter
function bright(color) {
  if (color === "green") {
    greenButton.style.filter = "brightness(3)";
    setTimeout(function() {dark("green")}, 2000);
  } else if (color === "red") {
    redButton.style.filter = "brightness(3)";
    setTimeout(function() {dark("red")}, 2000);
  } else if (color === "yellow") {
    yellowButton.style.filter = "brightness(3)";
    setTimeout(function() {dark("yellow")}, 2000);
  } else if (color === "blue") {
    blueButton.style.filter = "brightness(3)";
    setTimeout(function() {dark("blue")}, 2000);
  }
}

//makes the button darker
function dark(color) {
  if (color === "green") {
    greenButton.style.filter = "brightness(1)";
  } else if (color === "red") {
    redButton.style.filter = "brightness(1)";
  } else if (color === "yellow") {
    yellowButton.style.filter = "brightness(1)";
  } else if (color === "blue") {
    blueButton.style.filter = "brightness(1)";
  }
}

//first
randomNumber = Math.floor(Math.random() * 4);
computerColors.push(colors[randomNumber]);
console.log("computer colors: " + computerColors);

//first stage
//bright(colors[randomNumber]);
colorSequence(computerColors);

//game functionality completed***************************

offButton.style.display = "inline-block";
onButton.style.display = "none";

function onOffClick() {
  console.log("hi");
  if (onButton.style.display === "none") {
    onButton.style.display = "inline-block";
    offButton.style.display = "none";
  } else {
    offButton.style.display = "inline-block";
    onButton.style.display = "none";
  }
}
