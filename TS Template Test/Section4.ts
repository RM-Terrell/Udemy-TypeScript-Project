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
function reset()
{

    //console.log(variable); will return undefined here because it doesnt have access to above code
    let variable = null; //This will not override the above code. Its scope is contained to its block by the "let" statement
    console.log(variable);
}
reset(); //returns null
console.log(variable); //returns "another value"


// Arrow functions
const addNumbers = function (number1: number, number2: number): number
{
    return number1 + number2;
};
console.log(addNumbers(10, 3));

const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
console.log(multiplyNumbers(10, 3));


//Default Paramters
const countdown = (start: number): void =>
{
    while (start > 0) {
        start--;
    }
    console.log("Done", start);

};

countdown(10); //Works as expected.
//countdown(): undefined. However setting "start: number = 10 will make it a default value and work as expected