// Generic Functions
const first = <Type>(arr: Type[]): Type => arr[0];
const last = <Type>(arr: Type[]): Type => arr[arr.length - 1];

// Generic Interface
interface GenericInterface<Type> {
  id: number;
  name: string;
  data: Type;
}

// Generic Types
type GenericTypeNumber = GenericInterface<number>;
type GenericTypeBoolean = GenericInterface<boolean>;

// Generic Classes
class Link<Type> {
  title: string;
  url: URL;
  image: URL;
  createdAt: Date;
  alt: Type;

  constructor(title: string, url: URL, image: URL, alt: Type) {
    this.createdAt = new Date();
    this.title = title;
    this.url = url;
    this.image = image;
    this.alt = alt;
  }
}

// Generic Constraint
// Issue (uncomment)
// const getAgeConstraint = <Type>(arg: Type): Type =>
//   Date.now() - arg.createdAt.valueOf();

// Solving and denoting the constraint
type HasCreatedAt = { createdAt: Date };
type Age = number;
const getAge = <Type extends HasCreatedAt>(arg: Type): Type | Age =>
  Date.now() - arg.createdAt.valueOf();

// Using Type Parameters in Generic Constraint
function getProperty<Type, Key extends keyof Type>(object: Type, key: Key) {
  return object[key];
}

// Exports
export {
  first,
  last,
  getAge,
  GenericInterface,
  GenericTypeNumber,
  GenericTypeBoolean,
  Link,
  getProperty,
};
