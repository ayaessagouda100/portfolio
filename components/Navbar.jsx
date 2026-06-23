'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef } from 'react'

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const sideMenu = useRef();
  const openMenu = () => {
    sideMenu.current.style.transform = 'translateX(-16rem)'
  }
  const closeMenu = () => {
    sideMenu.current.style.transform = 'translateX(16rem)'
  }
  return (
    <>
      <nav className='flex fixed w-full items-center bg-white/85 dark:bg-[#11001F]/85 justify-between px-5 py-4 lg:px-8 xl:px-[8%] z-50 transition-colors duration-300 border-b border-black/5 dark:border-white/5 backdrop-blur-md'>
        <a href="#top">
          <h1 className="text-4xl font-extrabold text-gray-700 dark:text-white transition-colors duration-300">
            Aya <span className="text-amber-500">.</span>
          </h1>
        </a>
        <ul className='hidden md:flex items-center font-ovo justify-between gap-6 lg:gap-8 px-12 py-3 text-gray-700 dark:text-white/80 transition-colors duration-300'>
          <li><a href="#top" className="hover:text-amber-500 dark:hover:text-white transition-colors duration-200">Home</a></li>
          <li><a href="#about" className="hover:text-amber-500 dark:hover:text-white transition-colors duration-200">About me</a></li>
          <li><a href="#work" className="hover:text-amber-500 dark:hover:text-white transition-colors duration-200">Work</a></li>
          <li><a href="#contact" className="hover:text-amber-500 dark:hover:text-white transition-colors duration-200">Contact me</a></li>
        </ul>
        <div className='flex items-center gap-4'>
          {/* Dark Mode Toggle Button */}
          <button 
            onClick={toggleTheme} 
            className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-200 focus:outline-none"
            aria-label="Toggle dark mode"
          >
            <Image 
              src={isDarkMode ? assets.sun_icon : assets.moon_icon} 
              alt='toggle theme' 
              className='w-6 h-6 transition-all duration-300' 
            />
          </button>
          
          <a className='hidden hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-[#11001F] text-gray-700 dark:text-white/90 font-ovo lg:flex justify-between items-center gap-3 px-10 py-2.5 border border-gray-500 dark:border-white/30 ml-4 rounded-full transition-all duration-300' href="#contact"> 
            Contact 
            <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} className='w-3' alt='arrow' />
          </a>
          
          <button className='block md:hidden ml-3 cursor-pointer' onClick={openMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='menu' className='w-6' />
          </button>
        </div>

        {/* Mobile menu */}
        <ul ref={sideMenu} className='flex md:hidden flex-col gap-6 py-20 px-10 fixed -right-64 top-0 bottom-0 z-50 h-screen w-64 bg-rose-50 dark:bg-[#1C0E24] text-gray-700 dark:text-white/80 transition-transform duration-500 shadow-2xl border-l border-white/5'>
          <div className='absolute right-6 top-6 ' onClick={closeMenu}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='close icon' className='w-5 cursor-pointer' />
          </div>
          <li onClick={closeMenu}><a href="#top" className="hover:text-amber-500 transition-colors">Home</a></li>
          <li onClick={closeMenu}><a href="#about" className="hover:text-amber-500 transition-colors">About me</a></li>
          <li onClick={closeMenu}><a href="#work" className="hover:text-amber-500 transition-colors">Work</a></li>
          <li onClick={closeMenu}><a href="#contact" className="hover:text-amber-500 transition-colors">Contact me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
