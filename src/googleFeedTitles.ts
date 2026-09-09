// Mapeo optimizado de títulos para Google Merchant Center (Google Shopping)
// Límite técnico de Google: 150 caracteres.
// Calibrados entre 110 y 140 caracteres.
// Cumplimiento estricto con las políticas de Google:
// - Cero términos de enfermedades/patologías clínicas (sin "estreñimiento", sin "várices", sin "insomnio", sin "dolor")
// - Enfoque 100% fiel en ACCIÓN DIRECTA, ÓRGANOS Y RESULTADOS (limpieza de colon, desinflamar vientre, cartílagos, sueño profundo, piernas cansadas)

export const GOOGLE_TITLES_BY_PRODUCT_ID: Record<string, string> = {
  // --- Salud Digestiva, Detox y Bienestar ---
  'rtafull': 'RtaFull Depuración Hepática Desinflamación Abdominal y Digestión Pesada con Alcachofa y Flor de Jamaica 500ml',
  'coliplus': 'Coliplus Fibra Natural para Limpieza de Colon Desinflamar Vientre y Tránsito Intestinal Lento 450g',
  'liteplex': 'Liteplex Desinflamación Digestiva Reducción de Gases Pesadez Estomacal y Ligereza Metabólica 500ml',
  'guanda-mix': 'Guanda Mix Digestión Ágil Eliminación de Toxinas y Vitalidad Diaria Fibra Prebiótica y Frutas Naturales 350g',
  'vinagre-manzana': 'Vinagre de Manzana con la Madre Desinflamar Abdomen Digestión Ágil y Metabolismo Activo 60 Cápsulas Blandas',
  'oregano': 'Orégano Puro Máxima Concentración de Carvacrol Defensas y Purificación Digestiva 60 Cápsulas Blandas',

  // --- Articulaciones, Huesos y Colágenos ---
  'colageno': 'Colágeno Hidrolizado Regeneración de Articulaciones Cartílagos Firmeza de Piel y Citrato de Magnesio 180g',
  'c-lagen': 'C-Lagen Colágeno Marino Movilidad Articular Rodillas y Cartílagos con Biotina y Magnesio Polvo 500g',
  'maxlite-colageno': 'Maxlite Nutrición Osteoarticular Fortalecimiento Óseo Masa Muscular Proteína y Colágeno 800g',

  // --- Magnesios, Sistema Nervioso y Relajación ---
  'citramix': 'Citramix Citrato de Magnesio Relajación Muscular Calma Nerviosa Antiestrés y Bienestar Diario 350g',
  'bisglicinato-magnesio': 'Bisglicinato de Magnesio Relajación Muscular Conciliar el Sueño Profundo y Antiestrés 60 Cápsulas Blandas',
  'citrato-potasio-magnesio': 'Citrato de Potasio y Magnesio Equilibrio Mineral Músculos Activos y Salud Cardiovascular 60 Cápsulas Blandas',
  'ashwagandha': 'Ashwagandha Control de Cortisol Alivio de Estrés Fatiga Mental y Serenidad Emocional 60 Cápsulas Blandas',
  'liofhim': 'Liofhim Inductor de Sueño Profundo Relajación Nocturna y Descanso Reparador Líquido 500ml',

  // --- Enfoque, Energía y Rendimiento ---
  'booster-lion': 'Booster Lion Hongo Melena de León Claridad Mental Memoria Enfoque y Concentración Nootrópico Natural 350g',
  'creatina': 'Creatina Monohidratada Pura Fuerza Muscular Potencia Masa Magra y Recuperación Física Rápida 200g',
  'coffee-colageno': 'Coffee con Colágeno Energía Natural Matutina Belleza de Piel Uñas Fuertes y Firmeza Café Gourmet 400g',
  'titan-coffee': 'Titan Coffee Energía Extrema Sin Taquicardia Concentración y Resistencia Física Café con Maca y Borojó 400g',
  'haydar': 'Haydar Bebida Energizante Natural Vigor Inmediato Rendimiento Físico y Agudeza Mental Sin Bajón 240ml',
  'zafir': 'Zafir Bebida Energizante Natural Máxima Energía Rendimiento Físico y Enfoque con Maca y Borojó 500ml',

  // --- Defensas, Longevidad y Celular ---
  'resvis': 'Resvisfactor Escudo Inmunológico Defensas Fuertes Protección Celular Calostro Bovino y Betaglucanos 700g',
  'resveratrol': 'Resveratrol Puro Poder Antioxidante Antienvejecimiento Salud Celular Uva y Arándanos Polvo 350g',
  'nad-1': '+NAD Rejuvenecimiento Celular Producción de Energía Mitocondrial Vitalidad y Longevidad Avanzada Polvo 350g',
  'resveratrol-nad': 'Resveratrol con Vitamina B3 NAD+ Longevidad Celular Antiedad y Energía Vital 60 Cápsulas Blandas',
  'megamac': 'Megamac Vigor Físico Energía Masculina Extrema y Resistencia con Maca Negra Chontaduro y Borojó 700g',
  'kds-10': 'KDS 10 Multivitamínico Familiar Nutrición Integral Crecimiento Apetito Saludable Defensas y Energía 350g',
  'tyruss-full': 'Tyruss Full Nutrición Verde Clorofila Espirulina Oxigenación Celular y Desintoxicación Polvo 500g',

  // --- Alivio Muscular y Corporal Tópico ---
  'locion': 'Loción Termoactiva Masaje Corporal Efecto Calor Alivio de Tensión en Espalda Cuello y Músculos 120ml',
  'gel-frio-relajante': 'Gel Frío Efecto Criogénico Alivio de Piernas Cansadas Pesadez y Fatiga Muscular Mentol 60g',
  'aceite-relajante': 'Aceite Relajante Masaje Corporal Descontracturante Alivio de Tensión en Espalda y Cuello 60g',
  'hemocream': 'Hemocream Alivio Inmediato Confort y Desinflamación en Zonas Sensibles Cuidado Botánico Calmante Crema 30ml',

  // --- Belleza, Cabello y Rostro ---
  'eventone': 'Eventone Suero Aclarador Facial Tono Uniforme Atenuación de Manchas y Luminosidad Cutánea 30ml',
  'miskinne': 'Miskinne Crema Facial Hidratante Reparación de Barrera Cutánea Alivio de Rojeces y Suavidad Caléndula 60g',
  'hydrastrik': 'Hydrastrik Aceite Corporal Máxima Elasticidad Prevención de Estrías y Firmeza de la Piel 150ml',
  'golden-passion': 'Golden Passion Hidratante Corporal Efecto Glow Destello Dorado Resplandor de Lujo y Nutrición 90ml',
  'tonico-capilar': 'Tónico Capilar Estimulante Folicular Crecimiento Acelerado Control de Caída y Raíz Fuerte Romero 120ml',
  'tonico-capilar-folivance': 'Folivance Tónico Capilar Densidad Volumen Freno a la Caída de Cabello y Regeneración Dérmica 120g',
  'shampoo-intensivo': 'Shampoo Intensivo Limpieza Profunda Folicular Control Grasa y Estimulación de Crecimiento 450ml',
  'tufoff': 'Tufoff Caramelos Aliento Fresco Instantáneo Neutralizador de Olores Bucales y Confianza Natural 75g',

  // --- Cuidado Íntimo y Voluminizantes (Políticas Google Estrictas) ---
  'instant-virgin': 'Instant Virgin Gel Hidratante Íntimo Femenino Elasticidad Firmeza y Tonificación Natural 30ml',
  'derman': 'Derman Mascarilla Calmante Íntima Hidratación Protección Dérmica Suavidad y Confort Natural Crema 30ml',
  'akha': 'Akha Crema Reafirmante Corporal Tonicidad y Elasticidad Dérmica con Colágeno Hidrolizado Tarro 30ml',
  'mamooth': 'Mammoth Crema Corporal Reafirmante Efecto Densificador Elasticidad y Vigor para la Piel 30ml',
  'iprossmen': 'Iprossmen Salud de la Próstata Vigor Masculino y Bienestar con Saw Palmetto y Licopeno 500ml'
};

export const GOOGLE_TITLES_BY_PROMO_ID: Record<string, string> = {
  'combo-7': 'Combo 7 Rendimiento Físico Vigor Masculino Máximo y Energía Deportiva Titan Coffee Termoactiva Rtafull Mammoth Pack',
  'promo-1': 'Combo Piel Radiante Regeneración Celular Tono Luminoso y Firmeza Crema Miskinne 60g y Resveratrol 350g',
  'promo-2': 'Combo Belleza Eterna Cuidado Facial Antiedad y Regeneración Celular Suero Eventone 30ml y Resveratrol 350g',
  'promo-3': 'Combo Detox Digestivo Limpieza de Colon y Depuración de Hígado Coliplus 450g y RtaFull 500ml',
  'promo-4': 'Combo Control & Detox Desinflamar Vientre Metabolismo y Digestión Ligera RtaFull 500ml y Vinagre de Manzana 60 Cápsulas',
  'promo-5': 'Combo Protección Total Higiene Íntima Confort y Frescura Botánica Derman Mascarilla 30ml y Tufoff Caramelos 75g',
  'promo-6': 'Combo Alivio Muscular Terapia Frío y Calor para Espalda Cuello y Piernas Loción Termoactiva y Gel Frío',
  'promo-8': 'Combo Vitalidad y Limpieza Desintoxicación Orgánica y Energía Natural Tyruss Full 500g y RtaFull 500ml',
  'promo-9': 'Combo Inmunidad Dual Defensas y Desinflamación de Vientre Resvisfactor 700g y Coliplus 450g Envío Gratis'
};
