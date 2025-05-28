import React, { useState } from "react";
import { motion } from "framer-motion";
import { MEMBERSHIP_INFO } from "@/lib/constants";

const Membership = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "Estoy interesado en comprar la Membresía La Casa de la Subasta por $200 USD"
  });

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Extraer el ID del video de YouTube de la URL
  const getYouTubeVideoId = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeVideoId(MEMBERSHIP_INFO.videoUrl);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hola! Estoy interesado en comprar la Membresía La Casa de la Subasta por $200 USD.

Mis datos:
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}

Mensaje: ${formData.message}`;

    const whatsappUrl = `https://wa.me/14244389331?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="membresia" className="py-12 md:py-20 lg:py-32 relative overflow-hidden">
      {/* Modern background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-violet-900"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-48 h-48 md:w-80 md:h-80 md:top-20 md:left-20 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 md:w-96 md:h-96 md:bottom-20 md:right-20 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-72 md:h-72 bg-purple-400/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-2 md:px-6 md:py-2 rounded-full mb-6 md:mb-8 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="w-2 h-2 bg-white rounded-full mr-2 md:mr-3 animate-pulse"></span>
            <p className="text-white font-semibold text-xs md:text-sm uppercase tracking-wide">Membresía Exclusiva</p>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-black text-white mb-4 md:mb-6 leading-tight px-2">
            {MEMBERSHIP_INFO.title.split(' ').slice(0, 2).join(' ')}{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              {MEMBERSHIP_INFO.title.split(' ').slice(2).join(' ')}
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Accede a beneficios exclusivos y oportunidades únicas en el mundo de las subastas de autos
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Video y Precio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Precio destacado */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl p-6 md:p-8 mb-6 md:mb-8 shadow-2xl relative overflow-hidden mx-2 md:mx-0">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 md:px-4 md:py-2 rounded-full mb-3 md:mb-4">
                  <i className="fas fa-crown text-white mr-2"></i>
                  <span className="text-white font-bold text-xs md:text-sm uppercase tracking-wide">Producto Disponible</span>
                </div>
                
                <div className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-2">
                  ${MEMBERSHIP_INFO.price}
                </div>
                <div className="text-lg md:text-xl text-white/90 mb-2 md:mb-4">{MEMBERSHIP_INFO.currency}</div>
                <div className="text-white/80 text-sm md:text-base">Duración: {MEMBERSHIP_INFO.duration}</div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <i className="fas fa-star text-white text-lg md:text-xl"></i>
              </div>
            </div>

            {/* Video promocional */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl mb-6 md:mb-8 mx-2 md:mx-0">
              <h4 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center">
                <i className="fas fa-video text-amber-500 mr-2 md:mr-3"></i>
                Video Promocional
              </h4>
              
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden relative group">
                {!isVideoPlaying ? (
                  // Vista previa del video
                  <div className="absolute inset-0 flex items-center justify-center cursor-pointer" onClick={handlePlayVideo}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="text-center relative z-10">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mb-3 md:mb-4 mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <i className="fab fa-youtube text-white text-xl md:text-2xl"></i>
                      </div>
                      <p className="text-white font-semibold mb-1 md:mb-2 text-sm md:text-base">Ver Membresía en Acción</p>
                      <p className="text-gray-300 text-xs md:text-sm">Haz clic para reproducir</p>
                    </div>
                  </div>
                ) : (
                  // Reproductor embebido
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                    title="Video Promocional - Membresía La Casa de la Subasta"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>

            {/* Beneficios */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl mx-2 md:mx-0">
              <h4 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center">
                <i className="fas fa-star text-amber-500 mr-2 md:mr-3"></i>
                Beneficios Incluidos
              </h4>
              
              <div className="space-y-3 md:space-y-4">
                {MEMBERSHIP_INFO.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start bg-white/5 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-white/10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0 mt-0.5">
                      <i className="fas fa-check text-white text-xs md:text-sm"></i>
                    </div>
                    <span className="text-gray-300 text-sm md:text-base leading-relaxed">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl sticky top-24 mx-2 md:mx-0">
              <div className="text-center mb-6 md:mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4">¡Únete Ahora!</h3>
                <p className="text-gray-300 text-sm md:text-base">Completa el formulario y te contactaremos por WhatsApp</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2 text-sm md:text-base">
                    <i className="fas fa-user mr-2"></i>Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2 text-sm md:text-base">
                    <i className="fas fa-envelope mr-2"></i>Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2 text-sm md:text-base">
                    <i className="fas fa-phone mr-2"></i>Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2 text-sm md:text-base">
                    <i className="fas fa-comment mr-2"></i>Mensaje (Opcional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 resize-none text-sm md:text-base"
                    placeholder="Mensaje adicional..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 md:py-5 px-6 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center group text-sm md:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <i className="fab fa-whatsapp mr-2 md:mr-3 text-lg md:text-xl group-hover:scale-110 transition-transform duration-300"></i>
                  Contactar por WhatsApp
                  <i className="fas fa-arrow-right ml-2 md:ml-3 group-hover:translate-x-1 transition-transform duration-300"></i>
                </motion.button>
              </form>

              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/20 text-center">
                <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">
                  <i className="fas fa-shield-alt mr-2"></i>
                  Información 100% segura y confidencial
                </p>
                <div className="flex items-center justify-center space-x-4 md:space-x-6">
                  <div className="flex items-center text-gray-400 text-xs md:text-sm">
                    <i className="fas fa-clock mr-1 md:mr-2"></i>
                    Respuesta inmediata
                  </div>
                  <div className="flex items-center text-gray-400 text-xs md:text-sm">
                    <i className="fas fa-headset mr-1 md:mr-2"></i>
                    Soporte 24/7
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Membership; 