import React from 'react'
export function Academics() {
  return (
    <section id="academics" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0a3875] mb-2">Academics</h2>
          <div className="w-24 h-1 bg-[#F47A1F] mx-auto"></div>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Our comprehensive curriculum is designed to challenge students and
            prepare them for future success.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#0a3875] mb-3">
              Creche and Primary
            </h3>
            <p className="text-gray-700 mb-4">
              Creche - Primary program builds a strong foundation in fundational
              subjects while encouraging creativity & self-awareness.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>• Literacy</li>
              <li>• Numeracy</li>
              <li>• Nature & Science</li>
              <li>• Social & Civil Responsibilities</li>
              <li>• Morals & Ethics</li>
              <li>• Curiosity & Creativity</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#0a3875] mb-3">
              Junior Secondary
            </h3>
            <p className="text-gray-700 mb-4">
              Our junior secondary program builds a strong foundation in core
              subjects while encouraging exploration and discovery.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>• English Language & Literature</li>
              <li>• Mathematics</li>
              <li>• Basic Science & Technology</li>
              <li>• Social Studies</li>
              <li>• Civic Education</li>
              <li>• Cultural & Creative Arts</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#0a3875] mb-3">
              Senior Secondary
            </h3>
            <p className="text-gray-700 mb-4">
              Students choose specialized tracks preparing them for university
              studies and future careers.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>• Science Track</li>
              <li>• Arts & Humanities Track</li>
              <li>• Commercial Studies Track</li>
              <li>• WASSCE/NECO Preparation</li>
              <li>• University Entrance Prep</li>
              <li>• Career Counseling</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#0a3875] mb-3">
              Extra-Curricular
            </h3>
            <p className="text-gray-700 mb-4">
              We believe in developing well-rounded students through various
              activities outside the classroom.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>• Sports & Athletics</li>
              <li>• Debate Club</li>
              <li>• Coding|Programing Bootcamps</li>
              <li>• Arts & Drama</li>
              <li>• Graphhic Designing Classes</li>
              <li>• Leadership Programs</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-center">
          <a
            href="#admissions"
            className="inline-block bg-[#0a3875] text-white px-6 py-3 rounded-md font-medium hover:bg-[#082c5c] transition-colors"
          >
            Learn More About Our Programs
          </a>
        </div>
      </div>
    </section>
  )
}
