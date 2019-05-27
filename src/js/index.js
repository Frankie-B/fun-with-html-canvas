// jshint esversion: 6

//Grabs the canvas elemnt in the html document
const canvas = document.querySelector('#draw');

// Will add context (whihc renders what the user draws)
const ctx = canvas.getContext('2d');

// Resizing the canvas to fit the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Base settings for drawing (strokeStyle , lineJoin and lineCap

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  if (!isDrawing) return; // will stop logging mouse movement if they are not drawing
  console.log(e);
  // Will create the lines the user draws
  ctx.beginPath();
  // Start from
  ctx.moveTo(lastX, lastY);
  // Go to
  ctx.lineTo(e.offsetX, e.offsetY); // These values are gotten from the mouse event
  ctx.stroke();

  // Destructuring an array ES 6  method
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

// Will only draw when the mouse is being clicked by the user (mousedown)
// Will start path from where the user clicksthe mouse
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mouseout', () => (isDrawing = false));
