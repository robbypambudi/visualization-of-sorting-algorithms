import { delay } from '@/lib/delay';

const bubbleSort = async (
  array: number[],
  updateBars: (counter: number) => void
) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
        updateBars(i);
        await delay(2);
      }
    }
  }

  return array;
};

export default bubbleSort;
