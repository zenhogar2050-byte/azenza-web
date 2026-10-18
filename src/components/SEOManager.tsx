import React from "react";
import { Helmet } from "react-helmet-async";
import { formatCurrency } from "../utils";
import { generateSchemaGraph } from "../lib/seo-logic";

export interface SEOManagerProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  type?: string;
  productData?: any;
  categoryProducts?: any[];
  faqs?: Array<{ q: string; a: string }>;
  keywords?: string[];
  currency?: string;
  countryCode?: string;
}

const COUNTRY_DOMAINS: Record<string, string> = {
  CO: "azenza.com.co",
  CL: "azenza.cl",
  CR: "azenza.co.cr",
  EC: "azenza.com.ec",
  GT: "azenza.gt",
  HN: "azenza.hn",
  PE: "azenza.pe",
  DO: "azenza.do",
  VE: "azenza.com.ve",
};

const SEOManager: React.FC<SEOManagerProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage = "",
  type = "website",
  productData = null,
  faqs = [],
  keywords = [],
  currency = 'COP',
  countryCode = 'CO',
}) => {
  const cleanPath = canonicalUrl.startsWith("/") ? canonicalUrl : `/${canonicalUrl}`;
  const normalizedPath = cleanPath.replace(/\/+$/, "");
  
  const getFullUrl = (domain: string) => `https://${domain}${normalizedPath === "" ? "/" : normalizedPath}`;
  const fullUrl = getFullUrl(COUNTRY_DOMAINS[countryCode] || COUNTRY_DOMAINS["CO"]);
  const defaultImage = `https://${COUNTRY_DOMAINS["CO"]}/assets/logo/og-image.png`;
  const finalImage = ogImage?.startsWith("http") ? ogImage : `https://${COUNTRY_DOMAINS["CO"]}${ogImage || ""}`;

  const isPending = !productData?.invima || productData.invima.toLowerCase().includes("trámite");
  const invimaDisplay = isPending ? "Verificación INVIMA" : productData?.invima;

  const rawDescription = productData && productData.invima && !description.toLowerCase().includes("invima")
    ? `${description} INVIMA: ${invimaDisplay}.`
    : description;
  const finalDescription = rawDescription.length > 155
    ? rawDescription.slice(0, 152).trim() + "..."
    : rawDescription;

  const parsedKeywords = [
    ...(Array.isArray(keywords) ? keywords : (typeof keywords === "string" ? keywords.split(",").map(s => s.trim()) : [])),
    ...(productData ? (Array.isArray(productData.keywords) ? productData.keywords : (typeof productData.keywords === "string" ? productData.keywords.split(",").map((s: string) => s.trim()) : [])) : [])
  ].filter(Boolean);
  
  const metaKeywords = Array.from(new Set(parsedKeywords)).join(", ");

  let finalCurrency = currency;
  let finalCountry = countryCode;
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    const qCountry = urlParams.get('country');
    if (qCountry) {
        const found = COUNTRIES.find(c => c.id === qCountry.toUpperCase());
        if (found) {
            finalCurrency = found.currency;
            finalCountry = found.id;
        }
    }
  }
  const schemaData = generateSchemaGraph({
    type,
    title,
    description: finalDescription,
    canonicalUrl: fullUrl,
    ogImage: finalImage,
    productData,
    faqs,
    currency: finalCurrency,
    countryCode: finalCountry
  });

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={finalDescription} />
      {metaKeywords && <meta name="keywords" content={metaKeywords} />}
      <link rel="canonical" href={fullUrl} />
      <meta name="robots" content="index, follow, max-image-preview:large" />

      {/* Dynamic hreflang tags */}
      {Object.entries(COUNTRY_DOMAINS).map(([code, domain]) => (
        <link key={code} rel="alternate" hrefLang={`es-${code}`} href={getFullUrl(domain)} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={fullUrl} />

      <meta property="og:type" content={type === "product" ? "og:product" : "website"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Azenza" />
      <meta property="og:image" content={finalImage || defaultImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage || defaultImage} />

      <script type="application/ld+json" data-rh="true" id="schema-main">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SEOManager;
