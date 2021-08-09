const MovingObject = require("./moving_object");
const Util = require("./utils");


const DEFAULT = {
    color: "#808080",
    radius: 25
}

function Asteroid(options){
    
    options = options || {};
    options.color = DEFAULT.color;
    options.radius = DEFAULT.radius;
    options.vel = Util.randomVec(5);
    // debugger
    MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;