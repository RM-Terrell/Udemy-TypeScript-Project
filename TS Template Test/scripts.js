//function Greeter(greeting: string) {
//    this.greeting = greeting;
//}
//Greeter.prototype.greet = function () {
//    return "Hello, " + this.greeting;
//}
//let greeter = new Greeter("world");
//let button = document.createElement('button');
//button.textContent = "Say Hello";
//button.onclick = function () {
//    alert(greeter.greet());
//};
//document.body.appendChild(button);
//-------------------------------------------------------------------------------------------------------------------------------------------//
// String
var myName = 'Max';
//If i try to assign "myName" to a number an error will now be thrown.
//Can also assign to numbers, EITHER float or integrer. TS doesnt care if the number has decimals, its all 'number'.
//-------------------------------------------------------------------------------------------------------------------------------------------//
// Boolean
var hasHobbies = true;
//If i try to assign = 1, will thrown and error.
//-------------------------------------------------------------------------------------------------------------------------------------------//
// Assign types
var myRealAge;
myRealAge = 27;
myRealAge = '27';
//Assigns to type 'any' and thus i dont get errors. "Back to javascript world."
//Let myRealAge: number; to explicitly assigns the type
//-------------------------------------------------------------------------------------------------------------------------------------------//
// Array
var hobbies = ["Cooking", "Sports"];
console.log(hobbies[0]); //Logs to console the 0th item
//console.log(typeof hobbies); Logs the type
//hobbies = [100]; will result in an error because hobbies is an array of strings
//let hobbies : any[] = ["Cooking", "Sports"]; will remove the error by assigning type any
//-------------------------------------------------------------------------------------------------------------------------------------------//
// Tuples
var address = ["Superstreet", 99];
//Changeing order of "superstreet" and 99 will rresult in an error. Ordering matters.
//-------------------------------------------------------------------------------------------------------------------------------------------//
// Enums
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Red"] = 50] = "Red";
    Color[Color["Orange"] = 51] = "Orange"; //Number for this will be 51
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
//Result of this is 1. Not Green. Numbers are assigned automatically as shown in comments.
//-------------------------------------------------------------------------------------------------------------------------------------------//
// Functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
//-------------------------------------------------------------------------------------------------------------------------------------------//
// Void
function sayHello() {
    console.log("Hello!");
    //return myName; will result in an error if ran. Void should not return anything.
}
//-------------------------------------------------------------------------------------------------------------------------------------------//
// Argument
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 'Max')); //This will return NaN because a number was expected.
//To avoid this issue assign types to arguements to enable error checking. value1:number, value2:number and an error will occur for 'Max'
//-------------------------------------------------------------------------------------------------------------------------------------------//
// Function Types
var myMultiply;
// myMultiply = sayHello; this will now cause an error because weve specificed what kind of function
//myMultiply();
myMultiply = multiply;
//myMultiply();
//-------------------------------------------------------------------------------------------------------------------------------------------//
// Objects
var userData = {
    name: "Max",
    age: 27
};
//This code will result in an eror because of this behind the scenes assigning
// userData = {a:"Hello", b:22);
//-------------------------------------------------------------------------------------------------------------------------------------------//
// Example of a Complex Object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
//-------------------------------------------------------------------------------------------------------------------------------------------//
// Union Types
var myRealRealAge = 27; // "|" is an "or"
myRealRealAge = "27";
//This causes an error if we try to assign myRealRealAge to "true". If we used any no error would result. Allows more specific, but no too general type assignment.
// Check Types
var finalValue = 30;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
//-------------------------------------------------------------------------------------------------------------------------------------------//
// TS 2.0
// Never
function neverReturn() {
    throw new Error('An error!');
}
//-------------------------------------------------------------------------------------------------------------------------------------------//
//Nullable Types
var canBeNull = 12;
canBeNull = null; //By setting strictnullchecks to true this will result in an error. cant assign null now. Added the union type above to fix this.
var canAlsoBeNull; //Defaults to type 'any', value 'undefined'
canAlsoBeNull = null; //Assigned strictly to null with nullchecks on. cant be a number now.
//------------------------------Section 4---------------------------------------------------------------------------------------------------//
// Let and Const
//Let creates a block scope varibale, while just using var creates global scope
var variable = "Test";
console.log(variable);
variable = "Another Value";
console.log(variable); //Totally fine to reassign as long as same type
var maxLevels = 100;
console.log(maxLevels);
//maxLevels = 99 will result in an error. Use const whenever you NEVER want a value to change.
// Block Scope
function reset() {
    //console.log(variable); will return undefined here because it doesnt have access to above code
    var variable = null; //This will not override the above code. Its scope is contained to its block by the "let" statement
    console.log(variable);
}
reset(); //returns null
console.log(variable); //returns "another value"
// Arrow functions
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(10, 3));
// Default Paramters
var countdown = function (start) {
    while (start > 0) {
        start--;
    }
    console.log("Done", start);
};
countdown(10); //Works as expected.
//countdown(): undefined. However setting "start: number = 10 will make it a default value and work as expected
// Rest and Spread
var numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3, 22));
console.log(Math.max.apply(Math, numbers)); //... Spread. Acts to essentially remove the square brackets and grab the list of numbers since we cant call numbers directly in Math.macx()
//Avoid complex loops and such to assess arrays
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2, 6));
//# sourceMappingURL=scripts.js.map