import { motion } from "framer-motion";
import { GALLERY_IMAGES } from "@/lib/constants";

const Gallery = () => {
  return (
    <section id="galeria" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#1f2937] mb-4">Nuestra Galería</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conoce algunos de nuestros vehículos y mercancías disponibles.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {GALLERY_IMAGES.slice(0, 3).map((image, index) => (
            <motion.div 
              key={index}
              className={image.className}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                src={`${image.src}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600`} 
                alt={image.alt} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {GALLERY_IMAGES.slice(3, 5).map((image, index) => (
            <motion.div 
              key={index + 3}
              className={image.className}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
            >
              <img 
                src={`${image.src}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600`} 
                alt={image.alt} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
