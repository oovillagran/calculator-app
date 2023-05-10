import './index.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </>
  );
  // <>
}
//   <div className="App">
//     <h1 className="app-title">Math Magicians</h1>
//   </div>
//   <Calculator />
//   <Quote />
// </>
// );

export default App;
