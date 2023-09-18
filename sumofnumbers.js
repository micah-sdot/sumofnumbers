function sumFor(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) sum += data[i];
  return sum;
}

function sumWhile(data) {
  let sum = 0;
  let i = 0;
  while (i < data.length) {
    sum += data[i];
    i++;
  }
  return sum;
}

function sumRecursion(data) {
  let returnVal;
  if (data.length > 1) {
    const newData = data.slice(1);
    returnVal = data[0] + sumRecursion(newData);
  } else if (data.length === 1) {
    // eslint-disable-next-line prefer-destructuring
    returnVal = data[0];
  } else {
    returnVal = 0;
  }
  return returnVal;
}

function sumTheSimpleWay(data) {
  return _.reduce(data, function (memo, num) { return memo + num; }, 0);
}

const yes = [5, 4, 3];
console.log(sumFor(yes));
console.log(sumWhile(yes));
console.log(sumRecursion(yes));
console.log(sumTheSimpleWay(yes));
