import React, { useState, useEffect } from 'react';
import { useCountry, COUNTRIES, CountryInfo } from '../CountryContext';
import { Globe, X, Check, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function GeoCountryNotice() {
  const { country, setCountryId } = useCountry();
  const [detectedCountry, setDetectedCountry] = useState<CountryInfo | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user already dismissed or accepted geo prompt
    if (typeof window === 'undefined') return;
    const dismissed = localStorage.getItem('azenza_geo_prompt_dismissed');
    if (dismissed === 'true') return;

    // Fetch IP location
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data && data.country_code) {
          const match = COUNTRIES.find(c => c.id === data.country_code);
          if (match && match.id !== country.id) {
            setDetectedCountry(match);
            setIsVisible(true);
          }
        }
      })
      .catch(() => {
        // Fallback or silent fail on network error / adblockers
      });
  }, [country.id]);

  const handleAccept = () => {
    if (detectedCountry) {
      setCountryId(detectedCountry.id);
    }
    setIsVisible(false);
    localStorage.setItem('azenza_geo_prompt_dismissed', 'true');
  };

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('azenza_geo_prompt_dismissed', 'true');
  };

  if (!isVisible || !detectedCountry) return null;

  return (
    <AnimatePresence>
      <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-md z-50">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="bg-stone-900 text-white rounded-2xl shadow-2xl border border-stone-800 p-5 overflow-hidden relative"
        >
          {/* Background glow */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white font-display">
                  ¿Estás en {detectedCountry.name}? {detectedCountry.flag}
                </h4>
                <p className="text-xs text-stone-400">
                  Detectamos tu ubicación. Cambia tu región para ver moneda ({detectedCountry.currency}) y envíos locales.
                </p>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="text-stone-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-2 mt-4 pt-3 border-t border-stone-800">
            <button
              onClick={handleAccept}
              className="flex-1 py-2.5 px-4 bg-[#009b63] hover:bg-emerald-600 text-white text-xs font-bold rounded-xl transition-all shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-2"
            >
              <span>Cambiar a {detectedCountry.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleDismiss}
              className="py-2.5 px-3 bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-semibold rounded-xl transition-colors"
            >
              Mantener actual
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
