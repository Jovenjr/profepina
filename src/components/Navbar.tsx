import React, { useState, useEffect } from "react";
import { BUSINESS_INFO } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import logoProfePina from "@/assets/profe-pina-logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { href: "#inicio", text: "Inicio", icon: "fas fa-home" },
    { href: "#servicios", text: "Servicios", icon: "fas fa-concierge-bell" },
    { href: "#membresia", text: "Membresía", icon: "fas fa-crown" },
    { href: "#tiktok", text: "TikTok", icon: "fab fa-tiktok" },
    { href: "#contacto", text: "Contacto", icon: "fas fa-envelope" }
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-xl border-b border-white/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-14 h-14 md:w-20 md:h-20 mr-2 md:mr-3 relative">
              <img
                src={logoProfePina}
                alt="El Profe Piña Logo"
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-lg md:text-xl font-montserrat font-black transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>
                {BUSINESS_INFO.name}
              </h1>
              <p className={`text-xs md:text-sm transition-colors duration-300 ${
                scrolled ? 'text-amber-600' : 'text-amber-400'
              }`}>
                {BUSINESS_INFO.slogan}
              </p>
            </div>
            {/* Mobile logo text */}
            <div className="block sm:hidden">
              <h1 className={`text-base font-montserrat font-black transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>
                El Profe Piña
              </h1>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className={`group relative px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center ${
                  scrolled 
                    ? 'text-gray-700 hover:text-amber-600' 
                    : 'text-white/90 hover:text-amber-400'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <i className={`${item.icon} mr-2 text-sm`}></i>
                {item.text}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
            ))}
            
            {/* WhatsApp Button */}
            <motion.a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-whatsapp mr-2 text-lg group-hover:scale-110 transition-transform duration-300"></i>
              WhatsApp
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
              scrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.i 
              className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            ></motion.i>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-2xl border-t border-white/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="container mx-auto px-4 py-6">
              <div className="grid grid-cols-1 gap-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="group flex items-center px-4 py-4 rounded-2xl text-gray-700 hover:text-amber-600 font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50"
                    onClick={closeMobileMenu}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <i className={`${item.icon} text-white`}></i>
                    </div>
                    <span className="text-lg">{item.text}</span>
                    <i className="fas fa-arrow-right ml-auto text-amber-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300"></i>
                  </motion.a>
                ))}
                
                {/* Mobile WhatsApp Button */}
                <motion.a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                  onClick={closeMobileMenu}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <i className="fab fa-whatsapp mr-3 text-xl group-hover:scale-110 transition-transform duration-300"></i>
                  Contactar por WhatsApp
                  <i className="fas fa-external-link-alt ml-3 text-sm"></i>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
