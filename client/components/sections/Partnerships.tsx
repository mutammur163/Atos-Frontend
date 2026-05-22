import { useEffect, useRef, useState } from "react";

export default function Partnerships() {
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

  const partners = [
    { name: "Sobha Builders & Developers" },
    { name: "Vel Tech University" },
    { name: "SBA Online Tuitions" },
    { name: "VTU Approved" },
    { name: "NSDC Partner" },
    { name: "Skill India" },
  ];

  return (
    <section id="partnerships" className="py-20 bg-surface" ref={ref}>
      <div className="container-atos">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Left */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="section-label mb-4">Partnerships</div>
            <h2 className="section-h2 mb-4">
              Industry &amp; College<br />
              <em>Partnerships</em>
            </h2>
            <p className="section-sub mb-7">
              Atos Recruit LLP actively collaborates with colleges, universities, and industry
              partners to bridge the gap between academic learning and real-world employability.
              We're open to new MoUs.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                "Campus Training Programs",
                "Guaranteed Internship Drives",
                "Industry Expert Workshops",
                "Placement Assistance",
                "Curriculum Co-Design with Faculty",
                "MoU & Long-Term Collaborations",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-ink">
                  <div className="w-4 h-0.5 bg-accent flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex gap-3">
              <button className="btn btn-amber">
                <span>Partner With Us →</span>
              </button>
              <button className="btn btn-outline-dark">
                <span>Request a Brochure</span>
              </button>
            </div>
          </div>

          {/* Right - Stats Grid */}
          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{
              transitionDelay: isVisible ? "0.16s" : "0s",
            }}
          >
            {[
              { num: "50+", label: "College Tie-ups" },
              { num: "200+", label: "Industry Partners" },
              { num: "15k+", label: "Students Trained" },
              { num: "Open", label: "For New MoUs" },
            ].map((stat, idx) => (
              <div key={idx} className="border border-border p-6 transition-all hover:border-accent">
                <div
                  className="font-fraunces text-4xl font-bold text-ink leading-none mb-1.5"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  {stat.num}
                </div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners bar */}
        <div
          className={`border-t border-border pt-6 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{
            transitionDelay: isVisible ? "0.24s" : "0s",
          }}
        >
          <div className="text-xs font-semibold text-subtle uppercase tracking-widest mb-3.5">
            Trusted by leading institutions &amp; industry partners
          </div>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            {partners.map((partner, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-base font-medium text-muted transition-colors hover:text-ink cursor-pointer">
                  {partner.name}
                </span>
                {idx < partners.length - 1 && <span className="text-border-dk">·</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
