import { infoList } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = () => {
    return (
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8}}
        id='about' className='w-full px-[12%] py-10 scroll-mt-0 md:scroll-mt-5 pt-28'>
            <h2 className='text-center text-5xl font-ovo mb-5'>About Me</h2>
            <motion.div
            initial={{opacity:0, scale: 0.9}}
        whileInView={{opacity:1, scale: 1}}
        transition={{duration:0.6}}
            >
                <p className='mb-10 text-center font-ovo'>
                    Passionate Front-End Developer skilled in HTML, CSS, JavaScript, TypeScript, React.js, and Next.js. I have built real-world projects and love turning ideas into responsive, high-performance web apps. Always staying up to date with the latest technologies and applying them in my projects to deliver modern, professional, and future-ready solutions.
                </p>
                <motion.ul
                initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8}}
                className='flex  flex-col md:flex-row justify-center items-center text-center space-y-3.5 md:space-y-0 md:gap-6'>
                    {infoList.map(({ icon, iconDark, title, description }, index) => (
                        <motion.li
                        whileHover={{scale:1.05}}
                            key={index}
                            className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 hover:shadow-black'
                        >
                            <Image src={icon} alt={title} width={30} height={30} className='mx-auto mt-3 ' />
                            <h3 className='my-4 font-semibold text-gray-700 text-center'>{title}</h3>
                            {Array.isArray(description) ? (
                                <div className='flex flex-wrap justify-center gap-2 mt-2'>
                                    {description.map((img, idx) => (
                                        <Image
                                            key={idx}
                                            src={img.src ? img.src : img}
                                            alt={`${title}-${idx}`}
                                            width={30}
                                            height={30}
                                            className='w-6 h-6 '
                                        />
                                    ))}
                                </div>
                            ) : (
                                <p className='text-gray-600 text-sm mt-2 text-center'>{description}</p>
                            )}
                        </motion.li>
                    ))}
                </motion.ul>

            </motion.div>
        </motion.div>
    )
}

export default About
