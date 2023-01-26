import { delay } from '@/lib/delay';

const mergeSort = async (
  array: number[],
  updateBars: (counter: number) => void
) => {
  const merge = async (left: number[], right: number[]) => {
    const result = [];
    let indexLeft = 0;
    let indexRight = 0;

    while (indexLeft < left.length && indexRight < right.length) {
      if (left[indexLeft] < right[indexRight]) {
        result.push(left[indexLeft]);
        indexLeft++;
      } else {
        result.push(right[indexRight]);
        indexRight++;
      }
    }

    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
  };

  const _mergeSort = async (array: number[]): Promise<number[]> => {
    if (array.length <= 1) {
      return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(await _mergeSort(left), await _mergeSort(right));
  };

  const sortedArray = await _mergeSort(array);
  for (let i = 0; i < sortedArray.length; i++) {
    array[i] = sortedArray[i];
    updateBars(i);
    await delay(2);
  }
  return array;
};

export default mergeSort;
