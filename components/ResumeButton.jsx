'use client'
import React from 'react'

import { FaFilePdf } from "react-icons/fa";

export const ResumeButton = () => {
  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf' // Make sure resume.pdf is in /public
    link.download = 'Atharva_Lad_Resume.pdf' // The filename when downloaded
    link.click()
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={downloadResume}
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-full shadow-lg flex items-center transition-all duration-300 hover:scale-105"
      >
        <FaFilePdf size={18} className="mr-2" />
        <span>Resume</span>
      </button>
    </div>
  )
}
