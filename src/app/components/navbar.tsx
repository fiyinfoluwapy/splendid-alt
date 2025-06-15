'use client'

import React, { useState } from 'react'
import { MenuIcon, XIcon } from 'lucide-react'
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className="sticky top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-[#0a3875]">
              <span className="text-[#F47A1F] italic">Splendid</span> Altruistic Academy
            </h1>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-[#0a3875] font-medium"
            >
              About Us
            </a>
            <a
              href="#academics"
              className="text-gray-700 hover:text-[#0a3875] font-medium"
            >
              Academics
            </a>
            <a
              href="#admissions"
              className="text-gray-700 hover:text-[#0a3875] font-medium"
            >
              Admissions
            </a>
            <a
              href="#news"
              className="text-gray-700 hover:text-[#0a3875] font-medium"
            >
              News
            </a>
           
            <a
              href="#contact"
              className="text-gray-700 hover:text-[#0a3875] font-medium"
            >
              Contact
            </a>
            <a
              href="#apply"
              className="bg-[#0a3875] text-white px-4 py-2 rounded-md hover:bg-[#082c5c] transition-colors font-medium"
            >
              Apply Now
            </a>
          </nav>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#0a3875]"
            >
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <a
                href="#about"
                className="text-gray-700 hover:text-[#0a3875] font-medium py-2"
              >
                About Us
              </a>
              <a
                href="#academics"
                className="text-gray-700 hover:text-[#0a3875] font-medium py-2"
              >
                Academics
              </a>
              <a
                href="#admissions"
                className="text-gray-700 hover:text-[#0a3875] font-medium py-2"
              >
                Admissions
              </a>
              <a
                href="#news"
                className="text-gray-700 hover:text-[#0a3875] font-medium py-2"
              >
                News
              </a>
              
              <a
                href="#contact"
                className="text-gray-700 hover:text-[#0a3875] font-medium py-2"
              >
                Contact
              </a>
              <a
                href="#apply"
                className="bg-[#0a3875] text-white px-4 py-2 rounded-md hover:bg-[#082c5c] transition-colors font-medium text-center"
              >
                Apply Now
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
