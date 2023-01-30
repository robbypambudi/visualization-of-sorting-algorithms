import { delay } from '@/lib/delay';

const bogoSort = async (
  array: number[],
  updateBars: (counter: number) => void
) => {
  while (!isSorted(array)) {
    shuffle(array);
    updateBars(array.length);
    await delay(2);
  }
  return array;
};

const isSorted = (array: number[]) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
};

const shuffle = (array: number[]) => {
  for (let i = 0; i < array.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

export default bogoSort;
