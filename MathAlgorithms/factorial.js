/*
PROBLEM
Give an integer 'n' find the factorial of that integer

In mathematical, the factorial of a non-negative integer 'n', denoted n!, is the product of 
all positive integers less than or equal to 'n'

Factorial of zero is 1.

factorial(4) = 4*3*2*1 = 24 
factorial(5) = 5*4*3*2*1 = 120 

*/

console.log ( '**************************************** MY SOLUTION and CODEVOLUTION SOLUTION ****************************************');

let findFactorial = function(n){

    let result = 1;

    for(let i = 1; i <= n; i++){
        result = result * i;
    }

    console.log( n +"! = " +result );

}

findFactorial(0);
findFactorial(1);
findFactorial(2);
findFactorial(3);
findFactorial(4);
findFactorial(5);

 /*
 Big-O 

    loop - O(n) r
 */