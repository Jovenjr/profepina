import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-montserrat font-bold text-[#1e3a8a] mb-8">
            Términos y Condiciones
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-4">1. Aceptación de Términos</h2>
              <p className="text-gray-700 leading-relaxed">
                Al acceder y utilizar los servicios de El Profe Piña, usted acepta estar sujeto a estos 
                Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, 
                no debe utilizar nuestros servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-4">2. Descripción de Servicios</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                El Profe Piña ofrece los siguientes servicios:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Consultoría en compra y venta de automóviles usados</li>
                <li>Servicios de intermediación en subastas de vehículos</li>
                <li>Membresías para acceso a inventario y beneficios exclusivos</li>
                <li>Servicios de transporte de vehículos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-4">3. Membresías</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Las membresías de "La Casa de la Subasta" incluyen:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Acceso anticipado al inventario de vehículos</li>
                <li>Reportes CarFax gratuitos</li>
                <li>Acceso a grupo privado de apoyo</li>
                <li>Subastas y ofertas exclusivas para miembros</li>
                <li>Atención prioritaria</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                Las membresías tienen una duración de 12 meses y son no reembolsables.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-4">4. Limitación de Responsabilidad</h2>
              <p className="text-gray-700 leading-relaxed">
                El Profe Piña actúa como intermediario y consultor. No somos responsables por:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mt-3">
                <li>La condición final de los vehículos adquiridos</li>
                <li>Cambios en precios de subastas</li>
                <li>Disponibilidad de vehículos específicos</li>
                <li>Resultados de inversión o pérdidas financieras</li>
                <li>Decisiones de compra del cliente</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-4">5. Política de No Reembolso</h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-700 font-medium">
                  Todas las ventas son finales. No hay cambios ni devoluciones. 
                  Todo se vende "AS IS" (tal como está) sin garantías.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-4">6. Uso Aceptable</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Al utilizar nuestros servicios, usted se compromete a:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Proporcionar información veraz y actualizada</li>
                <li>No utilizar nuestros servicios para actividades ilegales</li>
                <li>Respetar los derechos de propiedad intelectual</li>
                <li>No interferir con el funcionamiento de nuestros servicios</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-4">7. Propiedad Intelectual</h2>
              <p className="text-gray-700 leading-relaxed">
                Todo el contenido de nuestro sitio web, incluyendo textos, imágenes, logos, 
                videos y materiales, está protegido por derechos de autor y es propiedad 
                de El Profe Piña o sus licenciantes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-4">8. Modificaciones</h2>
              <p className="text-gray-700 leading-relaxed">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. 
                Los cambios serán efectivos inmediatamente después de su publicación en 
                nuestro sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-4">9. Ley Aplicable</h2>
              <p className="text-gray-700 leading-relaxed">
                Estos términos se rigen por las leyes del estado de California, Estados Unidos. 
                Cualquier disputa será resuelta en los tribunales competentes de California.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-4">10. Contacto</h2>
              <p className="text-gray-700 leading-relaxed">
                Para preguntas sobre estos Términos y Condiciones:
              </p>
              <div className="mt-3 text-gray-700">
                <p><strong>El Profe Piña</strong></p>
                <p>16976 Martín Ave Unit 4, Fontana, California 92335</p>
                <p>Teléfono: +1(424)438-9331</p>
                <p>WhatsApp: <a href="https://wa.me/14244389331" className="text-[#1e3a8a] hover:underline">+1(424)438-9331</a></p>
              </div>
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

export default TermsConditions; 