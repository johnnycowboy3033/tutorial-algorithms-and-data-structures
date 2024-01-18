/*
PROBLEM
Give a positive integer 'n', determines the if the number is a power of 2 or not
An integer is a power of two if there exists an integer 'x' such that 'n' === 2^x

isPowerOfTwo(1) = true (2^0)
isPowerOfTwo(2) = true (2^1)
isPowerOfTwo(5) = false

*/

console.log ( '**************************************** MY SOLUTION ****************************************');


let isPowerOf2 = function (n) {

    let result = false;
    let go = true;
    let power = 0;


    while(go){

        //Checking 2^3 == 8 ( 2^power == n)
        if ( Math.pow(2, power) == n){
            result = true;
            go = false; //stop the loop
        }else{
            power++;
        }

        //Check if 2^power is greater than n 
        //Example if 2^3 = 8 is greater than n = 7 so finsh because all square numbers are bigger 2^4 = 16, 2^5 = 32,
        if(Math.pow(2, power)>n){
            go = false; //stop the loop
        }
    }

 if(result){
    console.log ( n + "= 2^" + power + " so that " + result);
 }else{
    console.log ( n + " has no power of two " +result );
 }
    
};


isPowerOf2(3);
isPowerOf2(0);
isPowerOf2(1);
isPowerOf2(2);
isPowerOf2(8);
isPowerOf2(16);
isPowerOf2(32);



console.log ( '*********************************** CODEVOLUTION SOLUTION ***********************************');

function isPowerOfTwo(n){
    
    //n must be a power of two (1,2,8,16,32,etc...) so n greater than 1 because first power of two
    if(n < 1){
        return false;
    }

    while(n > 1){
        if(n % 2 !== 0){
            return false;
       }
       n = n / 2; //start at 2^n, then 2^n-1 until we reach 
    }

    return true;
}

console.log( isPowerOfTwo(1) ) //true
console.log( isPowerOfTwo(2) ) //true
console.log( isPowerOfTwo(5) ) //false
