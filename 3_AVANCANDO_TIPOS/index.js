"use strict";
// 1 - arrays
var nums = [1, 2, 3];
nums.push(5);
console.log(nums[2]);
// nums.push('a')
// nums = 'teste'
var nomes = ['Matheus', 'Pedro'];
// nomes.push(2)
// 2 - outra sintaxe de array
var numbers = [100, 200];
numbers.push(200);
// numbers.push('teste')
console.log(numbers[1]);
// 3 - any
var arr = [1, 'teste', true, { nome: 'Matheus' }];
console.log(arr);
arr.push([1, 2, 3]);
console.log(arr);
// 4 - parametro de funcao
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// soma('ads', 1)
// 5 - retorno de funcao
function greeting(name) {
    return "Ol\u00E1 ".concat(name, "!");
    // return 1
}
console.log(greeting("Matheus"));
// greeting(1)
// 6 - funcoes anonimas
setTimeout(function () {
    var sallary = 1000;
    // console.log(parseFloat(sallary))
}, 100);
// 7 - tipos de objetos
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("X coordinates: " + coord.y);
}
var objCoord = { x: 10, y: 5 };
passCoordinates(objCoord);
// 8 - propriedades opcionais
function showNumbers(a, b, c) {
    console.log('A: ' + a);
    console.log('B: ' + b);
    console.log('C: ' + c);
}
showNumbers(1, 2, 3);
showNumbers(4, 8);
// showNumbers(4)
// 9 - validando parâmetro opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        console.log("Ol\u00E1, ".concat(firstName, " ").concat(lastName, ", tudo bem?"));
    }
    console.log("Ol\u00E1, ".concat(firstName, ", tudo bem?"));
}
advancedGreeting("Matheus", "Battisti");
advancedGreeting("João");
// 10 - union type
function showBalance(balance) {
    console.log("O saldo da conta \u00E9 R$".concat(balance));
}
showBalance(500);
showBalance("100");
// 11 - mais sobre union types
function showUserRole(role) {
    if (typeof role === 'boolean') {
        console.log("Usuário não aprovado!");
    }
    console.log("O usu\u00E1rio \u00E9 um: ".concat(role));
}
showUserRole(false);
showUserRole("Admin");
showUserRole("Editor");
