import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";


const navItems = [
  { name: "Home", href: "/" },
  {
    name: "ASP.NET CORE",
    href: "/course/aspnet-course-online-training",
    dropdown: [
      { name: "ASP.NET CORE Online Training", href: "/course/aspnet-course-online-training" },
      { name: "Tutor Profile", href: "/about" },
    ],
  },
  {
    name: "C#",
    href: "/course/c-course-online-training",
    dropdown: [
      { name: "C# Online Training", href: "/course/c-course-online-training" },
      { name: "Tutor Profile", href: "/about" },
    ],
  },
  {
    name: "SQL SERVER",
    href: "/course/sql-server-course-online-training",
    dropdown: [
      { name: "SQL SERVER Online Training", href: "/course/sql-server-course-online-training" },
      { name: "Tutor Profile", href: "/about" },
    ],
  },
  {
    name: ".NET Combo Package",
    href: "/course/combo-package",
    dropdown: [
      { name: ".NET Combo Package Details", href: "/course/combo-package" },
      { name: "View Pricing", href: "/#pricing" },
    ],
  },
  { name: "Blog", href: "/blog" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-nav sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img src="/images/logo.png" alt="Dotnet Gurukul" className="h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="nav-link flex items-center gap-1"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown size={14} />}
                </a>
                {item.dropdown && (
                  <div className="nav-dropdown">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-foreground hover:bg-primary hover:text-primary-foreground rounded transition-colors"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-nav-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-black/10">
            {navItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className="block py-2 text-nav-foreground hover:bg-primary/10 px-4 rounded"
                >
                  {item.name}
                </a>
                {item.dropdown && (
                  <div className="pl-6">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block py-2 text-nav-foreground/80 hover:bg-primary/10 px-4 rounded text-sm"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
