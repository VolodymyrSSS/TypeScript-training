let username: string = "Modest";
let meaningOfLife: number;
let isLoading: boolean;
let albom: any;
let postId: string | number;
let isActive: number | boolean;
let re: RegExp;

username = "Maximus";
meaningOfLife = 42;
isLoading = true;
albom = 1984;
albom = true;
albom = "Van Halen";
postId = 987457674;
postId = "nP1432TTi27";
isActive = 0;
isActive = false;
re = /\w+/g; // regEx choosing the all words in the string

console.log(username);
console.log(meaningOfLife);
console.log(isLoading);
console.log(albom);
console.log(postId);
console.log(isActive);

let a: number = 12;
let b: number = 6;
let c: number = 7;

console.log(a / b);
console.log(c * b);

const sum1 = (num1: number, num2: number) => {
  return num1 + num2;
};
console.log(sum1(40, 2)); // 42

const sum2 = (num1: number, num2: string) => {
  return num1 + num2;
};
console.log(sum2(40, "2")); // 402

