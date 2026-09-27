import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number, country?: string) {
  const activeCountry = country || (typeof window !== 'undefined' ? (localStorage.getItem('azenza_country') || localStorage.getItem('zenhogar_country')) : null) || 'CO';
  
  if (activeCountry === 'EC' || activeCountry === 'USD') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  }

  const rounded = Math.round(Number(value) || 0);
  const formattedNumber = rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `$${formattedNumber}`;
}

export function formatPriceForAPI(value: number) {
  return Math.round(value);
}

export function cleanPromoName(name: string) {
  return name.replace(/^(Combo|Oferta)\s*N°\s*\d+\s*/i, '');
}
