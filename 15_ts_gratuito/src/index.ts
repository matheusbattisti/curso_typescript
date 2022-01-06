// 1 - instalar e testar typescript

// npm i -g typescript
// tsc -v

// 2 - primeiro programa
const x: number = 5;

// x = "teste";

// 3 - inferência x annotation
const y = 10;
const z: number = 15;

// 4 - estrutura inicial

// criação de pastas
// tsc --init
// ajuste de outDir e rootDir
// teste de target com es3 (versoes antigas) e versoes novas

// 5 - tipos básicos
let firstName: string = "Matheus";
let age: number = 30;
const isAdmin: boolean = true;

console.log(firstName);
console.log(typeof firstName);
console.log(age);
console.log(isAdmin);

// 6 - arrays
const myNumbers: number[] = [1, 2, 3];

// myNumbers = "teste"
myNumbers.push(4);

console.log(myNumbers);

// 7 - tuplas
let myTuple: [number, string, string[]];

myTuple = [10, "string", ["a", "b", "c"]];

// 8 - object literals
const user: { name: string; age: number } = {
  name: "Matheus",
  age: 30,
};

console.log(user);

// user.job = "Programmer"
// user.age = "30"

// 9 - any
let a: any = 0;

a = "teste";
a = true;
a = [];

// 10 - union type
let id: number | string = "10";
id = 10;

// 11 - type alias
type myIdType = number | string;

const userId: myIdType = 10;
const productId: myIdType = "0001";

// 12 - enum
enum Size {
  P = "Pequeno",
  M = "Médio",
  L = "Grande",
}

const camisa = {
  name: "Camisa gola V",
  size: Size.M,
};

console.log(camisa);

// 12.5 - literal types
let teste: "algumvalor";

// teste = "outrovalor"
teste = "algumvalor";

// 13 - funções
function sum(a: number, b: number) {
  return a + b;
}

console.log(sum(2, 2));

function sayHelloTo(name: string): string {
  return `Hello ${name}!`;
}

console.log(sayHelloTo("Matheus"));

function logger(msg: string): void {
  console.log(msg);
}

logger("Testando");

function greeting(name: string, greet?: string) {
  if (greet) {
    console.log(`Hello ${greet} ${name}`);
  } else {
    console.log(`Hello ${name}`);
  }
}

greeting("João");
greeting("Pedro", "Sir");

// 14 - Interfaces
interface MathFunctionParams {
  n1: number;
  n2: number;
}

function sumNumbers(nums: MathFunctionParams) {
  return nums.n1 + nums.n2;
}

function multiplyNumbers(nums: MathFunctionParams) {
  return nums.n1 * nums.n2;
}

const someNumbers: MathFunctionParams = {
  n1: 10,
  n2: 12,
};

console.log(multiplyNumbers(someNumbers));

// 15 - narrowing
function doSomething(info: number | boolean) {
  if (typeof info === "number") {
    console.log(`O número é ${info}`);
    return;
  }

  console.log("Não foi passado um número!");
}

doSomething(5);
doSomething(false);

// 16 - generics
function showArrayItens<U>(arr: U[]) {
  arr.forEach((item) => {
    console.log(`ITEM: ${item}`);
  });
}

const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];

showArrayItens(a1);
showArrayItens(a2);

// 17 - classes
class User {
  name;
  role;
  isApproved;

  constructor(name: string, role: string, isApproved: boolean) {
    this.name = name;
    this.role = role;
    this.isApproved = isApproved;
  }

  showUserName() {
    console.log(`O nome do usuário é: ${this.name}`);
  }
}

const zeca = new User("Zéca", "Admin", true);

zeca.showUserName();

// 18 - interface eem classes
interface IVehicle {
  brand: string;
  showBrand(): void;
}

class Car implements IVehicle {
  brand;
  wheels;

  constructor(brand: string, wheels: number) {
    this.brand = brand;
    this.wheels = wheels;
  }

  showBrand(): void {
    console.log(`A marca do veículo é: ${this.brand}`);
  }
}

const fusca = new Car("VW", 4);

fusca.showBrand();

// 19 - heranca
class SuperCar extends Car {
  engine;

  constructor(brand: string, wheels: number, engine: number) {
    super(brand, wheels);
    this.engine = engine;
  }
}

const a4 = new SuperCar("Audi", 4, 2.0);

a4.showBrand();

// 20 - decorators
// setar experimentalDecorators
function BaseParameters() {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      id = Math.random();
      created = new Date();
    };
  };
}

@BaseParameters()
class Person {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const sam = new Person("Sam");

console.log(sam);
