// split takes an array and splits it into two even arrays
function split(wholeArray) {
  if (!wholeArray.length || wholeArray.length === 1) {
    return wholeArray;
  }

  // odd cases will return a secondHalf with 1+ length of firstHalf
  const splitLength = Math.floor(wholeArray.length / 2);
  const firstHalf = wholeArray.slice(0, splitLength);
  const secondHalf = wholeArray.slice(splitLength);

  return [firstHalf, secondHalf];
}

// merge takes two SORTED arrays and combines them into one sorted array
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
  console.log('MERGE HAPPENS: ', sorted); // logging to see recursion
  return sorted;
}

// mergeSort's goal is to take an array and return the sorted array
// For every step in recursion, it is going to split the current array in half,
// and return the merge of each half
// end result is when the array.length finally gets to 1 for every array,
// recursion will unwind: merge will get called on [2] and [1] to get [1, 2], then merge will get called on [5] and [1, 2] to get [1, 2, 5]
// keeps unwinding until the FIRST and SECOND halves are returned inside of the first merge that was called and they too are now merged
//
// look at the console logs to see it in action!
function mergeSort(array) {
  console.log('mergeSort splits: ', array); // logging to see recursion
  if (array.length < 2) {
    return array;
  }
  let halves = split(array);

  return merge(mergeSort(halves[0]), mergeSort(halves[1]));
}

// test:
const arr = [6, 21, 7, -2, 1, 100];

console.log(mergeSort(arr));
