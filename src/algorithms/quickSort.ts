import { delay } from '@/lib/delay';

const quickSort = async (
  array: number[],
  updateBars: (counter: number) => void
) => {
  const _quickSort = async (array: number[], left: number, right: number) => {
    let index;
    if (array.length > 1) {
      index = await partition(array, left, right);
      if (left < index - 1) {
        await _quickSort(array, left, index - 1);
      }
      if (index < right) {
        await _quickSort(array, index, right);
      }
    }
  };

  const partition = async (array: number[], left: number, right: number) => {
    const pivot = array[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;
    while (i <= j) {
      while (array[i] < pivot) {
        i++;
      }
      while (array[j] > pivot) {
        j--;
      }
      if (i <= j) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        updateBars(i);
        await delay(2);
        i++;
        j--;
      }
    }
    return i;
  };

  await _quickSort(array, 0, array.length - 1);
  return array;
};

export default quickSort;
