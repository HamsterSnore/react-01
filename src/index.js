import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './containers/Home';
import Navbar from './containers/Navbar';
import AboutUs from './containers/AboutUs';
import Dashboard from './containers/Dashboard';
import Tasks from './containers/Tasks';
import Login from './containers/Login';
import Projects from './containers/Projects';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <div className='px-10 py-5'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} /> 
      <Route path='about-us' element={<AboutUs/>} />
      <Route path='dashboard' element={<Dashboard/>} />
      <Route path='tasks' element={<Tasks/>} />
      <Route path='log-in' element={<Login/>} />
      <Route path='projects' element={<Projects/>} />
    </Routes>
    </BrowserRouter>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
