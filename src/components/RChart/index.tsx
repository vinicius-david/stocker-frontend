import ReactECharts from 'echarts-for-react';

import React from 'react';

interface ChartProps {
  x: string[];
  y: number[];
  yStart: number;
}

const ChartComponent: React.FC<ChartProps> = ({ x, y, yStart }) => {
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: x,
    },
    yAxis: {
      type: 'value',
      axisLine: {
        onZero: false,
      },
      min: yStart,
    },
    series: [
      {
        data: y,
        type: 'line',
        smooth: true,
        areaStyle: { normal: {} },
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  return <ReactECharts option={options} />;
};

export default ChartComponent;
