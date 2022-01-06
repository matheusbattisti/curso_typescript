"use strict";
// 1 - instalar e testar typescript
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// npm i -g typescript
// tsc -v
// 2 - primeiro programa
const x = 5;
// x = "teste";
// 3 - inferência x annotation
const y = 10;
const z = 15;
// 4 - estrutura inicial
// criação de pastas
// tsc --init
// ajuste de outDir e rootDir
// teste de target com es3 (versoes antigas) e versoes novas
// 5 - tipos básicos
let firstName = "Matheus";
let age = 30;
const isAdmin = true;
console.log(firstName);
console.log(typeof firstName);
console.log(age);
console.log(isAdmin);
// 6 - arrays
const myNumbers = [1, 2, 3];
// myNumbers = "teste"
myNumbers.push(4);
console.log(myNumbers);
// 7 - tuplas
let myTuple;
myTuple = [10, "string", ["a", "b", "c"]];
// 8 - object literals
const user = {
    name: "Matheus",
    age: 30,
};
console.log(user);
// user.job = "Programmer"
// user.age = "30"
// 9 - any
let a = 0;
a = "teste";
a = true;
a = [];
// 10 - union type
let id = "10";
id = 10;
const userId = 10;
const productId = "0001";
// 12 - enum
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["L"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.M,
};
console.log(camisa);
// 12.5 - literal types
let teste;
// teste = "outrovalor"
teste = "algumvalor";
// 13 - funções
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 2));
function sayHelloTo(name) {
    return `Hello ${name}!`;
}
console.log(sayHelloTo("Matheus"));
function logger(msg) {
    console.log(msg);
}
logger("Testando");
function greeting(name, greet) {
    if (greet) {
        console.log(`Hello ${greet} ${name}`);
    }
    else {
        console.log(`Hello ${name}`);
    }
}
greeting("João");
greeting("Pedro", "Sir");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 10,
    n2: 12,
};
console.log(multiplyNumbers(someNumbers));
// 15 - narrowing
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número!");
}
doSomething(5);
doSomething(false);
// 16 - generics
function showArrayItens(arr) {
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
    constructor(name, role, isApproved) {
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
class Car {
    brand;
    wheels;
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do veículo é: ${this.brand}`);
    }
}
const fusca = new Car("VW", 4);
fusca.showBrand();
// 19 - heranca
class SuperCar extends Car {
    engine;
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
a4.showBrand();
// 20 - decorators
// setar experimentalDecorators
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            id = Math.random();
            created = new Date();
        };
    };
}
let Person = class Person {
    name;
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const sam = new Person("Sam");
console.log(sam);
