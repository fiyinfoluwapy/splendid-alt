import React from 'react'
import {
  CalendarIcon,
  ClipboardCheckIcon,
  GraduationCapIcon,
} from 'lucide-react'
export function Admissions() {
  return (
    <section id="admissions" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0a3875] mb-2">Admissions</h2>
          <div className="w-24 h-1 bg-[#f5c34b] mx-auto"></div>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Join our community of learners and start your journey towards
            academic excellence.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-[#0a3875] mb-4">
              Admission Process
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#f5c34b] rounded-full flex items-center justify-center">
                    <ClipboardCheckIcon size={24} className="text-[#0a3875]" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#0a3875]">
                    1. Application
                  </h4>
                  <p className="text-gray-700">
                    Complete the online application form and submit required
                    documents including birth certificate and previous academic
                    records.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#f5c34b] rounded-full flex items-center justify-center">
                    <GraduationCapIcon size={24} className="text-[#0a3875]" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#0a3875]">
                    2. Entrance Examination
                  </h4>
                  <p className="text-gray-700">
                    Applicants take an entrance examination to assess their
                    academic readiness and placement level.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#f5c34b] rounded-full flex items-center justify-center">
                    <CalendarIcon size={24} className="text-[#0a3875]" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#0a3875]">
                    3. Interview & Enrollment
                  </h4>
                  <p className="text-gray-700">
                    Successful candidates are invited for an interview with
                    their parents, followed by enrollment procedures.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="#apply"
                className="inline-block bg-[#0a3875] text-white px-6 py-3 rounded-md font-medium hover:bg-[#082c5c] transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-[#0a3875] mb-4">
              Key Dates
            </h3>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-3">
                <h4 className="font-medium text-black underline">Application Deadline</h4>
                <p className="text-gray-700">July 31, 2025</p>
              </div>
              <div className="border-b border-gray-200 pb-3">
                <h4 className="font-medium text-black underline">Entrance Examination</h4>
                <p className="text-gray-700">August 12, 2025</p>
              </div>
              <div className="border-b border-gray-200 pb-3">
                <h4 className="font-medium text-black underline">Interview Period</h4>
                <p className="text-gray-700">August 21-25, 2025</p>
              </div>
              <div className="border-b border-gray-200 pb-3">
                <h4 className="font-medium text-black underline">Admission Notification</h4>
                <p className="text-gray-700">August 31, 2025</p>
              </div>
              <div>
                <h4 className="font-medium text-black underline">School Resumption</h4>
                <p className="text-gray-700">September 11, 2025</p>
              </div>
            </div>
            <div className="mt-6 bg-[#0a3875] p-4 rounded-lg text-white">
              <h4 className="font-medium mb-2">Need Help?</h4>
              <p className="text-sm">
                Contact our admissions office for assistance with your
                application.
              </p>
              <p className="mt-2 font-medium">splendidaltruisticacademy@gmail.edu.ng</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
