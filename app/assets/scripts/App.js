var $ = require('jquery');
/*var Person = require('./modules/Person.js');*/
import Person from './modules/Person';

class Adult extends Person {
	payTaxes() {
		console.log(this.name + "is now adult");
	}
}

alert("browser sync works");  

var john = new Person("john doe", "blue");
john.greet();

var jane = new Adult("jane doe", "orange");
jane.greet();
jane.payTaxes();

export default Person;

