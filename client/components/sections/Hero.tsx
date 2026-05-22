import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-navy)" }}
    >
      {/* Radial glow element - bottom right */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--accent-18) 0%, transparent 70%)",
          right: "-10%",
          bottom: "-20%",
        }}
      />

      <div className="container-atos w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center py-16 max-w-2xl">
          {/* Left content */}
          <div>
            {/* Eyebrow label */}
            <div
              className={`inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                backgroundColor: "var(--bg-amber-tint)",
                border: "1px solid var(--accent-25)",
                color: "var(--amber-label)",
                fontSize: "12px",
                fontWeight: "600",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              <div
                className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"
                style={{ backgroundColor: "var(--accent)" }}
              />
              New Collection 2025
            </div>

            {/* H1 */}
            <h1
              className={`mb-6 leading-tight transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                fontFamily: "Playfair Display",
                fontSize: "60px",
                fontWeight: "900",
                color: "var(--text-light)",
                lineHeight: "1.0",
                letterSpacing: "-0.035em",
              }}
            >
              Bold Design<br />
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>Meets Craft</em>
            </h1>

            {/* Divider */}
            <div
              className={`w-12 h-0.5 mb-6 transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                backgroundColor: "var(--accent)",
                transitionDelay: isLoaded ? "0.32s" : "0s",
              }}
            />

            {/* Body */}
            <p
              className={`mb-8 leading-relaxed max-w-lg transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                fontSize: "18px",
                fontWeight: "300",
                color: "var(--text-light-55)",
                transitionDelay: isLoaded ? "0.4s" : "0s",
              }}
            >
              Transform your vision into reality with our premium design solutions. Crafted
              for brands that dare to be different.
            </p>

            {/* CTAs */}
            <div
              className={`flex gap-4 mb-7 transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isLoaded ? "0.5s" : "0s",
              }}
            >
              <Link to="/courses" className="btn btn-amber px-8">
                <span>Explore Now</span>
              </Link>
              <a href="#services" className="btn btn-outline-light px-8">
                <span>Learn More</span>
              </a>
            </div>

            {/* Social Proof */}
            <div
              className={`flex items-center gap-4 transition-all duration-700 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isLoaded ? "0.6s" : "0s",
              }}
            >
              <div className="flex">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{
                      backgroundColor: "var(--accent)",
                      marginLeft: i === 0 ? 0 : "-8px",
                      border: "2px solid var(--bg-navy)",
                      zIndex: 10 - i,
                    }}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
              <span
                style={{
                  fontSize: "12.5px",
                  color: "var(--text-light-55)",
                }}
              >
                <span style={{ color: "var(--text-light)", fontWeight: "500" }}>500+</span> Happy
                clients
              </span>
            </div>
          </div>

          {/* Right - Image placeholder */}
          <div
            className={`relative hidden lg:block transition-all duration-1000 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transitionDelay: isLoaded ? "0.25s" : "0s",
            }}
          >
            <div
              className="w-full aspect-video bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center relative rounded-2xl"
              role="img"
              aria-label="Hero showcase"
            >
              <div className="text-center">
                <svg
                  width="48"
                  height="48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="mx-auto mb-2 opacity-40"
                  style={{ color: "var(--text-light-35)" }}
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
                <p style={{ fontSize: "12px", color: "var(--text-light-35)" }}>
                  Hero image
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
