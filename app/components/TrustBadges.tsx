'use client';

import { Star } from 'lucide-react';

const reviews = [
  {
    text: "What a great experience. From first call with Christina, to the home visit by Randy I knew I found my movers. Very efficient and 100% honest! On moving day Mario and Matt arrived exactly at arranged time and couldn't be nicer guys! Handled my stuff very carefully and took extra care with some important stuff. I will definitely use these guys again!",
    author: "Matt T.",
    location: "Blue Bell, PA",
  },
  {
    text: "We found Freedom Movers through a mail flyer and decided to give them a try. They are a small family owned company with personalized service. Randy is the owner and was great to work with. His team was polite and professional. The move went very smoothly and nothing got damaged or broken. His price was reasonable and less than competitors. Would definitely recommend.",
    author: "Jeri S.",
    location: "New Hope, PA",
  },
  {
    text: "I couldn't have hand picked a better team of movers that were professional, courteous and ON TIME. These guys moved every big and small piece out of our house while smiling and being friendly. It was as if Superman cloned himself and opened a moving company. If you want peace of mind, a crew who will show on time and will stay till every piece of furniture has been moved, Randy is your man. Worth every penny!",
    author: "Adam T.",
    location: "New York, NY",
  }
];

export default function TrustBadges() {
  return (
    <div className="mt-14">
      {/* Rating summary */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
          ))}
        </div>
        <span className="text-sm text-slate-500">
          <span className="font-semibold text-slate-700">5.0</span> on Yelp
        </span>
      </div>

      {/* Reviews */}
      <div className="space-y-3 mb-10">
        {reviews.map((review, i) => (
          <div key={i} className="border border-slate-200 rounded-lg p-5">
            <p className="text-slate-600 text-sm leading-relaxed mb-3">&ldquo;{review.text}&rdquo;</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-800">{review.author}</p>
                <p className="text-xs text-slate-400">{review.location}</p>
              </div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((j) => (
                  <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust badges */}
      <div className="flex justify-center gap-6 mb-6 text-sm text-slate-500">
        <span>📍 Bucks County & Surrounding Areas</span>
        <span>✓ Family Owned</span>
      </div>

      {/* Guarantee */}
      <div className="border-t border-slate-100 pt-6 text-center">
        <p className="text-sm text-slate-500">
          <span className="font-medium text-slate-700">100% Satisfaction Guarantee</span> — If you&apos;re not completely satisfied, we&apos;ll make it right.
        </p>
      </div>
    </div>
  );
}
