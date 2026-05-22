import { useEffect, useRef, useState } from "react";

export default function WhyAtos() {
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

  const features = [
    {
      icon: "bag",
      title: "Job-Ready Curriculum",
      desc: "Built with hiring managers from top companies. Every module maps to what gets you hired, not just what looks good on paper.",
    },
    {
      icon: "users",
      title: "1:1 Mentorship",
      desc: "Weekly sessions with industry experts who have worked at the companies you want to join. Personal, direct, and honest guidance.",
    },
    {
      icon: "award",
      title: "Recognized Certificate",
      desc: "Industry-validated certification on completion. VTU and Atos endorsed credentials that recruiters at partner companies recognize.",
    },
    {
      icon: "check",
      title: "Placement Assistance",
      desc: "Dedicated career coach, resume review, mock interviews, and direct interview drives with 200+ industry partner companies.",
    },
  ];

  const iconMap: {
    [key: string]: JSX.Element;
  } = {
    bag: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="14" rx="0" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    users: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    award: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    check: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  };

  return (
    <section id="why" className="py-20 bg-bg" ref={ref}>
      <div className="container-atos">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="section-label mx-auto mb-4">Why Choose Us</div>
          <h2 className="section-h2 mx-auto mb-4">
            Built for outcomes,<br />
            not just <em>learning</em>
          </h2>
          <p className="section-sub mx-auto max-w-xl">
            Everything you need to go from curious learner to hired professional.
          </p>
        </div>

        {/* Grid */}
        <div className="border border-border divide-x divide-border">
          <div className="grid grid-cols-1 lg:grid-cols-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`p-8 transition-all duration-500 hover:bg-surface ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                } ${idx < features.length - 1 ? "border-b lg:border-b-0" : ""}`}
                style={{
                  transitionDelay: isVisible ? `${0.08 * (idx + 1)}s` : "0s",
                }}
              >
                <div className="w-10 h-10 border border-border flex items-center justify-center text-accent mb-4.5">
                  {iconMap[feature.icon]}
                </div>
                <h3 className="text-md font-semibold text-ink mb-2.5">{feature.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
