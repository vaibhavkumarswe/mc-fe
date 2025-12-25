import { useState } from "react";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo/logo.png"
            alt="Logo"
            className="h-8 w-8"
          />
          <span className="text-lg font-semibold">MyApp</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {/* Home */}
          <a
            href="/"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Home
          </a>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 rounded-md border px-3 py-2 text-sm hover:bg-gray-100"
            >
              Menu
              <span className="text-xs">▼</span>
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-40 rounded-md border bg-white shadow-md">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
