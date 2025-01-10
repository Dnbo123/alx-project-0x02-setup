import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

/**
 * The Header component renders a navigation bar with links to the Home, About, and Posts pages.
 *
 */
export const Header = () => {
  /**
   * isActive is a helper function that returns an active class string if the current route matches the given route.
   *
   */
  const router = useRouter();
  const isActive = (route: string) => {
    return router.pathname === route ? 'text-blue-800 font-bold' : ''
  }

  return (
    <header className="bg-gray-600 shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex space-x-6">
          <li>
            {/* The Link component is used to create client-side links between pages. */}
            <Link href="/home" className={`${isActive('/home')} hover:text-blue-800 transition-colors`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={`${isActive('/about')} hover:text-blue-800 transition-colors`}>
              About
            </Link>
          </li>
          <li>
            <Link href="/posts" className={`${isActive('/posts')} hover:text-blue-800 transition-colors}`}>
            Posts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header