import React, { useState } from 'react';
import './Expenses.css';
import Chart from '../Chart/Chart';

// hard coded data for expenses
const expensesArr = [
  {
    id: 1,
    img: 'src/logo-walletwizard-small.png',
    name: 'Exp1',
    amount: 100,
    color: 'red',
  },
  {
    id: 2,
    img: 'src/logo-walletwizard-small.png',
    name: 'Exp2',
    amount: 200,
    color: 'green',
  },
  {
    id: 3,
    img: 'src/logo-walletwizard-small.png',
    name: 'Exp3',
    amount: 300,
    color: 'yellow',
  },
];

// hard coded data for chart
const chartData = {
  expensesLabels: expensesArr.map((item) => item.name),
  dataAmount: expensesArr.map((item) => item.amount),
  expensesChartColors: expensesArr.map((item) => item.color),
};

function Expenses() {
  // state for expenses and chart
  // eslint-disable-next-line no-unused-vars
  const [isExpenses, setExpenses] = useState(expensesArr);
  // eslint-disable-next-line no-unused-vars
  const [isChartData, setChartDataState] = useState(chartData);

  return (
    <div className="expenses">
      <div className="expenses-list">
        <h1>Expenses</h1>
        <div className="list-con">
          {isExpenses?.map((item) => (
            <div key={item.id} className="list-cell">
              <img src={item?.img} className="list-of-smth" alt="..." />
              <div className="">{item.name}</div>
              <div className="">{item.amount}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="chart-con">
        <Chart dataExpense={isChartData} />
      </div>
    </div>
  );
}

export default Expenses;
