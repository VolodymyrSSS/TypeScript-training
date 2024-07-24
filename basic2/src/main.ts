let guitarTypes = ["classic", "acustic", "ukulele"];
let guitars = ["yamacha", "takamine", "hochner", "fender", 5150];
let mixedData = ["EVH", 1994, true];

guitarTypes[2] = "electrique";
guitars.push(1984);
guitars[4] = "epiphone";

let test = [];
let bands: string[] = [];
bands.push("Van Halen");

// tuple
let myTuple: [string, number, boolean] = ["Walter", 1969, true];
let mixed = ["Ellis", 1977, true];
// myTuple = mixed; // Type '(string | number | boolean)[]' is not assignable to type '[string, number, boolean]'.
                    // Target requires 3 element(s) but source may have fewer.
myTuple[1] = 1978;

// object
let myObject: object;
myObject = [];
myObject = {};
console.log(typeof myObject); // object

const exampleObj = {
  prop1: 'Modest',
  prop2: true
}
exampleObj.prop1 = "Walter";

// type Guitarist = {
//   name: string,
//   active?: boolean,
//   albums: (string | number)[]
// }
interface Guitarist {
  name?: string,
  active?: boolean,
  albums: (string | number)[]
}

let evh: Guitarist = {
  name: 'Eddie',
  active: true,
  albums: [1984, 1550, "OU812"]
}
let jp: Guitarist = {
  name: 'Jimmy',
  albums: ['I', 'II', "IV"]
}
let dm: Guitarist = {
  active: false,
  albums: ['Oreiro', 'buritos']
}

evh = jp;

const greetGuitarist = (guitarist: Guitarist) => {
  // return `Hello ${guitarist.name?.toUpperCase()}!`
  if(guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}!`
  }
  return 'Hello!'
}
console.log(greetGuitarist(jp)); // Hello JIMMY!
console.log(greetGuitarist(dm)); // Hello!

// enums
enum Grade {
  U = 1,
  D,
  C,
  B,
  A
}
console.log(Grade.D); // 2
