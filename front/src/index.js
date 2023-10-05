import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Main from './Main';
import ViewGameDetails from './ViewGameDetails';
import reportWebVitals from './reportWebVitals';
import DeveloperMain from './DeveloperMain';
import Login_page from './Login_page';
import Gameupload from './Gameupload';
import Signup_page from './Signup_page';
import Community from './Community';
import Lecture from './Lecture';
import User_setting from './User_setting';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        
        <Route path='/' element={<Main/>}></Route>
        <Route path='viewGameDetails' element={<ViewGameDetails/>}></Route>
        <Route path='developerMain' element={<DeveloperMain/>}></Route>
        <Route path='gameupload' element={<Gameupload/>}></Route>
        <Route path='login_page' element={<Login_page/>}></Route>
        <Route path='signup_page' element={<Signup_page/>}></Route>
        <Route path='community' element={<Community/>}></Route>
        <Route path='lecture' element={<Lecture/>}></Route>
        <Route path='user_setting' element={<User_setting/>}></Route>

      </Routes>
    </BrowserRouter>
    <Footer></Footer>
  </React.StrictMode>
);
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
