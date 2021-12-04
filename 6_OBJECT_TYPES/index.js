"use strict";
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name}, seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log('Este produto está disponível!');
    }
}
const shirt = {
    name: 'Camisa',
    price: 29.99,
    isAvailable: true,
};
showProductDetails(shirt);
function showUserDetails(user) {
    console.log(`E-mail do usuário: ${user.email}`);
    if (user.role) {
        console.log(`Sua função no sistema é de: ${user.role}`);
    }
}
const u1 = { email: 'matheus@teste.com', role: 'Admin' };
const u2 = { email: 'joao@teste.com' };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: 'Vw',
    wheels: 4,
};
let coords = {
    x: 10,
};
// coords.y = 'teste'
coords.y = 15;
console.log(coords);
const arr1 = [1, 2, 3];
const goku = {
    name: 'Goku',
    age: 50,
    superpowers: ['Kamehameha', 'Genki Dama'],
};
console.log(goku);
const arnold = {
    name: 'Arnold',
    type: 'Shotgun',
    caliber: 12,
};
console.log(arnold);
// 7 - read only array
let myArray = ['Maçã', 'Laranja', 'Pêra'];
// myArray[3] = 'Mamão'
myArray.forEach((item) => {
    console.log('Fruta: ' + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
const anotherUser = ['Matheus', 30];
anotherUser[1] = 'João';
console.log(anotherUser);
// 9 - tuplas com readonly
function showNumbers(numbers) {
    // numbers[0] = 10
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
// showNumbers(['teste', 1])
