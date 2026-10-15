import { useCountry } from "../CountryContext";

export const useDynamicMeta = (
  baseTitle: string,
  baseDescription: string,
  path: string
) => {
  const { country } = useCountry();
  
  return {
    title: `${baseTitle} | AZENZA ${country.name}`,
    description: `${baseDescription} en ${country.name}.`,
    canonicalUrl: path
  };
};
