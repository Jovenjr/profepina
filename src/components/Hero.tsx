import React from "react";
import { motion } from "framer-motion";
import { BUSINESS_INFO } from "@/lib/constants";

const Hero = () => {
  return (
    <section id="inicio" className="pt-24 md:pt-36 relative overflow-hidden min-h-screen flex items-center">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-violet-900"></div>
      
      {/* Animated background shapes - optimized for mobile */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-5 w-48 h-48 md:w-72 md:h-72 md:top-20 md:left-10 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-5 w-64 h-64 md:w-96 md:h-96 md:bottom-20 md:right-10 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="max-w-2xl text-center lg:text-left">
            <motion.div
              className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-2 md:px-6 md:py-2 rounded-full mb-6 md:mb-8 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="w-2 h-2 bg-white rounded-full mr-2 md:mr-3 animate-pulse"></span>
              <p className="text-white font-semibold text-xs md:text-sm uppercase tracking-wide">{BUSINESS_INFO.slogan}</p>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-montserrat font-black text-white mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Tu Experto en{" "}
              <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                Autos
              </span>{" "}
              y{" "}
              <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                Subastas
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 md:mb-10 leading-relaxed px-2 md:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Conectamos personas con las mejores oportunidades en autos usados, 
              subastas de vehículos y servicios especializados. Tu éxito es nuestro compromiso.
            </motion.p>

            <motion.div
              className="flex flex-col gap-3 md:gap-4 mb-8 md:mb-12 px-2 md:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="#membresia"
                className="group bg-gradient-to-r from-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold px-6 py-4 md:px-8 md:py-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center text-sm md:text-base"
              >
                <i className="fas fa-crown mr-2 md:mr-3 text-base md:text-lg"></i> 
                Obtener Membresía
                <i className="fas fa-arrow-right ml-2 md:ml-3 group-hover:translate-x-1 transition-transform"></i>
              </a>
              <a
                href="#servicios"
                className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold px-6 py-4 md:px-8 md:py-4 rounded-2xl transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center text-sm md:text-base"
              >
                <i className="fas fa-car-side mr-2 md:mr-3"></i> 
                Ver Servicios
              </a>
            </motion.div>

            {/* Stats - Mobile optimized */}
            <motion.div
              className="grid grid-cols-3 gap-3 md:gap-6 max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-3 md:p-4 border border-white/10">
                <div className="text-2xl md:text-3xl font-bold text-amber-500 mb-1">500+</div>
                <div className="text-xs md:text-sm text-gray-400">Autos Vendidos</div>
              </div>
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-3 md:p-4 border border-white/10">
                <div className="text-2xl md:text-3xl font-bold text-amber-500 mb-1">98%</div>
                <div className="text-xs md:text-sm text-gray-400">Satisfacción</div>
              </div>
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-3 md:p-4 border border-white/10">
                <div className="text-2xl md:text-3xl font-bold text-amber-500 mb-1">24/7</div>
                <div className="text-xs md:text-sm text-gray-400">Soporte</div>
              </div>
            </motion.div>
          </div>

          {/* Visual Element - Mobile card */}
          <motion.div
            className="relative block lg:hidden mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 shadow-2xl mx-4">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mr-3">
                  <i className="fas fa-crown text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Membresía Premium</h3>
                  <p className="text-gray-400 text-sm">Acceso exclusivo</p>
                </div>
              </div>
              
              <div className="text-center py-4 border-t border-white/20">
                <div className="text-3xl font-bold text-white mb-1">$200 USD</div>
                <div className="text-gray-400 text-sm">12 meses de acceso</div>
              </div>
            </div>
          </motion.div>

          {/* Visual Element - Desktop */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                    <i className="fas fa-car text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Membresía Premium</h3>
                    <p className="text-gray-400 text-sm">Acceso exclusivo</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <i className="fas fa-check-circle text-amber-500 mr-3"></i>
                    <span>Inventario anticipado</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <i className="fas fa-check-circle text-amber-500 mr-3"></i>
                    <span>CarFax gratuito</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <i className="fas fa-check-circle text-amber-500 mr-3"></i>
                    <span>Subastas exclusivas</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="text-3xl font-bold text-white mb-2">$200 USD</div>
                  <div className="text-gray-400 text-sm">12 meses de acceso</div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl animate-bounce">
                <i className="fas fa-crown text-white text-2xl"></i>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-blue-400/30">
                <i className="fas fa-star text-blue-400 text-xl"></i>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modern wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#f8fafc"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero; 