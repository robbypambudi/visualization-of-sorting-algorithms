import { delay } from '@/lib/delay';

const insertionSort = async (
  array: number[],
  updateBars: (counter: number) => void
) => {
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    const temp = array[i];
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
    updateBars(i);
    await delay(2);
  }
  return array;
};

export default insertionSort;
