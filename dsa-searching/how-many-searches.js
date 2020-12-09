/*1. 

A. Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18
and using the recursive binary search algorithm, identify the;
sequence of numbers that each recursive call will search to try and find 8.;   

  Answer - The binary search algorithm will first find 12, then 6 and then 8. 
         Making a total of 3 steps and returns 3(index3)

B. Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary 
search algorithm, identify the sequence of numbers that each recursive call will search 
to try and find 16.

  Answer - Since 16 is not in the array, it will search everything in this order:
         12, 17, 14, 15 and returns -1 bc 1 less than 16 - starts in the middle, goes higher, then lower
         and so on until it either finds the number or does not & if not will return -1

Example Code:         */
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

/* SEE SEARCH FUNCTIONS COMPONENT & APP 
2. Adding a React UI
For exercises 1 and 2, you will be using a search algorithm to search for an item in a dataset.
You will be testing the efficiency of 2 search algorithms, linear search and binary search. 
You will also have a UI (a simple textbox will do) through which you will be sending your input
that you want to search. There is no server-side to this program. All of this should be done 
using React.

1) Linear search

Given the following dataset, find out how many tries it took to search for a particular item in 
the dataset. If the item is not in the dataset, provide a message and indicate how many searches
it took to find that out.

89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72,
56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69,
64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90,
1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 
14, 5,

2) Binary search

Use the same front end and the dataset from the previous exercise for this exercise.
Use array.sort to sort the dataset. Then implement a binary search to find a particular 
value in the dataset. Display how many tries it took to search for a particular item in the 
dataset using binary search. If the item is not in the dataset, provide a message and indicate 
how many searches it took to find that out.


/*
3. Find a book
Imagine you are looking for a book in a library with a Dewey Decimal index.How would you go about;
it ? Can you express this process as a search algorithm ? Implement your algorithm to find a book;
whose Dewey and book title is provided. 
*/


