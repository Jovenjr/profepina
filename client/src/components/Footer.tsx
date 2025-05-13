import { BUSINESS_INFO } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-[#1f2937] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-montserrat font-bold mb-4">{BUSINESS_INFO.name}</h3>
            <p className="text-gray-400 mb-4">
              Tu experto en autos y subastas, ofreciendo los mejores servicios de compra, venta y envíos.
            </p>
            <p className="text-[#f59e0b] font-medium">{BUSINESS_INFO.slogan}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-montserrat font-bold mb-4">Servicios</h4>
            <ul className="space-y-2">
              {BUSINESS_INFO.services.slice(0, 5).map(service => (
                <li key={service.id}>
                  <a href="#servicios" className="text-gray-400 hover:text-white transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-montserrat font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="text-gray-400 hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#galeria" className="text-gray-400 hover:text-white transition-colors">Galería</a></li>
              <li><a href="#tiktok" className="text-gray-400 hover:text-white transition-colors">TikTok</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-montserrat font-bold mb-4">Contáctanos</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-[#f59e0b]"></i>
                <span className="text-gray-400">{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-[#f59e0b]"></i>
                <a 
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center">
                <i className="fab fa-whatsapp mr-3 text-[#f59e0b]"></i>
                <a 
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center">
                <i className="fab fa-tiktok mr-3 text-[#f59e0b]"></i>
                <a 
                  href={BUSINESS_INFO.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {BUSINESS_INFO.tiktokProfile}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
