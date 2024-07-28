import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Login from './Components/Login'
import Practice from './Components/Practice'
import Context from './Components/Context'
import CheckApi from './Components/CheckApi'
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
    {
      path: "/check-api",
      element:  <CheckApi />,
    },

  ]);

  return (
    <>
      <div>
      
       <RouterProvider router={router} />
      </div>
      <div className='text-white'>
        <Context />
      </div>
     
    </>
  )
}

export default App
