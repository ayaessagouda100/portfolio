'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef } from 'react'

const Navbar = () => {
  const sideMenu = useRef();
  const openMenu = () => {
    sideMenu.current.style.transform = 'translateX(-16rem)'
  }
  const closeMenu = () => {
    sideMenu.current.style.transform = 'translateX(16rem)'
  }
  return (
    <>
      <nav className='flex fixed w-full items-center bg-white/85 justify-between px-5 py-4 lg:px-8 xl:px-[8%] z-50'>
        <a href="#top">
          <h1 className="text-6xl font-extrabold text-gray-700">
  Aya <span className="text-amber-500 text-6xl">.</span>
</h1>


        </a>
        <ul className='hidden md:flex items-center  font-ovo justify-between gap-6 lg:gap-8  px-12 py-3'>
          <li><a href="#top">Home</a></li>
          <li><a href="#about">About me </a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#contact">Contact me</a></li>
        </ul>
        <div className='flex items-center gap-4'>
          
          <a className='hidden hover:bg-black hover:text-white font-ovo   lg:flex justify-between items-center gap-3 px-10 py-2.5 border border-gray-500 ml-4 rounded-full ' href="#contact"> Contact <Image src={assets.arrow_icon} className='w-3' alt='arrow' /></a>
          <button className='block md:hidden ml-3 cursor-pointer' onClick={openMenu}><Image src={assets.menu_black} alt='menu' className='w-6' /></button>
        </div>

        <ul ref={sideMenu} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 z-50 h-screen bg-rose-50 transition duration-500'>
          <div className='absolute right-6 top-6 ' onClick={closeMenu}>
            <Image src={assets.close_black} alt='close icon' className='w-5 cursor-pointer' />
          </div>
          <li onClick={closeMenu}><a href="#top">Home</a></li>
          <li onClick={closeMenu}><a href="#about">About me </a></li>
          <li onClick={closeMenu}><a href="#services">Services</a></li>
          <li onClick={closeMenu}><a href="#work">Work</a></li>
          <li onClick={closeMenu}><a href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
