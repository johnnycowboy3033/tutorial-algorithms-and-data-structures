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




 let findSequence = function(n) {
    let fibonacciSequence = [];

    if(n === 0){
        fibonacciSequence.push(0);
    }

    if(n => 1){
        fibonacciSequence.push(0);
        fibonacciSequence.push(1);
    }

    for(let i = 2; i < n; i++){
        fibonacciSequence[i] = fibonacciSequence[i-1] + fibonacciSequence[i -2];
    }

    console.log( " --- n = " + n +" ---");   
    console.log( fibonacciSequence.join()  )

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

    console.log( " --- n = " + n +" ---");   
    console.log (fib.join() ) ;
 }

 fibonacci(2);
 fibonacci(3);
 fibonacci(7);

  /*
 Big-O 

    loop - O(n) r
 */