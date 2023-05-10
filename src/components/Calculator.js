import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [data, setData] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const [displayValue, setDisplayValue] = useState('0');

  const handleClick = (buttonName) => {
    const result = calculate(data, buttonName);
    setData(result);

    // update the input value in the display

    let newDisplayValue = '';
    if (result.operation) {
      newDisplayValue = `${result.total || 0} ${result.operation} ${result.next ?? ''}`;
    } else {
      newDisplayValue = result.next ?? result.total ?? '0';
    }
    setDisplayValue(newDisplayValue.toString());
  };

  return (
    <div className="calculator-container">
      <h2 style={{ color: '#fff' }} className="calculator-title">Calculator App</h2>
      <ChildComponent data={data} handleClick={handleClick} displayValue={displayValue} />
    </div>
  );
};

function ChildComponent({ handleClick, displayValue }) {
  return (
    <div className="main-container">
      <div className="calculator">
        <input
          className="input-screen"
          type="text"
          id="input"
          name="name"
          pattern="[0-9+\-*/()\s]+"
          placeholder="0"
          value={displayValue}
          readOnly
          // onChange={(e) => handleClick(e.target.value)}
        />
        <div className="button-panel buttons-container">
          <button style={{ background: '#ef0107' }} className="button height" type="button" onClick={() => handleClick('AC')}>
            AC
          </button>
          <button className="button height" type="button" onClick={() => handleClick('+/-')}>
            +/-
          </button>
          <button className="button height" type="button" onClick={() => handleClick('%')}>
            %
          </button>
          <button className="button orange height" type="button" onClick={() => handleClick('÷')}>
            ÷
          </button>
          <button className="button height" type="button" onClick={() => handleClick('7')}>
            7
          </button>
          <button className="button height" type="button" onClick={() => handleClick('8')}>
            8
          </button>
          <button className="button height" type="button" onClick={() => handleClick('9')}>
            9
          </button>
          <button className="button orange height" type="button" onClick={() => handleClick('x')}>
            x
          </button>
          <button className="button height" type="button" onClick={() => handleClick('4')}>
            4
          </button>
          <button className="button height" type="button" onClick={() => handleClick('5')}>
            5
          </button>
          <button className="button height" type="button" onClick={() => handleClick('6')}>
            6
          </button>
          <button className="button orange height" type="button" onClick={() => handleClick('-')}>
            -
          </button>
          <button className="button height" type="button" onClick={() => handleClick('1')}>
            1
          </button>
          <button className="button height" type="button" onClick={() => handleClick('2')}>
            2
          </button>
          <button className="button height" type="button" onClick={() => handleClick('3')}>
            3
          </button>
          <button className="button orange height" type="button" onClick={() => handleClick('+')}>
            +
          </button>
          <button className="button-zero height" type="button" onClick={() => handleClick('0')}>
            0
          </button>
          <button className="button height" type="button" onClick={() => handleClick('.')}>
            .
          </button>
          <button className="button orange height" type="button" onClick={() => handleClick('=')}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

ChildComponent.propTypes = {
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null]), PropTypes.string]),
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
  displayValue: PropTypes.string.isRequired,
};

export default Calculator;
