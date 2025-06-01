import React from 'react'
import { HeartIcon, HandRaisedIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'

const involvementOptions = [
  {
    title: 'Volunteer',
    description: 'Teach pad-making workshops and spread awareness in the community.',
    icon: <HandRaisedIcon className="h-10 w-10 text-brand-green mb-4" />,
    bg: 'bg-brand-green/10',
  },
  {
    title: 'Sponsor',
    description: 'Fund our outreach initiatives or donate materials to support local programs.',
    icon: <HeartIcon className="h-10 w-10 text-brand-peach mb-4" />,
    bg: 'bg-brand-peach/10',
  },
  {
    title: 'Shop',
    description: 'Purchase our eco-friendly pads and directly contribute to our cause.',
    icon: <ShoppingBagIcon className="h-10 w-10 text-brand-dark mb-4" />,
    bg: 'bg-brand-dark/10',
  },
]

export default function GetInvolved() {
  return (
    <section id="involved" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">Get Involved</h2>
          <p className="mt-2 text-lg text-gray-600">
            Join us in making a difference—choose how you’d like to contribute.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {involvementOptions.map((option) => (
            <div
              key={option.title}
              className={`flex flex-col items-center p-8 rounded-2xl shadow-lg transition-transform transform hover:-translate-y-1 ${option.bg}`}
            >
              {option.icon}
              <h3 className="text-2xl font-semibold text-brand-dark mb-2">
                {option.title}
              </h3>
              <p className="text-gray-700 text-center">{option.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
