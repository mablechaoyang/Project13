/* https://www.codewars.com/kata/56b97b776ffcea598a0006f2/train/javascript


Task
Given an array of integers, your function bubblesortOnce/bubblesort_once/BubblesortOnce 
(or equivalent, depending on your language's naming conventions) should return a new array equivalent to performing
exactly 1 complete pass on the original array. Your function should be pure, i.e. it should not mutate the input array

Consider the following list:

9, 7, 5, 3, 1, 2, 4, 6, 8 */


function bubbleSortOnce(a) {   //Created function bubblesort and defined it with a
    let result = [...a]   //Create new array with spread operator
    for ( let i = 0 < result.length - 1; i++;) {   // Create loop to pass over all elements
    if ( result [i] > result [i + 1]) {   //If current element is greater than the next, swap positions
        [result[i], result [i+1] = result[i+1], reuslt[i]]
        }
    }
    return result  //After loop is finished the sorted array is returned.
}





