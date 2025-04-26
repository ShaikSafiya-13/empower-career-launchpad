import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import SignUpDialog from "./SignUpDialog";
import { LogIn } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 shadow-sm backdrop-blur-sm py-3" : "bg-transparent py-6"
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">CL</span>
            </div>
            <span className="text-xl font-bold gradient-text">Career Launchpad</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/jobs" className="text-sm font-medium hover:text-brand-600 transition-colors">
            Find Jobs
          </Link>
          <a href="#training" className="text-sm font-medium hover:text-brand-600 transition-colors">
            Free Training
          </a>
          <a href="#mentoring" className="text-sm font-medium hover:text-brand-600 transition-colors">
            Mentoring
          </a>
          <a href="#about" className="text-sm font-medium hover:text-brand-600 transition-colors">
            About Us
          </a>
        </div>
        
        <div className="flex items-center gap-3">
          <SignUpDialog>
            <Button variant="ghost" size="sm" className="hidden md:flex gap-2">
              <LogIn size={16} />
              Login
            </Button>
          </SignUpDialog>
          
          <SignUpDialog>
            <Button variant="default" size="sm" className="bg-brand-500 hover:bg-brand-600">
              Get Started
            </Button>
          </SignUpDialog>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
