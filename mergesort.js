function split(wholeArray) {
  const endIndex = Math.floor(wholeArray.length / 2);
  let firstHalf = wholeArray.slice(0, endIndex);
  let secondHalf = wholeArray.slice(endIndex);

  return [firstHalf, secondHalf];
}

function merge(array1, array2) {
  let sortedArray = [];
  let head1Counter = 0;
  let head2Counter = 0;
  let head1 = array1[head1Counter];
  let head2 = array2[head2Counter];
  //https://stackoverflow.com/questions/3469885/somevariable-vs-somevariable-in-javascript

  while (sortedArray.length < array1.length + array2.length) {
    // console.log('sortedArray.length', sortedArray.length);
    // console.log('array1.length + array2.length', array1.length + array2.length);

    // console.log('---------------------this is a new test');
    // console.log('this is the head1', head1);
    // console.log('this is the head2', head2);
    // console.log('this is the Sorted Array', sortedArray);

    if (head2 < head1 || (head1 === undefined && head2 !== undefined)) {
      sortedArray.push(head2);
      head2 = array2[++head2Counter];
      // console.log('what is head1 after the push?', head1);
      // console.log('what is head2 after the push?', head2);
      // console.log('what sortedArray after push??', sortedArray);
    }
    if (head1 < head2 || (head2 === undefined && head1 !== undefined)) {
      sortedArray.push(head1);
      // console.log(true);
      head1 = array1[++head1Counter];
    }
  }
  return sortedArray;
}

function mergeSort(array) {
  if (array.length > 1) {
    split(array);
    console.log(split(array));
  }
  // if (array.length === 1) {
  //     merge(array)
  // }
}
