const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

const INITIAL_CLOLR = "#2c2c2c";

const CANVAS_WIDTH = document.getElementsByClassName("canvas")[0].offsetWidth;
const CANVAS_HEIGTH = document.getElementsByClassName("canvas")[0].offsetHeight;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGTH;

//색상이나 스타일을 설정
ctx.strokeStyle = INITIAL_CLOLR;
ctx.fillStyle = INITIAL_CLOLR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

//캔버스 위 마우스 인지
function onMouseMove(event) {
  const X = event.offsetX;
  const Y = event.offsetY;

  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(X, Y);
  } else {
    ctx.lineTo(X, Y);
    ctx.stroke();
  }
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGTH);
  }
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
}

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);

function handleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handleModeClick(event) {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}
