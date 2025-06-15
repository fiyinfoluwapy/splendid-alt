'use client'
import React from 'react'
import Image from 'next/image'

export function AboutUs() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0a3875] mb-2">About Us</h2>
          <div className="w-24 h-1 bg-[#F47A1F] mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
              alt="School building"
              className="rounded-lg shadow-lg object-cover"
              width={600}
              height={400}
              priority
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[#0a3875] mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-4">
              Splendid Altruistic Academy is committed to providing a quality education that
              prepares students for higher learning and future careers. We strive to create a
              safe and inclusive environment where students can develop intellectually,
              socially, and emotionally.
            </p>
            <h3 className="text-2xl font-semibold text-[#0a3875] mb-4">Our Vision</h3>
            <p className="text-gray-700 mb-4">
              To be the leading secondary school in Lagos, recognized for academic excellence,
              character development, and producing well-rounded graduates who contribute
              positively to society.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-[#7AC142] p-4 rounded-lg text-center">
                <h4 className="text-white font-bold text-xl">5+</h4>
                <p className="text-white italic">Years of Excellence</p>
              </div>
              <div className="bg-[#F47A1F] p-4 rounded-lg text-center">
                <h4 className="text-white font-bold text-xl">95%</h4>
                <p className="text-white italic">Exam Success Rate</p>
              </div>
              <div className="bg-[#F47A1F] p-4 rounded-lg text-center">
                <h4 className="text-white font-bold text-xl">Enough</h4>
                <p className="text-white italic">Qualified Specialists</p>
              </div>
              <div className="bg-[#7AC142] p-4 rounded-lg text-center">
                <h4 className="text-white font-bold text-xl">150+</h4>
                <p className="text-white italic">Students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
