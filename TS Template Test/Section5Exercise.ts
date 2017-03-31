// Exercise 1
//function Car(name)
//{
//    this.name = name;
//    this.acceleration = 0;

//    this.honk = function ()
//    {
//        console.log("Toooooooooot!");
//    };

//    this.accelerate = function (speed)
//    {
//        this.acceleration = this.acceleration + speed;
//    }
//}
//var car = new Car("BMW");
//car.honk();
//console.log(car.acceleration);
//car.accelerate(10);
//console.log(car.acceleration);

class Car
{
    name: string;
    acceleration: number = 0;

    constructor(name: string)
    {
        this.name = name;
    }

    honk() //method for honk
    {
        console.log("HONK!");
    }

    accelerate(speed: number) //method for accelerate
    {
        this.acceleration = this.acceleration + speed;
    }
}

const car = new Car("Mercedes");
car.honk();
console.log(car.acceleration);
car.accelerate(20);
console.log(car.acceleration);



//----------------------------------------------------------------------------------------//

// Exercise 2
//var baseObject = {
//    width: 0,
//    length: 0
//};
//var rectangle = Object.create(baseObject);
//rectangle.width = 5;
//rectangle.length = 2;
//rectangle.calcSize = function ()
//{
//    return this.width * this.length;
//};
//console.log(rectangle.calcSize());

class BaseObject
{
    width = 0; //we're just letting TS infer the type here
    length = 0;

}

class Rectangle extends BaseObject
{
    calcSize()
    {
        return this.width * this.length;
    }
}

const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 9;

console.log(rectangle.calcSize());


//--------------------------------------------------------------------------------------------//

// Exercise 3
//var EXERCISEPerson = {
//    _firstName: ""
//};
//Object.defineProperty(EXERCISEPerson, "firstName", {
//    get: function ()
//    {
//        return this._firstName;
//    },
//    set: function (value)
//    {
//        if (value.length > 3) {
//            this._firstName = value;
//        }
//        else {
//            this._firstName = "";
//        }
//    },
//    enumerable: true,
//    configurable: true
//});
//console.log(person.firstName);
//person.firstName = "Ma";
//console.log(person.firstName);
//person.firstName = "Maximilian";
//console.log(person.firstName);

class PersonEX
{
    private _firstName: string = "";

    get firstName()
    {
        return this._firstName;
    }

    set firstname(value:string)
    {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = ""; // Coudl skip this entirely but showing explicitly how to reset given conditional
        }
    }
}

const personEX = new PersonEX();
console.log(personEX.firstName);
//personEX.firstName = "Ma"; //Wont set due to being < 3 
