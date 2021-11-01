import './App.css';
import StockPortal from './renderer/StockPortal';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import StockList from './renderer/StockList';
import WatchList from './renderer/WatchList';
import TopList from './renderer/TopList';

function App() {

  return (
    <div className="App">
      <Router>
       <Navbar bg="light">
         <Navbar.Brand>Stock Portal</Navbar.Brand>
         <Nav className="me-auto">
        <Nav.Link href='/'>Stocks</Nav.Link>
        <Nav.Link href='/top5'>Top 5</Nav.Link>
        <Nav.Link href='/watchlist'>Watchlist</Nav.Link>
        </Nav>
       </Navbar>
       <Switch>
          <Route path="/top5">
            <TopList />
          </Route>
          <Route path="/watchlist">
            <WatchList />
          </Route>
          <Route path="/">
            <StockList />
          </Route>
        </Switch>
       </Router>
    </div>
  );
}

export default App;
