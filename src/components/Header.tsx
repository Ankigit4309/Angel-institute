import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; // Icon library (install lucide-react if not used yet)

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[radial-gradient(circle_at_top_left,_#ffffff,_#f0f9ff,_#dbeafe,_#bae6fd)] backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
          <img src="/logo/logo.png" alt="Angle Institute Logo" className="h-[63px] w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {["/", "/courses", "/about", "/contact"].map((path, idx) => (
            <Link
              key={idx}
              to={path}
              className={`transition-colors hover:text-primary ${
                isActive(path) ? "text-primary" : "text-foreground/60"
              }`}
            >
              {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Link to="/login">
            <Button variant="ghost" size="sm">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button size="sm" className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-smooth">
              Register
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-md rounded-b-lg">
          <nav className="flex flex-col space-y-3 text-sm font-medium">
            {["/", "/courses", "/about", "/contact"].map((path, idx) => (
              <Link
                key={idx}
                to={path}
                onClick={closeMenu}
                className={`transition-colors hover:text-primary ${
                  isActive(path) ? "text-primary" : "text-foreground/60"
                }`}
              >
                {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
          </nav>

          <div className="mt-4 flex flex-col space-y-2">
            <Link to="/login" onClick={closeMenu}>
              <Button variant="ghost" className="w-full">
                Login
              </Button>
            </Link>
            <Link to="/register" onClick={closeMenu}>
              <Button className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow transition-smooth">
                Register
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
