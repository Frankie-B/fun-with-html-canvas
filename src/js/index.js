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
}

// Will only draw when the mose is being clicked by the user (mousedown)
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => (isDrawing = true));
canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mouseout', () => (isDrawing = false));
