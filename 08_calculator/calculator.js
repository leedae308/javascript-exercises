const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array
    .reduce(((total, num)=>total+num),0);

};

const multiply = function (array) {
  return array.reduce(((total, num) => total * Number(num)), 1);
};

const power = function (a, b) { //if a =2 , b = 4 => 2^4 => 2*2*2*2
  let base = parseInt(a);
  if (b == 0) return 1;

  for (let i = 0; i < b - 1; i++) {
    base *= a;
  }
  return base;

};

const factorial = function (a) { // if a = 4; 4*3*2*1;
  if (a == 0) {
    return 1;
  }
  if (a == 1) {
    return 1;
  }
  return a * factorial(a - 1);

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
