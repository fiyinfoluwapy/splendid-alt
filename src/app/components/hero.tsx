'use client'
import Image from 'next/image'
import React from 'react'

export function Hero() {
  return (
    <section className="relative w-full bg-black  overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          alt="Students in classroom"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Splendid Altruistic Academy
          </h1>
          <h2 className="text-xl md:text-2xl text-[#F47A1F] font-semibold italic mb-6">
            ...for destined leaders
          </h2>
          <p className="text-white text-base md:text-lg mb-8 max-w-2xl">
            Splendid Altruistic Academy provides a supportive and challenging environment
            where students develop the knowledge, skills, and character to excel
            in an ever-changing world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#admissions"
              className="bg-[#F47A1F] text-[#0a3875] px-6 py-3 rounded-md font-medium text-center hover:bg-white transition-colors"
            >
              Apply Now
            </a>
            <a
              href="#contact"
              className="bg-[#7AC142] text-[#0a3875] px-6 py-3 rounded-md font-medium text-center hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
