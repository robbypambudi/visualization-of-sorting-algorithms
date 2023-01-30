import bubbleSort from '@/algorithms/bubbleSort';
import bucketSort from '@/algorithms/bucketSort';
import heapSort from '@/algorithms/heapSort';
import insertionSort from '@/algorithms/insertionSort';
import mergeSort from '@/algorithms/mergeSort';
import quickSort from '@/algorithms/quickSort';
import radixSort from '@/algorithms/redixSort';
import selectionSort from '@/algorithms/selectionSort';
import shellSort from '@/algorithms/shellSort';
import { SortingAlgorithms } from '@/constant/sorting';

type UpdateBarsFunctionType = (
  updateBars: (compared: number) => void
) => Promise<void>;

const SelectAlgortihm = (
  data: number[],
  SortingAlgorithmName: SortingAlgorithms
): UpdateBarsFunctionType => {
  switch (SortingAlgorithmName) {
    case 'bubble-sort':
      return async (updateBars) => {
        await bubbleSort(data, updateBars);
      };
    case 'selection-sort':
      return async (updateBars) => {
        await selectionSort(data, updateBars);
      };
    case 'insertion-sort':
      return async (updateBars) => {
        await insertionSort(data, updateBars);
      };
    case 'merge-sort':
      return async (updateBars) => {
        await mergeSort(data, updateBars);
      };
    case 'quick-sort':
      return async (updateBars) => {
        await quickSort(data, updateBars);
      };
    case 'heap-sort':
      return async (updateBars) => {
        await heapSort(data, updateBars);
      };
    case 'radix-sort':
      return async (updateBars) => {
        await radixSort(data, updateBars);
      };
    case 'bucket-sort':
      return async (updateBars) => {
        await bucketSort(data, updateBars);
      };
    case 'shell-sort':
      return async (updateBars) => {
        await shellSort(data, updateBars);
      };

    default:
      return async (updateBars) => {
        await bubbleSort(data, updateBars);
      };
  }
};

export default SelectAlgortihm;
