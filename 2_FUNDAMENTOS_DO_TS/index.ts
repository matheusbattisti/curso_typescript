// 1 - Numbers
let x: number = 10

x = 15

console.log(typeof x)

const y: number = 3.14329492349

console.log(y.toPrecision(3))

// 2 - string
const firstName: string = 'Matheus'

console.log(firstName.toUpperCase())

const lastName: string = 'Battisti'

let fullName: string

fullName = firstName + ' ' + lastName

console.log(fullName)

// 3 - boolean
let a: boolean = true

console.log(typeof a)

a = false

// 4 - inference e annotation
const ann: string = 'Teste'

const inf = 'Testando'

// 5 - compile automatico
let q = 10

console.log(q)

q = 11

console.log(q)

// 6 - desafio 2
const n1: number = 10

const numberToString = n1.toString()

const printMyNumber: string = `Eu quero imprimir o número ${numberToString}`

console.log(printMyNumber)
