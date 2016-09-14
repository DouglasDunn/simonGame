const on = document.getElementById("on");
const off = document.getElementById("off");
const strict = document.getElementById("strictLight");

//why do i have to set these in my javascript
on.style.display = "inline-block";
strict.style.background = "black";

function toggleOn() {
  if (on.style.display === "inline-block") {
    off.style.display = "inline-block";
    on.style.display = "none";
  } else {
    on.style.display = "inline-block";
    off.style.display = "none";
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
