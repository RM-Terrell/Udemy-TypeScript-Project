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

//Example of a Complex Object
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }

}




