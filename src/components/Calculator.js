const Calculator = () => (
  <div className="calculator-container">
    <h2 className="calculator-title">Calculator App</h2>
    <ChildComponent />
  </div>
);

function ChildComponent() {
  return (
    <div className="main-container">
      <input className="input-screen height" type="text" id="input" name="name" pattern="[0-9+\-*/()\s]+" placeholder="0" />
      <div className="buttons-container">
        <button className="button math-operation height" type="button">AC</button>
        <button className="button math-operation height" type="button">+/-</button>
        <button className="button math-operation height" type="button">%</button>
        <button className="button math-operation orange height" type="button">+</button>
        <br />
        <button className="button math-number height" type="button">7</button>
        <button className="button math-number height" type="button">8</button>
        <button className="button math-number height" type="button">9</button>
        <button className="button math-operation orange height" type="button">x</button>
        <br />
        <button className="button math-number height" type="button">4</button>
        <button className="button math-number height" type="button">5</button>
        <button className="button math-number height" type="button">6</button>
        <button className="button math-operation orange height" type="button">-</button>
        <br />
        <button className="button math-number height" type="button">1</button>
        <button className="button math-number height" type="button">2</button>
        <button className="button math-number height" type="button">3</button>
        <button className="button math-operation orange height" type="button">+</button>
        <br />
        <button className="button-zero math-number height" type="button">0</button>
        <button className="button math-number height" type="button">.</button>
        <button className="button math-operation orange height" type="button">=</button>
      </div>
    </div>
  );
}

export default Calculator;
