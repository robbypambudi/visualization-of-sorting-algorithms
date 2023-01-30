import { delay } from '@/lib/delay';

const stoogeSort = async (
  array: number[],
  updateBars: (counter: number) => void
) => {
  const sort = async (array: number[], i: number, j: number) => {
    if (array[i] > array[j]) {
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      updateBars(i);
      await delay(2);
    }
    if (j - i + 1 > 2) {
      const t = Math.floor((j - i + 1) / 3);
      await sort(array, i, j - t);
      await sort(array, i + t, j);
      await sort(array, i, j - t);
    }
  };
  await sort(array, 0, array.length - 1);
  return array;
};

export default stoogeSort;
