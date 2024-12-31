const add = function(numOne, numTwo) {
	return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};

const sum = function(array) {
	const summed = array.reduce((total, next) => total + next, 0);
  return summed;
};

const multiply = function(array) {
	const summed = array.reduce((total, next) => total * next, 1);
  return summed;
};

const power = function(numOne, numTwo) {
	return numOne ** numTwo;
};

const factorial = function(number) {
  const num = number;
  const arr = [];

  for (i = num; i > 0; i--) {
    arr.push(i);
  };

  const fact = arr.reduce((total, next) => total * next, 1);

  return fact;
	
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
