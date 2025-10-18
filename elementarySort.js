// TC: O(n^2)
// SC: O(1)
function bubbleSort(arr, compare) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let swapped = false;
      for (let j = 0; j < n - 1 - i; j++) {
        if (compare(arr[j], arr[j + 1]) > 0) {
          swapped = true;
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
      if(swapped == false) break;
    }
    return arr;
  }
  
  // TC: O(n^2)
  // SC: O(1)
  function selectionSort(arr, comparator) {
      let n = arr.length;
      for(let i = 0; i<n-1; i++) {
          let smallestIdx = i;
          for(let j = i+1; j<n; j++) {
              if(comparator(arr[smallestIdx], arr[j]) > 0) {
                  smallestIdx = j
              }
          }
          let temp = arr[i]
          arr[i] = arr[smallestIdx]
          arr[smallestIdx] = temp
      }
      return arr
  }
  
  // TC: O(n^2)
  // SC: O(1)
  function insertionSort(arr, comparator) {
      let n = arr.length;
      for(let j = 1; j<n; j++) {
          let curr = arr[j]
          let k = j-1;
          while(k>=0 && comparator(arr[k],curr)>0) {
              arr[k+1] = arr[k];
              k--;
          }
          arr[k+1] = curr;
      }
      return arr;
  }
  
