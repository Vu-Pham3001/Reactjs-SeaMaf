import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Header from './component/Header/Header';
import Content from './component/Content/Content';
import Footer from './component/Footer/Footer';
import HeaderBot from './component/Header/HeaderBot';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Header />
        <HeaderBot />
        <Outlet />
        <Footer />
    </div>
  );
}
export default App;
