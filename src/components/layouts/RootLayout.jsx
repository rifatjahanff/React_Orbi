import React from 'react'
import Header from './Header'
import FooterPart from './FooterPart'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
   <>
   <Header/>
   <Outlet/>
   <FooterPart/>
   </>
  )
}

export default RootLayout