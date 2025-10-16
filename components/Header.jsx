import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
    return (
        <div className='w-11/12 pt-40 mb-20 md:mb-5 md:pt-16 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            <motion.div
            initial={{scale:0}}
            whileInView={{scale: 1}}
            transition={{duration: 0.8 , type: 'spring' , stiffness: 100}}>
                <Image src={assets.profile_img} alt='profile image' className='rounded-full w-32' />
            </motion.div>
            <motion.h3
            initial={{y: -20,opacity: 0}}
            transition={{duration:0.6 , delay:0.3}}
            whileInView={{y:0, opacity:1}}
            className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>Hi, I'm Aya Eissa </motion.h3>
            {/* <Image src={assets.hand_icon} alt=' hand icon' className='rounded-full w-6' /> */}
            <motion.h1
            initial={{y: -30,opacity: 0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:0.8 , delay:0.5}}
            className='text-3xl sm:text-6xl lg:text-[66px] font-ovo bg-gradient-to-r from-[#d4af37] via-[#e5c07b] to-[#d4af37] bg-clip-text text-transparent  '> Front-End Web Developer</motion.h1>
            <motion.p
            initial={{opacity: 0}}
            whileInView={{ opacity:1}}
            transition={{duration:0.6 , delay:0.7}}
            className='max-w-2xl mx-auto font-ovo'>Front-End Developer skilled in HTML, CSS, JavaScript, TypeScript, React.js, and Next.js. I build responsive, user-friendly, and high-performance web applications.</motion.p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <motion.a 
                initial={{y: 30,opacity: 0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:0.6 , delay:1}}
                href="#contact" className='px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2'> Contact Me <Image src={assets.right_arrow_white} alt='arrow' className=' w-4' /></motion.a>
                <motion.a
                initial={{y: 30,opacity: 0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:0.6 , delay:1.2}}
                href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'> My Resume <Image src={assets.download_icon} alt='arrow' className=' w-4' /></motion.a>
                
            </div>
            
            
        </div>
    )
}

export default Header
