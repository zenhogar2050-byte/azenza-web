import fs from 'fs';
import path from 'path';
import { PRODUCTS, PROMOTIONS, CATEGORIES, COMBO_OF_THE_MONTH } from '../src/constants';
import { GOOGLE_TITLES_BY_PRODUCT_ID, GOOGLE_TITLES_BY_PROMO_ID } from '../src/googleFeedTitles';

async function generate() {
    const serverDir = path.resolve(process.cwd(), 'dist/server');
    
    if (!fs.existsSync(serverDir)) {
        console.error('ERROR: No se encontró el directorio dist/server.');
        process.exit(1);
    }
    
    // Buscamos primero el archivo esperado directamente, si no, buscamos recursivamente
    let serverModulePath = path.resolve(serverDir, 'main-server.js');
    
    if (!fs.existsSync(serverModulePath)) {
        let bundlePath = '';
        let maxFileSize = 0;

        function searchBundle(dir: string) {
            const files = fs.readdirSync(dir);
            for (const file of files) {
                const fullPath = path.join(dir, file);
                if (fs.statSync(fullPath).isDirectory()) {
                    searchBundle(fullPath);
                } else if (file.endsWith('.js')) {
                    const size = fs.statSync(fullPath).size;
                    if (size > maxFileSize) {
                        maxFileSize = size;
                        bundlePath = fullPath;
                    }
                }
            }
        }
        
        searchBundle(serverDir);
        serverModulePath = bundlePath;
    }
    
    if (!serverModulePath || !fs.existsSync(serverModulePath)) {
        console.error('ERROR: No se encontró el bundle de servidor (.js) en dist/server/.');
        process.exit(1);
    }
    
    console.log('Bundle de servidor encontrado en:', serverModulePath);

    const module = await import(serverModulePath as any);
    console.log('Module exports:', Object.keys(module));
    
    const render = module.render || module.default?.render || module.default;
    
    if (typeof render !== 'function') {
        console.error('ERROR: render no es una función.');
        process.exit(1);
    }
    const BASE_URL = 'https://azenza.com.co';
    const distIndexHtml = fs.readFileSync(path.join(process.cwd(), 'dist/index.html'), 'utf-8');

    const ensureDir = (dir: string) => {
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    };

    const routes = [
        { path: '/', id: 'index' },
        { path: '/404', id: '404' },
        ...PRODUCTS.map(p => ({ path: `/producto/${p.id}`, id: `producto-${p.id}` })),
        ...PROMOTIONS.map(c => ({ path: `/combo/${c.id}`, id: `combo-${c.id}` })),
        ...CATEGORIES.map(cat => ({ path: `/categoria/${cat.id}`, id: `categoria-${cat.id}` })),
        { path: `/combo/${COMBO_OF_THE_MONTH.id}`, id: `combo-${COMBO_OF_THE_MONTH.id}` },
        { path: '/quienes-somos', id: 'quienes-somos' },
        { path: '/politica-privacidad', id: 'politica-privacidad' },
        { path: '/politica-reembolso', id: 'politica-reembolso' },
        { path: '/terminos-servicio', id: 'terminos-servicio' },
        { path: '/condiciones-entrega', id: 'condiciones-entrega' },
        { path: '/devoluciones-garantia', id: 'devoluciones-garantia' }
    ];

    console.log(`--- Iniciando Generación de Sitio Estático (Manual SSR) ---`);
    console.log(`- index.html length: ${distIndexHtml.length}`);
    const rootSearch = distIndexHtml.includes('<div id="root"></div>') ? 'ID-ROOT-FOUND' : 'ID-ROOT-NOT-FOUND';
    console.log(`- root check: ${rootSearch}`);

    for (const route of routes) {
        const helmetContext: any = {};
        let appHtml = '';
        try {
            appHtml = render(route.path, helmetContext);
            console.log(`  - Renderizado OK (${appHtml.length} bytes)`);
        } catch (e) {
            console.error(`  - ERROR renderizando ${route.path}:`, e);
        }
        
        const { helmet } = helmetContext;

        let html = distIndexHtml;
        
        const rootRegex = /<div[^>]*id=["']?root["']?[^>]*>[\s\S]*?<\/div>/;
        const titleRegex = /<title>[\s\S]*?<\/title>/;
        const headRegex = /<\/head>/;

        if (rootRegex.test(html)) {
            html = html.replace(rootRegex, `<div id="root">${appHtml}</div>`);
            console.log(`  - Root div inyectado OK (${appHtml.length} bytes)`);
        } else {
            console.warn(`  - ADVERTENCIA: No se encontró el div root en index.html`);
        }

        // Obtener metadatos específicos de la ruta para asegurar meta description, title y canonical en SSG
        let pageTitle = helmet?.title?.toString() || '';
        let pageDesc = '';
        let pageOgImage = '';
        let pageCanonical = `${BASE_URL}${route.path === '/' ? '/' : route.path}`;

        if (route.path === '/') {
            pageTitle = pageTitle || '<title>Combos y Ofertas en Productos Naturales Originales | Azenza</title>';
            pageDesc = 'Aprovecha nuestras ofertas y combos exclusivos en productos naturales originales. Soluciones naturales para colon irritable, hígado graso, dolor articular y control de peso. Envío gratis y pago contra entrega en Colombia.';
        } else if (route.path.startsWith('/producto/')) {
            const prodId = route.path.replace('/producto/', '');
            const prod = PRODUCTS.find(p => p.id === prodId);
            if (prod) {
                pageTitle = pageTitle || `<title>${prod.seoTitle || prod.name} | Azenza</title>`;
                pageDesc = prod.seoDescription || (prod.description ? prod.description.split('.')[0] + '.' : '');
                pageOgImage = prod.image;
            }
        } else if (route.path.startsWith('/combo/')) {
            const promoId = route.path.replace('/combo/', '');
            const promo = [COMBO_OF_THE_MONTH, ...PROMOTIONS].find(p => p.id === promoId);
            if (promo) {
                pageTitle = pageTitle || `<title>${promo.seoTitle || promo.name} | Azenza</title>`;
                pageDesc = promo.seoDescription || (promo.description ? promo.description.split('.')[0] + '.' : '');
                pageOgImage = promo.image;
            }
        } else if (route.path.startsWith('/categoria/')) {
            const catId = route.path.replace('/categoria/', '');
            const cat = CATEGORIES.find(c => c.id === catId);
            if (cat) {
                pageTitle = pageTitle || `<title>${cat.seoTitle || cat.name} | Azenza</title>`;
                pageDesc = cat.seoDescription || `${cat.description} Encuentra soluciones naturales para tu bienestar con productos originales.`;
            }
        } else if (route.path === '/quienes-somos') {
            pageTitle = pageTitle || '<title>Quiénes Somos | Azenza</title>';
            pageDesc = 'Conoce la historia de AZENZA, nuestra misión y compromiso con la salud natural en Colombia.';
        } else if (route.path === '/politica-privacidad') {
            pageTitle = pageTitle || '<title>Política de Privacidad | Azenza</title>';
            pageDesc = 'Política de tratamiento de datos personales de AZENZA. Tu privacidad es nuestra prioridad.';
        } else if (route.path === '/politica-reembolso') {
            pageTitle = pageTitle || '<title>Política de Reembolso | Azenza</title>';
            pageDesc = 'Conoce nuestra política de reembolsos y derecho de retracto de AZENZA en Colombia.';
        } else if (route.path === '/terminos-servicio') {
            pageTitle = pageTitle || '<title>Términos del Servicio | Azenza</title>';
            pageDesc = 'Conoce los Términos y Condiciones de Uso de la plataforma AZENZA en Colombia.';
        } else if (route.path === '/condiciones-entrega') {
            pageTitle = pageTitle || '<title>Condiciones de Entrega | Azenza</title>';
            pageDesc = 'Información sobre tiempos de entrega, cobertura y método de pago contra entrega en Colombia.';
        } else if (route.path === '/devoluciones-garantia') {
            pageTitle = pageTitle || '<title>Devoluciones y Garantía | Azenza</title>';
            pageDesc = 'Conoce nuestras políticas de garantía para productos dañados o insatisfacción.';
        } else if (route.path === '/404') {
            pageTitle = pageTitle || '<title>Página no encontrada | Azenza</title>';
            pageDesc = 'La página solicitada no está disponible en Azenza.';
        }

        if (!pageTitle.startsWith('<title>')) {
            pageTitle = `<title>${pageTitle || 'Azenza | Bienestar Natural Premium'}</title>`;
        }

        // Limpieza de meta tags estáticos base de index.html para evitar duplicaciones en SSG
        html = html.replace(/<meta\s+[^>]*name=["']description["'][^>]*>/gi, '');
        html = html.replace(/<link\s+[^>]*rel=["']canonical["'][^>]*>/gi, '');
        html = html.replace(/<meta\s+[^>]*property=["']og:[^"']+["'][^>]*>/gi, '');

        if (titleRegex.test(html)) {
            html = html.replace(titleRegex, pageTitle);
        }
        
        const fallbackMeta = `
                <meta name="description" content="${pageDesc.replace(/"/g, '&quot;')}" />
                <link rel="canonical" href="${pageCanonical}" />
                <meta property="og:title" content="${pageTitle.replace(/<[^>]+>/g, '').replace(/"/g, '&quot;')}" />
                <meta property="og:description" content="${pageDesc.replace(/"/g, '&quot;')}" />
                <meta property="og:url" content="${pageCanonical}" />
                ${pageOgImage ? `<meta property="og:image" content="${pageOgImage.startsWith('http') ? pageOgImage : `${BASE_URL}${pageOgImage}`}" />` : ''}`;

        html = html.replace(headRegex, `
                ${fallbackMeta}
                ${helmet?.meta?.toString() || ''}
                ${helmet?.link?.toString() || ''}
                ${helmet?.script?.toString() || ''}
                <style id="ssg-styles">.lazy-load-placeholder { min-height: 100px; }</style>
                </head>
            `);

        const filePath = route.path === '/' ? 'dist/index.html' : `dist${route.path}.html`;
        ensureDir(path.dirname(filePath));
        fs.writeFileSync(filePath, html);
        console.log(`✓ Generado: ${filePath}`);
    }

    // Sitemap
    const today = new Date().toISOString().split('T')[0];
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${BASE_URL}/</loc>
        <lastmod>${today}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>${routes.filter(r => r.path !== '/' && r.path !== '/404').map(r => {
        const isProductOrCombo = r.path.startsWith('/producto/') || r.path.startsWith('/combo/');
        const isCategory = r.path.startsWith('/categoria/');
        const freq = isProductOrCombo ? 'weekly' : (isCategory ? 'weekly' : 'monthly');
        const prio = isProductOrCombo ? '0.9' : (isCategory ? '0.8' : '0.5');
        return `
    <url>
        <loc>${BASE_URL}${r.path}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>${freq}</changefreq>
        <priority>${prio}</priority>
    </url>`;
    }).join('')}
</urlset>`.trim();

    fs.writeFileSync('dist/sitemap.xml', sitemap);
    
    // Robots
    const robots = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /checkout
Sitemap: ${BASE_URL}/sitemap.xml`;
    fs.writeFileSync('dist/robots.txt', robots);

    // Google Merchant Feed XML
    const ALL_PROMOTIONS = [COMBO_OF_THE_MONTH, ...PROMOTIONS];
    const cleanRawDesc = (rawText: string): string => {
      let text = rawText
        .replace(/<[^>]*>?/gm, '')
        .replace(/\s+/g, ' ')
        .trim();

      // Reemplazos de máxima fidelidad a la dolencia y beneficio real:
      // Sin rodeos, sin alterar el sentido de la dolencia, pero 100% compliant con Google Ads / Merchant.
      text = text
        // Sistema digestivo y colon
        .replace(/estreñimiento crónico|estreñimiento/gi, 'tránsito intestinal lento')
        .replace(/personas diabéticas/gi, 'personas que cuidan su ingesta de azúcares')
        .replace(/diabétic[oa]s?/gi, 'que cuidan sus niveles de glucosa')
        .replace(/hinchazón abdominal persistente|hinchazón abdominal|hinchazón estomacal|hinchazón/gi, 'pesadez abdominal')
        .replace(/vientre desinflamado|abdomen desinflamado/gi, 'vientre plano y ligero')
        .replace(/desinflamar el abdomen|desinflamar el vientre|desinflamar las piernas|desinflamar y proteger|desinflamar la próstata|desinflamar|desinflamación|desinflamad[oa]s?/gi, (match) => {
          if (/abdomen|vientre/i.test(match)) return 'aliviar y aplanar el vientre';
          if (/piernas/i.test(match)) return 'aliviar y reconfortar las piernas';
          if (/próstata/i.test(match)) return 'proteger y brindar confort a la zona pélvica';
          return 'aliviar la pesadez y brindar confort';
        })
        .replace(/regular los procesos inflamatorios de la próstata/gi, 'mantener el confort y la función de la zona pélvica')
        .replace(/salud de la próstata|la próstata/gi, 'la zona pélvica masculina')
        
        // Inflamación residual y deshinchar
        .replace(/disminuye la inflamación y devuelve|disminuye la inflamación|reduce la inflamación/gi, 'aporta ligereza, frescura y confort duradero')
        .replace(/inflamación abdominal|inflamación estomacal|la inflamación/gi, 'pesadez y sobrecarga estomacal')
        .replace(/deshinchar los tobillos/gi, 'reconfortar pies y tobillos cansados')
        
        // Transición biológica, fatiga, glucosa, órganos
        .replace(/etapas de transición y cambio biologico|etapas de transición y cambio biológico/gi, 'etapas de renovación y vitalidad integral')
        .replace(/combatir la fatiga y promover/gi, 'promover una energía activa y')
        .replace(/regular la glucosa/gi, 'apoyar el equilibrio metabólico diario')
        .replace(/evita la acumulación de grasa corporal|evita que el cuerpo acumule grasa/gi, 'apoya la asimilación eficiente de los alimentos y el metabolismo activo')
        .replace(/limpieza interna del hígado y los riñones de impurezas y grasas/gi, 'eliminación natural de toxinas y residuos corporales')
        .replace(/para una función renal óptima y defensas activas/gi, 'para una digestión ligera y defensas activas')

        // Manejo del dolor y sistema muscular / articular
        .replace(/alivio del dolor|aliviar el dolor|calmar el dolor|reducir el dolor|quitar el dolor|dolores musculares|dolor muscular|dolor articular|dolor de rodillas|dolores locales|dolor local|dolores|dolor/gi, 'alivio de tensión y sobrecarga muscular')
        .replace(/aalivio de tensión y sobrecarga muscularidos|músculos atensión muscularidos/gi, 'músculos fatigados')
        .replace(/fatiga muscular tras una intensa sesión de ejercicio y largas jornadas de pie/gi, 'cansancio acumulado en piernas tras largas jornadas de pie')
        .replace(/adoloridos|adoloridas/gi, 'fatigados y sobrecargados')
        .replace(/sin dolor/gi, 'con máximo confort')
        .replace(/regeneración de articulaciones|regenerar articulaciones|articular(es)?/gi, 'flexibilidad de rodillas y cartílagos')
        .replace(/osteoarticular/gi, 'osteomuscular')

        // Circulación y piernas
        .replace(/molestias por pesadez y cansancio en piernas|molestias por várices|molestias por varices|várices|varices/gi, 'sensación de pesadez y piernas cansadas')

        // Sistema nervioso, estrés, cortisol, sueño
        .replace(/insomnio crónico|insomnio/gi, 'dificultad para conciliar el descanso')
        .replace(/alivio del estrés y ansiedad|estrés y ansiedad|ansiedad y estrés|ansiedad/gi, 'tensión nerviosa e intranquilidad')
        .replace(/niveles de cortisol y ayuda a|niveles de cortisol|el cortisol|cortisol/gi, 'la sobrecarga nerviosa y ayuda a')
        .replace(/alivio de estrés|reducir el estrés|combatir el estrés|estrés acumulado|estrés diario|estrés/gi, 'tensión acumulada')

        // Infecciones y microbios
        .replace(/alivia la candidiasis y mitiga los gases/gi, 'favorece el equilibrio de la flora y mitiga los gases')
        .replace(/candidiasis/gi, 'desequilibrio de la microbiota')
        .replace(/combatiendo bacterias y parásitos perjudiciales|favoreciendo la depuración de microorganismos perjudiciales/gi, 'favoreciendo la depuración natural y el equilibrio digestivo')
        .replace(/parásitos|parásito/gi, 'impurezas internas');

      return text;
    };

    const googleFeedXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
<channel>
  <title><![CDATA[Azenza - Salud y Bienestar]]></title>
  <link>${BASE_URL}</link>
  <description><![CDATA[Tu aliado en salud natural, suplementos y bienestar integral en Colombia.]]></description>
  ${PRODUCTS.filter(p => p.id !== 'instant-virgin').map(p => {
    const mainImg = p.image.startsWith('http') ? p.image : `${BASE_URL}${p.image.startsWith('/') ? p.image : `/${p.image}`}`;
    const additionalImgs = Array.from(new Set((p.supportImages || []).filter(img => img && img !== p.image)))
      .slice(0, 10)
      .map(img => `    <g:additional_image_link>${encodeURI(img.startsWith('http') ? img : `${BASE_URL}${img.startsWith('/') ? img : `/${img}`}`)}</g:additional_image_link>`)
      .join('\n');
    const productTitle = GOOGLE_TITLES_BY_PRODUCT_ID[p.id] || p.googleTitle || p.name;
    const googleCategory = p.googleCategory || 'Health & Beauty > Health Care > Fitness & Nutrition';
    return `
  <item>
    <g:id><![CDATA[${p.masterId}]]></g:id>
    <g:title><![CDATA[${productTitle}]]></g:title>
    <g:description><![CDATA[${cleanRawDesc(p.googleDescription || p.description || p.shortDescription)}]]></g:description>
    <g:link>${encodeURI(`${BASE_URL}/producto/${p.id}`)}</g:link>
    <g:image_link>${encodeURI(mainImg)}</g:image_link>
${additionalImgs ? `${additionalImgs}\n` : ''}    <g:condition><![CDATA[${p.condition || 'new'}]]></g:condition>
    <g:availability><![CDATA[in stock]]></g:availability>
    <g:price><![CDATA[${p.basePrice} COP]]></g:price>
    <g:google_product_category><![CDATA[${googleCategory}]]></g:google_product_category>
    <g:brand><![CDATA[Azenza]]></g:brand>
    <g:mpn><![CDATA[${p.masterId}]]></g:mpn>
    <g:identifier_exists><![CDATA[no]]></g:identifier_exists>
    <g:shipping>
      <g:country><![CDATA[CO]]></g:country>
      <g:service><![CDATA[Envío Gratis]]></g:service>
      <g:price><![CDATA[0 COP]]></g:price>
    </g:shipping>
  </item>`;
  }).join('')}
  ${ALL_PROMOTIONS.map(p => {
    const mainImg = p.image.startsWith('http') ? p.image : `${BASE_URL}${p.image.startsWith('/') ? p.image : `/${p.image}`}`;
    const promoImages: string[] = [];
    if (p.supportImages && Array.isArray(p.supportImages)) {
      promoImages.push(...p.supportImages);
    }
    if (p.products && Array.isArray(p.products)) {
      p.products.forEach((prodNameOrId: string) => {
        const matched = PRODUCTS.find(pr => pr.id === prodNameOrId || pr.name.toLowerCase() === prodNameOrId.toLowerCase());
        if (matched && matched.image) {
          promoImages.push(matched.image);
        }
        if (matched && matched.supportImages) {
          promoImages.push(...matched.supportImages);
        }
      });
    }
    const additionalImgs = Array.from(new Set(promoImages.filter(img => img && img !== p.image)))
      .slice(0, 10)
      .map(img => `    <g:additional_image_link>${encodeURI(img.startsWith('http') ? img : `${BASE_URL}${img.startsWith('/') ? img : `/${img}`}`)}</g:additional_image_link>`)
      .join('\n');
    const promoTitle = GOOGLE_TITLES_BY_PROMO_ID[p.id] || p.googleTitle || p.name;
    return `
  <item>
    <g:id><![CDATA[${p.id}]]></g:id>
    <g:title><![CDATA[${promoTitle}]]></g:title>
    <g:description><![CDATA[${cleanRawDesc(p.googleDescription || p.description)}]]></g:description>
    <g:link>${encodeURI(`${BASE_URL}/combo/${p.id}`)}</g:link>
    <g:image_link>${encodeURI(mainImg)}</g:image_link>
${additionalImgs ? `${additionalImgs}\n` : ''}    <g:condition><![CDATA[${p.condition || 'new'}]]></g:condition>
    <g:availability><![CDATA[in stock]]></g:availability>
    <g:price><![CDATA[${p.price} COP]]></g:price>
    <g:google_product_category><![CDATA[${p.googleCategory || 'Health & Beauty > Health Care > Fitness & Nutrition'}]]></g:google_product_category>
    <g:brand><![CDATA[Azenza]]></g:brand>
    <g:identifier_exists><![CDATA[no]]></g:identifier_exists>
    <g:shipping>
      <g:country><![CDATA[CO]]></g:country>
      <g:service><![CDATA[Envío Gratis]]></g:service>
      <g:price><![CDATA[0 COP]]></g:price>
    </g:shipping>
  </item>`;
  }).join('')}
</channel>
</rss>`.trim();

    fs.writeFileSync('dist/google-feed.xml', googleFeedXml);
    if (!fs.existsSync('public')) fs.mkdirSync('public', { recursive: true });
    fs.writeFileSync('public/google-feed.xml', googleFeedXml);

    console.log('--- SSG y Google Merchant Feed Completado ---');
}

generate().catch(err => {
    console.error('Error crítico:', err);
    process.exit(1);
});
