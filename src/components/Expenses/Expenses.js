import React, { useState } from 'react';
import './Exp.css';
import './ModalExp.css';
import '../modals/modal/Modal.css';
import Chart from '../Chart/Chart';
// for the text style
import '../generatedStyle.css';
import ButtonIcon from '../button-icon/ButtonIcon';

const images = require.context('./external', false, /\.(png|jpe?g|svg)$/);
const options = [
  'Name one', 'Name two', 'Name three',
];
const defaultOption = options[0];
// hard coded data for expenses
const expensesArr = [
  {
    id: 1,
    img: images('./food.png'),
    name: 'Expfdgdgdgd1',
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
const dropdownInfo = [
  {
    name: 'Name one',
    placeholderData: 'first',
    options: ['first', 'second', 'third'],
  },
  {
    name: 'Name one',
    placeholderData: 'second',
    options: ['first', 'second', 'third'],
  },
  {
    name: 'Name one',
    placeholderData: 'third',
    options: ['first', 'second', 'third'],
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
  const [isModalOpen, setModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  function modalHandler() {
    setModalOpen(!isModalOpen);
  }
  function handleOpen() {
    setOpen(!isModalOpen);
  }

  return (
    <div>
      { isModalOpen ? (
        <div className="modal" id="modal-expenses-income">
          <div className="modal-content">
            <div className="modal-header">
              <h1>Add Expense</h1>
            </div>
            <div className="modal-body">
              <div className="modal-body-left">
                {dropdownInfo?.map((item) => (
                  <div className="modal-item">
                    <div>
                      <p>{item.name}</p>
                      <button type="button" className="dropdown" onClick={handleOpen}>
                        {item.placeholderData}
                        <ButtonIcon icon="pixelarticons:arrow-down-box" style={{ color: 'var(--ww-black)' }} />
                      </button>
                      {open ? (
                        <div className="dropdown-list">
                          {item.options.map((option) => (
                            <button type="button" className="dropdown-item">{option}</button>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
              <div className="modal-body-right">
                <div className="modal-item">
                  <p className="modal-text">Name</p>
                  <input type="text" className="modal-input" />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn-cancel" onClick={modalHandler}>Cancel</button>
              <button type="button" className="btn-save" onClick={modalHandler}>Save</button>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Font links */}
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
                {/* ADD EXPENSES BUTTON */}
                <div className="expenses-headersandfooter">
                  <span className="expenses-text36 Heading1">
                    <span>Expenses</span>
                  </span>
                  <button
                    type="button"
                    className="expenses-secondarywithicon"
                    onClick={modalHandler}
                  >
                    <div className="expenses-frame3926">
                      <img
                        alt="pixelarticonsaddboxI115"
                        src={images('./pixelarticonsaddboxi115-apwk.svg')}
                        className="expenses-pixelarticonsaddbox"
                      />
                      <span className="expenses-text38"><span>Add expense</span></span>
                    </div>
                  </button>
                </div>
                {/* <div className="expenses-headersandfooter1" /> */}
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

              </div>
              {/* CHART */}
              <div className="expenses-frame92">
                <Chart dataExpense={isChartData} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Expenses;
