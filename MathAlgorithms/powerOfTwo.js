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

console.log( "---- isPowerOfTwo ----");
function isPowerOfTwo(n){
    
    //n must be a power of two (1,2,8,16,32,etc...) so n greater than 1 because first power of two
    if(n < 1){
        return false;
    }

    while(n > 1){

        /*
        5/2 = 2.5 
        5%2 with Remainder of 1

        2.5/2 = 1.25
        2.5%2 with Remainder of 0.5

        1.25/2 = 0.625 STOP the while loop
        */
        if(n % 2 !== 0){
            return false;
       }
       n = n / 2; //Reduce n until is less then 1 to hit the stop condition for the while loop
    }

    return true;
}

console.log( isPowerOfTwo(1) ) //true
console.log( isPowerOfTwo(2) ) //true
console.log( isPowerOfTwo(5) ) //false

console.log( "---- isPowerOfTwoBitWise ----");

/*

Bitwise Power of Two
____________________________________
1 -> 001 in Binary
2 -> 010 in Binary
3 -> 011 in Binary
4 -> 100 in Binary

Note:

1 - 0001
 AND
0 - 0000
--------
0 - 0000 TRUE 

2 - 0010
 AND
1 - 0001
--------
0 - 0000 TRUE 


3 - 0011
 AND
2 - 0010
--------
0 - 0010 FALSE 


4 - 1000
 AND
3 - 0011
--------
0 - 0000 TRUE 


*/

function printBinary(n){

    let noMinus = Number(n).toString(2);
     let oneMinus = Number(n-1).toString(2);

    let topLength = noMinus.length;
    let bottomLength = oneMinus.length;

    console.log( noMinus );

    if(topLength !== bottomLength){
        console.log( "0"+ oneMinus );
    }else{
        console.log( oneMinus );
    }


}
function isPowerOfTwoBitWise(n){


    console.log("**** n = " + n + " ****");

    if(n<1){
        return false;
    }
    
    printBinary(n);

    return (n & (n - 1)) === 0;
}

console.log( isPowerOfTwoBitWise(1) ) //true
console.log( isPowerOfTwoBitWise(2) ) //true
console.log( isPowerOfTwoBitWise(3) ) //false
console.log( isPowerOfTwoBitWise(4) ) //true
console.log( isPowerOfTwoBitWise(5) ) //false

/*

5 - 1001
  AND
4 - 1000
-------- 
    1000 FALSE
*/