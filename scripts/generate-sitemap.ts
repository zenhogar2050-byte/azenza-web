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
  xml += `        <image:image>\n`;
  xml += `            <image:loc>${baseUrl}/assets/logo/logo-icon.webp</image:loc>\n`;
  xml += `            <image:title>Azenza - Salud Natural y Bienestar</image:title>\n`;
  xml += `        </image:image>\n`;
  xml += `        <image:image>\n`;
  xml += `            <image:loc>${baseUrl}/assets/logo/og-image.png</image:loc>\n`;
  xml += `            <image:title>Azenza Tienda Oficial</image:title>\n`;
  xml += `        </image:image>\n`;
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

  // Pre-scan disk assets once for fast & complete support images matching
  const diskProductsDir = path.resolve(process.cwd(), 'public/assets/products');
  const diskProductFiles = fs.existsSync(diskProductsDir) ? fs.readdirSync(diskProductsDir) : [];
  const diskCombosDir = path.resolve(process.cwd(), 'public/assets/combos');
  const diskComboFiles = fs.existsSync(diskCombosDir) ? fs.readdirSync(diskCombosDir) : [];

  // Helper to collect all images (main + all support) for a product
  const getProductImages = (p: typeof products[0]) => {
    const images = new Set<string>();
    if (p.image) images.add(p.image);
    if (p.supportImages && Array.isArray(p.supportImages)) {
      p.supportImages.forEach(img => { if (img) images.add(img); });
    }
    const productBase = p.image.split('/').pop()?.replace('.webp', '').toLowerCase() || p.id.toLowerCase();
    const cleanId = p.id.toLowerCase().replace(/[^a-z0-9]/g, '');
    diskProductFiles.filter(f => {
      const fLower = f.toLowerCase();
      if (!fLower.includes('apoyo')) return false;
      return fLower.startsWith(p.id.toLowerCase()) || 
             fLower.startsWith(productBase) || 
             fLower.replace(/[^a-z0-9]/g, '').startsWith(cleanId + 'apoyo');
    }).forEach(f => images.add(`/assets/products/${f}`));
    return Array.from(images);
  };

  // 3. Products for country
  for (const p of products) {
    xml += `    <url>\n`;
    xml += `        <loc>${baseUrl}/producto/${p.id}</loc>\n`;
    xml += `        <lastmod>${currentDate}</lastmod>\n`;
    xml += `        <changefreq>weekly</changefreq>\n`;
    xml += `        <priority>0.9</priority>\n`;
    const allProdImages = getProductImages(p);
    for (const imgPath of allProdImages) {
      const imgUrl = imgPath.startsWith('http') ? imgPath : `${baseUrl}${imgPath}`;
      xml += `        <image:image>\n`;
      xml += `            <image:loc>${imgUrl}</image:loc>\n`;
      xml += `            <image:title>${p.name.replace(/&/g, '&amp;')}</image:title>\n`;
      xml += `        </image:image>\n`;
    }
    xml += `    </url>\n`;
  }

  // 4. Combo of the Month (Colombia only)
  if (countryCode === 'CO' && isComboOfTheMonthValid) {
    xml += `    <url>\n`;
    xml += `        <loc>${baseUrl}/combo/${COMBO_OF_THE_MONTH.id}</loc>\n`;
    xml += `        <lastmod>${currentDate}</lastmod>\n`;
    xml += `        <changefreq>weekly</changefreq>\n`;
    xml += `        <priority>0.9</priority>\n`;
    const comboImages = new Set<string>();
    if (COMBO_OF_THE_MONTH.image) comboImages.add(COMBO_OF_THE_MONTH.image);
    
    // Add component product images and all their support images
    for (const pId of COMBO_OF_THE_MONTH.products) {
      const prod = PRODUCTS.find(p => p.id === pId);
      if (prod) {
        getProductImages(prod).forEach(img => comboImages.add(img));
      }
    }

    for (const imgPath of comboImages) {
      const imgUrl = imgPath.startsWith('http') ? imgPath : `${baseUrl}${imgPath}`;
      xml += `        <image:image>\n`;
      xml += `            <image:loc>${imgUrl}</image:loc>\n`;
      xml += `            <image:title>${COMBO_OF_THE_MONTH.name.replace(/&/g, '&amp;')}</image:title>\n`;
      xml += `        </image:image>\n`;
    }
    xml += `    </url>\n`;
  }

  // 5. Valid Promotions (Colombia only)
  if (countryCode === 'CO') {
    for (const promo of validPromos) {
      xml += `    <url>\n`;
      xml += `        <loc>${baseUrl}/combo/${promo.id}</loc>\n`;
      xml += `        <lastmod>${currentDate}</lastmod>\n`;
      xml += `        <changefreq>weekly</changefreq>\n`;
      xml += `        <priority>0.9</priority>\n`;
      const promoImages = new Set<string>();
      if (promo.image) promoImages.add(promo.image);
      
      // Find promo support images on disk (e.g. promo-1-1.webp)
      const promoNum = promo.id.replace('promo-', '');
      diskComboFiles.filter(f => f.startsWith(`promo-${promoNum}`)).forEach(f => {
        promoImages.add(`/assets/combos/${f}`);
      });

      // Add component product images and all their support images
      for (const pId of promo.products) {
        const prod = PRODUCTS.find(p => p.id === pId);
        if (prod) {
          getProductImages(prod).forEach(img => promoImages.add(img));
        }
      }

      for (const imgPath of promoImages) {
        const imgUrl = imgPath.startsWith('http') ? imgPath : `${baseUrl}${imgPath}`;
        xml += `        <image:image>\n`;
        xml += `            <image:loc>${imgUrl}</image:loc>\n`;
        xml += `            <image:title>${promo.name.replace(/&/g, '&amp;')}</image:title>\n`;
        xml += `        </image:image>\n`;
      }
      xml += `    </url>\n`;
    }
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
  const distPath = path.resolve(process.cwd(), 'dist', fileName);
  if (fs.existsSync(path.resolve(process.cwd(), 'dist'))) {
    fs.writeFileSync(distPath, xml, 'utf8');
  }
  console.log(`Generated ${fileName} successfully with images for ${countryCode} at ${targetPath}`);
}

function generateSitemapIndex() {
  const baseUrl = 'https://azenza.com.co';
  const currentDate = new Date().toISOString().split('T')[0];
  const countries: CountryCode[] = ['CO', 'CL', 'CR', 'EC', 'GT', 'HN', 'PE', 'DO', 'VE'];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Colombia (main)
  xml += `    <sitemap>\n`;
  xml += `        <loc>${baseUrl}/sitemap.xml</loc>\n`;
  xml += `        <lastmod>${currentDate}</lastmod>\n`;
  xml += `    </sitemap>\n`;

  // Regional
  for (const c of countries) {
    if (c === 'CO') continue;
    xml += `    <sitemap>\n`;
    xml += `        <loc>${baseUrl}/sitemap-${c.toLowerCase()}.xml</loc>\n`;
    xml += `        <lastmod>${currentDate}</lastmod>\n`;
    xml += `    </sitemap>\n`;
  }

  xml += `</sitemapindex>\n`;

  const targetPath = path.resolve(process.cwd(), 'public', 'sitemap_index.xml');
  fs.writeFileSync(targetPath, xml, 'utf8');
  const distPath = path.resolve(process.cwd(), 'dist', 'sitemap_index.xml');
  if (fs.existsSync(path.resolve(process.cwd(), 'dist'))) {
    fs.writeFileSync(distPath, xml, 'utf8');
  }
  console.log(`Generated sitemap_index.xml successfully at ${targetPath}`);
}

function generateAllSitemaps() {
  const countries: CountryCode[] = ['CO', 'CL', 'CR', 'EC', 'GT', 'HN', 'PE', 'DO', 'VE'];
  for (const c of countries) {
    generateSitemapForCountry(c);
  }
  generateSitemapIndex();
}

generateAllSitemaps();
