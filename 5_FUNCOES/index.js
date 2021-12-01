"use strict";
// 1 - funcoes sem retorno
function withoutReturn() {
    console.log('Não tem retorno');
    // return 1
}
withoutReturn();
// 2 - callback como argumento
function greeting(name) {
    return `Olá ${name}!`;
}
function preGreeting(f, name) {
    console.log('Preparando a saudação!');
    const greet = f(name);
    console.log(greet);
}
preGreeting(greeting, 'Matheus');
preGreeting(greeting, 'João');
// 3 - generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement([true, false]));
console.log(firstElement([]));
// firstElement('a')
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2,
    };
}
const newObj = mergeObjects({ name: 'Matheus' }, { age: 30 });
console.log(newObj);
// 4 - constraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 2));
console.log(biggestNumber('10', '5'));
// 5 - especificar tipo de argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays([1, 2, 3], ['teste']));
// 6 - parametros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }
    return `Olá ${name}!`;
}
console.log(modernGreeting('Matheus', 'Sr.'));
console.log(modernGreeting('João'));
// 7 - parametro default
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(5, 20));
console.log(somaDefault(5));
// 8 - unknown
function doSomething(x) {
    if (typeof x === 'number') {
        console.log('É um número!');
    }
    else {
        console.log('Não é um número!');
    }
    // x()
}
doSomething(10);
doSomething(false);
// 9 - never
function showErrorMsg(msg) {
    throw new Error(msg);
}
// showErrorMsg('Algo deu errado!')
// 10 - rest operator como parametro
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4));
console.log(sumAll(4, 5, 6));
// 11 - destructuring como parametro
function showProductDetails({ name, price, }) {
    return `O nome do produto é ${name} e o seu preço é R$${price}`;
}
const shirt = { name: 'Camisa', price: 59.99 };
console.log(showProductDetails(shirt));
