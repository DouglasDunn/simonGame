const on = document.getElementById("on");
const off = document.getElementById("off");
const strict = document.getElementById("strictLight");
let isOn = false;
let isOff = true;
let count = 0;
let num;
//const green = document.getElementById("green");

const colors = ["red", "blue", "green", "yellow"];
const userColors = [];
const computerColors = [];

//why do i have to set these in my javascript
off.style.display = "inline-block";
strict.style.background = "black";

function toggleOn() {
  if (on.style.display === "inline-block") {
    off.style.display = "inline-block";
    on.style.display = "none";
    isOff = true;
    isOn = false;
  } else {
    on.style.display = "inline-block";
    off.style.display = "none";
    isOff = false;
    isOn = true;
  }
}

function toggleStrict() {
  if (strict.style.background === "black")
  {
    strict.style.background = "red";
  } else {
    strict.style.background = "black";
  }
}

// ai code
// function show(color) {
//   color.style.filter = "brightness(3)";
//   window.setTimeout(function(){
//     color.style.filter = "brightness(1)";
//   }, 2000);
// }

function mouseDown(color) {
  color.style.filter = "brightness(3)";
}

function mouseUp(color) {
  color.style.filter = "brightness(1)";
}

function greenButton() {
  userColors.push("green");
  console.log(userColors);
  console.log(computerColors);
  if (userColors[count] === computerColors[count]) {
    count++;
    console.log(count);
    num = Math.floor(Math.random() * 4);
    computerColors.push(colors[num]);
    console.log(computerColors);
  }
  else {
    console.log("lose");
  }
}

function redButton() {
  userColors.push("red");
  console.log(userColors);
  console.log(computerColors);
  if (userColors[count] === computerColors[count]) {
    count++;
    console.log(count);
    num = Math.floor(Math.random() * 4);
    computerColors.push(colors[num]);
    console.log(computerColors);
  }
  else {
    console.log("lose");
  }
}

function yellowButton() {
  userColors.push("yellow");
  console.log(userColors);
  console.log(computerColors);
  if (userColors[count] === computerColors[count]) {
    count++;
    console.log(count);
    num = Math.floor(Math.random() * 4);
    computerColors.push(colors[num]);
    console.log(computerColors);
  }
  else {
    console.log("lose");
  }
}

function blueButton() {
  userColors.push("blue");
  console.log(userColors);
  console.log(computerColors);
  if (userColors[count] === computerColors[count]) {
    count++;
    console.log(count);
    num = Math.floor(Math.random() * 4);
    computerColors.push(colors[num]);
    console.log(computerColors);
  }
  else {
    console.log("lose");
  }
}

function onStart() {
  if (isOn) {
    console.log("on");
    //gameStart();
    num = Math.floor(Math.random() * 4);
    computerColors.push(colors[num]);
    console.log(computerColors);
  }
}

// function gameStart() {
//   console.log("game");
//   for (var i = 0; i < count; i++) {
//     num = Math.floor(Math.random() * 4);
//     console.log(colors[num]);
//     if (colors[num] === userColors[i])
//     {
//       console.log(good);
//     }
//   }
// }
