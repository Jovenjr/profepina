import { motion } from "framer-motion";
import { BUSINESS_INFO } from "@/lib/constants";

const Hero = () => {
  return (
    <section id="inicio" className="pt-32 md:pt-36 relative overflow-hidden">
      {/* Hero background image with blue filter */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1560253414-f65d1f5a1a37?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080")',
          filter: 'brightness(0.5) sepia(0.4) saturate(1.5) hue-rotate(190deg)'
        }}
      ></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[#1e3a8a]/60"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <motion.div 
            className="inline-block bg-[#f59e0b] px-4 py-1 rounded-full mb-6 animate-pulse-slow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white font-medium">{BUSINESS_INFO.slogan}</p>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-6 leading-tight text-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Tu Experto en Autos y Subastas
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white mb-8 max-w-xl text-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Conectamos personas con las mejores oportunidades en autos usados, subastas de vehículos y 
            contenedores de mercancía.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="#servicios" 
              className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-medium px-6 py-3 rounded-full transition-colors shadow-lg flex items-center"
            >
              <i className="fas fa-car-side mr-2"></i> Ver Servicios
            </a>
            <a 
              href="#contacto" 
              className="bg-white hover:bg-gray-100 text-[#1e3a8a] font-medium px-6 py-3 rounded-full transition-colors shadow-lg flex items-center"
            >
              <i className="fas fa-phone-alt mr-2"></i> Contáctanos
            </a>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};

export default Hero;
