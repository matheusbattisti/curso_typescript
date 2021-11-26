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
