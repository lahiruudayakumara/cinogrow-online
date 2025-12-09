
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-green-600 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              {/* simple leaf icon */}
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M4 20c6-1 9-6 14-11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 3c3 3 2 6-1 9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold">CinoGrow</p>
              <p className="text-sm text-white/90">
                Smart cinnamon cultivation · Sri Lanka
              </p>
            </div>
          </div>

          <nav
            aria-label="Footer"
            className="flex gap-6 flex-wrap justify-center md:justify-start"
          >
            <a
              href="/research"
              className="text-sm hover:underline hover:text-white/90 transition cursor-pointer"
            >
              Research
            </a>
            <a
              href="/literature-survey"
              className="text-sm hover:underline hover:text-white/90 transition cursor-pointer"
            >
              Literature
            </a>
            <a
              href="/documents"
              className="text-sm hover:underline hover:text-white/90 transition cursor-pointer"
            >
              Documents
            </a>
            <a
              href="/contact"
              className="text-sm hover:underline hover:text-white/90 transition cursor-pointer"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3 justify-center md:justify-end">
            <a
              href="https://github.com"
              aria-label="GitHub"
              className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.8.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a11.6 11.6 0 016.2 0C19 3.3 20 3.6 20 3.6c.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5A12 12 0 0012 .5z" />
              </svg>
            </a>
            <a
              href="mailto:info@cinogrow.example"
              className="text-sm bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 transition cursor-pointer"
            >
              info@cinogrow.example
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4 text-center text-sm text-white/90">
          <p>
            &copy; {new Date().getFullYear()} CinoGrow. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="/privacy" className="hover:underline cursor-pointer">
              Privacy
            </a>
            <a href="/terms" className="hover:underline cursor-pointer">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
