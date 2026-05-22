import { Link } from "react-router-dom";

export default function Footer() {
  const logoSvg = (
    <svg width="22" height="20" viewBox="0 0 32 28" fill="none">
      <rect x="1.5" y="1.5" width="29" height="25" stroke="white" strokeWidth="3" fill="none" />
      <path d="M5 27L16 4L27 27" stroke="white" strokeWidth="3" fill="none" strokeLinejoin="miter" />
      <line x1="10" y1="19" x2="22" y2="19" stroke="white" strokeWidth="3" />
    </svg>
  );

  return (
    <footer id="footer" className="bg-navy border-t border-white/10 pt-14 pb-7">
      <div className="container-atos">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-1 font-fraunces text-lg font-bold text-white">
              {logoSvg}
              Atos Recruit LLP
            </div>
            <div className="text-sm text-accent mb-3">Serve the society, Save the society.</div>
            <p className="text-sm text-blue-200 leading-relaxed max-w-xs">
              Empowering students with industry-relevant training and direct pathways to top
              careers. VTU listed, NSDC recognized, Bengaluru.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-widest mb-5">
              Quick Links
            </div>
            <div className="space-y-2.5">
              <Link to="/" className="block text-sm text-blue-200 transition-colors hover:text-white">
                Home
              </Link>
              <Link to="/courses" className="block text-sm text-blue-200 transition-colors hover:text-white">
                Courses
              </Link>
              <a href="#partnerships" className="block text-sm text-blue-200 transition-colors hover:text-white">
                About
              </a>
              <a href="#faq" className="block text-sm text-blue-200 transition-colors hover:text-white">
                Contact
              </a>
              <Link to="/courses" className="block text-sm text-blue-200 transition-colors hover:text-white">
                Register
              </Link>
            </div>
          </div>

          {/* Col 3: Contact */}
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-widest mb-5">
              Contact
            </div>
            <div className="space-y-2.5">
              <a
                href="mailto:contactus@atosrecruitllp.in"
                className="block text-sm text-blue-200 transition-colors hover:text-white break-words"
              >
                contactus@atosrecruitllp.in
              </a>
              <a href="tel:+918050961616" className="block text-sm text-blue-200 transition-colors hover:text-white">
                +91 8050961616
              </a>
              <a href="tel:+918050461616" className="block text-sm text-blue-200 transition-colors hover:text-white">
                +91 8050461616
              </a>
              <span className="block text-sm text-blue-200">Bengaluru, Karnataka, India</span>
            </div>
          </div>

          {/* Col 4: Policies */}
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-widest mb-5">
              Policies
            </div>
            <div className="space-y-2.5">
              <a href="#" className="block text-sm text-blue-200 transition-colors hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="block text-sm text-blue-200 transition-colors hover:text-white">
                Refund Policy
              </a>
              <a href="#" className="block text-sm text-blue-200 transition-colors hover:text-white">
                Terms of Use
              </a>
              <a href="#" className="block text-sm text-blue-200 transition-colors hover:text-white">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col lg:flex-row justify-between items-center gap-6">
          <span className="text-sm text-blue-200">© 2025 Atos Recruit LLP. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="text-sm text-blue-200 transition-colors hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-sm text-blue-200 transition-colors hover:text-white">
              Terms
            </a>
            <a href="#" className="text-sm text-blue-200 transition-colors hover:text-white">
              Refunds
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
