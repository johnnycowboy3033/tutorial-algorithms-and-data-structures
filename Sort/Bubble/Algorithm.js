function swap(_baseArr,_baseIndex,_offsetIndex){
    var temp;

     temp = _baseArr[_baseIndex];
     _baseArr[_baseIndex] = _baseArr[_offsetIndex];
     _baseArr[_offsetIndex] = temp;

      return _baseArr;

}

function bubbleSort(arr){
    var swapped;

    for(var mainIndex = 0; mainIndex < arr.length - 1; mainIndex++){
    
            //console.log(`_______________`);
            swapped = false;
            for(var offset = 1 + mainIndex; offset < arr.length; offset++){
        
                if (arr[offset] < arr[mainIndex]) {
                    arr = swap(arr, mainIndex, offset);
                    swapped = true;
                }
            }
     
            // IF no two elements were 
            // swapped by inner loop, then break
            if (swapped == false){
                break;
            }
            
    }


}
    
 

 
// Driver program
var arr = [ 64, 34, 25, 12, 22, 11, 90 ];
bubbleSort(arr);

console.log(arr);