import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import { ToastContainer } from 'react-toastify'
import DetailsPage from './Pages/DetailsPage'
import ReviewPage from './Pages/ReviewPage'
import ShippingPage from './Pages/ShippingPage'
import CheckoutPage from './Pages/CheckoutPage'
import Proceed from './Pages/Proceed'
import WishListPage from './Pages/WishListPage';

function App() {

  const route= createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/'           element={<LayoutOne/>}>
          <Route index                element= {<Homepage/>}/>
          <Route path='/contact'      element={<ContactPage/>}/>
          <Route path='/shop'         element={<ShopPage/>}/>
          <Route path='/about'        element={<AboutPage/>}/>
          <Route path='/services'     element={<ServicesPage/>}/>
          <Route path='/cart'         element={<CartPage/>}/>
          <Route path='/details'      element={<DetailsPage/>}/>
          <Route path='/review'       element={<ReviewPage/>}/>
          <Route path='/shipping'     element={<ShippingPage/>}/>
          <Route path='/checkout'     element={<CheckoutPage/>}/>
          <Route path='/wishlist'     element={<WishListPage/>}/>
          <Route path='/proceed'      element={<Proceed/>}/>
        </Route>
        <Route path='/login'      element={<LoginPage/>}/>
        <Route path='/signup'     element={<SignupPage/>}/>
        <Route path='/forgotpass' element={<ForgotPasswordPage/>}/>
      </Route>
    )
  )

  return (
    <>
       <RouterProvider router={route}/> 
       <ToastContainer />    
    </>
  )
}

export default App
