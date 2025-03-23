// Задача №1
const ob = { a: 3, b: { c: 7 } };

function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  const copy = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }

  return copy;
}
const obCopy = deepCopy(ob);
obCopy.a = 10;
obCopy.b.c = 11;

console.log("ob: ", ob.a); // 3
console.log("ob: ", ob.b.c); // 7
console.log("obCopy: ", obCopy.a); // 10
console.log("obCopy: ", obCopy.b.c); // 11

// Задача №2

function selectFromInterval(arr, a, b) {
  if (!Array.isArray(arr)) {
    console.log("first parameter must be an array!");
  }
  if (arr.every((item) => typeof item != "number")) {
    console.log("There are not only numbers in the array!");
  }
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    console.log("incorrect input parameters!");
  }
  const start = Math.min(a, b);
  const end = Math.max(a, b);
  const result = arr
    .filter((item) => item >= start && item <= end)
    .sort((x, y) => x - y);

  return result;
}
console.log(selectFromInterval([2, 15, 4, 1, 6, 33, 6, 9, 24, 14], 15, 2));

// Задача №3

const arr = [
  { name: "Bob", age: "25" },
  { name: "Ann", age: "30" },
  { name: "Tom", age: "35" },
];

const fn = (property) => (item) => console.log(item[property]);
arr.forEach(fn("name"));
arr.forEach(fn("age"));

// Задача №4

function reverseStr(str) {
  return str.split("").reverse().join("");
}
console.log(reverseStr("Я ненавижу программирование"));
