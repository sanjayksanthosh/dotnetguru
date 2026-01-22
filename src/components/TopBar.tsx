import { Mail, Phone, MessageCircle } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-topbar text-topbar-foreground py-2">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
        <div className="flex items-center gap-6">
          <a href="mailto:info@dotnetgurukul.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail size={14} />
            <span className="hidden sm:inline">info@dotnetgurukul.com</span>
          </a>
          <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone size={14} />
            <span className="hidden sm:inline">+91 98765 43210</span>
          </a>
        </div>
        <a href="#contact" className="flex items-center gap-2 hover:text-primary transition-colors">
          <MessageCircle size={14} />
          <span>Quick Query</span>
        </a>
      </div>
    </div>
  );
};

export default TopBar;
