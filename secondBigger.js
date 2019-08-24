'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    //Sort array into a new array in a descending order
    let sort = nums.sort(function (a, b) { return b - a });
    //Initializate a variable with 0
    var secondB = 0;
    //Iterate the array
    for (let i = 0; i < sort.length; i++) {
        //Removing duplicates
        if (sort[i] === sort[i - 1]) {
            sort.splice(i, 1);
        }
    }
    //The second index is the second higher
    secondB = sort[1];
    return (secondB);
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);

    console.log(getSecondLargest(nums));
}
