import React from 'react'
import Login from './Login'
import Browser from './Browser'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/browse',
        element: <Browser />
    }
])

const Body = () => {
  return (
    <div>
       <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body