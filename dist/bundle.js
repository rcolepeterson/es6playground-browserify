(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//browserify allows us to use require in a browser.
'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _testmoduleJs = require('./testmodule.js');

/**
 * Arrow Functions
 */
var square = function square(x) {
	return x * x;
};
var add = function add(a, b) {
	return a + b;
};
var pi = function pi() {
	return 3.1415;
};

console.log(square(5));
console.log(add(3, 4));
console.log(pi());

/**
 * Classes and Inheritance
 */

var Polygon = (function () {
	function Polygon(height, width) {
		_classCallCheck(this, Polygon);

		//class constructor
		this.name = 'Polygon';
		this.height = height;
		this.width = width;
	}

	_createClass(Polygon, [{
		key: 'sayName',
		value: function sayName() {
			//class method
			console.log('Hi, Robert Cole Peterson, I am a', this.name + '.');
		}
	}]);

	return Polygon;
})();

var Square = (function (_Polygon) {
	function Square(length) {
		_classCallCheck(this, Square);

		_get(Object.getPrototypeOf(Square.prototype), 'constructor', this).call(this, length, length); //call the parent method with super
		this.name = 'Square';
	}

	_inherits(Square, _Polygon);

	_createClass(Square, [{
		key: 'area',
		get: function get() {
			//calculated attribute getter
			return this.height * this.width;
		}
	}]);

	return Square;
})(Polygon);

var s = new Square(5);
s.sayName();
console.log(s.area);

/**
 * Modules
 */

var test = new _testmoduleJs.testmodule();
test.showConsoleLog();
console.log(test.getName());

},{"./testmodule.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var testmodule = (function () {
  function testmodule() {
    _classCallCheck(this, testmodule);
  }

  _createClass(testmodule, [{
    key: "showConsoleLog",
    value: function showConsoleLog() {
      console.log("ES6 Module test! YAY!");
    }
  }, {
    key: "getName",
    value: function getName() {
      return "cole";
    }
  }]);

  return testmodule;
})();

exports.testmodule = testmodule;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9jb2xlLnBldGVyc29uL0RvY3VtZW50cy9HaXRIdWIvZXM2cGxheWdyb3VuZC1icm93c2VyaWZ5L3NyYy9pbmRleC5qcyIsIkM6L1VzZXJzL2NvbGUucGV0ZXJzb24vRG9jdW1lbnRzL0dpdEh1Yi9lczZwbGF5Z3JvdW5kLWJyb3dzZXJpZnkvc3JjL3Rlc3Rtb2R1bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs0QkNDeUIsaUJBQWlCOzs7OztBQU0xQyxJQUFJLE1BQU0sR0FBRyxTQUFULE1BQU0sQ0FBRyxDQUFDO1FBQUksQ0FBQyxHQUFHLENBQUM7Q0FBQSxDQUFDO0FBQ3hCLElBQUksR0FBRyxHQUFHLFNBQU4sR0FBRyxDQUFJLENBQUMsRUFBRSxDQUFDO1FBQUssQ0FBQyxHQUFHLENBQUM7Q0FBQSxDQUFDO0FBQzFCLElBQUksRUFBRSxHQUFHLFNBQUwsRUFBRTtRQUFTLE1BQU07Q0FBQSxDQUFDOztBQUV0QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzs7Ozs7O0lBS1osT0FBTztBQUNELFVBRE4sT0FBTyxDQUNBLE1BQU0sRUFBRSxLQUFLLEVBQUU7d0JBRHRCLE9BQU87OztBQUVYLE1BQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO0FBQ3RCLE1BQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLE1BQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0VBQ25COztjQUxJLE9BQU87O1NBT0wsbUJBQUc7O0FBQ1QsVUFBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0dBQ2pFOzs7UUFUSSxPQUFPOzs7SUFZUCxNQUFNO0FBQ0EsVUFETixNQUFNLENBQ0MsTUFBTSxFQUFFO3dCQURmLE1BQU07O0FBRVYsNkJBRkksTUFBTSw2Q0FFSixNQUFNLEVBQUUsTUFBTSxFQUFFO0FBQ3RCLE1BQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO0VBQ3JCOztXQUpJLE1BQU07O2NBQU4sTUFBTTs7T0FNSCxlQUFHOztBQUNWLFVBQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0dBQ2hDOzs7UUFSSSxNQUFNO0dBQVMsT0FBTzs7QUFXNUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEIsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7OztBQU9wQixJQUFJLElBQUksR0FBRyxrQkFqREgsVUFBVSxFQWlEUyxDQUFDO0FBQzVCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0lDcERmLFVBQVU7QUFDVixXQURBLFVBQVUsR0FDUDswQkFESCxVQUFVO0dBRXBCOztlQUZVLFVBQVU7O1dBSVAsMEJBQUc7QUFDZixhQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7S0FDdEM7OztXQUVNLG1CQUFHO0FBQ1IsYUFBTyxNQUFNLENBQUM7S0FDZjs7O1NBVlUsVUFBVTs7O1FBQVYsVUFBVSxHQUFWLFVBQVUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy9icm93c2VyaWZ5IGFsbG93cyB1cyB0byB1c2UgcmVxdWlyZSBpbiBhIGJyb3dzZXIuXHJcbmltcG9ydCB7dGVzdG1vZHVsZX0gZnJvbSAnLi90ZXN0bW9kdWxlLmpzJztcclxuXHJcblxyXG4vKipcclxuICogQXJyb3cgRnVuY3Rpb25zXHJcbiAqL1xyXG5sZXQgc3F1YXJlID0geCA9PiB4ICogeDtcclxubGV0IGFkZCA9IChhLCBiKSA9PiBhICsgYjtcclxubGV0IHBpID0gKCkgPT4gMy4xNDE1O1xyXG5cclxuY29uc29sZS5sb2coc3F1YXJlKDUpKTtcclxuY29uc29sZS5sb2coYWRkKDMsIDQpKTtcclxuY29uc29sZS5sb2cocGkoKSk7XHJcblxyXG4vKipcclxuICogQ2xhc3NlcyBhbmQgSW5oZXJpdGFuY2VcclxuICovXHJcbmNsYXNzIFBvbHlnb24ge1xyXG5cdGNvbnN0cnVjdG9yKGhlaWdodCwgd2lkdGgpIHsgLy9jbGFzcyBjb25zdHJ1Y3RvclxyXG5cdFx0dGhpcy5uYW1lID0gJ1BvbHlnb24nO1xyXG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblx0XHR0aGlzLndpZHRoID0gd2lkdGg7XHJcblx0fVxyXG5cclxuXHRzYXlOYW1lKCkgeyAvL2NsYXNzIG1ldGhvZFxyXG5cdFx0Y29uc29sZS5sb2coJ0hpLCBSb2JlcnQgQ29sZSBQZXRlcnNvbiwgSSBhbSBhJywgdGhpcy5uYW1lICsgJy4nKTtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIFNxdWFyZSBleHRlbmRzIFBvbHlnb24ge1xyXG5cdGNvbnN0cnVjdG9yKGxlbmd0aCkge1xyXG5cdFx0c3VwZXIobGVuZ3RoLCBsZW5ndGgpOyAvL2NhbGwgdGhlIHBhcmVudCBtZXRob2Qgd2l0aCBzdXBlclxyXG5cdFx0dGhpcy5uYW1lID0gJ1NxdWFyZSc7XHJcblx0fVxyXG5cclxuXHRnZXQgYXJlYSgpIHsgLy9jYWxjdWxhdGVkIGF0dHJpYnV0ZSBnZXR0ZXJcclxuXHRcdHJldHVybiB0aGlzLmhlaWdodCAqIHRoaXMud2lkdGg7XHJcblx0fVxyXG59XHJcblxyXG5sZXQgcyA9IG5ldyBTcXVhcmUoNSk7XHJcbnMuc2F5TmFtZSgpO1xyXG5jb25zb2xlLmxvZyhzLmFyZWEpO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBNb2R1bGVzXHJcbiAqL1xyXG5cclxubGV0IHRlc3QgPSBuZXcgdGVzdG1vZHVsZSgpO1xyXG50ZXN0LnNob3dDb25zb2xlTG9nKCk7XHJcbmNvbnNvbGUubG9nKHRlc3QuZ2V0TmFtZSgpKTsiLCJleHBvcnQgY2xhc3MgdGVzdG1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBzaG93Q29uc29sZUxvZygpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiRVM2IE1vZHVsZSB0ZXN0ISBZQVkhXCIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmFtZSgpIHtcclxuICAgIHJldHVybiAnY29sZSc7XHJcbiAgfVxyXG59Il19
