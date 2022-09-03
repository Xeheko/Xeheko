 //[20, 10, 25, 88, 99, 2000, 32, 13, 98, 9]
function numSort(arr) {
    var len = arr.length;
  
    for (var i = 0; i < len ; i++) {
      for(var j = 0 ; j < len - i - 1; j++){
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j + 1] = temp;
      }
     }
    }

    return arr;
  }
  document.write(numSort([20,10,25,88,99,2000,32,13,98,9])); //máš to kdyžtak i jakože na webu xd 
  console.log(numSort([20,10,25,88,99,2000,32,13,98,9]))

