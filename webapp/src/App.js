import './App.css';
import StockPortal from './renderer/StockPortal';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {

  return (
    <div className="App">
        <p style={{color:"blue"}}><b>Stock Portal</b></p>
        <StockPortal />
    </div>
  );
}

export default App;
