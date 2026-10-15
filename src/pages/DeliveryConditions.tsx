import React from "react";
import { Truck, Clock, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LegalFooter from "../components/LegalFooter";
import SEOManager from "../components/SEOManager";
import { useCountry } from "../CountryContext";

export default function DeliveryConditions() {
  const navigate = useNavigate();
  const { country, cities } = useCountry();

  const mainCities = cities && cities.length >= 4 
    ? cities.slice(0, 4).join(", ") 
    : (country.id === "EC" ? "Quito, Guayaquil, Cuenca, Santo Domingo" : "Ciudades Principales");

  return (
    <div className="bg-white min-h-screen py-20">
      <SEOManager 
        title={`Condiciones de Entrega en ${country.name}`}
        description={`Información sobre tiempos de entrega, cobertura y método de pago contra entrega en ${country.name}.`}
        canonicalUrl="/condiciones-entrega"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-stone-500 hover:text-emerald-600 transition-all font-bold p-3 -ml-3 rounded-xl hover:bg-stone-50 mb-8 group"
        >
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          <span className="text-lg">Regresar</span>
        </button>

        <h1 className="text-4xl font-display font-black text-stone-900 mb-8">
          Condiciones de Entrega ({country.name})
        </h1>
        
        <div className="grid sm:grid-cols-2 gap-8 mb-12">
          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
            <Truck className="w-8 h-8 text-emerald-600 mb-4" />
            <h3 className="font-bold text-lg mb-2">Envío Gratis</h3>
            <p className="text-stone-600 text-sm">Ofrecemos envío gratuito a nivel nacional en {country.name} en todos nuestros pedidos.</p>
          </div>
          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
            <Clock className="w-8 h-8 text-emerald-600 mb-4" />
            <h3 className="font-bold text-lg mb-2">Tiempos de Entrega</h3>
            <p className="text-stone-600 text-sm">Ciudades principales: 2-4 días hábiles. Resto del país: 3-7 días hábiles.</p>
          </div>
        </div>

        <div className="prose prose-stone lg:prose-lg max-w-none text-stone-600 leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">1. Cobertura Nacional y Valor del Envío</h2>
            <p>
              AZENZA ofrece cobertura en el territorio nacional de {country.name}. Lo mejor de todo es que <strong>el envío es 100% gratuito</strong> para todos nuestros clientes, sin importar el monto de la compra o el destino (sujeto a cobertura de mensajería aliada). Trabajamos con las mejores redes logísticas y transportadoras del país para garantizar que tu paquete llegue seguro y en perfecto estado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">2. Tiempos de Entrega</h2>
            <p>
              Nuestros tiempos de entrega estimados en {country.name} son:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Ciudades Principales ({mainCities}):</strong> 2 a 3 días hábiles.</li>
              <li><strong>Ciudades Intermedias y Cantones / Provincias:</strong> 3 a 5 días hábiles.</li>
              <li><strong>Zonas Especiales o Trayectos Extendidos:</strong> 5 a 8 días hábiles.</li>
            </ul>
            <p className="text-sm italic">Nota: Los tiempos pueden variar por condiciones climáticas, orden público o novedades en la transportadora.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">3. Modelo de Pago Contraentrega</h2>
            <p>
              Para su tranquilidad en {country.name}, operamos bajo el modelo de <strong>pago contraentrega</strong> en efectivo ({country.currency}). Usted solo entrega el dinero cuando el mensajero o transportador llega a su domicilio con el paquete y usted lo recibe conforme. Asegúrese de tener el valor exacto listo para agilizar la entrega.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">4. Seguimiento y Novedades</h2>
            <p>
              Una vez su pedido es despachado, usted podrá consultar el estado del envío a través de nuestra línea oficial de atención. Si hay alguna novedad (dirección errada o nadie en casa), realizaremos hasta 3 intentos de entrega antes de que el producto sea retornado a bodega.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">5. Recepción del Producto</h2>
            <p>
              Al recibir su pedido, verifique que el empaque esté sellado y no presente signos de manipulación. Si nota alguna irregularidad, déjelo registrado con el transportador y contáctenos de inmediato para gestionar la novedad.
            </p>
          </section>
        </div>

        <LegalFooter />
      </div>
    </div>
  );
}
