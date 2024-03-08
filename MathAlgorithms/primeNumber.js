/*
PROBLEM

Give a natural number 'n', determine if the number is prime or not

A prime number is a natural number greater that 1 that is not a product of two smaller natural numbers

isPrime(5) = true (1*5 or 5*1)
isPrime(4) = false (1*4 or 2*2 or 4*1) 

*/

console.log ( '**************************************** Church of Scyence (CS) ****************************************');

let isPrimeNumber = function(n){

    let foundPrime = true;

    for (let i = 2; i < n; i++){

        if(n % i == 0){
            foundPrime = false;
        }
    }

   //REMEMBER THIS Check all conditions (0 and 1 is not PRIME NUMBERS)
    if(n < 2){
        foundPrime = false;
    }

    console.log( "Is "+ n +"  a  Prime Number ? "+ foundPrime  );
}
isPrimeNumber(0);//false
isPrimeNumber(1);//false
isPrimeNumber(2);//true
isPrimeNumber(3);//true
isPrimeNumber(4);//false
isPrimeNumber(17);//true
isPrimeNumber(8);//false
isPrimeNumber(37);//true

console.log ( '*********************************** CODEVOLUTION SOLUTION (CS) ***********************************');

function isPrime(n){

    if(n < 2){
        return false;
    }
    for(var i = 2; i < n; i++){
        if( n % i === 0){
            return false;
        }
    }

    return true;

}

console.log(isPrime(1) ); //false
console.log(isPrime(5) ); //true
console.log(isPrime(4) ); //false

// Big-O = O(n)

/*
Optimized Primality Test
________________________________________________________________
Integer large than the square root do not need to be checked because, whenever 'n=a*b', one 
of the two factors 'a' and 'b' is less than or equal to the square root of 'n'

Example 1
n=24, a=4 and b=6
The square root of 24 is 4.89
4 is less than 4.89 so a is less than the square root of n

Example 2
n=35, a=5 and b=7
The square root of 35 is 5.91
5 is less than 5.91 so a is less than the square root of n

*/

console.log("=============== Optimized Primality Test =================");

function isPrimeOpt(n){

    if(n < 2){
        return false;
    }
    for(var i = 2; i < Math.sqrt(n); i++){
        if( n % i === 0){
            return false;
        }
    }

    return true;

}

console.log(isPrimeOpt(1) ); //false
console.log(isPrimeOpt(5) ); //true
console.log(isPrimeOpt(4) ); //false