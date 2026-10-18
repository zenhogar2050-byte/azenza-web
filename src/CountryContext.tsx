import React, { createContext, useContext, useState, useEffect } from "react";
import { useCart } from "./CartContext";
import { COLOMBIA_DATA, ECUADOR_DATA, CHILE_DATA, COSTA_RICA_DATA, GUATEMALA_DATA, HONDURAS_DATA, PERU_DATA, DOMINICAN_REPUBLIC_DATA, VENEZUELA_DATA, CountryCode } from "./constants";

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
  { id: "CO", name: "Colombia", flag: "🇨🇴", flagImg: "https://flagcdn.com/w40/co.png", currency: "COP", symbol: "$", phoneCode: "+57" },
  { id: "PE", name: "Perú", flag: "🇵🇪", flagImg: "https://flagcdn.com/w40/pe.png", currency: "PEN", symbol: "S/", phoneCode: "+51" },
  { id: "CL", name: "Chile", flag: "🇨🇱", flagImg: "https://flagcdn.com/w40/cl.png", currency: "CLP", symbol: "$", phoneCode: "+56" },
  { id: "CR", name: "Costa Rica", flag: "🇨🇷", flagImg: "https://flagcdn.com/w40/cr.png", currency: "CRC", symbol: "₡", phoneCode: "+506" },
  { id: "EC", name: "Ecuador", flag: "🇪🇨", flagImg: "https://flagcdn.com/w40/ec.png", currency: "USD", symbol: "$", phoneCode: "+593" },
  { id: "GT", name: "Guatemala", flag: "🇬🇹", flagImg: "https://flagcdn.com/w40/gt.png", currency: "GTQ", symbol: "Q", phoneCode: "+502" },
  { id: "HN", name: "Honduras", flag: "🇭🇳", flagImg: "https://flagcdn.com/w40/hn.png", currency: "HNL", symbol: "L", phoneCode: "+504" },
  { id: "DO", name: "República Dominicana", flag: "🇩🇴", flagImg: "https://flagcdn.com/w40/do.png", currency: "DOP", symbol: "RD$", phoneCode: "+1" },
  { id: "VE", name: "Venezuela", flag: "🇻🇪", flagImg: "https://flagcdn.com/w40/ve.png", currency: "VES", symbol: "Bs.", phoneCode: "+58" },
];

const COUNTRY_CITIES_MAP: Record<string, string[]> = {
  CO: Object.values(COLOMBIA_DATA).flat(),
  EC: Object.values(ECUADOR_DATA).flat(),
  CL: Object.values(CHILE_DATA).flat(),
  CR: Object.values(COSTA_RICA_DATA).flat(),
  GT: Object.values(GUATEMALA_DATA).flat(),
  HN: Object.values(HONDURAS_DATA).flat(),
  PE: Object.values(PERU_DATA).flat(),
  DO: Object.values(DOMINICAN_REPUBLIC_DATA).flat(),
  VE: Object.values(VENEZUELA_DATA).flat(),
};

interface CountryContextType {
  country: CountryInfo;
  setCountryId: (id: string) => void;
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  cities: string[];
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export function CountryProvider({ children }: { children: React.ReactNode }) {
  const cartContext = useCart();
  const currentCountryCode = cartContext?.country || "CO";

  const [countryId, setCountryIdState] = useState<string>(() => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const queryCountry = urlParams.get("country");
      if (queryCountry && COUNTRIES.some(c => c.id === queryCountry.toUpperCase())) {
        const found = queryCountry.toUpperCase();
        localStorage.setItem("azenza_country", found);
        return found;
      }
      return localStorage.getItem("azenza_country") || currentCountryCode;
    }
    return currentCountryCode;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sync with CartContext if it changes externally (e.g. from CountrySelector)
  useEffect(() => {
    if (cartContext?.country && cartContext.country !== countryId) {
      setCountryIdState(cartContext.country);
    }
  }, [cartContext?.country]);

  const country = COUNTRIES.find(c => c.id === countryId) || COUNTRIES[0];
  const cities = COUNTRY_CITIES_MAP[country.id] || COUNTRY_CITIES_MAP["CO"] || [];

  const setCountryId = (id: string) => {
    setCountryIdState(id);
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("azenza_country", id);
    }
    if (cartContext?.setCountry) {
      cartContext.setCountry(id as CountryCode);
    }
  };

  return (
    <CountryContext.Provider value={{ country, setCountryId, isModalOpen, setIsModalOpen, cities }}>
      {children}
    </CountryContext.Provider>
  );
}

export function useCountry() {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error("useCountry must be used within a CountryProvider");
  }
  return context;
}
