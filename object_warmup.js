var numbers = {
  10: 10,
  num: 13,
  anotherKey: 34,
  undefined: 12,
  blue: 98
};

function sum(numbers) {
  var allNums = [];
  for (var keys in numbers) {
    allNums.push(numbers[keys]);
  } 
  return allNums.reduce(function(acc, val) {
    return acc + val;
  });
}

// sum(numbers);

function pushedArray(numbers) {
  var allNums = [];
  for (var keys in numbers) {
    allNums.push(numbers[keys]);
  }
  return allNums;
}

// pushedArray(numbers);

function oddFromEven(numbers) {
  var even = [];
  var odd = [];

  for (var keys in numbers) {
    if (numbers[keys] % 2 === 0) {
      even.push(numbers[keys]);
    } else {
      odd.push(numbers[keys]);
    }
  }

  var evenSum = even.reduce(function(acc, val) {
    return acc + val;
  });
  var oddSum = odd.reduce(function(acc, val) {
    return acc + val;
  });
  return evenSum - oddSum;
}

// oddFromEven(numbers);


function timesTwo(numbers) {
  var allNums = [];
  for (var keys in numbers) {
    allNums.push(numbers[keys]);
  }
  return allNums.map(function(val) {
    return val * 2;
  });
}

// timesTwo(numbers);
