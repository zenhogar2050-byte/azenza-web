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

const BASE_URL = 'https://azenza.com.co';

function escapeXml(unsafe: string): string {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function escapeCsv(field: string): string {
  if (!field) return '""';
  const clean = field.replace(/"/g, '""').replace(/[\r\n]+/g, ' ');
  return `"${clean}"`;
}

function sanitizeForGoogleAds(text: string): string {
  if (!text) return '';
  let sanitized = text
    .replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[✔️✔✅☑️✓]/gu, '')
    .replace(/\r\n/g, ' ')
    .replace(/\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  // Strict Policy Scrubbing for Google Merchant, Meta and TikTok Ads (Personalized Advertising & Health/Wellness Policies)
  sanitized = sanitized
    .replace(/limpieza interna del hígado y los riñones de impurezas y grasas/gi, 'eliminación natural de toxinas y residuos corporales')
    .replace(/limpieza interna del hígado y los riñones/gi, 'eliminación natural de toxinas y residuos corporales')
    .replace(/limpieza de colon/gi, 'bienestar y armonía digestiva')
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
    .replace(/alivio del dolor/gi, 'confort y bienestar')
    .replace(/ansiedad/gi, 'bienestar emocional')
    .replace(/estrés|estres/gi, 'ritmo diario activo')
    .replace(/insomnio/gi, 'descanso plácido')
    .replace(/depresión|depresion/gi, 'bienestar general')
    .replace(/dolor/gi, 'confort')
    .replace(/espasmos/gi, 'tensiones leves')
    .replace(/malestar/gi, 'sensación de pesadez')
    .replace(/nervios/gi, 'bienestar mental')
    .replace(/tránsito intestinal perezoso/gi, 'tránsito digestivo regular')
    .replace(/evacuaciones forzadas/gi, 'fluidez natural')
    .replace(/fatiga/gi, 'cansancio ocasional')
    .replace(/sobrepeso|obesidad/gi, 'bienestar corporal')
    .replace(/disfunción/gi, 'bienestar físico')
    .replace(/infección/gi, 'protección natural')
    .replace(/colitis|gastritis/gi, 'bienestar estomacal');

  return sanitized;
}

function generateMetaFeedForCountry(countryCode: CountryCode) {
  const config = COUNTRY_CONFIGS[countryCode];
  if (!config) return;

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

  // =========================================================================
  // 1. XML RSS 2.0 META CATALOG FORMAT (Fully compatible with Meta Pixel)
  // =========================================================================
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">\n`;
  xml += `<channel>\n`;
  xml += `  <title><![CDATA[Azenza - Catálogo Oficial Meta (${config.name})]]></title>\n`;
  xml += `  <link>${BASE_URL}</link>\n`;
  xml += `  <description><![CDATA[Catálogo oficial de productos para Instagram Shop y Facebook Dynamic Ads en ${config.name}.]]></description>\n\n`;

  // Products
  for (const p of products) {
    const title = p.seoTitle || p.name;
    const description = sanitizeForGoogleAds(p.seoDescription || p.shortDescription || p.description);
    const price = countryCode === 'CO' ? p.basePrice : Math.round(p.basePrice * multiplier);
    const pLink = countryCode === 'CO' 
      ? `${BASE_URL}/producto/${p.id}` 
      : `${BASE_URL}/producto/${p.id}?country=${countryCode}`;
    const primaryImg = p.image.startsWith('http') ? p.image : `${BASE_URL}${p.image}`;
    const category = p.googleCategory || 'Health & Beauty > Health Care > Fitness & Nutrition';

    xml += `  <item>\n`;
    xml += `    <g:id><![CDATA[${p.id}]]></g:id>\n`;
    xml += `    <g:title><![CDATA[${title}]]></g:title>\n`;
    xml += `    <g:description><![CDATA[${description}]]></g:description>\n`;
    xml += `    <g:link>${pLink}</g:link>\n`;
    xml += `    <g:image_link>${primaryImg}</g:image_link>\n`;
    const additionalImages = getProductAdditionalImages(p);
    for (const sImg of additionalImages) {
      const sImgUrl = sImg.startsWith('http') ? sImg : `${BASE_URL}${sImg}`;
      xml += `    <g:additional_image_link>${sImgUrl}</g:additional_image_link>\n`;
    }
    xml += `    <g:condition><![CDATA[new]]></g:condition>\n`;
    xml += `    <g:availability><![CDATA[in stock]]></g:availability>\n`;
    xml += `    <g:price><![CDATA[${price} ${currency}]]></g:price>\n`;
    xml += `    <g:brand><![CDATA[Azenza]]></g:brand>\n`;
    xml += `    <g:google_product_category><![CDATA[${category}]]></g:google_product_category>\n`;
    xml += `    <g:custom_label_0><![CDATA[${p.category || 'Salud y Bienestar'}]]></g:custom_label_0>\n`;
    xml += `    <g:custom_label_1><![CDATA[Envio Gratis]]></g:custom_label_1>\n`;
    xml += `    <g:custom_label_2><![CDATA[Pago Contra Entrega]]></g:custom_label_2>\n`;
    xml += `    <g:custom_label_3><![CDATA[${p.invima || 'Registro INVIMA'}]]></g:custom_label_3>\n`;
    xml += `  </item>\n`;
  }

  // Combos
  if (isComboOfTheMonthValid) {
    const cm = COMBO_OF_THE_MONTH;
    const price = countryCode === 'CO' ? cm.price : Math.round(cm.price * multiplier);
    const cmLink = countryCode === 'CO' 
      ? `${BASE_URL}/combo/${cm.id}` 
      : `${BASE_URL}/combo/${cm.id}?country=${countryCode}`;
    const cmImg = cm.image.startsWith('http') ? cm.image : `${BASE_URL}${cm.image}`;
    const description = sanitizeForGoogleAds(cm.seoDescription || cm.description);

    xml += `  <item>\n`;
    xml += `    <g:id><![CDATA[${cm.id}]]></g:id>\n`;
    xml += `    <g:title><![CDATA[${cm.seoTitle || cm.name}]]></g:title>\n`;
    xml += `    <g:description><![CDATA[${description}]]></g:description>\n`;
    xml += `    <g:link>${cmLink}</g:link>\n`;
    xml += `    <g:image_link>${cmImg}</g:image_link>\n`;
    const additionalImages = getComboAdditionalImages(cm);
    for (const sImg of additionalImages) {
      const sImgUrl = sImg.startsWith('http') ? sImg : `${BASE_URL}${sImg}`;
      xml += `    <g:additional_image_link>${sImgUrl}</g:additional_image_link>\n`;
    }
    xml += `    <g:condition><![CDATA[new]]></g:condition>\n`;
    xml += `    <g:availability><![CDATA[in stock]]></g:availability>\n`;
    xml += `    <g:price><![CDATA[${price} ${currency}]]></g:price>\n`;
    xml += `    <g:brand><![CDATA[Azenza]]></g:brand>\n`;
    xml += `    <g:google_product_category><![CDATA[Health & Beauty > Health Care > Fitness & Nutrition]]></g:google_product_category>\n`;
    xml += `    <g:custom_label_0><![CDATA[Combos]]></g:custom_label_0>\n`;
    xml += `    <g:custom_label_1><![CDATA[Oferta del Mes]]></g:custom_label_1>\n`;
    xml += `    <g:custom_label_2><![CDATA[Pago Contra Entrega]]></g:custom_label_2>\n`;
    xml += `    <g:custom_label_3><![CDATA[Ahorro Especial]]></g:custom_label_3>\n`;
    xml += `  </item>\n`;
  }

  for (const promo of validPromos) {
    const price = countryCode === 'CO' ? promo.price : Math.round(promo.price * multiplier);
    const promoLink = countryCode === 'CO' 
      ? `${BASE_URL}/combo/${promo.id}` 
      : `${BASE_URL}/combo/${promo.id}?country=${countryCode}`;
    const promoImg = promo.image.startsWith('http') ? promo.image : `${BASE_URL}${promo.image}`;
    const description = sanitizeForGoogleAds(promo.seoDescription || promo.description);

    xml += `  <item>\n`;
    xml += `    <g:id><![CDATA[${promo.id}]]></g:id>\n`;
    xml += `    <g:title><![CDATA[${promo.seoTitle || promo.name}]]></g:title>\n`;
    xml += `    <g:description><![CDATA[${description}]]></g:description>\n`;
    xml += `    <g:link>${promoLink}</g:link>\n`;
    xml += `    <g:image_link>${promoImg}</g:image_link>\n`;
    const additionalImages = getComboAdditionalImages(promo);
    for (const sImg of additionalImages) {
      const sImgUrl = sImg.startsWith('http') ? sImg : `${BASE_URL}${sImg}`;
      xml += `    <g:additional_image_link>${sImgUrl}</g:additional_image_link>\n`;
    }
    xml += `    <g:condition><![CDATA[new]]></g:condition>\n`;
    xml += `    <g:availability><![CDATA[in stock]]></g:availability>\n`;
    xml += `    <g:price><![CDATA[${price} ${currency}]]></g:price>\n`;
    xml += `    <g:brand><![CDATA[Azenza]]></g:brand>\n`;
    xml += `    <g:google_product_category><![CDATA[Health & Beauty > Health Care > Fitness & Nutrition]]></g:google_product_category>\n`;
    xml += `    <g:custom_label_0><![CDATA[Combos]]></g:custom_label_0>\n`;
    xml += `    <g:custom_label_1><![CDATA[Envio Gratis]]></g:custom_label_1>\n`;
    xml += `    <g:custom_label_2><![CDATA[Pago Contra Entrega]]></g:custom_label_2>\n`;
    xml += `    <g:custom_label_3><![CDATA[Combo Descuento]]></g:custom_label_3>\n`;
    xml += `  </item>\n`;
  }

  xml += `</channel>\n`;
  xml += `</rss>\n`;

  const xmlFileName = countryCode === 'CO' ? 'meta-feed.xml' : `meta-feed-${countryCode.toLowerCase()}.xml`;
  fs.writeFileSync(path.resolve(process.cwd(), 'public', xmlFileName), xml, 'utf8');

  if (fs.existsSync(path.resolve(process.cwd(), 'dist'))) {
    fs.writeFileSync(path.resolve(process.cwd(), 'dist', xmlFileName), xml, 'utf8');
  }

  // =========================================================================
  // 2. CSV FORMAT (Alternative for Direct Manual/Batch Upload to Meta)
  // =========================================================================
  if (countryCode === 'CO') {
    let csv = `id,title,description,availability,condition,price,link,image_link,additional_image_link,brand,google_product_category,fb_product_category,custom_label_0,custom_label_1,custom_label_2\n`;

    // Products
    for (const p of products) {
      const title = p.seoTitle || p.name;
      const description = sanitizeForGoogleAds(p.seoDescription || p.shortDescription || p.description);
      const primaryImg = p.image.startsWith('http') ? p.image : `${BASE_URL}${p.image}`;
      const category = p.googleCategory || 'Health & Beauty > Health Care > Fitness & Nutrition';
      const additionalImages = getProductAdditionalImages(p).map(img => img.startsWith('http') ? img : `${BASE_URL}${img}`).join(',');

      csv += [
        escapeCsv(p.id),
        escapeCsv(title),
        escapeCsv(description),
        escapeCsv('in stock'),
        escapeCsv('new'),
        escapeCsv(`${p.basePrice} COP`),
        escapeCsv(`${BASE_URL}/producto/${p.id}`),
        escapeCsv(primaryImg),
        escapeCsv(additionalImages),
        escapeCsv('Azenza'),
        escapeCsv(category),
        escapeCsv(category),
        escapeCsv(p.category || 'Salud y Bienestar'),
        escapeCsv('Envio Gratis'),
        escapeCsv('Pago Contra Entrega')
      ].join(',') + '\n';
    }

    // Oferta del Mes (Combo Inmunidad Dual)
    if (isComboOfTheMonthValid) {
      const cm = COMBO_OF_THE_MONTH;
      const cmImg = cm.image.startsWith('http') ? cm.image : `${BASE_URL}${cm.image}`;
      const additionalImages = getComboAdditionalImages(cm).map(img => img.startsWith('http') ? img : `${BASE_URL}${img}`).join(',');
      const description = sanitizeForGoogleAds(cm.seoDescription || cm.description);

      csv += [
        escapeCsv(cm.id),
        escapeCsv(cm.seoTitle || cm.name),
        escapeCsv(description),
        escapeCsv('in stock'),
        escapeCsv('new'),
        escapeCsv(`${cm.price} COP`),
        escapeCsv(`${BASE_URL}/combo/${cm.id}`),
        escapeCsv(cmImg),
        escapeCsv(additionalImages),
        escapeCsv('Azenza'),
        escapeCsv('Health & Beauty > Health Care > Fitness & Nutrition'),
        escapeCsv('Health & Beauty > Health Care > Fitness & Nutrition'),
        escapeCsv('Combos'),
        escapeCsv('Oferta del Mes'),
        escapeCsv('Pago Contra Entrega')
      ].join(',') + '\n';
    }

    // Promos and Combos
    for (const promo of validPromos) {
      const promoImg = promo.image.startsWith('http') ? promo.image : `${BASE_URL}${promo.image}`;
      const additionalImages = getComboAdditionalImages(promo).map(img => img.startsWith('http') ? img : `${BASE_URL}${img}`).join(',');
      const description = sanitizeForGoogleAds(promo.seoDescription || promo.description);

      csv += [
        escapeCsv(promo.id),
        escapeCsv(promo.seoTitle || promo.name),
        escapeCsv(description),
        escapeCsv('in stock'),
        escapeCsv('new'),
        escapeCsv(`${promo.price} COP`),
        escapeCsv(`${BASE_URL}/combo/${promo.id}`),
        escapeCsv(promoImg),
        escapeCsv(additionalImages),
        escapeCsv('Azenza'),
        escapeCsv('Health & Beauty > Health Care > Fitness & Nutrition'),
        escapeCsv('Health & Beauty > Health Care > Fitness & Nutrition'),
        escapeCsv('Combos'),
        escapeCsv('Envio Gratis'),
        escapeCsv('Pago Contra Entrega')
      ].join(',') + '\n';
    }

    fs.writeFileSync(path.resolve(process.cwd(), 'public', 'meta-catalog.csv'), csv, 'utf8');
    if (fs.existsSync(path.resolve(process.cwd(), 'dist'))) {
      fs.writeFileSync(path.resolve(process.cwd(), 'dist', 'meta-catalog.csv'), csv, 'utf8');
    }
  }

  console.log(`Generated ${xmlFileName} for ${config.name} (${countryCode}) successfully.`);
}

function generateAllMetaFeeds() {
  const countries: CountryCode[] = ['CO', 'CL', 'CR', 'EC', 'GT', 'HN', 'PE', 'DO', 'VE'];
  for (const c of countries) {
    generateMetaFeedForCountry(c);
  }
}

generateAllMetaFeeds();
