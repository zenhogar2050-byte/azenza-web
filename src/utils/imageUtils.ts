import { Product } from '../constants';
import { CountryCode } from './CartContext';

export const getProductImage = (p: Product, countryId: CountryCode): string => {
  if (p.id === 'coliplus' && countryId === 'PE') {
    return '/assets/products/coliplus-pe.webp';
  }
  return p.image;
};

export const getProductSupportImages = (p: Product, countryId: CountryCode): string[] => {
  if (p.id === 'coliplus' && countryId === 'PE') {
    return [
      '/assets/products/coliplus-pe-apoyo-1.webp',
      '/assets/products/coliplus-pe-apoyo-2.webp',
      '/assets/products/coliplus-pe-apoyo-3.webp',
      '/assets/products/coliplus-pe-apoyo-4.webp',
      '/assets/products/coliplus-pe-apoyo-5.webp',
      '/assets/products/coliplus-pe-apoyo-6.webp'
    ];
  }
  return p.supportImages || [];
};
