import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'
import { navLinks } from './constant'
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const toggle = () => {
    setShowMenu((showMenu) => !showMenu)
  }
  return (
    <>
      <div className='fixed top-0 left-0 w-full z-10 bg-blur'>
        <nav className='container max-w-6xl mx-auto px-6 flex justify-between items-center h-20 z-30'>
          <div>
            <a href='#hero' className=' text-4xl md:text-5xl font-semibold'>
              Portfolio
            </a>
          </div>
          <div
            className='sm:hidden flex justify-center items-center'
            onClick={toggle}
          >
            {showMenu ? (
              <ImCross className='text-3xl text-red-500' />
            ) : (
              <GiHamburgerMenu size={40} />
            )}
          </div>
          <div className='hidden sm:flex space-x-4'>
            {navLinks.map((link, index) => (
              <a href={`#${link.tag}`} key={index} className='nav-link'>
                {link.name}
              </a>
            ))}
          </div>
        </nav>
        {showMenu && (
          <div className='flex sm:hidden flex-col space-y-4 p-6'>
            {navLinks.map((link, index) => (
              <a href={`#${link.tag}`} key={index} className='nav-link py-2'>
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
export default Navbar
