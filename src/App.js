import './index.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

const App = () => (
  <>
    <div className="App">
      <h1 className="app-title">Math Magicians</h1>
    </div>
    <Calculator />
    <Quote />
  </>
);

export default App;
