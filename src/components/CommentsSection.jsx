// src/components/CommentsSection.jsx
import React from 'react'

export default function CommentsSection() {
  const comments = [
    {
      name: 'Aisha Al-Farouk',
      text: 'Hi team! Just received my 3 pads. They feel super soft and comfy. Can’t believe they’re reusable and this affordable. Thank you for promoting hygiene the right way!',
    },
    {
      name: 'Nurul Huda',
      text: 'Loved the packaging and the colours! I used one yesterday, and honestly, I felt so confident throughout the day. Will definitely recommend to my friends.',
    },
    {
      name: 'Thandar Win',
      text: 'RM 24 for 3 pads is such a blessing. I’ve been trying to switch to sustainable options and RePad made it so easy. Thanks for making this accessible!',
    },
    {
      name: 'Siti Dewi',
      text: 'Hi, I just wanted to say thank you. I ordered 3 pads for RM 24 and they’re not just cute — they work so well. No leakage, no discomfort. Truly empowering product.',
    },
    {
      name: 'Fatima Ali',
      text: 'This was my first time using cloth pads and I was nervous, but these exceeded my expectations. Easy to wash, quick to dry, and super comfortable. Worth every cent.',
    },
    {
      name: 'Putri Santoso',
      text: 'Thanks for the quick delivery! The pads feel very breathable and soft. My younger sister also tried them and she’s in love. Keep going, RePad!',
    },
    {
      name: 'Khadija Mohamed',
      text: 'Affordable and effective! I ordered 3 pieces and now I feel like I should’ve gotten more. These pads changed my period experience. Thank you 💗',
    },
    {
      name: 'Amina Binti Ahmad',
      text: 'Hi RePad team! Received my order today. The little thank-you card in the parcel was a sweet touch. Proud to support women-led sustainable initiatives.',
    },
    {
      name: 'Dewi Kartika',
      text: 'I’ve tried other brands, but these are the most budget-friendly and reliable. Happy with the 3 pads I ordered — will come back for more soon.',
    },
    {
      name: 'Yu Thandar',
      text: 'It’s amazing to get 3 quality reusable pads for just RM 24. I’m a student so this matters a lot. RePad is doing such important work!',
    },
  ]

  return (
    <section id="reviews" className="bg-white py-20">
      <div className="container mx-auto px-4 space-y-12">
        <h3 className="text-4xl font-extrabold text-center text-brand-dark">
          What Our Customers Say
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comments.map((c, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl shadow-lg p-6 flex flex-col justify-between"
            >
              <p className="text-gray-700 mb-6">&ldquo;{c.text}&rdquo;</p>
              <p className="text-sm font-semibold text-gray-900 text-right">
                — {c.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}