var $ = require('jquery');
var Person = require('./modules/Person.js');

alert("browser sync works");  

var john = new Person("john doe", "blue");
john.greet();

var jane = new Person("jane doe", "red");
jane.greet();

