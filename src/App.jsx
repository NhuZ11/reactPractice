import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Login from './Components/Login'
import Practice from './Components/Practice'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:  <Header />,
    },
    {
      path: "/login",
      element:  <Login />,
    },
    {
      path: "/practice",
      element:  <Practice />,
    },
  ]);

  return (
    <>
      <div>
      
       <RouterProvider router={router} />
      </div>
     
    </>
  )
}

export default App
