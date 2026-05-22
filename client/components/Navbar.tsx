import { useState } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  onHamburgerClick: () => void;
}

export default function Navbar({ onHamburgerClick }: NavbarProps) {
  return (
    <>
      {/* Mobile-only top bar */}
      <header
        id="navbar"
        className="md:hidden fixed top-0 left-0 right-0 z-[1000] h-14 bg-navy border-b flex items-center px-5 justify-between"
        style={{ borderBottomColor: "rgba(255,255,255,0.08)" }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 no-underline">
          <div
            style={{
              fontFamily: "DM Sans",
              fontSize: "16px",
              fontWeight: "700",
            }}
          >
            <span style={{ color: "#FAFAF8" }}>Ato</span>
            <span style={{ color: "#E8920A" }}>s</span>
          </div>
        </Link>

        {/* Hamburger */}
        <button
          onClick={onHamburgerClick}
          className="flex flex-col gap-1.5 p-1"
          aria-label="Toggle navigation menu"
        >
          <span className="block w-5 h-0.5" style={{ background: "#FAFAF8" }} />
          <span className="block w-5 h-0.5" style={{ background: "#FAFAF8" }} />
          <span className="block w-5 h-0.5" style={{ background: "#FAFAF8" }} />
        </button>
      </header>
    </>
  );
}
