import React from 'react'
import Link from 'next/link'
import home from '@/pages/home'
import about from '@/pages/about'

function Header() {
  return (
    
    <div>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header