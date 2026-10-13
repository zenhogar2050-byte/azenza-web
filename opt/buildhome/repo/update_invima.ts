import fs from 'fs';

let content = fs.readFileSync('src/constants.ts', 'utf8');

const updates: Record<string, { invima: string, desc: string }> = {
  'rtafull': {
    invima: 'PSA-000932-2017',
    desc: 'Concentrado líquido botánico formulado con extractos naturales seleccionados de alcachofa, berenjena, apio, perejil y flor de jamaica. Este tónico de origen natural está diseñado para complementar la dieta diaria, aportar antioxidantes esenciales y favorecer el bienestar digestivo y metabólico general. Su consumo regular ayuda a mantener la vitalidad y el equilibrio corporal en adultos. Cada porción contribuye a la hidratación y al aporte de micronutrientes vegetales que apoyan los procesos depurativos fisiológicos del organismo. Producto fabricado bajo estrictos estándares de calidad farmacéutica y fitoterapéutica en Colombia. Cuenta con Registro Sanitario INVIMA PSA-000932-2017, garantizando su seguridad, pureza y respaldo legal para la comercialización nacional. Se recomienda mantener una alimentación balanceada y hábitos de vida saludables al complementar con este concentrado para optimizar sus beneficios nutricionales y digestivos cotidianos.'
  },
  'coliplus': {
    invima: 'NSA-0012423-2022',
    desc: 'Suplemento en polvo de alta asimilación a base de fibra natural de psyllium, inulina de achicoria, chía, pitaya y espirulina de alta pureza. Formulado para complementar la alimentación diaria, favorecer el tránsito intestinal regular, mejorar la sensación de ligereza abdominal y apoyar la salud gastrointestinal de forma natural. Los componentes de su fórmula actúan sinérgicamente: la fibra de psyllium absorbe agua y promueve la motilidad intestinal adecuada; la inulina actúa como prebiótico nutriendo la flora bacteriana benéfica; la chía y la pitaya aportan mucílagos que protegen la mucosa gástrica y mejoran la digestión; la espirulina aporta micronutrientes y antioxidantes que complementan la nutrición celular. Producto de origen nacional respaldado por el Registro Sanitario INVIMA NSA-0012423-2022. Ideal para incorporar en tu rutina matutina o nocturna mezclado en agua o jugos naturales, promoviendo bienestar digestivo óptimo sin químicos agresivos ni efectos laxantes indeseados.'
  },
  'ashwagandha': {
    invima: 'NSA-2948-2026',
    desc: 'Suplemento dietario en cápsulas a base de extracto estandarizado de raíz de Ashwagandha (Withania somnifera) de alta pureza y concentración. Reconocido adaptógeno natural formulado para apoyar la resistencia del organismo frente al estrés cotidiano, promover la relajación mental y contribuir al bienestar emocional y físico en adultos. Cada porción aporta witanólidos activos que ayudan a equilibrar los niveles de energía, mejorar la calidad del descanso nocturno y favorecer la concentración y claridad mental durante las exigencias diarias. Producto fabricado bajo rigurosas normativas de calidad en laboratorios certificados. Cuenta con Registro Sanitario INVIMA NSA-2948-2026, asegurando su total cumplimiento normativo, seguridad de consumo y calidad estandarizada. Ideal para profesionales, deportistas y personas con alto ritmo de vida que buscan un apoyo natural para mantener la calma, la vitalidad y la homeostasis corporal sin estimulantes sintéticos.'
  },
  'citrato-potasio-magnesio': {
    invima: 'NSA-2948-2026',
    desc: 'Suplemento dietario avanzado en polvo o cápsulas a base de citrato de potasio y citrato de magnesio de máxima biodisponibilidad y asimilación celular. Diseñado para complementar la nutrición diaria, apoyar la función muscular óptima, prevenir calambres, equilibrar los electrolitos corporales y favorecer el metabolismo energético normal en adultos y deportistas. El magnesio contribuye al funcionamiento adecuado del sistema nervioso y la síntesis proteica, mientras que el potasio apoya la contracción muscular y el balance hídrico celular. Su formulación en forma de citrato garantiza una excelente tolerancia gástrica y absorción superior en comparación con otras sales minerales. Producto fabricado en instalaciones certificadas y respaldado oficialmente con el Registro Sanitario INVIMA NSA-2948-2026. Ideal para integrar en tu rutina diaria tras el entrenamiento o durante jornadas exigentes, promoviendo una recuperación física eficaz y bienestar integral.'
  },
  'bisglicinato-magnesio': {
    invima: 'NSA-2948-2026',
    desc: 'Suplemento dietario en cápsulas blandas a base de bisglicinato de magnesio quelado de máxima biodisponibilidad y asimilación celular. Este avanzado complejo está formulado para complementar la nutrición diaria, apoyar la relajación muscular profunda, mejorar la calidad del descanso nocturno y optimizar el rendimiento del sistema nervioso en adultos y deportistas. Al estar quelado con glicina, este mineral ofrece una tolerancia digestiva superior y evita las molestias estomacales comunes en otros suplementos de magnesio. Contribuye activamente a la reducción de la fatiga, el cansancio cotidiano y apoya la síntesis normal de proteínas y la función psicológica adecuada. Producto de alta calidad respaldado por el Registro Sanitario INVIMA NSA-2948-2026. Incorporar este suplemento en tu rutina nocturna o diaria favorece la recuperación muscular, promueve un sueño reparador y mantiene el equilibrio electrolítico óptimo para un estilo de vida activo y saludable.'
  },
  'gel-frio-relajante': {
    invima: 'NSOC90432-19CO',
    desc: 'Gel cosmético de uso tópico con efecto criogénico avanzado, enriquecido con mentol, alcanfor, extracto de castaño de indias y centella asiática de grado profesional. Formulado para proporcionar una sensación de frescura inmediata, aliviar la pesadez muscular y brindar confort y relajación profunda en piernas y zonas tensionadas tras la actividad física o largas jornadas de pie. Su combinación de activos actúa de forma precisa: el mentol genera una intensa oleada de frío calmante que insensibiliza la molestia local; el castaño de indias estimula la circulación periférica en la zona aplicada y en toda la pierna; la centella asiática promueve la síntesis de colágeno y repara los tejidos cutáneos. Respaldado con Notificación Sanitaria Obligatoria INVIMA NSOC90432-19CO. Su aplicación regular mejora visiblemente la firmeza de la piel, alivia la fatiga en las extremidades y reduce la sensación de piernas cansadas, previniendo la inflamación por sobrecarga física.'
  },
  'instant-virgin': {
    invima: '2021DM-0024065',
    desc: 'Gel cosmético íntimo de uso tópico formulado con extractos botánicos naturales, agentes astringentes suaves y emolientes hidratantes de alta tolerancia dermatológica. Diseñado para el cuidado personal, la higiene íntima y el bienestar diario, aportando una agradable sensación de frescura, tonificación y confort en la zona de aplicación. Su fórmula avanzada respeta el pH natural, hidrata profundamente y ayuda a mantener la elasticidad y suavidad de los tejidos cutáneos externos. Producto fabricado bajo estrictos controles de calidad cosmética y respaldado con el Registro Sanitario INVIMA 2021DM-0024065, garantizando su seguridad dermatológica. Ideal para integrar en la rutina de cuidado personal, brindando confianza, bienestar y frescura duradera en todo momento.'
  }
};

for (const [id, data] of Object.entries(updates)) {
  const startIdx = content.indexOf(`id: '${id}'`);
  if (startIdx === -1) {
    console.error(`Product ${id} not found!`);
    continue;
  }
  const chunk = content.slice(startIdx, startIdx + 3000);
  
  let newChunk = chunk;
  if (newChunk.includes('invima:')) {
    newChunk = newChunk.replace(/invima:\s*'[^']+'/, `invima: '${data.invima}'`);
  } else {
    newChunk = newChunk.replace(`id: '${id}'`, `id: '${id}',\n    invima: '${data.invima}'`);
  }
  
  if (newChunk.includes('googleDescription:')) {
    newChunk = newChunk.replace(/googleDescription:\s*'[\s\S]*?'/, `googleDescription: '${data.desc}'`);
  } else {
    newChunk = newChunk.replace(/googleCategory:\s*'[^']+'/, `googleCategory: '...', \n    googleDescription: '${data.desc}'`);
  }
  
  content = content.slice(0, startIdx) + newChunk + content.slice(startIdx + 3000);
  console.log(`Updated ${id}: INVIMA ${data.invima}, Length: ${data.desc.length}`);
}

fs.writeFileSync('src/constants.ts', content, 'utf8');
console.log('Successfully updated src/constants.ts.');
