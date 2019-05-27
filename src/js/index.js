// jshint esversion: 6 

//Grabs the canvas elemnt in the html document 
const canvas = document.querySelector('#draw');

// Will add context (whihc renders what the user draws)
const ctx = canvas.getContext('2d');

// Resizing the canvas to fit the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;