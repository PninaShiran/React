import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import Login from './components/Login';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import List from './components/List';
import Register from './components/Register';
import ShoppingCart from './components/ShoppingCart';
import SmallShoppingCart from './components/SmallShoppingCart';
import Order from './components/Order';

function App() {
  return (<>
   <NavBar/>
   <Routes>
     <Route path='' element={<List/>}/>
     <Route path='list' element={<List/>}/>
     <Route path='register' element={<Register/>}/>
     <Route path='login' element={<Login/>}/>
     <Route path='cart' element={<ShoppingCart/>}/>
     <Route path='add-product' element={<AddProduct/>}/>
     <Route path='small-shopping-cart' element={<SmallShoppingCart/>}/>
     <Route path='order' element={<Order/>}/>
   </Routes>
  </>);
}

export default App;
