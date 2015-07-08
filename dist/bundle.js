(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

module.exports = function (n) {
  return n * 100;
};

},{}],2:[function(require,module,exports){
"use strict";

module.exports = function (n) {
  return n + 1;
};

},{}],3:[function(require,module,exports){
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

var foo = require('./foo.js');
var bar = require('./bar.js');
console.log(foo(3) + bar(4));

},{"./bar.js":1,"./foo.js":2,"./testmodule.js":4}],4:[function(require,module,exports){
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

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9jb2xlLnBldGVyc29uL0RvY3VtZW50cy9HaXRIdWIvZXM2cGxheWdyb3VuZC1icm93c2VyaWZ5L3NyYy9iYXIuanMiLCJDOi9Vc2Vycy9jb2xlLnBldGVyc29uL0RvY3VtZW50cy9HaXRIdWIvZXM2cGxheWdyb3VuZC1icm93c2VyaWZ5L3NyYy9mb28uanMiLCJDOi9Vc2Vycy9jb2xlLnBldGVyc29uL0RvY3VtZW50cy9HaXRIdWIvZXM2cGxheWdyb3VuZC1icm93c2VyaWZ5L3NyYy9pbmRleC5qcyIsIkM6L1VzZXJzL2NvbGUucGV0ZXJzb24vRG9jdW1lbnRzL0dpdEh1Yi9lczZwbGF5Z3JvdW5kLWJyb3dzZXJpZnkvc3JjL3Rlc3Rtb2R1bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLEVBQUU7QUFBRSxTQUFPLENBQUMsR0FBRyxHQUFHLENBQUE7Q0FBRSxDQUFDOzs7OztBQ0FqRCxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxFQUFFO0FBQUUsU0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0NBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7NEJDQ3RCLGlCQUFpQjs7Ozs7QUFNMUMsSUFBSSxNQUFNLEdBQUcsU0FBVCxNQUFNLENBQUcsQ0FBQztRQUFJLENBQUMsR0FBRyxDQUFDO0NBQUEsQ0FBQztBQUN4QixJQUFJLEdBQUcsR0FBRyxTQUFOLEdBQUcsQ0FBSSxDQUFDLEVBQUUsQ0FBQztRQUFLLENBQUMsR0FBRyxDQUFDO0NBQUEsQ0FBQztBQUMxQixJQUFJLEVBQUUsR0FBRyxTQUFMLEVBQUU7UUFBUyxNQUFNO0NBQUEsQ0FBQzs7QUFFdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Ozs7OztJQUtaLE9BQU87QUFDRCxVQUROLE9BQU8sQ0FDQSxNQUFNLEVBQUUsS0FBSyxFQUFFO3dCQUR0QixPQUFPOzs7QUFFWCxNQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztBQUN0QixNQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixNQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztFQUNuQjs7Y0FMSSxPQUFPOztTQU9MLG1CQUFHOztBQUNULFVBQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztHQUNqRTs7O1FBVEksT0FBTzs7O0lBWVAsTUFBTTtBQUNBLFVBRE4sTUFBTSxDQUNDLE1BQU0sRUFBRTt3QkFEZixNQUFNOztBQUVWLDZCQUZJLE1BQU0sNkNBRUosTUFBTSxFQUFFLE1BQU0sRUFBRTtBQUN0QixNQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztFQUNyQjs7V0FKSSxNQUFNOztjQUFOLE1BQU07O09BTUgsZUFBRzs7QUFDVixVQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztHQUNoQzs7O1FBUkksTUFBTTtHQUFTLE9BQU87O0FBVzVCLElBQUksQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RCLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDOzs7Ozs7QUFPcEIsSUFBSSxJQUFJLEdBQUcsa0JBakRILFVBQVUsRUFpRFMsQ0FBQztBQUM1QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQzs7QUFFNUIsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzlCLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ3hEaEIsVUFBVTtBQUNWLFdBREEsVUFBVSxHQUNQOzBCQURILFVBQVU7R0FFcEI7O2VBRlUsVUFBVTs7V0FJUCwwQkFBRztBQUNmLGFBQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztLQUN0Qzs7O1dBRU0sbUJBQUc7QUFDUixhQUFPLE1BQU0sQ0FBQztLQUNmOzs7U0FWVSxVQUFVOzs7UUFBVixVQUFVLEdBQVYsVUFBVSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuKSB7IHJldHVybiBuICogMTAwIH07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobikgeyByZXR1cm4gbiArIDEgfTsiLCIvL2Jyb3dzZXJpZnkgYWxsb3dzIHVzIHRvIHVzZSByZXF1aXJlIGluIGEgYnJvd3Nlci5cclxuaW1wb3J0IHt0ZXN0bW9kdWxlfSBmcm9tICcuL3Rlc3Rtb2R1bGUuanMnO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBBcnJvdyBGdW5jdGlvbnNcclxuICovXHJcbmxldCBzcXVhcmUgPSB4ID0+IHggKiB4O1xyXG5sZXQgYWRkID0gKGEsIGIpID0+IGEgKyBiO1xyXG5sZXQgcGkgPSAoKSA9PiAzLjE0MTU7XHJcblxyXG5jb25zb2xlLmxvZyhzcXVhcmUoNSkpO1xyXG5jb25zb2xlLmxvZyhhZGQoMywgNCkpO1xyXG5jb25zb2xlLmxvZyhwaSgpKTtcclxuXHJcbi8qKlxyXG4gKiBDbGFzc2VzIGFuZCBJbmhlcml0YW5jZVxyXG4gKi9cclxuY2xhc3MgUG9seWdvbiB7XHJcblx0Y29uc3RydWN0b3IoaGVpZ2h0LCB3aWR0aCkgeyAvL2NsYXNzIGNvbnN0cnVjdG9yXHJcblx0XHR0aGlzLm5hbWUgPSAnUG9seWdvbic7XHJcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuXHRcdHRoaXMud2lkdGggPSB3aWR0aDtcclxuXHR9XHJcblxyXG5cdHNheU5hbWUoKSB7IC8vY2xhc3MgbWV0aG9kXHJcblx0XHRjb25zb2xlLmxvZygnSGksIFJvYmVydCBDb2xlIFBldGVyc29uLCBJIGFtIGEnLCB0aGlzLm5hbWUgKyAnLicpO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgU3F1YXJlIGV4dGVuZHMgUG9seWdvbiB7XHJcblx0Y29uc3RydWN0b3IobGVuZ3RoKSB7XHJcblx0XHRzdXBlcihsZW5ndGgsIGxlbmd0aCk7IC8vY2FsbCB0aGUgcGFyZW50IG1ldGhvZCB3aXRoIHN1cGVyXHJcblx0XHR0aGlzLm5hbWUgPSAnU3F1YXJlJztcclxuXHR9XHJcblxyXG5cdGdldCBhcmVhKCkgeyAvL2NhbGN1bGF0ZWQgYXR0cmlidXRlIGdldHRlclxyXG5cdFx0cmV0dXJuIHRoaXMuaGVpZ2h0ICogdGhpcy53aWR0aDtcclxuXHR9XHJcbn1cclxuXHJcbmxldCBzID0gbmV3IFNxdWFyZSg1KTtcclxucy5zYXlOYW1lKCk7XHJcbmNvbnNvbGUubG9nKHMuYXJlYSk7XHJcblxyXG5cclxuLyoqXHJcbiAqIE1vZHVsZXNcclxuICovXHJcblxyXG5sZXQgdGVzdCA9IG5ldyB0ZXN0bW9kdWxlKCk7XHJcbnRlc3Quc2hvd0NvbnNvbGVMb2coKTtcclxuY29uc29sZS5sb2codGVzdC5nZXROYW1lKCkpO1xyXG5cclxudmFyIGZvbyA9IHJlcXVpcmUoJy4vZm9vLmpzJyk7XHJcbnZhciBiYXIgPSByZXF1aXJlKCcuL2Jhci5qcycpO1xyXG5jb25zb2xlLmxvZyhmb28oMykgKyBiYXIoNCkpOyIsImV4cG9ydCBjbGFzcyB0ZXN0bW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIHNob3dDb25zb2xlTG9nKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJFUzYgTW9kdWxlIHRlc3QhIFlBWSFcIik7XHJcbiAgfVxyXG5cclxuICBnZXROYW1lKCkge1xyXG4gICAgcmV0dXJuICdjb2xlJztcclxuICB9XHJcbn0iXX0=
