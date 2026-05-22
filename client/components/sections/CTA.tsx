import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function CTA() {
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

  return (
    <section id="cta" className="bg-navy py-20" ref={ref}>
      <div className="container-atos">
        <div
          className={`flex flex-col lg:flex-row items-center justify-between gap-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div>
            <h2
              className="font-fraunces text-4xl font-bold text-white leading-tight mb-3"
              style={{ letterSpacing: "-0.025em" }}
            >
              Ready to launch<br />
              your <em className="text-accent italic">career?</em>
            </h2>
            <p className="text-base text-blue-200 mt-3 max-w-sm">
              Join 10,000+ learners who transformed their future with Atos Recruit. Your next
              step is one click away.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link to="/courses" className="btn btn-white">
              <span>Register Now →</span>
            </Link>
            <Link to="/courses" className="btn btn-outline-white">
              <span>Browse Courses</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
