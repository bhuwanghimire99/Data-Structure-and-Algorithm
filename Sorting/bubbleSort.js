function bubbleSort(arr) {
    const length = arr.length;
    let swapped;
  
    do {
      swapped = false;
      for (let i = 0; i < length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          // Swaping the elements
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  
    return arr;
  }
  
  
  const array = [-64, 34, 25, -12, 22, 11, 90];
  console.log("Original Array: ", array);
  const sortedArray = bubbleSort(array);
  console.log("Sorted Array: ", sortedArray);