interface NamedPerson
{
    firstName: string;
    age?: number;
    [propName: string]: any; //[] are not for array. This is for setting up a flexible key name

    //Can also add methods!
    MethodExample(lastName: string): void;

}

function greet2(person2: NamedPerson) //{ name: string }) person argument shold be object with name field as a string
{
    console.log("Hello," + person2.firstName);
}

function changeName(person: NamedPerson)
{
    person.firstName = "Anna";
}

const person2: NamedPerson = {
    firstName: "Max",
    age: 27,
    //Can create new properties here now with the [propName] in the interface
    MethodExample(lastName: string)
    {
        console.log("Hello" + lastName);
    }
};

// greet(person2);



// Function Types

interface DoubleValueFunc
{
    (number1: number, number2: number): number; //what ever uses this interface must be a function of this type
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function (value1: number, value2: number) //Names dont have to match, just the types
{
    return (value1 + value2) * 2;
};

console.log(myDoubleFunction(10, 20));

// Interface Inheritance

// Can use "Extends" to inherit a previous interface and extend it in the same way as previous inheritance techniques