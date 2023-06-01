import React, { useState } from 'react';
import './Expenses.css';
import Chart from '../Chart/Chart';
// for the text style
import '../generatedStyle.css';

const images = require.context('./external', false, /\.(png|jpe?g|svg)$/);

// hard coded data for expenses
const expensesArr = [
  {
    id: 1,
    img: images('./food.png'),
    name: 'Exp1',
    amount: 100,
    color: 'red',
  },
  {
    id: 2,
    img: images('./food.png'),
    name: 'Exp2',
    amount: 200,
    color: 'green',
  },
  {
    id: 3,
    img: images('./food.png'),
    name: 'Exp3',
    amount: 300,
    color: 'yellow',
  },
  {
    id: 4,
    img: images('./food.png'),
    name: 'Exp4',
    amount: 230,
    color: 'blue',
  },
  {
    id: 5,
    img: images('./food.png'),
    name: 'Exp5',
    amount: 220,
    color: 'purple',
  },
  {
    id: 6,
    img: images('./food.png'),
    name: 'Exp6',
    amount: 120,
    color: 'carrot',
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
    // <div className="expenses">
    //   <div className="expenses-list">
    //     <h1>Expenses</h1>
    //     <div className="list-con">
    //       {isExpenses?.map((item) => (
    //         <div key={item.id} className="list-cell">
    //           <img src={item?.img} className="list-of-smth" alt="..." />
    //           <div className="">{item.name}</div>
    //           <div className="">{item.amount}</div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    //   <div className="chart-con">
    //     <Chart dataExpense={isChartData} />
    //   </div>
    // </div>
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
        data-tag="font"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&amp;display=swap"
        data-tag="font"
      />
      <div className="expenses-container">
        <div className="expenses-expenses">
          <div className="expenses-listoverview">

            {/* EXPENSES LIST */}

            <div className="expenses-frame67">

              {isExpenses?.map((listElement) => (
                <div className="expenses-listitem">
                  <div className="expenses-frame91">
                    <div className="expenses-food">
                      <img
                        alt={listElement.name}
                        src={listElement.img}
                        className="expenses-food1"
                      />
                    </div>
                    <span className="expenses-text16 Basictext">
                      <span>{listElement.name}</span>
                    </span>
                  </div>

                  <span className="expenses-text18 Basictext"><span>{listElement.amount}</span></span>

                </div>
              ))}

            </div>

            {/* ADD EXPENSES BUTTON */}

            <div className="expenses-headersandfooter">
              <span className="expenses-text36 Heading1">
                <span>Expenses</span>
              </span>
              <div className="expenses-secondarywithicon">
                <div className="expenses-frame3926">
                  <img
                    alt="pixelarticonsaddboxI115"
                    src={images('./pixelarticonsaddboxi115-apwk.svg')}
                    className="expenses-pixelarticonsaddbox"
                  />
                  <span className="expenses-text38"><span>Add expense</span></span>
                </div>
              </div>
            </div>
            <div className="expenses-headersandfooter1" />
          </div>

          {/* CHART */}

          <div className="expenses-frame92">
            <Chart dataExpense={isChartData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Expenses;
