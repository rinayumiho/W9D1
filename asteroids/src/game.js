function Game() {
    const DIM_X = 5;
    const DIM_Y = 5;
    const NUM_ASTEROIDS = 5;
    this.asteroids = [];
}

Game.prototype.addAsteroids = function() {
    // add asteroid by calling randomPosition, checking to see if NUM_ASTEROIDS has been reached.
    for (let i = 0; i < NUM_ASTEROIDS; i++) {
        this.asteroids.push(this.randomPosition());
    }
}

Game.prototype.randomPosition = function() {
    // two random number generators for x, y positions.
    return [Math.random() * DIM_X, Math.random() * DIM_Y];
}

Game.prototype.draw = function(ctx) {
    ctx.clearRect();

    this.asteroids.forEach (function(asteroid) {
        asteroid.draw(ctx);
    })

}

Game.prototype.moveObjects = function() {
    this.asteroids.forEach (function(asteroid) {
        asteroid.move();
    })
}