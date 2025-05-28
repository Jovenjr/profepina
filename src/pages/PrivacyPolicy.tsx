import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-montserrat font-bold text-[#1e3a8a] mb-8">
            Política de Privacidad
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-4">1. Información que Recopilamos</h2>
              <p className="text-gray-700 leading-relaxed">
                En El Profe Piña recopilamos información personal que usted nos proporciona voluntariamente, 
                incluyendo nombre, dirección de correo electrónico, número de teléfono y cualquier otra 
                información que decida compartir con nosotros al contactarnos o solicitar nuestros servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-4">2. Uso de la Información</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Utilizamos su información personal para:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Responder a sus consultas y solicitudes de servicios</li>
                <li>Procesar membresías y transacciones</li>
                <li>Enviar información sobre nuestros servicios de autos y subastas</li>
                <li>Mejorar nuestros servicios y experiencia del cliente</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-4">3. Protección de Datos</h2>
              <p className="text-gray-700 leading-relaxed">
                Implementamos medidas de seguridad apropiadas para proteger su información personal 
                contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, 
                ningún método de transmisión por Internet es 100% seguro.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-4">4. Compartir Información</h2>
              <p className="text-gray-700 leading-relaxed">
                No vendemos, intercambiamos o transferimos su información personal a terceros sin su 
                consentimiento, excepto cuando sea necesario para proporcionar nuestros servicios o 
                cuando lo requiera la ley.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-4">5. Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                Nuestro sitio web puede utilizar cookies para mejorar su experiencia de navegación. 
                Puede configurar su navegador para rechazar cookies, aunque esto puede afectar 
                algunas funcionalidades del sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-4">6. Sus Derechos</h2>
              <p className="text-gray-700 leading-relaxed">
                Usted tiene derecho a acceder, actualizar o eliminar su información personal. 
                Para ejercer estos derechos, contáctenos a través de los medios proporcionados 
                en nuestro sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-4">7. Contacto</h2>
              <p className="text-gray-700 leading-relaxed">
                Si tiene preguntas sobre esta Política de Privacidad, puede contactarnos:
              </p>
              <div className="mt-3 text-gray-700">
                <p><strong>El Profe Piña</strong></p>
                <p>16976 Martín Ave Unit 4, Fontana, California 92335</p>
                <p>Teléfono: +1(424)438-9331</p>
                <p>WhatsApp: <a href="https://wa.me/14244389331" className="text-[#1e3a8a] hover:underline">+1(424)438-9331</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-4">8. Cambios a esta Política</h2>
              <p className="text-gray-700 leading-relaxed">
                Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. 
                Los cambios serán efectivos inmediatamente después de su publicación en este sitio web.
              </p>
            </section>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Última actualización: {new Date().toLocaleDateString('es-ES')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 