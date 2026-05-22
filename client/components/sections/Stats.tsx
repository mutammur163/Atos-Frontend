import { useEffect, useRef, useState } from "react";

export default function Stats() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCounts();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, []);

  const animateCounts = () => {
    const targets = [50, 200, 15, 92];
    const durations = [1400, 1400, 1400, 1400];

    targets.forEach((target, idx) => {
      const startTime = performance.now();
      const duration = durations[idx];

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const value = Math.round(easeOutQuart * target);

        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[idx] = value;
          return newCounts;
        });

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    });
  };

  const stats = [
    { value: "50", suffix: "+", label: "College Tie-ups" },
    { value: "200", suffix: "+", label: "Industry Partners" },
    { value: "15", suffix: "k+", label: "Students Trained" },
    { value: "92", suffix: "%", label: "Placement Rate" },
  ];

  return (
    <section id="stats" className="bg-navy py-16" ref={observerRef}>
      <div className="container-atos">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
          <div className="border-r border-white/10 last:border-r-0 text-center py-8 px-8">
            <div className="font-fraunces text-5xl font-black text-white leading-tight" style={{ letterSpacing: "-0.04em" }}>
              {counts[0]}<span className="text-accent">{stats[0].suffix}</span>
            </div>
            <div className="text-base text-blue-200 mt-2">{stats[0].label}</div>
          </div>
          <div className="border-r border-white/10 last:border-r-0 text-center py-8 px-8">
            <div className="font-fraunces text-5xl font-black text-white leading-tight" style={{ letterSpacing: "-0.04em" }}>
              {counts[1]}<span className="text-accent">{stats[1].suffix}</span>
            </div>
            <div className="text-base text-blue-200 mt-2">{stats[1].label}</div>
          </div>
          <div className="border-r border-white/10 last:border-r-0 text-center py-8 px-8">
            <div className="font-fraunces text-5xl font-black text-white leading-tight" style={{ letterSpacing: "-0.04em" }}>
              {counts[2]}<span className="text-accent">{stats[2].suffix}</span>
            </div>
            <div className="text-base text-blue-200 mt-2">{stats[2].label}</div>
          </div>
          <div className="border-r border-white/10 last:border-r-0 text-center py-8 px-8">
            <div className="font-fraunces text-5xl font-black text-white leading-tight" style={{ letterSpacing: "-0.04em" }}>
              {counts[3]}<span className="text-accent">{stats[3].suffix}</span>
            </div>
            <div className="text-base text-blue-200 mt-2">{stats[3].label}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
