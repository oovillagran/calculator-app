const Calculator = () => (
  <div className="calculator-container">
    <h2 className="calculator-title">Calculator App</h2>
    <ChildComponent />
  </div>
);

function ChildComponent() {
  return (
    <div className="main-container">
      <input className="input-screen" type="text" id="input" name="name" pattern="[0-9+\-*/()\s]+" />
      <div className="buttons-container">
        <button className="button math-operation" type="button">AC</button>
        <button className="button math-operation" type="button">+/-</button>
        <button className="button math-operation" type="button">%</button>
        <button className="button math-operation orange" type="button">+</button>
        <br />
        <button className="button math-number" type="button">7</button>
        <button className="button math-number" type="button">8</button>
        <button className="button math-number" type="button">9</button>
        <button className="button math-operation orange" type="button">x</button>
        <br />
        <button className="button math-number" type="button">4</button>
        <button className="button math-number" type="button">5</button>
        <button className="button math-number" type="button">6</button>
        <button className="button math-operation orange" type="button">-</button>
        <br />
        <button className="button math-number" type="button">1</button>
        <button className="button math-number" type="button">2</button>
        <button className="button math-number" type="button">3</button>
        <button className="button math-operation orange" type="button">+</button>
        <br />
        <button className="button math-number" type="button">0</button>
        <button className="button math-number" type="button">.</button>
        <button className="button math-operation orange" type="button">=</button>
      </div>
    </div>
  );
}

export default Calculator;
