var player = {
  color: "#00A",
  x: 220,
  y: 270,
  width: 32,
  height: 32,
  draw: function() {
    canvas.fillStyle = this.color;
    canvas.fillRect(this.x, this.y, this.width, this.height);
  }
};

// Model of an object that can exist in a grid space
function Object(name, movable, collisionAction, direction, offset) {
	this.name = name;
	this.movable = movable;
	this.collisionAction = collisionAction;
	this.direction = direction;
	this.offset = offset;
}

function ObjectFactory(name) {
	switch(name) {
		case "1up":
			return Object(name, false, collect);
		case "air":
			return Object(name, true, nothing);
		case "block":
			return Object(name, true, bump);
		case "immobile_block":
			return Object(name, false, bump);
		case "player":
			return Object(name, false, nothing);
	}
}

// Collision actions
	// Bumps the player back into his original location
	function bump() {}

	// Kills the player
	function kill() {}
	
	// Does nothing
	function nothing() {}
	
	// Player collects the object
	function collect(){}

// Model of the world, represented by a 3D matrix of grid spaces

// Parameters which determine the state of the game
var stage_bottom;
var lives;