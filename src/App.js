import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import ProductList from './features/productList/ProductList';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Cart from './features/cart/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/signup",
    element: <SignupPage/>,
  },
  {
    // only for testing
    path: "/cart",
    element: <Cart/>,
  },
]);


function App() {
  return (
    <div className='App'>
     <RouterProvider router={router}/>
    </div>
  )
}

export default App;
