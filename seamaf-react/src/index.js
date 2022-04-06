import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Login from './component/Auth/Login';
import Register from './component/Auth/Register';
import Content from './component/Content/Content';
import Shop from './component/Auth/Shop';
import ProductDetail from './component/Product/ProductDetail'
import Admin from './component/Admin/Admin';
import ListProduct from './component/Admin/ListProduct';
import AddProduct from './component/Admin/AddProduct';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Content />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element = { <Register />} />
          <Route path='shop' element= { <Shop />} />
          <Route path='/product-detail' element= {<Outlet/>}>
            <Route path=":id" element={<ProductDetail />} />
          </Route>
        </Route>
        <Route path='/admin' element={<Admin />}>
          <Route path='/admin/list-product' element={<ListProduct />} />
          <Route path='/admin/add-product' element={<AddProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
