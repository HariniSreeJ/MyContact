import React, { createContext, useState } from 'react'
import Home from './Pages/Home'
import {createBrowserRouter,RouterProvider}from 'react-router-dom'
import Register from './Pages/Register'
import Login from './Pages/Login'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import About from './Pages/About'
import User from './Pages/User'
export const UserContext=createContext(null)
const router=createBrowserRouter([
  {
    //it will move to home
    path:'/',
    element:<Home/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/user',
    element:<User/>
  }

])
const App = () => {
  const [user,setUser]=useState()
  const logout = () => {
    // Clear user context
    setUser(null);
  };
  return (
    <>
    <ToastContainer/>
    <UserContext.Provider value={{user,setUser, logout}}>
      <RouterProvider router ={router}></RouterProvider>
    </UserContext.Provider>
    </>
  )
}


 



export default App;



