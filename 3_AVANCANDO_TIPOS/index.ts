// 1 - arrays
let nums: number[] = [1, 2, 3]

nums.push(5)

console.log(nums[2])

// nums.push('a')
// nums = 'teste'

const nomes = ['Matheus', 'Pedro']

// nomes.push(2)

// 2 - outra sintaxe de array
const numbers: Array<number> = [100, 200]

numbers.push(200)

// numbers.push('teste')

console.log(numbers[1])

// 3 - any
const arr: any[] = [1, 'teste', true, { nome: 'Matheus' }]

console.log(arr)

arr.push([1, 2, 3])

console.log(arr)

// 4 - parametro de funcao

function soma(a: number, b: number) {
    console.log(a + b)
}

soma(4, 5)

// soma('ads', 1)

// 5 - retorno de funcao
function greeting(name: string): string {
    return `Olá ${name}!`
    // return 1
}

console.log(greeting("Matheus"))

// greeting(1)


// 6 - funcoes anonimas
setTimeout(function() {

    const sallary = 1000

    // console.log(parseFloat(sallary))

}, 100);


// 7 - tipos de objetos

function passCoordinates(coord:{x: number, y: number}) {
    console.log("X coordinates: " + coord.x)
    console.log("X coordinates: " + coord.y)
}

const objCoord = {x: 10, y: 5}

passCoordinates(objCoord)

// 8 - propriedades opcionais
function showNumbers(a: number, b: number, c?: number) {
    console.log('A: ' + a)
    console.log('B: ' + b)
    console.log('C: ' + c)
}

showNumbers(1, 2, 3)
showNumbers(4, 8)
// showNumbers(4)

// 9 - validando parâmetro opcional
function advancedGreeting(firstName: string, lastName?:string) {
    if(lastName !== undefined) {
        console.log(`Olá, ${firstName} ${lastName}, tudo bem?`)
    }

    console.log(`Olá, ${firstName}, tudo bem?`)
}

advancedGreeting("Matheus", "Battisti")
advancedGreeting("João")

// 10 - union type
function showBalance(balance: string | number) {
    console.log(`O saldo da conta é R$${balance}`)
}

showBalance(500)
showBalance("100")

// 11 - mais sobre union types
function showUserRole(role: boolean | string) {
    if(typeof role === 'boolean') {
        console.log("Usuário não aprovado!")
    }
    console.log(`O usuário é um: ${role}`)
}

showUserRole(false)
showUserRole("Admin")
showUserRole("Editor")


