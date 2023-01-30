import { delay } from '@/lib/delay';

const cycleSort = async (
  array: number[],
  updateBars: (counter: number) => void
) => {
  const n = array.length;
  for (let cycleStart = 0; cycleStart <= n - 2; cycleStart++) {
    let item = array[cycleStart];
    let pos = cycleStart;
    for (let i = cycleStart + 1; i < n; i++) {
      if (array[i] < item) {
        pos++;
      }
    }
    if (pos === cycleStart) {
      continue;
    }
    while (item === array[pos]) {
      pos++;
    }
    if (pos !== cycleStart) {
      const temp = item;
      item = array[pos];
      array[pos] = temp;
      updateBars(pos);
      await delay(2);
    }
    while (pos !== cycleStart) {
      pos = cycleStart;
      for (let i = cycleStart + 1; i < n; i++) {
        if (array[i] < item) {
          pos++;
        }
      }
      while (item === array[pos]) {
        pos++;
      }
      if (item !== array[pos]) {
        const temp = item;
        item = array[pos];
        array[pos] = temp;
        updateBars(pos);
        await delay(2);
      }
    }
  }
  return array;
};

export default cycleSort;
