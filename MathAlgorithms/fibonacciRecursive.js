/*
PROBLEM
Give a number 'n', find the find the first 'n' elements of the fibonacci sequence

In mathematical, the Fibonacci sequence is a sequence in which number is th sum of the two
preceding ones.

The first two number in the sequence 0 and 1. (0, 1, 1, 2, 3, 5, 8 ...)

recursiveFibonacci(0) = 0
recursiveFibonacci(1) = 1
recursiveFibonacci(6) = 8

*/


console.log ( '**************************************** MY SOLUTION ****************************************');

let fibonacciSequence = [];


 let findSequence = function(n) {

    if(fibonacciSequence.length === 0 || fibonacciSequence.length === 1){
        if(fibonacciSequence.length === 0){
            fibonacciSequence.push(0);
        }else{
            fibonacciSequence.push(1);
        }
        if( n == 0){
            console.log (fibonacciSequence.join());

            if(fibonacciSequence.length === 1){
                console.log ("ANSWER: 0");
            }
            if(fibonacciSequence.length === 2){
                console.log ("ANSWER: 1");
            }
            fibonacciSequence = [];
            return;
        }else{
            findSequence(n-1);
        }
        
    }else{

        let point = fibonacciSequence.length - 1;
        fibonacciSequence.push(fibonacciSequence[point] + fibonacciSequence[point-1]);
        if(n === 0){
            console.log (fibonacciSequence.join());
            console.log ("ANSWER: " + fibonacciSequence[fibonacciSequence.length - 1] );
            fibonacciSequence = [];
            return;
        }else{
            findSequence(n-1);
        }
    }

 }

 console.log( " --- n = 0 --- "); 
 findSequence(0);

 console.log( " --- n = 1 --- "); 
 findSequence(1);

 console.log( " --- n = 2 --- "); 
 findSequence(2);

 console.log( " --- n = 3 --- "); 
 findSequence(3);

 console.log( " --- n = 6 --- "); 
 findSequence(6);

 console.log ( '*********************************** CODEVOLUTION SOLUTION ***********************************');

 function recursiveFibonacci(n){

    if( n < 2 ){
        return n;
    }

    return recursiveFibonacci(n - 1) + recursiveFibonacci(n -2);

 }

 console.log ( recursiveFibonacci(0) );
 console.log ( recursiveFibonacci(1) );
 console.log ( recursiveFibonacci(6) );
