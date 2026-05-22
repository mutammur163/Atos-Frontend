import { useEffect, useRef, useState } from "react";

export default function Services() {
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

  const services = [
    {
      num: "01",
      title: "Manpower Solutions",
      desc: "Reliable, ethical staffing solutions for commercial and enterprise establishments. We connect the right talent with the right opportunity.",
      link: "Explore service",
    },
    {
      num: "02",
      title: "Internships & Career Guidance",
      desc: "Structured VTU-approved internship programs with clear career direction. Mentored, outcome-driven experiences that open real doors.",
      link: "Explore service",
    },
    {
      num: "03",
      title: "Crash Courses & Skill Programs",
      desc: "Focused, industry-aligned programs to build practical, job-ready skills fast. Delivered in partnership with SBA Online Tuitions.",
      link: "Explore programs",
    },
  ];

  return (
    <section id="services" className="py-20 bg-bg">
      <div className="container-atos" ref={ref}>
        {/* Header */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div>
            <div className="section-label">What We Do</div>
            <h2 className="section-h2 mb-4">
              Focused on quality,<br />
              we build <em>real careers</em>
            </h2>
          </div>
          <p className="text-md text-muted leading-relaxed">
            Atos Recruit LLP bridges the gap between academic learning and industry demand — with
            reliability, purpose, and real-world exposure at every step.
          </p>
        </div>

        {/* Grid */}
        <div className="border border-border divide-x divide-border">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`p-9 transition-all duration-500 hover:bg-surface ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{
                  transitionDelay: isVisible ? `${0.08 * (idx + 1)}s` : "0s",
                }}
              >
                <div
                  className="font-fraunces text-5xl font-bold text-border mb-5"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  {service.num}
                </div>
                <h3 className="text-lg font-semibold text-ink mb-3">{service.title}</h3>
                <p className="text-base text-muted leading-relaxed mb-5">{service.desc}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all hover:gap-2.5"
                >
                  {service.link} <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
