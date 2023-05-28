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
  // def a chart parameters
  const data = {
    label: expensesLabels,
    datasets: [{
      label: 'Poll',
      data: dataAmount,
      backgroundColor: expensesChartColors,
      borderColor: expensesChartColors,
    }],
  };
  //   const options = {};
  return (
    <div>
      <Doughnut
        data={data}
      // options={options}
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
