import { delay } from '@/lib/delay';

const gnomeSort = async (
  array: number[],
  updateBars: (counter: number) => void
) => {
  let i = 1;
  while (i < array.length) {
    if (i === 0 || array[i - 1] <= array[i]) {
      i++;
    } else {
      const temp = array[i];
      array[i] = array[i - 1];
      array[i - 1] = temp;
      i--;
      updateBars(i);
      await delay(2);
    }
  }
  return array;
};

export default gnomeSort;
