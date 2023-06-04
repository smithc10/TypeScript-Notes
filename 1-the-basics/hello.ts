// This is a general-purpose greeter function
// TypeScript allows you to specify the type of parameters and/or return values
// of a given function at declaration.
function greet(person: string, date: Date): void {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

// We can also specify the types of variables at declaration as well
let beatles: object = {};
let paul: string = "Mcartney";
let ringo: string;
const john: string = "Lennon";

const names = ["Alice", "Bob", "Eve"];

greet("Maddison", new Date());
