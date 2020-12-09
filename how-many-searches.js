//Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18
// and using the recursive binary search algorithm, identify the;
// sequence of numbers that each recursive call will search to try and find 8.;   

// Answer - The binary search algorithm will first find 12, then 6 and then 8. 
//          Making a total of 3 steps and returns 3(index3)

// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary 
//search algorithm, identify the sequence of numbers that each recursive call will search 
//to try and find 16.

// Answer - Since 16 is not in the array, it will search everything in this order:
//          12, 17, 14, 15 and returns -1 bc 1 less than 16 - starts in the middle, goes higher, then lower
//          and so on until it either finds the number or does not & if not will return -1

const sortedList = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]

function binarySearch(array, value, start = 0, end = array.length - 1) {
  if (start > end) return -1;

  let index = Math.floor((start + end) / 2);
  let item = array[index];

  if (item === value) {
    return index;
  }
  else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
};

console.log(binarySearch(sortedList, 8))