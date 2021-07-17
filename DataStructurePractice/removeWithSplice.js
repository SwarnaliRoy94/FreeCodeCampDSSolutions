//Use splice() to remove elements from arr, so that it only contains elements that sum to the value of 10

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1,3);
arr.splice(2,2);
console.log(arr); //output [2,7,1] sums 10

//another solution

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1,4);
console.log(arr); //output [2,5,2,1] sums 10

//another solution

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(0,2);
arr.splice(1,2);
arr.splice(2,2);
console.log(arr); //output [5,5] sums 10

//another solution

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(0,1);
arr.splice(3,4);
console.log(arr); //output [4,5,1] sums 10

//another solution

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(0,4);
arr.splice(1,1);
console.log(arr); //output : [7,2,1] sums 10



