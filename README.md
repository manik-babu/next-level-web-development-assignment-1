# What is the use of the keyof keyword in TypeScript with example.
এক কথায় আমরা `keyof` keyword ব্যবহার করি কোনো **type** এর সবগুলো `key` নামকে আলাদা একটি টাইপ হিসেবে পাওয়ার জন্য। 

মানে, ধরেন আমাদের একটা **type** আছে `User` এবং তার মধ্যে `id` `name` `age` এই property গুলো আছে। এখন যদি আমরা `keyof user` করি তাহলে ওই **type** এর `key` গুলো দিয়ে একটা **type** তৈরি হবে। এবং **type** এর মধ্যে `key` নাম গুলো union `|` আকারে থাকবে। ঠিক এরকম `"id" | "name" | "age"`

আমরা `keyof` keyword তখন ব্যবহার করি যখন কোনো object বা **type** এর সবগুলো `key` কে টাইপ হিসেবে ব্যবহার করতে চাই।
মানে, আমরা চাই যেন TypeScript বুঝতে পারে specific কোনো object বা **type** এর যে যে `key` আছে, শুধু সেগুলোই ব্যবহার করা যাবে। এতে আমরা ভুল key লিখলে সাথে সাথে error পাই।

## Example Code
```ts
type User = {
  id: number;
  name: string;
  age: number;
};

type UserKeys = keyof User;     // Here keyof User means: "id" | "name" | "age"

const getUserInfo = (user: User, key: UserKeys): string | number => {
  return user[key];
}

const user: User = {
  id: 111,
  name: "Manik",
  age: 21,
};

console.log(getUserInfo(user, "name")); // No error because name is a key of User

console.log(getUserInfo(user, "address")); // Show error because addreess is not a key of User
```


# An example of using union and intersection types in TypeScript.

- **Union** মানে হল একাধিক **type** থাকলে atleast একটা **type** কে follow করতে হবে।  
- **Intersection** মানে হল একাধিক **type** থাকলে সবগুলো **type** কেই follow করতে হবে।
## Code Example
```ts
type PersonInfo = {
    name: string;
    age: number;
}
type PersonAddress = {
    division: string;
    district: string;
}

type PersonInfoOrAddress = PersonInfo | PersonAddress;  // Union type

// Object user1, user2, user3 can have PersonInfo type or PersonAddress type or both type
const user1: PersonInfoOrAddress = {
    name: "Manik",
    age: 21,
    division: "Dhaka",
    district: "Gazipur"
}
const user2: PersonInfoOrAddress = {
    division: "Dhaka",
    district: "Gazipur"
}
const user3: PersonInfoOrAddress = {
    name: "Manik",
    age: 21,
    division: "Dhaka",
    district: "Gazipur"
}

type PersonWithInfoAndAddress = PersonInfo & PersonAddress; // Intersection type

// Object userWithFullInfo must have PersonInfo and PersonAddress both. Otherwise it shows error!
const userWithFullInfo: PersonWithInfoAndAddress = {
    name: "Manik",
    age: 21,
    division: "Dhaka",
    district: "Gazipur"
}
```