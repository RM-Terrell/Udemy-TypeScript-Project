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
// String
var myName = 'Max';
//If i try to assign "myName" to a number an error will now be thrown.
//Can also assign to numbers, EITHER float or integrer. TS doesnt care if the number has decimals, its all 'number'.
// Boolean
var hasHobbies = true;
//If i try to assign = 1, will thrown and error.
// Assign types
var myRealAge;
myRealAge = 27;
myRealAge = '27';
//Assigns to type 'any' and thus i dont get errors. "Back to javascript world."
//Let myRealAge: number; to explicitly assigns the type
// Array
var hobbies = ["Cooking", "Sports"];
console.log(hobbies[0]); //Logs to console the 0th item
//console.log(typeof hobbies); Logs the type
//hobbies = [100]; will result in an error because hobbies is an array of strings
//let hobbies : any[] = ["Cooking", "Sports"]; will remove the error by assigning type any
// Tuples
var address = ["Superstreet", 99];
//Changeing order of "superstreet" and 99 will rresult in an error. Ordering matters.
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
//# sourceMappingURL=scripts.js.map