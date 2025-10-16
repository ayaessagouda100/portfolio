import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react"

const Contact = () => {
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
    transition={{duration: 1}}
      id="contact"
      className="relative w-full min-h-[300px] px-[12%] py-10 scroll-mt-0 md:scroll-mt-5 pt-28 mb-2 text-lg font-ovo"
    >
      <Image
        src="/footer-bg-color.png"
        alt="Background"
        fill
        className="object-cover -z-10"
      />

      <motion.h2
      initial={{opacity:0, y:-20}}
    whileInView={{opacity:1, y:0 }}
    transition={{duration: 0.5, delay: 0.5}}
      className="text-center text-5xl font-ovo mb-5">Get in touch</motion.h2>
      <motion.p
      initial={{opacity:0}}
    whileInView={{opacity:1 }}
    transition={{duration: 0.5, delay: 0.7}}
    className="mb-10 text-center font-ovo">
        Have a project in mind? Let's work together to bring it to life.
      </motion.p>
      <motion.form
      initial={{opacity:0}}
    whileInView={{opacity:1 }}
    transition={{duration: 0.5 , delay:0.9}}
      onSubmit={onSubmit} className="max-w-2xl mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
    <motion.input
initial={{x: -50,opacity:0}}
    whileInView={{x:0,opacity:1 }}
    transition={{duration: 0.6 , delay: 1.1}}
      className="flex-1 p-3 outline-0 border-[0.5px] border-gray-400 rounded-md bg-white"
      type="text"
      placeholder="Enter your name"
      required
      name="name"
    />
    <motion.input
    initial={{x: 50,opacity:0}}
    whileInView={{x:0,opacity:1 }}
    transition={{duration: 0.6 , delay: 1.2}}
      className="flex-1 p-3 outline-0 border-[0.5px] border-gray-400 rounded-md bg-white"
      type="email"
      placeholder="Enter your email"
      required
      name="email"
    />
    <motion.textarea
    initial={{y: 100,opacity:0}}
    whileInView={{y:0,opacity:1 }}
    transition={{duration: 0.6 , delay: 1.3}}
      name="message"
      className="w-full md:col-span-2 p-4 outline-0 border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
      rows="6"
      placeholder="Enter your message"
      required
    ></motion.textarea>
  </div>

  <div className="flex justify-center">
    <motion.button
    whileHover={{scale: 1.05}}
    transition={{duration:0.3}}
      className="py-3 px-8 flex items-center justify-center gap-2 bg-black/80 text-white rounded-full hover:bg-black duration-500 cursor-pointer"
      type="submit"
    >
      Submit Now
      <Image src={assets.right_arrow_white} alt="" className="w-4" />
    </motion.button>
  </div>

  <p className="mt-4 text-center text-green-600">{result}</p>
</motion.form>

    </motion.div>
  );
};

export default Contact;

