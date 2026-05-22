import { useRef, useState, useEffect } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

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

  const faqs = [
    {
      q: "Who is eligible to enroll?",
      a: "Any student or recent graduate from any stream is eligible. Most of our programs are designed for engineering, commerce, and science students looking to upskill and get placed. No prior experience is needed for beginner-level courses.",
    },
    {
      q: "Do you offer placement assistance?",
      a: "Yes — 100%. Every student enrolled in our Internship Programs and Skill Programs gets dedicated placement support: resume review, mock interviews, LinkedIn profile optimization, and direct referrals to our 200+ industry partner companies.",
    },
    {
      q: "Are classes live or recorded?",
      a: "Our programs follow a blended learning model — live interactive sessions with mentors twice a week, plus recorded lecture access for self-paced revision. All live sessions are recorded and available to enrolled students for 6 months post-completion.",
    },
    {
      q: "Is there an EMI option?",
      a: "Yes. We offer 0% EMI options on all programs in partnership with select payment providers. You can split the fee over 3, 6, or 12 months with zero interest. Contact us for details specific to your program.",
    },
    {
      q: "Will I get a certificate?",
      a: "Yes. All graduates receive an industry-validated certificate from Atos Recruit LLP. Internship program graduates additionally receive an internship completion letter and experience certificate, which counts toward VTU academic requirements where applicable.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-surface" ref={ref}>
      <div className="container-atos max-w-2xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="section-label mx-auto mb-4">FAQ</div>
          <h2 className="section-h2 mx-auto">
            Got questions?<br />
            We've got <em>answers.</em>
          </h2>
        </div>

        {/* Accordion */}
        <div className="border border-border divide-y divide-border">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: isVisible ? `${0.08 * (idx + 1)}s` : "0s",
              }}
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between p-6 text-left font-outfit text-md font-medium text-ink transition-all hover:bg-bg"
                aria-expanded={openIndex === idx}
              >
                {faq.q}
                <svg
                  className={`w-5 h-5 text-accent transition-transform duration-300 flex-shrink-0 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-350 ${
                  openIndex === idx ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 pt-2 text-base text-muted leading-relaxed border-t border-border">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
