import { delay } from '@/lib/delay';

const selectionSort = async (
  array: number[],
  updateBars: (counter: number) => void
) => {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    const temp = array[i];
    array[i] = array[min];
    array[min] = temp;
    updateBars(i);
    await delay(2);
  }
  return array;
};

export default selectionSort;
