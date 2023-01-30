import { delay } from '@/lib/delay';

const shellSort = async (
  array: number[],
  updateBars: (counter: number) => void
) => {
  const n = array.length;
  let gap = Math.floor(n / 2);
  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      const curr = array[i];
      let j = i;
      while (j >= gap && array[j - gap] > curr) {
        array[j] = array[j - gap];
        j -= gap;
      }
      array[j] = curr;
      updateBars(i);
      await delay(2);
    }
    gap = Math.floor(gap / 2);
  }
  return array;
};

export default shellSort;
