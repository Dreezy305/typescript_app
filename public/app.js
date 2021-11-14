//  interfaces with class
import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/payment.js";
let docOne;
let docTwo;
docOne = new Invoice("yoshi", "web work", 250);
docTwo = new Invoice("mario", "plumbing work", 200);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
const form = document.querySelector("#newForm");
// inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // TUPLES
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    console.log(doc);
    list.render(doc, type.value, "end");
});
// GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let doct = addUID({ name: "yoshi", age: 40 });
console.log(doct);
// GENERICS WITH INTERFACE
// ENUM
var ResourceName;
(function (ResourceName) {
    ResourceName[ResourceName["BOOK"] = 0] = "BOOK";
    ResourceName[ResourceName["AUTHOR"] = 1] = "AUTHOR";
    ResourceName[ResourceName["FILM"] = 2] = "FILM";
    ResourceName[ResourceName["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceName[ResourceName["PERSON"] = 4] = "PERSON";
})(ResourceName || (ResourceName = {}));
const docThree = {
    uid: 1,
    resourceName: ResourceName.AUTHOR,
    data: { name: "shaun" },
};
console.log(docThree);
const docFour = {
    uid: 1,
    resourceName: ResourceName.BOOK,
    data: ["shaun", "mario", "luigi"],
};
console.log(docFour);
console.log(docThree);
