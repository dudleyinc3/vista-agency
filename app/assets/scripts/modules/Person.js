function Person(fullName, favColor) {
	this.name = fullName;
	this.favoriteColor = favColor;
	this.greet = function() {
		console.log("my name is " + this.name + " color is " + this.favoriteColor + ".");
	}
}

module.exports = Person;