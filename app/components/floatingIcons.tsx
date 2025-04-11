import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { motion } from "framer-motion";
const FloatingIcons = () => {
  return (
    <div className="fixed top-1/2 right-6 flex flex-col space-y-4 transform -translate-y-1/2 z-50">
      <motion.a
        href="https://medium.com/@mansipatel3104"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3 }}
        className="fixed right-4 bottom-8 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all"
      >
        <FaMedium className="text-2xl" />
      </motion.a>

      <motion.a
        href="https://www.linkedin.com/in/mansi2911/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3 }}
        className="fixed right-4 bottom-24 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-500 transition-all"
      >
        <FaLinkedin className="text-2xl" />
      </motion.a>
      <motion.a
        href="https://github.com/mansi8140"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3 }}
        className="fixed right-4 bottom-40 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all"
      >
        <FaGithub className="text-2xl" />
      </motion.a>
    </div>
  );
};

export default FloatingIcons;
