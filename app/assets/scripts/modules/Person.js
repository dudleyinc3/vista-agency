class Person {
	constructor(fullName, favColor) {
		this.name = fullName;
		this.favoriteColor = favColor;
	}


	greet () {
		console.log("Muchos greetings, my name is " + this.name + " color is " + this.favoriteColor + ".");
	}
}

module.exports = Person;