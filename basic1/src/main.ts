// console.log("TypeScript - basic");

//============================== 01 =================================
// EN: Create a constant named userId with an explicit type annotation
//     of number and assign it the value 12345. Create a variable named
//     username with an explicit type annotation of string and assign
//     it the value "john_doe". You are provided with the following
//     line of code that contains a type error:
//        username = userId;
//     Fix this type error by creating a new variable called userIdString
//     that converts the userId to a string using the String() function,
//     then assign userIdString to username instead. Finally, print both
//     userId and username to the console on separate lines.

const userId: number = 12345;
let username: string = "john_doe";
// username = userId; <-- here is type mistake

// solution:
let userIdString: string = String(userId);
username = userIdString;
console.log(userId);
console.log(username);

//============================== 02 =================================
// EN: Create a function named getStringLength that accepts a parameter
//     of type string | null and returns a number. The function should
//     handle both cases:
//     - If the parameter is a string, return its length;
//     - If the parameter is null, return 0;
//     Test your function by calling it with the following values and
//     printing the results:
//     - Call getStringLength("Hello TypeScript");
//     - Call getStringLength(null);
//     - Call getStringLength("TS").
//     Print each result on a separate line in the order listed above.

// solution:
function getStringLength(str: string | null): number {
  if (str === null) {
    return 0;
  }
  return str.length;
}
console.log(getStringLength("Hello TypeScript"));
console.log(getStringLength(null));
console.log(getStringLength("TS"));

//============================== 03 =================================
// EN: Create a function named getTypeInfo that takes a parameter of
//     type any and returns a string. The function should use the typeof
//     operator to determine the type of the input parameter and return
//     that type as a string. Test your function by calling it with
//     the following values and printing each result:
//     - Call getTypeInfo("Hello");
//     - Call getTypeInfo(42);
//     - Call getTypeInfo(true);
//     - Call getTypeInfo(null);
//     Print each result on a separate line in the order listed above.

// Solution:
function getTypeInfo(val: any): string {
  return typeof val;
}
console.log(getTypeInfo("Hello")); // "string"
console.log(getTypeInfo(42)); // "number"
console.log(getTypeInfo(true)); // "boolean"
console.log(getTypeInfo(null)); // "object"

// this solution can distinguish null explicitly (return "null" instead of "object")
function getTypeInfo2(val: any): string {
  if (val === null) {
    return "null"; // special case
  }
  return typeof val;
}
console.log(getTypeInfo2(null)); // "null"

//============================== 03 =================================
// EN: Create a tuple named employee that holds a number (employee ID)
//     followed by a string (employee name). Initialize it with the
//     ID 1001 and the name "Sarah Johnson". Use destructuring to extract
//     the values from the employee tuple into two separate variables
//     named empId and empName. Create another tuple named coordinates
//     that holds two numbers representing latitude and longitude coordinates.
//     Initialize it with the values 40.7128 and -74.0060. Use destructuring
//     to extract the values from the location tuple into two separate
//     variables named latitude and longitude. Print the destructured
//     variables in the following order, each on a separate line:
//     - Print the employee ID;
//     - Print the employee name;
//     - Print the latitude;
//     - Print the longitude.

// Solution:
const employee: [number, string] = [1001, "Sarah Johnson"];
const [empId, empName] = employee;
const coordinates: [number, number] = [40.7128, -74.006];
const [latitude, longitude] = coordinates;
console.log(empId);
console.log(empName);
console.log(latitude);
console.log(longitude);

//============================== 04 =================================
// EN: Create a readonly tuple named startPointthat represents a 2D
//     point with two numbers (x and y coordinates). Initialize it with
//     the values 0 and 0. Create another readonly tuple named colorRGB
//     that represents an RGB color value with three numbers (red, green,
//     blue). Initialize it with the values 255, 128, and 64. Create a
//     third readonly tuple named userRecord that holds a number (user
//     ID), a string (username), and a boolean (active status). Initialize
//     it with the values 42, "admin", and true. Print all three readonly
//     tuples to the console on separate lines in the order they were created.

// Solution:
const startPoint: readonly [number, number] = [0, 0];
/* const [x, y] = startPoint; - when you destructure, the extracted variables
   (x, y) are just normal values. They don’t carry the readonly modifier —
   because you’re not destructuring into another tuple, you’re pulling out
   individual values. But if you wanted the destructured result itself to be
   readonly, you’d need to declare it explicitly like:
   const [x, y]: readonly [number, number] = [0, 0]; 
   but it's rare, usually unnecessary.
*/
const colorRGB: readonly [number, number, number] = [255, 128, 64];
// const [red, green, blue]: readonly [number, number, number] = [255, 128, 64];
const userRecord: readonly [number, string, boolean] = [42, "admin", true];
// const [userID, userName, activeStatus]: readonly [number, string, boolean] = [42, "admin", true];

console.log(startPoint);
console.log(colorRGB);
console.log(userRecord);

//============================== 05 =================================
// EN: Create a 2D array named gameGrid that can hold numbers and
//     initialize it as a 3x3 matrix with the following values:
//     First row: 1, 2, 3 Second row: 4, 5, 6 Third row: 7, 8, 9
//     Create another 2D array named chessBoard that can hold strings
//     and initialize it as a 2x2 matrix with the following values:
//     First row: "white", "black" Second row: "black", "white"
//     Access and print the element at the second row, first column
//     of the gameGrid array. Access and print the element at the
//     first row, second column of the chessBoard array. Print each
//     value on a separate line in the order specified above.

// Solution:
let gameGrid: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let chessBoard: string[][] = [
  ["white", "black"],
  ["black", "white"],
];

console.log(gameGrid[1][0]);
console.log(chessBoard[0][1]);

//============================== 06 =================================
// EN: Create two typed arrays: firstScores containing the numbers 85,
//     92, and 78, and secondScores containing the numbers 88, 95, and 82.
//     Use the spread operator to combine both arrays into a new array
//     called allScores. Create another typed array called bonusPoints
//     containing the numbers 5 and 10. Use the spread operator to create
//     a final array called finalScores that combines allScores with
//     bonusPoints, but also includes the individual number 100 at the
//     beginning and the number 90 at the end. Print the finalScores
//     array to the console.

// Solution:
let firstScores: number[] = [85, 92, 78];
let secondScores: number[] = [88, 95, 82];

let allScores: number[] = [...firstScores, ...secondScores];
let bonusPoints: number[] = [5, 10];
let finalScores: number[] = [100, ...allScores, ...bonusPoints, 90];

console.log(finalScores);

//============================== 07 =================================
// EN: Create a function named addToShoppingList that takes two parameters:
//     a tuple of type [string, number] representing an item (name and
//     quantity), and an array of strings representing the current shopping
//     list. The function should extract the item name from the tuple
//     and add it to the shopping list array. The function should return
//     the updated shopping list as a new array (without modifying the
//     original array). Test your function with the following data:
//     - Create a tuple named groceryItem with the values "apples" and 5;
//     - Create an array named currentList with the values ["bread",
//       "milk", "eggs"];
//     - Call your function with these parameters and store the result
//       in a variable named updatedList;
//     Print the updated shopping list to the console. Then test the
//     function again with:
//     - Create another tuple named bakeryItem with the values "cookies"
//       and 2;
//     - Call your function using the updatedList from the previous step
//       and the new bakeryItem;
//     - Store this result in a variable named finalList.
//     Print the final shopping list to the console.

// Solution:
function addToShoppingList(item: [string, number], list: string[]): string[] {
  const [name] = item; // через деструктуризацію берем тільки назву
  return [...list, name]; // додаєм назву до скопійованого листа щоб уникнути мутацію
}

const groceryItem: [string, number] = ["apples", 5];
const currentList: string[] = ["bread", "milk", "eggs"];

let updatedList = addToShoppingList(groceryItem, currentList);
console.log(updatedList);

const bakeryItem: [string, number] = ["cookies", 2];
let finalList = addToShoppingList(bakeryItem, updatedList);
console.log(finalList);

//============================== 08 =================================
// EN: Create a function named add that takes two parameters of type
//     number and returns their sum. The function must have an explicit
//     return type annotation of number. Create another function named
//     getFullName that takes two parameters: firstName of type string
//     and lastName of type string. The function should return the full
//     name as a single string with a space between the first and last
//     names. Add an explicit return type annotation of string. Create
//     a third function named isEligible that takes two parameters: age
//     of type number and hasLicense of type boolean. The function should
//     return true if the person is 18 or older AND has a license,
//     otherwise return false. Add an explicit return type annotation
//     of boolean. Test your functions by calling them with the following
//     values and printing the results:
//     - Call add with 15 and 27;
//     - Call getFullName with "John" and "Smith";
//     - Call isEligible with 20 and true;
//     - Call isEligible with 16 and true.
//     Print each result on a separate line in the order specified above.

// Solution:
function add(x: number, y: number): number {
  return x + y;
}

function getFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

function isEligible(age: number, hasLicense: boolean): boolean {
  return age >= 18 && hasLicense;
}

console.log(add(15, 27));
console.log(getFullName("John", "Smith"));
console.log(isEligible(20, true));
console.log(isEligible(16, true));

//============================== 09 =================================
// EN: Convert the following regular function declaration to an arrow
//     function while maintaining all type annotations:
//      function subtract(a: number, b: number): number {
//        return a - b;
//      }
//     Create an arrow function named subtract that performs the same
//     operation with the same parameter types and return type. Then
//     create two additional arrow functions:
//     1. An arrow function named createMessage that takes a parameter
//     text of type string and returns a string with the format
//     "Message: [text]". Include explicit type annotations for both
//     the parameter and return type.
//     2. An arrow function named isPositive that takes a parameter
//     num of type number and returns true if the number is greater
//     than 0, otherwise false. Include explicit type annotations for
//     both the parameter and return type. Test your arrow functions
//     by calling them with the following values and printing the results:
//     - Call subtract with 10 and 3;
//     - Call createMessage with "Hello World";
//     - Call isPositive with -5;
//     - Call isPositive with 8.
//     Print each result on a separate line in the order specified above.

// Solution:
const subtract = (a: number, b: number): number => {
  return a - b;
};

const createMessage = (text: string): string => {
  return `Message: ${text}`;
};

let isPositive = (num: number): boolean => {
  return num > 0;
};

console.log(subtract(10, 3));
console.log(createMessage("Hello World"));
console.log(isPositive(-5));
console.log(isPositive(8));

//============================== 10 =================================
// EN: Create a function named displayWelcome that takes a parameter
//     userName of type string and has an explicit return type of void.
//     The function should print a welcome message to the console in
//     the format: "Welcome to our application, [userName]!".
//     2. Create another function named logError that takes a parameter
//     errorMessage of type string and has an explicit return type of
//     void. The function should print an error message to the console
//     in the format: "ERROR: [errorMessage]".
//     3. Create a third function named processData that takes no
//     parameters and has an explicit return type of void. The function
//     should print the message "Processing data..." to the console,
//     then print "Data processing complete." on a new line.
//     Test your functions by calling them in the following order:
//     - Call displayWelcome with "Alice";
//     - Call processData with no arguments;
//     - Call logError with "Invalid input detected";
//     - Call displayWelcome with "Bob";
//     Each function call should produce output on separate lines in the
//     order specified above.

// Solution:
function displayWelcome(userName: string): void {
  console.log(`Welcome to our application, ${userName}!`);
}

function logError(errorMessage: string): void {
  console.log("ERROR:", errorMessage);
}

function processData(): void {
  console.log("Processing data...");
  console.log("Data processing complete.");
}

displayWelcome("Alice");
processData();
logError("Invalid input detected");
displayWelcome("Bob");

//============================== 11 =================================
// EN: 1. Create a function named createUserProfile that takes two parameters:
//     username of type string (required) and displayName of type string
//     (optional). The function should return a string with an explicit
//     return type annotation. When both parameters are provided, the function
//     should return: "Profile: [displayName] (@[username])". When only
//     the username is provided, the function should return: "Profile: @[username]".
//     2. Create another function named calculateDiscount that takes two
//     parameters: price of type number (required) and membershipLevel of
//     type string (optional). The function should return a number with
//     an explicit return type annotation. When both parameters are provided,
//     the function should return the price reduced by 10% (multiply by 0.9).
//     When only the price is provided, the function should return the
//     original price unchanged.
//     3. Test your functions by calling them with the following values
//     and printing the results:
//     - Call createUserProfile with "john_doe" and "John Doe";
//     - Call createUserProfile with only "jane_smith";
//     - Call calculateDiscount with 100 and "premium";
//     - Call calculateDiscount with only 75;
//     Print each result on a separate line in the order specified above.

// Solution:
function createUserProfile(username: string, displayName?: string): string {
  if (displayName) {
    return `Profile: ${displayName} (@${username})`;
  }

  return `Profile: @${username}`;
}

function calculateDiscount(price: number, membershipLevel?: string): number {
  if (membershipLevel) {
    return price * 0.9;
  }
  return price;
}

console.log(createUserProfile("john_doe", "John Doe"));
console.log(createUserProfile("jane_smith"));
console.log(calculateDiscount(100, "premium"));
console.log(calculateDiscount(75));

//============================== 12 =================================
// EN: 1. Create a function named calculateTax that takes two parameters:
//     price of type number (required) and rate of type number with a
//     default value of 0.05. The function should return the tax amount
//     as a number with an explicit return type annotation. The function
//     should calculate the tax by multiplying the price by the rate.
//     2. Create another function named formatGreeting that takes two
//     parameters: name of type string (required) and timeOfDay of type
//     string with a default value of "Hello". The function should return
//     a formatted greeting string with an explicit return type annotation.
//     The function should return the greeting in the format: "[timeOfDay], [name]!"
//     3. Create a third function named calculateShipping that takes three
//     parameters: weight of type number (required), distance of type number
//     (required), and expedited of type boolean with a default value of
//     false. The function should return the shipping cost as a number with
//     an explicit return type annotation. The function should calculate
//     shipping cost using this formula: (weight * 0.5) + (distance * 0.1).
//     If expedited is true, multiply the result by 2.
//     Test your functions by calling them with the following values and
//     printing the results:
//     - Call calculateTax with 100 (using default rate);
//     - Call calculateTax with 200 and 0.08;
//     - Call formatGreeting with "Alice"(using default time of day);
//     - Call formatGreeting with "Bob" and "Good morning";
//     - Call calculateShipping with 5 and 100 (using default expedited value);
//     - Call calculateShipping with 3, 50, and true;
//     Print each result on a separate line in the order specified above.

// Solution:
function calculateTax(price: number, rate: number = 0.05): number {
  return price * rate;
}

function formatGreeting(name: string, timeOfDay: string = "Hello"): string {
  return `${timeOfDay}, ${name}!`;
}

function calculateShipping(
  weight: number,
  distance: number,
  expedited: boolean = false,
): number {
  let shippingCost = weight * 0.5 + distance * 0.1;
  if (expedited) {
    return shippingCost * 2;
  }
  return shippingCost;
}

console.log(calculateTax(100)); // 5
console.log(calculateTax(200, 0.08)); // 16
console.log(formatGreeting("Alice")); // "Hello, Alice!"
console.log(formatGreeting("Bob", "Good morning")); // "Good morning, Bob!"
console.log(calculateShipping(5, 100)); // 15
console.log(calculateShipping(3, 50, true)); // 13

//============================== 13 =================================
// EN: Create a function named sumAll that uses rest parameters to accept
//     any number of numeric arguments and returns their sum as a number.
//     The function should have an explicit return type annotation.
//     2. Create another function named findMaximum that uses rest parameters
//     to accept any number of numeric arguments and returns the largest
//     value among them as a number. The function should have an explicit
//     return type annotation.
//     3. Create a third function named concatenateStrings that takes a
//     required separator parameter of type string, followed by rest parameters
//     that accept any number of string arguments. The function should return
//     all the string arguments joined together with the separator between them.
//     The function should have an explicit return type annotation of string.
//     4. Test your functions by calling them with the following values and
//     printing the results:
//     - Call sumAll with 5, 10, and 15;
//     - Call sumAll with 1, 2, 3, 4, and 5;
//     - Call findMaximum with 8, 3, 12, and 7;
//     - Call findMaximum with 25 and 18;
//     - Call concatenateStrings with "-" as separator and "apple", "banana", "cherry";
//     - Call concatenateStrings with " | " as separator and "red", "green", "blue", "yellow";
//     Print each result on a separate line in the order specified above.

// Solution:
function sumAll(...numbers: number[]): number {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

function findMaximum(...numbers: number[]): number {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

/* Альтернативою може служити такий підхід для масивів:
  const findMaximum = arr.reduce((max, current) => current > max ? current : max, arr[0]);
*/

function concatenateStrings(separator: string, ...strings: string[]): string {
  return strings.join(separator);
}

console.log(sumAll(5, 10, 15));
console.log(sumAll(1, 2, 3, 4, 5));
console.log(findMaximum(8, 3, 12, 7));
console.log(findMaximum(25, 18));
console.log(concatenateStrings("-", "apple", "banana", "cherry"));
console.log(concatenateStrings(" | ", "red", "green", "blue", "yellow"));

//============================== 14 =================================
// EN: 1. Create a type alias named StringProcessor for a function that
//     takes a single string parameter and returns a string. Create a
//     type alias named NumberCalculator for a function that takes two
//     number parameters and returns a number.
//     2. Create a type alias named BooleanChecker for a function that
//     takes a string parameter and returns a boolean. Now implement the
//     following functions that conform to these type aliases:
//     a) Create a function named toUpperCase of type StringProcessor
//       that converts the input string to uppercase;
//     b) Create a function named addPrefix of type StringProcessor
//     that adds the prefix "Processed: " to the input string;
//     c) Create a function named divide of type NumberCalculator that
//        divides the first number by the second number;
//     d) Create a function named power of type NumberCalculator that
//       raises the first number to the power of the second number (useMath.pow);
//     e) Create a function named isEmpty of type BooleanChecker that
//        returns true if the string has length 0, otherwise false;
//     f) Create a function named startsWithA of type BooleanChecker
//        that returns true if the string starts with the letter "A"
//        (case-sensitive), otherwise false;
//     Test your functions by calling them with the following values
//     and printing the results:
//     - Call toUpperCase with "hello world";
//     - Call addPrefix with "data";
//     - Call divide with 20 and 4;
//     - Call power with 3 and 4;
//     - Call isEmpty with "";
//     - Call startsWithA with "Apple";
//     Print each result on a separate line in the order specified above.

// Solution:
type StringProcessor = (str: string) => string;
type NumberCalculator = (a: number, b: number) => number;
type BooleanChecker = (str: string) => boolean;

const toUpperCase: StringProcessor = (str) => str.toUpperCase();
const addPrefix: StringProcessor = (str) => "Processed: " + str;
const divide: NumberCalculator = (x, y) => x / y;
const power: NumberCalculator = (x, y) => Math.pow(x, y);
const isEmpty: BooleanChecker = (str) => str.length === 0;
const startsWithA: BooleanChecker = (str) => str.startsWith("A");

console.log(toUpperCase("hello world"));
console.log(addPrefix("data"));
console.log(divide(20, 4));
console.log(power(3, 4));
console.log(isEmpty(""));
console.log(startsWithA("Apple"));

//============================== 15 =================================
// EN: Create a function named formatName that takes three parameters:
//     firstName of type string (required), lastName of type string
//     (required), and middleName of type string (optional). The function
//     should return a formatted full name as a string with an explicit
//     return type annotation. When all three parameters are provided,
//     the function should return the name in the format: "[firstName]
//     [middleName] [lastName]". When only the first and last names are
//     provided, the function should return the name in the format:
//     "[firstName] [lastName]". The following inputs will be provided:
//     - First input: firstName as a string;
//     - Second input: lastName as a string;
//     - Third input: middleName as a string (this may be an empty
//       string "" to indicate no middle name).
//     Your function should treat an empty string for middleName the same
//     as if no middle name was provided. Read the three inputs, call your
//     formatName function with the appropriate parameters, and print the
//     result. Note: If the third input is an empty string, call the function
//     with only the first two parameters (do not pass the empty string as
//     the middle name).

// Solution:
function formatName1(
  firstName: string,
  lastName: string,
  middleName?: string,
): string {
  if (middleName && middleName.trim() !== "") {
    return `${firstName} ${middleName} ${lastName}`;
  }
  return `${firstName} ${lastName}`;
}

console.log(formatName1("Michael", "Brown"));
console.log(formatName1("Emma", "Wilson", "Grace"));

// solution via ternary operator:
function formatName2(
  firstName: string,
  lastName: string,
  middleName?: string,
): string {
  return middleName && middleName.trim() !== ""
    ? `${firstName} ${middleName} ${lastName}`
    : `${firstName} ${lastName}`;
}

//  мжжна перевірити результат викликом функції з різною кількістю аргументів:
const firstName: string = "Alice";
const lastName: string = "Smith";
const middleName: string = "Marie";

let result: string;
if (middleName && middleName.trim() !== "") {
  result = formatName2(firstName, lastName, middleName);
} else {
  result = formatName2(firstName, lastName);
}
console.log(result);

//============================== 16 =================================
// EN: 1. Create a type alias named UserID for a union type that can
//     be either a string or a number.
//     2. Create a type alias named Priority for a union type that can
//     be either a string or a boolean.
//     3. Create a type alias named Status for the string type.
//     Now declare the following variables using your type aliases:
//     - Declare a variable named currentUser of type UserID and assign
//     it the string value "admin123";
//     - Declare a variable named guestUser of type UserID and assign
//       it the number value 42;
//     - Declare a variable named taskPriority of type Priority and
//       assign it the string value "high";
//     - Declare a variable named isUrgent of type Priority and assign it
//       the boolean value true;
//     - Declare a variable named orderStatus of type Status and assign
//       it the string value "pending";
//     Print each variable's value on a separate line in the order they
//     were declared above.

// Solution:
// визначаєм псевдоніми для типів
type UserID = string | number;
type Priority = string | boolean;
type Status = string;
// визначаємо змінні
const currentUser: UserID = "admin123";
const guestUser: UserID = 42;
const taskPriority: Priority = "high";
const isUrgent: Priority = true;
const orderStatus: Status = "pending";
// виводимо результати в консоль
console.log(currentUser); // admin123
console.log(guestUser); // 42
console.log(taskPriority); // high
console.log(isUrgent); // true
console.log(orderStatus); // pending

//============================== 17 =================================
// EN: 1. Create a function named printId that accepts a parameter called
//     id of type string | number and prints it to the console. The function
//     should have an explicit return type of void.
//     2. Create another function named processValue that accepts a parameter
//     called data of type boolean | string and returns it unchanged. The
//     function should have an explicit return type of boolean | string.
//     3. Create a third function named formatOutput that accepts a parameter
//     called input of type number | string and returns a formatted string. If
//     the input is a number, return "Number: [input]". If the input is a string,
//     return "Text: [input]". The function should have an explicit return type
//     of string. The following inputs will be provided:
//     - First input: a value that can be either a string or number(for printId);
//     - Second input: a value that can be either a boolean or string (for processValue);
//     - Third input: a value that can be either a number or string (for formatOutput);
//     Read the three inputs, call each function with the appropriate input,
//     and handle the outputs as follows:
//     - Call printId with the first input (this will print directly);
//     - Call processValue with the second input and print the returned value
//     - Call formatOutput with the third input and print the returned value
//     Note: The first input will be provided as a string, but if it represents
//     a number (like "123"), convert it to a number before passing it to printId.
//     The second input will be provided as a string, but if it's "true" or "false",
//     convert it to the corresponding boolean value. The third input will be provided
//     as a string, but if it represents a number, convert it to a number.

// Solution:
function printId(id: string | number): void {
  console.log(id);
}

function processValue(data: boolean | string): boolean | string {
  return data;
}

function formatOutput(input: number | string): string {
  return typeof input === "number" ? `Number: ${input}` : `Text: ${input}`;
}

let input1 = "hello";
let input2 = false;
let input3 = "world";
printId(input1); // hello
console.log(processValue(input2)); // false
console.log(formatOutput(input3)); // Text: world
let input4 = 0;
let input5 = true;
let input6 = 0;
printId(input4); // 0
console.log(processValue(input5)); // true
console.log(formatOutput(input6)); // Number: 0

//============================== 18 =================================
// EN: 1. Create a function named processData that accepts a parameter
//     called input of type string | string[] and returns a number. The
//     function should use a type guard to determine the input type and
//     behave as follows:
//     - If the input is a string, return its length
//     - If the input is a string[], return the total number of
//       characters across all strings in the array
//     2. Create another function named formatMessage that accepts a
//     parameter called content of type number | boolean and returns a
//     string. The function should use a type guard to determine the
//     input type and behave as follows:
//     - If the input is a number, return "Value: [number]";
//     - If the input is a boolean, return "Status: [boolean]";
//     The following inputs will be provided:
//     - First input: a string that represents either a single word
//       or a JSON array of strings like ["apple", "banana", "cherry"];
//     - Second input: a string that represents either a number or a
//       boolean ("true" or "false")
//     Process the inputs as follows:
//     - For the first input: if it starts with "[", parse it as a
//       JSON array of strings; otherwise, treat it as a single string;
//     - For the second input: if it's "true" or "false", convert it
//       to a boolean; otherwise, convert it to a number.
//     3. Call processData with the processed first input and print the
//     result. Then call formatMessage with the processed second input
//     and print the result.

// Solution:
// Створюємо функцію processData з захистом на перевірку типів
function processData2(input: string | string[]): number {
  if (typeof input === "string") {
    return input.length;
  } else {
    return input.reduce((acc, str) => acc + str.length, 0);
  }
}
// Створюємо функцію formatMessage з захистом на перевірку типів
function formatMessage(content: number | boolean): string {
  if (typeof content === "number") {
    return `Value: ${content}`;
  } else {
    return `Status: ${content}`;
  }
}

// Обробляємо inputs у відповідності до вимог задачі aле це тут не зовсім підходить
// const processedFirstInput: string | string[] = firstInput.startsWith("[")
//   ? JSON.parse(firstInput)
//   : firstInput;

// const processedSecondInput: number | boolean =
//   secondInput === "true"
//     ? true
//     : secondInput === "false"
//       ? false
//       : Number(secondInput);

// задамо дані для перевірки:
let firstInput = "hello";
let secondInput = 42;
console.log(processData2(firstInput));
console.log(formatMessage(secondInput));

let firstInput2 = ["Mario", "Keller"];
let secondInput2 = false;
console.log(processData2(firstInput2));
console.log(formatMessage(secondInput2));

let firstInput3 = ["x", "y", "z"];
let secondInput3 = true;
console.log(processData2(firstInput3));
console.log(formatMessage(secondInput3));

//============================== 19 =================================
// EN: Create a type alias named Direction for the literal types
//     "left" | "right" | "up" | "down". Create a type alias named GameState
//     for the literal types "menu" | "playing" | "paused" | "gameover".
//     Create a type alias named Difficulty for the literal types
//     "easy" | "medium" | "hard". Now declare the following variables
//     using your type aliases:
//     - Declare a variable named playerDirection of type Direction and
//       assign it the value "up";
//     - Declare a variable named currentState of type GameState and assign
//       it the value "playing";
//     - Declare a variable named selectedDifficulty of type Difficulty
//       and assign it the value "medium";
//     1. Create a function named movePlayer that accepts a parameter called
//     direction of type Direction and returns a string. The function should
//     return a message in the format "Moving [direction]".
//     2. Create another function named updateGameState that accepts a parameter
//     called state of type GameState and returns a string. The function should
//     return a message in the format "Game state: [state]". Call your functions
//     with the variables you created and print the results:
//     - Call movePlayer with playerDirection and print the result;
//     - Call updateGameState with currentState and print the result;
//     Print the value of selectedDifficulty;
//     Print each result on a separate line in the order specified above.

// Solution: - Literal Types-
// Type aliases
type Direction = "left" | "right" | "up" | "down";
type GameState = "menu" | "playing" | "paused" | "gameover";
type Difficulty = "easy" | "medium" | "hard";

const playerDirection: Direction = "up";
const currentState: GameState = "playing";
const selectedDifficulty: Difficulty = "medium";

function movePlayer(direction: Direction): string {
  return `Moving ${direction}`;
}

function updateGameState(state: GameState): string {
  return `Game state: ${state}`;
}

console.log(movePlayer(playerDirection)); // Moving up
console.log(updateGameState(currentState)); // Game state: playing
console.log(selectedDifficulty); // medium

//============================== 20 =================================
// EN: Create two type aliases: HasName for an object with a name property
//     of type string, and HasAge for an object with an age property of
//     type number. Create a third type alias called Person by intersecting
//     HasName and HasAge using the & operator. Create another type alias
//     called HasEmail for an object with an email property of type string.
//     Create a fourth type alias called Employee by intersecting all three
//     types: HasName, HasAge, and HasEmail. Now create the following variables:
//     - Create a variable named user of type Person with the name "Alice"
//       and age 25;
//     - Create a variable named worker of type Employee with the name "Bob",
//       age 30, and email "bob@company.com";
//     - Create a function named displayPerson that accepts a parameter of
//       type Person and returns a string in the format "Name: [name], Age: [age]";
//     - Create another function named displayEmployee that accepts a parameter
//       of type Employee and returns a string in the format "Name: [name],
//       Age: [age], Email: [email]".
//     Call both functions with the appropriate variables and print the
//     results on separate lines.

// Solution: -Intersection Types ('&')-
type HasName = { name: string };
type HasAge = { age: number };
type HasEmail = { email: string };

type Person = HasName & HasAge;
type Employee = HasName & HasAge & HasEmail;

const user: Person = {
  name: "Alice",
  age: 25,
};
const worker: Employee = {
  name: "Bob",
  age: 30,
  email: "bob@company.com",
};

function displayPerson(person: Person): string {
  return `Name: ${person.name}, Age: ${person.age}`;
}
function displayEmployee(employee: Employee): string {
  return `Name: ${employee.name}, Age: ${employee.age}, Email: ${employee.email}`;
}
// Call the functions and print the results
console.log(displayPerson(user));
console.log(displayEmployee(worker));

//============================== 21 =================================
// EN: Create a type alias named Username for the string type. Create
//     a type alias named UserAge for the number type. Create a type
//     alias named ContactMethod that combines Username and UserAge
//     using a union type. Create a type alias named UserProfile for
//     an object with the following properties:
//     - id of type number;
//     - displayName of type Username;
//     - preferredContact of type ContactMethod;
//     Create a type alias named AdminProfile that combines UserProfile
//     with an additional object type containing a permissions property
//     of type string using intersection types.
//     Now create the following variables:
//     1. Create a variable named regularUser of type UserProfile with id 1,
//       displayName "john_doe", and preferredContact "john_doe". Create a
//       variable named systemAdmin of type AdminProfile with id 2, displayName
//       "admin", preferredContact 25, and permissions "full_access";
//     2. Create a function named getContactInfo that accepts a parameter
//       called contact of type ContactMethod and returns a string. Use
//       a type guard to check the type and return:
//       - If it's a string: "Contact: [contact]";
//       - If it's a number: "Age: [contact]";
//     Print the following outputs on separate lines:
//     - Call getContactInfo with regularUser.preferredContact and print the result;
//     - Call getContactInfo with systemAdmin.preferredContact and print the result;
//     Print systemAdmin.permissions.

// Solution: - Combining Type Aliases -
type Username = string;
type UserAge = number;
type ContactMethod = Username | UserAge;

type UserProfile = {
  id: number;
  displayName: Username;
  preferredContact: ContactMethod;
};

type AdminProfile = UserProfile & { permissions: string };

const regularUser: UserProfile = {
  id: 1,
  displayName: "john_doe",
  preferredContact: "john_doe",
};

const systemAdmin: AdminProfile = {
  id: 2,
  displayName: "admin",
  preferredContact: 25,
  permissions: "full_access",
};

function getContactInfo(contact: ContactMethod): string {
  if (typeof contact === "string") {
    return `Contact: ${contact}`;
  } else {
    return `Age: ${contact}`;
  }
}

console.log(getContactInfo(regularUser.preferredContact)); // Contact: john_doe
console.log(getContactInfo(systemAdmin.preferredContact)); // Age: 25
console.log(systemAdmin.permissions); // full_access

//============================== 22 =================================
// EN: 1. Create a type alias named Success for an object with a status
//     property of literal type "success" and a data property of type any.
//     Create a type alias named Failure for an object with a status
//     property of literal type "error" and a message property of type
//     string.
//     2. Create a type alias named Result that is a union of the Success
//     and Failure types.
//     3. Create a function named processResult that accepts a parameter
//     called result of type Result and returns a string. The function
//     should use a type guard on the status property to determine the
//     result type and behave as follows:
//     - If the status is "success", return "Operation successful: [data]";
//     - If the status is "error", return "Operation failed: [message]";
//     4. Create another function named handleApiResponse that accepts
//     a parameter called response of type Result and returns a boolean.
//     The function should return true if the operation was successful and
//     false if it failed.
//     - Call processResult with the first parsed result and print the returned string;
//     - Call handleApiResponse with the first parsed result and print the returned boolean;
//     - Call processResult with the second parsed result and print the returned string;
//     - Call handleApiResponse with the second parsed result and print the returned boolean.

// Solution:
type Success = {
  status: "success";
  data: any;
};
type Failure = {
  status: "error";
  message: string;
};
type Result = Success | Failure;

function processResult(result: Result): string {
  if (result.status === "success") {
    return `Operation successful: ${result.data}`;
  } else {
    return `Operation failed: ${result.message}`;
  }
}

function handleApiResponse(response: Result): boolean {
  return response.status === "success";
}
console.log(processResult({ status: "success", data: "User created" }));
console.log(handleApiResponse({ status: "success", data: "User created" }));
console.log(processResult({ status: "error", message: "Invalid credentials" }));
console.log(
  handleApiResponse({ status: "error", message: "Invalid credentials" }),
);
console.log(processResult({ status: "error", message: "Network timeout" }));
console.log(handleApiResponse({ status: "error", message: "Network timeout" }));
console.log(processResult({ status: "success", data: "Login successful" }));
console.log(handleApiResponse({ status: "success", data: "Login successful" }));

//============================== 23 =================================
// EN: Create a variable named student with an inline object type annotation
//     that defines the following structure:
//     - name property of type string;
//     - studentId property of type number;
//     - isEnrolled property of type boolean;
//     Assign the variable the following values:
//     - name: "Sarah Johnson";
//     - studentId: 12345;
//     - isEnrolled: true.
//     Create another variable named course with an inline object type
//     annotation that defines the following structure:
//     - title property of type string;
//     - credits property of type number;
//     - instructor property of type string;
//     Assign the variable the following values:
//     - title: "Introduction to TypeScript";
//     - credits: 3;
//     - instructor: "Dr. Smith";
//     Print the following information on separate lines:
//     - The student's name;
//     - The student's ID';
//     - The course title;
//     - The number of credits.

// Solution:
const student: { name: string; studentId: number; isEnrolled: boolean } = {
  name: "Sarah Johnson",
  studentId: 12345,
  isEnrolled: true,
};

const course: { title: string; credits: number; instructor: string } = {
  title: "Introduction to TypeScript",
  credits: 3,
  instructor: "Dr. Smith",
};

console.log(student.name); // Sarah Johnson
console.log(student.studentId); // 12345
console.log(course.title); // Introduction to TypeScript
console.log(course.credits); // 3

//============================== 24 =================================
// EN: Create a type alias named Book for an object with the following
//     properties: - title of type string; - author of type string;
//     -pages of type number; - isAvailable of type boolean.
//     Create a type alias named Movie for an object with the following
//     properties:
//     - title of type string;
//     - director of type string;
//     - duration of type number;
//     - rating of type string;
//     Using your type aliases, create the following variables:
//     - Create a variable named novel of type Book with title "The Great
//       Gatsby", author "F. Scott Fitzgerald", pages 180, and isAvailable true;
//     - Create a variable named textbook of type Book with title "TypeScript
//       Handbook", author "Microsoft", pages 450, and isAvailable false;
//     - Create a variable named film of type Movie with title "Inception",\
//       director "Christopher Nolan", duration 148, and rating "PG-13";
//     - Create a function named getBookInfo that accepts a parameter of type
//       Book and returns a string in the format "[title] by [author] - [pages] pages".
//     - Create a function named getMovieInfo that accepts a parameter of type
//       Movie and returns a string in the format "[title] directed by [director]
//       ([duration] min)".
//     Print the following outputs on separate lines:
//     - Call getBookInfo with novel and print the result;
//     - Call getBookInfo with textbook and print the result;
//     - Call getMovieInfo with film and print the result;
//     Print the availability status of novel (the isAvailable property).

// Solution:
type Book = {
  title: string;
  author: string;
  pages: number;
  isAvailable: boolean;
};

type Movie = {
  title: string;
  director: string;
  duration: number;
  rating: string;
};

const novel: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 180,
  isAvailable: true,
};

const textbook: Book = {
  title: "TypeScript Handbook",
  author: "Microsoft",
  pages: 450,
  isAvailable: false,
};

const film: Movie = {
  title: "Inception",
  director: "Christopher Nolan",
  duration: 148,
  rating: "PG-13",
};

function getBookInfo(book: Book): string {
  return `${book.title} by ${book.author} - ${book.pages} pages`;
}

function getMovieInfo(movie: Movie): string {
  return `${movie.title} directed by ${movie.director} (${movie.duration} min)`;
}

console.log(getBookInfo(novel)); // The Great Gatsby by F. Scott Fitzgerald - 180 pages
console.log(getBookInfo(textbook)); // TypeScript Handbook by Microsoft - 450 pages
console.log(getMovieInfo(film)); // Inception directed by Christopher Nolan (148 min)
console.log(novel.isAvailable); // true

//============================== 25 =================================
// EN: Create an interface named Pet with the following properties:
//     - name of type string;
//     - species of type string;
//     - age of type number;
//     - isVaccinated of type boolean.
//     Create an interface named Vehicle with the following properties:
//     - make of type string;
//     - model of type string;
//     - year of type number.
//     - Using your interfaces, create the following variables:
//     Create a variable named myDog of type Pet with name "Buddy", species
//     "Golden Retriever", age 3, and isVaccinated true;
//     Create a variable named myCat of type Pet with name "Whiskers",
//     species "Persian", age 2, and isVaccinated false;
//     Create a variable named myCar of type Vehicle with make "Toyota",
//     model "Camry", and year 2022;
//     Create a function named describePet that accepts a parameter of type
//     Pet and returns a string in the format "[name] is a [age]-year-old [species]".
//     Create a function named getVehicleInfo that accepts a parameter of type
//     Vehicle and returns a string in the format "[year] [make] [model]".
//     Print the following outputs on separate lines:
//     - Call describePet with myDog and print the result;
//     - Call describePet with myCat and print the result;
//     - Call getVehicleInfo with myCar and print the result;
//     Print the vaccination status of myDog (the isVaccinated property).

// Solution: - Introduction to Interfaces -
interface Pet {
  name: string;
  species: string;
  age: number;
  isVaccinated: boolean;
}
interface Vehicle {
  make: string;
  model: string;
  year: number;
}

let myDog: Pet = {
  name: "Buddy",
  species: "Golden Retriever",
  age: 3,
  isVaccinated: true,
};
let myCat: Pet = {
  name: "Whiskers",
  species: "Persian",
  age: 2,
  isVaccinated: false,
};
let myCar: Vehicle = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
};

function describePet(pet: Pet): string {
  return `${pet.name} is a ${pet.age}-year-old ${pet.species}`;
}
function getVehicleInfo(vehicle: Vehicle): string {
  return `${vehicle.year} ${vehicle.make} ${vehicle.model}`;
}

console.log(describePet(myDog));
console.log(describePet(myCat));
console.log(getVehicleInfo(myCar));
console.log(myDog.isVaccinated);

//============================== 26 =================================
// UA: Коли застосовувати псевдоніми типів а коли інтерфейси?
// EN: When should you prefer a type alias over an interface?

/*Solution:
Існують ключові відмінності між псевдонімами типів та інтерфейсами, які 
  можуть вплинути на ваш вибір.
Схожість: Як інтерфейси, так і псевдоніми типів можуть визначати структуру
  об'єктів з однаковим рівнем безпеки типів. Ви можете використовувати будь-який
  підхід для визначення обов'язкових властивостей, необов'язкових властивостей
  та властивостей лише для читання. Обидва також підтримують розширення або 
  поєднання з іншими типами.
Ключова різниця – об’єднання оголошень: Найбільш суттєва відмінність 
  полягає в тому, що інтерфейси підтримують об’єднання оголошень, тоді
  як псевдоніми типів – ні. Це означає, що ви можете оголосити один і 
  той самий інтерфейс кілька разів, і TypeScript автоматично об’єднає 
  всі оголошення в один інтерфейс:

  interface User {
    name: string;
  }

  interface User {
    age: number;
  }

 TypeScript merges these into:
  interface User {
    name: string;
    age: number;
  }
  
  Якщо ви спробуєте той самий підхід з псевдонімами типів, TypeScript
  викличе помилку про дублікати ідентифікаторів. Ця можливість об'єднання
  робить інтерфейси особливо корисними під час роботи з бібліотеками або
  коли вам потрібно розширити існуючі визначення типів на різні частини 
  вашої кодової бази.
  Коли вибирати: Використовуйте інтерфейси під час визначення форм об'єктів,
  які, можливо, потребуватимуть розширення або об'єднання пізніше. 
  Використовуйте псевдоніми типів, коли вам потрібні складніші операції з
  типами, такі як об'єднання, перетини або під час роботи з примітивними 
  типами.
  Отже:
  a) Interfaces are best when you want:
  • 	Automatic merging behavior (declaration merging across files or scopes).
  • 	Extending definitions easily, especially in libraries or large projects.
  • 	Defining object shapes that may evolve or be extended by consumers.
  b) Type aliases shine when you need:
  • 	Unions or intersections (type Result = Success | Failure).
  • 	Primitive types or tuples (type Age = number; type Point = [number, number]).
  • 	More flexibility in combining different kinds of types beyond just object shapes.

  Ось відмінність в синатаксисі:

  1. Using an interface:
              interface Pet {
                  name: string;
                  species: string;
                  age: number;
                  isVaccinated: boolean;
              }

2. Using a type alias:
              type PetAlias = {
                  name: string;
                  species: string;
                  age: number;
                  isVaccinated: boolean;
              };
*/

//============================== 27 =================================
// EN: Create an interface named Book with the following properties:
//     - title of type string (required);
//     - isbn of type string (readonly);
//     - subtitle of type string (optional);
//     - pages of type number (required);
//     - publishedYear of type number (readonly);
//     - genre of type string (optional);
//     Create an interface named Magazine with the following properties:
//     - name of type string (required);
//     - issueNumber of type number (readonly);
//     - topic of type string (optional);
//     - monthlySubscription of type boolean (required);
//     Using your interfaces, create the following variables:
//     1. Create a variable named novel of type Book with title "1984",
//        isbn "978-0-452-28423-4", pages 328, and publishedYear 1949.
//     2. Create a variable named cookbook of type Book with title "The
//        Joy of Cooking", isbn "978-0-7432-4626-2", subtitle "All About
//        Baking", pages 1132, publishedYear 2006, and genre "Cooking".
//     3. Create a variable named techMag of type Magazine with name
//        "Tech Today", issueNumber 45, and monthlySubscription true;
//     4. Create a variable named scienceMag of type Magazine with name
//        "Science Weekly", issueNumber 12, topic "Climate Change",
//        and monthlySubscription false;
//     5. Create a function named getBookDetails that accepts a parameter
//        of type Book and returns a string. The function should return
//        the book's title and pages in the format "[title] - [pages] pages".
//     6. Create a function named getMagazineInfo that accepts a parameter
//        of type Magazine and returns a string. The function should return
//        the magazine's name and issue number in the format "[name] Issue #[issueNumber]".
//     Print the following outputs on separate lines:
//     - Call getBookDetails with novel and print the result;
//     - Call getBookDetails with cookbook and print the result;
//     - Call getMagazineInfo with techMag and print the result;
//     - Call getMagazineInfo with scienceMag and print the result;
//     Print the ISBN of novel. Print the subscription status of techMag
//     (the monthlySubscription property).

// Solution:
interface Book2 {
  title: string;
  readonly isbn: string;
  subtitle?: string;
  pages: number;
  readonly publishedYear: number;
  genre?: string;
}
interface Magazine {
  name: string;
  readonly issueNumber: number;
  topic?: string;
  monthlySubscription: boolean;
}

let novel2: Book2 = {
  title: "1984",
  isbn: "978-0-452-28423-4",
  pages: 328,
  publishedYear: 1949,
};
let cookbook: Book2 = {
  title: "The Joy of Cooking",
  isbn: "978-0-7432-4626-2",
  subtitle: "All About Baking",
  pages: 1132,
  publishedYear: 2006,
  genre: "Cooking",
};
let techMag: Magazine = {
  name: "Tech Today",
  issueNumber: 45,
  monthlySubscription: true,
};
let scienceMag: Magazine = {
  name: "Science Weekly",
  issueNumber: 12,
  topic: "Climate Change",
  monthlySubscription: false,
};

function getBookDetails(book: Book2): string {
  return `${book.title} - ${book.pages} pages`;
}
function getMagazineInfo(magazine: Magazine): string {
  return `${magazine.name} Issue #${magazine.issueNumber}`;
}

console.log(getBookDetails(novel2));
console.log(getBookDetails(cookbook));
console.log(getMagazineInfo(techMag));
console.log(getMagazineInfo(scienceMag));
console.log(novel2.isbn);
console.log(techMag.monthlySubscription);

//============================== 28 =================================
// EN: Create a base interface named Employee with the following properties:
//     - id of type number;
//     - name of type string;
//     - department of type string;
//     Create an interface named Manager that extends Employee and adds
//     the following properties: - teamSize of type number; - budget of
//     type number.
//     1. Create a type alias named Contact with the following properties:
//     - email of type string;
//     - phone of type string;
//     2. Create a type alias named Developer using intersection types that
//     combines Employee and Contact, and adds the following properties:
//     - programmingLanguages of type string[];
//     - yearsExperience of type number;
//     Using your interfaces and types, create the following variables:
//     1. Create a variable named teamLead of type Manager with id 101,
//        name "Alice Johnson", department "Engineering", teamSize 8,
//        and budget 250000;
//     2. Create a variable named softwareDev of type Developer with id 102,
//        name "Bob Smith", department "Engineering", email "bob.smith@company.com",
//        phone "555-0123", programmingLanguages ["TypeScript", "Python", "Java"],
//        and yearsExperience 5;
//     3. Create a function named getManagerSummary that accepts a parameter
//        of type Manager and returns a string in the format "[name] manages
//        [teamSize] people with a budget of $[budget]".
//     4. Create a function named getDeveloperSkills that accepts a parameter
//        of type Developer and returns a string in the format "[name] knows
//        [programmingLanguages joined with ', '] ([yearsExperience] years
//        experience)".
//     Print the following outputs on separate lines:
//     - Call getManagerSummary with teamLead and print the result;
//     - Call getDeveloperSkills with softwareDev and print the result;
//     Print the department of teamLead. Print the email of softwareDev.

// Solution: - interface extension and intersection type aliases -
interface Employee2 {
  id: number;
  name: string;
  department: string;
}
// Create the Manager interface that extends Employee
interface Manager extends Employee2 {
  teamSize: number;
  budget: number;
}
// Create the Contact type alias
type Contact = {
  email: string;
  phone: string;
};
// Create the Developer type alias using intersection types
type Developer = Employee2 &
  Contact & {
    programmingLanguages: string[];
    yearsExperience: number;
  };
// Create the teamLead variable of type Manager
const teamLead: Manager = {
  id: 101,
  name: "Alice Johnson",
  department: "Engineering",
  teamSize: 8,
  budget: 250000,
};
// Create the softwareDev variable of type Developer
const softwareDev: Developer = {
  id: 102,
  name: "Bob Smith",
  department: "Engineering",
  email: "bob.smith@company.com",
  phone: "555-0123",
  programmingLanguages: ["TypeScript", "Python", "Java"],
  yearsExperience: 5,
};

function getManagerSummary(manager: Manager): string {
  return `${manager.name} manages ${manager.teamSize} people with a budget of $${manager.budget}`;
}
function getDeveloperSkills(developer: Developer): string {
  return `${developer.name} knows ${developer.programmingLanguages.join(", ")} (${developer.yearsExperience} years experience)`;
}

console.log(getManagerSummary(teamLead));
console.log(getDeveloperSkills(softwareDev));
console.log(teamLead.department);
console.log(softwareDev.email);

//============================== 29 =================================
// EN: Create an interface named Calculator with the following properties
//     and methods:
//     - brand of type string;
//     - model of type string;
//     - isScientific of type boolean;
//     - add method that takes two number parameters and returns a number;
//     getInfo method that takes no parameters and returns a string
//     Create an interface named BankAccount with the following properties
//     and methods:
//     - accountNumber of type string;
//     - balance of type number;
//     - isActive of type boolean;
//     - deposit method that takes a number parameter and returns void;
//     - getBalance method that takes no parameters and returns a number;
//     Using your interfaces, create the following variables:
//     - Create a variable named myCalculator of type Calculator with brand
//       "Casio", model "FX-991EX", isScientific true, an add method that
//       returns the sum of its two parameters, and a getInfo method that
//       returns "[brand] [model]".
//     - Create a variable named savingsAccount of type BankAccount with
//       accountNumber "SAV-12345", balance 1500, isActive true, a deposit
//       method that adds the parameter to the balance, and a getBalance
//       method that returns the current balance;
//       Print the following outputs on separate lines:
//       - Call the getInfo method on myCalculator and print the result;
//       - Call the add method on myCalculator with arguments 15 and 27,
//         and print the result;
//       - Call the getBalance method on savingsAccount and print the result;
//       -Call the deposit method on savingsAccount with argument 250
//       - Call the getBalance method on savingsAccount again and print the result
//       Print the isScientific property of myCalculator.

// Solution:
interface Calculator {
  brand: string;
  model: string;
  isScientific: boolean;
  add(a: number, b: number): number;
  getInfo(): string;
}
/* with arrow function variant:
  interface Calculator {
    brand: string;
    model: string;
    isScientific: boolean;
    add: (a: number, b: number) => number;
    getInfo: () => string;
  }
*/
interface BankAccount {
  accountNumber: string;
  balance: number;
  isActive: boolean;
  deposit(num: number): void;
  getBalance(): number;
}
/* with arrow function variant:
  interface BankAccount {
    accountNumber: string;
    balance: number;
    isActive: boolean;
    deposit: (amount: number) => void;
    getBalance: () => number;
  }
*/

let myCalculator: Calculator = {
  brand: "Casio",
  model: "FX-991EX",
  isScientific: true,
  add(a, b) {
    return a + b;
  },
  getInfo() {
    return `${this.brand} ${this.model}`;
  },
};
/* with arrow function variant:
  const myCalculator: Calculator = {
    brand: "Casio",
    model: "FX-991EX",
    isScientific: true,
    add: (a, b) => a + b,
    getInfo: () => `${myCalculator.brand} ${myCalculator.model}`
  };
*/

let savingsAccount: BankAccount = {
  accountNumber: "SAV-12345",
  balance: 1500,
  isActive: true,
  deposit(x) {
    this.balance += x;
  },
  getBalance() {
    return this.balance;
  },
};
/* with arrow function variant:
  iconst savingsAccount: BankAccount = {
    accountNumber: "SAV-12345",
    balance: 1500,
    isActive: true,
    deposit: amount => { savingsAccount.balance += amount; },
    getBalance: () => savingsAccount.balance
  };
*/

console.log(myCalculator.getInfo());
console.log(myCalculator.add(15, 27));
console.log(savingsAccount.getBalance());
savingsAccount.deposit(250);
console.log(savingsAccount.getBalance());
console.log(myCalculator.isScientific);

//============================== 30 =================================
// EN: 1. Create an interface named Computer with the following properties
//     and methods:
//     - id of type number (readonly);
//     - brand of type string;
//     - ramInGB of type number (optional);
//     - isLaptop of type boolean;
//     - boot method that takes no parameters and returns void;
//     2. Create an interface named Server with the following properties
//     and methods:
//     - hostname of type string (readonly);
//     - operatingSystem of type string;
//     - maxConnections of type number (optional);
//     - isOnline of type boolean;
//     - restart method that takes no parameters and returns void;
//     - getStatus method that takes no parameters and returns a string;
//     Using your interfaces, create the following variables:
//     3. Create a variable named workstation of type Computer with id 1001,
//     brand "Dell", ramInGB 16, isLaptop false, and a boot method that prints
//     "Dell workstation is booting up..."
//     4. Create a variable named laptop of type Computer with id 1002, brand
//     "MacBook", isLaptop true, and a boot method that prints "MacBook laptop
//     is starting..."
//     5. Create a variable named webServer of type Server with hostname "web-01",
//     operatingSystem "Ubuntu", maxConnections 1000, isOnline true, a restart
//     method that prints "Restarting web-01 server...", and a getStatus method
//     that returns "web-01 is online".
//     6, Create a function named checkComputerSpecs that accepts a parameter of
//     type Computer and returns a string. The function should return the computer's
//     brand and type in the format "[brand] [laptop/desktop]" (use "laptop" if
//     isLaptop is true, otherwise use "desktop").
//     7. Create a function named getServerInfo that accepts a parameter of type
//     Server and returns a string in the format "[hostname] runs [operatingSystem]".
//     Print the following outputs on separate lines:
//     - Call the boot method on workstation;
//     - Call the boot method on laptop;
//     - Call checkComputerSpecs with workstation and print the result;
//     - Call checkComputerSpecs with laptop and print the result;
//     - Call the getStatus method on webServer and print the result;
//     - Call getServerInfo with webServer and print the result;
//     - Print the id of workstation;
//     - Call the restart method on webServer.

// Solution:
interface Computer {
  readonly id: number;
  brand: string;
  ramInGB?: number;
  isLaptop: boolean;
  boot(): void;
}
interface Server {
  readonly hostname: string;
  operatingSystem: string;
  maxConnections?: number;
  isOnline: boolean;
  restart(): void;
  getStatus(): string;
}

let workstation: Computer = {
  id: 1001,
  brand: "Dell",
  ramInGB: 16,
  isLaptop: false,
  boot() {
    console.log("Dell workstation is booting up...");
  },
};
let laptop: Computer = {
  id: 1002,
  brand: "MacBook",
  isLaptop: true,
  boot() {
    console.log("MacBook laptop is starting...");
  },
};
let webServer: Server = {
  hostname: "web-01",
  operatingSystem: "Ubuntu",
  maxConnections: 1000,
  isOnline: true,
  restart() {
    console.log("Restarting web-01 server...");
  },
  getStatus() {
    return "web-01 is online";
  },
};

function checkComputerSpecs(device: Computer): string {
  return `${device.brand} ${device.isLaptop ? "laptop" : "desktop"}`;
}
function getServerInfo(server: Server) {
  return `${server.hostname} runs ${server.operatingSystem}`;
}

workstation.boot(); // Dell workstation is booting up...
laptop.boot(); // MacBook laptop is starting...
console.log(checkComputerSpecs(workstation)); // Dell desktop
console.log(checkComputerSpecs(laptop)); // MacBook laptop
console.log(webServer.getStatus()); // web-01 is online
console.log(getServerInfo(webServer)); // web-01 runs Ubuntu
console.log(workstation.id); // 1001
webServer.restart(); // Restarting web-01 server...

//============================== 31 =================================
// EN: Create a numeric enum named UserRole with three members: Admin,
//     Editor, and Viewer. Create three variables to demonstrate the
//     enum values:
//     - adminRole of type UserRole and assign it UserRole.Admin;
//     - editorRole of type UserRole and assign it UserRole.Editor;
//     - viewerRole of type UserRole and assign it UserRole.Viewer;
//     Print the following outputs on separate lines:
//     - Print the value of adminRole;
//     - Print the value of editorRole;
//     - Print the value of viewerRole;
//     - Print the numeric value of UserRole.Admin;
//     - Print the numeric value of UserRole.Editor;
//     - Print the numeric value of UserRole.Viewer.

// Solution:
// Create the UserRole enum and variables as described in the challenge
enum UserRole {
  Admin,
  Editor,
  Viewer,
}

// Create three variables to get the enum values
let adminRole: UserRole = UserRole.Admin;
let editorRole: UserRole = UserRole.Editor;
let viewerRole: UserRole = UserRole.Viewer;
// Print the required outputs
console.log(adminRole);
console.log(editorRole);
console.log(viewerRole);

console.log(UserRole.Admin);
console.log(UserRole.Editor);
console.log(UserRole.Viewer);

//============================== 32 =================================
// EN: Create a function named checkPermissions that takes one parameter:
//     - role of type UserRole (using the enum from the previous lesson);
//     The function should:
//     - Check the role value and print different messages based on the role;
//     If the role is UserRole.Admin, print "Full access granted";
//     - If the role is UserRole.Editor, print "Edit access granted"
//     - For any other role, print "View access only"
//     - Have a return type of void
//     - You are provided with the following from the previous challenge:
//     - The UserRole enum with Admin, Editor, and Viewer members;
//     - Variables: adminRole, editorRole, and viewerRole
//     - Create a variable named currentUser of type UserRole and assign
//       it UserRole.Editor.
//     Create a variable named guestUser of type UserRole and assign it
//     the numeric value 2.
//     Print the following outputs by calling your checkPermissions function:
//     - Call checkPermissions with adminRole;
//     - Call checkPermissions with currentUser;
//     - Call checkPermissions with guestUser;
//     - Call checkPermissions with UserRole.Admin;
//     - Call checkPermissions with the numeric value 0.

// Solution:
// Create the checkPermissions function
function checkPermissions(role: UserRole): void {
  if (role === UserRole.Admin) {
    console.log("Full access granted");
  } else if (role === UserRole.Editor) {
    console.log("Edit access granted");
  } else {
    console.log("View access only");
  }
}
// Create currentUser variable
let currentUser2: UserRole = UserRole.Editor;
// Create guestUser variable
let guestUser2: UserRole = 2;
// Call checkPermissions with the required parameters
checkPermissions(adminRole);
checkPermissions(currentUser2);
checkPermissions(guestUser2);
checkPermissions(UserRole.Admin);
checkPermissions(0);

//============================== 33 =================================
/* Create a string enum named Direction with four members:
    - Up initialized to "UP"
    - Down initialized to "DOWN"
    - Left initialized to "LEFT"
    - Right initialized to "RIGHT"
   Create four variables to demonstrate the enum values:
    - upDirection of type Direction and assign it Direction.Up
    - downDirection of type Direction and assign it Direction.Down
    - leftDirection of type Direction and assign it Direction.Left
    - rightDirection of type Direction and assign it Direction.Right
   Print the following outputs on separate lines:
    - Print the value of upDirection
    - Print the value of downDirection
    - Print the value of leftDirection
    - Print the value of rightDirection
    - Print the string value of Direction.Up
    - Print the string value of Direction.Down
*/

// Solution:
/* Each enum member is explicitly initialized with a string value.
   Variables like upDirection are typed as Direction, ensuring type safety.*/
enum Direction2 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

let upDirection: Direction2 = Direction2.Up;
let downDirection: Direction2 = Direction2.Down;
let leftDirection: Direction2 = Direction2.Left;
let rightDirection: Direction2 = Direction2.Right;
// Print the required outputs
console.log(upDirection); // UP
console.log(downDirection); // DOWN
console.log(leftDirection); // LEFT
console.log(rightDirection); // RIGHT
// Printing Direction2.Up directly also yields "UP" since enums are just objects mapping keys to values.
console.log(Direction2.Up); // UP
console.log(Direction2.Down); // DOWN

//============================== 34 =================================
/*
  You are provided with the following from the previous challenge:
  The Direction string enum with Up, Down, Left, and Right members
  Variables: upDirection, downDirection, leftDirection, and rightDirection
  Create a function named move that takes one parameter: 
    - direction of type Direction
  The function should:
  - Print a message in the format "Moving [direction]..." where [direction] 
    is the lowercase version of the enum's string value;
  - Have a return type of void
  Create a function named getMovementDescription that takes one parameter:
  - direction of type Direction
  The function should:
  - Return a string describing the movement based on the direction:
    -For Direction.Up: return "Going upward"
    -For Direction.Down: return "Going downward"
    -For Direction.Left: return "Turning left"
    -For Direction.Right: return "Turning right"
    -Have an explicit return type of string
  Create a variable named playerDirection of type Direction and assign it Direction.Up.
  Print the following outputs:
  - Call move with Direction.Up
  - Call move with leftDirection
  - Call move with playerDirection
  - Print the result of calling getMovementDescription with Direction.Down
  - Print the result of calling getMovementDescription with rightDirection
  - Call move with Direction.Right
*/
// Solution:
function move(direction: Direction2): void {
  console.log(`Moving ${direction.toLowerCase()}...`);
}

// Here, TypeScript knows all enum members are covered, so no error
function getMovementDescription(direction: Direction2): string {
  switch (direction) {
    case Direction2.Up:
      return "Going upward";
    case Direction2.Down:
      return "Going downward";
    case Direction2.Left:
      return "Turning left";
    case Direction2.Right:
      return "Turning right";
  }
}
/* таке саме рішення але додано fallback
function getMovementDescription(direction: Direction2): string {
  if (direction === Direction2.Up) {
    return "Going upward";
  } else if (direction === Direction2.Down) {
    return "Going downward";
  } else if (direction === Direction2.Left) {
    return "Turning left";
  } else if (direction === Direction2.Right) {
    return "Turning right";
  }
  // fallback ensures all paths return a string
  return "Unknown direction";
}
*/

let playerDirection2: Direction2 = Direction2.Up;

move(Direction2.Up);
move(leftDirection);
move(playerDirection2);
console.log(getMovementDescription(Direction2.Down));
console.log(getMovementDescription(rightDirection));
move(Direction2.Right);

//============================== 35 =================================
/*
  Create a heterogeneous enum named ResponseCode that mixes string and numeric values:
  - Success initialized to 200
  - Error initialized to "ERROR"
  - NotFound initialized to 404
  - Timeout initialized to "TIMEOUT"
  Create a function named handleResponse that takes one parameter:
    - code of type ResponseCode
  The function should:
  - Check the response code and print different messages based on the value
  - If the code is ResponseCode.Success, print "Request successful"
  - If the code is ResponseCode.Error, print "General error occurred"
  - If the code is ResponseCode.NotFound, print "Resource not found"
  - If the code is ResponseCode.Timeout, print "Request timed out"
  - Have a return type of void
  Create four variables to demonstrate the enum values:
  - successCode of type ResponseCode and assign it ResponseCode.Success
  - errorCode of type ResponseCode and assign it ResponseCode.Error
  - notFoundCode of type ResponseCode and assign it ResponseCode.NotFound
  - timeoutCode of type ResponseCode and assign it ResponseCode.Timeout
  Print the following outputs:
  - Print the value of successCode
  - Print the value of errorCode
  - Print the value of notFoundCode
  - Print the value of timeoutCode
  - Call handleResponse with ResponseCode.Success
  - Call handleResponse with errorCode
  - Call handleResponse with the numeric value 404
*/

// Solution:
/* Heterogeneous enums are allowed in TypeScript, but they’re unusual. They mix 
  numeric and string values, which can sometimes make type checking less predictable.
  Your handleResponse function works fine because the switch compares against the 
  enum members directly.
*/
enum ResponseCode {
  Success = 200,
  Error = "ERROR",
  NotFound = 404,
  Timeout = "TIMEOUT",
}
// Create the handleResponse function
function handleResponse(code: ResponseCode): void {
  switch (code) {
    case ResponseCode.Success:
      console.log("Request successful");
      break;
    case ResponseCode.Error:
      console.log("General error occurred");
      break;
    case ResponseCode.NotFound:
      console.log("Resource not found");
      break;
    case ResponseCode.Timeout:
      console.log("Request timed out");
      break;
  }
}

let successCode: ResponseCode = ResponseCode.Success;
let errorCode: ResponseCode = ResponseCode.Error;
let notFoundCode: ResponseCode = ResponseCode.NotFound;
let timeoutCode: ResponseCode = ResponseCode.Timeout;

console.log(successCode);
console.log(errorCode);
console.log(notFoundCode);
console.log(timeoutCode);
handleResponse(ResponseCode.Success);
handleResponse(errorCode);
handleResponse(404);
/*The last call handleResponse(404) is valid, but note that TypeScript doesn’t enforce
  strictness here — you can pass the raw number or string if it matches an enum member.
  This is one of the quirks of heterogeneous enums: they don’t give you the same compile
  time safety guarantees as pure string enums.
*/

//============================== 36 =================================
/* 
  Create a string enum named OrderStatus with four members:
  - Pending initialized to "Pending";
  - Shipped initialized to "Shipped";
  - Delivered initialized to "Delivered";
  - Cancelled initialized to "Cancelled";
  Create an interface named Order with the following properties:
  - id of type number
  - customerName of type string;
  - status of type OrderStatus;
  Create three order objects using the Order interface:
  - order1 with id 1001, customerName "Alice Johnson", and status OrderStatus.Pending;
  - order2 with id 1002, customerName "Bob Smith", and status OrderStatus.Shipped;
  - order3 with id 1003, customerName "Carol Davis", and status OrderStatus.Delivered;
  Create a function named displayOrderInfo that takes one parameter:
  - order of type Order
  The function should print a message in the format: "Order #[id] for [customerName] 
  is [status]" and have a return type of void.
  Print the following outputs:
  - Call displayOrderInfo with order1;
  - Call displayOrderInfo with order2;
  - Call displayOrderInfo with order3;
  - Print the value of OrderStatus.Cancelled;
  - Print the value of order2.status.
*/
// Solution:
enum OrderStatus {
  Pending = "Pending",
  Shipped = "Shipped",
  Delivered = "Delivered",
  Cancelled = "Cancelled",
}

interface Order {
  id: number;
  customerName: string;
  status: OrderStatus;
}

let order1: Order = {
  id: 1001,
  customerName: "Alice Johnson",
  status: OrderStatus.Pending,
};
let order2: Order = {
  id: 1002,
  customerName: "Bob Smith",
  status: OrderStatus.Shipped,
};
let order3: Order = {
  id: 1003,
  customerName: "Carol Davis",
  status: OrderStatus.Delivered,
};

function displayOrderInfo(order: Order): void {
  console.log(
    `Order #${order.id} for ${order.customerName} is ${order.status}`,
  );
}

displayOrderInfo(order1);
displayOrderInfo(order2);
displayOrderInfo(order3);
console.log(OrderStatus.Cancelled);
console.log(order2.status);
