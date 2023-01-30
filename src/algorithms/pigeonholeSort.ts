import { delay } from '@/lib/delay';

const pigeonholeSort = async (
  array: number[],
  updateBars: (counter: number) => void
) => {
  const min = Math.min(...array);
  const max = Math.max(...array);
  const range = max - min + 1;
  const holes = Array(range).fill(0);

  for (let i = 0; i < array.length; i++) {
    holes[array[i] - min]++;
  }

  let i = 0;
  for (let count = 0; count < range; count++) {
    while (holes[count]-- > 0) {
      array[i++] = count + min;
      updateBars(i);
      await delay(2);
    }
  }

  return array;
};

export default pigeonholeSort;
