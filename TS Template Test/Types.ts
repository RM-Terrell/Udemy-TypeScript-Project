//SECTIONS 1-4

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
let myName = 'Max';

//If i try to assign "myName" to a number an error will now be thrown.
//Can also assign to numbers, EITHER float or integrer. TS doesnt care if the number has decimals, its all 'number'.
//-------------------------------------------------------------------------------------------------------------------------------------------//

// Boolean
let hasHobbies = true;

//If i try to assign = 1, will thrown and error.
//-------------------------------------------------------------------------------------------------------------------------------------------//


// Assign types
let myRealAge; 
myRealAge = 27;
myRealAge = '27';

//Assigns to type 'any' and thus i dont get errors. "Back to javascript world."
//Let myRealAge: number; to explicitly assigns the type
//-------------------------------------------------------------------------------------------------------------------------------------------//


// Array
let hobbies = ["Cooking", "Sports"];
console.log(hobbies[0]);  //Logs to console the 0th item

//console.log(typeof hobbies); Logs the type
//hobbies = [100]; will result in an error because hobbies is an array of strings
//let hobbies : any[] = ["Cooking", "Sports"]; will remove the error by assigning type any
//-------------------------------------------------------------------------------------------------------------------------------------------//



// Tuples
let address: [string, number] = ["Superstreet", 99];

//Changeing order of "superstreet" and 99 will rresult in an error. Ordering matters.
//-------------------------------------------------------------------------------------------------------------------------------------------//



// Enums
enum Color {
    Gray, //0
    Green, //1
    Blue, //2
    Red = 50, //Example of manual assigning.
    Orange //Number for this will be 51
}
let myColor: Color = Color.Green;
console.log(myColor);

//Result of this is 1. Not Green. Numbers are assigned automatically as shown in comments.
//-------------------------------------------------------------------------------------------------------------------------------------------//



// Functions
function returnMyName(): string { // The explicit type refers to the return value
    return myName;
}
console.log(returnMyName());
//-------------------------------------------------------------------------------------------------------------------------------------------//


// Void
function sayHello(): void {
    console.log("Hello!");
    //return myName; will result in an error if ran. Void should not return anything.
}
//-------------------------------------------------------------------------------------------------------------------------------------------//


// Argument
function multiply(value1, value2): number {
    return value1 * value2;
}
console.log(multiply(2, 'Max')); //This will return NaN because a number was expected.

//To avoid this issue assign types to arguements to enable error checking. value1:number, value2:number and an error will occur for 'Max'
//-------------------------------------------------------------------------------------------------------------------------------------------//



// Function Types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello; this will now cause an error because weve specificed what kind of function
//myMultiply();
myMultiply = multiply;
//myMultiply();
//-------------------------------------------------------------------------------------------------------------------------------------------//



// Objects
let userData = {  //TS behind the scenes assumes the type of userData just with the below code. However it is based on the key name. use : string to assign the key value type also
    name: "Max",
    age: 27
};

//This code will result in an eror because of this behind the scenes assigning
// userData = {a:"Hello", b:22);
//-------------------------------------------------------------------------------------------------------------------------------------------//

// Example of a Complex Object
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }

}
//-------------------------------------------------------------------------------------------------------------------------------------------//

// Custom Types

// Type Alias

type Complex = { data: number[], output: (all: boolean) => number[] };

let complex2: Complex = {  //This allows us to edit the type Complex in one place and have it change where ever it is used. Much easier than copying all the type data and editting  it everytime.
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }

}
//-------------------------------------------------------------------------------------------------------------------------------------------//

// Union Types
let myRealRealAge: number | string = 27;  // "|" is an "or"
myRealRealAge = "27";

//This causes an error if we try to assign myRealRealAge to "true". If we used any no error would result. Allows more specific, but no too general type assignment.

// Check Types
let finalValue = 30;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
//-------------------------------------------------------------------------------------------------------------------------------------------//

// TS 2.0

// Never
function neverReturn():never { 
    throw new Error('An error!');
}
//-------------------------------------------------------------------------------------------------------------------------------------------//

//Nullable Types
let canBeNull: number | null = 12;
canBeNull = null; //By setting strictnullchecks to true this will result in an error. cant assign null now. Added the union type above to fix this.
let canAlsoBeNull; //Defaults to type 'any', value 'undefined'
canAlsoBeNull = null; //Assigned strictly to null with nullchecks on. cant be a number now.









//------------------------------Section 4---------------------------------------------------------------------------------------------------//






// Let and Const
//Let creates a block scope varibale, while just using var creates global scope

let variable = "Test";
console.log(variable);
variable = "Another Value";
console.log(variable);  //Totally fine to reassign as long as same type

const maxLevels = 100;
console.log(maxLevels);
//maxLevels = 99 will result in an error. Use const whenever you NEVER want a value to change.

// Block Scope
function reset() {

    //console.log(variable); will return undefined here because it doesnt have access to above code
    let variable = null; //This will not override the above code. Its scope is contained to its block by the "let" statement
    console.log(variable);
}
reset(); //returns null
console.log(variable); //returns "another value"


// Arrow functions
const addNumbers = function (number1: number, number2: number): number {
    return number1 + number2;
};
console.log(addNumbers(10, 3));

const multiplyNumbers = (number1: number, number2: number) => number1 * number2; //Exmaple of arrow function
console.log(multiplyNumbers(10, 3));


// Default Paramters
const countdown = (start: number): void => {
    while (start > 0) {
        start--;
    }
    console.log("Done", start);

};

countdown(10); //Works as expected.
//countdown(): undefined. However setting "start: number = 10 will make it a default value and work as expected

// Rest and Spread
const numbersTwo = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3, 22));
console.log(Math.max(...numbersTwo)); //... Spread. Acts to essentially remove the square brackets and grab the list of numbers since we cant call numbers directly in Math.macx()
//Avoid complex loops and such to assess arrays

function makeArray(...args: number[]) { //Rest. Whatever args is, turn into an array
    return args;
}
console.log(makeArray(1, 2, 6));

// Desctructuring 
const myHobbies = ["Cooking", "Sports"];

//We are going to avoid doing this
//const hobby1 = myHobbies[0];
//const hobby2 = myHobbies[1];
//console.log(hobby1, hobby2);

const [hobby1, hobby2] = myHobbies; //Does the same thing as above, creates new vars and assigns them as desired in less code
console.log(hobby1, hobby2);

const userInfo = { userName: "Max", age: 27 }; //Not just for arrays, also works for objects
const {userName, age} = userInfo;
console.log(userName, age);

// Template Literals

const userFullName = "Max";
const greeting = `This is a heading
I'm ${userFullName} and Im using multiline strings with back ticks.
`;
console.log(greeting);

