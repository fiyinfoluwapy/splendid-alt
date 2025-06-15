'use client'

import React from 'react'
import Image from 'next/image'

export function NewsEvents() {
  return (
    <section id="news" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0a3875] mb-2">
            News & Events
          </h2>
          <div className="w-24 h-1 bg-[#F47A1F] mx-auto"></div>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Stay updated with the latest happenings at Excel Academy.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative w-full h-48">
              <Image
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Students at science fair"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-2">June 15, 2023</p>
              <h3 className="text-lg font-semibold text-[#0a3875] mb-2">
                Spelling Bee Winners Announced
              </h3>
              <p className="text-gray-700 mb-4 line-clamp-3">
                Congratulations to the winners of our Annual Spelling Bee Fair.
                
              </p>
              <a href="#" className="text-[#0a3875] font-medium hover:text-[#082c5c]">
                Read More
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative w-full h-48">
              <Image
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Sports day event"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-2">May 28, 2023</p>
              <h3 className="text-lg font-semibold text-[#0a3875] mb-2">
                Inter-House Sports Competition
              </h3>
              <p className="text-gray-700 mb-4 line-clamp-3">
                Our annual Inter-House Sports Competition was a great success
                with Blue House emerging as the overall winner. Students
                competed in various track and field events.
              </p>
              <a href="#" className="text-[#0a3875] font-medium hover:text-[#082c5c]">
                Read More
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative w-full h-48">
              <Image
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80"
                alt="Cultural day celebration"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-2">April 10, 2023</p>
              <h3 className="text-lg font-semibold text-[#0a3875] mb-2">
                Cultural Day Celebration
              </h3>
              <p className="text-gray-700 mb-4 line-clamp-3">
                Students and staff celebrated Nigeria rich cultural heritage
                through traditional attire, food, music, and dance performances
                representing various ethnic groups.
              </p>
              <a href="#" className="text-[#0a3875] font-medium hover:text-[#082c5c]">
                Read More
              </a>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-[#0a3875] mb-4">
            Upcoming Events
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { day: '15', month: 'Jul', title: 'Parent-Teacher Conference', time: '9:00 AM - 2:00 PM | School Auditorium' },
              { day: '22', month: 'Jul', title: 'Career Day', time: '10:00 AM - 1:00 PM | School Hall' },
              { day: '05', month: 'Aug', title: 'Open Day', time: '9:00 AM - 3:00 PM | School Campus' },
              { day: '18', month: 'Aug', title: 'Graduation Ceremony', time: '11:00 AM | School Auditorium' },
            ].map((event, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex gap-4 items-start">
                  <div className="bg-[#7AC142] text-white p-2 rounded-md text-center min-w-[60px]">
                    <span className="block text-xl font-bold">{event.day}</span>
                    <span className="text-sm">{event.month}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-black">{event.title}</h4>
                    <p className="text-gray-700 text-sm">{event.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
