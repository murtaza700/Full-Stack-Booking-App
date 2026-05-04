import { UserRound, Zap, Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import NotificationComp from './NotificationComp'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const leftLinks = [
    { name: 'Explore', link: '/explore' },
    { name: 'Bookings', link: '/bookings' },
    { name: 'Messages', link: '/messages' },
    { name: 'Support', link: '/support' }
  ]

  return (
    <div className='h-16 w-full relative'>

      <nav className='fixed top-0 left-0 w-full z-100 hid bg-white text-Text-Primary shadow-Card-Shadow px-[4%] py-3'>
        <div className='flex items-center justify-between'>

          <div className='flex items-center gap-4'>
            <Link to="/" className="text-2xl font-semibold text-Primary flex items-center gap-2">
              <span className='bg-Primary text-white size-9 rounded-md flex items-center justify-center'>
                <Zap size={20} />
              </span>
              Servixo
            </Link>

            <ul className='hidden md:flex items-center gap-5 ml-6'>
              {leftLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.link} className='text-[15px] hover:text-Primary transition'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='hidden md:flex items-center gap-4'>
            <Link to="/list-service">List a Service</Link>
            <Link to="/auth" className='bg-Primary text-white rounded-md px-4 py-2'>
              Login
            </Link>
            <NotificationComp />
            <Link to="/user">
              <UserRound />
            </Link>
          </div>

          <div className='flex items-center gap-3 md:hidden'>
            <NotificationComp />

            <button onClick={() => setIsOpen(true)}>
              <Menu />
            </button>
          </div>

        </div>

        <AnimatePresence>

          {isOpen && (
            <>
              <motion.div
                className='fixed inset-0 bg-black/40 z-40'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />

              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ duration: 0.3 }}
                className='fixed top-0 left-0 h-full w-[75%] max-w-[70%] bg-white z-50 shadow-lg p-5 flex flex-col gap-5'
              >

                <div className='flex items-center justify-between'>
                  <span className='text-xl font-semibold text-Primary'>Menu</span>
                  <button onClick={() => setIsOpen(false)}>
                    <X />
                  </button>
                </div>

                <div className='flex flex-col gap-4 mt-4'>
                  {leftLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.link}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                <hr />

                <Link to="/list-service" onClick={() => setIsOpen(false)}>
                  List a Service
                </Link>

                <Link to="/auth" onClick={() => setIsOpen(false)}>
                  Login
                </Link>

                <div className='flex items-center gap-4 mt-4'>
                  <Link className='flex items-center justify-center gap-2' to="/user" onClick={() => setIsOpen(false)}>
                    <UserRound />
                    Profile
                  </Link>
                </div>

              </motion.div>
            </>
          )}

        </AnimatePresence>

      </nav>

    </div>
  )
}

export default Navbar