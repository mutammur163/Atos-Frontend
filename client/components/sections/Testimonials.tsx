import { useEffect, useRef, useState } from "react";

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);
  const ref = useRef(null);

  const quotes = [
    {
      text: "Atos transformed my career. The mentorship and live projects gave me real confidence to crack interviews. I went from zero coding background to a developer role in 5 months.",
      initials: "PS",
      name: "Priya Sharma",
      role: "Software Engineer @ Infosys",
    },
    {
      text: "The curriculum is intense but incredibly practical. I landed my dream job within 2 months of finishing. The mock interviews made all the difference — I felt prepared on day one.",
      initials: "AV",
      name: "Arjun Verma",
      role: "Data Analyst @ Deloitte",
    },
    {
      text: "Best decision I made. The portfolio I built here got me shortlisted by every company I applied to. Atos doesn't just teach — they coach you into a professional.",
      initials: "SI",
      name: "Sneha Iyer",
      role: "UX Designer @ Razorpay",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  const quote = quotes[currentQuote];

  return (
    <section id="testimonials" className="py-20 bg-bg" ref={ref}>
      <div className="container-atos max-w-3xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="section-label mx-auto mb-4">Student Stories</div>
          <h2 className="section-h2 mx-auto mb-2">
            Loved by 10,000+ <em>learners</em>
          </h2>
          <p className="section-sub max-w-sm mx-auto">Real outcomes from real students.</p>
        </div>

        {/* Quote Container */}
        <div
          className={`border border-border bg-surface p-12 lg:p-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="font-fraunces text-8xl text-accent opacity-35 leading-none mb-1">
            "
          </div>
          <p className="font-fraunces text-2xl italic text-ink leading-relaxed mb-8 h-24 flex items-center">
            "{quote.text}"
          </p>

          {/* Attribution */}
          <div className="flex items-center justify-center gap-3.5">
            <div className="w-11 h-11 rounded-full bg-accent-lt flex items-center justify-center text-sm font-bold text-accent-txt">
              {quote.initials}
            </div>
            <div>
              <div className="text-base font-semibold text-ink">{quote.name}</div>
              <div className="text-sm text-muted">{quote.role}</div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-7">
          <button
            onClick={prevQuote}
            className="w-9 h-9 border border-border flex items-center justify-center text-muted transition-all hover:bg-ink hover:text-white hover:border-ink"
            aria-label="Previous testimonial"
          >
            ←
          </button>

          <div className="flex gap-1.5">
            {quotes.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 transition-all ${
                  idx === currentQuote
                    ? "bg-accent w-5"
                    : "bg-border-dk w-1.5"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextQuote}
            className="w-9 h-9 border border-border flex items-center justify-center text-muted transition-all hover:bg-ink hover:text-white hover:border-ink"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
