// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

// Optional Properties
function printName(obj: { first: string; last?: string }) {
  // Error - might crash if 'obj.last' wasn't provided!
  //   console.log(obj.last.toUpperCase());
  // we need to verify that optional properites are not undefined
  if (obj.last !== undefined) {
    // OK
    console.log(obj.last.toUpperCase());
  }

  // A safe alternative using modern JavaScript syntax:
  console.log(obj.last?.toUpperCase());
}

// Both OK
printName({ first: "Bart" });
printName({ first: "John", last: "Mayer" });

// Defining a Union Type
// A union type is a type formed from two or more other types.
// These represent values that may be any one of those types

function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}

// Another example is to use a function like Array.isArray:
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}

// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}

// Type Aliases
type ID = number | string;

// Interfaces

// An interface declaration is another way to name an object type:
// the key distinction is that a type cannot be re-opened to add new properties
// an interface is always extendable.

type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord2(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord2({ x: 100, y: 100 });

// Literal Types

// combining literals into unions, you can express a much more useful concept
// for example, functions that only accept a certain set of known values:
function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}

printText("Hello, world", "left");
// printText("G'day, mate", "centre");

// Literal Inference
declare function handleRequest(url: string, method: "GET" | "POST"): void;

// intend for req.method to always have the literal type "GET"
const req = { url: "https://example.com", method: "GET" as "GET" };
handleRequest(req.url, req.method);
