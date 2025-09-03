import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-hero text-background">
      {/* Wave Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-10 md:h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            className="text-background/10"
            d="M0,0 C480,100 960,0 1440,100 L1440,00 L0,0 Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* About + Social */}
          <div className="space-y-5">
            <p className="text-background/80 text-sm leading-relaxed">
              Empowering the next generation of developers with cutting-edge coding 
              education and industry expertise.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={label}
                  className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition transform hover:scale-110"
                >
                  <Icon className="h-5 w-5 text-background/70 hover:text-background" />
                </a>
              ))}
            </div>
          </div>

          {/* Courses */}
          <nav>
            <h3 className="font-semibold mb-4 text-lg tracking-wide">Courses</h3>
            <ul className="space-y-2 text-sm text-background/80">
              {[
                "Web Development",
                "UI/UX Design",
                "Graphics Design",
                "Frontend Development",
                "Backend Development",
                "Fullstack Development",
              ].map((course, i) => (
                <li key={i}>
                  <Link
                    to="/courses"
                    className="hover:text-background transition-colors"
                  >
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Quick Links */}
          <nav>
            <h3 className="font-semibold mb-4 text-lg tracking-wide">Quick Links</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li><Link to="/about" className="hover:text-background transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-background transition-colors">Contact</Link></li>
              <li><Link to="/register" className="hover:text-background transition-colors">Register</Link></li>
              <li><Link to="/login" className="hover:text-background transition-colors">Login</Link></li>
            </ul>
          </nav>

          {/* Contact Info */}
          <address className="not-italic">
            <h3 className="font-semibold mb-4 text-lg tracking-wide">Contact Info</h3>
            <div className="space-y-3 text-sm text-background/80">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@angleinstitute.com" className="hover:text-background transition-colors">
                  info@angleinstitute.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+15551234567" className="hover:text-background transition-colors">
                  +91 7905786675
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>B/h Pandit Deendayal Energy University
Koba-Gandhinagar Highway, Raisan Village,
Gandhinagar - 382007,
Gujarat INDIA</span>
              </div>
            </div>
          </address>
        </div>
            </div>
        {/* Bottom Bar */}
        <div className="  bg-[radial-gradient(circle_at_top_left,_#ffffff,_#f0f9ff,_#dbeafe,_#bae6fd)] mt-12  flex flex-col md:flex-row items-center justify-between text-sm text-black space-y-6 md:space-y-0">
          <img 
            src="/logo/logo.png" 
            alt="Angle Institute Logo" 
            className="h-[90px] w-[90px]"
          />
          <p>&copy; {new Date().getFullYear()} Angle Institute. All rights reserved.</p>
        </div>
      
    </footer>
  );
};

export default Footer;
