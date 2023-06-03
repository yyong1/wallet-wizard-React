import React, { useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';
import PropTypes from 'prop-types';

ChartJS.register(ArcElement, Tooltip, Legend);

function Chart({ dataExpense }) {
  // dataAmount is an array of numbers where each number represents
  // the amount of data for each chart [3, 6]
  const { dataAmount, expensesLabels, expensesChartColors } = dataExpense;
  // render once or when the component is mounted
  const sum = useMemo(() => dataAmount.reduce((a, b) => a + b, 0), [dataAmount]);

  const centerText = {
    id: 'centerText',
    beforeDatasetsDraw(chart) {
      const { ctx } = chart;

      ctx.save();
      ctx.font = 'bolder 30px Arial'; // font size string value
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`Total: BAM ${sum}`, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
      ctx.restore();
    },
  };

  // def a chart parameters
  const data = {
    labels: expensesLabels,
    datasets: [{
      data: dataAmount,
      backgroundColor: expensesChartColors,
      borderColor: expensesChartColors,
      cutout: '75%',
    }],
  };
  const options = {
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
          max: 1,
        },
      }],
      xAxes: [{
        ticks: {
          callback: (v, i) => (i + 1 <= expensesLabels.length ? v : null),
        },
      }],
    },
  };

  return (
    <div>
      <Doughnut
        data={data}
        options={options}
        plugins={[centerText]}
      />
    </div>
  );
}
// just validate the data type of the props for the eslint
Chart.propTypes = {
  dataExpense: PropTypes.shape({
    dataAmount: PropTypes.arrayOf(PropTypes.number).isRequired,
    expensesLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
    expensesChartColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Chart;
