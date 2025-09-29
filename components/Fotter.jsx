import React from 'react'
import { LuMail } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-white mb-2">
              AtharvaLad<span className="text-purple-500">.Dev</span>
            </h2>
            
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-3 text-white">
              Connect With Me
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Foxapee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/atharva-lad-a06bb8299/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/atharvalad05?igsh=bWNmODRzNDJvMzI5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="mailto:atharvalad05@gmail.com"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                <LuMail size={24} />
              </a>
            </div>
          </div>
        </div>
        {/* <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Atharva Lad. All rights
            reserved.
          </p>
        </div> */}
      </div>
    </footer>
  )
}
