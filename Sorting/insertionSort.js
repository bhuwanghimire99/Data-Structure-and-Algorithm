function insertionSort(arr) {
    
  
    for (let i = 1; i < arr.lengthh; i++) {
      let current = arr[i];
      let j = i - 1;
  
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      arr[j + 1] = current;
    }
  
    return arr;
  }
  
 
  const array = [-5, 3, -8, 1, 2, 7, 4];
  console.log("Original Array", array);
  const sortedArray = insertionSort(array);
  console.log("Sorted Array", sortedArray);