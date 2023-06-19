import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Delivery from './components/Delivery/Delivery';
import Payment from './components/Payment/Payment';
import ChangeAddress from './components/Address/ChangeAddress';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Delivery}></Route>
        <Route path='/payment' Component={Payment}></Route>
        <Route path='/changeAddress' Component={ChangeAddress}></Route>
      </Routes>
    </Router>
  );
}

export default App;
