import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa6";

const Footer = ({ isDarkMode }) => {
  return (
    <footer className="w-full bg-gray-950 dark:bg-[#1C0E24] border-t border-black/5 dark:border-white/10 text-white transition-colors duration-300 mt-16 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <h1 className="text-3xl font-extrabold text-white">
          Aya <span className="text-amber-500">.</span>
        </h1>
        
        <p className="text-center md:text-left text-sm text-gray-400">
          © {new Date().getFullYear()} <span className="font-semibold text-white">Aya Eissa</span>. All rights reserved.
        </p>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://www.linkedin.com/in/aya-essa-02647633b/"
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 dark:border-white/10 hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-500/10 duration-300 text-gray-400 hover:text-amber-500"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>

          <a 
            href="mailto:ayaessagouda100@gmail.com"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 dark:border-white/10 hover:border-red-400 hover:bg-red-500/10 duration-300 text-gray-400 hover:text-red-400"
            aria-label="Send Email"
          >
            <FaEnvelope className="w-5 h-5" />
          </a>

          <a 
            href="https://github.com/ayaessagouda100"
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 dark:border-white/10 hover:border-white hover:bg-white/10 duration-300 text-gray-400 hover:text-white"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


