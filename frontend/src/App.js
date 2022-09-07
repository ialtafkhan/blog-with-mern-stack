import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import AddBlog from './pages/AddBlog'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import BlogDtails from './pages/BlogDtails'
import Profile from './pages/user/Profile'
import User from './pages/admin/User';
import LoginOnly from './pages/LoginOnly';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/single-blog/Details/:id' element={<BlogDtails />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        <Route path='/addblog' element={<LoginOnly element={<AddBlog />} />} />
        <Route path='/user/profile' element={<LoginOnly element={<Profile />} />} />


        <Route path='/admin/users' element={<User />} />


        <Route path='*' element={<PageNotFound />} />


      </Routes>

    </BrowserRouter>


  )
}

export default App
