import { useEffect } from 'react';
import { Star } from 'lucide-react';

export function GoogleReviews() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute("data-use-service-core", "");
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="pt-12 pb-4">
      <div className="flex flex-col items-center mb-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-bold text-2xl text-white">Excellent</span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <div key={star} className="bg-[#FDB521] p-1 rounded-sm">
                <Star className="w-4 h-4 text-black fill-current" />
              </div>
            ))}
          </div>
        </div>
        <p className="text-gray-400 text-sm">
          Based on <span className="font-semibold text-white">150+ reviews</span> on <span className="font-bold text-white">Google</span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Michael Chen",
              date: "1 month ago",
              text: "Absolutely floored by the quality of work at DrivenMN. Brought in my new Model Y for a full stealth PPF wrap and ceramic tint. The attention to detail is unmatched - you can't even see the seams.",
              initial: "M",
              bg: "bg-blue-600"
            },
            {
              name: "Sarah Johnson",
              date: "2 weeks ago",
              text: "Best tint shop in the Twin Cities, hands down. I've taken three cars here now. They use top-tier XPEL film and the installation is always flawless. No bubbles, no gaps, just perfection.",
              initial: "S",
              bg: "bg-purple-600"
            },
            {
              name: "David Peterson",
              date: "3 months ago",
              text: "Professional, knowledgeable, and honest. I wasn't sure what level of tint I legally could get or wanted, and they walked me through all the options. The heat rejection on the XR Plus is a game changer.",
              initial: "D",
              bg: "bg-green-600"
            }
          ].map((review, i) => (
            <div key={i} className="bg-[#111] p-6 rounded-2xl border border-white/10 hover:border-[#FDB521]/30 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${review.bg} flex items-center justify-center text-white font-bold shadow-lg`}>
                    {review.initial}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{review.name}</div>
                    <div className="text-xs text-gray-500">{review.date}</div>
                  </div>
                </div>
                <svg className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-3 h-3 text-[#FDB521] fill-[#FDB521]" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center">
        <a 
          href="https://share.google/Lpoh72rAb2YakkIRe" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#FDB521] transition-colors"
        >
          Read all reviews on Google
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}
