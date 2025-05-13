import { motion } from "framer-motion";
import { BUSINESS_INFO } from "@/lib/constants";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const ContactSection = () => {
  const [formSuccess, setFormSuccess] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  
  const onSubmit = (data: FormData) => {
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", data);
    
    // Show success message
    setFormSuccess(true);
    
    // Reset form
    reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setFormSuccess(false);
    }, 5000);
  };
  
  return (
    <section id="contacto" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#1f2937] mb-4">Contáctanos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Envíanos un mensaje o visítanos en nuestra ubicación.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="bg-gray-50 rounded-xl shadow-md p-6 md:p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-montserrat font-bold text-[#1f2937] mb-6">Envíanos un Mensaje</h3>
            
            {formSuccess && (
              <Alert className="mb-6 bg-green-50 border-green-200 text-green-800">
                <CheckCircle className="h-4 w-4 mr-2" />
                <AlertDescription>
                  Mensaje enviado con éxito. ¡Gracias por contactarnos!
                </AlertDescription>
              </Alert>
            )}
            
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-5">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre Completo</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition-colors"
                  placeholder="Tu nombre"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">Este campo es requerido</p>
                )}
              </div>
              
              <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Correo Electrónico</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition-colors"
                  placeholder="Tu correo"
                  {...register("email", { 
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i 
                  })}
                />
                {errors.email?.type === 'required' && (
                  <p className="text-red-500 text-sm mt-1">Este campo es requerido</p>
                )}
                {errors.email?.type === 'pattern' && (
                  <p className="text-red-500 text-sm mt-1">Por favor ingresa un correo válido</p>
                )}
              </div>
              
              <div className="mb-5">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Teléfono</label>
                <input 
                  type="tel" 
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition-colors"
                  placeholder="Tu teléfono"
                  {...register("phone")}
                />
              </div>
              
              <div className="mb-5">
                <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Servicio de Interés</label>
                <select 
                  id="service"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition-colors"
                  {...register("service")}
                >
                  <option value="">Selecciona un servicio</option>
                  {BUSINESS_INFO.services.map(service => (
                    <option key={service.id} value={service.id}>{service.title}</option>
                  ))}
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensaje</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition-colors"
                  placeholder="Tu mensaje"
                  {...register("message", { required: true })}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">Este campo es requerido</p>
                )}
              </div>
              
              <button 
                type="submit"
                className="w-full bg-[#1e3a8a] hover:bg-[#2563eb] text-white font-medium py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:ring-opacity-50"
              >
                Enviar Mensaje
              </button>
            </form>
          </motion.div>
          
          {/* Contact Info and Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-50 rounded-xl shadow-md p-6 md:p-8 mb-8">
              <h3 className="text-xl font-montserrat font-bold text-[#1f2937] mb-6">Información de Contacto</h3>
              
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#2563eb] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#1f2937] mb-1">Dirección</h4>
                    <p className="text-gray-600">{BUSINESS_INFO.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#2563eb] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="fas fa-phone-alt text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#1f2937] mb-1">Teléfono</h4>
                    <p className="text-gray-600">
                      <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-[#1e3a8a] transition-colors">
                        {BUSINESS_INFO.phone}
                      </a>
                    </p>
                    <a 
                      href={BUSINESS_INFO.whatsappLink} 
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="inline-flex items-center mt-2 text-green-600 hover:text-green-700 transition-colors"
                    >
                      <i className="fab fa-whatsapp mr-2"></i> Enviar WhatsApp
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#2563eb] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="fas fa-clock text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#1f2937] mb-1">Horario de Atención</h4>
                    <p className="text-gray-600">
                      {BUSINESS_INFO.hours.weekdays}<br />
                      {BUSINESS_INFO.hours.weekends}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-[#2563eb] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="fas fa-user text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#1f2937] mb-1">Contacto Personal</h4>
                    <p className="text-gray-600">{BUSINESS_INFO.contactPerson}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-md h-80">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.6777123594163!2d-117.4369384842817!3d34.0281283806108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c34b3fc4147ba7%3A0xd1abeb8584e03c0a!2s16976%20Martin%20Ave%2C%20Fontana%2C%20CA%2092335%2C%20USA!5e0!3m2!1sen!2smx!4v1643047621924!5m2!1sen!2smx" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Ubicación de El Profe Piña"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
