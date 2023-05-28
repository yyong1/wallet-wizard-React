import React from 'react';
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
  // const chartColors = props.colors;
  // const chartColors = ['green', 'red'];

  // bug that renders the chart text multiple times in a second (bad performance)
  function getSum(arrData) {
    const sum = arrData.reduce((a, b) => a + b, 0);
    console.log(sum);
    return sum;
  }

  const centerText = {
    id: 'centerText',
    beforeDatasetsDraw(chart, args, options) {
      const { ctx, data } = chart;

      ctx.save();
      ctx.font = 'bolder 30px Arial'; // font size string value
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`Total: ${getSum(dataAmount)}`, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
      ctx.restore();
    },
  };

  // def a chart parameters
  const data = {
    label: expensesLabels,
    datasets: [{
      label: expensesLabels,
      data: dataAmount,
      backgroundColor: expensesChartColors,
      borderColor: expensesChartColors,
      cutout: '75%',
    }],
  };
  //   const options = {};
  return (
    <div>
      <Doughnut
        data={data}
        plugins={[centerText]}
      />
    </div>
  );
}

Chart.propTypes = {
  dataExpense: PropTypes.shape({
    dataAmount: PropTypes.arrayOf(PropTypes.number).isRequired,
    expensesLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
    expensesChartColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Chart;
