
// Decorators

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

@printable
class Plant2 {
    name = "Green Plant";

}
const planbt = new Plant2();
(<any>plant).print(); //has to be cast manually to type any for some reason. honestly not sure why