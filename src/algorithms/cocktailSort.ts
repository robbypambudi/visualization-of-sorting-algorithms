import { delay } from '@/lib/delay';

const cocktailSort = async (
  array: number[],
  updateBars: (counter: number) => void
) => {
  let swapped = true;
  let start = 0;
  let end = array.length;
  while (swapped) {
    swapped = false;
    for (let i = start; i < end - 1; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
        updateBars(i);
        await delay(2);
      }
    }
    if (!swapped) {
      break;
    }
    swapped = false;
    end--;
    for (let i = end - 1; i >= start; i--) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
        updateBars(i);
        await delay(2);
      }
    }
    start++;
  }
  return array;
};

export default cocktailSort;
