/* https://leetcode.com/problems/create-hello-world-function/?envType=study-plan-v2&envId=30-days-of-javascript

2667. Create Hello World Function

Write a function createHelloWorld. It should return a new function that always returns "Hello World". */



var createHelloWorld = function() {  //Created a function with the variable createHelloWorld
    return function(...args) {   //Passes function through arguments 
        return "Hello World"   //Returning function
    }
};

