// 1 - campos em classes
class User {
  name!: string
  age!: number
}

const matheus = new User()

matheus.name = "Matheus"

console.log(matheus)

// 2 - constructor
class NewUser {
  name
  age

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const joao = new NewUser("João", 20)

console.log(joao)


// 3 - campo readonly
class Car {
  name
  readonly wheels = 4

  constructor(name: string) {
    this.name = name
  }
}

const fusca = new Car("Fusca")

console.log(fusca.wheels)

// 4 - herança e super
class Machine {
  name

  constructor(name: string) {
    this.name = name
  }
}

class KillerMachine extends Machine {
  guns

  constructor(name: string, guns: number) {
    super(name)
    this.guns = guns
  }
}

const destroyer = new KillerMachine("Destroyer", 4)

console.log(destroyer)

// 5 - métodos
class Dwarf {
  name

  constructor(name: string) {
    this.name = name
  }

  greeting() {
    console.log("Hey Stranger!")
  }
}

const jimmy = new Dwarf("Jimmy")

jimmy.greeting()

// 6 - this
class Truck {
  model
  hp

  constructor(model:string, hp: number) {
    this.model = model
    this.hp = hp
  }

  showDetails() {
    console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência.`)
  }
}

const myTruck = new Truck("Volvo", 400)

myTruck.showDetails()