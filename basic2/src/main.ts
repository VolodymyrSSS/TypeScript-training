//=================================== 01 ================================
/* 1.Create a constructor function named Book that takes three arguments:
   - title (String); - author (String); - pages (Number);
   The function should set these as properties on the object created. 
   2.Add a method called getSummary that returns a string with some information
   about the book: 
   this.title + " was written by " + this.author + " and has " + this.pages + " pages";
 */
// Solution:
// Define the Book interface for type safety
interface Book {
  title: string;
  author: string;
  pages: number;
  getSummary: () => string;
}

// Constructor function with explicit this typing
// Explicitly typed this in the constructor function (this: Book) so
// TypeScript knows what properties will exist.
function Book(this: Book, title: string, author: string, pages: number) {
  this.title = title;
  this.author = author;
  this.pages = pages;

  this.getSummary = (): string =>
    `${this.title} was written by ${this.author} and has ${this.pages} pages`;
}

// Example input array
// Used a tuple type for inp to ensure the array elements are typed correctly
const inp: [string, string, string] = ["Harry Potter", "Rowling", "500"];

const inputTitle: string = inp[0]; // First line: book title
const inputAuthor: string = inp[1]; // Second line: author
const inputPages: number = parseInt(inp[2]); // Third line: number of pages

// Use new operator with constructor function
// Casted Book as any when calling with new — this is a common workaround
// for constructor functions in TypeScript
const book = new (Book as any)(inputTitle, inputAuthor, inputPages);
console.log(book.getSummary()); // Harry Potter was written by Rowling and has 500 pages

//=================================== 02 ================================
/* You're given a constructor function that creates car objects.
   Your task is to:
  1. Create a new car object using the new keyword, pass "Honda" as 
     the name and 2018 as the year;
  2. Call the getDescription method on your car object;
  3. Print the result to the console.
  Try to solve using arrow-fuction
*/
// Solution:
/* In TypeScript, when you use a constructor function, you can annotate 
   "this" explicitly (this: { ... }) to describe what properties the function 
   will attach. The new keyword creates a new object and binds it to this.
*/
function Car1(
  this: { name: string; year: number; getDescription: () => string },
  name: string,
  year: number,
) {
  this.name = name;
  this.year = year;
  this.getDescription = (): string =>
    `This is a ${this.name} from ${this.year}`;
}

// You must either define an interface for the constructor or cast to any when using new
// but with ..as any - we  lose type safety
const honda = new (Car1 as any)("Honda", 2008);
console.log(honda.getDescription()); // This is a Honda from 2008

// тому необхідно створити interfaces для екземплярів об"єктів та функції-конструктора:
interface CarInterface {
  name: string;
  year: number;
  getDescription: () => string;
}

interface CarConstructor {
  new (name: string, year: number): CarInterface;
}

const Car2: CarConstructor = function (
  this: CarInterface,
  name: string,
  year: number,
) {
  this.name = name;
  this.year = year;
  this.getDescription = (): string =>
    `This is a ${this.name} from ${this.year}`;
} as any;
/*The cast (Car as any) is sometimes used to satisfy TypeScript’s stricter type system when calling with new.*/

// Варіант рішення без оператора "new" але із створенням функції подібної до функції-конструктора
// Define a Car type
type Car = {
  name: string;
  year: number;
  getDescription: () => string;
};

// Create a Car factory function using arrow syntax
const createCar = (name: string, year: number): Car => ({
  name,
  year,
  getDescription: (): string => `This is a ${name} from ${year}`,
});

// Example usage
const bmw: Car = createCar("ВМW i3", 2018);
console.log(bmw.getDescription()); // This is a ВМW i3 from 2018

//=================================== 03 ================================
/* 
    1. Create a constructor function called Thermostat that takes a room parameter
        Inside the constructor, set these properties using this:
        - room (from the parameter); - temperature (set to 22); -isOn (set to true);
    2. Add these methods inside the constructor using this:
        - increaseTemp() - increases temperature by 1 degree;
        - decreaseTemp() - decreases temperature by 1 degree;
        - getStatus() - returns: "[room] thermostat: [temperature]°C";
    3. Test your code.
*/
// Solution:
// Define the Thermostat interface
interface Thermostat {
  room: string;
  temperature: number;
  isOn: boolean;
  increaseTemp: () => void;
  decreaseTemp: () => void;
  getStatus: () => string;
}

// Constructor function with explicit this typing
function Thermostat(this: Thermostat, room: string) {
  this.room = room;
  this.temperature = 22;
  this.isOn = true;

  this.increaseTemp = (): void => {
    this.temperature += 1;
  };

  this.decreaseTemp = (): void => {
    this.temperature -= 1;
  };

  this.getStatus = (): string => {
    return `${this.room} thermostat: ${this.temperature}°C`;
  };
}

// Test
const livingRoom = new (Thermostat as any)("Living Room");
livingRoom.increaseTemp();
livingRoom.increaseTemp();
console.log(livingRoom.getStatus()); // Living Room thermostat: 24°C

const bedroom = new (Thermostat as any)("Bedroom");
bedroom.decreaseTemp();
bedroom.decreaseTemp();
console.log(bedroom.getStatus()); // Bedroom thermostat: 20°C

//=================================== 04 ================================
/* 
   1. Create a VendingMachine class that represents a drink vending machine
   with the following properties:
    - location (string): where the machine is located;
    - drinks (number): how many drinks are left;
    - methods getStatus(): returns a string like "Cafe machine: 20 drinks left".
    2. Create the instance cafeMachine and print the phrase.
    3. Show solution with prototype-based approach as well.
*/
// Solution: classic approach
class VendingMachine1 {
  location: string;
  drinks: number;

  constructor(location: string, drinks: number) {
    this.location = location;
    this.drinks = drinks;
  }

  getStatus(): string {
    return `${this.location} machine: ${this.drinks} drinks left`;
  }
}

const cafeMachine1 = new VendingMachine1("Cafe", 20);
console.log(cafeMachine1.getStatus()); // "Cafe machine: 20 drinks left"

// Solution: prototype-base approach:
function VendingMachine2(this: any, location: string, drinks: number) {
  this.location = location;
  this.drinks = drinks;
}

// Explicitly declare the prototype methods
(VendingMachine2.prototype as any).getStatus = function (this: any): string {
  return `${this.location} machine: ${this.drinks} drinks left`;
};

const cafeMachine2 = new (VendingMachine2 as any)("Cafe", 20);
console.log(cafeMachine2.getStatus()); // "Cafe machine: 20 drinks left"

//=================================== 05 ================================
/* 
   You're given a Shape parent class and a Circle child class. The parent
   class has a calculateArea() method that returns 0.
   Your task is to override the calculateArea() method in the Circle class
   to calculate the actual area of a circle.
   (The formula for circle area is: π × radius² In JavaScript: 
   Math.PI * this.radius * this.radius)
*/
// Solution:
class Shape {
  calculateArea(): number {
    return 0;
  }
}

/*
  In TypeScript, when you define a class property, you usually declare its type
  at the class level. That way the compiler knows the property exists and what
  type it should hold.
*/
class Circle extends Shape {
  radius: number; // property declaration with type → tells TS: this class has a property called radius, and it will always be a number

  constructor(radius: number) {
    //  here a radius: number → defines the constructor parameter, also typed as a number
    super();
    this.radius = radius; // assignment → assigns the incoming parameter to the class property
  }

  // Override calculateArea with proper typing
  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
/*
  TypeScript also allows a parameter property shorthand: you can declare and assign 
  in one step inside the constructor, like:
  export class Circle extends Shape {
    constructor(public radius: number) {
      super();
    }

    calculateArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
*/

// Test
const myCircle: Shape = new Circle(5);
console.log(myCircle.calculateArea()); // 78.53981633974483

//=================================== 06 ================================
/* 
  You're given a Rectangle class with width and height properties. Your 
  task is to add computed properties for area and perimeter.
  - Computed property area - returns width × height;
  - Computed property perimeter - returns 2 × (width + height).
*/
// Solution:
class Rectangle {
  constructor(
    public width: number,
    public height: number,
    /*
      Declaring public width: number in the constructor automatically creates
      and assigns the property, so you don’t need this.width = width manually.
      Actually, it is the same like:
      class Rectangle {
        public width: number;
        public height: number;

        constructor(width: number, height: number) {
          this.width = width;
          this.height = height;
        }...
    */
  ) {}

  // Computed property for area
  get area(): number {
    return this.width * this.height;
  }

  // Computed property for perimeter
  get perimeter(): number {
    return 2 * (this.width + this.height);
  }
}
// Test
const rect = new Rectangle(5, 10);
console.log(`Area: ${rect.area}`); // Area: 50
console.log(`Perimeter: ${rect.perimeter}`); // Perimeter: 30

//=================================== 07 ================================
/* 
  Complete the Robot.js file to make the robot functional. Right now, 
  the robot is built but can't do anything. What to do in Robot.js:
  1. Create the speaker and the mover components inside the Robot constructor
  2. Use the components in the methods:
    - In greet(): Call this.speaker.speak("Hello!");
    - In walkForward(): Call this.mover.move("forward");
  Why we do this: This is composition - the robot is built by combining 
  smaller components. The robot has-a speaker (for talking) and has-a mover 
  (for moving), rather than inheriting these abilities.
*/
// Solution:
class Speaker {
  speak(message: string): void {
    console.log(`Saying: "${message}"`);
  }
}
class Mover {
  move(direction: string): void {
    console.log(`Moving ${direction}`);
  }
}

export class Robot {
  /* private keyword: Marks a property or method so it can only 
     be accessed inside the class.
     # syntax: This is JavaScript’s newer private field syntax, 
     enforced at runtime. It’s different from private in TypeScript, 
     which is compile‑time only.*/
  private speaker: Speaker;
  private mover: Mover;
  public name: string;

  constructor(name: string) {
    this.name = name;
    this.speaker = new Speaker(); // Initialize the speaker property
    this.mover = new Mover(); // initialize the mover property
  }

  greet(): void {
    this.speaker.speak("Hello!");
  }

  walkForward(): void {
    this.mover.move("forward");
  }
}

// Test
const myRobot = new Robot("Robo");
myRobot.greet(); // Saying: "Hello!"
myRobot.walkForward(); // Moving forward
