import { useState, useEffect } from "react";
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
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      {/* Fondo azul marino en todo el header */}
      <div className="w-full h-32 md:h-36 bg-[#1e3a8a] relative">
        {/* Franja blanca central para navegación */}
        <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-12 bg-white">
          <div className="container mx-auto px-4 h-full">
            <div className="flex justify-between items-center h-full">
              {/* Enlaces a la izquierda */}
              <nav className="hidden md:flex space-x-8 items-center">
                <a href="#inicio" className="font-medium text-gray-700 hover:text-[#f59e0b] transition-colors">Inicio</a>
                <a href="#servicios" className="font-medium text-gray-700 hover:text-[#f59e0b] transition-colors">Servicios</a>
              </nav>
              
              {/* Espacio central para el logo */}
              <div className="w-24 md:w-32"></div>
              
              {/* Enlaces a la derecha */}
              <nav className="hidden md:flex space-x-8 items-center">
                <a href="#tiktok" className="font-medium text-gray-700 hover:text-[#f59e0b] transition-colors">TikTok</a>
                <a href="#contacto" className="font-medium text-gray-700 hover:text-[#f59e0b] transition-colors">Contacto</a>
                <a 
                  href={BUSINESS_INFO.whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center transition-colors"
                >
                  <i className="fab fa-whatsapp mr-2"></i> WhatsApp
                </a>
              </nav>
              
              {/* Botón de menú móvil */}
              <button 
                className="md:hidden text-gray-700 focus:outline-none" 
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
              </button>
            </div>
          </div>
        </div>
        
        {/* Logo centrado sobre la franja blanca */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
          <div className="w-24 md:w-32 h-auto">
            <img 
              src={logoProfePina} 
              alt="El Profe Piña Logo" 
              className="w-full h-auto" 
            />
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-white shadow-lg absolute w-full"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
              <a 
                href="#inicio" 
                className="font-medium text-gray-700 hover:text-[#f59e0b] transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Inicio
              </a>
              <a 
                href="#servicios" 
                className="font-medium text-gray-700 hover:text-[#f59e0b] transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Servicios
              </a>
              <a 
                href="#tiktok" 
                className="font-medium text-gray-700 hover:text-[#f59e0b] transition-colors py-2"
                onClick={closeMobileMenu}
              >
                TikTok
              </a>
              <a 
                href="#contacto" 
                className="font-medium text-gray-700 hover:text-[#f59e0b] transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Contacto
              </a>
              <a 
                href={BUSINESS_INFO.whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center justify-center transition-colors"
                onClick={closeMobileMenu}
              >
                <i className="fab fa-whatsapp mr-2"></i> WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
