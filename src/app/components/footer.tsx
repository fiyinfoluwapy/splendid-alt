import React from 'react'
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
 
} from 'lucide-react'
export function Footer() {
  return (
    <footer className="bg-[#0a3875] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-[#F47A1F] italic">Splendid</span> Altruistic Academy
            </h2>
            <p className="mb-6">
              Nurturing Excellence, Building Character. Splendid Altruistic Academy is
              committed to providing quality education that prepares students
              for future success.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-[#F47A1F] hover:text-[#0a3875] transition-colors"
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-[#F47A1F] hover:text-[#0a3875] transition-colors"
              >
                <TwitterIcon size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-[#F47A1F] hover:text-[#0a3875] transition-colors"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-[#F47A1F] hover:text-[#0a3875] transition-colors"
              >
                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F47A1F]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="hover:text-[#F47A1F] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#academics"
                  className="hover:text-[#F47A1F] transition-colors"
                >
                  Academics
                </a>
              </li>
              <li>
                <a
                  href="#admissions"
                  className="hover:text-[#F47A1F] transition-colors"
                >
                  Admissions
                </a>
              </li>
              <li>
                <a
                  href="#news"
                  className="hover:text-[#F47A1F] transition-colors"
                >
                  News & Events
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-[#F47A1F] transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#F47A1F] transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F47A1F]">
              Programs
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#F47A1F] transition-colors">
                  Junior Secondary
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#F47A1F] transition-colors">
                  Senior Secondary
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#F47A1F] transition-colors">
                  Science Program
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#F47A1F] transition-colors">
                  Arts Program
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#F47A1F] transition-colors">
                  Commercial Program
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#F47A1F] transition-colors">
                  Extracurricular Activities
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F47A1F]">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPinIcon
                  size={20}
                  className="flex-shrink-0 text-[#F47A1F]"
                />
                <p>15 Splendid Road, Lekki Phase 1, Lagos, Nigeria.</p>
              </div>
              <div className="flex gap-3">
                <PhoneIcon size={20} className="flex-shrink-0 text-[#F47A1F]" />
                <p>+234 801 234 5678</p>
              </div>
              <div className="flex gap-3">
                <MailIcon size={20} className="flex-shrink-0 text-[#F47A1F]" />
                <p>splendidaltruisticacademy@gmail.edu.ng</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 Splendid Altruistic Academy. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a
              href="#"
              className="text-sm hover:text-[#F47A1F] transition-colors mr-4"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm hover:text-[#F47A1F] transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
