import React from 'react'
import Link from 'next/link'
import home from '@/pages/home'
import about from '@/pages/about'

export const Header = () => {
  return (
    <div>
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/posts">Posts</Link></li>
                
            </ul>
        </nav>
    </div>
  )
}

export default Header