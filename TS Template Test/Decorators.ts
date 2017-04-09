
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

// Method Decorator and Property decorators
// Due to some techincal difficulties, property and methods cant accessed in the same way, so the two are fairley different

function editable(value: boolean)
{ // we create a decorator to control if a value can be edited
    return function (target: any, propName: string, descriptor: PropertyDescriptor)
    // A descriptor is plain javascript. allows you to configure a property
    {
        descriptor.writable = value;
    }
}

function overwritable(value: boolean) //Property descciptor
{
    return function (target: any, propName: string): any //No decriptor. cant be accessed. but can be set
    {
        const newDescriptor: PropertyDescriptor = {
            writable: value
        };
        return newDescriptor;
    }
}
class Project2
{
    @overwritable(false) //An error will result here if line 61 :any isnt set. all writing access is prevented by false, so now value set at all. 
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

// Parameter Decorators

function printInfo(target: any, methodName: string, paramIndex: number)
{
    console.log("Target:", target);
    console.log("methodName:", methodName);
    console.log("paramIndex:", paramIndex);

}

class Course
{
    name: string;
    constructor(name: string)
    {
        this.name = name;
    }

    printStudentNumbers(mode: string, @printInfo printAll: boolean)
    {
        if (printAll) {
            console.log(1000);
        }
        else {
            console.log(2000);
        }
    }
}

const course = new Course("Super Course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);  // return 1000 and 2000 without decorator. returns all the other data with it
