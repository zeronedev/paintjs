const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

canvas.width = 500;
canvas.height = 500;

ctx.strokeStyle = "#2C2C2C";
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;

  if (!painting) {
    //console.log("creating path in ", x, y);
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    //console.log("creating line in ", x, y);
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function handleColorClick(event) {
  //console.log(event.target.style.backgroundColor);
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
}

function handleRangeChange(event) {
  //console.log(event.target.value);
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handelModeChange() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}

//console.log(Array.from(colors));
Array.from(colors).forEach(color =>
  color.addEventListener("click", handleColorClick)
);

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (mode) {
  mode.addEventListener("click", handelModeChange);
}
