let comparisonCounter = 0;

function bubbleSort(array) {
  let swappedArray = [];
  for (let i = 0; i < array.length; i++) {
    let currentEl = array[i];
    let nextEl = array[i + 1];

    if (currentEl > nextEl) {
      swappedArray = [...swappedArray, ...swap(currentEl, nextEl)];
    }
  }
  return swappedArray;
}

function swap(currentEl, nextEl) {}

// use a while loop to iteratively check. swap counter is initialized to 0 inside of loop, and incremented as swap is called. If count is 0, then we know to exit while loop.
