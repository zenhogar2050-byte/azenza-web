import React, { useState, useRef, useEffect } from 'react';
import { useCart } from '../CartContext';
import { COUNTRY_CONFIGS, CountryCode } from '../constants';
import { ChevronDown, Check } from 'lucide-react';
import { cn } from '../utils';

interface CountrySelectorProps {
  value?: CountryCode;
  onChange?: (country: CountryCode) => void;
  label?: string;
  className?: string;
}

export default function CountrySelector({ value, onChange, label, className }: CountrySelectorProps = {}) {
  const cartContext = useCart();
  const country = value || cartContext?.country || 'CO';
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentConfig = COUNTRY_CONFIGS[country] || COUNTRY_CONFIGS['CO'];

  const setCountry = (c: CountryCode) => {
    if (onChange) {
      onChange(c);
    } else if (cartContext?.setCountry) {
      cartContext.setCountry(c);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const countries: { code: CountryCode; name: string }[] = [
    { code: 'CO', name: 'Colombia' },
    { code: 'CL', name: 'Chile' },
    { code: 'CR', name: 'Costa Rica' },
    { code: 'EC', name: 'Ecuador' },
    { code: 'GT', name: 'Guatemala' },
    { code: 'HN', name: 'Honduras' },
    { code: 'PE', name: 'Perú' },
    { code: 'DO', name: 'República Dominicana' },
    { code: 'VE', name: 'Venezuela' },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-1 sm:gap-2 px-1.5 sm:px-3 py-1 bg-white hover:bg-stone-100/60 border border-transparent rounded-xl text-xs sm:text-sm font-bold text-stone-800 transition-all shadow-none",
          className
        )}
        aria-label="Seleccionar país"
      >
        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-sm overflow-hidden flex items-center justify-center bg-transparent flex-shrink-0 aspect-square">
          <img 
            src={`https://flagcdn.com/w80/${country.toLowerCase()}.png`} 
            alt={currentConfig.name}
            className="w-full h-full object-contain scale-110"
            loading="lazy"
          />
        </div>
        <span className="sm:hidden font-bold">{country}</span>
        <span className="hidden sm:inline font-bold">{currentConfig.name}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-stone-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white border border-stone-200 rounded-2xl shadow-2xl py-2 z-50 overflow-hidden max-h-80 overflow-y-auto">
          <div className="px-3 py-1.5 text-[10px] font-black text-stone-400 uppercase tracking-widest border-b border-stone-100 mb-1">
            {label || "Selecciona país"}
          </div>
          {countries.map((c) => {
            const isSelected = country === c.code;
            return (
              <button
                key={c.code}
                onClick={() => {
                  setCountry(c.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 text-left text-xs sm:text-sm font-semibold transition-colors hover:bg-stone-50 ${
                  isSelected ? 'bg-emerald-50 text-emerald-900 font-bold' : 'text-stone-700'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-sm overflow-hidden flex items-center justify-center bg-transparent flex-shrink-0 aspect-square">
                    <img 
                      src={`https://flagcdn.com/w80/${c.code.toLowerCase()}.png`} 
                      alt={c.name}
                      className="w-full h-full object-contain scale-110"
                      loading="lazy"
                    />
                  </div>
                  <span>{c.name}</span>
                </div>
                {isSelected && <Check className="w-4 h-4 text-emerald-600" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
