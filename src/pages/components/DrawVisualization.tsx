import * as d3 from 'd3';
import React from 'react';

import { CHART_HEIGHT, CHART_MARGIN, CHART_WIDTH } from '@/constant/d3';
import { SortingAlgorithms } from '@/constant/sorting';
import SelectAlgortihm from '@/lib/selectAlgorithm';
import { SortingData } from '@/types/sorting';

const width = CHART_WIDTH;
const height = CHART_HEIGHT;
const barPadding = 0.95;

const DrawVisualization = (
  data: number[],
  ref: React.RefObject<SVGSVGElement>
) => {
  data = data.filter((d) => d !== undefined);

  d3.select(ref.current).selectAll('rect').remove();
  d3.select(ref.current).selectAll('svg').remove();
  const svg = d3.select(ref.current);

  svg
    .attr('width', width)
    .attr('height', height)
    .attr(
      'transform',
      'translate(' + CHART_MARGIN.left + ',' + CHART_MARGIN.top + ')'
    );

  const maxValue = data.reduce(
    (max, val) => (val !== undefined && val > max ? val : max),
    0
  );

  const yScale = d3
    .scaleLinear()
    .domain([0, maxValue + 10])
    .range([CHART_HEIGHT, 0]);

  const barWidth = CHART_WIDTH / data.length - 1;

  svg
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => i * (barWidth + barPadding))
    .attr('width', barWidth)
    .attr('y', (d) => yScale(d))
    .attr('height', (d) => CHART_HEIGHT - yScale(d))
    .on('mouseover', function (d, i) {
      d3.select(this.parentElement)
        .append('text')
        .text(i)
        .attr(
          'x',
          () => data.indexOf(i) * (barWidth + barPadding) + barWidth / 2
        )
        .attr('y', yScale(i) - 5)
        .attr('fill', 'steelblue')
        .attr('font-size', '14px')
        .attr('text-anchor', 'middle');
    })
    .on('mouseleave', function () {
      d3.select(this.parentElement).select('text').remove();
      d3.select(this).attr('opacity', '1');
    });
};

const startVisualization = (
  data: number[],
  algorithmType: SortingAlgorithms,
  ref: React.RefObject<SVGSVGElement>,
  setStartSorting: (value: SortingData) => void
) => {
  const svg = d3.select(ref.current);

  const updateBars = (counter: number) => {
    const bars = svg.selectAll<SVGRectElement, number>('rect').data(data);

    const maxValue = data.reduce(
      (max, val) => (val !== undefined && val > max ? val : max),
      0
    );

    const barWidth = CHART_WIDTH / data.length - 1;

    const yScale = d3
      .scaleLinear()
      .domain([0, maxValue + 10])
      .range([CHART_HEIGHT, 0]);

    const update = (
      selection: d3.Selection<SVGRectElement, number, d3.BaseType, unknown>
    ) => {
      selection
        .style('fill', (d, i) => (i === counter + 1 ? 'red' : 'blue'))
        .attr('x', (d, i) => i * (barWidth + barPadding))
        .attr('y', (d) => yScale(d))
        .attr('height', (d) => CHART_HEIGHT - yScale(d));
    };

    bars.call(update);
    bars
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * (barWidth + barPadding))
      .attr('y', (d) => yScale(d))
      .attr('width', barWidth)
      .attr('height', 0)
      .call(update);

    bars.exit().remove();
  };
  let timeInfo = '0.00 s';

  const sortingPromise = new Promise<void>((resolve) => {
    async function start() {
      const startTime = performance.now();
      const sort = SelectAlgortihm(data, algorithmType);
      await sort(updateBars);
      const endTime = performance.now();
      const time = ((endTime - startTime) / 1000).toFixed(2);
      timeInfo = `${time} s`;

      resolve();
    }
    start();
  });
  sortingPromise.then(() => {
    svg.selectAll('rect').style('fill', 'black');
    setStartSorting({ isSorting: false, timeInfo: timeInfo });
  });
};

export { DrawVisualization, startVisualization };
