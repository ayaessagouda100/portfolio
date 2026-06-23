import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = ({ isDarkMode }) => {
    return (
        <div className='w-11/12 pt-40 mb-20 md:mb-5 md:pt-16 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 transition-colors duration-300'>
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}>
                <Image src={assets.profile_img} alt='profile image' className='rounded-full w-32 h-32 object-cover border border-gray-200 dark:border-white/10 shadow-lg' priority />
            </motion.div>
            <motion.h3
                initial={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo text-gray-700 dark:text-white/80 transition-colors duration-300'>Hi, I'm Aya Eissa </motion.h3>

            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='text-3xl sm:text-6xl lg:text-[66px] font-ovo bg-gradient-to-r from-[#d4af37] via-[#e5c07b] to-[#d4af37] bg-clip-text text-transparent pb-2'> Front-End Web Developer</motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className='max-w-2xl mx-auto font-ovo text-gray-600 dark:text-white/70 transition-colors duration-300'>Front-End Developer skilled in HTML, CSS, JavaScript, TypeScript, React.js, and Next.js. I build responsive, user-friendly, and high-performance web applications.</motion.p>

            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    href="#contact"
                    className='px-10 py-3 border border-transparent rounded-full bg-black text-white dark:bg-white dark:text-[#11001F] flex items-center gap-2 hover:bg-black/95 dark:hover:bg-white/90 transition-all duration-300 shadow-md'
                >
                    Contact Me
                    <Image src={isDarkMode ? assets.right_arrow : assets.right_arrow_white} alt='arrow' className=' w-4' />
                </motion.a>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <a
                        href="/api/download-resume"
                        className='px-10 py-3 border border-gray-500 dark:border-white/30 text-gray-700 dark:text-white/90 rounded-full flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300'
                    >
                        My Resume
                        <Image src={assets.download_icon} alt='download' className=' w-4 dark:invert transition-all duration-300' />
                    </a>
                </motion.div>
            </div>
        </div>
    )
}

export default Header
