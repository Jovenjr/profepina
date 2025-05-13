import { useState } from "react";
import { BUSINESS_INFO } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-montserrat font-bold text-primary">
            <span className="mr-2">{BUSINESS_INFO.name}</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#inicio" className="font-medium text-gray-700 hover:text-primary transition-colors">Inicio</a>
          <a href="#servicios" className="font-medium text-gray-700 hover:text-primary transition-colors">Servicios</a>
          <a href="#tiktok" className="font-medium text-gray-700 hover:text-primary transition-colors">TikTok</a>
          <a href="#contacto" className="font-medium text-gray-700 hover:text-primary transition-colors">Contacto</a>
          <a 
            href={BUSINESS_INFO.whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center transition-colors"
          >
            <i className="fab fa-whatsapp mr-2"></i> WhatsApp
          </a>
        </nav>
        
        <button 
          className="md:hidden text-gray-700 focus:outline-none" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>
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
                className="font-medium text-gray-700 hover:text-primary transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Inicio
              </a>
              <a 
                href="#servicios" 
                className="font-medium text-gray-700 hover:text-primary transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Servicios
              </a>

              <a 
                href="#tiktok" 
                className="font-medium text-gray-700 hover:text-primary transition-colors py-2"
                onClick={closeMobileMenu}
              >
                TikTok
              </a>
              <a 
                href="#contacto" 
                className="font-medium text-gray-700 hover:text-primary transition-colors py-2"
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
