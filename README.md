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