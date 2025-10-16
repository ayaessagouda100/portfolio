import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Work = () => {
  return (
    <motion.div
    initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
    id='work' className='w-full px-[12%] py-10 scroll-mt-0 md:scroll-mt-5 pt-28 md:pb-0'>
        {/* <h4 className='text-center mb-2 text-lg font-ovo'>
            My Portfolio
        </h4> */}
    <motion.h2
    initial={{opacity:0}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay:0.5}}
    className='text-center text-5xl font-ovo mb-5'>My Latest Projects</motion.h2>
    <motion.p 
    initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5, delay:0.7}}
    className='mb-10 text-center font-ovo'>
    Here are some of my recent projects that highlight my expertise in front-end development using modern tools.
    </motion.p>

    <motion.div
    initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6, delay:0.9}}
    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-5'>
        {workData.map((project, index)=>(
            <motion.div
            whileHover={{scale: 1.05}}
            transition={{duration: 0.3}}
             key={index}
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' style={{backgroundImage: `url(${project.bgImage})`}}>
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                    <div>
                    <h2 className='font-semibold'>{project.title}</h2>
                    <p className='text-sm text-gray-700'>{project.description}</p>
                </div>
                <div className=' rounded-full w-9 aspect-square flex items-center justify-center  transition '>
                    <Image src={assets.send_icon} className='w-5 ' alt='send icon'/>
                </div>
                </div>
            </motion.div>
        ))}
    </motion.div>
    
    </motion.div>
)
}

export default Work
