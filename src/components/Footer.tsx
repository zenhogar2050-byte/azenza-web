import React from 'react';
import { ShieldCheck, Truck, Clock, Heart, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-md">
                <span className="font-serif text-xl font-bold italic">A</span>
              </div>
              <span className="text-2xl font-serif font-black text-white tracking-tight">AZENZA</span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Ecosistema comercial de productos naturales y bienestar integral. Fórmulas científicas y botánicas para tu vitalidad en Colombia.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Compra 100% segura con garantía</span>
            </div>
          </div>

          {/* Categorías */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Líneas de Bienestar
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">Suplementos & Minerales Quelados</li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">Colágeno Marino & Antienvejecimiento</li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">Adaptógenos & Control de Estrés</li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">Infusiones & Botánica Colombiana</li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">Aceites Esenciales Puros</li>
            </ul>
          </div>

          {/* Métodos de Pago y Cobertura */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Medios de Pago en Colombia
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <p>• Pago Contra Entrega (Pagas al recibir)</p>
              <p>• Transferencia Nequi y Daviplata</p>
              <p>• PSE y Tarjetas Débito / Crédito</p>
              <p>• Wompi Bancolombia</p>
              <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-mono text-emerald-300">
                <span className="bg-stone-800 px-2 py-1 rounded">Bancolombia</span>
                <span className="bg-stone-800 px-2 py-1 rounded">Nequi</span>
                <span className="bg-stone-800 px-2 py-1 rounded">Daviplata</span>
                <span className="bg-stone-800 px-2 py-1 rounded">PSE</span>
                <span className="bg-stone-800 px-2 py-1 rounded">Wompi</span>
              </div>
            </div>
          </div>

          {/* Contacto & Despachos */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Atención & Despachos
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <p>Envíos diarios vía Servientrega, Coordinadora e Inter Rapidísimo.</p>
              <p className="text-white font-medium">WhatsApp: +57 315 789 4521</p>
              <p>Email: soporte@azenza.com.co</p>
              <p className="text-emerald-400 text-[11px] font-semibold mt-2">
                Atención: Lunes a Sábado 8:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} AZENZA Colombia. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-stone-300 cursor-pointer">Términos del Servicio</span>
            <span>•</span>
            <span className="hover:text-stone-300 cursor-pointer">Política de Privacidad</span>
            <span>•</span>
            <span className="hover:text-stone-300 cursor-pointer">Habeas Data</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
