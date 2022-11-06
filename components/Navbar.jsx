import React from 'react'
import Header from './Header'

const Navbar = ({children}) => {
  return (
    <>
        <Header />
        {children}
    </>
  )
}

export default Navbar