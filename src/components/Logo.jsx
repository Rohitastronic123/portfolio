import { motion } from 'framer-motion'

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center space-x-2"
    >
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-10 h-10 border-2 border-blue-600 rounded-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-blue-600 font-bold text-lg">R</span>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold text-gray-900">Rohit Bairwa</h1>
        <p className="text-xs text-gray-500">Full Stack Developer</p>
      </div>
    </motion.div>
  )
}

export default Logo