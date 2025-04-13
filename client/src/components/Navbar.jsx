import React from "react";
import { useState, useEffect } from "react";
import { Menu, X, Terminal, Code2, ArrowRight, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const navItems = [
  { name: "Home", href: "/", icon: "🏠" },
  { name: "Events", href: "/event", icon: "🎮" },
  { name: "Schedule", href: "/schedule", icon: "📅" },
  { name: "Brochure", href: "/brochure", icon: "📋" },
  // { name: "Registration", href: "/register", icon: "📝" },
  { name: "Gallery", href: "/gallery", icon: "📸" },
  { name: "Sponsors", href: "/sponsors", icon: "🤝", scrollToSection: true },
  // { name: "Login", href: "/login", icon: "🔑" },
  // { name: "Contact", href: "#contact", icon: "📞" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, logout, user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleNavItemClick = (item, e) => {
    if (item.scrollToSection) {
      e.preventDefault();

      // If we're not on the home page, navigate there first
      if (location.pathname !== "/") {
        navigate("/");

        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const sponsorsSection = document.querySelector(".SponsorsContainer");
          if (sponsorsSection) {
            sponsorsSection.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        // We're already on the home page, just scroll
        const sponsorsSection = document.querySelector(".SponsorsContainer");
        if (sponsorsSection) {
          sponsorsSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const isRegisterPage = location.pathname === "/register";
  const isLoginPage = location.pathname === "/login";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-['Space_Grotesk']",
        scrolled
          ? location.pathname === "/"
            ? "bg-gradient-to-r from-black/85 via-black/80 to-black/85 backdrop-blur-md"
            : "bg-gradient-to-r from-[#0f0c29]/95 via-[#302b63]/90 to-[#0f0c29]/95 backdrop-blur-md"
          : location.pathname === "/"
          ? "bg-gradient-to-r from-black/50 via-black/45 to-black/50 backdrop-blur-[2px]"
          : "bg-gradient-to-r from-[#0f0c29]/85 via-[#302b63]/80 to-[#0f0c29]/85 backdrop-blur-sm"
      )}
    >
      {/* Gradient Border Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00f2fe]/40 to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center group">
            <div className="relative w-8 h-8">
              <Code2 className="h-6 w-6 text-[#00f2fe] absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12" />
              <Terminal className="h-6 w-6 text-[#6a75f7] group-hover:text-[#00f2fe] absolute left-0 top-0 transition-all duration-300 group-hover:opacity-0" />
            </div>
            <span className="text-2xl font-bold ml-2">
              <span className="bg-gradient-to-r from-[#4facfe] via-[#6a75f7] to-[#00f2fe] bg-clip-text text-transparent group-hover:text-white transition-all duration-500">
                TECH
              </span>
              <span className="bg-gradient-to-r from-[#4facfe] via-[#6a75f7] to-[#00f2fe] bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:from-[#FFD700] group-hover:via-[#FFA500] group-hover:to-[#FF8C00] transition-all duration-500">
                MIT
              </span>
              <span className="bg-gradient-to-r from-[#4facfe] via-[#6a75f7] to-[#00f2fe] bg-clip-text text-transparent group-hover:text-white transition-all duration-500">
                I'25
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map(
              (item) =>
                (!isLoginPage || item.name !== "Login") && (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavItemClick(item, e)}
                    className={cn(
                      "px-6 py-2 text-md font-medium transition-all duration-300 relative group",
                      location.pathname === item.href
                        ? "text-[#00f2fe]"
                        : "text-white/80 hover:text-[#00f2fe]"
                    )}
                  >
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.icon}
                    </span>
                    <span className="relative inline-block left-0 group-hover:left-3 transition-all duration-300">
                      {item.name}
                    </span>
                    <span
                      className={cn(
                        "absolute bottom-0 left-0 h-[2px] bg-[#00f2fe] transition-all duration-300",
                        location.pathname === item.href
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      )}
                    ></span>
                  </a>
                )
            )}
            <div className="relative group ml-12">
              {!isAuthenticated ? (
                !isRegisterPage &&
                !isLoginPage && (
                  <>
                    <div className="absolute -inset-[2px] bg-gradient-to-r from-[#6a75f7] via-[#00f2fe] to-[#6a75f7] rounded-lg opacity-50 group-hover:opacity-100 transition-all duration-500"></div>
                    <Button
                      variant="outline"
                      className="relative px-6 py-2 text-sm font-medium bg-[#1C1C27] border-0 text-white hover:bg-[#2A2A3A] transition-all duration-300 rounded-lg overflow-hidden group-hover:scale-[1.02]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#6a75f7]/20 via-[#00f2fe]/20 to-[#6a75f7]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10 flex items-center gap-2">
                        <a href="/register">Register Now</a>
                        <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </>
                )
              ) : (
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    className="relative px-6 py-2 text-sm font-medium bg-[#1C1C27] border-0 text-white hover:bg-[#2A2A3A] transition-all duration-300 rounded-lg overflow-hidden"
                    onClick={() => navigate("/login")}
                  >
                    <span className="relative z-10">Profile</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="relative px-6 py-2 text-sm font-medium bg-[#1C1C27] border-0 text-white hover:bg-[#2A2A3A] transition-all duration-300 rounded-lg overflow-hidden"
                    onClick={handleLogout}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Logout
                      <LogOut className="h-4 w-4" />
                    </span>
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg focus:outline-none hover:bg-white/5 transition-colors relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#6a75f7] to-[#00f2fe] rounded-lg opacity-0 group-hover:opacity-20 transition-opacity"></div>
              {isMenuOpen ? (
                <X className="h-6 w-6 text-[#00f2fe]" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 right-0 w-64 h-[calc(100vh-4rem)] bg-[#0f0c29]/95 backdrop-blur-lg border-l border-purple-500/20 transform transition-transform duration-300 ease-in-out">
          <div className="flex flex-col h-full">
            {/* Register Now Button at the top */}
            {!isRegisterPage && (
              <div className="p-4 border-b border-white/10">
                <button
                  className="relative w-full overflow-hidden group"
                  onClick={handleRegisterClick}
                >
                  {/* Gradient Border */}
                  <div className="absolute inset-0 w-full h-full transition-all duration-300">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#6a75f7] via-[#00f2fe] to-[#6a75f7] opacity-0 group-hover:opacity-100"></div>
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-[#6a75f7] via-[#00f2fe] to-[#6a75f7] transition-all duration-500"></div>
                  </div>
                  {/* Button Shape with Gradient Background */}
                  <div className="relative bg-black/80 backdrop-blur-sm transition-all duration-300 group-hover:bg-black/40">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#6a75f7]/20 via-[#00f2fe]/20 to-[#6a75f7]/20"></div>
                    <div className="px-6 py-3 relative z-10">
                      <span className="relative z-10 flex items-center justify-center gap-2 text-white group-hover:text-[#00f2fe] transition-colors">
                        Register Now
                        <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </button>
              </div>
            )}

            {/* Navigation Links */}
            <div className="px-4 pt-4 pb-2 space-y-1 overflow-y-auto flex-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    handleNavItemClick(item, e);
                  }}
                  className={cn(
                    "flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 group",
                    location.pathname === item.href
                      ? "text-[#00f2fe] bg-white/5"
                      : "text-white hover:text-[#00f2fe] hover:bg-white/5"
                  )}
                >
                  <span className="mr-3 text-lg group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <span className="flex-1">{item.name}</span>
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                </a>
              ))}
            </div>

            {/* Register Now Button */}
            <div className="p-4 border-t border-purple-500/20">
              <button className="relative w-full overflow-hidden group">
                <div className="absolute inset-0 w-full h-full transition-all duration-300">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#6a75f7] via-[#00f2fe] to-[#6a75f7] opacity-0 group-hover:opacity-100"></div>
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-[#6a75f7] via-[#00f2fe] to-[#6a75f7] transition-all duration-500"></div>
                </div>
                <div className="relative bg-[#0f0c29]/80 backdrop-blur-sm transition-all duration-300 group-hover:bg-[#0f0c29]/40">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#6a75f7]/20 via-[#00f2fe]/20 to-[#6a75f7]/20"></div>
                  <div className="px-6 py-3 relative z-10">
                    <span className="relative z-10 flex items-center justify-center gap-2 text-white group-hover:text-[#00f2fe] transition-colors">
                      <a href="/register">Register Now</a>
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
