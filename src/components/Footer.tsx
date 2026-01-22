import { Facebook, Twitter, Linkedin, Youtube, Instagram, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/course/combo-package" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  const courseLinks = [
    { name: "ASP.NET Core", path: "/course/aspnet-course-online-training" },
    { name: "C# Programming", path: "/course/c-course-online-training" },
    { name: "SQL Server", path: "/course/sql-server-course-online-training" },
    { name: ".NET Combo Package", path: "/course/combo-package" },
  ];

  return (
    <footer className="bg-footer text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white rounded-lg p-1">
                <span className="text-primary font-bold text-lg">.NET</span>
              </div>
              <span className="font-bold text-lg">Dotnet Gurukul</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              A school for .NET developers. We provide comprehensive training in ASP.NET Core, C#, SQL Server, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/70 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Courses</h4>
            <ul className="space-y-2">
              {courseLinks.map((course) => (
                <li key={course.name}>
                  <Link to={course.path} className="text-white/70 hover:text-primary transition-colors text-sm">
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>📧 info@dotnetgurukul.com</li>
              <li>📞 +91 98765 43210</li>
              <li>📍 Hyderabad, India</li>
            </ul>
            <div className="flex gap-3 mt-4">
              {[Facebook, Twitter, Linkedin, Youtube, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Dotnet Gurukul. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/60 hover:text-primary transition-colors text-sm"
          >
            Back to top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
