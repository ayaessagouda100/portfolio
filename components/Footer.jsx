import { FaLinkedin, FaEnvelope, FaGithub, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white mt-16">

      <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col md:flex-row items-baseline justify-between gap-6">
        
        <h1 className="text-4xl font-extrabold text-white">
  Aya <span className="text-amber-500 text-5xl">.</span>
</h1>
        <p className="text-center md:text-left text-md text-gray-300">
          © {new Date().getFullYear()} <span className="font-semibold">Aya Eissa</span>. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a 
            href="https://www.linkedin.com/in/aya-essa-02647633b/"
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:border-blue-400 hover:bg-blue-500/10 duration-300"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>

          <a 
            href="mailto:ayaessagouda100@gmail.com"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:border-red-400 hover:bg-red-500/10 duration-300"
          >
            <FaEnvelope className="w-5 h-5" />
          </a>

          <a 
            href="https://github.com/ayaessagouda100"
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:border-gray-400 hover:bg-gray-500/10 duration-300"
          >
            <FaGithub className="w-5 h-5" />
          </a>

          <a 
            href="https://x.com/yourusername"
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:border-sky-400 hover:bg-sky-500/10 duration-300"
          >
            <FaXTwitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


