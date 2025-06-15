import React from 'react'
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from 'lucide-react'
export function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0a3875] mb-2">Contact Us</h2>
          <div className="w-24 h-1 bg-[#F47A1F] mx-auto"></div>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            We would love to hear from you. Get in touch with us for any inquiries.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-[#0a3875] mb-6">
              Send Us a Message
            </h3>
            <form>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a3875]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a3875]"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a3875]"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0a3875]"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#0a3875] text-white px-6 py-3 rounded-md font-medium hover:bg-[#082c5c] transition-colors w-full"
              >
                Send Message
              </button>
            </form>
          </div>
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-2xl font-semibold text-[#0a3875] mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#F47A1F] rounded-full flex items-center justify-center">
                      <MapPinIcon size={20} className="text-[#0a3875]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-black">Address</h4>
                    <p className="text-gray-700">
                      Splendid Road, Lekki Phase 1, Lagos, Nigeria.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#F47A1F] rounded-full flex items-center justify-center">
                      <PhoneIcon size={20} className="text-[#0a3875]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-black">Phone</h4>
                    <p className="text-gray-700">
                      +234 801 234 5678
                      <br />
                      +234 809 876 5432
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#F47A1F] rounded-full flex items-center justify-center">
                      <MailIcon size={20} className="text-[#0a3875]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-black">Email</h4>
                    <p className="text-gray-700">
                      info@splendidaltruisticacademy.edu.ng
                      <br />
                      splendidaltruisticacademy@gmail.edu.ng
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-[#F47A1F] rounded-full flex items-center justify-center">
                      <ClockIcon size={20} className="text-[#0a3875]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-black">Office Hours</h4>
                    <p className="text-gray-700">
                      Monday - Friday: 8:00 AM - 4:00 PM
                      <br />
                      Saturday: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#0a3875] p-6 rounded-lg text-white">
              <h3 className="text-xl font-semibold mb-4">Visit Our Campus</h3>
              <p className="mb-4">
                We invite you to visit our campus to experience our facilities
                firsthand and meet our staff.
              </p>
              <a
                href="#"
                className="inline-block bg-[#F47A1F] text-[#0a3875] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Schedule a Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
