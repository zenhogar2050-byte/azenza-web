import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LegalFooter from "../components/LegalFooter";
import SEOManager from "../components/SEOManager";
import { useCountry } from "../CountryContext";

export default function PrivacyPolicy() {
  const navigate = useNavigate();
  const { country } = useCountry();

  return (
    <div className="bg-white min-h-screen py-20">
      <SEOManager 
        title={`Política de Privacidad | ${country.name}`}
        description={`Política de tratamiento de datos personales de AZENZA para usuarios en ${country.name}. Tu privacidad es nuestra prioridad.`}
        canonicalUrl="/politica-privacidad"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-stone-500 hover:text-emerald-600 transition-all font-bold p-3 -ml-3 rounded-xl hover:bg-stone-50 mb-8 group"
        >
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          <span className="text-lg">Regresar</span>
        </button>

        <h1 className="text-4xl font-display font-black text-stone-900 mb-8">Política de Tratamiento de Datos Personales</h1>
        
        <div className="prose prose-stone lg:prose-lg max-w-none text-stone-600 leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">1. Recolección de Información</h2>
            <p>
              En AZENZA, recolectamos información personal indispensable para la prestación de nuestros servicios de comercio electrónico en {country.name}. Los datos recolectados incluyen: nombre completo, número de teléfono (WhatsApp), dirección de envío, ciudad/cantón, provincia/departamento y correo electrónico (opcional). Esta información es recolectada directamente de usted al solicitar su pedido con pago contraentrega en nuestro sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">2. Finalidad del Tratamiento de Datos</h2>
            <p>
              El tratamiento de sus datos personales tiene como finalidades principales:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Gestión de Pedidos:</strong> Procesar, validar y despachar sus solicitudes de compra de forma efectiva.</li>
              <li><strong>Logística y Entrega:</strong> Compartir la información necesaria con nuestros operadores logísticos y transportadoras aliadas para la entrega puerta a puerta en {country.name}.</li>
              <li><strong>Comunicación y Confirmación:</strong> Contactarle vía WhatsApp o llamada para confirmar dirección y datos de despacho.</li>
              <li><strong>Atención al Cliente:</strong> Brindar soporte post-venta, resolución de dudas y gestión de garantías.</li>
              <li><strong>Seguridad:</strong> Prevenir fraudes y asegurar la integridad de las entregas y recaudos.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">3. Derechos de los Usuarios</h2>
            <p>
              De conformidad con las normativas de protección de datos personales vigentes aplicables en la jurisdicción de nuestra casa matriz y en los países de atención internacional, usted tiene derecho a conocer, actualizar, rectificar y solicitar la supresión de sus datos personales en cualquier momento escribiéndonos a ventas@azenza.com.co.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">4. Almacenamiento y Seguridad</h2>
            <p>
              Sus datos se resguardan en servidores seguros con protocolos de encriptación estándar de la industria. AZENZA no comercializa, vende ni alquila sus datos a terceros con propósitos no autorizados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">5. Cookies y Tecnologías de Medición</h2>
            <p>
              Utilizamos cookies para optimizar su experiencia de compra, recordar sus preferencias de navegación y país seleccionado, y analizar el rendimiento de nuestras campañas publicitarias de manera agregada y segura.
            </p>
          </section>

          <p className="text-sm text-stone-400 pt-8 italic leading-relaxed">
            Esta política de privacidad aplica para las operaciones y usuarios de AZENZA en {country.name} y la región, bajo los principios de transparencia, seguridad y lealtad con el consumidor.
          </p>
        </div>

        <LegalFooter />
      </div>
    </div>
  );
}
