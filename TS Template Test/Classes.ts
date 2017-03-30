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