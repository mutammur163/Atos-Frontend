import { useEffect, useRef, useState } from "react";

export default function Courses() {
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

  const courses = [
    {
      featured: true,
      program: "Internship Program",
      level: "Beginner",
      title: "AI with Python — Training + Internship",
      desc: "Master Artificial Intelligence and Machine Learning with Python. Covers ML, DL, NLP, Computer Vision and Generative AI with real-world projects.",
      duration: "3–6 Months",
      enrolled: "1.2k enrolled",
      modules: "13 Modules",
      footer: "Training + Internship",
    },
    {
      featured: false,
      program: "Internship Program",
      level: "Beginner",
      title: "Data Analytics — Training + Internship",
      desc: "Become a job-ready Data Analyst with structured training in Excel, SQL, Power BI, Tableau, and Python for data-driven decision making.",
      duration: "3 Months",
      enrolled: "1.6k enrolled",
      modules: "",
      footer: "Training + Internship",
    },
    {
      featured: false,
      program: "Skill Program",
      level: "Intermediate",
      title: "Full Stack Development",
      desc: "Build complete web applications with React, Node.js, MongoDB and deployment. Industry-grade capstone projects included with placement support.",
      duration: "4 Months",
      enrolled: "980 enrolled",
      modules: "",
      footer: "Skill Program",
    },
  ];

  return (
    <section id="courses" className="py-20 bg-surface">
      <div className="container-atos" ref={ref}>
        {/* Header */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div>
            <div className="section-label">Programs</div>
            <h2 className="section-h2 mb-2.5">Learn what top companies hire for</h2>
            <p className="section-sub max-w-sm">
              Hand-picked, mentor-led programs designed for direct career outcomes.
            </p>
          </div>
          <a href="#" className="text-sm font-semibold text-accent inline-flex items-center gap-1.5 transition-all hover:gap-2.5">
            View all courses →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className={`border transition-all duration-500 ${
                course.featured
                  ? "border-t-4 border-t-accent border-accent bg-surface"
                  : "border-border bg-bg hover:border-accent hover:-translate-y-0.75"
              } p-6 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: isVisible ? `${0.08 * (idx + 1)}s` : "0s",
              }}
            >
              {/* Tags */}
              <div className="flex justify-between items-center gap-3 mb-4">
                <span
                  className={`text-xs font-semibold px-2.5 py-1 ${
                    course.featured
                      ? "bg-accent-lt text-accent-txt"
                      : "bg-accent-lt text-accent-txt"
                  }`}
                >
                  {course.program}
                </span>
                <span className="text-xs font-medium bg-gray-100 text-muted px-2.5 py-1">
                  {course.level}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-fraunces text-lg font-bold text-ink leading-snug mb-2.5">
                {course.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted leading-relaxed mb-4">{course.desc}</p>

              {/* Meta */}
              <div className="flex gap-4 mb-5 pb-4 border-b border-border text-xs text-subtle">
                <span className="flex items-center gap-1.5">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    opacity="0.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {course.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    opacity="0.5"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                  </svg>
                  {course.enrolled}
                </span>
                {course.modules && (
                  <span className="flex items-center gap-1.5">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      opacity="0.5"
                    >
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                    {course.modules}
                  </span>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-subtle">{course.footer}</span>
                <button
                  className={`text-xs font-semibold px-4.5 py-2.25 transition-colors ${
                    course.featured
                      ? "bg-accent text-white hover:bg-accent-dk"
                      : "bg-navy text-white hover:bg-accent"
                  }`}
                >
                  Register →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
