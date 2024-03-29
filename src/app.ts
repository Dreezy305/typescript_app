//  interfaces with class

import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("yoshi", "web work", 250);
docTwo = new Invoice("mario", "plumbing work", 200);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);

const form = document.querySelector("#newForm") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul")!;

const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  // TUPLES
  let values: [string, string, number];
  values = [toFrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;

  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }
  console.log(doc);

  list.render(doc, type.value, "end");
});

// GENERICS
const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let doct = addUID({ name: "yoshi", age: 40 });
console.log(doct);

// GENERICS WITH INTERFACE
// ENUM
enum ResourceName {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

interface Resource<T> {
  uid: number;
  resourceName: ResourceName;
  data: T;
}

const docThree: Resource<object> = {
  uid: 1,
  resourceName: ResourceName.AUTHOR,
  data: { name: "shaun" },
};

console.log(docThree);

const docFour: Resource<string[]> = {
  uid: 1,
  resourceName: ResourceName.BOOK,
  data: ["shaun", "mario", "luigi"],
};

console.log(docFour);
console.log(docThree);
