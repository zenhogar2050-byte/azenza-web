import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#141414] text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start pb-12 border-b border-stone-800/80">
          
          {/* Col 1: DIOS BENDICE ESTE NEGOCIO */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-white tracking-tight uppercase font-display">
              DIOS BENDICE ESTE NEGOCIO
            </h3>
            
            <Link to="/" className="flex items-center gap-3 pt-1 group inline-flex">
              <div className="w-10 h-10 flex-shrink-0">
                <img 
                  src="/assets/logo/logo-icon.webp" 
                  alt="Azenza Logo" 
                  className="w-full h-full object-contain"
                  loading="lazy"
                  width="40"
                  height="40"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black text-white tracking-tight uppercase">AZENZA</span>
                <span className="text-[9px] font-bold text-emerald-400 tracking-[0.2em] uppercase mt-0.5">SALUD VITAL</span>
              </div>
            </Link>

            <p className="text-sm text-stone-300 leading-relaxed max-w-xs">
              Dedicados a llevar el bienestar natural a cada hogar colombiano. Calidad, confianza y salud en cada producto.
            </p>
          </div>

          {/* Col 2: NOSOTROS */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-5 font-display">
              NOSOTROS
            </h3>
            <ul className="space-y-3 text-sm text-stone-300">
              <li>
                <Link to="/quienes-somos" className="hover:text-emerald-400 transition-colors">Quiénes Somos</Link>
              </li>
              <li>
                <Link to="/politica-privacidad" className="hover:text-emerald-400 transition-colors">Política de Privacidad</Link>
              </li>
              <li>
                <Link to="/politica-reembolso" className="hover:text-emerald-400 transition-colors">Política de Reembolso</Link>
              </li>
              <li>
                <Link to="/terminos-servicio" className="text-emerald-400 font-medium hover:underline transition-colors">Términos del Servicio</Link>
              </li>
              <li>
                <Link to="/condiciones-entrega" className="hover:text-emerald-400 transition-colors">Condiciones de Entrega</Link>
              </li>
              <li>
                <Link to="/devoluciones-garantia" className="hover:text-emerald-400 transition-colors">Devoluciones y Garantía</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: CONTACTO */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-5 font-display">
              CONTACTO
            </h3>
            <div className="space-y-4 text-sm">
              
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#1f1f1f] border border-stone-800 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-0.5">DIRECCIÓN ADMINISTRATIVA</p>
                  <p className="text-white font-medium text-xs">Calle 3a #23 - 40</p>
                  <p className="text-stone-300 text-xs">Puerto Colombia, Atlántico, Colombia</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#1f1f1f] border border-stone-800 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-0.5">WHATSAPP</p>
                  <p className="text-white font-bold text-sm">+57 302 410 2568</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#1f1f1f] border border-stone-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-0.5">CORREOS</p>
                  <a href="mailto:ventas@azenza.com.co" className="text-white font-medium block hover:text-emerald-400 transition-colors text-xs">ventas@azenza.com.co</a>
                  <a href="mailto:info@azenza.com.co" className="text-white font-medium block hover:text-emerald-400 transition-colors text-xs">info@azenza.com.co</a>
                  <a href="mailto:soporte@azenza.com.co" className="text-white font-medium block hover:text-emerald-400 transition-colors text-xs">soporte@azenza.com.co</a>
                </div>
              </div>

            </div>
          </div>

          {/* Col 4: INVIMA CARD */}
          <div className="flex flex-col items-center lg:items-end">
            <div className="bg-[#1f1f1f] p-5 rounded-3xl border border-stone-800 shadow-lg flex items-center justify-center w-full max-w-[240px]">
              <img 
                src="/assets/logo/logo-invima.webp" 
                alt="Certificación INVIMA" 
                className="w-full h-auto object-contain max-h-28"
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-stone-400 text-xs italic text-center lg:text-right">
              Información legal y certificaciones
            </p>
          </div>

        </div>

        {/* Middle Bar: Copyright, Payment Pill, Nav Links */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-300">
          <p className="font-medium">
            © 2026 Azenza. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-2">
            <span className="text-stone-400 font-bold uppercase text-[11px] tracking-wider">MÉTODOS DE PAGO:</span>
            <div className="inline-flex items-center gap-2 bg-[#1f1f1f] px-3 py-1.5 rounded-full border border-stone-800 text-[11px] font-bold text-white uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              PAGO CONTRAENTREGA (EXCLUSIVO)
            </div>
          </div>

          <div className="flex items-center gap-6 font-bold">
            <Link to="/" className="hover:text-emerald-400 transition-colors">Inicio</Link>
            <Link to="/checkout" className="hover:text-emerald-400 transition-colors">Carrito</Link>
          </div>
        </div>

        {/* Bottom Section: Envíos con pago contra entrega en Colombia */}
        <div className="pt-6 border-t border-stone-800/80 space-y-6">
          <div className="text-center max-w-4xl mx-auto space-y-2">
            <h4 className="text-xs font-black tracking-widest text-white uppercase font-display">
              ENVÍOS CON PAGO CONTRA ENTREGA EN COLOMBIA:
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Despachos diarios desde Barranquilla a: Bogotá, Medellín, Cali, Barranquilla, Cartagena, Cúcuta, Bucaramanga, Pereira, Ibagué, Santa Marta, Valledupar, Villavicencio, Montería, Pasto, Neiva, Popayán, Sincelejo, Armenia, Riohacha, Tunja, Quibdó, Florencia y cualquier rincón de Colombia.
            </p>
          </div>

          {/* Legal / Medical Disclaimer */}
          <div className="max-w-5xl mx-auto">
            <p className="text-[11px] text-stone-500 leading-relaxed text-center italic">
              Aviso de Responsabilidad (Suplementos Dietarios): Los productos distribuidos por AZENZA cuentan con Registro Sanitario INVIMA y están destinados a complementar la dieta. No son medicamentos y no deben utilizarse como sustitutos de una alimentación equilibrada o tratamientos médicos prescritos. La información en este sitio no constituye consejo médico. Resultados varían por individuo. Manténgase fuera del alcance de los niños. Si está embarazada, lactando o bajo tratamiento especial, consulte a su especialista antes de consumir.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
