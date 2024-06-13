// Explicit
let firstName: string = "Jan";
// Implicit
let firstName2 = "Jan";
console.log(firstName);
console.log(firstName2);

// let test1: number = "Test";
// let test2: string = 4;

let dwieLiczby: number = 4 + 4;
//let liczbaString: number = 4 + "4";

console.log(dwieLiczby);
// console.log(liczbaString);

const names: string[] = [];
names.push("Jan");
// names.push(3);

const numbers = [1, 2, 3];
const numbers2: readonly number[] = [1, 2, 3];

let errorTuple: [number, string, boolean];
errorTuple = [404, "Nie ma takiej strony", true];

const car: {type: string, price: number, maxSpeed?: number} = {
    type: "Fiat",
    price: 50000
};
car.maxSpeed = 220;
// car.price = "2";
// car.minspeed = 10;

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    //BadRequest
}

console.log(StatusCodes.NotFound);
console.log(StatusCodes.Success);

function multiply(a: number, b: number, c?: number): number {
    return a * b * (c || 0);
}

function add(a: number, b: number, ...others: number[]) {
    return a + b + others.reduce((p, c) => p + c, 0);
}

function showStatusCode(code: number | string) {
    console.log("Status kodu: " + code);
}

showStatusCode(404);
showStatusCode("404");

class Person {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {  // Getter
        return this.name;
    }
}

const person = new Person("Jan");
console.log(person.getName());

abstract class Polygon {
    public abstract getArea(): number;

    public toString(): string {
        return 'Polygon  [area=${this.getArea()}]';
    }
}

class Rectangle extends Polygon {
    public constructor(
        protected readonly width: number,
        protected readonly height: number
    ) {
        super();
    }

    public getArea(): number {
        return this.width * this.height;
    }
}