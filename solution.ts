type FormatValue = (value: string | number | boolean) => string | number | boolean;
const formatValue: FormatValue = (value) => {
    if (typeof value == 'string')
        return value.toUpperCase();
    else if (typeof value == 'number')
        return value * 10;
    else
        return !value;
}


type GetLength = (value: string | number[]) => number;
const getLength: GetLength = (value) => {
    if (typeof value == 'string')
        return value.length;
    else
        return value.length;
}


class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
}


type Item = {
    title: string;
    rating: number
}
const filterByRating = (items: Array<Item>): Array<Item> => {
    const filteredArray = items.filter((item: Item): boolean => (item.rating >= 4));
    return filteredArray;
}


type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean
};
const filterActiveUsers = (users: Array<User>): Array<User> => {
    const filteredActiveUsers = users.filter((user: User): boolean => (user.isActive == true));
    return filteredActiveUsers;
}


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}
const printBookDetails = (book: Book): void => {
    const { title, author, publishedYear, isAvailable } = book;

    const stringToPrint = `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${isAvailable ? 'Yes' : 'No'}`;
    console.log(stringToPrint);
}


type GetUniqueValues = (array1: number[] | string[], array2: number[] | string[]) => number[] | string[];
const getUniqueValues: GetUniqueValues = (array1, array2) => {
    const UniqueValues: number[] | string[] = [];
    let pointerForUniqueValues: number = 0;

    const isExistInUniqueValues = (element: number | string): boolean => {
        for (let k = 0; UniqueValues[k] != undefined; k++) {
            if (UniqueValues[k] == element) {
                return true;
            }
        }
        return false;
    }

    for (let i = 0; array1[i] != undefined; i++) {
        if (!isExistInUniqueValues(array1[i])) {
            UniqueValues[pointerForUniqueValues++] = array1[i];
        }
    }
    for (let i = 0; array2[i] != undefined; i++) {
        if (!isExistInUniqueValues(array2[i])) {
            UniqueValues[pointerForUniqueValues++] = array2[i];
        }
    }
    return UniqueValues;
}


type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}
const calculateTotalPrice = (products: Array<Product>): number => {
    const totalPrice: number = products.reduce((total: number, product: Product): number => {
        let subTotal = product.price * product.quantity;

        if (product.discount) {
            subTotal -= subTotal * (product.discount / 100);
        }
        return (total + subTotal);
    }, 0);
    return totalPrice;
}
