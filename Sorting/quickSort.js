function quickSort(arr) {
    if (arr.length < 2) {
      return arr;
    }
  
    const pivot = arr[Math.floor(arr.length / 2)]; // Sets the pivot element as the middle element of the array to partition the array
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (i === Math.floor(arr.length / 2)) {   // Skips the pivot element during iteration.
        continue;
      }
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  // recursively calls quick sort left and right
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  
  const unsortedArray = [-5, 2, 9, -1, 5, 6];
  const sortedArray = quickSort(unsortedArray);
  console.log(sortedArray);