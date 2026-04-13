/*
/// 6.2. Деструктуризация массивов
console.log("\n=== Деструктуризация массивов ===");
const colors = ["red", "green", "blue"];
// kakashke
const color1 = colors[0];
const color2 = colors[1];
console.log(color1, color2);
// new
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor, secondColor, thirdColor);
//
const [primary, , tertiary] = colors;
console.log(primary, tertiary);
//
const [c1, c2, c3, c4 = "yellow"] = colors;
console.log(c4);
*/
/// 6.3. Деструктуризация объектов
/*
console.log("Деструктуризация объектов");
const user = {
    name: "Alice",
    age: 25,
    city: "Moscow",
}
*/
// kakaschke
/*
const userName = user.name;
const userAge = user.age;
console.log(userName, userAge);
*/
// new
/*
const { name, age, city} = user;
console.log(name, age, ciry);
*/
// Переименование при деструктуризации:
/*
const { name, fullName, age: years } = user;
console.log(fullName, years);
*/
// Значения по умолчанию:
/*
const {name: personName, country = "Russia" } = user;
console.log(personName, country);
*/

/// Деструктуризация в параметрах функций
/*
console.log("Деструктуризация в параметрах");
// kakaschke
function printUserOld(user) {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`City: ${user.city}`);
}
// new
function printUser({ name, age, city }) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`City: ${city}`);
}
//
printUserOld(user);
console.log();
printUser(user);
*/

/// 6.5. Практическое задание
/*
// 1
console.log("Практическое задание");
const product = {
    name: "Молоко",
    price: 99.9,
    category: "Молочная продукция",
    inStock: 100
}
// 2
const productName = product.name;
const productPrice = product.price;
const productCategory = product.category;
const productInStock = product.inStock;
// 3
function printProduct({ name, price, category, inStock }) {
    console.log(`Name: ${name}`);
    console.log(`Price: ${price}`);
    console.log(`Category: ${category}`);
    console.log(`InStock: ${inStock}`);
}
// 4
console.log(productName, productPrice, productCategory, productInStock);
console.log("---");
printProduct(product);
*/

/// 7.2. Spread оператор для массивов
/*
console.log("Spread для массивов");
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// Объединение массивов:
const combined = [...arr1, ...arr2];
console.log("Обьединённый массив:", combined);
// Копирование массива:
const copy = [...arr1];
console, log("Копия массива:", copy);
// Добавление элементов:
const extended = [0, ...arr1, 7, 8];
console.log("Расширенный массив:", extended);
*/

// 7.3
/*
console.log("Spread для объектов");
const person = {
    name: "Rinat",
    age: 30,
}
const address = {
    city: "Volshsky",
    street: "Mira",
}
const fullInfo = {...person, ...address };
console.log("Полная информация:", fullInfo);

const personCopy = { ...person };
console.log("Копия объекта:", personCopy);

const updated = { ...person, age: 31, occupation: "Developer" };
console.log("Обновлённый объект:", updated);
*/

// 7.4
/*
console.log("Rest оператор");

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log("Сумма 1,2,3:", sum(1, 2, 3));
console.log("Сумма 1,2,3,4,5:", sum(1, 2, 3, 4, 5));

const numbers = [10,20,30,40,50];
const [first, second, ...rest] = numbers;
console.log("Первое число:", first);
console.log("Второе число:", second);
console.log("Остальные числа:", rest);
*/

// 7.5 Практическое задание
/*
// 1
const arr1 = [1,2,3];
const arr2 = [4,5,6];
console.log(arr1)
console.log(arr2)
// 2
const fullArr = [...arr1, ...arr2];
console.log(fullArr)
// 3
function findMax(...num) {
    return num.reduce((total, num) => total = Math.max(num), 0);
}
console.log(findMax(1,2,3,4,5))
// 4
const student = {
    name: "Rinat",
    age: 30,
}
const address = {
    city: "Volshsky",
    street: "Mira",
}
const fullInfo = {...student, ...address };
console.log(fullInfo);
*/

// Шаг 8. Модули (Import/Export)
/*
import {greet, add, PI} from "./utils.js";
console.log("Модули");
console.log(greet("Rinat"));
console.log("5 + 3 = ", add(5,3));
console.log("Значение PI:", PI);

import { multiply as умножить } from "./utils.js";
console.log("4 * 7 =", умножить(4,7));

import * as Utils from "./utils.js";
console.log(Utils.greet("Vali"));
console.log("Умножение:", Utils.multiply(3,9));
*/

// 8.5. Практическое задание
/*
// 4
import {square, cube, E} from "./math.js";
console.log(square(5, 2));
console.log(cube(5));
console.log(E);
*/

// 9.2. Создание промиса
/*
console.log("Промисы");
//
const simplePromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Операция выполнена успешно!");
    } else {
        reject("Произошла ошибка!");
    }
});
simplePromise
    .then((result) => console.log("Результаты:", result))
    .catch((error) => console.log("Ошибка", error));
//
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Прошло ${ms} миллисекунд`);
        }, ms);
    });
}
delay(1000)
    .then((message) => console.log(message));
//
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({
                    id: userId,
                    name: "Rinat Abdulin",
                    email: "brolike636@gmail.com",
                });
            } else {
                reject("Неверный ID пользователя");
            }
        }, 1500);
    });
}
fetchUserData(1)
    .then((user) => console.log("Пользователь:", user))
    .catch((error) => console.log("Ошибка:", error));
//
function step1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Шаг 1 завершен"), 500);
    });
}
function step2(previousResult) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`${previousResult} -> Шаг 2 завершен`), 500);
    });
}
function step3(previousResult) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`${previousResult} -> Шаг 3 завершен`), 500);
    });
}
step1()
    .then((result1) => step2(result1))
    .then((result2) => step3(result2))
    .then((finalResult) => console.log("Финальный результат:", finalResult))
    .catch((error) => console.log("Ошибка в цепочке:", error));
*/

// 9.3. Практическое задание
const Inventory = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Операция выполнена успешно!");
    } else {
        reject("Произошла ошибка!");
    }
});
Inventory
    .then((result) => console.log("Результаты:", result))
    .catch((error) => console.log("Ошибка", error));

function checkInventory() {
    return new Promise((resolve, reject) => {
        if (tovar > 0) {
            resolve({
                id: tovar,
                name: "Moloko",
            });
        } else {
            reject(`На складе нету товара: Moloko`);
        }
    });
}