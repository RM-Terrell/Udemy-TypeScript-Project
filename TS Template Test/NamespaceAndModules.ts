// Namespaces
namespace MyMath
    {
    const PI = 3.14;

    export function calcCirc(diameter: number) //must use export to make accessable. Can also nest more namespaces in this namespace
    {
        return diameter * PI;
    }

    export function calcPerim(length: number, width: number)
    {
        return length * 2 + width * 2;
    }
}

console.log(MyMath.calcCirc(2));


// "///" used to import namespaces
// /// <reference path="circleMath.ts"/> for example. ordering matters
// --outfile app.js

// Modules

import { PI, calculateCircumf } from "./math/circle"; //Leave .ts off. automagically looks for ts files. Use defaultExtensions setting if an error is thrown when using systemJS

console.log(PI);
console.log(calculateCircumf);
//console.log();
//May need a module loader to make this work. SystemJS for example




