console.log("Binary Search");

// Program to implement iterative Binary Search
 
  
// A iterative binary search function. It returns
// location of x in given array arr[l..r] is present,
// otherwise -1
 
function binarySearch(arr, x)
{    
    let h = 0;
    let t = arr.length - 1;
    let mid;
    while (t >= h) {
         mid = h + Math.floor((t - h) / 2);
  
        // If the element is present at the middle
        // itself
        console.log(`h= ${h} t= ${t}  mid= ${mid}`)
        if (arr[mid] == x)
            return mid;
  
        // If element is smaller than mid, then
        // it can only be present in left subarray
        if (arr[mid] > x)
            t = mid - 1;
             
        // Else the element can only be present
        // in right subarray
        else
            h = mid + 1;
    }
  
    // We reach here when element is not
    // present in array
    return -1;
}

arr =new Array(2, 3, 4, 10, 40);
x = 40;
n = arr.length;
result = binarySearch(arr, x);
 
(result == -1) ? console.log("Element is not present in array")
           : console.log ("Element is present at index " + result);// Element is present at index 4
/*

h= 0 t= 4  mid= 2

h= 3 t= 4  mid= 3

h= 4 t= 4  mid= 4
*/