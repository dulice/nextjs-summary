import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (

        <div className="header">
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/products">Product</Link>
            <Link href="/news">News</Link>
            <Link href="/about">About</Link>
        </div>
  )
}

export default Header