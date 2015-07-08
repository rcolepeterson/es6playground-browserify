(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

/**
 * Arrow Functions
 */
'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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
			console.log('Hi there, Robert Cole Peterson, I am a', this.name + '.');
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9jb2xlLnBldGVyc29uL0RvY3VtZW50cy9HaXRIdWIvZXM2cGxheWdyb3VuZC9lczZwbGF5Z3JvdW5kL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDSUEsSUFBSSxNQUFNLEdBQUcsU0FBVCxNQUFNLENBQUcsQ0FBQztRQUFJLENBQUMsR0FBRyxDQUFDO0NBQUEsQ0FBQztBQUN4QixJQUFJLEdBQUcsR0FBRyxTQUFOLEdBQUcsQ0FBSSxDQUFDLEVBQUUsQ0FBQztRQUFLLENBQUMsR0FBRyxDQUFDO0NBQUEsQ0FBQztBQUMxQixJQUFJLEVBQUUsR0FBRyxTQUFMLEVBQUU7UUFBUyxNQUFNO0NBQUEsQ0FBQzs7QUFFdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Ozs7OztJQUtaLE9BQU87QUFDRCxVQUROLE9BQU8sQ0FDQSxNQUFNLEVBQUUsS0FBSyxFQUFFO3dCQUR0QixPQUFPOzs7QUFFWCxNQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztBQUN0QixNQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixNQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztFQUNuQjs7Y0FMSSxPQUFPOztTQU9MLG1CQUFHOztBQUNULFVBQU8sQ0FBQyxHQUFHLENBQUMsd0NBQXdDLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztHQUN2RTs7O1FBVEksT0FBTzs7O0lBWVAsTUFBTTtBQUNBLFVBRE4sTUFBTSxDQUNDLE1BQU0sRUFBRTt3QkFEZixNQUFNOztBQUVWLDZCQUZJLE1BQU0sNkNBRUosTUFBTSxFQUFFLE1BQU0sRUFBRTtBQUN0QixNQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztFQUNyQjs7V0FKSSxNQUFNOztjQUFOLE1BQU07O09BTUgsZUFBRzs7QUFDVixVQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztHQUNoQzs7O1FBUkksTUFBTTtHQUFTLE9BQU87O0FBVzVCLElBQUksQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUV0QixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcclxuLyoqXHJcbiAqIEFycm93IEZ1bmN0aW9uc1xyXG4gKi9cclxubGV0IHNxdWFyZSA9IHggPT4geCAqIHg7XHJcbmxldCBhZGQgPSAoYSwgYikgPT4gYSArIGI7XHJcbmxldCBwaSA9ICgpID0+IDMuMTQxNTtcclxuXHJcbmNvbnNvbGUubG9nKHNxdWFyZSg1KSk7XHJcbmNvbnNvbGUubG9nKGFkZCgzLCA0KSk7XHJcbmNvbnNvbGUubG9nKHBpKCkpO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzZXMgYW5kIEluaGVyaXRhbmNlXHJcbiAqL1xyXG5jbGFzcyBQb2x5Z29uIHtcclxuXHRjb25zdHJ1Y3RvcihoZWlnaHQsIHdpZHRoKSB7IC8vY2xhc3MgY29uc3RydWN0b3JcclxuXHRcdHRoaXMubmFtZSA9ICdQb2x5Z29uJztcclxuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xyXG5cdH1cclxuXHJcblx0c2F5TmFtZSgpIHsgLy9jbGFzcyBtZXRob2RcclxuXHRcdGNvbnNvbGUubG9nKCdIaSB0aGVyZSwgUm9iZXJ0IENvbGUgUGV0ZXJzb24sIEkgYW0gYScsIHRoaXMubmFtZSArICcuJyk7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBTcXVhcmUgZXh0ZW5kcyBQb2x5Z29uIHtcclxuXHRjb25zdHJ1Y3RvcihsZW5ndGgpIHtcclxuXHRcdHN1cGVyKGxlbmd0aCwgbGVuZ3RoKTsgLy9jYWxsIHRoZSBwYXJlbnQgbWV0aG9kIHdpdGggc3VwZXJcclxuXHRcdHRoaXMubmFtZSA9ICdTcXVhcmUnO1xyXG5cdH1cclxuXHJcblx0Z2V0IGFyZWEoKSB7IC8vY2FsY3VsYXRlZCBhdHRyaWJ1dGUgZ2V0dGVyXHJcblx0XHRyZXR1cm4gdGhpcy5oZWlnaHQgKiB0aGlzLndpZHRoO1xyXG5cdH1cclxufVxyXG5cclxubGV0IHMgPSBuZXcgU3F1YXJlKDUpO1xyXG5cclxucy5zYXlOYW1lKCk7XHJcbmNvbnNvbGUubG9nKHMuYXJlYSk7Il19
