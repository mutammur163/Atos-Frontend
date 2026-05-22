import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface SidebarProps {
  mobileOpen: boolean;
  onMobileClose: () => void;
}

const navLinks = [
  { label: "Home", href: "/", hash: "#hero" },
  { label: "Courses", href: "/courses", hash: "" },
  { label: "About", href: "/", hash: "#partnerships" },
  { label: "Contact", href: "/", hash: "#footer" },
];

export default function Sidebar({ mobileOpen, onMobileClose }: SidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeHash, setActiveHash] = useState("#hero");

  // Lock body scroll on mobile when open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onMobileClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onMobileClose]);

  // Handle post-navigation hash scrolling
  useEffect(() => {
    const pendingHash = sessionStorage.getItem("scrollToHash");
    if (location.pathname === "/" && pendingHash) {
      sessionStorage.removeItem("scrollToHash");
      const element = document.getElementById(pendingHash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.pushState(null, "", pendingHash);
          setActiveHash(pendingHash);
        }, 150);
      }
    }
  }, [location.pathname]);

  // Direct URL hash load
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          setActiveHash(location.hash);
        }, 150);
      }
    }
  }, [location.pathname, location.hash]);

  // Track active section on scroll
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveHash("");
      return;
    }

    const handleScroll = () => {
      const sections = ["hero", "partnerships", "footer"];
      const scrollPosition = window.scrollY + 200; // offset

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveHash(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    onMobileClose();

    if (link.href === "/courses") {
      return; // standard React Router navigation
    }

    e.preventDefault();

    if (location.pathname === "/") {
      // Already on home page, scroll directly
      const targetId = link.hash.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", link.hash);
        setActiveHash(link.hash);
      }
    } else {
      // Navigate to home page first, save target hash in session storage
      sessionStorage.setItem("scrollToHash", link.hash);
      navigate("/");
    }
  };

  const isActive = (linkHref: string, linkHash: string) => {
    if (linkHref === "/courses") {
      return location.pathname === "/courses";
    }
    if (location.pathname === "/") {
      return activeHash === linkHash;
    }
    return false;
  };

  const logoSvg = (
    <svg width="20" height="18" viewBox="0 0 32 28" fill="none">
      <rect x="1.5" y="1.5" width="29" height="25" stroke="#E8920A" strokeWidth="3" fill="none" />
      <path d="M5 27L16 4L27 27" stroke="#E8920A" strokeWidth="3" fill="none" strokeLinejoin="miter" />
      <line x1="10" y1="19" x2="22" y2="19" stroke="#E8920A" strokeWidth="3" />
    </svg>
  );

  const sidebarContent = (
    <aside
      style={{
        width: "250px",
        background: "#0B1526",
        borderRight: "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Logo + Brand */}
      <div
        style={{
          padding: "28px 24px 24px",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <Link
          to="/"
          onClick={(e) => handleNavClick(e, navLinks[0])}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          {logoSvg}
          <div>
            <div
              style={{
                fontFamily: "DM Sans",
                fontSize: "15px",
                fontWeight: "700",
                color: "#FAFAF8",
                lineHeight: "1.2",
              }}
            >
              Atos Recruit LLP
            </div>
            <div
              style={{
                fontSize: "11px",
                color: "rgba(250,250,248,0.4)",
                marginTop: "2px",
                fontFamily: "DM Sans",
              }}
            >
              VTU Listed · Bengaluru
            </div>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav style={{ padding: "16px 0", flex: 1 }}>
        <div
          style={{
            fontSize: "10px",
            fontWeight: "600",
            color: "rgba(250,250,248,0.3)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "0 24px",
            marginBottom: "6px",
          }}
        >
          Navigation
        </div>
        {navLinks.map((link) => {
          const active = isActive(link.href, link.hash);
          return (
            <Link
              key={link.label}
              to={link.href}
              onClick={(e) => handleNavClick(e, link)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 24px",
                fontSize: "14px",
                fontWeight: active ? "600" : "400",
                color: active ? "#E8920A" : "rgba(250,250,248,0.65)",
                textDecoration: "none",
                borderLeft: active
                  ? "2px solid #E8920A"
                  : "2px solid transparent",
                background: active
                  ? "rgba(232,146,10,0.07)"
                  : "transparent",
                transition: "all 0.18s ease",
                fontFamily: "DM Sans",
              }}
              onMouseEnter={(e) => {
                if (!active) {
                  (e.currentTarget as HTMLElement).style.color = "#FAFAF8";
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,0.04)";
                }
              }}
              onMouseLeave={(e) => {
                if (!active) {
                  (e.currentTarget as HTMLElement).style.color =
                    "rgba(250,250,248,0.65)";
                  (e.currentTarget as HTMLElement).style.background =
                    "transparent";
                }
              }}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom: Register + Contact */}
      <div
        style={{
          padding: "20px 24px",
          borderTop: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <Link
          to="/courses"
          onClick={onMobileClose}
          style={{
            display: "block",
            textAlign: "center",
            padding: "10px 0",
            background: "#E8920A",
            color: "#FAFAF8",
            fontSize: "13px",
            fontWeight: "600",
            fontFamily: "DM Sans",
            textDecoration: "none",
            borderRadius: "999px",
            marginBottom: "16px",
            transition: "background 0.18s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#C47A08";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#E8920A";
          }}
        >
          Register Now
        </Link>

        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <a
            href="mailto:contactus@atosrecruitllp.in"
            style={{
              fontSize: "11.5px",
              color: "rgba(250,250,248,0.4)",
              textDecoration: "none",
              fontFamily: "DM Sans",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                "rgba(250,250,248,0.75)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                "rgba(250,250,248,0.4)";
            }}
          >
            contactus@atosrecruitllp.in
          </a>
          <a
            href="tel:+918050961616"
            style={{
              fontSize: "11.5px",
              color: "rgba(250,250,248,0.4)",
              textDecoration: "none",
              fontFamily: "DM Sans",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                "rgba(250,250,248,0.75)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                "rgba(250,250,248,0.4)";
            }}
          >
            +91 8050961616
          </a>
        </div>
      </div>
    </aside>
  );

  return (
    <>
      {/* ── DESKTOP: always-visible fixed sidebar ── */}
      <div
        className="hidden md:flex"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          width: "250px",
          zIndex: 900,
        }}
      >
        {sidebarContent}
      </div>

      {/* ── MOBILE: slide-in overlay ── */}
      {/* Backdrop */}
      <div
        className="md:hidden"
        onClick={onMobileClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(11,21,38,0.55)",
          zIndex: 1100,
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
        aria-hidden={!mobileOpen}
      />

      {/* Mobile sidebar panel */}
      <div
        className="md:hidden"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          width: "250px",
          zIndex: 1200,
          transform: mobileOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease",
        }}
      >
        {sidebarContent}
      </div>
    </>
  );
}
