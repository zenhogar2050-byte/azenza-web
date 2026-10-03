import fs from 'fs';
import path from 'path';
import { PRODUCTS, PROMOTIONS, COMBO_OF_THE_MONTH } from '../src/constants';
import { GOOGLE_TITLES_BY_PRODUCT_ID, GOOGLE_TITLES_BY_PROMO_ID } from '../src/googleFeedTitles';

function sanitizeForGoogleAds(text: string): string {
  if (!text) return '';
  let sanitized = text
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

function generateGoogleFeed() {
  const baseUrl = 'https://azenza.com.co';

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">\n`;
  xml += `<channel>\n`;
  xml += `  <title><![CDATA[Azenza - Salud y Bienestar]]></title>\n`;
  xml += `  <link>${baseUrl}</link>\n`;
  xml += `  <description><![CDATA[Tu aliado en salud natural, suplementos y bienestar integral en Colombia.]]></description>\n\n`;

  // 1. Products
  for (const p of PRODUCTS) {
    const title = GOOGLE_TITLES_BY_PRODUCT_ID[p.id] || p.seoTitle || p.name;
    const description = p.googleDescription || sanitizeForGoogleAds(p.description);
    const primaryImg = p.image.startsWith('http') ? p.image : `${baseUrl}${p.image}`;
    const category = p.googleCategory || 'Health & Beauty > Health Care > Fitness & Nutrition';
    const itemId = p.masterId || p.id;

    xml += `  <item>\n`;
    xml += `    <g:id><![CDATA[${itemId}]]></g:id>\n`;
    xml += `    <g:title><![CDATA[${title}]]></g:title>\n`;
    xml += `    <g:description><![CDATA[${description}]]></g:description>\n`;
    xml += `    <g:link>${baseUrl}/producto/${p.id}</g:link>\n`;
    xml += `    <g:image_link>${primaryImg}</g:image_link>\n`;

    if (p.supportImages && Array.isArray(p.supportImages)) {
      for (const sImg of p.supportImages) {
        if (sImg) {
          const sImgUrl = sImg.startsWith('http') ? sImg : `${baseUrl}${sImg}`;
          xml += `    <g:additional_image_link>${sImgUrl}</g:additional_image_link>\n`;
        }
      }
    }

    xml += `    <g:condition><![CDATA[new]]></g:condition>\n`;
    xml += `    <g:availability><![CDATA[in stock]]></g:availability>\n`;
    xml += `    <g:price><![CDATA[${p.basePrice} COP]]></g:price>\n`;
    xml += `    <g:google_product_category><![CDATA[${category}]]></g:google_product_category>\n`;
    xml += `    <g:brand><![CDATA[Azenza]]></g:brand>\n`;
    xml += `    <g:mpn><![CDATA[${itemId}]]></g:mpn>\n`;
    xml += `    <g:identifier_exists><![CDATA[no]]></g:identifier_exists>\n`;
    xml += `    <g:shipping>\n`;
    xml += `      <g:country><![CDATA[CO]]></g:country>\n`;
    xml += `      <g:service><![CDATA[Envío Gratis]]></g:service>\n`;
    xml += `      <g:price><![CDATA[0 COP]]></g:price>\n`;
    xml += `    </g:shipping>\n`;
    xml += `  </item>\n`;
  }

  // 2. Combo of the month
  {
    const combo = COMBO_OF_THE_MONTH;
    const title = GOOGLE_TITLES_BY_PROMO_ID[combo.id] || combo.seoTitle || combo.name;
    const description = sanitizeForGoogleAds(combo.description);
    const primaryImg = combo.image.startsWith('http') ? combo.image : `${baseUrl}${combo.image}`;
    const category = (combo as any).googleCategory || 'Health & Beauty > Health Care > Fitness & Nutrition';
    const itemId = `COMBO-${combo.id.toUpperCase()}`;

    xml += `  <item>\n`;
    xml += `    <g:id><![CDATA[${itemId}]]></g:id>\n`;
    xml += `    <g:title><![CDATA[${title}]]></g:title>\n`;
    xml += `    <g:description><![CDATA[${description}]]></g:description>\n`;
    xml += `    <g:link>${baseUrl}/combo/${combo.id}</g:link>\n`;
    xml += `    <g:image_link>${primaryImg}</g:image_link>\n`;

    const comboAny = combo as any;
    if (comboAny.supportImages && Array.isArray(comboAny.supportImages)) {
      for (const sImg of comboAny.supportImages) {
        if (sImg) {
          const sImgUrl = sImg.startsWith('http') ? sImg : `${baseUrl}${sImg}`;
          xml += `    <g:additional_image_link>${sImgUrl}</g:additional_image_link>\n`;
        }
      }
    }

    xml += `    <g:condition><![CDATA[new]]></g:condition>\n`;
    xml += `    <g:availability><![CDATA[in stock]]></g:availability>\n`;
    xml += `    <g:price><![CDATA[${combo.price} COP]]></g:price>\n`;
    xml += `    <g:google_product_category><![CDATA[${category}]]></g:google_product_category>\n`;
    xml += `    <g:brand><![CDATA[Azenza]]></g:brand>\n`;
    xml += `    <g:mpn><![CDATA[${itemId}]]></g:mpn>\n`;
    xml += `    <g:identifier_exists><![CDATA[no]]></g:identifier_exists>\n`;
    xml += `    <g:shipping>\n`;
    xml += `      <g:country><![CDATA[CO]]></g:country>\n`;
    xml += `      <g:service><![CDATA[Envío Gratis]]></g:service>\n`;
    xml += `      <g:price><![CDATA[0 COP]]></g:price>\n`;
    xml += `    </g:shipping>\n`;
    xml += `  </item>\n`;
  }

  // 3. Promotions
  for (const promo of PROMOTIONS) {
    const title = GOOGLE_TITLES_BY_PROMO_ID[promo.id] || promo.seoTitle || promo.name;
    const description = sanitizeForGoogleAds(promo.description);
    const primaryImg = promo.image.startsWith('http') ? promo.image : `${baseUrl}${promo.image}`;
    const category = (promo as any).googleCategory || 'Health & Beauty > Health Care > Fitness & Nutrition';
    const itemId = `COMBO-${promo.id.toUpperCase()}`;

    xml += `  <item>\n`;
    xml += `    <g:id><![CDATA[${itemId}]]></g:id>\n`;
    xml += `    <g:title><![CDATA[${title}]]></g:title>\n`;
    xml += `    <g:description><![CDATA[${description}]]></g:description>\n`;
    xml += `    <g:link>${baseUrl}/combo/${promo.id}</g:link>\n`;
    xml += `    <g:image_link>${primaryImg}</g:image_link>\n`;

    const promoAny = promo as any;
    if (promoAny.supportImages && Array.isArray(promoAny.supportImages)) {
      for (const sImg of promoAny.supportImages) {
        if (sImg) {
          const sImgUrl = sImg.startsWith('http') ? sImg : `${baseUrl}${sImg}`;
          xml += `    <g:additional_image_link>${sImgUrl}</g:additional_image_link>\n`;
        }
      }
    }

    xml += `    <g:condition><![CDATA[new]]></g:condition>\n`;
    xml += `    <g:availability><![CDATA[in stock]]></g:availability>\n`;
    xml += `    <g:price><![CDATA[${promo.price} COP]]></g:price>\n`;
    xml += `    <g:google_product_category><![CDATA[${category}]]></g:google_product_category>\n`;
    xml += `    <g:brand><![CDATA[Azenza]]></g:brand>\n`;
    xml += `    <g:mpn><![CDATA[${itemId}]]></g:mpn>\n`;
    xml += `    <g:identifier_exists><![CDATA[no]]></g:identifier_exists>\n`;
    xml += `    <g:shipping>\n`;
    xml += `      <g:country><![CDATA[CO]]></g:country>\n`;
    xml += `      <g:service><![CDATA[Envío Gratis]]></g:service>\n`;
    xml += `      <g:price><![CDATA[0 COP]]></g:price>\n`;
    xml += `    </g:shipping>\n`;
    xml += `  </item>\n`;
  }

  xml += `</channel>\n`;
  xml += `</rss>\n`;

  const publicFeed = path.resolve(process.cwd(), 'public/google-feed.xml');
  fs.writeFileSync(publicFeed, xml, 'utf8');
  console.log(`Generated google-feed.xml successfully at ${publicFeed}`);
}

generateGoogleFeed();
