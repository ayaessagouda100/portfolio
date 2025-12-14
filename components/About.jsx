import { infoList } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = () => {
  return (
    <section id="about" className="w-full py-20 bg-gray-50 scroll-mt-20">
      <h2 className="text-center text-4xl md:text-5xl font-ovo mb-12">About Me</h2>

      <p className="mb-16 text-center font-ovo max-w-2xl mx-auto text-gray-700 leading-relaxed">
       
I am a passionate Front-End Developer specializing in building responsive, high-performance web applications using HTML, CSS, JavaScript, TypeScript, React.js, and Next.js. With hands-on experience in real-world projects, I focus on creating user-friendly interfaces and scalable solutions. I continuously stay updated with modern technologies to deliver professional, future-ready applications that combine clean code with exceptional user experience.
      </p>

      <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
        {infoList.map(({ icon, title, description }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center"
          >
            <Image src={icon} alt={title} width={50} height={50} className="mx-auto mb-6" />
            <h3 className="font-semibold text-gray-800 mb-4 text-lg">{title}</h3>

            {Array.isArray(description) ? (
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                {description.map((img, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={img.src ? img.src : img}
                      alt={`${title}-${idx}`}
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 text-base mt-2">{description}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default About