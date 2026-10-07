import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number, country?: string) {
  const activeCountry = country || (typeof window !== 'undefined' && typeof localStorage !== 'undefined' ? (localStorage.getItem('azenza_country') || localStorage.getItem('zenhogar_country')) : null) || 'CO';
  
  if (activeCountry === 'EC' || activeCountry === 'USD') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  }

  const rounded = Math.round(Number(value) || 0);

  switch (activeCountry) {
    case 'CL':
      return `$${rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
    case 'CR':
      return `₡${rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
    case 'GT':
      return `Q${rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    case 'HN':
      return `L${rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    case 'PE':
      return `S/ ${rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    case 'DO':
      return `RD$${rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
    case 'VE':
      return `Bs. ${rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
    case 'CO':
    default:
      return `$${rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
  }
}

export function formatPriceForAPI(value: number) {
  return Math.round(value);
}

export function cleanPromoName(name: string) {
  return name.replace(/^(Combo|Oferta)\s*N°\s*\d+\s*/i, '');
}
