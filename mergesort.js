let test = 'hello';
function split(wholeArray) {
  console.log('INITIALIZING SPLIT: ', wholeArray);

  if (!wholeArray.length || wholeArray.length === 1) {
    console.log('SPLIT: LENGTH OF 1 OR 0', wholeArray);
    return wholeArray;
  }

  // odd cases will return a secondHalf with 1+ length of firstHalf
  const splitLength = Math.floor(wholeArray.length / 2);
  console.log('SPLIT LENGTH', splitLength);
  const firstHalf = wholeArray.slice(0, splitLength);
  const secondHalf = wholeArray.slice(splitLength);
  console.log('first halve length: ', firstHalf.length);
  console.log('SPLIT: COMPLETE', [firstHalf, secondHalf]);
  //   console.log('SPLIT: COMPLETE', firstHalf, secondHalf);
  return [firstHalf, secondHalf];
}

// arrays need to be sorted in order to use merge
function merge(array1, array2) {
  let sorted = [];

  console.log('INITIALIZING MERGING: ', 'ARR1: ', array1, 'ARR2: ', array2);

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

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  let halves = split(array);

  //   console.log('THIS IS THE CURRENT ARRAY: ', array);
  //   console.log('THIS IS THE CURRENT HALVES: ', halves);

  return merge(mergeSort(halves[0]), mergeSort(halves[1]));
}

const arr = [6, 21, 7, -2, 1, 100];

console.log(mergeSort(arr));

// split([6, 21, 7]);

const test = [3];
const test2 = [];

// console.log('TEST1', merge([1, 4, 7], [-1, 6, 7]));
// console.log('TEST2', split(test2));
