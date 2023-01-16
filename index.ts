// BASIC TYPES
const id: number = 5;
const name: string = 'ASHFAQ'
const isEmployee: boolean = true
let x: any = "any Type"

// Arrays
const ids: number[] = [1, 2, 3, 4, 5]
const names: string[] = ["Ashfaq", "KABIR", "brad"]
const arr: any[] = [1, 2, 3, "mike"]

// Tuple
const person: [number, string, boolean] = [1, "name", false]

// Tupple Array
const employee: [number, string, boolean][] = [
    [1, "name", true],
    [2, "name", true],
    [3, "name", true]
]



// ENUM
enum Direction {
    Up,
    Down,
    Left,
    Right
}

enum DirectionWithValue {
    Up = 1,
    Down,
    Left,
    Right
}

enum DirectionWithValue2 {
    Up = "Up",
    Down= "Down",
    Left= "Left",
    Right= "Right",
}

// Objects
const user: {id:number, name: string} = {id: 1, name: "ASHFAQ"}

type User = { id: number, name: string }
const user2: User =  {id: 2, name: "KABIR"}

// Type Assertion
const cid: any = 1
const customerId = <number>cid
const customerId1 = cid as number

// Types in Functions
function sum(x:number, y: number):number {
    return x+y
}

function log(message: string | number): void {
    console.log(message)
}

// Interface
interface UserInterface {
    id: number,
    name: string,
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: "ASHFAQ"
}

interface MathFunc {
    (x:number, y:number): number
}

const add: MathFunc = (x:number, y:number): number => x+y 
const sub: MathFunc = (x:number, y:number): number => x-y 

// Classes
interface PersonInterface {
    id: number,
    name: string,
    register(): string
}

class Person implements PersonInterface {
    id: number = 2
    name: string

    constructor(id: number, name: string) {
        this.id=  id
        this.name= name 
    }

    register() {
        return `${this.name} is now registered`
    }
}

const ashfaq = new Person(1, "Ashfaq Kabir")
const mike = new Person(2, "Mike Hussey")

// Extending a CLASS (SubClasses)
class Employee extends Person {
    position: string
    
    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, "Ashfaq", "Developer")


// Generics
function getArr<T>(items: T[]): T[]{
    return new Array().concat(items)
}

let numArr = getArr<number>([1,2,3,4])
let stringArr = getArr<string>(["ASHFAQ", "KABIR"])



export {}