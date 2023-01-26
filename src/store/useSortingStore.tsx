import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import produce from 'immer';
import { create } from 'zustand';

import { SortingAlgorithms } from '@/constant/sorting';
import { SortingData } from '@/types/sorting';

type SortingStoreType = {
  sortingType: SortingAlgorithms;
  dataSize: number;
  sortTime: number;
  spaceComplexity: string;
  timeComplexity: string;
  startSorting: SortingData;
  setSortingType: (sortingType: SortingAlgorithms) => void;
  setDataSize: (dataSize: number) => void;
  setSortTime: (sortTime: number) => void;
  setStartSorting: (startSorting: SortingData) => void;
  setSpaceComplexity: (spaceComplexity: string) => void;
  setTimeComplexity: (timeComplexity: string) => void;
};

const useSortingStore = create<SortingStoreType>((set) => ({
  sortingType: 'bubble-sort',
  sortTime: 0,
  startSorting: {
    isSorting: false,
    timeInfo: '0.00 s',
  },
  spaceComplexity: 'O(1)',
  timeComplexity: 'O(n^2)',
  setSortingType: (sortingType) => {
    set(
      produce<SortingStoreType>((state) => {
        state.sortingType = sortingType;
      })
    );
  },
  dataSize: 10,
  setDataSize: (dataSize) => {
    set(
      produce<SortingStoreType>((state) => {
        state.dataSize = dataSize;
      })
    );
  },
  setSortTime: (sortTime) => {
    set(
      produce<SortingStoreType>((state) => {
        state.sortTime = sortTime;
      })
    );
  },
  setStartSorting: (startSorting) => {
    set(
      produce<SortingStoreType>((state) => {
        state.startSorting = startSorting;
      })
    );
  },
  setSpaceComplexity: (spaceComplexity) => {
    set(
      produce<SortingStoreType>((state) => {
        state.spaceComplexity = spaceComplexity;
      })
    );
  },
  setTimeComplexity: (timeComplexity) => {
    set(
      produce<SortingStoreType>((state) => {
        state.timeComplexity = timeComplexity;
      })
    );
  },
}));

const useDialogStore = createSelectorHooks(useSortingStore);

export default useDialogStore;
