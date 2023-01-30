import { delay } from '@/lib/delay';

const combSort = async (
  array: number[],
  updateBars: (counter: number) => void
) => {
  const n = array.length;
  let gap = n;
  let swapped = true;
  while (gap > 1 || swapped) {
    gap = Math.floor(gap / 1.3);
    swapped = false;
    for (let i = 0; i + gap < n; i++) {
      if (array[i] > array[i + gap]) {
        const temp = array[i];
        array[i] = array[i + gap];
        array[i + gap] = temp;
        swapped = true;
        updateBars(i);
        await delay(2);
      }
    }
  }
  return array;
};

export default combSort;
