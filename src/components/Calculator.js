import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [data, setData] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const [display, setDisplay] = useState('0');

  const handleClick = (buttonName) => {
    const result = calculate(data, buttonName);
    setData(result);
    setDisplay(result.next || result.total || '0');
  };

  return (
    <div className="calculator-container">
      <h2 className="calculator-title">Calculator App</h2>
      <ChildComponent data={data} display={display} handleClick={handleClick} />
    </div>
  );
};

function ChildComponent({
  display, handleClick, setDisplay,
}) {
  return (
    <div className="main-container">
      <input
        className="input-screen height"
        type="text"
        id="input"
        name="name"
        pattern="[0-9+\-*/()\s]+"
        placeholder="0"
        value={display}
        onChange={(e) => setDisplay(e.target.value)}
      />
      <div className="button-panel buttons-container">
        <button className="button height" type="button" onClick={() => handleClick('AC')}>
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
  );
}

ChildComponent.propTypes = {
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    next: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    operation: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null]), PropTypes.string]),
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
  display: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  setDisplay: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default Calculator;
