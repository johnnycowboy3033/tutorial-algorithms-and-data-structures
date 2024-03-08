/*
Factorial of a Number

PROBLEM
Give an integer 'n', and find the factorial of that integer. 

In Mathematics, the factorial of a non-negative integer 'n', denoted n!, is the product of all
positive integers less than or equal to 'n'

Factorial of zero is 1.

factorial(4) = 4*3*2*1 = 24

factorial(5) = 5*4*3*2*1 = 120
*/


console.log ( '**************************************** Church of Scyence (CS) ****************************************');

function recurFactorial(n){
    if( n <= 1 ){
        return 1;
    }

    return n * recurFactorial(n-1);
}
console.log ( recurFactorial(0) );
console.log ( recurFactorial(1) );
console.log ( recurFactorial(4) );
console.log ( recurFactorial(5) );


console.log ( '*********************************** CODEVOLUTION SOLUTION (CS) ***********************************');

function recursiveFactorial(n){
    if( n <= 1 ){
        return 1;
    }

    return n * recursiveFactorial(n-1);
}


console.log ( recursiveFactorial(0) );
console.log ( recursiveFactorial(1) );
console.log ( recursiveFactorial(4) );
console.log ( recursiveFactorial(5) );