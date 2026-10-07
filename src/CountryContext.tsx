import React, { createContext, useContext, useState } from 'react';

export interface CountryInfo {
  id: string;
  name: string;
  flag: string;
  flagImg: string;
  currency: string;
  symbol: string;
  phoneCode: string;
}

export const COUNTRIES: CountryInfo[] = [
  { id: 'CO', name: 'Colombia', flag: '🇨🇴', flagImg: 'https://flagcdn.com/w40/co.png', currency: 'COP', symbol: '$', phoneCode: '+57' },
  { id: 'PE', name: 'Perú', flag: '🇵🇪', flagImg: 'https://flagcdn.com/w40/pe.png', currency: 'PEN', symbol: 'S/', phoneCode: '+51' },
  { id: 'CL', name: 'Chile', flag: '🇨🇱', flagImg: 'https://flagcdn.com/w40/cl.png', currency: 'CLP', symbol: '$', phoneCode: '+56' },
  { id: 'CR', name: 'Costa Rica', flag: '🇨🇷', flagImg: 'https://flagcdn.com/w40/cr.png', currency: 'CRC', symbol: '₡', phoneCode: '+506' },
  { id: 'EC', name: 'Ecuador', flag: '🇪🇨', flagImg: 'https://flagcdn.com/w40/ec.png', currency: 'USD', symbol: '$', phoneCode: '+593' },
  { id: 'GT', name: 'Guatemala', flag: '🇬🇹', flagImg: 'https://flagcdn.com/w40/gt.png', currency: 'GTQ', symbol: 'Q', phoneCode: '+502' },
  { id: 'HN', name: 'Honduras', flag: '🇭🇳', flagImg: 'https://flagcdn.com/w40/hn.png', currency: 'HNL', symbol: 'L', phoneCode: '+504' },
  { id: 'DO', name: 'República Dominicana', flag: '🇩🇴', flagImg: 'https://flagcdn.com/w40/do.png', currency: 'DOP', symbol: 'RD$', phoneCode: '+1' },
  { id: 'VE', name: 'Venezuela', flag: '🇻🇪', flagImg: 'https://flagcdn.com/w40/ve.png', currency: 'VES', symbol: 'Bs.', phoneCode: '+58' },
];

interface CountryContextType {
  country: CountryInfo;
  setCountryId: (id: string) => void;
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export function CountryProvider({ children }: { children: React.ReactNode }) {
  const [countryId, setCountryIdState] = useState<string>(() => {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      return localStorage.getItem('azenza_country') || 'CO';
    }
    return 'CO';
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const country = COUNTRIES.find(c => c.id === countryId) || COUNTRIES[0];

  const setCountryId = (id: string) => {
    setCountryIdState(id);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('azenza_country', id);
    }
  };

  return (
    <CountryContext.Provider value={{ country, setCountryId, isModalOpen, setIsModalOpen }}>
      {children}
    </CountryContext.Provider>
  );
}

export function useCountry() {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error('useCountry must be used within a CountryProvider');
  }
  return context;
}
