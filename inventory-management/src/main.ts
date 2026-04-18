console.log("Inventory management project started!");
/* ==========================================================================
    Create a generic interface named InventoryItem that represents  
    the structure of any inventory item in your management system.

    The interface should:
    - Use a generic type parameter T
    - Have an id property of type number
    - Have a quantity property of type number
    - Have a details property of type T

    Create the following objects using your generic interface:
    - bookItem of type InventoryItem<{ title: string; author: string }> with:
        id: 1
        quantity: 5
        details: { title: "TypeScript Guide", author: "John Doe" }
    - electronicItem of type InventoryItem<{ brand: string; model: string }> with:
        id: 2
        quantity: 3
        details: { brand: "TechCorp", model: "X200" }
    - clothingItem of type InventoryItem<{ size: string; color: string }> with:
        id: 3
        quantity: 10
        details: { size: "M", color: "Blue" }
    
    Print the following outputs:  
        Print bookItem.id
        Print bookItem.quantity
        Print bookItem.details.title
        Print bookItem.details.author
        Print electronicItem.details.brand
        Print electronicItem.details.model
        Print clothingItem.details.size
        Print clothingItem.details.color
*/

interface InventoryItem<T> {
  id: number;
  quantity: number;
  details: T;
}

let bookItem: InventoryItem<{ title: string; author: string }> = {
  id: 1,
  quantity: 5,
  details: { title: "TypeScript Guide", author: "John Doe" },
};

let electronicItem: InventoryItem<{ brand: string; model: string }> = {
  id: 2,
  quantity: 3,
  details: { brand: "TechCorp", model: "X200" },
};

let clothingItem: InventoryItem<{ size: string; color: string }> = {
  id: 3,
  quantity: 10,
  details: { size: "M", color: "Blue" },
};

// Print the required outputs
console.log(bookItem.id);
console.log(bookItem.quantity);
console.log(bookItem.details.title);
console.log(bookItem.details.author);
console.log(electronicItem.details.brand);
console.log(electronicItem.details.model);
console.log(clothingItem.details.size);
console.log(clothingItem.details.color);

/* Рішенням може бути також: замість вбудованих типів об'єктів можна 
    визначити псевдоніми, які можна повторно використовувати. Це полегшує
    розширення коду, якщо пізніше потрібно додавати більше властивостей.

    type BookDetails = { title: string; author: string };
    type ElectronicDetails = { brand: string; model: string };
    type ClothingDetails = { size: string; color: string };

    let bookItem: InventoryItem<BookDetails> = { ... };
    let electronicItem: InventoryItem<ElectronicDetails> = { ... };
    let clothingItem: InventoryItem<ClothingDetails> = { ... };

    Також рішенням може бути створення допоміжного методу, щоб уникнути 
    повторення літералів об'єктів. Такий підхід добре масштабується, коли
    потрібно додавати більше типів інвентарю.

    function createItem<T>(id: number, quantity: number, details: T): InventoryItem<T> {
        return { id, quantity, details };
    }
    const bookItem = createItem(1, 5, { title: "TypeScript Guide", author: "John Doe" });
    const electronicItem = createItem(2, 3, { brand: "TechCorp", model: "X200" });
    const clothingItem = createItem(3, 10, { size: "M", color: "Blue" });

    або ось так в одну лінію:
    const makeItem = <T>(id: number, quantity: number, details: T): InventoryItem<T> => (
        { id, quantity, details }
    );
*/
/* ==========================================================================
    Create a generic function named addItem that adds a new item to an existing
    inventory array. The function should:
    - Use a generic type parameter T;
    - Accept a parameter inventory of type InventoryItem<T>[];
    - Accept a parameter newItem of type InventoryItem<T>;
    - Return a new array of type InventoryItem<T>[] containing all existing items 
      plus the new item;
    - Have an explicit return type annotation.

    Create the following arrays and test your function:
    - Create bookInventory as an array containing only bookItem
    - Create newBook of type InventoryItem<{ title: string; author: string }> with:
        id: 4
        quantity: 2
        details: { title: "Advanced TypeScript", author: "Jane Smith" }
    - Use addItem to add newBook to bookInventory and store the result in updatedBookInventory
    - Create electronicInventory as an array containing only electronicItem
    - Create newElectronic of type InventoryItem<{ brand: string; model: string }> with:
        id: 5
        quantity: 1
        details: { brand: "GadgetCorp", model: "Z500" }
    - Use addItem to add newElectronic to electronicInventory and store the result in 
        updatedElectronicInventory
    
    Print the following outputs:
    - Print the length of updatedBookInventory
    - Print updatedBookInventory[1].details.title
    - Print updatedBookInventory[1].details.author
    - Print the length of updatedElectronicInventory
    - Print updatedElectronicInventory[1].details.brand
    - Print updatedElectronicInventory[1].details.model
    - Print updatedElectronicInventory[0].id
    - Print updatedElectronicInventory[1].quantity
*/

// Generic function
function addItem<T>(
  inventory: InventoryItem<T>[],
  newItem: InventoryItem<T>,
): InventoryItem<T>[] {
  return [...inventory, newItem];
}

// Book inventory
let bookInventory: InventoryItem<{ title: string; author: string }>[] = [
  bookItem,
];
let newBook: InventoryItem<{ title: string; author: string }> = {
  id: 4,
  quantity: 2,
  details: { title: "Advanced TypeScript", author: "Jane Smith" },
};
let updatedBookInventory = addItem(bookInventory, newBook);

// Electronic inventory
let electronicInventory: InventoryItem<{ brand: string; model: string }>[] = [
  electronicItem,
];
let newElectronic: InventoryItem<{ brand: string; model: string }> = {
  id: 5,
  quantity: 1,
  details: { brand: "GadgetCorp", model: "Z500" },
};
let updatedElectronicInventory = addItem(electronicInventory, newElectronic);

// Outputs
console.log(updatedBookInventory.length); // 2
console.log(updatedBookInventory[1].details.title); // "Advanced TypeScript"
console.log(updatedBookInventory[1].details.author); // "Jane Smith"
console.log(updatedElectronicInventory.length); // 2
console.log(updatedElectronicInventory[1].details.brand); // "GadgetCorp"
console.log(updatedElectronicInventory[1].details.model); // "Z500"
console.log(updatedElectronicInventory[0].id); // 2
console.log(updatedElectronicInventory[1].quantity); // 1

/* ==========================================================================
/*  Create a generic function named findItemById that searches for an item in 
    an inventory array by its ID.
    The function should:
    - Use a generic type parameter T
    - Accept a parameter inventory of type InventoryItem<T>[]
    - Accept a parameter id of type number
    - Return the found item of type InventoryItem<T> or undefined if not found
    - Have an explicit return type annotation of InventoryItem<T> | undefined
    
    Create test inventories:
    
    Create mixedBookInventory as an array containing:
    - An item with id: 10, quantity: 3, details: 
        { title: "JavaScript Basics", author: "Alice Brown" }
    - An item with id: 11, quantity: 7, details: 
        { title: "React Fundamentals", author: "Bob Wilson" }
    - An item with id: 12, quantity: 2, details: 
        { title: "Node.js Guide", author: "Carol Davis" }
    
    Create mixedElectronicInventory as an array containing:
    - An item with id: 20, quantity: 5, details: { brand: "Samsung", model: "Galaxy S23" }
    - An item with id: 21, quantity: 1, details: { brand: "Apple", model: "iPhone 15" }
    
    Test your function and print the following outputs:
    - Find item with ID 11 in mixedBookInventory and print the 
        result's details.title (or undefined if not found);
    - Find item with ID 20 in mixedElectronicInventory and print 
        the result's details.brand (or undefined if not found);
    - Find item with ID 99 in mixedBookInventory and print 
        the result (should be undefined);
    - Find item with ID 12 in mixedBookInventory and print the 
        result's quantity (or undefined if not found);
    - Find item with ID 21 in mixedElectronicInventory and print 
        the result's details.model (or undefined if not found);
    - Find item with ID 10 in mixedBookInventory and print 
        the result's id (or undefined if not found);
    - Find item with ID 50 in mixedElectronicInventory and print 
        the result (should be undefined).
*/
function findItemById<T>(
  inventory: InventoryItem<T>[],
  id: number,
): InventoryItem<T> | undefined {
  const found = inventory.find((item) => item.id === id);
  return found ? found : undefined;
}

/* Альтернативно, можна використати if-else оператор типу:
   function findItemById<T>(inventory: InventoryItem<T>[], id: number): InventoryItem<T> | undefined {
  const found = inventory.find(item => item.id === id);
  if (found) {
    return found;   // return the item if found
  } else {
    return undefined; // explicit undefined if not found
  }
  або цикл for..of ось так:
  function findItemById<T>(inventory: InventoryItem<T>[], id: number): InventoryItem<T> | undefined {
  for (const item of inventory) {
    if (item.id === id) {
      return item; // found
    }
  }
  return undefined; // not found
}
*/

// Test inventories
let mixedBookInventory: InventoryItem<{ title: string; author: string }>[] = [
  {
    id: 10,
    quantity: 3,
    details: { title: "JavaScript Basics", author: "Alice Brown" },
  },
  {
    id: 11,
    quantity: 7,
    details: { title: "React Fundamentals", author: "Bob Wilson" },
  },
  {
    id: 12,
    quantity: 2,
    details: { title: "Node.js Guide", author: "Carol Davis" },
  },
];

let mixedElectronicInventory: InventoryItem<{
  brand: string;
  model: string;
}>[] = [
  { id: 20, quantity: 5, details: { brand: "Samsung", model: "Galaxy S23" } },
  { id: 21, quantity: 1, details: { brand: "Apple", model: "iPhone 15" } },
];

// Print the required outputs
const item11 = findItemById(mixedBookInventory, 11);
console.log(item11 ? item11.details.title : undefined); // "React Fundamentals"

const item20 = findItemById(mixedElectronicInventory, 20);
console.log(item20 ? item20.details.brand : undefined); // "Samsung"

const item99 = findItemById(mixedBookInventory, 99);
console.log(item99); // undefined

const item12 = findItemById(mixedBookInventory, 12);
console.log(item12 ? item12.quantity : undefined); // 2

const item21 = findItemById(mixedElectronicInventory, 21);
console.log(item21 ? item21.details.model : undefined); // "iPhone 15"

const item10 = findItemById(mixedBookInventory, 10);
console.log(item10 ? item10.id : undefined); // 10

const item50 = findItemById(mixedElectronicInventory, 50);
console.log(item50); // undefined

/* ==========================================================================
/* 
    Create two specific object types and their corresponding inventory item 
    type aliases:
    Create a type alias Book with properties:
    - title of type string;
    - author of type string;
    Create a type alias Electronic with properties:
    - brand of type string
    - model of type string
    Create type aliases for specific inventory items:
    - Create BookItem as InventoryItem<Book>
    - Create ElectronicItem as InventoryItem<Electronic>
    Create concrete inventory items using your new type aliases:
    Create specificBook of type BookItem with:
    - id: 100
    - quantity: 8
    - details: { title: "Clean Code", author: "Robert Martin" }
    Create specificElectronic of type ElectronicItem with:
    - id: 200
    - quantity: 4
    - details: { brand: "Sony", model: "WH-1000XM4" }
    Create typed inventory arrays:
    - Create bookStore of type BookItem[] containing specificBook
    - Create electronicStore of type ElectronicItem[] containing specificElectronic
    Create additional items and test your type system:
    - Create anotherBook of type BookItem with:
        - id: 101
        - quantity: 3
        - details: { title: "Design Patterns", author: "Gang of Four" }
    Use addItem to add anotherBook to bookStore and store in expandedBookStore
    Print the following outputs:
    - Print specificBook.details.title
    - Print specificBook.details.author
    - Print specificElectronic.details.brand
    - Print specificElectronic.details.model
    Print the length of expandedBookStore
    - Use findItemById to find item with ID 101 in expandedBookStore and print 
        the result's details.title
    - Use findItemById to find item with ID 200 in electronicStore and print 
        the result's quantity
    - Print expandedBookStore[1].details.author
*/

// Create two specific object types
type Book = { title: string; author: string };
type Electronic = { brand: string; model: string };
// Create type aliases for specific inventory items
type BookItem = InventoryItem<Book>;
type ElectronicItem = InventoryItem<Electronic>;

// Create concrete inventory items using the new type aliases
let specificBook: BookItem = {
  id: 100,
  quantity: 8,
  details: { title: "Clean Code", author: "Robert Martin" },
};
let specificElectronic: ElectronicItem = {
  id: 200,
  quantity: 4,
  details: { brand: "Sony", model: "WH-1000XM4" },
};

// Create typed inventory arrays
let bookStore: BookItem[] = [specificBook];
let electronicStore: ElectronicItem[] = [specificElectronic];

// Create additional items
let anotherBook: BookItem = {
  id: 101,
  quantity: 3,
  details: { title: "Design Patterns", author: "Gang of Four" },
};

// add anotherBook to bookStore
let expandedBookStore = addItem(bookStore, anotherBook);

// Print the required outputs
console.log(specificBook.details.title); // "Clean Code"
console.log(specificBook.details.author); // "Robert Martin"
console.log(specificElectronic.details.brand); // "Sony"
console.log(specificElectronic.details.model); // "WH-1000XM4"
console.log(expandedBookStore.length); // 2

// console.log(findItemById(expandedBookStore, 101)?.details.title);
// The ?. operator says: if the left side is not undefined or null,
// access the property; otherwise return undefined.  Aбо так:
const foundBook = findItemById(expandedBookStore, 101);
console.log(foundBook ? foundBook.details.title : undefined); // "Design Patterns"

// console.log(findItemById(electronicStore, 200)?.quantity); або так:
const foundElectronic = findItemById(electronicStore, 200);
console.log(foundElectronic ? foundElectronic.quantity : undefined); // 4

console.log(expandedBookStore[1].details.author); // "Gang of Four"

/* ==========================================================================
/*
    Create a function named getItemDetails that takes an InventoryItem<any> and
    uses type guards to determine what type of item it is, then prints appropriate
    information. The function should:
    - Accept a parameter item of type InventoryItem<any>
    - Use the in operator to check if item.details has a title property
    - Use the in operator to check if item.details has a brand property
    - Print "Book: [title] by [author]" if it's a book
    - Print "Electronic: [brand] [model]" if it's an electronic
    - Print "Unknown item type" if it's neither
    - Have a return type of void

    Create test items:
    - Create testBook of type InventoryItem<any> with:
        id: 300
        quantity: 6
        details: { title: "TypeScript Handbook", author: "Microsoft Team" }
    - Create testElectronic of type InventoryItem<any> with:
        id: 400
        quantity: 2
        details: { brand: "Dell", model: "XPS 13" }
    - Create unknownItem of type InventoryItem<any> with:
        id: 500
        quantity: 1
        details: { color: "Red", size: "Large" }
    - Test your function by calling getItemDetails with each test item:
        Call getItemDetails(testBook);
        Call getItemDetails(testElectronic);
        Call getItemDetails(unknownItem);
    - Also test with items from your existing stores:
    Use findItemById to find item with ID 100 in expandedBookStore, then 
        call getItemDetails with the result;
    Use findItemById to find item with ID 200 in electronicStore, then call 
        getItemDetails with the result.
*/

// Create a function getItemDetails
function getItemDetails(item: InventoryItem<any>): void {
  if ("title" in item.details) {
    console.log(`Book: ${item.details.title} by ${item.details.author}`);
  } else if ("brand" in item.details) {
    console.log(`Electronic: ${item.details.brand} ${item.details.model}`);
  } else {
    console.log("Unknown item type");
  }
}
// Create test items
let testBook: InventoryItem<any> = {
  id: 300,
  quantity: 6,
  details: { title: "TypeScript Handbook", author: "Microsoft Team" },
};

let testElectronic: InventoryItem<any> = {
  id: 400,
  quantity: 2,
  details: { brand: "Dell", model: "XPS 13" },
};

let unknownItem: InventoryItem<any> = {
  id: 500,
  quantity: 1,
  details: { color: "Red", size: "Large" },
};
// Print the required outputs
getItemDetails(testBook);
getItemDetails(testElectronic);
getItemDetails(unknownItem);

// Existing store items
const foundBook1 = findItemById(expandedBookStore, 100);
if (foundBook1) getItemDetails(foundBook1);

const foundElectronic1 = findItemById(electronicStore, 200);
if (foundElectronic1) getItemDetails(foundElectronic1);
