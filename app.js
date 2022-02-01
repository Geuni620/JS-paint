const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = document.getElementsByClassName("canvas")[0].offsetWidth;
canvas.height = document.getElementsByClassName("canvas")[0].offsetHeight;

//색상이나 스타일을 설정
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;
function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

//캔버스위에 마우스 인지
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

function onMouseDown(event) {
  painting = true;
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}
