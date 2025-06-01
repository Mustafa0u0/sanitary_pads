// src/components/Team.jsx
import React from 'react'
import member1 from '../assets/team_member1.jpeg'
import member2 from '../assets/simaat madnie .jpg'
import member3 from '../assets/Sultan.jpg'
import member4 from '../assets/Basma Almaza PIC.png'
import member5 from '../assets/Sultan.jpg'

const team = [
  { img: member1, name: 'Bashir Mahad Abshir Abdi' },
  { img: member2, name: 'Simaat Madnie' },
  { img: member3, name: 'Sultan Ali Alshardofi Ahmed' },
  { img: member4, name: 'Basma Almaza' },
  { img: member5, name: 'Osama Mohamed Abuagla' },
]

export default function Team() {
  return (
    <section id="team" className="bg-white py-16">
      <div className="container mx-auto px-4 space-y-12">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">Our Team</h2>
        </div>

        {/* Intro Paragraph */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-700 leading-relaxed">
            Our team is a vibrant mix of cultures, united by a shared passion for positive impact.
            We come from five different countries—Sudan, Yemen, Somalia, Palestine, and Kashmir (India).
            Our diverse backgrounds give us a rich perspective on global challenges and innovative solutions.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            The idea for our eco-friendly sanitary pad business emerged from heartfelt conversations
            about the struggles women face in different parts of the world, especially in accessing
            affordable, safe, and sustainable menstrual products. As young changemakers, we realized
            that this was not only a health issue but also an environmental one—with millions of
            plastic-based pads polluting our planet every year.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Inspired by our different experiences and driven by a shared goal, we decided to develop
            eco-friendly sanitary pads that are biodegradable, affordable, and accessible, especially
            for underprivileged communities. Our initiative reflects both our cultural empathy and our
            commitment to social business—one that creates change without harming the planet.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Together, across borders and cultures, we’re building a solution that uplifts women and
            protects the environment.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center bg-white rounded-lg shadow-md p-6"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover"
              />
              <p className="mt-4 text-lg font-semibold text-gray-900">
                {member.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
