import { FaGithub, FaLinkedin } from "react-icons/fa";

const FloatingIcons = () => {
  return (
    <div className="fixed top-1/2 right-6 flex flex-col space-y-4 transform -translate-y-1/2 z-50">
      {/* GitHub Icon */}
      <a
        href="https://github.com/mansi8140"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300"
      >
        <FaGithub className="text-2xl" />
      </a>

      {/* LinkedIn Icon */}
      <a
        href="https://www.linkedin.com/in/mansi2911/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 transition-all duration-300"
      >
        <FaLinkedin className="text-2xl" />
      </a>
    </div>
  );
};

export default FloatingIcons;
