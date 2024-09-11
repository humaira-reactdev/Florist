import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LayoutOne from './Layouts/LayoutOne'
import Homepage from './Pages/Homepage'

function App() {

  const route= createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne/>}>
          <Route index element = {<Homepage/>}/>
        </Route>
      </Route>
    )
  )

  return (
    <>
       <RouterProvider router={route}/> 
    </>
  )
}

export default App
