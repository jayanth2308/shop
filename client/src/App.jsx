import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CreateCustomer from './components/CreateCustomer';
import Editcustomer from './components/Editcustomer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<CreateCustomer />} />
        <Route path='/edit/:id' element={<Editcustomer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
