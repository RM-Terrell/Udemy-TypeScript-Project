// Simple Generic

function echo(data: any) //return any data
{
    return data;
}

console.log(echo("Max")); //No access IDE access to .length
console.log(echo(26)); //calling 26.length will result in "undefined" but not cause a compile time error

// Better Generic

function betterEcho<T>(data: T) // "<T>" tells TS that this is a generic function. Gives type to "T". Doesnt have to be a T. Can use any letter
{
    return data;
}

console.log(betterEcho("Max").length); // Now have IDE access to .length
console.log(betterEcho(26)); // Now get an error for .length

// Built in Generic (array is a built in generic type)

const testingResults: Array<number> = [1.94, 2.33]; // Generic type array with numbers
testResults.push(-2.99);
//Wont be able to push a string to it now

// Generic Types

const echo2: <T>(data: T) => T = echo;

console.log(echo2<string>("Something"));

// Generic Class

class SimpleMath<T> // "<T>" makes it a simple class that use specifies type stored in T
{
    baseValue: T;
    multiplyValue: T;
    calculate(): number
    {
        return +this.baseValue * +this.multiplyValue; // "+" casts to a number
    }
}

const simpleMath = new SimpleMath();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());

