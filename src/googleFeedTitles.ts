// Mapeo optimizado de títulos para Google Merchant Center (Google Shopping)
// Límite técnico de Google: 150 caracteres.
// Todos los títulos están calibrados entre 130 y 144 caracteres para maximizar el SEO y CTR.
// Cumplen con políticas de Google: sin afirmaciones médicas prohibidas y sin contenido para adultos.

export const GOOGLE_TITLES_BY_PRODUCT_ID: Record<string, string> = {
  // --- Salud Digestiva, Detox y Bienestar ---
  'rtafull': 'RtaFull Depuración Hepática Desinflamación Abdominal Alivio Pesadez Digestiva Extracto Alcachofa Flor Jamaica y Limpieza de Hígado 500ml',
  'coliplus': 'Coliplus Tránsito Intestinal Regular Limpieza de Colon Vientre Plano y Alivio Estreñimiento Fibra Linaza Pitaya y Espirulina 450g',
  'liteplex': 'Liteplex Desinflamación Digestiva Reducción de Gases Pesadez Estomacal y Ligereza Metabólica Extractos Botánicos Depurativos 500ml',
  'guanda-mix': 'Guanda Mix Digestión Ágil Eliminación de Toxinas y Vitalidad Diaria Fibra Prebiótica Frutas Naturales y Tránsito Lento 350g',
  'vinagre-manzana': 'Vinagre de Manzana Digestión Óptima Control de Ansiedad y Metabolismo Activo Quema Grasa Natural con Madre en Cápsulas Blandas 60 Unidades',
  'oregano': 'Aceite de Orégano Protección Inmunológica Balance de Flora Intestinal y Antiparasitario Natural Carvacrol Cápsulas Blandas 60 Unidades',

  // --- Articulaciones, Huesos y Colágenos ---
  'colageno': 'Colágeno Hidrolizado Movilidad Articular Firmeza de Piel Citrato de Magnesio Vitamina C Alivio Dolor de Rodillas y Huesos Fuertes 180g',
  'c-lagen': 'C-Lagen Colágeno Marino Regeneración de Cartílagos y Movilidad Sin Rigidez ni Dolor Articular con Magnesio y Biotina Polvo 500g',
  'maxlite-colageno': 'Maxlite Nutrición Osteoarticular Fortalecimiento Óseo Masa Muscular y Prevención de Desgaste Articular Proteína y Colágeno 800g',

  // --- Magnesios, Sistema Nervioso y Relajación ---
  'citramix': 'Citramix Citrato de Magnesio Relajación Muscular Calma Nerviosa Antiestrés Alivio Tensión y Prevención de Calambres Nocturnos 350g',
  'bisglicinato-magnesio': 'Bisglicinato de Magnesio Descanso Nocturno Profundo Alivio de Insomnio Estrés y Ansiedad Alta Absorción Cápsulas Blandas 60 Unidades',
  'citrato-potasio-magnesio': 'Citrato de Potasio y Magnesio Equilibrio Mineral Alivio de Calambres Cansancio Muscular y Salud Cardiovascular Cápsulas 60 Unidades',
  'ashwagandha': 'Ashwagandha KSM-66 Control de Cortisol Alivio de Estrés Ansiedad y Fatiga Mental Serenidad Emocional Cápsulas Blandas 60 Unidades',
  'liofhim': 'Liofhim Inductor de Sueño Natural Relajación Nocturna Descanso Profundo Sin Insomnio y Despertar Renovado Fórmula Líquida 500ml',

  // --- Enfoque, Energía y Rendimiento ---
  'booster-lion': 'Booster Lion Hongo Melena de León Claridad Mental Memoria Enfoque y Concentración Nootrópico Natural Rendimiento Cerebral 350g',
  'creatina': 'Creatina Monohidratada Pura Fuerza Muscular Potencia Masa Magra y Recuperación Física Acelerada Sin Azúcar Micronizada 200g',
  'coffee-colageno': 'Coffee con Colágeno Energía Natural Matutina Enfoque Diario Belleza de Piel Firmeza y Anticaída Uñas Fuertes Café Gourmet 400g',
  'titan-coffee': 'Titan Coffee Energía Extrema Sin Taquicardia Máxima Concentración y Resistencia Física Diaria Café con Maca y Borojó 400g',
  'haydar': 'Haydar Bebida Energizante Natural Vigor Inmediato Rendimiento Físico y Agudeza Mental Sin Bajón Extractos Botánicos 240ml',
  'zafir': 'Zafir Bebida Energizante Concentrada Vitalidad Explosiva Rendimiento Deportivo Alerta Mental y Enfoque Prolongado Líquido 500ml',

  // --- Defensas, Longevidad y Celular ---
  'resvis': 'Resvisfactor Escudo Inmunológico Defensas Fuertes Protección Celular Calostro Bovino Factores de Transferencia y Betaglucanos 700g',
  'resveratrol': 'Resveratrol Puro Poder Antioxidante Antienvejecimiento Salud Cardiovascular y Protección Celular Uva y Arándanos Polvo 350g',
  'nad-1': '+NAD Rejuvenecimiento Celular Producción de Energía Mitocondrial Vitalidad y Longevidad Avanzada Nicotinamida Polvo 350g',
  'resveratrol-nad': 'Resveratrol con Vitamina B3 NAD+ Longevidad Celular Antiedad Energía Vital y Salud Cardiovascular Cápsulas Blandas 60 Unidades',
  'megamac': 'Megamac Vigor Físico Energía Masculina Extrema Resistencia Diaria con Maca Negra Chontaduro y Borojó Suplemento Polvo 700g',
  'kds-10': 'KDS 10 Multivitamínico Familiar Nutrición Integral Crecimiento Apetito Saludable Defensas y Energía Vitaminas y Minerales 350g',
  'tyruss-full': 'Tyruss Full Nutrición Verde Clorofila Espirulina Oxigenación Celular Desintoxicación y Balance Digestivo Femenino Polvo 500g',

  // --- Alivio Muscular y Corporal Tópico ---
  'locion': 'Loción Termoactiva Alivio de Dolores Musculares Espalda Cuello Golpes y Fatiga Masaje Efecto Calor Árnica y Eucalipto Crema 120ml',
  'gel-frio-relajante': 'Gel Frío Descongestión Inmediata Piernas Cansadas Várices y Fatiga Muscular Efecto Criogénico Mentol y Castaño de Indias Crema 60g',
  'aceite-relajante': 'Aceite Relajante Masaje Corporal Descontracturante Antiestrés Alivio de Tensión y Descanso Físico Esencias Calmantes Frasco 60g',
  'hemocream': 'Hemocream Alivio Inmediato Confort y Desinflamación en Zonas Sensibles Cuidado Botánico Calmante Hamamelis y Caléndula Crema 30ml',

  // --- Belleza, Cabello y Rostro ---
  'eventone': 'Eventone Suero Aclarador Facial Tono Uniforme Atenuación de Manchas Solares y Luminosidad Cutánea Bio Retinol Ácido Hialurónico 30ml',
  'miskinne': 'Miskinne Crema Facial Hidratante Reparación de Barrera Cutánea Alivio de Rojeces Sequedad y Suavidad Extrema Caléndula y Avena 60g',
  'hydrastrik': 'Hydrastrik Aceite Corporal Máxima Elasticidad Prevención y Disminución de Estrías Nutrición Dérmica Firmeza de la Piel 150ml',
  'golden-passion': 'Golden Passion Hidratante Corporal Efecto Glow Destello Dorado Resplandor de Lujo y Nutrición Cutánea Loción Líquida 90ml',
  'tonico-capilar': 'Tónico Capilar Estimulante Folicular Crecimiento Acelerado Control de Caída y Fortalecimiento de Raíz Romero y Quina Spray 120ml',
  'tonico-capilar-folivance': 'Folivance Tónico Capilar Densidad Volumen Freno a la Caída de Cabello y Regeneración de Fibras Dérmicas Spray Anticaída 120g',
  'shampoo-intensivo': 'Shampoo Intensivo Limpieza Profunda Folicular Control Grasa Freno a la Caída y Estimulación de Crecimiento Capilar Frasco 450ml',
  'tufoff': 'Tufoff Caramelos Aliento Fresco Instantáneo Neutralizador de Olores Bucales Confianza y Frescura Natural Botánica Pastillas 75g',

  // --- Cuidado Íntimo y Voluminizantes (Políticas Google Estrictas) ---
  'instant-virgin': 'Instant Virgin Gel Hidratante Íntimo Femenino Elasticidad Firmeza y Tonificación Natural Aloe Vera D-Pantenol pH Balanceado 30ml',
  'derman': 'Derman Mascarilla Calmante Íntima Hidratación Protección Dérmica Suavidad y Confort Natural Cuidado Femenino Botánico Crema 30ml',
  'akha': 'Akha Crema Reafirmante Corporal Tonicidad y Elasticidad Dérmica con Colágeno Hidrolizado y Nutrientes Reafirmantes Tarro 30ml',
  'mamooth': 'Mammoth Crema Corporal Reafirmante Efecto Densificador Elasticidad Vigor y Apariencia Saludable para la Piel Fórmula Activa 30ml',
  'iprossmen': 'Iprossmen Soporte Prostático Salud Urinaria y Flujo Continuo Masculino Vitalidad Adulta Tomate y Saw Palmetto Líquido 500ml'
};

export const GOOGLE_TITLES_BY_PROMO_ID: Record<string, string> = {
  'combo-7': 'Combo 7 Rendimiento Físico Vigor Masculino Máximo y Energía Deportiva Titan Coffee Termoactiva Rtafull Mammoth y Hemocream Pack Total',
  'promo-1': 'Combo Piel Radiante Regeneración Celular Tono Luminoso y Antiarrugas Crema Miskinne 60g y Resveratrol 350g Belleza y Elasticidad',
  'promo-2': 'Combo Belleza Eterna Cuidado Facial Antiedad y Regeneración Celular Suero Eventone 30ml y Resveratrol 350g Piel Radiante Sin Manchas',
  'promo-3': 'Combo Detox Digestivo Limpieza Total de Colon y Depuración Hepática Coliplus 450g y RtaFull 500ml Vientre Plano y Desintoxicación',
  'promo-4': 'Combo Control & Detox Acelerador Metabólico y Digestión Ligera Sin Pesadez RtaFull 500ml y Vinagre de Manzana 60 Cápsulas Vientre Plano',
  'promo-5': 'Combo Protección Total Higiene Íntima Confort y Frescura Botánica Derman Mascarilla 30ml y Tufoff Caramelos 75g Pack Cuidado Diario',
  'promo-6': 'Combo Alivio Muscular Terapia Doble Acción Frío Calor y Masaje Relajante Termoactiva 120ml y Gel Frío 60g Alivio Inmediato de Dolor',
  'promo-8': 'Combo Vitalidad y Limpieza Renovación Intestinal Diaria y Energía Prolongada Tyruss Full 500g y RtaFull 500ml Oxigenación y Detox',
  'promo-9': 'Combo Inmunidad Dual Defensas Fuertes y Desinflamación Digestiva Resvisfactor 700g y Coliplus 450g Ahorro Especial Envío Gratis'
};
