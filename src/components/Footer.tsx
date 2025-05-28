import React from "react";
import { motion } from "framer-motion";
import { BUSINESS_INFO } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>
      
      {/* Animated background shapes - Mobile optimized */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-48 h-48 md:w-64 md:h-64 md:top-20 md:left-20 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 md:w-80 md:h-80 md:bottom-20 md:right-20 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
            {/* Company Info */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-montserrat font-black text-white mb-3 md:mb-4 flex items-center justify-center md:justify-start">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mr-2 md:mr-3">
                    <i className="fas fa-car text-white text-sm md:text-base"></i>
                  </div>
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-gray-400 mb-4 md:mb-6 leading-relaxed text-sm md:text-base px-2 md:px-0">
                  Tu experto en autos y subastas, ofreciendo los mejores servicios de compra, venta y oportunidades exclusivas.
                </p>
                <div className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-600 px-3 py-1.5 md:px-4 md:py-2 rounded-full">
                  <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                  <p className="text-white font-semibold text-xs md:text-sm">{BUSINESS_INFO.slogan}</p>
                </div>
              </div>
            </motion.div>
            
            {/* Services */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base md:text-lg font-montserrat font-bold text-white mb-4 md:mb-6 flex items-center justify-center md:justify-start">
                <i className="fas fa-cogs text-amber-500 mr-2 md:mr-3 text-sm md:text-base"></i>
                Servicios
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {BUSINESS_INFO.services.slice(0, 5).map((service, index) => (
                  <motion.li 
                    key={service.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a 
                      href="#servicios" 
                      className="group flex items-center justify-center md:justify-start text-gray-400 hover:text-amber-500 transition-all duration-300 text-sm md:text-base"
                    >
                      <div className="w-2 h-2 bg-amber-500/50 rounded-full mr-2 md:mr-3 group-hover:bg-amber-500 transition-colors duration-300"></div>
                      {service.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* Quick Links */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base md:text-lg font-montserrat font-bold text-white mb-4 md:mb-6 flex items-center justify-center md:justify-start">
                <i className="fas fa-link text-amber-500 mr-2 md:mr-3 text-sm md:text-base"></i>
                Enlaces Rápidos
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {[
                  { href: "#inicio", text: "Inicio", icon: "fas fa-home" },
                  { href: "#servicios", text: "Servicios", icon: "fas fa-concierge-bell" },
                  { href: "#membresia", text: "Membresía", icon: "fas fa-crown" },
                  { href: "#tiktok", text: "TikTok", icon: "fab fa-tiktok" },
                  { href: "#contacto", text: "Contacto", icon: "fas fa-envelope" }
                ].map((link, index) => (
                  <motion.li 
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a 
                      href={link.href} 
                      className="group flex items-center justify-center md:justify-start text-gray-400 hover:text-amber-500 transition-all duration-300 text-sm md:text-base"
                    >
                      <i className={`${link.icon} text-amber-500/50 mr-2 md:mr-3 group-hover:text-amber-500 transition-colors duration-300 text-xs md:text-sm`}></i>
                      {link.text}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* Contact */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base md:text-lg font-montserrat font-bold text-white mb-4 md:mb-6 flex items-center justify-center md:justify-start">
                <i className="fas fa-phone text-amber-500 mr-2 md:mr-3 text-sm md:text-base"></i>
                Contáctanos
              </h4>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start justify-center md:justify-start group">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-amber-500/20 rounded-xl flex items-center justify-center mr-2 md:mr-3 flex-shrink-0 group-hover:bg-amber-500/30 transition-colors duration-300">
                    <i className="fas fa-map-marker-alt text-amber-500 text-xs md:text-sm"></i>
                  </div>
                  <span className="text-gray-400 leading-relaxed text-sm md:text-base text-left">{BUSINESS_INFO.address}</span>
                </li>
                <li className="flex items-center justify-center md:justify-start group">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-amber-500/20 rounded-xl flex items-center justify-center mr-2 md:mr-3 flex-shrink-0 group-hover:bg-amber-500/30 transition-colors duration-300">
                    <i className="fas fa-phone-alt text-amber-500 text-xs md:text-sm"></i>
                  </div>
                  <a 
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm md:text-base"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </li>
                <li className="flex items-center justify-center md:justify-start group">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-green-500/20 rounded-xl flex items-center justify-center mr-2 md:mr-3 flex-shrink-0 group-hover:bg-green-500/30 transition-colors duration-300">
                    <i className="fab fa-whatsapp text-green-500 text-xs md:text-sm"></i>
                  </div>
                  <a 
                    href={BUSINESS_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-500 transition-colors duration-300 text-sm md:text-base"
                  >
                    WhatsApp
                  </a>
                </li>
                <li className="flex items-center justify-center md:justify-start group">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-pink-500/20 rounded-xl flex items-center justify-center mr-2 md:mr-3 flex-shrink-0 group-hover:bg-pink-500/30 transition-colors duration-300">
                    <i className="fab fa-tiktok text-pink-500 text-xs md:text-sm"></i>
                  </div>
                  <a 
                    href={BUSINESS_INFO.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-pink-500 transition-colors duration-300 text-sm md:text-base"
                  >
                    {BUSINESS_INFO.tiktokProfile}
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
          
          {/* Bottom Section - Mobile optimized */}
          <motion.div
            className="pt-6 md:pt-8 border-t border-gray-800/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-between">
              <div className="text-center md:text-left">
                <p className="text-gray-500 flex items-center text-xs md:text-sm">
                  <i className="fas fa-copyright mr-1 md:mr-2"></i>
                  {new Date().getFullYear()} {BUSINESS_INFO.name}. Todos los derechos reservados.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-6">
                <a 
                  href="/politica-privacidad" 
                  className="text-gray-400 hover:text-amber-500 transition-colors text-xs md:text-sm flex items-center group"
                >
                  <i className="fas fa-shield-alt mr-1 md:mr-2 group-hover:text-amber-500 transition-colors text-xs"></i>
                  Política de Privacidad
                </a>
                <a 
                  href="/politica-reembolsos" 
                  className="text-gray-400 hover:text-amber-500 transition-colors text-xs md:text-sm flex items-center group"
                >
                  <i className="fas fa-undo mr-1 md:mr-2 group-hover:text-amber-500 transition-colors text-xs"></i>
                  Política de Reembolsos
                </a>
                <a 
                  href="/terminos-condiciones" 
                  className="text-gray-400 hover:text-amber-500 transition-colors text-xs md:text-sm flex items-center group"
                >
                  <i className="fas fa-file-contract mr-1 md:mr-2 group-hover:text-amber-500 transition-colors text-xs"></i>
                  Términos y Condiciones
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
