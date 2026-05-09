"use strict";
//=================================== 01 ================================
/*
  You're given a constructor function that creates car objects.
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
function Car1(name, year) {
    this.name = name;
    this.year = year;
    this.getDescription = () => `This is a ${this.name} from ${this.year}`;
}
const honda = new Car1("Honda", 2008);
console.log(honda.getDescription()); // This is a Honda from 2008
const Car2 = function (name, year) {
    this.name = name;
    this.year = year;
    this.getDescription = () => `This is a ${this.name} from ${this.year}`;
};
// Create a Car factory function using arrow syntax
const createCar = (name, year) => ({
    name,
    year,
    getDescription: () => `This is a ${name} from ${year}`,
});
// Example usage
const bmw = createCar("ВМW i3", 2018);
console.log(bmw.getDescription()); // This is a ВМW i3 from 2018
