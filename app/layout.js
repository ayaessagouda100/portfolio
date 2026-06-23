import { Outfit , Ovo } from "next/font/google";
import "./globals.css";


const outfit = Outfit({
  subsets: ["latin"],
  weight : ['400','500','600','700']
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ['400']
});

export const metadata = {
  title: "Aya Eissa | Front-End Web Developer Portfolio",
  description: "Aya Eissa is a passionate Front-End Web Developer specializing in Next.js, React, TypeScript, Tailwind CSS, and modern web applications. Explore her recent work, skill sets, and get in touch.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden bg-white text-gray-900 dark:bg-[#11001F] dark:text-white transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}

