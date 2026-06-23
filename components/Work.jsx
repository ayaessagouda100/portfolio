import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id='work'
      className='w-full px-[12%] py-10 scroll-mt-0 md:scroll-mt-5 pt-28 md:pb-0 transition-colors duration-300'
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='text-center text-5xl font-ovo mb-5 text-gray-900 dark:text-white transition-colors duration-300'
      >
        My Latest Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='mb-10 text-center font-ovo text-gray-600 dark:text-white/70 transition-colors duration-300'
      >
        Here are some of my recent projects that highlight my expertise in front-end development using modern tools.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-6'
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ duration: 0.3 }}
            key={index}
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-2xl relative cursor-pointer group shadow-sm border border-black/5 dark:border-white/5 overflow-hidden'
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className='bg-white/95 dark:bg-[#1C0E24]/95 border border-black/5 dark:border-white/10 backdrop-blur-sm w-10/12 rounded-xl absolute bottom-5 left-1/2 -translate-x-1/2 py-4 px-6 flex items-center justify-between duration-500 group-hover:bottom-6 shadow-md transition-all'>
              <div>
                <h2 className='font-semibold text-base text-gray-800 dark:text-white transition-colors duration-300'>{project.title}</h2>
                <p className='text-xs text-gray-600 dark:text-white/60 transition-colors duration-300 mt-0.5'>{project.description}</p>
              </div>
              <a
                href={project.link}
                target='_blank'
                rel="noopener noreferrer"
                className='rounded-full w-9 h-9 flex items-center justify-center bg-gray-100 dark:bg-white/10 hover:bg-amber-500/20 dark:hover:bg-amber-500/30 transition duration-300 shadow-inner'
              >
                <Image src={assets.send_icon} className='w-4 dark:invert' alt='Open project link' />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Work