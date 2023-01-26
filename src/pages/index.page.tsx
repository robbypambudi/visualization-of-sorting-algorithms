import * as React from 'react';
import { DeepPartialSkipArrayKey } from 'react-hook-form';

import Form from '@/components/form/Form';
import SEO from '@/components/SEO';
import Typography from '@/components/Typography';
import { SortingAlgorithms } from '@/constant/sorting';
import Layout from '@/layouts/Layout';
import clsxm from '@/lib/clsxm';
import generateData from '@/lib/generateData';
import { getComplexity } from '@/lib/getComplexity';
import logger from '@/lib/logger';
import {
  DrawVisualization,
  startVisualization,
} from '@/pages/components/DrawVisualization';
import useSortingStore from '@/store/useSortingStore';

type SortTypeForm = {
  size: number;
  sorting_type: SortingAlgorithms;
};

const defaultValues: SortTypeForm = {
  size: 200,
  sorting_type: 'bubble-sort',
};

export default function Home() {
  const [subscriptions, setSubscriptions] =
    React.useState<DeepPartialSkipArrayKey<SortTypeForm>>();

  // Store
  const timeComplexity = useSortingStore.useTimeComplexity();
  const spaceComplexity = useSortingStore.useSpaceComplexity();
  const setSortTime = useSortingStore.useSetSortTime();
  const sortingData = useSortingStore.useStartSorting();
  const setStartSorting = useSortingStore.useSetStartSorting();
  const setTimeComplexity = useSortingStore.useSetTimeComplexity();
  const setSpaceComplexity = useSortingStore.useSetSpaceComplexity();

  const onSubmit = (data: SortTypeForm) => {
    logger(data);
  };

  const ref = React.useRef<SVGSVGElement>(null);

  const currentAlgorithm = React.useRef<SortingAlgorithms>();
  const currentSize = React.useRef<number>();

  const dataSize = subscriptions?.size || 10;
  let data = generateData(dataSize);
  const algorithmsType: SortingAlgorithms =
    subscriptions?.sorting_type || 'bubble-sort';
  React.useEffect(() => {
    const drawVisualizationOnLoad = () => {
      const shouldUpdateVisualization =
        currentAlgorithm.current !== algorithmsType ||
        currentSize.current !== dataSize;

      if (shouldUpdateVisualization) {
        currentSize.current = dataSize;

        if (currentAlgorithm.current !== algorithmsType) {
          const { time, space } = getComplexity(algorithmsType);
          setSpaceComplexity(space);
          setTimeComplexity(time);
        }

        currentAlgorithm.current = algorithmsType;
        DrawVisualization(data, ref);
        // logger(generateData(dataSize));
      }
    };
    drawVisualizationOnLoad();
  }, [
    algorithmsType,
    data,
    dataSize,
    setSortTime,
    setSpaceComplexity,
    setStartSorting,
    setTimeComplexity,
    subscriptions,
  ]);

  const startSorting = () => {
    setStartSorting({ isSorting: true, timeInfo: '0.00 s' });
    startVisualization(data, algorithmsType, ref, setStartSorting);
  };

  const resetData = () => {
    data = generateData(dataSize);
    DrawVisualization(data, ref);
  };

  return (
    <Layout>
      <SEO title='Home' description='This is the home page' />
      <main className='bg-gray-100 min-h-screen'>
        <section className='layout pt-6'>
          <Typography variant='h2' as='h2' className='text-center'>
            Sorting algorithms visualisation
          </Typography>

          <Form<SortTypeForm>
            onSubmit={onSubmit}
            setSubscriptions={setSubscriptions}
            defaultValues={defaultValues}
            className='mt-4'
          >
            {({ register }) => {
              return (
                <div className='grid grid-cols-2 gap-x-4'>
                  <div>
                    <label htmlFor='size'>Size</label>
                    <select {...register('size')} className='w-full rounded-md'>
                      <option value='200'>200</option>
                      <option value='300'>300</option>
                      <option value='500'>500</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor='sorting_type'>Sorting Type</label>
                    <select
                      {...register('sorting_type')}
                      className='w-full rounded-md'
                    >
                      <option value='bubble-sort'>Bubble Sort</option>
                      <option value='selection-sort'>Selection Sort</option>
                      <option value='insertion-sort'>Insertion Sort</option>
                      <option value='merge-sort'>Merge Sort</option>
                      <option value='quick-sort'>Quick Sort</option>
                      <option value='heap-sort'>Heap Sort</option>
                    </select>
                  </div>
                </div>
              );
            }}
          </Form>
        </section>
        <section>
          <div className='layout'>
            <div className='flex justify-between mt-4'>
              <div>
                <Typography variant='h3' as='h3'>
                  Time complexity
                </Typography>
                <p id='time-stats'>{sortingData.timeInfo}</p>
              </div>
              <div>
                <Typography variant='h3' as='h3'>
                  Worst case time complexity
                </Typography>
                <p id='time-complexity'>{timeComplexity}</p>
              </div>
              <div>
                <Typography variant='h3' as='h3'>
                  Worst case space complexity
                </Typography>
                <p id='time-complexity'>{spaceComplexity}</p>
              </div>
            </div>
            <div className='flex items-center justify-center mt-5 gap-x-3'>
              <button
                id='start-button'
                onClick={startSorting}
                className={clsxm(
                  'border px-6 py-2 bg-green-500 text-white rounded',
                  sortingData.isSorting && 'cursor-not-allowed'
                )}
                disabled={sortingData.isSorting}
              >
                Start
              </button>
              <button
                id='start-button'
                onClick={resetData}
                className={clsxm(
                  'border px-6 py-2 bg-yellow-500 text-white rounded',
                  sortingData.isSorting && 'cursor-not-allowed'
                )}
                disabled={sortingData.isSorting}
              >
                Reset
              </button>
            </div>
          </div>
        </section>
        <section className='layout my-4 flex justify-center items-center'>
          <svg ref={ref}></svg>
        </section>
        <div className='mt-10 mb-5'>
          <p className='text-center'>Copyright RobbyPambudi</p>
        </div>
      </main>
    </Layout>
  );
}
