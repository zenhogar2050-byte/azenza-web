import React from 'react';
import { useCountry, COUNTRIES } from '../CountryContext';
import { X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function CountryModal() {
  const { country, setCountryId, isModalOpen, setIsModalOpen } = useCountry();

  if (!isModalOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-stone-100 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-stone-100 bg-stone-50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-black text-stone-900 font-display">Selecciona tu País</h3>
                <p className="text-xs text-stone-500">Personalizamos tu experiencia y moneda local</p>
              </div>
            </div>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="p-2 text-stone-400 hover:text-stone-600 rounded-full hover:bg-stone-200/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Countries Grid */}
          <div className="p-6 max-h-[60vh] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
            {COUNTRIES.map((c) => {
              const isSelected = c.id === country.id;
              return (
                <button
                  key={c.id}
                  onClick={() => {
                    setCountryId(c.id);
                    setIsModalOpen(false);
                  }}
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all text-left ${
                    isSelected 
                      ? 'border-emerald-600 bg-emerald-50/50 shadow-md ring-2 ring-emerald-600/20' 
                      : 'border-stone-200 hover:border-stone-300 hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <img 
                      src={c.flagImg} 
                      alt={c.name} 
                      className="w-8 h-6 object-cover rounded shadow-sm border border-stone-200" 
                    />
                    <div>
                      <h4 className="text-sm font-bold text-stone-900 font-display">{c.name}</h4>
                      <span className="text-xs font-semibold text-stone-500">{c.currency} ({c.symbol})</span>
                    </div>
                  </div>
                  {isSelected && (
                    <span className="w-3 h-3 rounded-full bg-emerald-600 shadow-sm" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-stone-50 border-t border-stone-100 text-center">
            <p className="text-xs text-stone-500">
              Estás viendo precios adaptados para <strong className="text-stone-800">{country.name} ({country.currency})</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
