var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Explicit
var firstName = "Jan";
// Implicit
var firstName2 = "Jan";
console.log(firstName);
console.log(firstName2);
// let test1: number = "Test";
// let test2: string = 4;
var dwieLiczby = 4 + 4;
//let liczbaString: number = 4 + "4";
console.log(dwieLiczby);
// console.log(liczbaString);
var names = [];
names.push("Jan");
// names.push(3);
var numbers = [1, 2, 3];
var numbers2 = [1, 2, 3];
var errorTuple;
errorTuple = [404, "Nie ma takiej strony", true];
var car = {
    type: "Fiat",
    price: 50000
};
car.maxSpeed = 220;
// car.price = "2";
// car.minspeed = 10;
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    //BadRequest
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.NotFound);
console.log(StatusCodes.Success);
function multiply(a, b, c) {
    return a * b * (c || 0);
}
function add(a, b) {
    var others = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        others[_i - 2] = arguments[_i];
    }
    return a + b + others.reduce(function (p, c) { return p + c; }, 0);
}
function showStatusCode(code) {
    console.log("Status kodu: " + code);
}
showStatusCode(404);
showStatusCode("404");
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person = new Person("Jan");
console.log(person.getName());
var Polygon = /** @class */ (function () {
    function Polygon() {
    }
    Polygon.prototype.toString = function () {
        return 'Polygon  [area=${this.getArea()}]';
    };
    return Polygon;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Polygon));
