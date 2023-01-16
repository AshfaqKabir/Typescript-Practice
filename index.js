"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// BASIC TYPES
const id = 5;
const name = 'ASHFAQ';
const isEmployee = true;
let x = "any Type";
// Arrays
const ids = [1, 2, 3, 4, 5];
const names = ["Ashfaq", "KABIR", "brad"];
const arr = [1, 2, 3, "mike"];
// Tuple
const person = [1, "name", false];
// Tupple Array
const employee = [
    [1, "name", true],
    [2, "name", true],
    [3, "name", true]
];
// Union
const pid = 4;
// ENUM
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var DirectionWithValue;
(function (DirectionWithValue) {
    DirectionWithValue[DirectionWithValue["Up"] = 1] = "Up";
    DirectionWithValue[DirectionWithValue["Down"] = 2] = "Down";
    DirectionWithValue[DirectionWithValue["Left"] = 3] = "Left";
    DirectionWithValue[DirectionWithValue["Right"] = 4] = "Right";
})(DirectionWithValue || (DirectionWithValue = {}));
var DirectionWithValue2;
(function (DirectionWithValue2) {
    DirectionWithValue2["Up"] = "Up";
    DirectionWithValue2["Down"] = "Down";
    DirectionWithValue2["Left"] = "Left";
    DirectionWithValue2["Right"] = "Right";
})(DirectionWithValue2 || (DirectionWithValue2 = {}));
// Objects
const user = { id: 1, name: "ASHFAQ" };
const user2 = { id: 2, name: "KABIR" };
// Type Assertion
const cid = 1;
const customerId = cid;
const customerId1 = cid;
// Types in Functions
function sum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "ASHFAQ"
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = 2;
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const ashfaq = new Person(1, "Ashfaq Kabir");
const mike = new Person(2, "Mike Hussey");
// Extending a CLASS (SubClasses)
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Ashfaq", "Developer");
// Generics
function getArr(items) {
    return new Array().concat(items);
}
let numArr = getArr([1, 2, 3, 4]);
let stringArr = getArr(["ASHFAQ", "KABIR"]);
