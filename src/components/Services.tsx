import React from "react";
import { motion } from "framer-motion";
import { BUSINESS_INFO } from "@/lib/constants";

const ServiceCard = ({ service, index }: { service: typeof BUSINESS_INFO.services[0], index: number }) => {
  return (
    <motion.div
      className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100/50 mx-2 md:mx-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -10 }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative h-48 md:h-56 overflow-hidden rounded-t-3xl">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Floating icon */}
        <div className="absolute top-3 right-3 md:top-4 md:right-4 w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <i className={`fas ${service.icon} text-amber-600 text-sm md:text-lg`}></i>
        </div>
      </div>
      
      <div className="relative p-4 md:p-6 lg:p-8">
        <div className="flex items-center mb-4 md:mb-6">
          <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mr-3 md:mr-4 shadow-lg group-hover:shadow-xl transition-shadow duration-500">
            <i className={`fas ${service.icon} text-white text-sm md:text-lg lg:text-xl`}></i>
          </div>
          <div className="flex-1">
            <h3 className="font-montserrat font-bold text-lg md:text-xl text-gray-900 group-hover:text-amber-600 transition-colors duration-300 leading-tight">
              {service.title}
            </h3>
            <div className="w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-600 group-hover:w-full transition-all duration-500"></div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">{service.description}</p>
        
        <a 
          href="#contacto" 
          className="group/btn inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-700 text-white font-semibold px-4 py-2.5 md:px-6 md:py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base"
        >
          Más información 
          <i className="fas fa-arrow-right ml-2 text-xs md:text-sm group-hover/btn:translate-x-1 transition-transform duration-300"></i>
        </a>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="servicios" className="py-12 md:py-20 lg:py-32 relative overflow-hidden">
      {/* Modern background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50"></div>
      
      {/* Animated background elements - Mobile optimized */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-48 h-48 md:w-64 md:h-64 md:top-20 md:left-20 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 md:w-80 md:h-80 md:bottom-20 md:right-20 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-2 md:px-6 md:py-2 rounded-full mb-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="w-2 h-2 bg-white rounded-full mr-2 md:mr-3 animate-pulse"></span>
            <p className="text-white font-semibold text-xs md:text-sm uppercase tracking-wide">Servicios Premium</p>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-black text-gray-900 mb-4 md:mb-6 leading-tight px-2">
            Nuestros{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              Servicios
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Ofrecemos una amplia gama de servicios especializados en vehículos y subastas, 
            diseñados para brindarte las mejores oportunidades del mercado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {BUSINESS_INFO.services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Call to action - Mobile optimized */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl mx-2 md:mx-0">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
              ¿Listo para comenzar?
            </h3>
            <p className="text-white/90 mb-6 md:mb-8 text-base md:text-lg px-2">
              Únete a nuestra membresía premium y accede a beneficios exclusivos
            </p>
            <a
              href="#membresia"
              className="inline-flex items-center bg-white text-amber-600 font-bold px-6 py-3 md:px-8 md:py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base"
            >
              <i className="fas fa-crown mr-2 md:mr-3"></i>
              Ver Membresía Premium
              <i className="fas fa-arrow-right ml-2 md:ml-3"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
