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
