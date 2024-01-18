/*
PROBLEM
Give a number 'n', find the find the first 'n' elements of the fibonacci sequence

In mathematical, the Fibonacci sequence is a sequence in which number is th sum of the two
preceding ones.

The first two number in the sequence are 0 and 1.
fibonacci(2) = [0,1]
fibonacci(3) = [0,1,1]
fibonacci(7) = [0,1,1,2,3,5,8]

*/

console.log ( '**************************************** MY SOLUTION ****************************************');

let fibonacciSequence = [];


 let findSequence = function(n) {

    if(fibonacciSequence.length === 0 || fibonacciSequence.length === 1){
        if(fibonacciSequence.length === 0){
            fibonacciSequence.push(0);
        }
        if(fibonacciSequence.length === 1){
            fibonacciSequence.push(1);
        }
        findSequence(n-1);
    }else{
        // Adjust the size because start counting array at zero
        if(n -1 === 0){
            console.log (fibonacciSequence.join());
            fibonacciSequence = [];
        }else{
            let point = fibonacciSequence.length - 1;
            fibonacciSequence.push(fibonacciSequence[point] + fibonacciSequence[point-1]);
            findSequence(n-1);
        }
    }



 }

 findSequence(2);
 findSequence(3);
 findSequence(7);
 //findSequence(10);

 console.log ( '*********************************** CODEVOLUTION SOLUTION ***********************************');

 function fibonacci(n){

    let fib = [0,1];

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i-1]+ fib[i-2];

    }

    console.log (fib.join() ) ;
 }

 fibonacci(2);
 fibonacci(3);
 fibonacci(7);

  /*
 Big-O 

    loop - O(n) r
 */