import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Navbar = ({children}) => {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>
  )
}

export default Navbar