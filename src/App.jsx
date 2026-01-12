import axios from 'axios';
import { HomePage } from './Pages/Home/HomePage';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';
import { CheckoutPage } from './Pages/checkout/CheckoutPage';
import { OrdersPage } from './Pages/OrderPage/OrdersPage';
import { TrackingPage } from './Pages/TrackingPage';
import { ErrorPage } from './Pages/404ErrorPage';
import './App.css'

function App() {

  const[cart,setCart] = useState([]);
    const loadCart = async ()=>{
      const response = await axios.get('/api/cart-items?expand=product')
      setCart(response.data);
  }

  useEffect(() => {
    loadCart();
    },[]);
  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path='checkout' element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
      <Route path='orders' element={<OrdersPage cart={cart} loadCart={loadCart}/>} />
      <Route path='tracking/:orderId/:productId' element={<TrackingPage cart={cart}/>} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>

  );
}

export default App
