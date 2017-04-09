
// Decorators

// A decorator is a function. Any function. It is attached with an "@" 

function logged(constructorFn: Function) {

    console.log(constructorFn);
}

@logged //Need to go to tsconfig to turn off the warning about experimental feature
class Personv2 { //lets add a decorator that logs info about the constructor in this class
    constructor() {
        console.log("Hi");
    }
}

// Factory

//Similiar too decorator but passes a value in () after it

function logging(value: boolean) {
    return value ? logged : null //if true return logged function, if false return null
}

//@logging(true) //attach the result of the function
class Carv2 {

}

// Advanced
function printable(constructorFn: Function){
    constructorFn.prototype.print = function () { // Each object created based on class with decorator will recieve print method
        console.log(this);
    }
}

// Can alsoo use multiple decorators if wanted. Just use another "@" on the next line
@printable
class Plant2 {
    name = "Green Plant";

}
const planbt = new Plant2();
(<any>plant).print(); //has to be cast manually to type any for some reason. honestly not sure why

// Method Decorator

function editable(value: boolean)
{ // we create a decorator to control if a value can be edited
    return function (target: any, propName: string, descriptor: PropertyDescriptor)
    // A descriptor is plain javascript. allows you to configure a property
    {
        descriptor.writable = value;
    }
}
class Project2
{
    projectName: string;
    constructor(name: string)
    {
        this.projectName = name;
    }
    @editable(false) // blocks editing
    calcBudget()
    {
        console.log(1000);
    }
}

const project = new Project2("Super Project");
project.calcBudget();
project.calcBudget = function ()
{
    console.log(2000);
}
project.calcBudget(); // without the descritpor will return 1000, then 2000, because we are overwriting the function