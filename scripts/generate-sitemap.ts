import fs from 'fs';
import path from 'path';
import { 
  PRODUCTS, 
  PROMOTIONS, 
  COMBO_OF_THE_MONTH, 
  CATEGORIES, 
  COUNTRY_CONFIGS, 
  CountryCode, 
  getProductsForCountry, 
  getCategoriesForCountry 
} from '../src/constants';

function generateSitemapForCountry(countryCode: CountryCode) {
  const baseUrl = 'https://azenza.com.co';
  const currentDate = new Date().toISOString().split('T')[0];

  const products = getProductsForCountry(countryCode);
  const categories = getCategoriesForCountry(countryCode);
  const productIds = new Set(products.map(p => p.id));

  const validPromos = PROMOTIONS.filter(promo => 
    promo.products.every(pid => productIds.has(pid))
  );
  const isComboOfTheMonthValid = COMBO_OF_THE_MONTH.products.every(pid => productIds.has(pid));

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

  // 1. Home
  xml += `    <url>\n`;
  xml += `        <loc>${baseUrl}/</loc>\n`;
  xml += `        <lastmod>${currentDate}</lastmod>\n`;
  xml += `        <changefreq>daily</changefreq>\n`;
  xml += `        <priority>1.0</priority>\n`;
  xml += `    </url>\n`;

  // 2. Categories for country
  for (const cat of categories) {
    xml += `    <url>\n`;
    xml += `        <loc>${baseUrl}/categoria/${cat.id}</loc>\n`;
    xml += `        <lastmod>${currentDate}</lastmod>\n`;
    xml += `        <changefreq>weekly</changefreq>\n`;
    xml += `        <priority>0.8</priority>\n`;
    if (cat.image) {
      const imgUrl = cat.image.startsWith('http') ? cat.image : `${baseUrl}${cat.image}`;
      xml += `        <image:image>\n`;
      xml += `            <image:loc>${imgUrl}</image:loc>\n`;
      xml += `            <image:title>${cat.name}</image:title>\n`;
      xml += `        </image:image>\n`;
    }
    xml += `    </url>\n`;
  }

  // 3. Products for country
  for (const p of products) {
    xml += `    <url>\n`;
    xml += `        <loc>${baseUrl}/producto/${p.id}</loc>\n`;
    xml += `        <lastmod>${currentDate}</lastmod>\n`;
    xml += `        <changefreq>weekly</changefreq>\n`;
    xml += `        <priority>0.9</priority>\n`;
    if (p.image) {
      const imgUrl = p.image.startsWith('http') ? p.image : `${baseUrl}${p.image}`;
      xml += `        <image:image>\n`;
      xml += `            <image:loc>${imgUrl}</image:loc>\n`;
      xml += `            <image:title>${p.name.replace(/&/g, '&amp;')}</image:title>\n`;
      xml += `        </image:image>\n`;
    }
    if (p.supportImages && Array.isArray(p.supportImages)) {
      for (const sImg of p.supportImages) {
        if (sImg) {
          const imgUrl = sImg.startsWith('http') ? sImg : `${baseUrl}${sImg}`;
          xml += `        <image:image>\n`;
          xml += `            <image:loc>${imgUrl}</image:loc>\n`;
          xml += `            <image:title>${p.name.replace(/&/g, '&amp;')}</image:title>\n`;
          xml += `        </image:image>\n`;
        }
      }
    }
    xml += `    </url>\n`;
  }

  // 4. Combo of the Month (if valid for country)
  if (isComboOfTheMonthValid) {
    xml += `    <url>\n`;
    xml += `        <loc>${baseUrl}/combo/${COMBO_OF_THE_MONTH.id}</loc>\n`;
    xml += `        <lastmod>${currentDate}</lastmod>\n`;
    xml += `        <changefreq>weekly</changefreq>\n`;
    xml += `        <priority>0.9</priority>\n`;
    if (COMBO_OF_THE_MONTH.image) {
      const imgUrl = COMBO_OF_THE_MONTH.image.startsWith('http') ? COMBO_OF_THE_MONTH.image : `${baseUrl}${COMBO_OF_THE_MONTH.image}`;
      xml += `        <image:image>\n`;
      xml += `            <image:loc>${imgUrl}</image:loc>\n`;
      xml += `            <image:title>${COMBO_OF_THE_MONTH.name.replace(/&/g, '&amp;')}</image:title>\n`;
      xml += `        </image:image>\n`;
    }
    const comboMonthAny = COMBO_OF_THE_MONTH as any;
    if (comboMonthAny.supportImages && Array.isArray(comboMonthAny.supportImages)) {
      for (const sImg of comboMonthAny.supportImages) {
        if (sImg) {
          const imgUrl = sImg.startsWith('http') ? sImg : `${baseUrl}${sImg}`;
          xml += `        <image:image>\n`;
          xml += `            <image:loc>${imgUrl}</image:loc>\n`;
          xml += `            <image:title>${COMBO_OF_THE_MONTH.name.replace(/&/g, '&amp;')}</image:title>\n`;
          xml += `        </image:image>\n`;
        }
      }
    }
    xml += `    </url>\n`;
  }

  // 5. Valid Promotions for country
  for (const promo of validPromos) {
    xml += `    <url>\n`;
    xml += `        <loc>${baseUrl}/combo/${promo.id}</loc>\n`;
    xml += `        <lastmod>${currentDate}</lastmod>\n`;
    xml += `        <changefreq>weekly</changefreq>\n`;
    xml += `        <priority>0.9</priority>\n`;
    if (promo.image) {
      const imgUrl = promo.image.startsWith('http') ? promo.image : `${baseUrl}${promo.image}`;
      xml += `        <image:image>\n`;
      xml += `            <image:loc>${imgUrl}</image:loc>\n`;
      xml += `            <image:title>${promo.name.replace(/&/g, '&amp;')}</image:title>\n`;
      xml += `        </image:image>\n`;
    }
    const promoAny = promo as any;
    if (promoAny.supportImages && Array.isArray(promoAny.supportImages)) {
      for (const sImg of promoAny.supportImages) {
        if (sImg) {
          const imgUrl = sImg.startsWith('http') ? sImg : `${baseUrl}${sImg}`;
          xml += `        <image:image>\n`;
          xml += `            <image:loc>${imgUrl}</image:loc>\n`;
          xml += `            <image:title>${promo.name.replace(/&/g, '&amp;')}</image:title>\n`;
          xml += `        </image:image>\n`;
        }
      }
    }
    xml += `    </url>\n`;
  }

  // 6. Institutional & Legal Pages
  const institutionalPages = [
    'quienes-somos',
    'politica-privacidad',
    'politica-reembolso',
    'terminos-servicio',
    'condiciones-entrega',
    'devoluciones-garantia'
  ];

  for (const page of institutionalPages) {
    xml += `    <url>\n`;
    xml += `        <loc>${baseUrl}/${page}</loc>\n`;
    xml += `        <lastmod>${currentDate}</lastmod>\n`;
    xml += `        <changefreq>monthly</changefreq>\n`;
    xml += `        <priority>0.3</priority>\n`;
    xml += `    </url>\n`;
  }

  xml += `</urlset>\n`;

  const fileName = countryCode === 'CO' ? 'sitemap.xml' : `sitemap-${countryCode.toLowerCase()}.xml`;
  const targetPath = path.resolve(process.cwd(), 'public', fileName);
  fs.writeFileSync(targetPath, xml, 'utf8');
  console.log(`Generated ${fileName} successfully with images for ${countryCode} at ${targetPath}`);
}

function generateAllSitemaps() {
  const countries: CountryCode[] = ['CO', 'CL', 'CR', 'EC', 'GT', 'HN', 'PE', 'DO', 'VE'];
  for (const c of countries) {
    generateSitemapForCountry(c);
  }
}

generateAllSitemaps();
