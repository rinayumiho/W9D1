const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js")

window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('game-canvas');
    canvas.width = 800;
    canvas.height = 600;

    const ctx = canvas.getContext('2d');
    window.ctx = ctx;
    debugger
    const asteroid = new Asteroid();
    debugger
});



