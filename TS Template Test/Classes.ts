class Person {
    name: string; //Boom. Property created directly without "this". Defaults to public
    private type: string;
    protected age: number = 27; //Can be inherited while private cannot. Can be initialized right after declaring

    constructor(name: string, public username: string) { //second part to the constructor assigns user name while telling the constructor to expect the value
        this.name = name;
    }

    printAge() {
        console.log(this.age);
        this.setType("Old guy");
    }

    setType(type: string) { //Can also make methods private "private setType"
        this.type = type;
        console.log(this.type);
    }

}
const person = new Person("Max", "max");
console.log(person.name, person.username);

person.printAge();
person.setType("Cool guy"); //Wont work if private method

// Inheritance

class Max extends Person //Extends upon the person class and contains EVERYTHING it does
{
    name = "Max"; //Overwrites name with the given value
}

const max = new Max("Anna", "max"); //Anna will be overwritten by the above code. "max" will pass

// Inheritance and constructors

class Fred extends Person
{
    constructor(username: string) //Constructor now only expects one argument
    {
        super("Fred", username); //Must call super here in order to call constructor in the parent class

    }
}
const fred = new Fred("fred");