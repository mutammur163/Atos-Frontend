export default function LogoMarquee() {
  const logos = [
    "Nike",
    "Adobe",
    "Apple",
    "Google",
    "Microsoft",
    "Tesla",
    "Spotify",
    "Netflix",
  ];

  return (
    <div
      className="w-full py-8 border-t border-light-10 overflow-hidden"
      style={{
        backgroundColor: "transparent",
        borderTopColor: "var(--border-light-10)",
      }}
    >
      {/* Left fade mask */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to right, var(--bg-navy), transparent)",
          width: "80px",
        }}
      />

      {/* Right fade mask */}
      <div
        className="absolute right-0 top-0 bottom-0 w-20 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to left, var(--bg-navy), transparent)",
          width: "80px",
        }}
      />

      {/* Marquee container */}
      <div className="container-atos relative">
        <div className="flex gap-12 animate-marquee hover:pause-animation">
          {/* First set */}
          {logos.map((logo, idx) => (
            <div
              key={`first-${idx}`}
              className="flex-shrink-0 flex items-center gap-3"
              style={{ minWidth: "fit-content" }}
            >
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "var(--text-light-35)",
                  fontFamily: "DM Sans",
                  whiteSpace: "nowrap",
                }}
              >
                {logo}
              </span>
              {idx < logos.length - 1 && (
                <div
                  className="w-1 h-1 rounded-full"
                  style={{
                    backgroundColor: "var(--accent-30)",
                  }}
                />
              )}
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {logos.map((logo, idx) => (
            <div
              key={`second-${idx}`}
              className="flex-shrink-0 flex items-center gap-3"
              style={{ minWidth: "fit-content" }}
            >
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "var(--text-light-35)",
                  fontFamily: "DM Sans",
                  whiteSpace: "nowrap",
                }}
              >
                {logo}
              </span>
              {idx < logos.length - 1 && (
                <div
                  className="w-1 h-1 rounded-full"
                  style={{
                    backgroundColor: "var(--accent-30)",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 28s linear infinite;
        }

        .pause-animation {
          animation-play-state: paused;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
