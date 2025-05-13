import { motion } from "framer-motion";
import { BUSINESS_INFO } from "@/lib/constants";

const ServiceCard = ({ service, index }: { service: typeof BUSINESS_INFO.services[0], index: number }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-[#2563eb] rounded-full flex items-center justify-center mr-3">
            <i className={`fas ${service.icon} text-white`}></i>
          </div>
          <h3 className="font-montserrat font-bold text-lg text-[#1f2937]">{service.title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <a href="#contacto" className="text-[#1e3a8a] font-medium hover:text-[#2563eb] transition-colors inline-flex items-center">
          Más información <i className="fas fa-arrow-right ml-2 text-sm"></i>
        </a>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#1f2937] mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios relacionados con vehículos, subastas y envíos tanto nacionales como internacionales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BUSINESS_INFO.services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
