import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react"

const Contact = ({ isDarkMode }) => {
   const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9cfcab2c-8e00-4f89-9bd8-57a7d9e0a9d7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1 }}
    viewport={{ once: true }}
    transition={{duration: 0.6}}
      id="contact"
      className="relative w-full min-h-[300px] px-[12%] py-10 scroll-mt-0 md:scroll-mt-5 pt-28 mb-2 text-lg font-ovo transition-colors duration-300"
    >
      <Image
        src="/footer-bg-color.png"
        alt="Background"
        fill
        className="object-cover -z-10 dark:hidden"
      />

      <motion.h2
      initial={{opacity:0, y:-20}}
    whileInView={{opacity:1, y:0 }}
    viewport={{ once: true }}
    transition={{duration: 0.5, delay: 0.2}}
      className="text-center text-5xl font-ovo mb-5 text-gray-900 dark:text-white transition-colors duration-300">Get in touch</motion.h2>
      
      <motion.p
      initial={{opacity:0}}
    whileInView={{opacity:1 }}
    viewport={{ once: true }}
    transition={{duration: 0.5, delay: 0.3}}
    className="mb-10 text-center font-ovo text-gray-600 dark:text-white/70 transition-colors duration-300">
        Have a project in mind? Let's work together to bring it to life.
      </motion.p>
      
      <motion.form
      initial={{opacity:0}}
    whileInView={{opacity:1 }}
    viewport={{ once: true }}
    transition={{duration: 0.5 , delay:0.3}}
      onSubmit={onSubmit} className="max-w-2xl mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
    <motion.input
    initial={{x: -50,opacity:0}}
    whileInView={{x:0,opacity:1 }}
    viewport={{ once: true }}
    transition={{duration: 0.4 , delay: 0.4}}
      className="flex-1 p-3 outline-none border border-gray-400 dark:border-white/20 rounded-xl bg-white dark:bg-[#1C0E24] text-gray-950 dark:text-white placeholder-gray-400 dark:placeholder-white/40 focus:border-amber-500 dark:focus:border-white transition-all duration-300"
      type="text"
      placeholder="Enter your name"
      required
      name="name"
    />
    <motion.input
    initial={{x: 50,opacity:0}}
    whileInView={{x:0,opacity:1 }}
    viewport={{ once: true }}
    transition={{duration: 0.4 , delay: 0.5}}
      className="flex-1 p-3 outline-none border border-gray-400 dark:border-white/20 rounded-xl bg-white dark:bg-[#1C0E24] text-gray-950 dark:text-white placeholder-gray-400 dark:placeholder-white/40 focus:border-amber-500 dark:focus:border-white transition-all duration-300"
      type="email"
      placeholder="Enter your email"
      required
      name="email"
    />
    <motion.textarea
    initial={{y: 50,opacity:0}}
    whileInView={{y:0,opacity:1 }}
    viewport={{ once: true }}
    transition={{duration: 0.4 , delay: 0.6}}
      name="message"
      className="w-full md:col-span-2 p-4 outline-none border border-gray-400 dark:border-white/20 rounded-xl bg-white dark:bg-[#1C0E24] text-gray-950 dark:text-white placeholder-gray-400 dark:placeholder-white/40 focus:border-amber-500 dark:focus:border-white transition-all duration-300 mb-6"
      rows="6"
      placeholder="Enter your message"
      required
    ></motion.textarea>
  </div>

  <div className="flex justify-center">
    <motion.button
    whileHover={{scale: 1.05}}
    transition={{duration:0.3}}
      className="py-3.5 px-8 flex items-center justify-center gap-2 bg-black text-white dark:bg-white dark:text-[#11001F] rounded-full hover:bg-black/90 dark:hover:bg-white/90 duration-300 cursor-pointer shadow-md font-semibold"
      type="submit"
    >
      Submit Now
      <Image src={isDarkMode ? assets.right_arrow : assets.right_arrow_white} alt="" className="w-4" />
    </motion.button>
  </div>

  <p className="mt-4 text-center text-green-600 dark:text-green-400 font-medium">{result}</p>
</motion.form>

    </motion.div>
  );
};

export default Contact;

