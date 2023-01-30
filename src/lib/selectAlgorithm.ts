import bogoSort from '@/algorithms/bogoSort';
import bubbleSort from '@/algorithms/bubbleSort';
import bucketSort from '@/algorithms/bucketSort';
import cocktailSort from '@/algorithms/cocktailSort';
import combSort from '@/algorithms/combSort';
import cycleSort from '@/algorithms/cycleSort';
import gnomeSort from '@/algorithms/gnomeSort';
import heapSort from '@/algorithms/heapSort';
import insertionSort from '@/algorithms/insertionSort';
import mergeSort from '@/algorithms/mergeSort';
import quickSort from '@/algorithms/quickSort';
import radixSort from '@/algorithms/redixSort';
import selectionSort from '@/algorithms/selectionSort';
import shellSort from '@/algorithms/shellSort';
import stoogeSort from '@/algorithms/stoogeSort';
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
    case 'cocktail-sort':
      return async (updateBars) => {
        await cocktailSort(data, updateBars);
      };
    case 'gnome-sort':
      return async (updateBars) => {
        await gnomeSort(data, updateBars);
      };
    case 'comb-sort':
      return async (updateBars) => {
        await combSort(data, updateBars);
      };
    case 'cycle-sort':
      return async (updateBars) => {
        await cycleSort(data, updateBars);
      };
    case 'bogo-sort':
      return async (updateBars) => {
        await bogoSort(data, updateBars);
      };

    case 'stooge-sort':
      return async (updateBars) => {
        await stoogeSort(data, updateBars);
      };

    default:
      return async (updateBars) => {
        await bubbleSort(data, updateBars);
      };
  }
};

export default SelectAlgortihm;
