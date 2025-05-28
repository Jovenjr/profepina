import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-montserrat font-bold text-[#1e3a8a] mb-8">
            Política de Reembolsos
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-semibold text-red-800 mb-3">
                <i className="fas fa-exclamation-triangle mr-2"></i>
                POLÍTICA DE NO REEMBOLSO
              </h2>
              <p className="text-red-700 font-medium text-lg">
                Todas las ventas son finales. No hay cambios ni devoluciones. 
                Todo se vende "AS IS" (tal como está) sin garantías.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-4">1. Ventas Finales</h2>
              <p className="text-gray-700 leading-relaxed">
                Al realizar cualquier compra con El Profe Piña, incluyendo pero no limitado a 
                membresías, servicios de consultoría, o cualquier otro producto o servicio, 
                usted acepta que todas las ventas son finales y no reembolsables.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-4">2. Condición "AS IS"</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Todos nuestros productos y servicios se venden en condición "AS IS" (tal como están), lo que significa:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>No ofrecemos garantías expresas o implícitas</li>
                <li>No garantizamos resultados específicos</li>
                <li>El cliente acepta el producto/servicio en su condición actual</li>
                <li>No hay garantía de comerciabilidad o idoneidad para un propósito particular</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-4">3. Membresías</h2>
              <p className="text-gray-700 leading-relaxed">
                Las membresías de "La Casa de la Subasta" son no reembolsables una vez procesado el pago. 
                El acceso a los beneficios de la membresía comenzará según los términos establecidos 
                y no se proporcionarán reembolsos por uso parcial o no uso de los beneficios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-4">4. Servicios de Consultoría</h2>
              <p className="text-gray-700 leading-relaxed">
                Los servicios de consultoría en compra/venta de autos, subastas, y otros servicios 
                relacionados son no reembolsables una vez que el servicio ha sido prestado o iniciado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-4">5. Excepciones</h2>
              <p className="text-gray-700 leading-relaxed">
                No existen excepciones a esta política de no reembolso, excepto cuando sea 
                requerido por ley aplicable. En caso de disputas, estas serán resueltas según 
                las leyes del estado de California, Estados Unidos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-4">6. Responsabilidad del Cliente</h2>
              <p className="text-gray-700 leading-relaxed">
                Es responsabilidad del cliente leer y entender completamente esta política 
                antes de realizar cualquier compra. Al proceder con la compra, el cliente 
                confirma que ha leído, entendido y acepta esta política de no reembolso.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-4">7. Disputas de Pago</h2>
              <p className="text-gray-700 leading-relaxed">
                En caso de disputas de pago con tarjetas de crédito o otros métodos de pago, 
                proporcionaremos la documentación necesaria que demuestre que el servicio 
                fue prestado según lo acordado y que esta política fue claramente comunicada.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#1e3a8a] mb-4">8. Contacto</h2>
              <p className="text-gray-700 leading-relaxed">
                Si tiene preguntas sobre esta Política de Reembolsos, puede contactarnos:
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

export default RefundPolicy; 