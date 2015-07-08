//browserify allows us to use require in a browser.
import {testmodule} from './testmodule.js';


/**
 * Arrow Functions
 */
let square = x => x * x;
let add = (a, b) => a + b;
let pi = () => 3.1415;

console.log(square(5));
console.log(add(3, 4));
console.log(pi());

/**
 * Classes and Inheritance
 */
class Polygon {
	constructor(height, width) { //class constructor
		this.name = 'Polygon';
		this.height = height;
		this.width = width;
	}

	sayName() { //class method
		console.log('Hi, Robert Cole Peterson, I am a', this.name + '.');
	}
}

class Square extends Polygon {
	constructor(length) {
		super(length, length); //call the parent method with super
		this.name = 'Square';
	}

	get area() { //calculated attribute getter
		return this.height * this.width;
	}
}

let s = new Square(5);
s.sayName();
console.log(s.area);


/**
 * Modules
 */

let test = new testmodule();
test.showConsoleLog();
console.log(test.getName());

var foo = require('./foo.js');
var bar = require('./bar.js');
console.log(foo(3) + bar(4));