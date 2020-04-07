function split(wholeArray) {
  if (!wholeArray.length || wholeArray.length === 1) {
    return wholeArray;
  }

  // odd cases will return a secondHalf with 1+ length of firstHalf
  const splitLength = wholeArray.length / 2;
  const firstHalf = wholeArray.slice(0, splitLength);
  const secondHalf = wholeArray.slice(splitLength);

  return [firstHalf, secondHalf];
}

// arrays need to be sorted in order to use merge
function merge(array1, array2) {
  let sorted = [];

  while (array1.length && array2.length) {
    let num1 = array1[0];
    let num2 = array2[0];
    if (num1 <= num2) {
      sorted.push(array1.shift());
    } else {
      sorted.push(array2.shift());
    }
  }
  if (array1.length) {
    sorted = [...sorted, ...array1];
  } else {
    sorted = [...sorted, ...array2];
  }
  return sorted;
}

const test = [3, 4, 8, 9, 10];
const test2 = [1, 6, 7];

console.log('TEST1', merge(test, test2));
// console.log('TEST2', split(test2));
