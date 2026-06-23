import { infoList } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({ isDarkMode }) => {
  return (
    <section id="about" className="w-full py-20 bg-gray-50 dark:bg-[#11001F]/30 text-gray-900 dark:text-white scroll-mt-20 transition-colors duration-300">
      <h2 className="text-center text-4xl md:text-5xl font-ovo mb-12">About Me</h2>

      <p className="mb-16 text-center font-ovo max-w-2xl mx-auto text-gray-700 dark:text-white/70 leading-relaxed transition-colors duration-300">
        I am a passionate Front-End Developer specializing in building responsive, high-performance web applications using HTML, CSS, JavaScript, TypeScript, React.js, and Next.js. With hands-on experience in real-world projects, I focus on creating user-friendly interfaces and scalable solutions. I continuously stay updated with modern technologies to deliver professional, future-ready applications that combine clean code with exceptional user experience.
      </p>

      <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto px-4">
        {infoList.map(({ icon, iconDark, title, description }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-[#1C0E24] shadow-lg dark:shadow-none border border-black/5 dark:border-white/10 rounded-2xl p-8 w-full max-w-md text-center transition-all duration-300"
          >
            <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Image src={isDarkMode ? iconDark : icon} alt={title} width={30} height={30} className="w-7 h-7" />
            </div>
            <h3 className="font-semibold text-gray-800 dark:text-white mb-4 text-lg transition-colors duration-300">{title}</h3>

            {Array.isArray(description) ? (
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                {description.map((img, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.15, y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 shadow-sm transition-all duration-300"
                  >
                    <Image
                      src={img}
                      alt={`${title}-${idx}`}
                      width={26}
                      height={26}
                      className="w-6.5 h-6.5 object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 dark:text-white/60 text-base mt-2 transition-colors duration-300">{description}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default About