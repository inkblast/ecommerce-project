import logo from './logo.svg';
import './App.css';
import Checkout from './Components/Checkout';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Delivery from './Components/Delivery/Delivery';
import Payment from './Components/Payment/Payment';
import ChangeAddress from './Components/Delivery/ChangeAddress';

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
