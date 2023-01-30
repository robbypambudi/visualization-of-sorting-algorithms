import { SortingAlgorithms } from '@/constant/sorting';

export const getComplexity = (sortingAlgorithmName: SortingAlgorithms) => {
  switch (sortingAlgorithmName) {
    case 'bubble-sort':
      return { time: `O(n^2)`, space: `O(1)` };
    case 'selection-sort':
      return { time: `O(n^2)`, space: `O(1)` };
    case 'insertion-sort':
      return { time: `O(n^2)`, space: `O(1)` };
    case 'merge-sort':
      return { time: `O(n log n)`, space: `O(n)` };
    case 'quick-sort':
      return { time: `O(n log n)`, space: `O(log n)` };
    case 'radix-sort':
      return { time: `O(nk)`, space: `O(n+k)` };
    case 'bucket-sort':
      return { time: `O(n^2)`, space: `O(n)` };
    case 'heap-sort':
      return { time: `O(n log n)`, space: `O(1)` };
    case 'shell-sort':
      return { time: `O(n log n)`, space: `O(1)` };
    case 'cocktail-sort':
      return { time: `O(n^2)`, space: `O(1)` };
    case 'gnome-sort':
      return { time: `O(n^2)`, space: `O(1)` };
    case 'comb-sort':
      return { time: `O(n^2)`, space: `O(1)` };
    case 'cycle-sort':
      return { time: `O(n^2)`, space: `O(1)` };
    case 'bogo-sort':
      return { time: `O(n!)`, space: `O(1)` };
    case 'stooge-sort':
      return { time: `O(n^2.7095)`, space: `O(1)` };
    default:
      throw new Error(`Invalid sorting algorithm: ${sortingAlgorithmName}`);
  }
};
