/// <reference path="./calc/Calculator.ts" />
/// <reference path="./header/header.d.ts" />
/// <reference path="./amb/amb.d.ts" />

import {
  first,
  last,
  GenericInterface,
  GenericTypeNumber,
  GenericTypeBoolean,
  Link,
  getAge,
  getProperty,
} from "./generics";

/**
 * ################ 1. Generics ################
 */

// Using Generic Functions
console.log("First, array of numbers", first([1, 2, 3, 4]));
console.log("Last, array of numbers", last([1, 2, 3, 4]));
console.log("First, array of strings", first(["a", "b", "c", "d"]));
console.log("Last, array of strings", last(["a", "b", "c", "d"]));

// Using generic interfaces
const myGenericObjectString: GenericInterface<string> = {
  id: 1,
  name: "some example 1",
  data: "Hello, this is the data property",
};
console.log(myGenericObjectString);
const myGenericObjectNumber: GenericInterface<number> = {
  id: 1,
  name: "some example 2",
  data: 1234,
};
console.log(myGenericObjectNumber);

// Using generic types
const myGenericTypeNumber: GenericTypeNumber = {
  id: 3,
  name: "some example 3",
  data: 5678,
};
console.log(myGenericTypeNumber);
const myGenericTypeBoolean: GenericTypeBoolean = {
  id: 4,
  name: "some example 4",
  data: true,
};
console.log(myGenericTypeBoolean);

// Using generic Classes
const linkToFB = new Link<string>(
  "My Facebook",
  new URL("https://www.facebook.com"),
  new URL(
    "https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo-500x313.png"
  ),
  "Facebook Link"
);
console.log("Object instantiated with a Generic Class: ", linkToFB);

// Using generics constraint
console.log("linkToFB age in milliseconds: ", getAge(linkToFB));

// 6. Using Type Parameters in Generic Constraint
let x = { one: 1, two: 2, three: 3, four: 4 };

getProperty(x, "one");
getProperty(x, "three");
// getProperty(x, "five"); // uncomment to see error

/**
 * ################ 2. Modules and Namespaces ################
 */

import * as paymentsModule from "./paymentMethods"; // Importing the entire module into a single variable
import type { PaymentMethod } from "./paymentMethods"; // Importing a Type
import Account from "./account"; // Importing a default export
import Thumbnail = require("./thumbnail"); // Importing using require

const pm: PaymentMethod = {
  type: paymentsModule.PaymentTypes.creditCard,
  description: "Credit Card gold",
};
console.log(paymentsModule);
console.log(pm);

const account: Account = {
  user: {
    id: 1,
    firstName: "Axel",
    lastName: "Cordova",
    email: "axelsomerseth@gmail.com",
    companyName: "My Social Media",
    createdAt: new Date(),
    description: "Hi! Nice to meet you!",
    profilePhoto: new URL("https://picsum.photos/200/300"),
    verified: false,
  },
  paymentMethod: pm,
};
console.log("Account object: ", account);

const youtubeThumbnail: Thumbnail = {
  imageURL: new URL("https://picsum.photos/200/300"),
  videoURL: new URL("https://picsum.photos/200/300"),
  altText: "This is an intro video",
};
console.log("Youtube thumbnail data", youtubeThumbnail);

// Using a namespace called "Calculator"
import { Calculator } from "./calc/Calculator";

const basicCalc = new Calculator.Basic();
console.log(`Sum 2 and 5 should be :`, basicCalc.sum(2, 5));

// Using ambient modules
import { Header } from "header";
import { Amb } from "amb";

const myHeader: Header = {
  title: "This is a header",
};
console.log("Header: ", myHeader);

const customObj: Amb = {
  customProp1: 1,
  customProp2: "test",
  customProp3: false,
};
console.log("Custom object: ", customObj);
