//Задача №1

function memoize(callback) {
  const cache = {};
  return function (...args) {
    const key = args
      .slice()
      .sort((a, b) => a - b)
      .join(",");
    console.log(key);
    console.log("cache before ", cache);
    if (cache[`${key}`] !== undefined) {
      console.log("Get from cache");
      return cache[`${key}`];
    }
    console.log("First calculation");
    const result = callback(...args);
    cache[`${key}`] = result;
    console.log("cache after ", cache);
    return result;
  };
}
function sum(...args) {
  return args.reduce((acc, item) => {
    acc += item;
    return acc;
  }, 0);
}
const sumWithCache = memoize(sum);
sumWithCache(2, 9, 5);
sumWithCache(9, 5, 2);

//Задача №2
///////////////////////////////////////////////

function add(x) {
  let sum = x;
  function inside(y) {
    if (y === undefined) {
      return sum;
    }
    sum += y;
    return inside;
  }
  return inside;
}
console.log(add(2)(7)(2)());

//Задача №3
///////////////////////////////////////////////

function logger() {
  console.log(`I output only external context: ${this.item}`);
}
const obj = {
  item: "some value",
};
logger.call(obj);
logger.apply(obj);
const a = logger.bind(obj);
a();

//Задача №4
///////////////////////////////////////////////

if (!Function.prototype.myBind) {
  Function.prototype.myBind = function (context, ...args) {
    if (typeof this !== "function") {
      throw new TypeError("myBind должен быть вызван на функции");
    }
    const fn = this;
    return function (...innerArgs) {
      return fn.apply(context, [...args, ...innerArgs]);
    };
  };
}

function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}
const person = { name: "Alice" };
const boundGreet = greet.myBind(person, "Hello");
console.log(boundGreet("!"));
