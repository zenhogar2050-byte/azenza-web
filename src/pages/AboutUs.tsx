import React from "react";
import { ShieldCheck, Heart, Truck, Award, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LegalFooter from "../components/LegalFooter";
import SEOManager from "../components/SEOManager";
import { useCountry } from "../CountryContext";

export default function AboutUs() {
  const navigate = useNavigate();
  const { country } = useCountry();

  return (
    <div className="bg-white min-h-screen py-20">
      <SEOManager 
        title={`Quiénes Somos | AZENZA en ${country.name}`}
        description={`Conoce la historia de AZENZA, nuestra misión y compromiso con la salud natural en ${country.name} y Latinoamérica.`}
        canonicalUrl="/quienes-somos"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-stone-500 hover:text-emerald-600 transition-all font-bold p-3 -ml-3 rounded-xl hover:bg-stone-50 mb-8 group"
        >
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          <span className="text-lg">Regresar</span>
        </button>

        <h1 className="text-4xl font-display font-black text-stone-900 mb-12">Quiénes Somos</h1>

        {/* Content Section */}
        <div className="mb-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-display font-bold text-stone-900 mb-6">Nuestra Historia</h2>
            <div className="space-y-4 text-stone-600 leading-relaxed text-lg mb-12">
              <p>
                AZENZA nació de la convicción de que la naturaleza ofrece las mejores soluciones para nuestra salud y bienestar. Lo que comenzó como un proyecto familiar enfocado en productos botánicos se ha convertido en una marca de confianza para miles de clientes que buscan una alternativa natural, segura y efectiva.
              </p>
              <p>
                Nos especializamos en la selección y distribución de suplementos naturales de la más alta calidad, asegurándonos de que cada fórmula que llega a tu hogar cumpla con los estándares regulatorios más exigentes, registros sanitarios oficiales y trazabilidad garantizada.
              </p>
              <p className="font-bold text-stone-900">
                Gestionamos nuestros despachos y logística a nivel nacional en {country.name} bajo la modalidad exclusiva y confiable de Pago Contraentrega.
              </p>
            </div>

            {/* Official Business Identity Box for Merchant Center Compliance */}
            <div className="bg-stone-50 p-8 rounded-[2rem] border border-stone-200 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-stone-900">Información Corporativa y de Contacto</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-stone-700 text-sm">
                <div>
                  <p className="font-bold text-stone-900 mb-1">Dirección Administrativa (Casa Matriz):</p>
                  <p>Calle 3a #23 - 40<br />Puerto Colombia, Atlántico, Colombia</p>
                </div>
                <div>
                  <p className="font-bold text-stone-900 mb-1">Canales Oficiales:</p>
                  <p>WhatsApp: +57 302 410 2568<br />Email: ventas@azenza.com.co</p>
                </div>
                <div>
                  <p className="font-bold text-stone-900 mb-1">Método de Pago:</p>
                  <p>Pago Contraentrega en efectivo ({country.currency})</p>
                </div>
                <div>
                  <p className="font-bold text-stone-900 mb-1">Cobertura:</p>
                  <p>Envíos a todo el territorio nacional en {country.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            {
              icon: Heart,
              title: "Pasión por la Salud",
              desc: "Creemos firmemente en el bienestar integral como base de una vida plena."
            },
            {
              icon: ShieldCheck,
              title: "Calidad Garantizada",
              desc: "Todos nuestros productos cuentan con registros sanitarios oficiales y certificaciones de pureza."
            },
            {
              icon: Truck,
              title: "Compromiso de Entrega",
              desc: `Llegamos a cada rincón de ${country.name} con rapidez, discreción y seguridad.`
            },
            {
              icon: Award,
              title: "Confianza",
              desc: "Miles de clientes satisfechos en la región respaldan nuestra trayectoria y servicio."
            }
          ].map((value, idx) => (
            <div key={idx} className="bg-stone-50 p-8 rounded-[2rem] border border-stone-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <value.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">{value.title}</h3>
              <p className="text-stone-600 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>

        {/* Mission/Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="bg-stone-50 p-12 rounded-[3rem] shadow-sm border border-stone-100">
            <h3 className="text-2xl font-display font-bold text-stone-900 mb-6">Nuestra Misión</h3>
            <p className="text-stone-600 text-lg leading-relaxed">
              Proveer soluciones naturales de salud que eleven la calidad de vida y bienestar de cada familia, fomentando hábitos de vida saludables y ofreciendo formulaciones botánicas de máxima eficacia y seguridad.
            </p>
          </div>
          <div className="bg-stone-50 p-12 rounded-[3rem] shadow-sm border border-stone-100">
            <h3 className="text-2xl font-display font-bold text-stone-900 mb-6">Nuestra Visión</h3>
            <p className="text-stone-600 text-lg leading-relaxed">
              Consolidarnos como la marca referente en bienestar natural en {country.name} y Latinoamérica, reconocida por la excelencia, la integridad en cada despacho y un compromiso constante con la salud de nuestros clientes.
            </p>
          </div>
        </div>

        <LegalFooter />
      </div>
    </div>
  );
}
