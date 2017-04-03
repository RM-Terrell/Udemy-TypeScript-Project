// Namespaces
namespace MyMath
{
    const PI = 3.14;

    export function calcCirc(diameter: number) //must use export to make accessable
    {
        return diameter * PI;
    }

    export function calcPerim(length: number, width: number)
    {
        return length * 2 + width * 2;
    }
}

console.log(MyMath.calcCirc(2));
