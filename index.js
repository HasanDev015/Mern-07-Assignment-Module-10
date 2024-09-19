// 1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.
// Answer:

function calculateDifference(num1, num2) {
    return num1 - num2;
}

let num1 = 35;
let num2 = 12;
console.log(`Q-1 answer: The difference between ${num1} and ${num2} is ${calculateDifference(num1, num2)}`);



// 2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.
// Answer:

function isOdd(num) {
    if(num % 2 == 0) {
        return false;
    } else {
        return true;
    }
}

let num = 30;
console.log(`Q-2 answer: ${num} is odd: ${isOdd(num)}`);



// 3) Write a function named findMin that takes an array of numbers and returns the smallest number in the array.
// Answer:

function findMin(arr) {
    if (arr.length === 0) {
        throw new Error("Array cannot be empty");
    }

    let min = arr[0];
    let i = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

let numbers = [15, 23, 81, 11, 42];
console.log(`Q-3 answer: The smallest number is ${findMin(numbers)}`);



// 4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.
// Answer:

function filterEvenNumbers(arr) {
    const evenNumbers = [];
    let i = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }

    return evenNumbers;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Q-4 answer: New Array of even numbers ${filterEvenNumbers(arr)}`);



// 5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.
// Answer:

function sortArrayDescending(arr) {
    return arr.sort((a, b) => b - a);
}

let numbersArray = [5, 2, 9, 1, 7];
console.log(`Q-5 answer: Sorted array in descending order: ${sortArrayDescending(numbersArray)}`);



// 6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.
// Answer:

function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

let inputString = "Hello World!";
console.log(`Q-6 answer: String with first later lowercase: ${lowercaseFirstLetter(inputString)}`);



// 7) Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string.
// Answer:

function countVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;
    let i = 0;

    for (i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

let inputString2 = "Hello World!";
console.log(`Q-7 answer: Number of vowels: ${countVowels(inputString2)}`);



// 8) Write a function named findAverage that takes an array of numbers and returns the average of all elements.
// Answer:

function findAverage(arr) {
    if (arr.length === 0) {
        throw new Error("Array cannot be empty");
    }

    let sum = 0;
    let i = 0;

    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}

let numbers3 = [10, 20, 30, 40, 50];
console.log(`Q-8 answer: Average of the array: ${findAverage(numbers3)}`);