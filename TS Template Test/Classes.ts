class Person {
    name: string; //Boom. Property created directly without "this". Defaults to public
    private type: string;
    protected age: number = 27; //Can be inherited in child classes while private cannot. Can be initialized right after declaring

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
        this.age = 31; //Can access this as protected because we are in a child class. Type however cannot be accessed

    }
}
const fred = new Fred("fred");

// Getters and Setters

class Plant
{
    private _species: string; //Typically dont name with an underscore

    get species()
    {
        return this._species;
    }

    set species(value: string)//This will be set up to be accessible outside unlike _species
    {
        if (value.length > 3) 
        {
            this._species = value; //If string lenth greater than 3 assign it to _species
        }
        else
        {
            this._species = "Default"
        }
    }
}

let plant = new Plant();
console.log(plant.species); //Refers to the properties without the underscore
plant.species = "AB";
console.log(plant.species); //Will still return default because less than 3

// Static Properties and Methods

class Helpers
{
    static PI: number = 3.14; //Can now be accessed without instantiating Helpers
    static calcCirc(diameter: number): number
    {
        return this.PI * diameter;
    }
}

console.log(Helpers.PI * 2); //Properties can be accessed this way now
console.log(Helpers.calcCirc(3));

// Abstract Classes

abstract class Project //These exist purely to be inherited from and cannot be intantiated directly
{
    projectName: string = "Default";
    budget: number;

    abstract changeName(bame: string): void //no curly braces because all we're doing is defining what the function looks like

    calcBudget()
    {
        return this.budget * 2;
    }
}

class ITProject extends Project
{
    changeName(name: string): void
    {
        this.projectName = name; //of couse this could have been done elsewhere, but you have to use changeName since it is inherited
    }
}
