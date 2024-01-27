/*
PROBLEM
Given an array of 'n' elements and target element 't', find the index of 't' in the array.
Return -1 if the terget element is not found.

arr = [-5, 2, 10, 4, 6], t = 10 -> Should return the index of 2
arr = [-5, 2, 10, 4, 6], t = 6 -> Should return the index of 4
arr = [-5, 2, 10, 4, 6], t = 20 -> Should return the index of -1



*/
console.log ( '**************************************** MY SOLUTION ****************************************');

findIndex = function (arr, target) {

  for(const [index,element] of arr.entries()) {

    if (target == element){
        return index;
    }

  }

  return -1;

}

console.log( findIndex([-5, 2, 10, 4, 6], 10) );
console.log( findIndex([-5, 2, 10, 4, 6],6) );
console.log( findIndex([-5, 2, 10, 4, 6], 20) );


console.log ( '**************************************** CODEVOLUTION SOLUTION ****************************************');

function linearSearch( arr, target){

    for(let i=0; i<arr.length; i++){
        if(arr[i]==target){
            return i;
        }
    }

    return -1;
}

console.log( linearSearch([-5, 2, 10, 4, 6], 10) );
console.log( linearSearch([-5, 2, 10, 4, 6],6) );
console.log( linearSearch([-5, 2, 10, 4, 6], 20) );