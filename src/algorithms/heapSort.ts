import { delay } from '@/lib/delay';

const heapSort = async (
  array: number[],
  updateBars: (counter: number) => void
) => {
  const _heapSort = async (array: number[]) => {
    let heapSize = array.length;
    let i = Math.floor(heapSize / 2 - 1);
    while (i >= 0) {
      await heapify(array, heapSize, i);
      i--;
    }
    i = heapSize - 1;
    while (i > 0) {
      const temp = array[0];
      array[0] = array[i];
      array[i] = temp;
      heapSize--;
      await heapify(array, heapSize, 0);
      i--;
    }
  };

  const heapify = async (array: number[], heapSize: number, i: number) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < heapSize && array[left] > array[largest]) {
      largest = left;
    }
    if (right < heapSize && array[right] > array[largest]) {
      largest = right;
    }
    if (largest !== i) {
      const temp = array[i];
      array[i] = array[largest];
      array[largest] = temp;
      updateBars(i);
      await delay(2);
      await heapify(array, heapSize, largest);
    }
  };

  await _heapSort(array);
  return array;
};

export default heapSort;
