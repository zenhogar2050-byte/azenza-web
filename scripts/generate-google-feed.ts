import fs from 'fs';
import path from 'path';
import { 
  PRODUCTS, 
  PROMOTIONS, 
  COMBO_OF_THE_MONTH, 
  COUNTRY_CONFIGS, 
  CountryCode, 
  getProductsForCountry 
} from '../src/constants';
import { GOOGLE_TITLES_BY_PRODUCT_ID, GOOGLE_TITLES_BY_PROMO_ID } from '../src/googleFeedTitles';

function sanitizeForGoogleAds(text: string): string {
  if (!text) return '';
  let sanitized = text
    .replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[✔️✔✅☑️✓]/gu, '')
    .replace(/\r\n/g, ' ')
    .replace(/\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  sanitized = sanitized
    .replace(/limpieza interna del hígado y los riñones de impurezas y grasas/gi, 'eliminación natural de toxinas y residuos corporales')
    .replace(/limpieza interna del hígado y los riñones/gi, 'eliminación natural de toxinas y residuos corporales')
    .replace(/Adiós a la Inflamación/gi, 'Adiós a pesadez y sobrecarga estomacal')
    .replace(/sensación de hinchazón/gi, 'sensación de pesadez abdominal')
    .replace(/aliviar la inflamación/gi, 'favorecer el confort digestivo')
    .replace(/combatir el estreñimiento/gi, 'combatir el tránsito intestinal lento')
    .replace(/estreñimiento/gi, 'tránsito intestinal lento')
    .replace(/desinflamar/gi, 'reconfortar')
    .replace(/inflamación/gi, 'pesadez abdominal')
    .replace(/hemorroides/gi, 'zonas sensibles de alta fricción')
    .replace(/várices|varices/gi, 'pesadez y cansancio en piernas')
    .replace(/impotencia|disfunción eréctil/gi, 'disminución del vigor físico')
    .replace(/dolor articular/gi, 'rigidez articular')
    .replace(/alivio del dolor/gi, 'confort y bienestar');

  return sanitized;
}

function generateGoogleFeedForCountry(countryCode: CountryCode) {
  const baseUrl = 'https://azenza.com.co';
  const config = COUNTRY_CONFIGS[countryCode];
  const currency = config.currency;
  const multiplier = config.priceMultiplier;

  const products = getProductsForCountry(countryCode);
  const productIds = new Set(products.map(p => p.id));
  const isColombia = countryCode === 'CO';
  const validPromos = isColombia 
    ? PROMOTIONS.filter(promo => promo.products.every(pid => productIds.has(pid)))
    : [];
  const isComboOfTheMonthValid = isColombia && COMBO_OF_THE_MONTH.products.every(pid => productIds.has(pid));

  // Disk assets scanning for exhaustive support images matching
  const diskProductsDir = path.resolve(process.cwd(), 'public/assets/products');
  const diskProductFiles = fs.existsSync(diskProductsDir) ? fs.readdirSync(diskProductsDir) : [];
  const diskCombosDir = path.resolve(process.cwd(), 'public/assets/combos');
  const diskComboFiles = fs.existsSync(diskCombosDir) ? fs.readdirSync(diskCombosDir) : [];

  const getProductAdditionalImages = (p: typeof products[0]) => {
    const images = new Set<string>();
    if (p.supportImages && Array.isArray(p.supportImages)) {
      p.supportImages.forEach(img => { if (img && img !== p.image) images.add(img); });
    }
    const productBase = p.image.split('/').pop()?.replace('.webp', '').toLowerCase() || p.id.toLowerCase();
    const cleanId = p.id.toLowerCase().replace(/[^a-z0-9]/g, '');
    diskProductFiles.filter(f => {
      const fLower = f.toLowerCase();
      if (!fLower.includes('apoyo')) return false;
      return fLower.startsWith(p.id.toLowerCase()) || 
             fLower.startsWith(productBase) || 
             fLower.replace(/[^a-z0-9]/g, '').startsWith(cleanId + 'apoyo');
    }).forEach(f => {
      const pth = `/assets/products/${f}`;
      if (pth !== p.image) images.add(pth);
    });
    return Array.from(images);
  };

  const getComboAdditionalImages = (combo: typeof COMBO_OF_THE_MONTH | typeof PROMOTIONS[0]) => {
    const images = new Set<string>();
    const promoNum = combo.id.replace('promo-', '');
    diskComboFiles.filter(f => f.startsWith(`promo-${promoNum}`) || f.startsWith(combo.id)).forEach(f => {
      const pth = `/assets/combos/${f}`;
      if (pth !== combo.image) images.add(pth);
    });
    for (const pId of combo.products) {
      const prod = PRODUCTS.find(p => p.id === pId);
      if (prod) {
        if (prod.image && prod.image !== combo.image) images.add(prod.image);
        getProductAdditionalImages(prod).forEach(img => {
          if (img !== combo.image) images.add(img);
        });
      }
    }
    return Array.from(images);
  };

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">\n`;
  xml += `<channel>\n`;
  xml += `  <title><![CDATA[Azenza - Salud y Bienestar (${config.name})]]></title>\n`;
  xml += `  <link>${baseUrl}</link>\n`;
  xml += `  <description><![CDATA[Tu aliado en salud natural, suplementos y bienestar integral en ${config.name}.]]></description>\n\n`;

  // 1. Products for country
  for (const p of products) {
    const title = GOOGLE_TITLES_BY_PRODUCT_ID[p.id] || p.seoTitle || p.name;
    const description = sanitizeForGoogleAds(p.googleDescription || p.description);
    const primaryImg = p.image.startsWith('http') ? p.image : `${baseUrl}${p.image}`;
    const category = p.googleCategory || 'Health & Beauty > Health Care > Fitness & Nutrition';
    const itemId = p.masterId || p.id;

    xml += `  <item>\n`;
    xml += `    <g:id><![CDATA[${itemId}]]></g:id>\n`;
    xml += `    <g:title><![CDATA[${title}]]></g:title>\n`;
    xml += `    <g:description><![CDATA[${description}]]></g:description>\n`;
    xml += `    <g:link>${baseUrl}/producto/${p.id}</g:link>\n`;
    xml += `    <g:image_link>${primaryImg}</g:image_link>\n`;

    const additionalImages = getProductAdditionalImages(p);
    for (const sImg of additionalImages) {
      const sImgUrl = sImg.startsWith('http') ? sImg : `${baseUrl}${sImg}`;
      xml += `    <g:additional_image_link>${sImgUrl}</g:additional_image_link>\n`;
    }

    xml += `    <g:condition><![CDATA[new]]></g:condition>\n`;
    xml += `    <g:availability><![CDATA[in stock]]></g:availability>\n`;
    xml += `    <g:price><![CDATA[${p.basePrice} ${currency}]]></g:price>\n`;
    xml += `    <g:google_product_category><![CDATA[${category}]]></g:google_product_category>\n`;
    xml += `    <g:brand><![CDATA[Azenza]]></g:brand>\n`;
    xml += `    <g:mpn><![CDATA[${itemId}]]></g:mpn>\n`;
    xml += `    <g:identifier_exists><![CDATA[no]]></g:identifier_exists>\n`;
    xml += `    <g:shipping>\n`;
    xml += `      <g:country><![CDATA[${countryCode}]]></g:country>\n`;
    xml += `      <g:service><![CDATA[Envío Gratis]]></g:service>\n`;
    xml += `      <g:price><![CDATA[0 ${currency}]]></g:price>\n`;
    xml += `    </g:shipping>\n`;
    xml += `  </item>\n`;
  }

  // 2. Combo of the month (if valid for country)
  if (isComboOfTheMonthValid) {
    const combo = COMBO_OF_THE_MONTH;
    const title = GOOGLE_TITLES_BY_PROMO_ID[combo.id] || combo.seoTitle || combo.name;
    const description = sanitizeForGoogleAds(combo.description);
    const primaryImg = combo.image.startsWith('http') ? combo.image : `${baseUrl}${combo.image}`;
    const category = (combo as any).googleCategory || 'Health & Beauty > Health Care > Fitness & Nutrition';
    const itemId = `COMBO-${combo.id.toUpperCase()}`;
    const price = countryCode === 'CO' ? combo.price : Math.round(combo.price * multiplier);

    xml += `  <item>\n`;
    xml += `    <g:id><![CDATA[${itemId}]]></g:id>\n`;
    xml += `    <g:title><![CDATA[${title}]]></g:title>\n`;
    xml += `    <g:description><![CDATA[${description}]]></g:description>\n`;
    xml += `    <g:link>${baseUrl}/combo/${combo.id}</g:link>\n`;
    xml += `    <g:image_link>${primaryImg}</g:image_link>\n`;

    const additionalImages = getComboAdditionalImages(combo);
    for (const sImg of additionalImages) {
      const sImgUrl = sImg.startsWith('http') ? sImg : `${baseUrl}${sImg}`;
      xml += `    <g:additional_image_link>${sImgUrl}</g:additional_image_link>\n`;
    }

    xml += `    <g:condition><![CDATA[new]]></g:condition>\n`;
    xml += `    <g:availability><![CDATA[in stock]]></g:availability>\n`;
    xml += `    <g:price><![CDATA[${price} ${currency}]]></g:price>\n`;
    xml += `    <g:google_product_category><![CDATA[${category}]]></g:google_product_category>\n`;
    xml += `    <g:brand><![CDATA[Azenza]]></g:brand>\n`;
    xml += `    <g:mpn><![CDATA[${itemId}]]></g:mpn>\n`;
    xml += `    <g:identifier_exists><![CDATA[no]]></g:identifier_exists>\n`;
    xml += `    <g:shipping>\n`;
    xml += `      <g:country><![CDATA[${countryCode}]]></g:country>\n`;
    xml += `      <g:service><![CDATA[Envío Gratis]]></g:service>\n`;
    xml += `      <g:price><![CDATA[0 ${currency}]]></g:price>\n`;
    xml += `    </g:shipping>\n`;
    xml += `  </item>\n`;
  }

  // 3. Valid Promotions for country
  for (const promo of validPromos) {
    const title = GOOGLE_TITLES_BY_PROMO_ID[promo.id] || promo.seoTitle || promo.name;
    const description = sanitizeForGoogleAds(promo.description);
    const primaryImg = promo.image.startsWith('http') ? promo.image : `${baseUrl}${promo.image}`;
    const category = (promo as any).googleCategory || 'Health & Beauty > Health Care > Fitness & Nutrition';
    const itemId = `COMBO-${promo.id.toUpperCase()}`;
    const price = countryCode === 'CO' ? promo.price : Math.round(promo.price * multiplier);

    xml += `  <item>\n`;
    xml += `    <g:id><![CDATA[${itemId}]]></g:id>\n`;
    xml += `    <g:title><![CDATA[${title}]]></g:title>\n`;
    xml += `    <g:description><![CDATA[${description}]]></g:description>\n`;
    xml += `    <g:link>${baseUrl}/combo/${promo.id}</g:link>\n`;
    xml += `    <g:image_link>${primaryImg}</g:image_link>\n`;

    const additionalImages = getComboAdditionalImages(promo);
    for (const sImg of additionalImages) {
      const sImgUrl = sImg.startsWith('http') ? sImg : `${baseUrl}${sImg}`;
      xml += `    <g:additional_image_link>${sImgUrl}</g:additional_image_link>\n`;
    }

    xml += `    <g:condition><![CDATA[new]]></g:condition>\n`;
    xml += `    <g:availability><![CDATA[in stock]]></g:availability>\n`;
    xml += `    <g:price><![CDATA[${price} ${currency}]]></g:price>\n`;
    xml += `    <g:google_product_category><![CDATA[${category}]]></g:google_product_category>\n`;
    xml += `    <g:brand><![CDATA[Azenza]]></g:brand>\n`;
    xml += `    <g:mpn><![CDATA[${itemId}]]></g:mpn>\n`;
    xml += `    <g:identifier_exists><![CDATA[no]]></g:identifier_exists>\n`;
    xml += `    <g:shipping>\n`;
    xml += `      <g:country><![CDATA[${countryCode}]]></g:country>\n`;
    xml += `      <g:service><![CDATA[Envío Gratis]]></g:service>\n`;
    xml += `      <g:price><![CDATA[0 ${currency}]]></g:price>\n`;
    xml += `    </g:shipping>\n`;
    xml += `  </item>\n`;
  }

  xml += `</channel>\n`;
  xml += `</rss>\n`;

  const fileName = countryCode === 'CO' ? 'google-feed.xml' : `google-feed-${countryCode.toLowerCase()}.xml`;
  const targetPath = path.resolve(process.cwd(), 'public', fileName);
  fs.writeFileSync(targetPath, xml, 'utf8');
  if (fs.existsSync(path.resolve(process.cwd(), 'dist'))) {
    fs.writeFileSync(path.resolve(process.cwd(), 'dist', fileName), xml, 'utf8');
  }
  console.log(`Generated ${fileName} for ${countryCode} successfully at ${targetPath}`);
}

function generateAllGoogleFeeds() {
  const countries: CountryCode[] = ['CO', 'CL', 'CR', 'EC', 'GT', 'HN', 'PE', 'DO', 'VE'];
  for (const c of countries) {
    generateGoogleFeedForCountry(c);
  }
}

generateAllGoogleFeeds();
