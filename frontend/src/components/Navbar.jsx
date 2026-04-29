import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const links = [
    { name: 'Home', link: '/' },
    { name: 'Login', link: '/auth' }
  ]
  return (
    <div>
      <nav className='bg-Primary text-white min-h-screen w-[150px]'>
        <div className="logo">Logo</div>

        <ul>
          {links.map((link, index) => (
            <li key={index}><Link to={link.link}>{link.name}</Link></li>
          ))}
        </ul>

      </nav>
    </div>
  )
}

export default Navbar