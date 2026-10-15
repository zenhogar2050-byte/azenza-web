import React, { useState, useEffect } from "react";
import { Truck, ShieldCheck } from "lucide-react";

export default function TopBanner() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const paymentText = "Pago Contraentrega (Pagas al recibir)";

  return (
    <div className="bg-stone-900 overflow-hidden h-9 sm:h-10 flex items-center border-b border-white/5 relative z-[60]">
      <div 
        className="flex whitespace-nowrap animate-marquee items-center"
        style={{ 
          "--marquee-duration": isMobile ? "22s" : "32s",
          "--marquee-end": "-50%"
        } as React.CSSProperties}
      >
        {[...Array(2)].map((_, setIdx) => (
          <div key={setIdx} className="flex items-center gap-10 sm:gap-14 mr-10 sm:mr-14 flex-shrink-0">
            {[...Array(4)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-black text-white tracking-[0.2em] uppercase">
                  <Truck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  Envío Gratis
                </div>
                <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-black text-white tracking-[0.2em] uppercase">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  {paymentText}
                </div>
                <div className="text-[10px] sm:text-[11px] font-black text-emerald-400 tracking-[0.2em] uppercase">
                  Garantía de Satisfacción 100%
                </div>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
