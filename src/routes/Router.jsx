import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/home/Home';
import Login from '../components/loginAndRegister/Login';
import Register from '../components/loginAndRegister/Register';
import Orders from '../components/searchAndOrders/Orders';
import Search from '../components/searchAndOrders/Search';
import Profile from '../components/profile/Profile';
import Edit from '../components/profile/Edit';
import Restaurant from '../components/restAndProduct/Restaurant';
import Product from '../components/restAndProduct/Product';

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/search' element={<Search />}/>
      <Route path='/orders' element={<Orders />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/edit' element={<Edit />}/>
      <Route path='/restaurant' element={<Restaurant />}/>
      <Route path='/product' element={<Product />}/>
    </Routes>
  </BrowserRouter>
  )
}

export default Router
