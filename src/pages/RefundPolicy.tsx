import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LegalFooter from "../components/LegalFooter";
import SEOManager from "../components/SEOManager";
import { useCountry } from "../CountryContext";

const RefundPolicy = () => {
  const navigate = useNavigate();
  const { country } = useCountry();

  return (
    <div className="bg-white min-h-screen py-20">
      <SEOManager 
        title={`Política de Reembolso | ${country.name}`}
        description={`Conoce nuestra política de reembolsos y derecho de retracto de AZENZA en ${country.name}.`}
        canonicalUrl="/politica-reembolso"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-stone-500 hover:text-emerald-600 transition-all font-bold p-3 -ml-3 rounded-xl hover:bg-stone-50 mb-8 group"
        >
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          <span className="text-lg">Regresar</span>
        </button>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-700">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-black text-stone-900">Política de Reembolso</h1>
          </div>

          <div className="prose prose-stone lg:prose-lg max-w-none text-stone-600 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">1. Productos Dañados o Defectuosos</h2>
              <p>
                Si recibes un producto en mal estado, con abolladuras, goteos o cualquier anomalía física al momento de la entrega en {country.name}, debes reportarlo dentro de las primeras <strong>24 horas</strong> tras la recepción. AZENZA gestionará el reemplazo del producto sin costo adicional para ti.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">2. Derecho de Retracto</h2>
              <p>
                De acuerdo con la naturaleza de nuestro modelo de pago contraentrega y entrega presencial en {country.name}, el derecho de retracto se ejerce <strong>antes o en el momento mismo de la entrega</strong>. Al recibir al transportador o mensajero, usted revisa, valida el producto y, tras su conformidad, efectúa el pago en efectivo ({country.currency}). Por motivos de higiene y seguridad de productos naturales de consumo, no aplican retractos posteriores a la aceptación y apertura del paquete.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">3. Reembolsos</h2>
              <p>
                En caso fortuito de requerir un reembolso justificado y verificado por nuestro equipo de atención, la devolución del importe se realizará mediante transferencia bancaria o abono directo acordado con el cliente en su moneda local ({country.currency}) en un plazo máximo de <strong>10 días hábiles</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">4. Excepciones por Salud e Higiene</h2>
              <p>
                Por motivos de bioseguridad, salud e higiene internacional, los productos naturales o cosméticos que hayan sido <strong>abiertos o utilizados</strong> no son aptos para devolución ni reembolso, a menos que se trate de una falla de calidad verificada y reportada en el tiempo estipulado.
              </p>
            </section>
          </div>
        </motion.div>

        <LegalFooter />
      </div>
    </div>
  );
};

export default RefundPolicy;
