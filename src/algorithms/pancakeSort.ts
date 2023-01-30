import { delay } from '@/lib/delay';

const pancakeSort = async (
  array: number[],
  updateBars: (counter: number) => void
) => {
  const flip = (array: number[], i: number) => {
    let start = 0;
    while (start < i) {
      const temp = array[start];
      array[start] = array[i];
      array[i] = temp;
      start++;
      i--;
    }
  };

  let currSize = array.length;
  while (currSize > 1) {
    let mi = 0;
    for (let i = 0; i < currSize; i++) {
      if (array[i] > array[mi]) {
        mi = i;
      }
    }
    if (mi !== currSize - 1) {
      flip(array, mi);
      flip(array, currSize - 1);
    }
    currSize--;
    updateBars(currSize);
    await delay(2);
  }
  return array;
};

export default pancakeSort;
