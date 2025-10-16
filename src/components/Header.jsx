import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'   // <-- arrow icon
import Logo from './Logo'

const Header = () => {
  const navItems = ['Home', 'About', 'Education', 'Experience', 'Projects', 'Skills', 'Contact']
  const resumeUrl = 'https://drive.google.com/file/d/1mAIjo6OH0tX-PspqybrX0z40I9cVkYny/view?usp=drive_link' // <-- path to your resume
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
    >
      <div className="section-padding py-4">
        <div className="flex justify-between items-center">
          <Logo />
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
              >
                {item}
              </a>
            ))}

            {/* Resume button with arrow */}
            <a
              href={resumeUrl}          // path to your resume
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-all duration-300"
            >
              Resume
              <FiArrowUpRight className="ml-2 w-5 h-5" />
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
