export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h2 className="text-lg font-semibold text-white">MyApp</h2>
          <p className="mt-2 text-sm">
            Building modern web experiences with React & Tailwind.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-white">Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-white">Follow Us</h3>
          <div className="flex gap-4 text-sm">
            <a href="https://twitter.com" target="_blank" className="hover:underline">
              Twitter
            </a>
            <a href="https://github.com" target="_blank" className="hover:underline">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" className="hover:underline">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-xs">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
    </footer>
  );
}
