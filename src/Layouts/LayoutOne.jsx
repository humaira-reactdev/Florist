import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import FooterComponent from '../Components/FooterComponent'
import FollowUscomponent from '../Components/FollowUscomponent'

const LayoutOne = () => {
  return (
    <>
        <Navbar/>
         <Outlet/>
         <FollowUscomponent />
        <FooterComponent/>
    </>
  )
}

export default LayoutOne