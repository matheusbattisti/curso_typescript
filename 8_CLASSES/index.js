"use strict";
// 1 - campos em classes
class User {
}
const matheus = new User();
matheus.name = "Matheus";
console.log(matheus);
// 2 - constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new NewUser("João", 20);
console.log(joao);
// 3 - campo readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car("Fusca");
console.log(fusca.wheels);
// 4 - herança e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("Destroyer", 4);
console.log(destroyer);
// 5 - métodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hey Stranger!");
    }
}
const jimmy = new Dwarf("Jimmy");
jimmy.greeting();
// 6 - this
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência.`);
    }
}
const myTruck = new Truck("Volvo", 400);
myTruck.showDetails();
// 7 - getter
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + " " + this.surname;
    }
}
const matheusBattisti = new Person("Matheus", "Battisti");
console.log(matheusBattisti.fullName);
// 8 - setter
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("X inserido com sucesso!");
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("Y inserido com sucesso!");
    }
}
const myCoords = new Coords();
myCoords.fillX = 15;
myCoords.fillY = 0;
console.log(myCoords);
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título do post é: ${this.title}`;
    }
}
const myPost = new blogPost("Hello World");
console.log(myPost.itemTitle());
// 10 - override de métodos
class Base {
    someMethod() {
        console.log("Alguma coisa!");
    }
}
class Nova extends Base {
    someMethod() {
        console.log("Outra coisa!");
    }
}
const myNewClass = new Nova();
myNewClass.someMethod();
// 11 - public
class C {
    constructor() {
        this.x = 10;
    }
}
const cInstance = new C();
console.log(cInstance.x);
// 12 - protected
class D {
    constructor() {
        this.x = 10;
    }
    protectedMethod() {
        console.log("Estou protegido!");
    }
}
class E extends D {
    showX() {
        console.log("X: " + this.x);
    }
    useMethod() {
        this.protectedMethod();
    }
}
class F extends D {
}
const eInstance = new E();
eInstance.showX();
eInstance.useMethod();
const fInstance = new F();
// fInstance.showX()
// 13 - private
class PrivateClass {
    constructor() {
        this.name = "Private";
    }
    showName() {
        console.log(this.name);
    }
    privateMethod() {
        console.log("Sou privado!");
    }
    showPrivateMethodResult() {
        this.privateMethod();
    }
}
const pClass = new PrivateClass();
pClass.showName();
pClass.showPrivateMethodResult();
// class TestingPrivate extends PrivateClass {
//   myMethod() {
//     this.privateMethod()
//   }
// }
// 14 - static members
class StaticMembers {
    static staticMethod() {
        console.log("Este método é static!");
    }
}
StaticMembers.prop = "Teste static";
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
