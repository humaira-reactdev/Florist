import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LayoutOne from './Layouts/LayoutOne'
import Homepage from './Pages/Homepage'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import ContactPage from './Pages/ContactPage'
import ShopPage from './Pages/ShopPage'
import AboutPage from './Pages/AboutPage'
import ServicesPage from './Pages/ServicesPage'
import CartPage from './Pages/CartPage'
import ForgotPasswordPage from './Pages/ForgotPasswordPage'
import DetailPage from './Pages/DetailPage'

function App() {

  const route= createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne/>}>
          <Route index element = {<Homepage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/shop' element={<ShopPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/services' element={<ServicesPage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/details' element={<DetailPage/>}/>
        </Route>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/forgotpass' element={<ForgotPasswordPage/>}/>
        
        
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
