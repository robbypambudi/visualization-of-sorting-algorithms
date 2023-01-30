import { delay } from '@/lib/delay';

const insertionSort = async (
  array: number[],
  updateBars: (counter: number) => void
) => {
  for (let i = 1; i < array.length; i++) {
    // Assign curr element as a key
    const curr = array[i];
    // Check the prev elements of key and move them one position ahead if they are greater than key
    let j = i - 1;
    while (j >= 0 && array[j] > curr) {
      array[j + 1] = array[j];
      j--;
    }
    // insert curr element to correct position
    array[j + 1] = curr;
    updateBars(i);
    await delay(2);
  }
};

export default insertionSort;
