import React from 'react';
import './Expenses.css';
import Chart from '../Chart/Chart';

const chartData = {
  expensesLabels: ['Exp1', 'Exp2'],
  dataAmount: [30, 6],
  expensesChartColors: ['green', 'red'],
};

function Expenses() {
  return (
    <div className="expenses">
      <div className="expenses-list">
        <h1>Expenses</h1>
        <div className="list-con">
          list
        </div>
      </div>
      <div className="chart-con">
        <Chart dataExpense={chartData} />
      </div>
    </div>
  );
}

export default Expenses;
