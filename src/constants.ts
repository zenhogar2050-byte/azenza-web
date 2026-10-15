export interface ComponentBenefit {
  name: string;
  benefit: string;
}

export interface Product {
  id: string;
  masterId: string;
  name: string;
  description: string;
  shortDescription: string;
  benefits: string[];
  image: string;
  basePrice: number;
  size?: string;
  componentBenefits?: ComponentBenefit[];
  category: string;
  promos: {
    id: string;
    label: string;
    units: number;
    price: number;
    badge?: string;
  }[];
  testimonials: {
    name: string;
    text: string;
    rating: number;
  }[];
  whyChoose?: {
    title: string;
    description: string;
  };
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string;
  components?: string;
  seoFaqs?: { q: string; a: string }[];
  longTailKeywords?: string[];
  invima?: string;
  presentation?: string;
  peso_adicional?: number;
  supportImages?: string[];
  videoUrl?: string;
  videoUrlMp4?: string;
  videoPoster?: string;
  googleCategory?: string;
  googleTitle?: string;
  googleDescription?: string;
  condition?: 'new';
}

export const CATEGORIES = [
  { 
    id: 'salud-bienestar', 
    name: 'Salud y Bienestar', 
    icon: 'Sparkles',
    image: '/assets/categories/salud-bienestar.webp',
    color: 'emerald',
    description: 'Encuentra el equilibrio perfecto para tu cuerpo con nuestra selección de suplementos naturales y vitaminas de alta calidad.',
    seoTitle: 'Salud y Bienestar: Suplementos Naturales para tu Equilibrio',
    seoDescription: 'Descubre nuestra selección de suplementos naturales para mejorar tu salud y bienestar. Productos originales con registro INVIMA. Envío gratis en Colombia.'
  },
  { 
    id: 'belleza-integral', 
    name: 'Belleza Integral', 
    icon: 'Heart',
    image: '/assets/categories/belleza-integral.webp',
    color: 'rose',
    description: 'Potencia tu belleza desde el interior con productos diseñados para nutrir tu piel, fortalecer tu cabello y revitalizar tu apariencia.',
    seoTitle: 'Belleza Integral: Nutrición para Piel, Cabello y Uñas | Azenza',
    seoDescription: 'Potencia tu belleza desde el interior. Colágenos, vitaminas y cuidados naturales para una apariencia radiante. Calidad certificada.'
  },
  { 
    id: 'salud-sexual', 
    name: 'Salud Sexual', 
    icon: 'Zap',
    image: '/assets/categories/salud-sexual.webp',
    color: 'purple',
    description: 'Mejora tu vitalidad y rendimiento con soluciones naturales diseñadas para tu bienestar íntimo y energía diaria.',
    seoTitle: 'Salud Sexual y Vitalidad: Potenciadores Naturales para Hombres y Mujeres',
    seoDescription: 'Mejora tu rendimiento y energía con nuestras soluciones naturales para la salud sexual. Discreción, efectividad y calidad garantizada.'
  },
  { 
    id: 'combos', 
    name: 'Combos', 
    icon: 'Sparkles',
    image: '/assets/categories/Combos.webp',
    color: 'emerald',
    description: 'Nuestra selección exclusiva de combos especialmente diseñados para multiplicar tu salud integral, belleza y vitalidad al mejor precio y con ahorro garantizado.',
    seoTitle: 'Combos y Ofertas Especiales de Salud y Bienestar | Azenza',
    seoDescription: 'Accede a los mejores combos de salud, desintoxicación, belleza y bienestar formulados por AZENZA con registro INVIMA y envío sin costo.'
  }
];

export type Category = typeof CATEGORIES[number];

export const PRODUCTS: Product[] = [
  {
    id: 'rtafull',
    masterId: '11323',
    name: 'RtaFull',
    category: 'salud-bienestar',
    shortDescription: 'Apoyo Hepático y Desintoxicación Digestiva Natural.',
    description: `La pesadez digestiva recurrente, el abotagamiento tras comer y la fatiga matutina son manifestaciones directas de una saturación en las vías de depuración hepática y renal. RtaFull actúa como un sistema botánico concentrado de drenaje y descongestión metabólica que combina extractos bioactivos de Alcachofa, Flor de Jamaica, Berenjena, Apio y Perejil para activar la síntesis biliar y optimizar la asimilación fisiológica de grasas complejas.

A mediano y largo plazo, su acción descongestionante alivia la distensión del abdomen, favorece la excreción de impurezas y líquidos retenidos, y reactiva el metabolismo energético endógeno, brindando una sensación duradera de ligereza física y desahogo estomacal. Avalado con Registro INVIMA oficial (PSA-000932-2017), su formato líquido de 500ml garantiza una biodisponibilidad y absorción inmediata sin agredir el tracto digestivo, asegurando un proceso de limpieza interna seguro, eficaz y de fácil consumo diario.

✔️ Depuración Total: Ayuda a la limpieza interna del hígado y los riñones de impurezas y grasas.
✔️ Adiós a la Inflamación: Reduce la pesadez estomacal y la sensación de hinchazón tras las comidas.
✔️ Alianza Herbal: El poder del apio y el perejil para una función renal óptima y defensas activas.`,
    seoTitle: 'Comprar Rtafull Original: Desintoxicación y Digestión',
    seoDescription: 'Adquiere Rtafull Original con Alcachofa y Berenjena. Digestión ligera y desintoxicación con Registro INVIMA. ¡Paga seguro en casa con Envío Gratis!',
    benefits: [
      "Ayuda a limpiar de forma natural el hígado graso y a desintoxicar los riñones cargados de toxinas acumuladas",
      "Alivia la pesadez estomacal, el dolor de cabeza y la boca amarga después de comer grasas",
      "Desinflama la barriga abultada y elimina los líquidos y desechos retenidos",
      "Fórmula líquida concentrada que actúa rápido sin irritar el estómago",
      "Ingredientes 100% naturales con Registro INVIMA oficial"
    ],
    image: '/assets/products/rtafull.webp',
    basePrice: 79900,
    size: '500ml',
    presentation: 'Líquido',
    invima: 'PSA-000932-2017',
    peso_adicional: 0,
    googleCategory: 'Health & Beauty > Health Care > Fitness & Nutrition',
    condition: 'new',
    supportImages: [
      '/assets/products/rtafull-apoyo-1.webp',
      '/assets/products/rtafull-apoyo-2.webp',
      '/assets/products/rtafull-apoyo-3.webp',
      '/assets/products/rtafull-apoyo-4.webp'
    ],
    keywords: 'limpieza hígado, hígado graso, digestión ligera, pesadez abdominal, boca amarga al despertar, depurar el organismo, alcachofa líquida, Rtafull original invima, Azenza, comprar rtafull colombia, pago contra entrega, envío gratis',
    components: 'Alcachofa, Flor de Jamaica, Berenjena, Apio y Perejil',
    componentBenefits: [
      {
        name: "Alcachofa y Berenjena",
        benefit: "Ayudan a procesar las grasas pesadas, limpian el hígado graso y quitan la boca amarga y la pesadez tras comer."
      },
      {
        name: "Apio y Perejil",
        benefit: "Descongestionan los riñones cargados de toxinas y eliminan los líquidos retenidos que inflaman piernas y abdomen."
      },
      {
        name: "Flor de Jamaica",
        benefit: "Limpia las vías urinarias, desinflama la barriga y ayuda a expulsar toxinas acumuladas por la orina."
      }
    ],
    longTailKeywords: [
      'mejor suplemento líquido para limpiar el hígado rápidamente',
      'cómo reducir la sensación de pesadez abdominal después de comer mucho',
      'solución natural para la depuración total del organismo',
      'beneficios de la alcachofa para un hígado saludable y feliz',
      'fórmula líquida de rápida absorción para digestión ligera',
      'bienestar integral y limpieza profunda con registro INVIMA',
      'comprar rtafull original colombia pago contra entrega envio gratis',
      'remedio para la boca amarga y pesadez estomacal tras comer grasas',
      'donde comprar rtafull con registro invima y pedir por whatsapp'
    ],
    seoFaqs: [
      { q: '¿Cómo debo consumir este producto para obtener mejores resultados?', a: 'Consumir de 1 a 2 copas dosificadoras (15ml - 30ml) al día.' },
      { q: '¿Limpia el hígado de forma natural?', a: 'Sí, sus extractos botánicos están seleccionados para apoyar la función hepática sin químicos agresivos y con calidad certificada.' },
      { q: '¿Sabe amargo?', a: 'Tiene un sabor herbal suave que es fácil de pasar y se absorbe muy rápido por ser una fórmula líquida.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 79900 },
      { id: '2u', label: '2 Unidades', units: 2, price: 119850 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 159800, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 239700, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Carlos Mendoza', text: 'Me siento mucho más ligero desde el primer día. Ayuda mucho con la pesadez.', rating: 5 },
      { name: 'Elena Rodríguez', text: 'Excelente para limpiar el cuerpo. Lo tomo periódicamente para sentirme renovada.', rating: 5 }
    ],
    whyChoose: {
      title: 'Energía y Ligereza Natural',
      description: 'En AZENZA impulsamos tu bienestar con extractos que el cuerpo absorbe al instante. Rtafull es la solución definitiva para quienes buscan una depuración efectiva sin recurrir a químicos pesados, respaldado por certificaciones de salud oficiales.'
    }
  },
  {
    id: 'coliplus',
    masterId: '11341',
    name: 'Coliplus',
    category: 'salud-bienestar',
    shortDescription: 'Renovación Intestinal y Equilibrio Digestivo Natural.',
    description: `El tránsito intestinal perezoso, las evacuaciones forzadas y la inflamación persistente del colon provocan pesadez abdominal diaria, malestar general y retención crónica de residuos biológicos. Coliplus funciona como un sistema regulador de motilidad y salud entérica que integra una matriz de fibras solubles de Chía y Linaza con el poder laxo-regulador de la Pitaya y el aporte nutricional de la Espirulina y la Flor de Jamaica, generando mucílagos que lubrican y normalizan el volumen del bolo fecal sin ocasionar cólicos ni dependencia.

A nivel de la mucosa intestinal, su consumo constante barre con suavidad las toxinas acumuladas, reduce la hinchazón del vientre y nutre el microbioma para consolidar un ritmo de evacuación diario, regular y fluido. Avalado con Registro INVIMA oficial (NSA-0012423-2022), es un polvo concentrado de 450g totalmente libre de azúcar añadida con refrescante sabor a manzana verde, que rinde hasta 60 días para devolverte una paz digestiva prolongada y un bienestar corporal integral.

✔️ Regularidad Garantizada: Mezcla de chía y pitaya que asegura un movimiento intestinal fluido y natural.
✔️ Colon Saludable: Limpieza profunda de residuos acumulados sin causar irritación ni cólicos.
✔️ Rendimiento Superior: Fórmula concentrada de 450g que rinde el doble que las fibras convencionales.`,
    seoTitle: 'Comprar Coliplus Original: Limpieza de Colon y Vientre',
    seoDescription: 'Compra Coliplus Original con Registro INVIMA. Depura tu colon y desinflama el vientre naturalmente. ¡Envío 100% Gratis y Pago Contra Entrega en Colombia!',
    benefits: [
      "Alivia el dolor del estreñimiento y ayuda a evacuar sin dolor ni esfuerzo",
      "Desinflama el colon irritado, reduciendo los cólicos y el exceso de gases molestos",
      "Disminuye la hinchazón abdominal para sentirte liviano y con el vientre plano",
      "Protege la flora intestinal con espirulina natural sin azúcar ni calorías",
      "Rinde hasta 60 días de digestión tranquila y alivio continuo"
    ],
    image: '/assets/products/coliplus.webp',
    basePrice: 75900,
    size: '450g',
    presentation: 'Polvo',
    invima: 'NSA-0012423-2022',
    peso_adicional: 0,
    googleCategory: 'Health & Beauty > Health Care > Fitness & Nutrition',
    condition: 'new',
    supportImages: [
      '/assets/products/coliplus-apoyo-1.webp',
      '/assets/products/coliplus-apoyo-2.webp',
      '/assets/products/coliplus-apoyo-3.webp',
      '/assets/products/coliplus-apoyo-4.webp'
    ],
    keywords: 'limpieza intestinal, colon inflamado, estreñimiento crónico, vientre abultado, fibras naturales, pitaya, linaza, espirulina, digestión fácil, Coliplus original invima, Azenza, comprar coliplus colombia, pago contra entrega, envío gratis',
    components: 'Linaza, Pitaya, Flor de Jamaica, Alcachofa, Chía y Espirulina',
    componentBenefits: [
      {
        name: "Linaza",
        benefit: "Aporta fibra suave que afloja las heces duras para que puedas evacuar a diario sin pujar ni sentir dolor."
      },
      {
        name: "Pitaya",
        benefit: "Activa el movimiento del intestino perezoso de forma natural, quitando el estreñimiento y la hinchazón."
      },
      {
        name: "Flor de Jamaica y Alcachofa",
        benefit: "Desinflaman el colon irritado, quitan los cólicos molestos y reducen los gases con mal olor."
      },
      {
        name: "Espirulina",
        benefit: "Nutre y repara la flora intestinal para que tu estómago tolere mejor los alimentos sin inflamarse."
      }
    ],
    longTailKeywords: [
      'mejor fibra natural para ir al baño regularmente sin dolor',
      'cómo limpiar el colon y desinflamar el vientre de forma segura',
      'suplemento de fibra rentable que rinde 2 meses',
      'beneficios de la pitaya y espirulina para el intestino perezoso',
      'fórmula para digestión fácil apta para diabéticos',
      'bienestar integral digestivo con registro INVIMA',
      'comprar coliplus original pago contra entrega envio gratis colombia',
      'como eliminar gases y pesadez estomacal con fibra de linaza y pitaya',
      'fibra natural para el estreñimiento pedir por whatsapp a domicilio'
    ],
    seoFaqs: [
      { q: '¿Cómo debo consumir este producto para obtener mejores resultados?', a: 'Mezclar 1 cucharada sopera en un vaso de agua o jugo.' },
      { q: '¿Coliplus ayuda a ir al baño?', a: 'Sí, su mezcla de fibras naturales está diseñada para regular el tránsito intestinal y facilitar las deposiciones de forma suave y efectiva.' },
      { q: '¿Es apto para diabéticos?', a: 'Absolutamente, Coliplus no contiene azúcar añadida y es totalmente seguro para personas que cuidan sus niveles de glucosa.' },
      { q: '¿Cuánto rinde un tarro?', a: 'Gracias a su fórmula concentrada, un solo tarro de Coliplus rinde hasta 2 meses de uso continuo para tu bienestar integral.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 75900 },
      { id: '2u', label: '2 Unidades', units: 2, price: 113850 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 151800, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 227700, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Marta L.', text: 'Sencillamente maravilloso. Por fin encontré una fibra que no me inflama y me ayuda a ir al baño con facilidad.', rating: 5 },
      { name: 'Jorge I.', text: 'Es muy rendidor y el sabor a manzana es delicioso. Mi digestión mejoró desde la primera semana.', rating: 5 }
    ],
    whyChoose: {
      title: 'Ligereza y regularidad garantizada',
      description: 'En AZENZA estamos comprometidos con tu salud, ofrecemos productos con registro INVIMA para tu paz intestinal. Coliplus combina Pitaya y Espirulina para una limpieza suave que rinde 2 meses. Recupera tu bienestar digestivo con una fórmula certificada y segura.'
    }
  },
  {
    id: 'colageno',
    masterId: '11312',
    name: 'Colágeno',
    category: 'salud-bienestar',
    shortDescription: 'Regeneración Estructural y Vitalidad Osteomuscular.',
    description: `El crujido articular recurrente, la rigidez matutina en rodillas o manos y la pérdida de elasticidad cutánea reflejan la disminución natural de colágeno endógeno y la sobrecarga neuromuscular por estrés. Nuestro Colágeno Hidrolizado + Citrato de Magnesio actúa como un sistema de nutrición estructural que sincroniza péptidos bioactivos de colágeno de fácil asimilación con la alta biodisponibilidad del Citrato de Magnesio para reactivar la regeneración de cartílagos, tendones y masa ósea desde el interior.

A mediano y largo plazo, su acción combinada protege las articulaciones frente al desgaste mecánico, disminuye espasmos o calambres musculares nocturnos y refuerza las capas profundas de la dermis, devolviendo flexibilidad al caminar, firmeza a la piel y mayor resistencia en cabello y uñas. Certificado con Registro INVIMA oficial (RSA-0026265-2023), su presentación en polvo fino de sabor totalmente neutro se disuelve de forma instantánea en café, jugos o agua sin dejar grumos, ofreciendo un soporte osteomuscular puro y seguro para toda la familia.

✔️ Movilidad y Fuerza: Nutre profundamente el sistema óseo y mejora la flexibilidad de las articulaciones.
✔️ Belleza desde el Interior: Hidrata la piel en sus capas más profundas, fortaleciendo también cabello y uñas.
✔️ Pureza Familiar: Sabor neutro y disolución rápida, apto para todas las edades y estilos de vida activos.`,
    seoTitle: 'Colágeno Hidrolizado + Magnesio: Regeneración Articular',
    seoDescription: 'Regenera articulaciones y devuelve la firmeza a tu piel con Colágeno Hidrolizado + Magnesio. Calidad INVIMA certificada. ¡Pídelo con Envío Gratis hoy!',
    benefits: [
      "Alivia el dolor, los crujidos y la rigidez en rodillas, cadera y manos al moverte",
      "Protege y frena el desgaste de cartílagos por el trabajo pesado o la edad",
      "Combate la flacidez en la piel y fortalece uñas quebradizas y cabello débil",
      "Ayuda a relajar los músculos adoloridos para dormir sin punzadas en las piernas",
      "Sabor neutro que se disuelve fácil en café, jugos o sopas sin cambiar el sabor"
    ],
    image: '/assets/products/Colagenocitratodemagnesio.webp',
    basePrice: 85000,
    size: '180g',
    presentation: 'Polvo',
    invima: 'RSA-0026265-2023',
    googleCategory: 'Health & Beauty > Health Care > Fitness & Nutrition',
    condition: 'new',
    supportImages: [
      '/assets/products/colageno-apoyo-1.webp',
      '/assets/products/colageno-apoyo-2.webp',
      '/assets/products/colageno-apoyo-3.webp',
      '/assets/products/colageno-apoyo-4.webp'
    ],
    keywords: 'colágeno natural, colágeno hidrolizado puro, sabor neutro, hidratación piel, cartílagos desgastados, colágeno familiar, citrato de magnesio, Azenza, comprar colágeno colombia, pago contra entrega, envío gratis',
    components: 'Colágeno Hidrolizado y Citrato de Magnesio',
    componentBenefits: [
      {
        name: "Colágeno Hidrolizado",
        benefit: "Lubrica y frena el desgaste en rodillas, cadera y manos, aliviando crujidos y dolores al agacharte o caminar."
      },
      {
        name: "Citrato de Magnesio",
        benefit: "Suelta los músculos adoloridos y contraídos, evitando calambres y fortaleciendo los huesos."
      }
    ],
    longTailKeywords: [
      'mejor colágeno sin sabor para mezclar con jugos y cafe',
      'cómo hidratar la piel desde adentro con colágeno natural',
      'suplemento de colágeno apto para niños y adultos mayores',
      'beneficios del colágeno puro para la elasticidad de la piel y rodillas',
      'fórmula neutra para nutrición familiar diaria',
      'bienestar integral y piel suave con registro INVIMA',
      'comprar colágeno hidrolizado con magnesio pago contra entrega colombia',
      'colágeno para articulaciones y dolor de rodilla pedir por whatsapp'
    ],
    seoFaqs: [
      { q: '¿Cómo debo consumir este producto para obtener mejores resultados?', a: 'Disolver 1 cucharada en agua o jugo una vez al día.' },
      { q: '¿Por qué combinar colágeno con magnesio?', a: 'El magnesio potencia la absorción del colágeno y ayuda a la relajación muscular, ofreciendo un bienestar integral.' },
      { q: '¿Qué beneficios tiene?', a: 'Nuestro Colágeno + Citrato de Magnesio combina la regeneración de tejidos con los beneficios musculares y nerviosos del magnesio.' },
      { q: '¿Quiénes pueden tomarlo?', a: 'Su fórmula pura es apta para toda la familia, desde niños hasta adultos mayores y mujeres lactantes, brindando bienestar integral.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 85000 },
      { id: '2u', label: '2 Unidades', units: 2, price: 127500 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 170000, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 255000, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Beatriz G.', text: 'Lo mezclo con el jugo de los niños y ni cuenta se dan. He notado mi piel mucho más suave.', rating: 5 },
      { name: 'Ricardo P.', text: 'Excelente calidad. No tiene ese sabor feo de otros colágenos y se disuelve muy fácil en el café.', rating: 5 }
    ],
    whyChoose: {
      title: 'Hidratación para toda la familia',
      description: 'En AZENZA estamos comprometidos con tu salud, ofrecemos productos con registro INVIMA de alta pureza. Nuestro Colágeno + Citrato de Magnesio es la mezcla ideal para fortalecer articulaciones, huesos y mejorar la función muscular. Calidad certificada para tu bienestar diario.'
    }
  },
  {
    id: 'resvis',
    masterId: '22967',
    name: 'Resvisfactor',
    category: 'salud-bienestar',
    shortDescription: 'Favorece Tu Sistema Inmunológico y Vitalidad Celular Avanzada.',
    description: `La susceptibilidad frecuente ante cambios de clima, las recaídas virales continuas y la lenta recuperación física frente a estados gripales evidencian un sistema inmune desprovisto de reservas defensivas. Resvisfactor opera como un sistema de modulación biológica avanzada que combina el valor inmunológico del Calostro Bovino con los betaglucanos del Shiitake y Ganoderma Lucidum, reforzado por un complejo multivitamínico total, Omega 3-6-9 y aminoácidos clave como L-Arginina y L-Glutamina para activar la respuesta celular frente a patógenos externos.

Su integración en la nutrición diaria estimula la maduración y vigilancia de los glóbulos blancos, protege el organismo del daño oxidativo crónico y acelera la recuperación de la vitalidad y tono muscular, blindando a toda la familia contra el desgaste ambiental. Avalado con Registro INVIMA oficial (RSAD05i27915), su fórmula en polvo de 700g aporta nutrientes limpios de asimilación progresiva, convirtiéndose en el escudo diario indispensable para mantener las defensas en su punto óptimo.

✔️ Fortalecimiento Inmune: Calostro y Shiitake que actúan como un blindaje natural contra agentes externos.
✔️ Recuperación y Vitalidad: Aminoácidos esenciales (L-Arginina, L-Glutamina) para una regeneración muscular óptima.
✔️ Nutrición Completa: Omega 3-6-9 y vitaminas esenciales para el equilibrio metabólico de toda la familia.`,
    seoTitle: 'Resvisfactor Original con Calostro Bovino: Defensas',
    seoDescription: 'Refuerza tu sistema inmune con Resvisfactor y Calostro Bovino. Escudo natural de defensas con Registro INVIMA. ¡Paga al recibir con Envío Gratis hoy!',
    benefits: [
      "Sube las defensas para no vivir con gripes, resfriados ni decaimiento constante",
      "Quita la sensación de cuerpo cortado, desaliento y falta de fuerza",
      "Acelera la recuperación del cuerpo cuando te sientes sin fuerzas o enfermo",
      "Protege a niños y adultos contra virus, bacterias y cambios bruscos de clima",
      "Fórmula con Omega 3-6-9 y 12 vitaminas en jarabe de fácil toma para toda la familia"
    ],
    image: '/assets/products/Resvisfactor.webp',
    basePrice: 89900,
    size: '700g',
    presentation: 'Polvo',
    invima: 'RSAD05i27915',
    googleCategory: 'Health & Beauty > Health Care > Fitness & Nutrition',
    condition: 'new',
    supportImages: [
      '/assets/products/resvis-apoyo-1.webp',
      '/assets/products/resvis-apoyo-2.webp',
      '/assets/products/resvis-apoyo-3.webp',
      '/assets/products/resvis-apoyo-4.webp'
    ],
    keywords: 'antioxidante, sistema inmune, defensas bajas, calostro bovino, hongos shiitake ganoderma, resveratrol, energía vital, vitalidad diaria, Resvis Factor original invima, Azenza, comprar resvisfactor colombia, pago contra entrega, envío gratis',
    components: 'Calostro Bovino, Shiitake, Quinua, Malta y Vitaminas',
    componentBenefits: [
      {
        name: "Calostro Bovino y Shiitake",
        benefit: "Suben las defensas al instante para blindar tu cuerpo contra gripes frecuentes, resfriados y virus del ambiente."
      },
      {
        name: "Quinua y Malta",
        benefit: "Quitan el decaimiento, la flojera y la falta de fuerza, recargando tu energía desde la primera toma."
      },
      {
        name: "Vitaminas Esenciales",
        benefit: "Evitan que te sientas agotado o con el cuerpo cortado tras días pesados o cambios de clima."
      }
    ],
    longTailKeywords: [
      'mejor antioxidante natural para proteger las células',
      'cómo fortalecer el sistema inmunológico con resveratrol',
      'suplemento para energía real y vitalidad cada mañana',
      'beneficios del resveratrol para el escudo de vida diario',
      'fórmula para defensas arriba y protección antioxidante',
      'bienestar integral y vitalidad con registro INVIMA',
      'comprar resvis factor original colombia pago contra entrega',
      'suplemento para las defensas bajas cansancio y gripes frecuentes',
      'resvisfactor precio oferta y pedir por whatsapp envio gratis'
    ],
    seoFaqs: [
      { q: '¿Cómo debo consumir este producto para obtener mejores resultados?', a: 'Disolver de 1 a 2 cucharadas (15g - 30g) en un vaso con agua o leche.' },
      { q: '¿Qué es el Resveratrol y cómo me beneficia?', a: 'Es un potente antioxidante que protege tus células y fortalece tu sistema inmune para un bienestar integral.' },
      { q: '¿Ayuda a verse más joven?', a: 'Sí, al combatir el daño oxidativo, apoya la salud de la piel y retrasa signos de envejecimiento celular.' },
      { q: '¿Es apto para adultos mayores?', a: 'Es ideal para adultos que buscan mantener su vitalidad y proteger su salud con calidad certificada.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 89900 },
      { id: '2u', label: '2 Unidades', units: 2, price: 134850 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 179800, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 269700, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Fernando S.', text: 'Me siento con mucha más vitalidad desde que lo tomo. Mis defensas están al 100%.', rating: 5 },
      { name: 'Gloria Estela', text: 'Es un excelente antioxidante, mi piel se ve mucho mejor y tengo más energía.', rating: 5 }
    ],
    whyChoose: {
      title: 'Tu Escudo de Vida Diario',
      description: 'En AZENZA impulsamos tu vitalidad con fórmulas que actúan desde el interior. Resvisfactor es la opción ideal para quienes buscan una protección natural superior, combinando calostro y hongos funcionales para mantener tus defensas siempre activas.'
    }
  },
  {
    id: 'booster-lion',
    masterId: '129326',
    name: 'Booster Lion',
    category: 'salud-bienestar',
    shortDescription: 'Soporte Cognitivo, Memoria y Enfoque Natural con Melena de León.',
    description: `La niebla cognitiva constante, la falta de concentración en jornadas exigentes y el agotamiento mental prematuro reducen la capacidad de retención, claridad y agilidad analítica en el día a día. Booster Lion funciona como un sistema nootrópico y neuroprotector biológico formulado sobre crema de coco con 300 mg de betaglucanos activos de Hericium Erinaceus (Melena de León), potenciado con proteína de suero de alta pureza y un complejo equilibrado de Vitaminas B, C, D, Calcio y Magnesio para reactivar el metabolismo neuronal.

A mediano y largo plazo, sus principios activos favorecen la neurogénesis y el factor de crecimiento nervioso, robustecen la memoria de trabajo y preservan la lucidez mental sin provocar ansiedad o taquicardia, aportando además soporte a la microbiota intestinal gracias a sus fibras prebióticas. Avalado con Registro INVIMA oficial (IRSA-0021928-2022), su fino polvo de sabor suave a vainilla es 100% libre de azúcares añadidos y se disuelve al instante, convirtiéndose en el combustible diario ideal para estudiar, crear y liderar con enfoque superior.

✔️ Salud Cognitiva: Favorece la memoria, concentración y activa tu agilidad mental ante jornadas de alta exigencia.
✔️ Inmunidad y Vigor: Premezcla de sales minerales y vitaminas esenciales que robustecen las defensas naturales y protegen contra el cansancio cerebral.
✔️ Formulación Limpia: 100% libre de azúcares añadidos y libre de impurezas para asegurar máxima asimilación y pureza cerebral.`,
    seoTitle: 'Comprar Booster Lion Melena de León: Enfoque y Memoria',
    seoDescription: 'Potencia tu enfoque y memoria con Booster Lion y hongo Melena de León. Fórmula certificada con Registro INVIMA. ¡Compra hoy con Pago Contra Entrega!',
    benefits: [
      "Combate los olvidos diarios, la mente nublada y la falta de concentración",
      "Aporta energía mental limpia para no sentir la cabeza pesada a media tarde",
      "Alivia el agotamiento cerebral tras largas jornadas de trabajo o estudio",
      "Protege tu digestión y tus defensas con el poder natural de la Melena de León",
      "Rico sabor a vainilla sin azúcar añadida, suave con el estómago"
    ],
    image: '/assets/products/booster-lion.webp',
    basePrice: 79900,
    size: '350g',
    presentation: 'Polvo',
    invima: 'IRSA-0021928-2022',
    googleCategory: 'Health & Beauty > Health Care > Fitness & Nutrition',
    condition: 'new',
    supportImages: [
      '/assets/products/booster-lion-apoyo-1.webp',
      '/assets/products/booster-lion-apoyo-2.webp',
      '/assets/products/booster-lion-apoyo-3.webp',
      '/assets/products/booster-lion-apoyo-4.webp'
    ],
    keywords: 'booster lion, boster lion, melena de leon polvo, hongo funcional hericium erinaceus, enfoque mental, memoria y concentración, mente nublada, salud cerebral, azenza, comprar colombia, pago contra entrega, envío gratis',
    components: 'Crema de coco, Proteína de suero lácteo, Betaglucanos de Hericium erinaceus (Melena de león), Sabor artificial a vainilla, Vitaminas y Minerales',
    componentBenefits: [
      {
        name: "Hericium Erinaceus (Melena de León)",
        benefit: "Quita la mente nublada y los olvidos diarios, devolviéndote la agilidad mental y la concentración para trabajar."
      },
      {
        name: "Crema de Coco y Suero Lácteo",
        benefit: "Aportan energía limpia que combate la flojera mental sin causar acidez ni pesadez estomacal."
      },
      {
        name: "Vitaminas B, C, D, Calcio y Magnesio",
        benefit: "Fortalecen las defensas y quitan el cansancio cerebral acumulado por el estrés diario."
      }
    ],
    longTailKeywords: [
      'mejor suplemento de melena de leon para enfoque y memoria',
      'cómo mejorar la concentracion y salud cerebral de forma natural',
      'alimento a base de crema de coco con hongos funcionales',
      'beneficios de booster lion para personas de alta exigencia mental',
      'polvo de melena de leon para vitalidad libre de picos de ansiedad',
      'suplemento para estudiantes y memoria con registro INVIMA',
      'comprar booster lion melena de leon colombia pago contra entrega',
      'hongo melena de leon original azenza pedir por whatsapp envio gratis'
    ],
    seoFaqs: [
      { q: '¿Cómo se debe consumir Booster Lion?', a: 'Se recomienda mezclar 1 y media cucharadas en agua, leche o bebida vegetal caliente o fría; disolver perfectamente mediante licuadora o agitando.' },
      { q: '¿Contiene alérgenos la formulación?', a: 'Contiene derivados lácteos provenientes de la proteína de suero, por lo que no es apto para personas con alergias severas a la leche.' },
      { q: '¿En cuánto tiempo se sienten los efectos cognitivos?', a: 'La asimilación de sus vitaminas y el aporte energético se perciben de manera inmediata, mientras que la óptima claridad mental progresa con el uso diario continuo.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 79900 },
      { id: '2u', label: '2 Unidades', units: 2, price: 119850 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 159800, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 239700, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Diana Marcela', text: 'Excelente para estudiar, me concentro por horas sin sentir cansancio ni dolor de cabeza.', rating: 5 },
      { name: 'Andrés Felipe', text: 'El sabor a vainilla es increíble y me ayuda muchísimo con la memoria en mi trabajo.', rating: 5 }
    ],
    whyChoose: {
      title: 'Enfoque Superior Sin Límites',
      description: 'En AZENZA impulsamos tu rendimiento diario. Booster Lion integra las bondades del hongo funcional Melena de León con un perfil vitamínico avanzado para blindar tu mente y vitalidad con el respaldo de un registro INVIMA certificado.'
    }
  },
  {
    id: 'locion',
    masterId: '11236',
    name: 'Termoactiva',
    category: 'salud-bienestar',
    shortDescription: 'Alivio Muscular Termoactivo y Recuperación Profunda.',
    description: `La tensión cervical persistente, la sobrecarga miofascial tras jornadas de esfuerzo físico o sedentarismo y la rigidez articular limitan la flexibilidad corporal y provocan un dolor que interrumpe el descanso diario. Nuestra Loción Termoactiva actúa como un tratamiento fitoterapéutico de hiperemia y relajación muscular profunda que sincroniza las propiedades rubefacientes y analgésicas de la Árnica, la Uña de Gato y la Chuchuguaza con la acción descongestionante del Castaño de Indias y la Caléndula.

Al masajear la zona afectada, induce una vasodilatación térmica inmediata que distiende las fibras musculares contraídas, estimula el drenaje de toxinas acumuladas y disminuye el umbral del dolor local, restituyendo la amplitud de movimiento y una sensación duradera de ligereza y confort articular. Avalada con Registro INVIMA oficial (NSOC74321-16CO), su textura fluida no grasa se absorbe velozmente sin manchar las prendas, ofreciendo un calor terapéutico reconfortante, seguro y de efecto inmediato para aliviar el cuerpo en cualquier momento.

✔️ Calor Reparador: Estimula la superficie cutánea para reconfortar y aliviar la zona rápidamente.
✔️ Alianza Botánica: Árnica y Chuchuguaza que trabajan en sinergia para reconfortar tras golpes y torceduras.
✔️ Bienestar Inmediato: Textura ligera de rápida acción que relaja tensiones y mejora la flexibilidad.`,
    seoTitle: 'Loción Termoactiva Original: Alivio Muscular y Articular',
    seoDescription: 'Loción Termoactiva con Árnica y Uña de Gato por solo $69.900 COP. Alivio muscular rápido con Registro INVIMA. ¡Pídela con Envío Gratis y Pago en Casa!',
    benefits: [
      "Calma en minutos el dolor de espalda, cintura, cuello tensionado y hombros",
      "Desinflama golpes, torceduras y alivia los calambres musculares intensos",
      "Efecto calor profundo que desatranca los músculos duros y contraídos",
      "Ideal para un masaje relajante y reconfortante después de un día agotador",
      "No mancha la ropa, no deja sensación grasosa y se absorbe al instante"
    ],
    image: '/assets/products/Termoactiva.webp',
    basePrice: 69900,
    size: '120ml',
    presentation: 'Crema / Gel',
    invima: 'NSOC74321-16CO',
    googleCategory: 'Health & Beauty > Health Care > Fitness & Nutrition',
    condition: 'new',
    supportImages: [
      '/assets/products/locion-apoyo-1.webp',
      '/assets/products/locion-apoyo-2.webp',
      '/assets/products/locion-apoyo-3.webp',
      '/assets/products/locion-apoyo-4.webp'
    ],
    keywords: 'loción termoactiva herbal, dolor muscular, dolor de espalda lumbago, dolor de rodillas, tensión cuello y hombros, contracturas, alivio rápido con calor, árnica y uña de gato, Azenza, comprar colombia, pago contra entrega, envío gratis',
    components: 'Árnica, Castaño de Indias, Caléndula, Uña de Gato y Chuchuguaza',
    componentBenefits: [
      {
        name: "Árnica y Uña de Gato",
        benefit: "Calman en minutos el dolor punzante de espalda, cintura trancada, hombros duros y rodillas adoloridas."
      },
      {
        name: "Castaño de Indias",
        benefit: "Alivia la pesadez en las piernas cansadas y desinflama golpes, torceduras y moretones."
      },
      {
        name: "Caléndula y Chuchuguaza",
        benefit: "Efecto calor reconfortante que desatranca los músculos tiesos y devuelve la movilidad sin dolor."
      }
    ],
    longTailKeywords: [
      'mejor loción con efecto calor para dolor agudo en la espalda y cintura',
      'cómo aliviar la tensión muscular en el cuello y hombros rápidamente',
      'loción termoactiva para rodillas y lumbago comprar pago contra entrega',
      'loción termoactiva para masajes descontracturantes y recuperación',
      'fórmula balanceada para alivio de contracturas musculares fuertes',
      'bienestar integral corporal con masajes de calor profundo y árnica',
      'cómo reducir la fatiga muscular y dolor articular en adultos mayores',
      'loción para dolores musculares con registro invima pedir por whatsapp'
    ],
    seoFaqs: [
      { q: '¿Cómo debo aplicar este producto para obtener mejores resultados?', a: 'Aplicar una cantidad suficiente y masajear la zona afectada.' },
      { q: '¿Para qué sirve el efecto calor de la loción?', a: 'El calor ayuda a dilatar los vasos sanguíneos, mejorando la circulación y relajando las fibras musculares tensionadas.' },
      { q: '¿Se puede usar antes de hacer ejercicio?', a: 'Sí, ayuda a preparar los músculos para la actividad, promoviendo un bienestar integral y flexibilidad.' },
      { q: '¿Mancha la ropa?', a: 'Nuestra fórmula balanceada es de rápida absorción y no deja residuos grasos ni manchas en las prendas.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 69900 },
      { id: '2u', label: '2 Unidades', units: 2, price: 104850 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 139800, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 209700, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Roberto J.', text: 'El calor que genera es perfecto para mis tensión en la espalda. Alivio inmediato.', rating: 5 },
      { name: 'Sandra Milena', text: 'La uso después de entrenar y mis músculos se recuperan mucho más rápido.', rating: 5 }
    ],
    whyChoose: {
      title: 'Alivio que reconforta tu cuerpo',
      description: 'En AZENZA estamos comprometidos con tu salud, ofrecemos productos con registro INVIMA e ingredientes botánicos seguros. Nuestra loción termoactiva es ideal para todos los que tienen tensión muscular generados por cansancio, agotamiento o que padecen de desgaste ocasional, respaldado por estándares de calidad.'
    }
  },
  // New products for Salud y Bienestar
  {
    id: 'c-lagen',
    masterId: '144660',
    name: 'C-Lagen',
    category: 'salud-bienestar',
    shortDescription: 'Regeneración Articular con Vitalidad Marina.',
    description: `El dolor punzante en rodillas al subir escaleras, el desgaste acelerado del cartílago en caderas u hombros y la rigidez matutina al apoyar los pies limitan tu agilidad e independencia cotidiana. C-Lagen actúa como un sistema de bio-reconstrucción osteoarticular que aprovecha la estructura de bajo peso molecular del Colágeno Hidrolizado de origen marino (con absorción hasta 1.5 veces superior frente a fuentes convencionales), potenciado con Citrato de Magnesio y un complejo multivitamínico y mineral para nutrir directamente los condrocitos.

A mediano y largo plazo, esta matriz oceánica estimula la producción de líquido sinovial, reconstituye la elasticidad y resistencia de ligamentos y tendones, y previene la desmineralización ósea, devolviéndote un caminar fluido, flexible y libre de fricción dolorosa. Certificado con Registro INVIMA oficial (RSA-0032379-2024), su presentación en polvo fino de 500g se disuelve instantáneamente en agua o jugos sin dejar sedimentos, aportando una biodisponibilidad articular pura, segura y efectiva a cualquier edad.

✔️ Poder Oceánico: Colágeno marino de alta biodisponibilidad para una reconstrucción articular real.
✔️ Huesos Macizos: Minerales esenciales que previenen la desmineralización y fortalecen la densidad ósea.
✔️ Movilidad sin Límites: Nutre profundamente ligamentos y tendones para un caminar fluido y sin dolor.`,
    seoTitle: 'C-Lagen Colágeno Marino Original: Salud de Rodillas',
    seoDescription: 'Cuida tus rodillas y articulaciones con C-Lagen Colágeno Marino. Máxima pureza y absorción con Registro INVIMA. ¡Paga en casa con Envío Gratis nacional!',
    benefits: [
      "Alivia las punzadas y el dolor en rodillas al subir escaleras o agacharse",
      "Ayuda a regenerar y lubricar los cartílagos gastados de rodillas, cuello y cadera",
      "Quita la sensación de articulaciones trabadas o tiesas al levantarse de la cama",
      "Fortalece huesos frágiles y tendones para que puedas caminar sin dolor",
      "Fórmula con magnesio marino que se disuelve rápido con delicioso sabor"
    ],
    image: '/assets/products/C-lagen.webp',
    basePrice: 93500,
    size: '500g',
    presentation: 'Polvo',
    invima: 'RSA-0032379-2024',
    googleCategory: 'Health & Beauty > Health Care > Fitness & Nutrition',
    condition: 'new',
    supportImages: [
      '/assets/products/c-lagen-apoyo-1.webp',
      '/assets/products/c-lagen-apoyo-2.webp',
      '/assets/products/c-lagen-apoyo-3.webp',
      '/assets/products/c-lagen-apoyo-4.webp'
    ],
    keywords: 'colágeno marino, colágeno marino hidrolizado, molestias articulares, dolor de rodillas, salud articular, huesos fuertes, magnesio, movilidad sin rigidez, C-Lagen original invima, Azenza, comprar colombia, pago contra entrega, envío gratis',
    components: 'Colágeno Marino, Citrato de Magnesio, Vitaminas y Minerales',
    componentBenefits: [
      {
        name: "Colágeno Marino Puro",
        benefit: "Regenera el cartílago gastado de las rodillas para subir y bajar escaleras sin pinchazos ni crujidos."
      },
      {
        name: "Citrato de Magnesio, Vitaminas y Minerales",
        benefit: "Quitan la rigidez en las articulaciones al levantarte de la cama y calman los dolores óseos."
      }
    ],
    longTailKeywords: [
      'mejor colágeno marino para fortalecer las rodillas',
      'cómo mejorar la movilidad articular sin rigidez',
      'suplemento para huesos macizos y sanos con magnesio',
      'beneficios del colágeno de mar para las articulaciones',
      'fórmula para caminar sin molestias ni desgaste',
      'bienestar integral y nutrición ósea con registro INVIMA',
      'comprar c-lagen colágeno marino colombia pago contra entrega',
      'tratamiento para el dolor articular en adultos mayores envio gratis',
      'pedir colágeno marino c-lagen azenza por whatsapp a domicilio'
    ],
    seoFaqs: [
      { q: '¿Cómo debo consumir este producto para obtener mejores resultados?', a: 'Disolver 1 cucharada (15g) en agua o jugo de frutas.' },
      { q: '¿Qué tipo de colágeno contiene C-Lagen?', a: 'Contiene colágeno hidrolizado de alta pureza, optimizado para una absorción máxima en piel y articulaciones.' },
      { q: '¿Ayuda a reducir las líneas de expresión?', a: 'Sí, al nutrir las capas profundas de la piel, promueve la firmeza y un bienestar integral estético.' },
      { q: '¿Cuánto tiempo debo tomarlo?', a: 'Para resultados óptimos en vitalidad y belleza, se recomienda un consumo constante de al menos 3 meses.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 93500 },
      { id: '2u', label: '2 Unidades', units: 2, price: 140250 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 187000, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 280500, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Lucía Méndez', text: 'Mi piel se siente mucho más firme y las líneas de expresión han disminuido. ¡Me encanta!', rating: 5 },
      { name: 'Carlos Ruiz', text: 'Lo tomo para mis articulaciones y he sentido una gran mejoría en la movilidad.', rating: 5 },
      { name: 'Mariana Soler', text: 'Excelente calidad, se nota que es colágeno puro. Muy recomendado.', rating: 5 }
    ],
    whyChoose: {
      title: 'Nutrición celular de alta pureza',
      description: 'En AZENZA estamos comprometidos con tu salud, ofrecemos productos con registro INVIMA. C-Lagen nutre tu piel profundamente con una fórmula balanceada enriquecida con ácido hialurónico para resultados seguros y efectivos.'
    }
  },
  {
    id: 'citramix',
    masterId: '129312',
    name: 'Citramix',
    category: 'salud-bienestar',
    shortDescription: 'Equilibrio Neuro-Muscular y Relax Profundo.',
    description: `El estrés crónico, los tics nerviosos involuntarios, el insomnio intermitente y la rigidez muscular acumulada son el resultado directo de la deuda de magnesio que impone el ritmo de vida actual y la alimentación moderna. Citramix actúa como un sistema maestro de equilibrio neuro-muscular que sincroniza la absorción complementaria del Citrato y el Bisglicinato de Magnesio de alta biodisponibilidad con Inulina prebiótica y un complejo vitamínico revitalizante, asegurando una asimilación celular eficiente sin generar intolerancia digestiva.

A mediano y largo plazo, este aporte sostenido desactiva la excitabilidad neuromuscular excesiva, promueve un descanso nocturno profundo y verdaderamente reparador, y apoya el equilibrio cardiovascular y metabólico, transformando tus mañanas en jornadas de serenidad mental, ligereza física y vitalidad renovada. Avalado con Registro INVIMA oficial (SD2023-0004812), su fino polvo de 350g con refrescante sabor a durazno se disuelve al instante, convirtiéndose en el ritual nocturno perfecto para liberar tensiones y restablecer tu armonía corporal.

✔️ Triple Acción de Magnesio: Optimiza la relajación muscular y combate el estrés crónico de raíz.
✔️ Adiós a los Calambres: Previene espasmos y rigidez, mejorando la flexibilidad de todo el cuerpo.
✔️ Bienestar Digestivo: La inulina incorporada promueve una digestión ligera y un vientre desinflamado.`,
    seoTitle: 'Citramix Citrato de Magnesio: Relax Muscular y Calma',
    seoDescription: 'Combate el estrés y relaja tus músculos con Citramix Citrato de Magnesio sabor durazno. Registro INVIMA garantizado. ¡Envío Gratis y Pago Contra Entrega!',
    benefits: [
      "Elimina los calambres dolorosos en piernas y pies que te despiertan de noche",
      "Suelta la tensión acumulada en espalda, cuello y hombros por el estrés diario",
      "Ayuda a conciliar el sueño profundo para despertar descansado y sin pesadez",
      "Alivia la digestión lenta y desinflama el vientre para sentirte ligero",
      "Delicioso sabor a durazno para tomar en agua fría y relajarte antes de dormir"
    ],
    image: '/assets/products/Citramix.webp',
    basePrice: 79900,
    size: '350g',
    invima: 'SD2023-0004812',
    googleCategory: 'Health & Beauty > Health Care > Fitness & Nutrition',
    condition: 'new',
    supportImages: [
      '/assets/products/citramix-apoyo-1.webp',
      '/assets/products/citramix-apoyo-2.webp',
      '/assets/products/citramix-apoyo-3.webp',
      '/assets/products/citramix-apoyo-4.webp'
    ],
    keywords: 'citrato de magnesio puro, bisglicinato de magnesio, calambres en las piernas, estrés y ansiedad, digestión ligera, relajación muscular, dormir profundo, paz mental, Citramix original invima, Azenza, comprar colombia, pago contra entrega, envío gratis',
    components: 'Citrato de Magnesio, Bisglicinato de Magnesio y Vitaminas',
    componentBenefits: [
      {
        name: "Citrato y Bisglicinato de Magnesio",
        benefit: "Eliminan de raíz los calambres en piernas y pies, sueltan el cuello tensionado y te ayudan a dormir profundo toda la noche."
      },
      {
        name: "Vitaminas e Inulina",
        benefit: "Desinflaman la barriga hinchada, aceleran la digestión pesada y quitan el cansancio desde la mañana."
      }
    ],
    longTailKeywords: [
      'mejor mezcla de magnesio para evitar calambres musculares nocturnos',
      'cómo mantener la calma reducir el estrés y dormir profundo',
      'suplemento para digestión ligera sin pesadez abdominal',
      'beneficios del citrato y bisglicinato de magnesio para los músculos',
      'fórmula para relajar los nervios y descansar de forma natural',
      'bienestar integral y tranquilidad con registro INVIMA',
      'comprar citramix citrato de magnesio pago contra entrega colombia',
      'remedio para los calambres en piernas y tensión muscular envio gratis',
      'pedir citramix azenza magnesio puro por whatsapp a domicilio'
    ],
    seoFaqs: [
      { q: '¿Cómo debo consumir este producto para obtener mejores resultados?', a: 'Mezclar 1 cucharada (15g) en un vaso de agua, ideal en la noche.' },
      { q: '¿Citramix reemplaza el jugo de naranja diario?', a: 'Es una opción mucho más concentrada en vitamina C y antioxidantes, sin los azúcares añadidos, para un bienestar integral.' },
      { q: '¿Me da energía para el trabajo?', a: 'Sí, su mezcla revitalizante ayuda a combatir la fatiga de forma natural y constante.' },
      { q: '¿Es apto para niños?', a: 'Es una excelente fuente de vitaminas para toda la familia, siempre bajo supervisión y calidad certificada.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 79900 },
      { id: '2u', label: '2 Unidades', units: 2, price: 119850 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 159800, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 239700, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Camila V.', text: 'Me encanta el sabor cítrico y me da mucha energía para empezar el día.', rating: 5 },
      { name: 'Andrés F.', text: 'Mis defensas han mejorado mucho, ya no me enfermo tan seguido.', rating: 5 }
    ],
    whyChoose: {
      title: 'Vitalidad cítrica garantizada',
      description: 'En AZENZA estamos comprometidos con tu salud, ofrecemos productos con registro INVIMA de origen natural. Citramix es un polvo multivitamínico diseñado para una absorción superior de vitamina C y el bienestar integral de toda tu familia.'
    }
  },
  {
    id: 'coffee-colageno',
    masterId: '23012',
    name: 'Coffee + Colágeno',
    category: 'salud-bienestar',
    shortDescription: 'Ritual de Belleza y Vitalidad Diaria Especializada.',
    description: `El café matutino tradicional suele provocar acidez digestiva, picos breves de nerviosismo y descuidos en la reposición proteica necesaria para frenar la caída del cabello y la pérdida de turgencia en la piel. Coffee + Colágeno actúa como un alimento funcional estructurante que fusiona extracto de café soluble premium con péptidos bioactivos de Colágeno Hidrolizado sobre una matriz cremosa de coco rica en triglicéridos de cadena media (MCT) y 12 vitaminas esenciales, proporcionando un combustible limpio que no irrita la mucosa gástrica.

A mediano y largo plazo, su aporte diario promueve la síntesis de queratina en folículos y uñas, refuerza la densidad del colágeno dérmico y sostiene la agudeza mental sin bajones de energía a mitad de jornada, protegiendo además la salud osteoarticular. Avalado con Registro INVIMA oficial (RSA-0010130-2020), su polvo soluble de 400g está 100% libre de lácteos y grasas trans, ofreciendo una textura sedosa gourmet de rápida disolución para nutrir tu estética y vigor desde la primera taza.

✔️ Belleza Estructural: Bio-péptidos de colágeno que restauran la firmeza de la piel y fuerza capilar.
✔️ Energía con Propósito: Café funcional con crema de coco que activa tu mente sin irritar el estómago.
✔️ Blindaje Vitamínico: Carga completa de vitaminas A, C, D, E y complejo B para defensas invencibles.`,
    seoTitle: 'Coffee + Colágeno con Coco: Belleza, Piel Firme y Vigor',
    seoDescription: 'Disfruta un café funcional con Colágeno y Crema de Coco para piel radiante y energía diaria. Registro INVIMA. ¡Pídelo online con Pago Contra Entrega!',
    benefits: [
      "Te llena de energía por la mañana sin provocarte acidez, ardor ni taquicardia",
      "Frena la caída del cabello y fortalece las uñas quebradizas desde la raíz",
      "Protege tus rodillas y articulaciones del dolor mientras tomas tu café favorito",
      "Mejora la elasticidad de la piel, disminuyendo la resequedad y las arrugas",
      "Sabor cremoso tipo capuchino con leche de coco y libre de azúcar añadida"
    ],
    image: '/assets/products/coffe-colageno.webp',
    basePrice: 75900,
    size: '400g',
    invima: 'RSA-0010130-2020',
    googleCategory: 'Health & Beauty > Health Care > Fitness & Nutrition',
    condition: 'new',
    supportImages: [
      '/assets/products/cafe-colageno-apoyo-1.webp',
      '/assets/products/cafe-colageno-apoyo-2.webp',
      '/assets/products/cafe-colageno-apoyo-3.webp',
      '/assets/products/cafe-colageno-apoyo-4.webp'
    ],
    keywords: 'café con colágeno, colágeno hidrolizado, crema de coco, café funcional, piel firme, fortalecer cabello, uñas fuertes, café gourmet saludable, Coffee Colágeno, Azenza, comprar colombia, pago contra entrega, envío gratis',
    components: 'Crema de Coco, Colágeno Hidrolizado y Café Soluble',
    componentBenefits: [
      {
        name: "Café Soluble Premium",
        benefit: "Te despierta y da energía mañanera sin causarte agruras, acidez estomacal ni taquicardia."
      },
      {
        name: "Crema de Coco",
        benefit: "Grasas saludables que sacian el hambre, protegen el estómago y dan energía duradera."
      },
      {
        name: "Colágeno Hidrolizado",
        benefit: "Frena la caída del cabello, fortalece uñas quebradizas y protege las rodillas del dolor articular."
      }
    ],
    longTailKeywords: [
      'mejor café con colágeno para fortalecer cabello y uñas',
      'cómo cuidar tu belleza mientras tomas el café matutino',
      'suplemento de café con crema de coco para evitar gases',
      'beneficios de las 12 vitaminas para la vitalidad diaria',
      'fórmula antiedad para disfrutar en el desayuno sin acidez',
      'bienestar integral y defensas fuertes con registro INVIMA',
      'comprar café con colágeno y crema de coco pago contra entrega colombia',
      'pedir coffee colágeno azenza por whatsapp a domicilio'
    ],
    seoFaqs: [
      { q: '¿Cómo debo consumir este producto para obtener mejores resultados?', a: 'Disolver 1 cucharada (20g) en una taza de agua o leche caliente.' },
      { q: '¿Sabe a café normal?', a: 'Sí, mantiene el delicioso sabor del café premium, pero con el beneficio añadido del colágeno para tu bienestar integral.' },
      { q: '¿Ayuda a fortalecer el cabello?', a: 'El colágeno es fundamental para la salud capilar, por lo que notarás mejoras en fuerza y brillo.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 75900 },
      { id: '2u', label: '2 Unidades', units: 2, price: 113850 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 151800, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 227700, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Juan Pablo', text: 'Es el mejor ritual para empezar el día. Sabe a café premium y cuida mi piel.', rating: 5 },
      { name: 'Diana Marcela', text: 'Me encanta la idea de tomar colágeno en mi café diario. Muy práctico y delicioso.', rating: 5 }
    ],
    whyChoose: {
      title: 'Belleza natural en cada taza',
      description: 'En AZENZA estamos comprometidos con tu salud, ofrecemos productos con registro INVIMA de grado premium. Coffee + Colágeno fusiona el café de alta calidad con colágeno hidrolizado para tu vitalidad diaria con calidad certificada.'
    }
  },
  {
    id: 'creatina',
    masterId: '164776',
    name: 'Creatina 100%',
    category: 'salud-bienestar',
    shortDescription: 'Poder Muscular y Agudeza Mental Superior.',
    description: `El estancamiento en el desarrollo de fuerza, la fatiga precoz en series de alta exigencia y el desgaste cognitivo durante jornadas de concentración prolongada reflejan un vaciamiento en los depósitos celulares de fosfocreatina. Nuestra Creatina 100% Pura Monohidratada de grado farmacéutico USP actúa como un donador bioenergético inmediato para la resíntesis rápida de ATP en mitocondrias musculares y neuronales, optimizando la capacidad contráctil y la hidratación osmótica intracelular sin provocar retención de líquidos extracelular.

A mediano y largo plazo, su consumo continuado acelera la recuperación de fibras tras el esfuerzo físico intenso, inhibe el catabolismo celular y preserva la masa magra en etapas de sobrecarga o envejecimiento, mientras nutre la memoria operativa y la velocidad de procesamiento mental. Respaldada con Registro INVIMA oficial (SD2014-0003204), su polvo micronizado de 200g sin sabor, carbohidratos ni aditivos de relleno se disuelve instantáneamente en cualquier bebida, garantizando máxima biodisponibilidad y pureza certificada para tu rendimiento integral.

✔️ Fuerza Real: Potencia la contracción muscular y el volumen celular para una estructura física sólida.
✔️ Enfoque Cerebral: Nutre las neuronas y reduce la fatiga mental, mejorando la concentración sostenida.
✔️ Grado Farmacéutico: Pureza total bajo estándares USP, asegurando un suplemento limpio y ultra-seguro.`,
    seoTitle: 'Creatina 100% Pura Monohidratada: Fuerza y Músculo',
    seoDescription: 'Aumenta tu masa muscular, fuerza y resistencia con Creatina 100% Monohidratada pura. Máximo rendimiento con Registro INVIMA y Envío Gratis a Colombia.',
    benefits: [
      "Aumenta la fuerza física y evita la pérdida de masa muscular por los años",
      "Reduce el dolor muscular y el cansancio extremo tras el trabajo o ejercicio",
      "Despeja la mente y combate el agotamiento físico que te frena a mitad del día",
      "Creatina monohidratada 100% pura, sin químicos de relleno ni azúcares",
      "Fácil de mezclar con agua o jugo, no cae pesada y no daña el estómago"
    ],
    image: '/assets/products/creatina100.webp',
    basePrice: 105000,
    size: '200g',
    invima: 'SD2014-0003204',
    googleCategory: 'Health & Beauty > Health Care > Fitness & Nutrition',
    condition: 'new',
    supportImages: [
      '/assets/products/creatina-apoyo-1.webp',
      '/assets/products/creatina-apoyo-2.webp',
      '/assets/products/creatina-apoyo-3.webp',
      '/assets/products/creatina-apoyo-4.webp'
    ],
    keywords: 'creatina monohidratada 100 pura, creatina micronizada usp, fuerza muscular, masa muscular magra, rendimiento deportivo, memoria cerebral, creatina sin sabor, Azenza, comprar creatina colombia, pago contra entrega, envío gratis',
    components: 'Creatina monohidratada 100% pura',
    componentBenefits: [
      {
        name: "Creatina Monohidratada Pura",
        benefit: "Aumenta la fuerza real en tus brazos y piernas, previene la pérdida de músculo y quita la fatiga extrema."
      }
    ],
    longTailKeywords: [
      'mejor creatina pura para ganar fuerza en brazos y piernas',
      'cómo mantener la mente despierta y concentrada naturalmente',
      'suplemento de creatina para vitalidad en adultos mayores',
      'beneficios de la creatina pura para el cerebro y músculos',
      'fórmula 100% pura sin rellenos ni sabores artificiales',
      'bienestar integral y fuerza real con calidad farmacéutica USP',
      'comprar creatina monohidratada original colombia pago contra entrega',
      'creatina 100 pura sin sabor registro invima pedir por whatsapp'
    ],
    seoFaqs: [
      { q: '¿Cómo debo consumir este producto para obtener mejores resultados?', a: 'Disolver 1 medida (5g) en agua antes o después de entrenar.' },
      { q: '¿La creatina 100% causa retención de líquidos?', a: 'La creatina aumenta la hidratación intracelular, lo cual es beneficioso para el músculo y el bienestar integral.' },
      { q: '¿Necesito fase de carga?', a: 'No es estrictamente necesaria; una dosis constante diaria asegura resultados con nuestra fórmula balanceada.' },
      { q: '¿Es segura para los riñones?', a: 'En personas que buscan bienestar y bajo las dosis recomendadas, es un suplemento con calidad certificada y muy seguro.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 105000 },
      { id: '2u', label: '2 Unidades', units: 2, price: 157500 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 210000, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 315000, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Mateo Holguín', text: 'He aumentado mi fuerza en el gimnasio notablemente. Muy buena pureza.', rating: 5 },
      { name: 'Santiago Arias', text: 'Excelente para la recuperación muscular. No me siento tan agotado después de entrenar.', rating: 5 }
    ],
    whyChoose: {
      title: 'Potencia muscular segura',
      description: 'En AZENZA estamos comprometidos con tu salud, ofrecemos productos con registro INVIMA de alta pureza. Nuestra Creatina 100% monohidratada asegura un suplemento libre de sustancias prohibidas y optimizado para tu rendimiento físico.'
    }
  },
  {
    id: 'iprossmen',
    masterId: '11299',
    name: 'Iprossmen',
    category: 'salud-bienestar',
    shortDescription: 'Salud Masculina Integral y Apoyo al Bienestar Urinario.',
    description: `La micción entrecortada, la necesidad recurrente de levantarse durante la noche y la sensación de congestión o pesadez en la zona pélvica afectan profundamente el descanso, la serenidad y el vigor del hombre a partir de los 40 años. Iprossmen funciona como un sistema fitoterapéutico de soporte prostático y urológico que combina la acción antioxidante concentrada del Licopeno de Tomate de árbol y los polifenoles del Té Verde y Arándanos rojos con las propiedades desinflamatorias del Jengibre, Mandarina, Ciruela y Vitamina E pura.

A mediano y largo plazo, esta sinergia botánica modula la respuesta inflamatoria local en los tejidos prostáticos, protege el tracto urinario frente al daño celular oxidativo y facilita un vaciado vesical continuo y sin molestias, restituyendo la tranquilidad y el bienestar hormonal masculino. Avalado con Registro INVIMA oficial (SD2015-0003504), su formato líquido de 500ml garantiza una rápida biodisponibilidad y asimilación gástrica, convirtiéndose en el hábito preventivo diario indispensable para sostener una vitalidad masculina plena.

✔️ Bienestar Pélvico: Ayuda a desinflamar y proteger la salud de la próstata de forma preventiva.
✔️ Vigor Natural: Extractos frutales que aportan antioxidantes clave para la vitalidad masculina.
✔️ Protección Celular: Rico en vitamina E y polifenoles que combaten el daño oxidativo sistémico.`,
    seoTitle: 'Iprossmen Original: Salud Prostática y Bienestar del Hombre',
    seoDescription: 'Protege tu próstata y mejora el flujo urinario con Iprossmen fórmula botánica. Bienestar masculino con Registro INVIMA. ¡Paga al recibir en casa!',
    benefits: [
      "Disminuye las idas urgentes al baño de noche para que puedas dormir de corrido",
      "Alivia el ardor, el dolor y el goteo molesto al momento de orinar",
      "Desinflama la próstata y quita la pesadez constante en la zona baja del vientre",
      "Devuelve el vigor, la energía y la tranquilidad masculina en el día a día",
      "Jarabe botánico natural de rápida absorción con Registro INVIMA oficial"
    ],
    image: '/assets/products/Iprossmen.webp',
    basePrice: 79900,
    size: '500ml',
    invima: 'SD2015-0003504',
    googleCategory: 'Health & Beauty > Personal Care',
    condition: 'new',
    supportImages: [
      '/assets/products/iprossmen-apoyo-1.webp',
      '/assets/products/iprossmen-apoyo-2.webp',
      '/assets/products/iprossmen-apoyo-3.webp',
      '/assets/products/iprossmen-apoyo-4.webp'
    ],
    keywords: 'salud masculina, próstata inflamada, flujo urinario, tomate de árbol y arándano, ganas de orinar de noche, bienestar hombre, Iprossmen original invima, Azenza, comprar colombia, pago contra entrega, envío gratis',
    components: 'Té Verde, Tomate de Árbol, Arándanos, Mandarina, Jengibre, Ciruela y Vitamina E',
    componentBenefits: [
      {
        name: "Té Verde, Tomate de Árbol y Arándanos",
        benefit: "Desinflaman la próstata agrandada, aliviando el dolor pélvico y las ganas urgentes de orinar a cada rato."
      },
      {
        name: "Mandarina, Jengibre y Ciruela",
        benefit: "Facilitan el flujo urinario continuo sin goteos molestos ni ardor al ir al baño."
      },
      {
        name: "Vitamina E",
        benefit: "Protege los tejidos masculinos del desgaste y devuelve la tranquilidad para dormir la noche entera."
      }
    ],
    longTailKeywords: [
      'mejor suplemento natural para desinflamar la próstata y orinar sin dolor',
      'cómo cuidar la salud masculina de forma natural y segura',
      'suplemento de tomate de árbol para el bienestar del hombre',
      'beneficios del saw palmetto para la prevención masculina',
      'fórmula para sentirse vital y con energía todo el día',
      'bienestar integral y salud del hombre con registro INVIMA',
      'iprossmen jarabe prostático precio colombia pago contra entrega',
      'comprar iprossmen original con registro invima y pedir por whatsapp'
    ],
    seoFaqs: [
      { q: '¿Cómo debo consumir este producto para obtener mejores resultados?', a: 'Tomar de 1 a 2 cucharadas (15ml - 30ml) al día.' },
      { q: '¿Iprossmen ayuda con la salud de la zona pélvica?', a: 'Sí, su fórmula balanceada está diseñada para apoyar el bienestar integral del sistema reproductor masculino.' },
      { q: '¿A qué edad se recomienda empezar a tomarlo?', a: 'Es ideal para hombres a partir de los 40 años como parte de su rutina de salud preventiva.' },
      { q: '¿Tiene contraindicaciones?', a: 'Es un producto natural con calidad certificada; se recomienda consultar al médico si hay condiciones preexistentes.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 75900 },
      { id: '2u', label: '2 Unidades', units: 2, price: 113850 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 151800, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 227700, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Humberto G.', text: 'Me siento con más vitalidad y equilibrio. Un gran apoyo para la salud masculina.', rating: 5 },
      { name: 'Gabriel J.', text: 'Lo tomo como preventivo y me he sentido muy bien. Calidad garantizada.', rating: 5 }
    ],
    whyChoose: {
      title: 'Equilibrio hormonal para el hombre',
      description: 'En AZENZA estamos comprometidos con tu salud, ofrecemos productos con registro INVIMA de alta precisión. Iprossmen es una fórmula balanceada enfocada en el bienestar integral de la zona pélvica mediante ingredientes de origen natural.'
    }
  },
  {
    id: 'kds-10',
    masterId: '129333',
    name: 'KDS 10',
    category: 'salud-bienestar',
    shortDescription: 'Suplemento Vitamínico y Energía Vital Familiar.',
    description: `El cansancio escolar o laboral temprano, la falta de vitalidad diaria y la vulnerabilidad constante ante resfriados reflejan vacíos nutricionales en la alimentación cotidiana de niños en crecimiento, adultos activos y personas mayores. KDS 10 funciona como un sistema de recarga multivitamínica y mineral biodisponible estructurado sobre una matriz lipídica de crema de coco y proteína de suero, que facilita el transporte y la absorción celular de Vitaminas A, C, D, E y el Complejo B completo, complementadas con Zinc, Hierro y Magnesio esenciales.

A mediano y largo plazo, esta sinergia de micronutrientes fortalece la primera línea de defensas inmunológicas frente a virus del entorno, apoya la mineralización ósea y el desarrollo muscular, y combate la fatiga intelectual, optimizando la concentración y el metabolismo energético en cada etapa de la vida. Certificado con Registro INVIMA oficial (RSA-0025607-2023), su presentación en polvo fino de 350g se mezcla fácilmente en agua, leche o batidos con una textura cremosa y ligera, garantizando una nutrición integral, pura y segura para toda la familia.

✔️ Inmunidad Total: Fortalece las defensas naturales contra virus y bacterias del entorno escolar y laboral.
✔️ Crecimiento y Vigor: Aporta los ladrillos nutricionales necesarios para el desarrollo físico y mental.
✔️ Absorción Superior: Base de coco que facilita el transporte de micronutrientes a las células de forma eficiente.`,
    seoTitle: 'KDS 10 Multivitamínico Familiar: Máxima Energía y Defensas',
    seoDescription: 'Nutrición completa y energía para toda la familia con KDS 10 Multivitamínico. Refuerza defensas con Registro INVIMA. ¡Envío 100% Gratis a Colombia!',
    benefits: [
      "Combate la debilidad física, el decaimiento y la falta de apetito en la familia",
      "Sube las defensas para evitar que los niños o adultos caigan enfermos seguido",
      "Aporta energía natural para estudiar o trabajar sin sentir sueño temprano",
      "Fórmula suave con base de coco que no produce náuseas ni cae pesada",
      "Completa las vitaminas y minerales que faltan en las comidas del día"
    ],
    image: '/assets/products/Kds10.webp',
    basePrice: 79900,
    size: '350g',
    invima: 'RSA-0025607-2023',
    googleCategory: 'Health & Beauty > Health Care > Fitness & Nutrition',
    condition: 'new',
    supportImages: [
      '/assets/products/kds-10-apoyo-1.webp',
      '/assets/products/kds-10-apoyo-2.webp',
      '/assets/products/kds-10-apoyo-3.webp',
      '/assets/products/kds-10-apoyo-4.webp'
    ],
    keywords: 'multivitamínico familiar, vitaminas y minerales, defensas bajas, apetito en niños y adultos, energía diaria, KDS 10 original invima, Azenza, comprar colombia, pago contra entrega, envío gratis',
    components: 'Crema de coco, Proteína de suero, Magnesio, Hierro, Zinc y Complejo Vitamínico',
    componentBenefits: [
      {
        name: "Proteína de Suero y Crema de Coco",
        benefit: "Quitan la debilidad y el desgano, ayudando a niños y adultos a recuperar el apetito y la fuerza física."
      },
      {
        name: "Hierro y Zinc",
        benefit: "Combaten la anemia, el cansancio escolar o laboral y mejoran la concentración durante el día."
      },
      {
        name: "Magnesio y Vitaminas",
        benefit: "Suben las defensas para no vivir con gripes ni recaer enfermo cada semana."
      }
    ],
    longTailKeywords: [
      'mejor multivitamínico familiar con zinc y hierro en polvo',
      'cómo complementar la nutrición de niños y adultos mayores naturalmente',
      'suplemento vitamínico completo para el cansancio mental y físico',
      'beneficios del complejo B y minerales para la vitalidad diaria',
      'fórmula con crema de coco para máxima absorción de nutrientes',
      'bienestar integral y nutrición familiar con registro INVIMA',
      'suplemento para subir defensas y abrir el apetito en niños y adultos',
      'kds 10 precio oferta colombia envio gratis pago contra entrega',
      'comprar multivitamínico kds 10 azenza pedir por whatsapp a domicilio'
    ],
    seoFaqs: [
      { q: '¿Cómo debo consumir este producto para obtener mejores resultados?', a: 'Disolver 1 cucharada (20g) en un vaso de agua, leche o jugo.' },
      { q: '¿Qué vitaminas contiene KDS 10?', a: 'Contiene un espectro completo de vitaminas esenciales diseñadas para un bienestar integral y equilibrio nutricional.' },
      { q: '¿Lo pueden tomar los niños?', a: 'Sí, su fórmula balanceada es apta para toda la familia bajo las dosis recomendadas por edad.' },
      { q: '¿Ayuda con el apetito?', a: 'Al corregir deficiencias vitamínicas, puede ayudar a normalizar el apetito y mejorar la vitalidad.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 79900 },
      { id: '2u', label: '2 Unidades', units: 2, price: 119850 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 159800, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 239700, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Familia Restrepo', text: 'Lo tomamos todos en casa y nos sentimos con mucha más energía y salud.', rating: 5 },
      { name: 'Olga Marina', text: 'Excelente multivitamínico, mis hijos ya no se enferman tanto.', rating: 5 }
    ],
    whyChoose: {
      title: 'Nutrición familiar con confianza',
      description: 'En AZENZA estamos comprometidos con tu salud, ofrecemos productos con registro INVIMA para tu familia. KDS 10 es un multivitamínico ideal para complementar la dieta diaria con la seguridad de una fórmula balanceada y certificada.'
    }
  },
  {
    id: 'liofhim',
    masterId: '57848',
    name: 'Liofhim',
    category: 'salud-bienestar',
    shortDescription: 'Ritual de Descanso Nocturno y Sueño Reparador.',
    description: `El flujo incesante de pensamientos intrusivos al acostarse, los despertares a medianoche y la sensación de fatiga al sonar la alarma revelan una hiperactivación nerviosa que impide ingresar a las fases profundas del descanso. Liofhim actúa como un sistema líquido de inducción y sosiego neuro-vegetativo que sincroniza extractos botánicos estandarizados de Manzanilla (fuente de apigenina moduladora), Albahaca, Anís y Hierbabuena con el respaldo celular de las Vitaminas C y E, distendiendo la tensión muscular y calmando la corteza cerebral sin recurrir a fármacos hipnóticos.

A mediano y largo plazo, favorece la arquitectura natural del sueño reparador y reduce la fragmentación del reposo nocturno, permitiendo que las células se regeneren por completo para que despiertes con la mente lúcida, sin sensación de embotamiento ni pesadez matutina. Avalado con Registro INVIMA oficial (RSA-0020527-2022), su fórmula líquida de 500ml se asimila con rapidez antes de dormir sin generar tolerancia ni dependencia, garantizando una noche de calma fisiológica y un amanecer de verdadera vitalidad.

✔️ Apagado Mental: Calma el flujo de pensamientos intrusivos para una relajación profunda e inmediata.
✔️ Sueño Continuo: Ayuda a mantener un estado de descanso estable y sin interrupciones durante la noche.
✔️ Amanecer Vital: Fórmula herbal que asegura despertar sin pesadez, con máxima claridad y vigor.`,
    seoTitle: 'Liofhim Descanso Profundo: Sueño Reparador y Cero Estrés',
    seoDescription: 'Duerme plácidamente y despierta renovado con Liofhim fórmula natural para el descanso. Sin adicción, con Registro INVIMA. ¡Paga al recibir en casa!',
    benefits: [
      "Ayuda a quedarse dormido rápido sin dar vueltas en la cama por horas",
      "Evita los despertares a medianoche para que logres un sueño continuo y reparador",
      "Calma los nervios, la angustia y la tensión en el pecho por el estrés del día",
      "Despiertas con la cabeza despejada, buen ánimo y sin mareos ni modorra",
      "Gotas botánicas naturales que no causan adicción y cuentan con Registro INVIMA"
    ],
    image: '/assets/products/Liofhim.webp',
    basePrice: 75900,
    size: '500ml',
    presentation: 'Líquido',
    invima: 'RSA-0020527-2022',
    googleCategory: 'Health & Beauty > Health Care > Fitness & Nutrition',
    condition: 'new',
    supportImages: [
      '/assets/products/liofhim-apoyo-1.webp',
      '/assets/products/liofhim-apoyo-2.webp',
      '/assets/products/liofhim-apoyo-3.webp',
      '/assets/products/liofhim-apoyo-4.webp'
    ],
    keywords: 'dormir profundo, insomnio, descansar toda la noche, calmar la mente y ansiedad, manzanilla, albahaca, sueño reparador sin adicción, Liofhim original invima, Azenza, comprar colombia, pago contra entrega, envío gratis',
    components: 'Manzanilla, Albahaca, Anís, Hierbabuena y Vitaminas C y E',
    componentBenefits: [
      {
        name: "Manzanilla, Albahaca y Anís",
        benefit: "Calman la mente acelerada, la angustia y los pensamientos que no te dejan dormir, facilitando el sueño en minutos."
      },
      {
        name: "Hierbabuena",
        benefit: "Quita los gases y la pesadez estomacal nocturna para descansar sin molestias en la panza."
      },
      {
        name: "Vitaminas C y E",
        benefit: "Ayudan a que el cuerpo se recupere mientras duermes para despertar descansado y sin modorra."
      }
    ],
    longTailKeywords: [
      'mejor bebida natural para dormir profundo toda la noche',
      'cómo evitar los despertares a medianoche y descansar',
      'suplemento para apagar la mente y dormir más rápido',
      'beneficios de la manzanilla y albahaca para el sueño',
      'fórmula para despertar renovado y con energía positiva',
      'bienestar integral y descanso real con registro INVIMA',
      'comprar liofhim original colombia pago contra entrega envio gratis',
      'remedio natural para el insomnio y estrés nocturno pedir por whatsapp'
    ],
    seoFaqs: [
      { q: '¿Cómo debo consumir este producto para obtener mejores resultados?', a: 'Tomar 1 copa (15ml) dos veces al día o diluir en un litro de agua.' },
      { q: '¿Liofhim me dará sueño durante el día?', a: 'No, su efecto es relajante para la noche, ayudándote a apagar la mente y lograr un descanso real sin somnolencia al despertar.' },
      { q: '¿Es un medicamento para dormir?', a: 'No, es una bebida natural a base de plantas como Manzanilla y Albahaca que promueven el bienestar integral y la calma.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 75900 },
      { id: '2u', label: '2 Unidades', units: 2, price: 113850 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 151800, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 227700, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'David R.', text: 'Antes me despertaba a cada rato, ahora con Liofhim duermo derecho hasta la mañana.', rating: 5 },
      { name: 'Patricia M.', text: 'Me ayuda a calmar la mente después de un día estresante. Es mi secreto para descansar bien.', rating: 5 }
    ],
    whyChoose: {
      title: 'Descanso profundo y natural',
      description: 'En AZENZA estamos comprometidos con tu salud, ofrecemos productos con registro INVIMA para tu descanso real. Liofhim apaga la mente y relaja tu cuerpo gracias a la Manzanilla y la Albahaca. Logra un sueño reparador con la tranquilidad de una fórmula certificada y segura.'
    }
  },
  {
    id: 'liteplex',
    masterId: '26272',
    name: 'Liteplex',
    category: 'salud-bienestar',
    shortDescription: 'Bienestar Digestivo y Ligereza Metabólica.',
    description: `La pesadez estomacal tras comer, el reflujo ácido que irrita la garganta y la acumulación dolorosa de gases convierten cada almuerzo en un proceso lento, inflamatorio y fatigante. Liteplex funciona como un concentrado botánico carminativo y regulador gastrointestinal que fusiona extractos bioactivos de Jengibre fresco, Menta piperita, Albahaca y Té Verde con la frescura alcalinizante del Limón, formulado sin azúcar añadida y endulzado naturalmente con estevia.
 
Esta sinergia acelera el vaciado gástrico, distiende las paredes del tubo digestivo y normaliza el pH estomacal sin frenar la producción enzimática natural, evitando la fermentación intestinal y promoviendo una desinflamación abdominal rápida y visible. Certificado con Registro INVIMA oficial (PSA-000932-2017), su formato líquido concentrado de 500ml brinda una asimilación inmediata y un sabor cítrico reconfortante, siendo el aliado perfecto para disfrutar tus comidas favoritas con ligereza, digestión ágil y total libertad digestiva.

✔️ Alivio Estomacal: Calma la acidez y la pesadez abdominal con la frescura natural del limón y la menta.
✔️ Digestión Ágil: El jengibre y la albahaca estimulan el tránsito digestivo para evitar la hinchazón.
✔️ Pureza Saludable: Sin azúcar añadida y bajo en calorías, ideal para mantener tu equilibrio metabólico diaria.`,
    seoTitle: 'Liteplex Digestivo Original: Alivio de Pesadez y Gases',
    seoDescription: 'Despídete del ardor y la pesadez estomacal con Liteplex concentrado botánico digestivo. Registro INVIMA oficial. ¡Pídelo hoy con Pago Contra Entrega!',
    benefits: [
      "Calma de inmediato el ardor en la boca del estómago, las agruras y el reflujo",
      "Quita la pesadez que te hace sentir lleno como un balón con cualquier comida",
      "Alivia las paredes del estómago irritadas por grasas, condimentos o estrés",
      "Líquido concentrado que actúa al instante sin dejar mal sabor en la boca",
      "Delicioso sabor a limón endulzado con estevia, apto para toda la familia"
    ],
    image: '/assets/products/Liteplex.webp',
    basePrice: 79900,
    size: '500ml',
    presentation: 'Líquido',
    invima: 'PSA-000932-2017',
    googleCategory: 'Health & Beauty > Health Care > Fitness & Nutrition',
    condition: 'new',
    supportImages: [
      '/assets/products/liteplex-apoyo-2.webp',
      '/assets/products/liteplex-apoyo-3.webp',
      '/assets/products/liteplex-apoyo-4.webp'
    ],
    keywords: 'digestión ligera, alivio estomacal, acidez y reflujo, pesadez tras comer, gases dolorosos, jengibre y menta, estevia, Liteplex original invima, Azenza, comprar colombia, pago contra entrega, envío gratis',
    components: 'Té Verde, Jengibre, Limón, Albahaca y Menta',
    componentBenefits: [
      {
        name: "Té Verde y Jengibre",
        benefit: "Apagan de inmediato el ardor en la boca del estómago, las agruras y el reflujo ácido que sube a la garganta."
      },
      {
        name: "Limón, Albahaca y Menta",
        benefit: "Desinflaman las paredes del estómago y quitan la pesadez de sentirte lleno como un balón después de comer."
      }
    ],
    longTailKeywords: [
      'mejor jarabe botánico para quitar la acidez y pesadez estomacal',
      'cómo desinflamar el estómago después de comer comidas pesadas',
      'liteplex precio colombia oferta original pago contra entrega',
      'remedio para el reflujo ácido agruras y llenura pedir por whatsapp',
      'suplemento digestivo líquido con jengibre y limón registro invima'
    ],
    seoFaqs: [
      { q: '¿Cómo debo consumir este producto para obtener mejores resultados?', a: 'Tomar 1 copa (15ml) dos veces al día o diluir en agua.' },
      { q: '¿Liteplex ayuda a optimizar tu figura?', a: 'Sí, su fórmula balanceada apoya los procesos metabólicos naturales para una mejor utilización de las grasas.' },
      { q: '¿Es apto para personas con diabetes?', a: 'Es un producto natural con calidad certificada, pero siempre recomendamos consultar a su médico.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 79900 },
      { id: '2u', label: '2 Unidades', units: 2, price: 119850 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 159800, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 239700, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Fernando D.', text: 'Siento mi metabolismo mucho más activo. Me ayuda a no sentirme pesado.', rating: 5 },
      { name: 'Lorena M.', text: 'Excelente complemento para mi dieta. Me siento con más vitalidad.', rating: 5 }
    ],
    whyChoose: {
      title: 'Alivio digestivo natural',
      description: 'En AZENZA cuidamos tu digestión con el poder de la naturaleza. Liteplex combina jengibre y limón para brindarte un alivio rápido contra la pesadez y la acidez, permitiéndote disfrutar de tus comidas con tranquilidad.'
    }
  },
  {
    id: 'maxlite-colageno',
    masterId: '11264',
    name: 'Maxlite',
    category: 'salud-bienestar',
    shortDescription: 'Nutrición Estructural y Vitalidad Osteoarticular.',
    description: `El desgaste progresivo de los cartílagos articulares, la pérdida de tonicidad muscular con el paso de los años y la flacidez dérmica generan rigidez física y sensación de debilidad estructural. Maxlite actúa como un súper-alimento reconstructor y antioxidante sistémico que sincroniza péptidos bioactivos de Colágeno Hidrolizado de alta absorción con la riqueza proteica y mineral de la Quinua orgánica andina, potenciado con Resveratrol trans puro, ácidos grasos Omega 3-6-9 y un complejo multivitamínico completo.

A mediano y largo plazo, esta sinergia nutre la matriz celular de los tejidos conectivos, estimula la flexibilidad de ligamentos y articulaciones frente a la fricción diaria, y refuerza la síntesis de queratina en piel, cabello y uñas, consolidando una estructura corporal firme, ágil y protegida frente al envejecimiento oxidativo. Avalado con Registro INVIMA oficial (SD2017-0004051), su generosa presentación de 800g en polvo de fácil disolución asegura una nutrición diaria ligera y de alta pureza para mantener tu ritmo activo sin limitaciones.

✔️ Cuidado Articular Superior: Colágeno y quinua que restauran la movilidad y protegen contra el desgaste.
✔️ Piel y Cabello Radiante: Biotina y vitaminas que fortalecen la queratina natural y reducen la flacidez.
✔️ Energía Multivitamínica: Carga completa de micronutrientes para una vitalidad inagotable y defensas fuertes.`,
    seoTitle: 'Maxlite Colágeno + Quinua: Nutrición y Salud Articular',
    seoDescription: 'Fortalece huesos, articulaciones y masa muscular con Maxlite Colágeno y Quinua. Calidad certificada INVIMA. ¡Compra online con Envío Gratis nacional!',
    benefits: [
      "Alivia los dolores punzantes en rodillas, cadera y columna por desgaste",
      "Fortalece los huesos frágiles para evitar fracturas y caminar con seguridad",
      "Devuelve la firmeza a la piel flácida y nutre el cabello y las uñas quebradizas",
      "Aporta energía limpia con quinua y Omega 3-6-9 para no terminar el día exhausto",
      "Alimento completo en polvo que combate el dolor y cuida todo tu cuerpo"
    ],
    image: '/assets/products/Maxlite.webp',
    basePrice: 89900,
    size: '800g',
    presentation: 'Polvo',
    invima: 'SD2017-0004051',
    googleCategory: 'Health & Beauty > Health Care > Fitness & Nutrition',
    condition: 'new',
    supportImages: [
      '/assets/products/maxlite-apoyo-1.webp',
      '/assets/products/maxlite-apoyo-2.webp',
      '/assets/products/maxlite-apoyo-3.webp',
      '/assets/products/maxlite-apoyo-4.webp'
    ],
    keywords: 'colágeno con quinua, péptidos de colágeno, dolor articular, huesos y cartílagos, omega 3 6 9, resveratrol, piel firme, Maxlite original invima, Azenza, comprar colombia, pago contra entrega, envío gratis',
    components: 'Péptidos de Colágeno, Resveratrol, Quinua, Omega 3-6-9 y Vitaminas',
    componentBenefits: [
      {
        name: "Péptidos de Colágeno",
        benefit: "Alivian los dolores agudos en rodillas, caderas y columna, reforzando los huesos débiles contra fracturas."
      },
      {
        name: "Resveratrol y Omegas",
        benefit: "Mejoran la circulación, protegen el corazón y devuelven la firmeza a la piel marchita y flácida."
      }
    ],
    longTailKeywords: [
      'mejor colágeno con quinua para dolor de rodillas y huesos',
      'cómo regenerar cartílagos desgastados con péptidos de colágeno',
      'maxlite colágeno azenza precio oferta pago contra entrega colombia',
      'suplemento para la movilidad articular y piel firme con registro invima',
      'pedir maxlite colágeno por whatsapp a domicilio'
    ],
    seoFaqs: [
      { q: '¿Cómo debo consumir este producto para obtener mejores resultados?', a: 'Mezclar 1 cucharada (15g) en un vaso de agua o leche.' },
      { q: '¿Qué hace a Maxlite diferente de otros colágenos?', a: 'Su fórmula balanceada de alta absorción permite que los nutrientes lleguen más rápido a tus tejidos para un bienestar integral.' },
      { q: '¿Ayuda con el molestias articulares?', a: 'Sí, al nutrir el cartílago y las articulaciones, contribuye a una mejor movilidad y vitalidad.' },
      { q: '¿Se disuelve fácilmente?', a: 'Totalmente, está diseñado para una preparación rápida y sin grumos, garantizando calidad certificada.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 89900 },
      { id: '2u', label: '2 Unidades', units: 2, price: 134850 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 179800, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 269700, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Andrés Felipe', text: 'Se disuelve súper fácil y no tiene sabor fuerte. Mis rodillas lo agradecen.', rating: 5 },
      { name: 'Claudia R.', text: 'Excelente absorción, he notado cambios en mi piel y cabello muy rápido.', rating: 5 }
    ],
    whyChoose: {
      title: 'Nutrición integral avanzada',
      description: 'En AZENZA combinamos el colágeno con la fuerza de la quinua para ofrecerte una nutrición superior. Maxlite no solo cuida tus articulaciones, sino que te brinda la energía de los cereales naturales para que nada te detenga.'
    }
  },
  {
    id: 'megamac',
    masterId: '11247',
    name: 'Megamac',
    category: 'salud-bienestar',
    shortDescription: 'Potencia Ancestral y Energía Vital Extrema.',
    description: `El agotamiento físico crónico, la falta de empuje para enfrentar exigencias laborales o deportivas y la sensación de pesadez muscular constante merman el rendimiento y desgastan el ánimo vital. Megamac funciona como un bio-revitalizante metabólico ancestral de alta densidad nutricional que integra extractos puros de Maca andina, Borojó silvestre y Chontaduro con proteína de suero lácteo de alto valor biológico y minerales esenciales como Zinc y Magnesio para reactivar la producción endógena de energía a nivel mitocondrial.

A mediano y largo plazo, esta matriz vegetal y proteica estimula la oxigenación celular, combate la debilidad muscular acumulada y acelera la recuperación post-esfuerzo sin generar picos de taquicardia ni nerviosismo, manteniendo el sistema nervioso enfocado y las defensas activas durante toda la jornada. Certificado con Registro INVIMA oficial (RSA-001291-2016), su presentación en polvo fino de 700g se disuelve con rapidez en agua, leche o batidos, ofreciendo un aporte energético limpio, seguro y potente para superar cada desafío diario con verdadero vigor.

✔️ Energía Explosiva: Maca y Borojó que actúan como motores naturales de vitalidad física y mental.
✔️ Recuperación Máxima: Proteína de suero y aminoácidos que reconstruyen el vigor tras el esfuerzo.
✔️ Enfoque y Resistencia: Minerales clave que combaten la fatiga y mantienen el sistema nervioso equilibrado.`,
    seoTitle: 'Megamac Borojó y Maca: Energía Extrema y Vigor Natural',
    seoDescription: 'Recupera tu vigor, potencia física y energía vital con Megamac extracto de Maca y Borojó. Registro INVIMA. ¡Envío 100% Gratis y Pago Contra Entrega!',
    benefits: [
      "Quita la flojera, el agotamiento extremo y la falta de ganas desde la mañana",
      "Devuelve el vigor y la fuerza física para aguantar jornadas laborales pesadas",
      "Ayuda al cuerpo a recuperarse del desgaste diario y sube las defensas caídas",
      "Mejora el ánimo y la vitalidad tanto en hombres como en mujeres",
      "Fórmula concentrada con maca y superalimentos nutritivos de fácil asimilación"
    ],
    image: '/assets/products/Megamac.webp',
    basePrice: 89900,
    size: '700g',
    presentation: 'Polvo',
    invima: 'RSA-001291-2016',
    googleCategory: 'Health & Beauty > Health Care > Fitness & Nutrition',
    condition: 'new',
    supportImages: [
      '/assets/products/megamac-apoyo-1.webp',
      '/assets/products/megamac-apoyo-2.webp',
      '/assets/products/megamac-apoyo-3.webp',
      '/assets/products/megamac-apoyo-4.webp'
    ],
    keywords: 'energía extrema, maca y borojó, chontaduro, cansancio físico extremo, vigor masculino y femenino, recuperación muscular, Megamac original invima, Azenza, comprar colombia, pago contra entrega, envío gratis',
    components: 'Maca, Borojó, Proteína de Suero, Vitaminas y Minerales',
    componentBenefits: [
      {
        name: "Maca y Borojó",
        benefit: "Quitan la pereza matutina y el agotamiento físico extremo, devolviéndote el vigor y las ganas para rendir todo el día."
      },
      {
        name: "Proteína de Suero",
        benefit: "Fortalece los músculos cansados y evita que termines el día sin fuerzas."
      },
      {
        name: "Vitaminas y Minerales",
        benefit: "Recargan el cuerpo tras jornadas pesadas de trabajo o desvelos continuos."
      }
    ],
    longTailKeywords: [
      'mejor suplemento natural con maca y borojó para energía extrema',
      'cómo quitar la fatiga y el agotamiento físico durante el día',
      'megamac azenza precio colombia oferta pago contra entrega',
      'suplemento vigorizante con registro invima pedir por whatsapp',
      'comprar megamac borojó y maca original envio gratis'
    ],
    seoFaqs: [
      { q: '¿Cómo debo consumir este producto para obtener mejores resultados?', a: 'Disolver de 1 a 2 cucharadas en un vaso de leche o agua.' },
      { q: '¿Megamac da energía inmediata?', a: 'Sí, su fórmula balanceada está diseñada para brindar un impulso de vitalidad cuando más lo necesitas.' },
      { q: '¿Lo pueden tomar personas con hipertensión?', a: 'Al ser un producto natural con calidad certificada es seguro, pero siempre recomendamos consultar a su médico.' },
      { q: '¿Contiene azúcar?', a: 'Nuestra fórmula prioriza el bienestar integral, evitando excesos de azúcares para una energía más limpia.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 89900 },
      { id: '2u', label: '2 Unidades', units: 2, price: 134850 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 179800, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 269700, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Ricardo M.', text: 'Me da la energía que necesito para mis jornadas largas de trabajo. Muy efectivo.', rating: 5 },
      { name: 'Sofía L.', text: 'Excelente para el rendimiento físico. Me siento con mucha más vitalidad.', rating: 5 }
    ],
    whyChoose: {
      title: 'Vitalidad extrema sin límites',
      description: 'En AZENZA estamos comprometidos con tu salud, ofrecemos productos con registro INVIMA de alto rendimiento. Megamac combate el agotamiento físico y mental gracias al Borojó, Chontaduro y Maca. Energía pura y segura con calidad certificada.'
    }
  },
  {
    id: 'resveratrol',
    masterId: '129297',
    name: 'Resveratrol',
    category: 'salud-bienestar',
    shortDescription: 'Protección Celular y Ritual de Juventud Longevital.',
    description: `El fotoenvejecimiento prematuro, la pérdida acelerada de elasticidad cutánea y el desgaste vascular provocado por el estrés oxidativo y los radicales libres aceleran el deterioro celular de los tejidos vitales. Resveratrol actúa como un sistema bio-antioxidante y redensificador celular que fusiona Trans-Resveratrol polifenólico de alta pureza con una potente dosis de 10.000 mg de péptidos de Colágeno Hidrolizado, uva liofilizada y extracto de arándanos rojos para neutralizar el daño en las membranas celulares desde el interior.

A mediano y largo plazo, esta sinergia modula la expresión celular vinculada a la longevidad tisular, refuerza la matriz de queratina y colágeno dérmico, y apoya la salud del endotelio cardiovascular y cerebral, traduciéndose en una piel visiblemente más turgente, articulaciones flexibles y una vitalidad sostenida frente al paso de los años. Certificado con Registro INVIMA oficial (SD2014-0003215), su polvo fino de 350g se diluye instantáneamente para brindar un aporte bioactivo puro y seguro, convirtiéndose en el ritual antiedad definitivo para una juventud prolongada.

✔️ Blindaje Antioxidante: Protege el ADN celular contra el daño oxidativo y el envejecimiento prematuro.
✔️ Regeneración de Tejidos: 10,000 mg de colágeno que restauran la turgencia de la piel y salud articular.
✔️ Bienestar Cardiovascular: Los polifenoles de la uva favorecen una circulación saludable y bienestar estable.`,
    seoTitle: 'Resveratrol + 10.000mg Colágeno: Rejuvenecimiento Total',
    seoDescription: 'Fórmula antioxidante premium con Resveratrol y 10.000mg de Colágeno para piel joven y vitalidad celular. Registro INVIMA. ¡Paga en casa con Envío Gratis!',
    benefits: [
      "Atenúa las arrugas marcadas, la piel marchita y la flacidez en rostro y cuello",
      "Mejora la circulación de la sangre, aliviando el cansancio y pesadez en las piernas",
      "Aporta 10.000 mg de colágeno puro para aliviar articulaciones y nutrir el cabello",
      "Fórmula líquida concentrada que el cuerpo aprovecha al 100% de inmediato",
      "Protege el corazón y frena el envejecimiento prematuro de todo tu organismo"
    ],
    image: '/assets/products/Resveratrol.webp',
    basePrice: 79900,
    size: '350g',
    presentation: 'Polvo',
    invima: 'SD2014-0003215',
    googleCategory: 'Health & Beauty > Health Care > Fitness & Nutrition',
    condition: 'new',
    supportImages: [
      '/assets/products/resveratrol-apoyo-1.webp',
      '/assets/products/resveratrol-apoyo-2.webp',
      '/assets/products/resveratrol-apoyo-3.webp',
      '/assets/products/resveratrol-apoyo-4.webp'
    ],
    keywords: 'resveratrol concentrado, colágeno hidrolizado 10000mg, antioxidante antiedad, arrugas y flacidez, circulación piernas pesadas, arándano y uva, Azenza, comprar resveratrol colombia, pago contra entrega, envío gratis',
    components: 'Resveratrol, Colágeno Hidrolizado (10.000mg), Arándano y Uva liofilizada',
    componentBenefits: [
      {
        name: "Resveratrol, Arándano y Uva",
        benefit: "Mejoran la circulación para quitar el dolor y la hinchazón de piernas cansadas, y protegen el corazón."
      },
      {
        name: "10.000mg de Colágeno Hidrolizado",
        benefit: "Rellenan líneas de expresión profundas, frenan la flacidez y alivian las articulaciones adoloridas."
      }
    ],
    longTailKeywords: [
      'mejor resveratrol líquido con colágeno para rejuvenecer el rostro',
      'cómo eliminar arrugas y mejorar la circulación con antioxidantes',
      'resveratrol azenza precio colombia oferta original pago contra entrega',
      'suplemento para la flacidez facial y piernas cansadas registro invima',
      'pedir resveratrol bebible por whatsapp a domicilio'
    ],
    seoFaqs: [
      { q: '¿Cómo debo consumir este producto para obtener mejores resultados?', a: 'Mezclar 1 cucharada (15g) en un vaso de agua o leche.' },
      { q: '¿Qué beneficios tiene el Resveratrol para la piel?', a: 'Ayuda a combatir los radicales libres, promoviendo una piel más joven y un bienestar integral celular.' },
      { q: '¿Es mejor en líquido o en cápsulas?', a: 'Nuestra presentación líquida con fórmula balanceada asegura una absorción superior y resultados más rápidos.' },
      { q: '¿Lo pueden tomar jóvenes?', a: 'Es excelente como preventivo para mantener el equilibrio natural y la vitalidad desde temprana edad.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 79900 },
      { id: '2u', label: '2 Unidades', units: 2, price: 119850 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 159800, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 239700, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Elena P.', text: 'Siento mi piel mucho más joven y con más vida. Es un antioxidante increíble.', rating: 5 },
      { name: 'Mauricio G.', text: 'Me ayuda a sentirme con más vitalidad durante el día. Muy recomendado.', rating: 5 }
    ],
    whyChoose: {
      title: 'Protección celular avanzada',
      description: 'En AZENZA estamos comprometidos con tu salud, ofrecemos productos con registro INVIMA para un bienestar integral. El Resveratrol protege tus células del envejecimiento prematuro y mejora la salud cardiovascular. Calidad certificada y antioxidante de alta pureza.'
    }
  },
  {
    id: 'eventone',
    masterId: '23015',
    name: 'Eventone',
    category: 'belleza-integral',
    shortDescription: 'Brillo, Vitalidad y Tono Uniforme para tu Rostro.',
    description: `La hiperpigmentación por radiación solar, el tono irregular y las líneas de expresión prematuras apagan la vitalidad del rostro, generando un aspecto fatigado y falto de lozanía. Eventone funciona como un suero dermo-regenerador intensivo que sincroniza la acción exfoliante suave del Bio-Retinol botánico con la capacidad higroscópica del Ácido Hialurónico puro y extractos botánicos calmantes de Manzanilla, acelerando la renovación celular epidérmica sin la irritación ni fotosensibilidad de los retinoides agresivos.

A mediano y largo plazo, esta sinergia modula la síntesis de melanina, redensifica la matriz extracelular y atenúa la profundidad de las arrugas, devolviendo al cutis una textura homogénea, firme y con luminosidad natural duradera. Avalado con Registro INVIMA oficial, su fórmula fluida de absorción inmediata no obstruye los poros ni deja residuos grasos, garantizando un ritual nocturno seguro, gentil y de alta precisión dermatológica.

✔️ Tono Uniforme: Reduce progresivamente la intensidad de las manchas y equilibra el color de la piel.
✔️ Hidratación y Relleno: Ácido hialurónico de alto peso molecular que suaviza arrugas y mejora la turgencia.
✔️ Luminosidad Radiante: Recupera el brillo natural y la lozanía de un rostro descansado y saludable.`,
    seoTitle: 'Eventone Crema Facial Original: Tono Uniforme y Anti-Manchas',
    seoDescription: 'Aclara manchas y unifica el tono de tu piel con Eventone crema dermatológica aclaradora. Fórmula suave con Registro INVIMA. ¡Envío Gratis a Colombia!',
    benefits: [
      'Unifica el tono de la piel y reduce manchas oscuras visibles',
      'Efecto relleno inmediato gracias al ácido hialurónico puro',
      'Regeneración profunda celular con Bio-Retinol sin irritación',
      'Diferencia notable en la luminosidad y textura del rostro',
      'Fórmula ligera y nutritiva ideal para tu rutina de cuidado nocturno'
    ],
    image: '/assets/products/Eventone.webp',
    basePrice: 85000,
    size: '30ml',
    presentation: 'Crema',
    invima: 'NSOC90432-19CO',
    googleCategory: 'Health & Beauty > Personal Care > Cosmetics',
    condition: 'new',
    supportImages: [
      '/assets/products/eventone-apoyo-1.webp',
      '/assets/products/eventone-apoyo-2.webp',
      '/assets/products/eventone-apoyo-3.webp',
      '/assets/products/eventone-apoyo-4.webp'
    ],
    keywords: 'unificar tono piel, manchas de sol, manchas de la edad, bio retinol, ácido hialurónico puro, piel radiante, brillo natural, manchas oscuras, Eventone original invima, Azenza, comprar colombia, pago contra entrega, envío gratis',
    components: 'Bio Retinol, Ácido Hialurónico, Colágeno, B5, Manzanilla y Aloe Vera',
    componentBenefits: [
    {
        'name': 'Bio Retinol',
        'benefit': 'Favorece la revitalización de la piel para mejorar su textura y suavizar la apariencia de los signos de la edad.'
    },
    {
        'name': 'Ácido Hialurónico',
        'benefit': 'Retiene la humedad cutánea.'
    },
    {
        'name': 'Colágeno, B5, Manzanilla y Aloe Vera',
        'benefit': 'Calman, brindan una hidratación completa y apoyan la firmeza natural del rostro.'
    }
],
    longTailKeywords: [
      'mejor crema para unificar el tono de la piel y atenuar manchas faciales',
      'cómo aclarar manchas oscuras de sol y melasma con bio retinol',
      'eventone crema aclaradora azenza precio colombia pago contra entrega',
      'suero de noche con ácido hialurónico y colágeno con registro invima',
      'comprar crema despigmentante facial original con envío gratis',
      'pedir crema antimanchas eventone por whatsapp a domicilio'
    ],
    seoFaqs: [
      { q: '¿Cómo debo aplicar este producto para obtener mejores resultados?', a: 'Aplicar únicamente en la noche sobre el rostro limpio, masajeando suavemente hasta su total absorción.' },
      { q: '¿En cuánto tiempo veo resultados con Eventone?', a: 'Con el uso nocturno constante, notarás un tono más uniforme y una piel más radiante a partir de las primeras 3 a 4 semanas de uso.' },
      { q: '¿Se puede usar en todo tipo de piel?', a: 'Sí, su fórmula balanceada con manzanilla y aloe vera está diseñada para ser respetuosa y suave incluso con pieles delicadas.' },
      { q: '¿Ayuda con las manchas de sol?', a: 'Efectivamente, sus componentes están enfocados en reducir la apariencia de manchas oscuras causadas por la exposición solar y el envejecimiento.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 85000 },
      { id: '2u', label: '2 Unidades', units: 2, price: 127500 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 170000, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 255000, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Carolina V.', text: 'Tenía unas manchas de sol muy marcadas y Eventone las ha aclarado muchísimo.', rating: 5 },
      { name: 'Sonia M.', text: 'Mi rostro se ve con un tono mucho más parejo. Estoy muy feliz con los resultados.', rating: 5 }
    ],
    whyChoose: {
      title: 'Ritual de Belleza y Salud',
      description: 'En AZENZA transformamos lo cotidiano en extraordinario. Eventone combina hidratación profunda con el poder calmante de la manzanilla para que tu piel recupere su elasticidad y luzca radiante, brindándote un aspecto descansado y joven cada día.'
    }
  },
  {
    id: 'golden-passion',
    masterId: '61681',
    name: 'Golden Passion',
    category: 'belleza-integral',
    shortDescription: 'Destello Dorado y Bronceado de Lujo sin Sol.',
    description: `La palidez cutánea, el aspecto desvitalizado y el daño oxidativo acumulado por la exposición a la radiación solar directa dificultan lograr un color saludable sin acelerar el fotoenvejecimiento de la piel. Golden Passion actúa como un sistema nutritivo autobronceador de alta precisión que combina agentes pigmentantes graduales de origen botánico con la riqueza emoliente del Aceite de Argán y la Vitamina E pura, reaccionando de forma natural con los aminoácidos del estrato córneo para desarrollar un tono canela cálido y uniforme en pocas horas.

A largo plazo, sus ácidos grasos esenciales sellan la humedad tisular, neutralizan radicales libres y restauran la barrera lipídica, impidiendo la resequedad o descamación y aportando una textura aterciopelada y satinada. Avalado con Registro INVIMA oficial, su fórmula de secado veloz y acabado no graso se absorbe con rapidez sin transferir manchas a la ropa ni dejar olores químicos, ofreciendo un bronceado dorado sofisticado, duradero y 100% seguro durante todo el año.

✔️ Tono Canela: Logra un bronceado natural, intenso y uniforme sin necesidad de exposición al sol.
✔️ Hidratación Luminosa: Nutre profundamente con vitamina E, evitando la resequedad y aportando un brillo saludable.
✔️ Acabado Terciopelo: Textura no grasa que se absorbe velozmente, permitiéndote vestirte de inmediato con total confianza.`,
    seoTitle: 'Golden Passion Autobronceador: Brillo Dorado y Firmeza',
    seoDescription: 'Logra un bronceado dorado perfecto y piel satinada sin sol con Golden Passion loción de lujo. Registro INVIMA. ¡Pídela online con Pago Contra Entrega!',
    benefits: [
      'Proporciona un bronceado canela natural y uniforme en pocas horas',
      'Protege y nutre la piel con una potente dosis de Vitamina E pura',
      'Evita los daños acumulativos causados por la radiación UV del sol',
      'Fórmula satinada que aporta una luminosidad sofisticada y no grasa',
      'Incluye guía de aplicación experta para un resultado profesional en casa'
    ],
    image: '/assets/products/Goldenpassion.webp',
    basePrice: 79900,
    size: '90ml',
    presentation: 'Crema / Líquido',
    invima: 'NSOC35087-24CO',
    googleCategory: 'Health & Beauty > Personal Care > Cosmetics',
    condition: 'new',
    supportImages: [
      '/assets/products/golden-passion-apoyo-1.webp',
      '/assets/products/golden-passion-apoyo-2.webp',
      '/assets/products/golden-passion-apoyo-3.webp',
      '/assets/products/golden-passion-apoyo-4.webp'
    ],
    keywords: 'autobronceador, bronceado sin sol, tono canela uniforme, aceite autobronceador de argán, brillo piel, nutrición profunda, Golden Passion original invima, Azenza, comprar colombia, pago contra entrega, envío gratis',
    components: 'DHA, Vitamina E, Ácido Oleico y Ácido Palmitoleico',
    componentBenefits: [
    {
        'name': 'DHA y Vitamina E',
        'benefit': 'Ayudan a proteger la barrera cutánea frente a la oxidación externa.'
    },
    {
        'name': 'Ácido Oleico y Palmitoleico',
        'benefit': 'Nutren la superficie de la piel, favoreciendo un tono bronceado uniforme, luminoso y saludable.'
    }
],
    longTailKeywords: [
      'mejor autobronceador sin sol para un tono canela dorado natural',
      'cómo broncearse rápido sin dañar la piel con rayos solares',
      'golden passion autobronceador precio colombia pago contra entrega',
      'loción autobronceadora satinada con vitamina E registro invima',
      'comprar autobronceador natural con envío gratis a domicilio',
      'pedir golden passion azenza por whatsapp pago al recibir'
    ],
    seoFaqs: [
      { q: '¿Cómo debo aplicar este producto para obtener mejores resultados?', a: 'Aplicar uniformemente sobre la piel limpia y seca.' },
      { q: '¿Golden Passion deja la piel grasosa?', a: 'No, su fórmula balanceada se absorbe rápidamente dejando un brillo natural y bienestar integral.' },
      { q: '¿Se puede usar en el rostro?', a: 'Está diseñado principalmente para el cuerpo, brindando una nutrición profunda y textura suave.' },
      { q: '¿Tiene aroma?', a: 'Sí, posee una fragancia delicada que complementa tu ritual de vitalidad y cuidado diario.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 79900 },
      { id: '2u', label: '2 Unidades', units: 2, price: 119850 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 159800, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 239700, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Isabel C.', text: 'Deja un brillo hermoso en la piel sin ser grasoso. Huele delicioso.', rating: 5 },
      { name: 'Marta L.', text: 'Me encanta cómo deja mi piel de suave y nutrida. Es mi favorito.', rating: 5 }
    ],
    whyChoose: {
      title: 'Nutrición dorada para tu piel',
      description: 'En AZENZA estamos comprometidos con tu salud, ofrecemos productos con registro INVIMA de cuidado premium. Golden Passion nutre profundamente la piel seca y aporta un brillo saludable con Aceite de Argán y Vitamina E. Calidad certificada para tu brillo natural.'
    }
  },
  {
    id: 'hydrastrik',
    masterId: '11346',
    name: 'Hydrastrik',
    category: 'belleza-integral',
    shortDescription: 'Elásticidad y Nutrición Profunda Para Tu Piel.',
    description: `Los cambios bruscos de volumen corporal o las etapas de gestación someten la piel a una tensión extrema que fisura las fibras elásticas, desencadenando la aparición de estrías, tirantez y pérdida progresiva de firmeza. Hydrastrik funciona como un complejo lipídico reestructurante de alto impacto que combina la sinergia de óleos botánicos puros de Almendras dulces, Coco, Semillas de Uva, Jojoba y Aguacate para infundir nutrientes esenciales directamente en la red dérmica de colágeno y elastina.

A mediano y largo plazo, esta matriz de lípidos biomiméticos repara la barrera cutánea, incrementa la tolerancia elástica de los tejidos ante la tracción y suaviza visiblemente la textura de marcas previas, preservando una dermis tersa, resistente y flexible. Respaldado con Registro INVIMA oficial, su textura sedosa de rápida penetración dérmica es ideal para masajes terapéuticos diarios sin dejar residuos grasos en las prendas, brindando una nutrición profunda y absoluta seguridad.

✔️ Elasticidad Blindada: Prepara y fortalece los tejidos para prevenir rupturas y marcas por estiramiento.
✔️ Regeneración Botánica: Aceites de grado superior que aceleran la renovación celular y suavizan cicatrices.
✔️ Confort Sensorial: Ideal para masajes relajantes, dejando la piel nutrida sin sensación pegajosa.`,
    seoTitle: 'Hydrastrik Aceite Corporal: Anti-Estrías y Elasticidad',
    seoDescription: 'Previene y atenúa estrías mejorando la elasticidad con Hydrastrik aceite regenerador intensivo. Registro INVIMA. ¡Paga seguro al recibir en casa!',
    benefits: [
      'Previene eficazmente la formación de estrías al mejorar la elasticidad',
      'Nutrición profunda con óleos naturales de Almendra, Coco y Aguacate',
      'Mejora visiblemente la textura y firmeza en zonas críticas del cuerpo',
      'Fórmula de absorción inteligente ideal para masajes y rituales de cuidado',
      'Restaura la barrera lipídica natural devolviendo la flexibilidad a la piel'
    ],
    image: '/assets/products/Hydrastrik.webp',
    basePrice: 82500,
    size: '150ml',
    presentation: 'Aceite',
    invima: 'NSOC20441-23CO',
    googleCategory: 'Health & Beauty > Personal Care > Cosmetics',
    condition: 'new',
    supportImages: [
      '/assets/products/hydrastrik-apoyo-1.webp',
      '/assets/products/hydrastrik-apoyo-2.webp',
      '/assets/products/hydrastrik-apoyo-3.webp',
      '/assets/products/hydrastrik-apoyo-4.webp'
    ],
    keywords: 'aceite anti estrías, estrías de embarazo, elasticidad piel, aceite de almendras y jojoba, hidratación profunda, piel seca tirante, flacidez corporal, Hydrastrik original invima, Azenza, comprar colombia, pago contra entrega, envío gratis',
    components: 'Almendras, Semillas de Uva, Jojoba, Coco, Mango y Aguacate',
    componentBenefits: [
    {
        'name': 'Aceites de Jojoba, Almendras y Semillas de Uva',
        'benefit': 'Nutren la piel intensamente, ayudando a mantener su flexibilidad y suavidad natural.'
    },
    {
        'name': 'Coco, Mango y Aguacate',
        'benefit': 'Forman una barrera protectora que ayuda a prevenir la sequedad y mantiene la hidratación.'
    }
],
    longTailKeywords: [
      'mejor aceite antiestrías para prevenir y atenuar marcas de embarazo',
      'cómo recuperar la elasticidad de la piel con aceites botánicos puros',
      'hydrastrik aceite corporal precio colombia pago contra entrega',
      'aceite regenerador para estrías rojas y blancas con registro invima',
      'comprar aceite para masaje corporal reafirmante con envío gratis',
      'pedir hydrastrik azenza por whatsapp a domicilio'
    ],
    seoFaqs: [
      { q: '¿Cómo debo aplicar este producto para obtener mejores resultados?', a: 'Aplicar sobre la piel limpia para hidratar profundamente.' },
      { q: '¿Hydrastrik sirve para pieles grasas?', a: 'Sí, su fórmula balanceada hidrata sin obstruir poros, manteniendo el equilibrio natural y vitalidad.' },
      { q: '¿Se puede usar bajo el maquillaje?', a: 'Es una excelente base hidratante que deja la piel elástica y lista para el bienestar integral diario.' },
      { q: '¿Contiene alcohol?', a: 'No, priorizamos ingredientes suaves con calidad certificada para no irritar la piel sensible.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 82500 },
      { id: '2u', label: '2 Unidades', units: 2, price: 123750 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 165000, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 247500, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Daniela F.', text: 'Mi piel estaba muy seca y Hydrastrik le devolvió la vida. Muy fresca.', rating: 5 },
      { name: 'Andrea P.', text: 'Se absorbe rápido y deja la piel súper hidratada todo el día.', rating: 5 }
    ],
    whyChoose: {
      title: 'Hidratación profunda 24h',
      description: 'En AZENZA estamos comprometidos con tu salud, ofrecemos productos con registro INVIMA para hidratación intensiva. Hydrastrik restaura la elasticidad en pieles deshidratadas con Ácido Hialurónico y Aloe Vera. Fresapoya inmediata con calidad certificada.'
    }
  },
  {
    id: 'miskinne',
    masterId: '11290',
    name: 'Miskinne',
    category: 'belleza-integral',
    shortDescription: 'Perfeccionador Cutáneo y Escudo de Suavidad Calmante.',
    description: `La hipersensibilidad cutánea, las rojeces frecuentes y la aparición de manchas o sombras por fricción y daño ambiental debilitan la barrera dérmica, generando un aspecto disparejo, áspero y reactivo. Miskinne funciona como una emulsión dermo-reparadora botánica de alta tolerancia que sincroniza las propiedades antiinflamatorias y descongestionantes de la Avena coloidal y la Caléndula orgánica con la nutrición oclusiva beneficiosa de la Manteca de Karité y la Vitamina E pura.

A mediano y largo plazo, este sistema botánico repara el manto lipídico superficial, atenúa la hiperpigmentación difusa y previene la reactividad ante cambios climáticos, consolidando un cutis sereno, visiblemente uniforme, descansado y de textura sedosa. Respaldada con Registro INVIMA oficial (NSOC85321-18CO), su textura cremosa se funde suavemente al aplicarse de noche sin dejar residuos pesados ni sensación grasa, brindando máxima calma y protección dérmica familiar.

✔️ Tono Sublime: Reduce progresivamente la apariencia de manchas sutiles y zonas sombreadas.
✔️ Calma Absoluta: La caléndula y la avena alivian instantáneamente la rojez y la sensibilidad cutánea.
✔️ Nutrición Sedosa: Crea una barrera de suavidad que mantiene la humedad esencial durante horas.`,
    seoTitle: 'Miskinne Crema Facial: Tono Parejo y Cuidado Antioxidante',
    seoDescription: 'Nutre e ilumina tu rostro mientras emparejas el tono con Miskinne crema nutritiva botánica. Calidad INVIMA certificada. ¡Envío 100% Gratis a Colombia!',
    benefits: [
      'Atenúa visiblemente manchas superficiales y empareja el tono de la piel',
      'Proporciona un alivio inmediato a pieles sensibles, secas o irritadas',
      'Enriquecida con Avena y Caléndula para una nutrición natural y suave',
      'Protege la dermis contra futuras alteraciones de tono y agresiones externas',
      'Fórmula hipoalergénica de alta pureza con registro INVIMA certificado'
    ],
    image: '/assets/products/Miskinne.webp',
    basePrice: 59900,
    size: '60g',
    presentation: 'Crema',
    invima: 'NSOC85321-18CO',
    googleCategory: 'Health & Beauty > Personal Care > Cosmetics',
    condition: 'new',
    supportImages: [
      '/assets/products/miskinne-apoyo-1.webp',
      '/assets/products/miskinne-apoyo-2.webp',
      '/assets/products/miskinne-apoyo-3.webp',
      '/assets/products/miskinne-apoyo-4.webp'
    ],
    keywords: 'crema piel sensible, caléndula y avena, manchas por fricción, rojeces en la piel, resequedad extrema, dermatitis leve, hidratación profunda, Miskinne original invima, Azenza, comprar colombia, pago contra entrega, envío gratis',
    components: 'Avena, Caléndula, Manteca de Karité, Vitamina E',
    componentBenefits: [
    {
        'name': 'Avena y Caléndula',
        'benefit': 'Calman la piel sensible e irritada.'
    },
    {
        'name': 'Manteca de Karité y Vitamina E',
        'benefit': 'Humectan intensamente y favorecen la elasticidad de la piel, ayudando a suavizar la apariencia de marcas e imperfecciones.'
    }
],
    longTailKeywords: [
      'mejor crema botánica para calmar la piel sensible e irritada',
      'cómo atenuar manchas por fricción y rozaduras con caléndula y avena',
      'miskinne crema reparadora azenza precio colombia pago contra entrega',
      'crema hidratante nutritiva para piel áspera y reactiva registro invima',
      'comprar crema corporal y facial de avena pura con envío gratis',
      'pedir miskinne azenza por whatsapp pago al recibir'
    ],
    seoFaqs: [
      { q: '¿Cómo debo aplicar este producto para obtener mejores resultados?', a: 'Aplicar en la noche y retirar con abundante agua al día siguiente.' },
      { q: '¿Miskinne es apta para niños?', a: 'Sí, su fórmula balanceada y natural es ideal para el cuidado delicado de toda la familia.' },
      { q: '¿Ayuda con la resequedad extrema?', a: 'Efectivamente, proporciona una protección diaria que devuelve la suavidad y bienestar integral.' },
      { q: '¿Tiene un olor fuerte?', a: 'Posee un aroma suave y natural que respeta tu equilibrio natural y vitalidad.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 59900 },
      { id: '2u', label: '2 Unidades', units: 2, price: 89850 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 119800, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 179700, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Laura B.', text: 'Es la única crema que no irrita mi piel sensible. La deja súper suave.', rating: 5 },
      { name: 'Mónica T.', text: 'Me encanta el aroma tan natural que tiene. Hidrata muy bien sin ser pegajosa.', rating: 5 }
    ],
    whyChoose: {
      title: 'Suavidad para pieles sensibles',
      description: 'En AZENZA estamos comprometidos con tu salud, ofrecemos productos con registro INVIMA de fórmula gentil. Miskinne alivia la irritación y resequedad extrema con Avena y Caléndula. Protección diaria y segura con calidad certificada.'
    }
  },
  {
    id: 'tonico-capilar',
    masterId: '11260',
    name: 'Tónico Capilar',
    category: 'belleza-integral',
    shortDescription: 'Densificadora Capilar y Ritual de Crecimiento Avanzado.',
    description: `El debilitamiento folicular acelerado, la caída notoria durante el lavado o peinado y la pérdida visible de densidad en cuero cabelludo, cejas o barba reflejan una asfixia nutricional de la raíz capilar. Nuestro Tónico Capilar actúa como un tratamiento tricológico bioestimulante que combina Trichogen al 8% (complejo bioactivo de sulfopéptidos, aminoácidos y zinc) con la acción vasodilatadora y antioxidante de la Cebolla roja, el Ginkgo Biloba y 14 extractos botánicos adicionales para reactivar la microcirculación en el bulbo piloso.

A mediano y largo plazo, esta sinergia prolonga la fase anágena del ciclo capilar, refuerza el anclaje de las hebras en la papila dérmica y estimula el engrosamiento progresivo del cabello naciente, combatiendo el afinamiento y la pérdida de volumen. Certificado con Registro INVIMA oficial (NSOC02559-20CO), su presentación en spray de textura ligera se absorbe en segundos sin apelmazar ni dejar sensación grasa, facilitando una aplicación diaria práctica, limpia y de máxima biodisponibilidad.

✔️ Arquitectura Capilar: Fortalece el anclaje del cabello reduciendo la caída y el quiebre de forma visible.
✔️ Densidad y Crecimiento: El Trichogen al 8% estimula la zona de crecimiento para un mayor volumen folicular.
✔️ Vitalidad Herbal: 16 extractos que nutren, purifican y devuelven el brillo natural a la fibra capilar.`,
    seoTitle: 'Tónico Capilar Trichogen 8%: Crecimiento y Cero Caída',
    seoDescription: 'Detén la caída y estimula el nacimiento de nuevo cabello con Tónico Capilar Trichogen al 8%. Registro INVIMA oficial. ¡Paga al recibir con Envío Gratis!',
    benefits: [
      'Detiene la caída excesiva y fortalece el cabello desde el folículo piloso',
      'Estimula el crecimiento rápido de nuevas hebras más gruesas y resistentes',
      'Puebla con eficacia zonas de baja densidad en el cuero cabelludo, barba y cejas',
      'Nutre profundamente la raíz con 16 extractos botánicos y Trichogen al 8%',
      'Mejora notablemente la textura, el brillo y la salud integral del cabello'
    ],
    image: '/assets/products/tonico.webp',
    basePrice: 89900,
    size: '120ml',
    presentation: 'Líquido (Spray)',
    invima: 'NSOC02559-20CO',
    googleCategory: 'Health & Beauty > Personal Care > Hair Care',
    condition: 'new',
    supportImages: [
      '/assets/products/tonico-apoyo-1.webp',
      '/assets/products/tonico-apoyo-2.webp',
      '/assets/products/tonico-apoyo-3.webp',
      '/assets/products/tonico-apoyo-4.webp'
    ],
    keywords: 'caída del cabello, alopecia, crecimiento capilar rápido, engrosar cabello fino, trichogen al 8, extracto de cebolla y ginkgo biloba, barba y cejas pobladas, tónico capilar original invima, Azenza, comprar colombia, pago contra entrega, envío gratis',
    components: 'Trichogen al 8%, Cebolla, Ginkgo Biloba y 16 extractos herbales',
    componentBenefits: [
    {
        'name': 'Trichogen al 8%',
        'benefit': 'Complejo capilar que ayuda a disminuir la caída y fortalece el cabello desde la raíz.'
    },
    {
        'name': 'Cebolla y Ginkgo Biloba',
        'benefit': 'Estimulan y nutren la zona capilar, favoreciendo el crecimiento saludable y el engrosamiento del nuevo cabello.'
    }
],
    longTailKeywords: [
      'mejor tónico capilar con trichogen al 8 para frenar la caída del cabello',
      'cómo hacer crecer cabello nuevo y rellenar entradas o barba',
      'tónico capilar azenza precio colombia pago contra entrega',
      'loción capilar anticaída con registro invima y envío gratis',
      'tratamiento para el crecimiento del pelo con cebolla y ginkgo biloba',
      'pedir tónico capilar por whatsapp a domicilio'
    ],
    seoFaqs: [
      { q: '¿Cómo debo aplicar este producto para obtener mejores resultados?', a: 'Aplicar directamente en el cuero cabelludo y masajear.' },
      { q: '¿Deja el cabello grasoso?', a: 'No, su textura ligera se absorbe rápidamente sin afectar el brillo y vitalidad natural.' },
      { q: '¿Sirve para hombres y mujeres?', a: 'Es un cuidado de calidad certificada efectivo para cualquier persona que busque fortalecer su cabello.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 89900 },
      { id: '2u', label: '2 Unidades', units: 2, price: 134850 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 179800, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 269700, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Andrés S.', text: 'He notado que se me cae mucho menos el cabello y se siente más grueso.', rating: 5 },
      { name: 'Liliana M.', text: 'Me ha ayudado a que me crezca cabello nuevo en las zonas donde tenía poco. Muy efectivo.', rating: 5 }
    ],
    whyChoose: {
      title: 'Fortalece tu cabello desde la raíz',
      description: 'En AZENZA estamos comprometidos con tu salud, ofrecemos productos con registro INVIMA para el cuidado capilar. Nuestro Tónico ayuda a fortalecer la fibra capilar y estimula el crecimiento saludable con Romero, Quina y Biotina. Calidad certificada para tu volumen capilar.'
    }
  },
  {
    id: 'tufoff',
    masterId: '68746',
    name: 'Tufoff',
    category: 'belleza-integral',
    shortDescription: 'Refresca el aliento al instante con Ciencia Natural.',
    description: `El mal aliento repentino provocado por café, condimentos fuertes, tabaco o sequedad bucal genera incomodidad y desconfianza en interacciones cercanas, mientras que los dulces comerciales solo camuflan el problema añadiendo azúcares nocivos. Tufoff actúa como un neutralizador oral biológico y prebiótico que combina la acción alcalinizante del Bicarbonato de Sodio con Aceites esenciales puros de Menta y Canela, descomponiendo los compuestos volátiles de azufre generados por las bacterias bucales directamente en su origen químico.

Enriquecido con Inulina prebiótica, fortalece el equilibrio de la microbiota oral saludable a largo plazo y previene la proliferación de agentes causantes de la halitosis recurrente, protegiendo las encías y el esmalte al ser 100% libre de azúcares y endulzado con Eritritol apto para diabéticos. Certificado con Registro INVIMA oficial (NSA-0009109-2020), su presentación en caramelos duros de 75g se disuelve lentamente para garantizar una frescura profunda, discreta y de prolongada duración en cualquier momento clave.

✔️ Acción Criogénica Inmediata: Sensación de limpieza profunda que neutraliza olores de comida, tabaco y café al instante.
✔️ Equilibrio Prebiótico: Contiene inulina para proteger la salud de tu boca mientras refresca tu aliento.
✔️ Salud Dental Garantizada: 100% Sin azúcar y con bicarbonato para equilibrar el pH bucal y proteger el esmalte.`,
    seoTitle: 'Tufoff Spray Bucal: Aliento Fresco al Instante y Natural',
    seoDescription: 'Elimina el mal aliento desde la raíz al instante con Tufoff spray bucal refrescante. Práctico y seguro con Registro INVIMA. ¡Pídelo Contra Entrega!',
    benefits: [
      'Neutraliza el aliento a tabaco, alcohol y condimentos al contacto',
      'Protege la microbiota bucal gracias a su aporte de prebióticos (Inulina)',
      'Equilibra el pH de la boca reduciendo la acidez con bicarbonato',
      'Seguro para los dientes: Fórmula con eritritol, totalmente libre de azúcar',
      'Formato discreto de 75g ideal para llevar a juntas o citas'
    ],
    image: '/assets/products/Tuffof.webp',
    basePrice: 85000,
    size: '75g',
    presentation: 'Dulce / Caramelo',
    invima: 'NSA-0009109-2020',
    googleCategory: 'Health & Beauty > Personal Care',
    condition: 'new',
    supportImages: [
      '/assets/products/tufoff-apoyo-1.webp',
      '/assets/products/tufoff-apoyo-2.webp',
      '/assets/products/tufoff-apoyo-3.webp',
      '/assets/products/tufoff-apoyo-4.webp'
    ],
    keywords: 'mal aliento estomacal, halitosis, mal aliento por tabaco o café, bicarbonato para la boca, menta y canela, dulces sin azúcar con eritritol, frescura bucal inmediata, inulina prebiótica, Tufoff original invima, Azenza, comprar colombia, pago contra entrega, envío gratis',
    components: 'Eritritol, Inulina, Aceite de Menta, Canela y Bicarbonato de Sodio',
    componentBenefits: [
    {
        'name': 'Aceite de Menta y Canela',
        'benefit': 'Neutralizan los malos olores bucales, aportando una sensación de frescura al instante.'
    },
    {
        'name': 'Bicarbonato de Sodio',
        'benefit': 'Ayuda a equilibrar el pH bucal para prevenir las causas del mal aliento y mantener la boca limpia.'
    },
    {
        'name': 'Eritritol e Inulina',
        'benefit': 'Apoyan el cuidado de la salud oral con un agradable sabor natural que no afecta tus hábitos saludables.'
    }
],
    longTailKeywords: [
      'mejor producto para quitar el mal aliento estomacal al instante',
      'cómo eliminar el mal aliento por café o cigarrillo de forma natural',
      'tufoff azenza precio colombia oferta pago contra entrega',
      'dulces para el mal aliento con bicarbonato sin azúcar registro invima',
      'comprar caramelos refrescantes para la halitosis con envío gratis',
      'pedir tufoff por whatsapp a domicilio pago al recibir'
    ],
    seoFaqs: [
      { q: '¿Cómo debo consumir este producto para obtener mejores resultados?', a: 'Disolver un dulce lentamente en la boca después de cada comida o según necesites refrescar tu aliento.' },
      { q: '¿Contiene azúcar?', a: 'No, Tufoff es totalmente libre de azúcar. Está endulzado con eritritol, lo que lo hace seguro para los dientes y para personas diabéticas.' },
      { q: '¿Qué diferencia a Tufoff de un chicle normal?', a: 'A diferencia de los chicles, Tufoff contiene bicarbonato y aceites esenciales que neutralizan químicamente las bacterias del olor, no solo ocultan el aroma.' },
      { q: '¿Cuánto dura el efecto de frescura?', a: 'Gracias a su fórmula concentrada, la sensación de limpieza y frescura puede durar varias horas según la actividad.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 85000 },
      { id: '2u', label: '2 Unidades', units: 2, price: 127500 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 170000, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 255000, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Ricardo J.', text: 'Me da una sensación de frescura increíble que dura todo el día. Muy recomendado.', rating: 5 },
      { name: 'Andrés F.', text: 'Excelente para la higiene diaria, se siente la limpieza profunda desde el primer uso.', rating: 5 }
    ],
    whyChoose: {
      title: 'Limpieza y frescura superior',
      description: 'En AZENZA estamos comprometidos con tu salud, ofrecemos productos con registro INVIMA de higiene superior. Tufoff ayuda a reducir el mal de olor y brinda frescura duradera con Mentol y Eucalipto. Calidad certificada para tu seguridad y confianza diaria.'
    }
  },
  // Salud Sexual
  {
    id: 'akha',
    masterId: '61195',
    name: 'Akha (Crema Voluminizante)',
    category: 'salud-sexual',
    shortDescription: 'Firmeza, Elasticidad y Vigor para tu Piel.',
    description: `La pérdida de tonicidad, la resequedad y el desgaste en áreas cutáneas de alta sensibilidad generan falta de vigor y pérdida de turgencia con el paso del tiempo. Akha funciona como un sistema botánico de acción tensora avanzada, integrando la sinergia bioactiva de Acmella Oleracea (efecto tensor natural) con Maca andina, Ginseng y L-Arginina para reactivar la microcirculación dérmica y promover la elasticidad tisular desde la raíz.

A largo plazo, su acción nutritiva estimula la regeneración celular y fortalece la barrera lipídica, traduciéndose en una piel visiblemente más firme, densa y resistente frente al envejecimiento prematuro. Su formulación certificada con Registro INVIMA asegura pureza y máxima biodisponibilidad tópica, con una textura ligera de absorción inmediata que no deja residuos grasos ni mancha las prendas.

✔️ Efecto Tensor Natural: Ayuda a mejorar la firmeza y el tono de la piel de forma progresiva.
✔️ Nutrición Profunda: Enriquecida con Zinc y L-Arginina para promover la renovación celular y vitalidad.
✔️ Absorción Superior: Textura ligera que no mancha la ropa y deja la piel suave y renovada al instante.`,
    seoTitle: 'Crema Akha Reafirmante: Volumen y Firmeza Natural',
    seoDescription: 'Reafirma y mejora el volumen y tonicidad de tu piel con Crema Akha extractos botánicos modeladores. Registro INVIMA. ¡Paga seguro al recibir en casa!',
    benefits: [
      'Piel visiblemente más saludable, firme y tonificada',
      'Protección antioxidante avanzada contra el envejecimiento',
      'Absorción ultra-veloz sin dejar residuos grasos en la ropa',
      'Mejora la elasticidad y suavidad en las zonas aplicadas',
      'Fórmula botánica segura para el cuidado diario de la piel'
    ],
    image: '/assets/products/akha.webp',
    basePrice: 89900,
    size: '30ml',
    presentation: 'Crema',
    invima: 'NSOC19282-23CO',
    googleCategory: 'Health & Beauty > Personal Care > Cosmetics',
    condition: 'new',
    supportImages: [
      '/assets/products/akha-apoyo-2.webp',
      '/assets/products/akha-apoyo-3.webp',
      '/assets/products/akha-apoyo-4.webp'
    ],
    keywords: 'crema voluminizante masculina, vigor masculino, firmeza dérmica íntima, acmella oleracea, maca y ginseng, l arginina, tonicidad y elasticidad, Akha crema original invima, Azenza, comprar colombia, pago contra entrega, envío gratis',
    components: 'Extracto de Acmella Oleracea, Maca, Ginseng, Zinc, L-Arginina',
    componentBenefits: [
    {
        'name': 'Acmella Oleracea',
        'benefit': 'Aporta un efecto tonificante que mejora la firmeza y la elasticidad de la piel en el cuidado masculino.'
    },
    {
        'name': 'Maca, Ginseng y L-Arginina',
        'benefit': 'Brindan una intensa sensación de vitalidad y frescura, ideal para hombres.'
    },
    {
        'name': 'Zinc',
        'benefit': 'Contribuye a mantener la suavidad y el estado óptimo de la piel.'
    }
],
    longTailKeywords: [
      'mejor crema voluminizante y reafirmante masculina con acmella y maca',
      'cómo mejorar la firmeza y tonicidad dérmica masculina naturalmente',
      'akha crema voluminizante azenza precio colombia pago contra entrega',
      'crema íntima masculina con l arginina y ginseng registro invima',
      'comprar crema akha original con envío gratis y empaque discreto',
      'pedir crema masculina akha por whatsapp a domicilio'
    ],
    seoFaqs: [
      { q: '¿Cómo debo aplicar Akha para obtener resultados visibles?', a: 'Se recomienda aplicar en la zona deseada mediante masajes circulares firmes dos veces al día, promoviendo la absorción y el equilibrio natural.' },
      { q: '¿Akha es un producto totalmente natural?', a: 'Sí, su fórmula balanceada utiliza extractos de alta pureza como Maca y Ginseng para promover un bienestar integral y vitalidad en tu piel.' },
      { q: '¿Tiene contraindicaciones o efectos secundarios?', a: 'Es un producto de calidad certificada diseñado para ser seguro en todo tipo de piel bajo las dosis recomendadas, aportando nutrición sin irritaciones.' },
      { q: '¿En cuánto tiempo se nota el efecto reafirmante?', a: 'Muchos usuarios perciben una mejora en la hidratación y suavidad inmediata, con resultados de firmeza notables tras 4 semanas de uso constante.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 89900 },
      { id: '2u', label: '2 Unidades', units: 2, price: 134850 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 179800, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 269700, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Gabriel M.', text: 'He sentido un aumento significativo en mi energía diaria. Muy buen producto natural.', rating: 5 },
      { name: 'Javier R.', text: 'Excelente para mejorar el rendimiento físico. Me siento con mucha más vitalidad.', rating: 5 }
    ],
    whyChoose: {
      title: 'Potencia tu vitalidad natural',
      description: 'En AZENZA estamos comprometidos con tu salud, ofrecemos productos con registro INVIMA de alto desempeño. Akha ayuda a recuperar el rendimiento y la energía masculina mediante Maca, Ginseng y Zinc. Confianza y vitalidad con calidad certificada.'
    }
  },
  {
    id: 'derman',
    masterId: '61835',
    name: 'Derman (Mascarilla Íntima)',
    category: 'salud-sexual',
    shortDescription: 'Protección, Frescura y Equilibrio para tu Zona Íntima.',
    description: `El ardor post-depilación, la fricción constante de la ropa ajustada y la aparición de vellos encarnados comprometen el confort y la integridad de la piel íntima externa. Derman constituye un sistema dermocosmético reparador que sincroniza la acción queratolítica suave del Ácido Salicílico con las propiedades emolientes de la Lanolina, la Arginina y el Ácido Undecilénico para descongestionar los folículos y calmar la reactividad cutánea de inmediato.

Su integración regular en la rutina fortalece la barrera de defensa dérmica, previniendo foliculitis recurrente y preservando la elasticidad y suavidad de los tejidos sin alterar el equilibrio fisiológico de la zona. Certificada con Registro INVIMA, su textura en crema de rápida absorción no deja humedad residual ni mancha las prendas, brindando una sensación reconfortante de frescura y protección continua.

✔️ Adiós a la Irritación: Calma la piel sensible después del afeitado o depilación con láser/cera.
✔️ Protección Natural: Ayuda a mantener el pH equilibrado y la salud de la piel en áreas íntimas.
✔️ Hidratación de Confort: Nutre profundamente, evitando la resequedad y promoviendo la elasticidad.`,
    seoTitle: 'Derman Mascarilla Íntima: Cuidado Post-Depilación y Calma',
    seoDescription: 'Calma la irritación y previene vellos encarnados con Derman mascarilla íntima calmante. Suavidad con Registro INVIMA. ¡Pídela con Envío Gratis nacional!',
    benefits: [
      'Calma y regenera la piel post-depilación o afeitado',
      'Mantiene el equilibrio natural en zonas íntimas externas',
      'Previene de forma efectiva brotes, vellos encarnados e irritaciones',
      'Promueve el confort y la frescura diaria con aroma sutil',
      'Textura suave que se absorbe sin dejar humedad excesiva'
    ],
    image: '/assets/products/Derman.webp',
    basePrice: 89900,
    size: '30ml',
    presentation: 'Crema',
    invima: 'NSOC36162-24CO',
    googleCategory: 'Health & Beauty > Personal Care > Cosmetics',
    condition: 'new',
    supportImages: [
      '/assets/products/derman-apoyo-1.webp',
      '/assets/products/derman-apoyo-2.webp',
      '/assets/products/derman-apoyo-3.webp',
      '/assets/products/derman-apoyo-4.webp'
    ],
    keywords: 'mascarilla íntima, irritación post depilación, vellos encarnados, foliculitis íntima, ácido salicílico y arginina, calmar ardor íntimo, cuidado post afeitado, Derman original invima, Azenza, comprar colombia, pago contra entrega, envío gratis',
    components: 'Ácido Salicílico, Arginina, Ácido Undecilénico y Lanolina',
    componentBenefits: [
    {
        'name': 'Ácido Salicílico',
        'benefit': 'Exfolia suavemente y previene vellos encarnados tras la depilación.'
    },
    {
        'name': 'Arginina y Lanolina',
        'benefit': 'Humectan intensamente y reconfortan la piel frente a la fricción o irritación.'
    },
    {
        'name': 'Ácido Undecilénico',
        'benefit': 'Aporta una agradable sensación de frescura, limpieza y confort prolongado en áreas delicadas.'
    }
],
    longTailKeywords: [
      'mejor crema íntima para calmar la irritación y ardor post depilación',
      'cómo evitar vellos encarnados y granitos en la entrepierna tras rasurarse',
      'derman mascarilla íntima azenza precio colombia pago contra entrega',
      'crema calmante para zona íntima con ácido salicílico y registro invima',
      'comprar crema post afeitado íntimo femenino con envío gratis discreto',
      'pedir derman azenza por whatsapp a domicilio'
    ],
    seoFaqs: [
      { q: '¿Derman ayuda realmente tras la depilación?', a: 'Absolutamente, sus extractos de caléndula calman el ardor y regeneran la piel sensible post-depilación, brindando bienestar instantáneo.' },
      { q: '¿Altera Derman el pH de mi zona íntima?', a: 'No, su fórmula balanceada está diseñada para respetar tu barrera natural y promover un equilibrio saludable sin químicos agresivos.' },
      { q: '¿Con qué frecuencia se puede usar Derman?', a: 'Es ideal para tu rutina de cuidado diario, aplicándola siempre en la piel limpia para mantener la suavidad y protección certificada.' },
      { q: '¿Tiene fragancias que puedan irritar?', a: 'Derman posee un aroma muy sutil y natural, libre de perfumes irritantes, ideal para brindar frescura con total seguridad.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 89900 },
      { id: '2u', label: '2 Unidades', units: 2, price: 134850 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 179800, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 269700, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Mariana L.', text: 'Me brinda una frescura y seguridad única. Es muy suave con la piel.', rating: 5 },
      { name: 'Sofía C.', text: 'Excelente para el cuidado íntimo diario. Me siento muy cómoda usándolo.', rating: 5 }
    ],
    whyChoose: {
      title: 'Cuidado íntimo suave y seguro',
      description: 'En AZENZA estamos comprometidos con tu salud, ofrecemos productos con registro INVIMA de extrema suavidad. Derman protege y refresca tu zona íntima con Caléndula, Aloe Vera y Manzanilla. Bienestar integral con calidad certificada.'
    }
  },
  {
    id: 'haydar',
    masterId: '166801',
    name: 'Haydar (Bebida Energizante)',
    category: 'salud-sexual',
    shortDescription: 'Energía Explosiva y Vitalidad en un Solo Sorbo.',
    description: `Las jornadas de alta demanda física y mental provocan agotamiento acumulado, pérdida de vigor y descensos abruptos de energía en momentos que exigen máxima firmeza y concentración. Haydar actúa como un sistema líquido de reactivación celular y vascular que combina la potencia bioactiva del Borojó y la Maca con la acción sinérgica de Guaraná, Taurina y Vitaminas del Complejo B, optimizando la generación de energía limpia a nivel mitocondrial.

Su efecto sostenido favorece la resistencia física prolongada y la agudeza mental, evitando los picos de nerviosismo y los bajones bruscos característicos de las bebidas estimulantes azucaradas. Cuenta con Registro INVIMA y un refrescante sabor a mora azul en envase práctico de 240ml, garantizando una absorción líquida ultra-rápida en menos de media hora para rendir al máximo con absoluta confianza y seguridad.

✔️ Impulso Natural: Borojó y Maca seleccionados para elevar el ánimo y la fuerza física al instante.
✔️ Mente Despierta: Vitaminas B que optimizan la concentración mental y el procesamiento de energía.
✔️ Sabor y Practicidad: Delicioso sabor a mora azul en un formato listo para tomar y llevar a cualquier parte.`,
    seoTitle: 'Haydar Bebida Energizante: Vigor, Rendimiento y Maca',
    seoDescription: 'Impulsa tu energía, vigor físico y vitalidad con Haydar bebida funcional con Maca y Borojó. Registro INVIMA. ¡Compra online con Pago Contra Entrega!',
    benefits: [
      'Impulso de ánimo y fuerza física con ingredientes botánicos',
      'Maximiza el enfoque mental y la concentración durante horas',
      'Delicioso y refrescante sabor a mora azul sin exceso de gas',
      'Formato práctico de 240ml ideal para antes de la actividad física',
      'Cuidado integral del metabolismo energético con Complejo B'
    ],
    image: '/assets/products/haydar.webp',
    basePrice: 73500,
    size: 'bebida 240ml',
    presentation: 'Bebida',
    invima: 'RSA-3599-2025',
    googleCategory: 'Health & Beauty > Health Care > Fitness & Nutrition',
    condition: 'new',
    supportImages: [
      '/assets/products/haydar-apoyo-2.webp',
      '/assets/products/haydar-apoyo-3.webp',
      '/assets/products/haydar-apoyo-4.webp'
    ],
    keywords: 'bebida energizante natural, vigor masculino y físico, borojó y maca líquida, guaraná y taurina, pre entreno sin taquicardia, energía inmediata mora azul, cansancio extremo, Haydar original invima, Azenza, comprar colombia, pago contra entrega, envío gratis',
    components: 'Borojó, Maca, Taurina, Cafeína, Guaraná y Vitaminas del Complejo B',
    componentBenefits: [
    {
        'name': 'Taurina, Cafeína y Guaraná',
        'benefit': 'Combinación ideal que eleva el enfoque mental, mejora la concentración e incrementa la energía diaria.'
    },
    {
        'name': 'Borojó y Maca',
        'benefit': 'Mantienen el vigor físico prolongado.'
    },
    {
        'name': 'Complejo B',
        'benefit': 'Optimiza el metabolismo energético.'
    }
],
    longTailKeywords: [
      'mejor bebida energizante natural con borojó y maca para rendimiento físico',
      'cómo tener energía explosiva y resistencia sin bajones ni taquicardia',
      'haydar bebida energizante azenza precio colombia pago contra entrega',
      'suplemento líquido vigorizante con registro invima y envío gratis',
      'bebida pre entreno con guaraná y complejo B comprar online',
      'pedir energizante haydar por whatsapp a domicilio'
    ],
    seoFaqs: [
      { q: '¿Cuánto tiempo tarda en hacer efecto el energizante Haydar?', a: 'Gracias a su formato líquido, los extractos de maca y borojó se absorben rápido, sintiendo vitalidad en unos 20 a 30 minutos.' },
      { q: '¿Haydar genera taquicardia o nerviosismo?', a: 'No, su fórmula balanceada optimiza el metabolismo energético de forma fluida, promoviendo un bienestar integral sin excesos.' },
      { q: '¿Se puede tomar Haydar antes de entrenar en el gimnasio?', a: 'Es ideal como pre-entreno natural, brindando el vigor y enfoque necesario para una rutina de alto rendimiento certificado.' },
      { q: '¿Contiene taurina o cafeína natural?', a: 'Sí, utiliza guaraná y taurina en niveles seguros para garantizar una vitalidad y energía superior con total confianza.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 73500 },
      { id: '2u', label: '2 Unidades', units: 2, price: 110250 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 147000, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 220500, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Mauricio L.', text: 'He notado una gran diferencia en mi rendimiento diario. Muy efectivo y natural.', rating: 5 },
      { name: 'Carlos P.', text: 'Me da la energía necesaria para mis actividades más exigentes. Excelente calidad.', rating: 5 }
    ],
    whyChoose: {
      title: 'Rendimiento superior diario',
      description: 'En AZENZA estamos comprometidos con tu salud, ofrecemos productos con registro INVIMA para vitalidad masculina. Haydar potencia tu energía física y mental gracias al Guaraná, Chontaduro y Borojó. Calidad certificada para tu desempeño diario.'
    }
  },
  {
    id: 'instant-virgin',
    masterId: '60017',
    name: 'Instant Virgin (Gel Íntimo)',
    category: 'salud-sexual',
    shortDescription: 'Renovación, Firmeza y Plenitud Femenina.',
    description: `Las variaciones hormonales, el postparto o el desgaste tisular pueden ocasionar pérdida de tono, resequedad molesta y menor sensibilidad en la zona íntima, afectando la espontaneidad y la plenitud en momentos de cercanía. Instant Virgin es un hidro-gel biotecnológico de acción vasotónica y acondicionadora que integra la sinergia botánica de Aloe Vera concentrado con D-Pantenol y Sulfato de Aluminio, generando una tonificación y sensación de contracción natural inmediata al contacto.

A mediano y largo plazo, sus activos humectantes preservan la elasticidad dérmica y refuerzan la hidratación epitelial, respetando escrupulosamente el pH fisiológico y la armonía de la flora externa para evitar irritaciones. Avalado con Registro INVIMA oficial, es una fórmula a base de agua completamente compatible con preservativos, de rápida absorción dérmica que no deja sensación pegajosa ni manchas, garantizando máxima confianza y bienestar femenino.

✔️ Tonificación Inmediata: Efecto de contracción natural que mejora la percepción y sensibilidad íntima.
✔️ Cuidado y Confort: Hidratación superior con Aloe Vera para una piel suave y protegida de irritaciones.
✔️ Armonía Biológica: Su pH equilibrado asegura una compatibilidad total con tu cuerpo y la salud de tu flora.`,
    seoTitle: 'Instant Virgin Gel Íntimo: Firmeza, Cuidado y Confort',
    seoDescription: 'Recupera el confort, elasticidad y tono íntimo con Instant Virgin gel botánico reafirmante. Registro INVIMA certificado. ¡Pídelo con Envío 100% Gratis!',
    benefits: [
      'Brinda una sensación inmediata de mayor firmeza y tono genital',
      'Aumenta la sensibilidad y plenitud en los momentos de intimidad',
      'Hidratación profunda que previene la resequedad post-parto o hormonal',
      'Compatible con preservativos y todo tipo de métodos de barrera',
      'Fórmula discreta de rápida absorción que no deja residuos ni manchas'
    ],
    image: '/assets/products/Instantvirgin.webp',
    basePrice: 79000,
    size: '30ml',
    presentation: 'Gel / Crema',
    invima: '2021DM-0024065',
    googleCategory: 'Health & Beauty > Personal Care > Intimate Care',
    googleTitle: 'Gel Hidratante y Tonificante Íntimo Femenino 30ml - Azenza',
    googleDescription: 'Gel botánico de cuidado íntimo formulado con Aloe Vera, D-Pantenol y minerales naturales. Proporciona hidratación profunda, frescura y tonificación con pH balanceado. Cuenta con Registro INVIMA.',
    condition: 'new',
    supportImages: [
      '/assets/products/instant-virgin-apoyo-1.webp',
      '/assets/products/instant-virgin-apoyo-2.webp'
    ],
    keywords: 'gel íntimo femenino, estrechamiento íntimo, firmeza vaginal natural, resequedad post parto, aloe vera íntimo, d pantenol, lubricación y confort, Instant Virgin original invima, Azenza, comprar colombia, pago contra entrega, envío gratis',
    components: 'Aloe Vera, D-Pantenol y Sulfato de Aluminio',
    componentBenefits: [
    {
        'name': 'Aloe Vera y D-Pantenol',
        'benefit': 'Brindan una hidratación completa y favorecen el cuidado diario de la piel en zonas de alta sensibilidad.'
    },
    {
        'name': 'Sulfato de Aluminio',
        'benefit': 'Aporta una acción acondicionadora suave que ayuda a mantener el confort y el equilibrio natural de la piel.'
    }
],
    longTailKeywords: [
      'mejor gel astringente y reafirmante íntimo femenino post parto',
      'cómo recuperar la tonicidad y sensibilidad íntima de forma natural',
      'instant virgin gel azenza precio colombia pago contra entrega',
      'gel íntimo tonificante a base de agua con registro invima',
      'comprar gel instant virgin original con envío gratis y empaque discreto',
      'pedir instant virgin azenza por whatsapp a domicilio'
    ],
    seoFaqs: [
      { q: '¿Instant Virgin es de uso externo solamente?', a: 'Sí, su aplicación es tópica en la zona íntima externa para brindar bienestar integral y una sensación de firmeza.' },
      { q: '¿Cuánto tiempo dura el efecto de contracción?', a: 'El efecto es inmediato y puede durar durante todo el encuentro íntimo, brindando vitalidad y seguridad.' },
      { q: '¿Es compatible con el uso de preservativos?', a: 'Sí, su fórmula a base de agua es compatible con el látex y otros métodos de barrera.' },
      { q: '¿Se puede usar todos los días?', a: 'Su fórmula es gentil, pero está diseñado principalmente para momentos específicos de intimidad donde se desee mayor tono.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 79000 },
      { id: '2u', label: '2 Unidades', units: 2, price: 118500 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 158000, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 237000, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Andrea G.', text: 'Me ha ayudado a recuperar mi confianza y bienestar íntimo. Muy efectivo.', rating: 5 },
      { name: 'Lorena S.', text: 'Excelente producto, se siente la renovación desde las primeras aplicaciones.', rating: 5 }
    ],
    whyChoose: {
      title: 'Confianza y Plenitud Femenina',
      description: 'En AZENZA apoyamos el bienestar integral de la mujer en todas sus etapas. Instant Virgin ofrece una solución discreta y efectiva para quienes buscan revitalizar su zona íntima con total seguridad, permitiéndote disfrutar de cada momento con máxima confianza.'
    }
  },
  {
    id: 'mamooth',
    masterId: '11360',
    name: 'Mammoth (Crema Voluminizante)',
    category: 'salud-sexual',
    shortDescription: 'Firmeza, Elasticidad y Apariencia Saludable para tu Piel.',
    description: `La piel sometida a tensión continua o cambios de volumen suele experimentar flacidez, asperezas y pérdida de elasticidad tisular, afectando el vigor y la textura natural del área. Mammoth constituye un tratamiento dermocosmético estructurante formulado con el poder tensor bioactivo de la Acmella Oleracea en sinergia con Aceite de Parafina USP de grado dermatológico y Vitamina E pura, diseñado para tonificar la superficie dérmica y reactivar la elasticidad celular.

Su uso sostenido mediante masaje activa la microcirculación superficial y nutre intensamente las capas dérmicas, promoviendo una resistencia superior frente a la resequedad y devolviendo una apariencia turgente, uniforme y tersa. Avalada con Registro INVIMA oficial, su emulsión profesional de absorción inmediata no deja residuos grasos ni mancha la ropa, ofreciendo un cuidado diario de alta pureza y absoluta confianza.

✔️ Efecto Volumen y Firmeza: Mejora la textura y el tono de la piel en zonas críticas con uso constante.
✔️ Hidratación Extrema: Nutre las capas profundas de la piel, manteniéndola elástica y flexible.
✔️ Rápida Absorción: Fórmula de grado profesional que actúa desde la primera aplicación con suavidad.`,
    seoTitle: 'Mammoth Crema Reafirmante: Volumen y Cuidado Natural',
    seoDescription: 'Crema reafirmante y voluminizante Mammoth con extractos botánicos para firmeza y tonicidad. Registro INVIMA. ¡Paga en casa con Pago Contra Entrega!',
    benefits: [
      'Textura cutánea renovada, más suave y uniforme al tacto',
      'Elasticidad y nutrición profunda que previene la flacidez',
      'Fórmula profesional no grasa de rápida penetración dérmica',
      'Ideal para masajes en zonas que requieren mayor tono y vigor',
      'Protección contra radicales libres gracias a su alto contenido de Vitamina E'
    ],
    image: '/assets/products/Mammoth.webp',
    basePrice: 59900,
    size: '30ml',
    presentation: 'Crema',
    invima: 'NSOC19282-23CO',
    googleCategory: 'Health & Beauty > Personal Care > Cosmetics',
    condition: 'new',
    supportImages: [
      '/assets/products/mammoth-apoyo-2.webp',
      '/assets/products/mammoth-apoyo-3.webp',
      '/assets/products/mammoth-apoyo-4.webp'
    ],
    keywords: 'crema voluminizante, crema reafirmante corporal, acmella oleracea, tonicidad tisular, vitamina E pura, flacidez en la piel, textura tersa, Mammoth original invima, Azenza, comprar colombia, pago contra entrega, envío gratis',
    components: 'Acmella Oleracea, Aceite de Parafina USP y Vitamina E',
    componentBenefits: [
    {
        'name': 'Acmella Oleracea',
        'benefit': 'Reconocida por su capacidad para reafirmar y tensar la apariencia visual de la piel.'
    },
    {
        'name': 'Aceite de Parafina USP y Vitamina E',
        'benefit': 'Forman una barrera altamente hidratante que mejora progresivamente la tersura de las áreas deseadas.'
    }
],
    longTailKeywords: [
      'mejor crema reafirmante y voluminizante con acmella oleracea y vitamina E',
      'cómo tonificar y dar firmeza a zonas flácidas del cuerpo con masajes',
      'mammoth crema azenza precio colombia oferta pago contra entrega',
      'crema hidratante tensora corporal profesional con registro invima',
      'comprar crema mammoth original con envío gratis nacional',
      'pedir crema mammoth por whatsapp a domicilio pago al recibir'
    ],
    seoFaqs: [
      { q: '¿Cómo funciona el efecto volumen de Mammoth?', a: 'Su fórmula con Acmella Oleracea mejora la estructura elástica de la dermis, promoviendo una apariencia más firme y un bienestar integral.' },
      { q: '¿Mammoth deja la piel con sensación pegajosa?', a: 'No, es una crema de grado profesional de rápida absorción que hidrata profundamente sin dejar residuos grasos certificados.' },
      { q: '¿Se puede usar Mammoth en todo el cuerpo?', a: 'Sí, es excelente para masajes en piernas, brazos y cualquier zona donde desees recuperar la vitalidad y tono natural.' },
      { q: '¿Es segura para pieles muy secas?', a: 'Absolutamente, su alto contenido de Vitamina E y aceites nutritivos reconforta la piel seca brindando elasticidad inmediata.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 59900 },
      { id: '2u', label: '2 Unidades', units: 2, price: 89850 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 119800, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 179700, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Ricardo H.', text: 'Siento una fuerza y potencia que no tenía antes. Muy efectivo para mis entrenamientos.', rating: 5 },
      { name: 'Andrés V.', text: 'Excelente para mejorar el rendimiento en todo sentido. Me siento con mucha más vitalidad.', rating: 5 }
    ],
    whyChoose: {
      title: 'Cuidado corporal avanzado',
      description: 'En AZENZA estamos comprometidos con tu salud, ofrecemos productos con registro INVIMA de alto desempeño. Mammoth ayuda a mejorar la apariencia de la piel mediante extractos botánicos seleccionados. Calidad certificada para tu cuidado diario.'
    }
  },
  {
    id: 'tyruss-full',
    masterId: '52600',
    name: 'Tyruss Full',
    category: 'salud-bienestar',
    shortDescription: 'Nutrición Verde Avanzada y Apoyo al Equilibrio Femenino.',
    description: `La pesadez metabólica recurrente, la digestión lenta y los desajustes fisiológicos durante etapas de cambio hormonal o sobrecarga digestiva provocan acumulación de toxinas, retención de líquidos e inflamación constante del vientre. Tyruss Full actúa como un sistema de purificación celular alcalinizante y soporte nutricional que sincroniza el poder depurativo de superalimentos verdes como Clorofila concentrada, Espirulina y Chlorella con Proteína de arveja de alta digestibilidad, Almendras y ácidos grasos Omega 3 de chía y linaza.

A mediano y largo plazo, esta matriz vegetal oxigena los tejidos corporales, estimula la eliminación natural de residuos hepáticos e intestinales y optimiza el tránsito del colon sin causar cólicos, devolviendo una sensación duradera de ligereza abdominal, saciedad equilibrada y vigor renovado. Avalado con Registro INVIMA oficial (RSA-0021928-2022), su fino polvo de 500g se disuelve con rapidez en agua o batidos sin azúcares agresivos, convirtiéndose en el batido verde ideal para limpiar y desinflamar tu organismo con total seguridad.

✔️ Desintoxicación Profunda: Ayuda a depurar impurezas del organismo.
✔️ Digestión y Tránsito: Fibra natural que optimiza el movimiento intestinal y reduce la inflamación.
✔️ Energía y Saciedad: Aporta proteínas y grasas saludables que mantienen tu energía constante y controlan el apetito.`,
    seoTitle: 'Tyruss Full Clorofila + Espirulina: Detox y Digestión',
    seoDescription: 'Limpia tu organismo y alcaliniza tu cuerpo con Tyruss Full Clorofila, Espirulina y Manzanilla. Registro INVIMA. ¡Pídelo con Pago Contra Entrega en casa!',
    benefits: [
      "Limpia el intestino de desechos viejos acumulados que causan pesadez y mal aliento",
      "Desinflama la barriga abultada y facilita evacuaciones diarias sin cólicos",
      "Aporta fibra natural y Omega 3 vegetal para una digestión liviana y regular",
      "Elimina la sensación de pesadez y llenura prolongada después de comer",
      "Suave con el colon, fácil de tomar en agua o batidos sin irritar el estómago"
    ],
    image: '/assets/products/Tyrussfull.webp',
    basePrice: 89900,
    size: '500g',
    presentation: 'Polvo',
    invima: 'RSA-0021928-2022',
    googleCategory: 'Health & Beauty > Health Care > Fitness & Nutrition',
    condition: 'new',
    supportImages: [
      '/assets/products/tyrussfull-apoyo-2.webp',
      '/assets/products/tyrussfull-apoyo-3.webp',
      '/assets/products/tyrussfull-apoyo-4.webp'
    ],
    keywords: 'clorofila pura, espirulina y chlorella, batido verde detox, desinflamar vientre abultado, tránsito intestinal, omega 3 vegetal, Tyruss Full original invima, Azenza, comprar colombia, pago contra entrega, envío gratis',
    components: 'Clorofila, Espirulina, Chlorella, Proteína de Arveja, Almendras y Omega 3',
    componentBenefits: [
      {
        name: "Clorofila, Espirulina y Chlorella",
        benefit: "Limpian el colon de suciedad y toxinas viejas acumuladas, quitando el mal aliento y la pesadez corporal."
      },
      {
        name: "Proteína de Arveja y Almendras",
        benefit: "Nutren el cuerpo sin caer pesadas ni inflamar el estómago."
      },
      {
        name: "Omega 3 y Fibra",
        benefit: "Ayudan a evacuar suavemente todos los días sin sufrir de cólicos ni retortijones."
      }
    ],
    longTailKeywords: [
      'mejor batido verde detox para depurar el colon y reconfortar el cuerpo',
      'cómo oxigenar la sangre y mejorar la digestión con clorofila y espirulina',
      'tyruss full precio colombia oferta pago contra entrega envio gratis',
      'suplemento de clorofila y verdes para desinflamar el estomago invima',
      'pedir tyruss full azenza por whatsapp a domicilio'
    ],
    seoFaqs: [
      { q: '¿Tyruss Full ayuda realmente a bajar la inflamación del vientre?', a: 'Sí, su alto contenido de fibra y clorofila optimiza el tránsito intestinal y libera toxinas, promoviendo bienestar integral.' },
      { q: '¿A qué sabe Tyruss Full?', a: 'Tiene un sabor herbal muy suave y refrescante, ideal para combinar con agua o jugos naturales en tu rutina de equilibrio natural.' },
      { q: '¿Pueden tomarlo personas con dietas veganas?', a: 'Totalmente, su fuente de proteína es la arveja y sus componentes son 100% vegetales con calidad certificada.' },
      { q: '¿Se puede reemplazar una comida con Tyruss Full?', a: 'Se recomienda como un complemento nutricional avanzado para potenciar tu salud y vitalidad, no como sustituto total.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 89900 },
      { id: '2u', label: '2 Unidades', units: 2, price: 134850 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 179800, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 269700, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Juan C.', text: 'Me siento con una vitalidad total durante todo el día. Muy buen sabor y efecto.', rating: 5 },
      { name: 'Mateo R.', text: 'Excelente para mejorar el rendimiento en mis actividades diarias. Muy recomendado.', rating: 5 }
    ],
    whyChoose: {
      title: 'Limpieza y Bienestar Natural',
      description: 'En AZENZA impulsamos un estilo de vida saludable basado en la pureza. Tyruss Full es el aliado perfecto para desintoxicar tu organismo de forma suave, ayudando a que tu sistema digestivo funcione sin interrupciones y protegiendo tu salud cardiovascular.'
    }
  },
  {
    id: 'zafir',
    masterId: '166802',
    name: 'Zafir Bebida Energizante',
    category: 'salud-sexual',
    shortDescription: 'Energía Natural Inmediata y Enfoque Mental Superior.',
    description: `La sobrecarga laboral, el estrés cotidiano y el cansancio físico acumulado apagan el vigor corporal, nublan la claridad mental y provocan un agotamiento que frena tus momentos más exigentes. Zafir actúa como un bioactivador funcional líquido que integra la fuerza adaptógena de la Maca y el Borojó con Guaraná natural, Zinc quelado y Vitaminas del Complejo B (B3, B6, B12), estimulando la producción de energía celular limpia sin los picos de ansiedad o taquicardia de los estimulantes convencionales.

A nivel fisiológico, favorece una resistencia orgánica prolongada y un flujo sanguíneo eficiente hacia los tejidos, preservando la agudeza cognitiva y la vitalidad muscular sin bajones energéticos posteriores. Avalada con Registro INVIMA oficial y presentada en formato líquido de 500ml con exquisito sabor a frutos rojos, asegura una biodisponibilidad inmediata para reactivar tu cuerpo y mente con total seguridad y confianza.

✔️ Vitalidad Inmediata: Activa tu cuerpo con extractos naturales que potencian el vigor y la fuerza física.
✔️ Enfoque de Hierro: Nutrientes cerebrales que mantienen tu mente alerta, concentrada y despejada.
✔️ Sabor Refrescante: Una explosión de sabor a frutos rojos y arándanos para refrescar tus sentidos.`,
    seoTitle: 'Zafir Bebida Energizante: Máximo Vigor con Maca y Borojó',
    seoDescription: 'Eleva tu energía y rendimiento físico al instante con Zafir bebida energizante natural. Registro INVIMA oficial. ¡Pídela hoy con Envío Gratis nacional!',
    benefits: [
      'Rendimiento físico optimizado para actividades de alta exigencia',
      'Mantiene la alerta mental constante sin generar nerviosismo o taquicardia',
      'Aporte de vitaminas hidrosolubles y Zinc para el sistema inmune',
      'Delicioso sabor frutal sin necesidad de aditivos químicos agresivos',
      'Energía sostenida ideal para el estudio, el trabajo o el deporte'
    ],
    image: '/assets/products/Zafir.webp',
    basePrice: 73500,
    size: '500ml',
    presentation: 'Líquido',
    invima: 'RSA-3599-2025',
    googleCategory: 'Health & Beauty > Health Care > Fitness & Nutrition',
    condition: 'new',
    supportImages: [
      '/assets/products/zafir-apoyo-2.webp',
      '/assets/products/zafir-apoyo-3.webp',
      '/assets/products/zafir-apoyo-4.webp'
    ],
    keywords: 'bebida energizante natural, frutos rojos, energía para estudiar y trabajar, borojó y maca, taurina y cafeína natural, enfoque mental sin bajones, cansancio físico, Zafir original invima, Azenza, comprar colombia, pago contra entrega, envío gratis',
    components: 'Borojó, Maca, Taurina, Cafeína y Vitaminas B3, B6, B12 y Biotina',
    componentBenefits: [
    {
        'name': 'Taurina y Cafeína',
        'benefit': 'Reducen la fatiga mental y física, favoreciendo un mejor rendimiento'
    },
    {
        'name': 'Borojó y Maca',
        'benefit': 'Entregan vitalidad constante sin bajones.'
    },
    {
        'name': 'Vitaminas B y Biotina',
        'benefit': 'Apoyan la transformación de los nutrientes en energía activa para el día a día.'
    }
],
    longTailKeywords: [
      'mejor bebida energizante natural de frutos rojos para vitalidad y concentración',
      'cómo quitar el agotamiento mental y físico sin taquicardia con maca y borojó',
      'zafir bebida energizante azenza precio colombia pago contra entrega',
      'energizante líquido con vitaminas complejo B y registro invima',
      'comprar bebida funcional energizante con envío gratis nacional',
      'pedir zafir frutos rojos por whatsapp a domicilio'
    ],
    seoFaqs: [
      { q: '¿Zafir quita el sueño si se toma en la noche?', a: 'Al ser un energizante natural, se recomienda consumirlo durante el día para potenciar tu vitalidad y bienestar integral sin afectar el ciclo circadiano.' },
      { q: '¿Contiene azúcares refinados en exceso?', a: 'Zafir está formulado para brindar energía limpia, equilibrando el sabor con un aporte nutricional de calidad certificada.' },
      { q: '¿Es apto para tomarlo durante una larga jornada de manejo?', a: 'Es excelente para mantener la alerta y el enfoque necesarios en actividades que requieren concentración y equilibrio natural.' },
      { q: '¿En cuánto tiempo se siente el efecto de Zafir?', a: 'Su absorción líquida permite que sientas el impulso de los extractos de maca y borojó rápidamente, optimizando tu rendimiento.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 73500 },
      { id: '2u', label: '2 Unidades', units: 2, price: 110250 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 147000, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 220500, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Felipe T.', text: 'Me encanta el sabor y la energía que me da. Muy natural y efectivo.', rating: 5 },
      { name: 'Sonia R.', text: 'Excelente para esos días donde necesito un extra de vitalidad. Muy recomendado.', rating: 5 }
    ],
    whyChoose: {
      title: 'Impulso natural inmediato',
      description: 'En AZENZA estamos comprometidos con tu salud, ofrecemos productos con registro INVIMA para tu vitalidad. Zafir Energizante te brinda energía inmediata y enfoque total sin químicos agresivos. Tu aliado para rendir al máximo con calidad certificada.'
    }
  },
  {
    id: 'guanda-mix',
    masterId: '129302',
    name: 'Guanda Mix',
    category: 'salud-bienestar',
    shortDescription: 'Apoyo Digestivo, Energía Diaria y Sensación de Frescura.',
    description: `La retención de líquidos que hincha el abdomen, la pesadez gastrointestinal tras el almuerzo y la fatiga vespertina provocada por carencias de micronutrientes reducen tu dinamismo y generan una sensación de incomodidad persistente. Guanda Mix actúa como un sistema botánico de drenaje fisiológico, confort digestivo y recarga mineral que sincroniza las propiedades diuréticas y digestivas de la Flor de Jamaica y el Té Verde con la fuerza adaptógena de la Maca y una matriz biodisponible de Magnesio (Citrato y Bisglicinato), Calcio, Hierro y Vitaminas esenciales.

A mediano y largo plazo, esta sinergia de hierbas aromáticas estimula la depuración renal sin alterar el equilibrio electrolítico, acelera la digestión lenta evitando la acumulación de gases y sostiene un nivel de energía física limpio y estable sin generar nerviosismo ni bajones repentinos. Avalado con Registro INVIMA oficial (IRSA-0245-2025), su fino polvo rojo con refrescante sabor a cereza es 100% libre de azúcares añadidos y se disuelve al instante en agua fría o batidos, convirtiéndose en la bebida diaria perfecta para mantenerse ligero, hidratado y activo.

✔️ Digestión Saludable: Combinación botánica que apoya el correcto tránsito y brinda una reconfortante sensación de alivio y frescura.
✔️ Dinamismo Libre de Fatiga: La maca y la flor de jamaica aportan nutrientes clave para optimizar tu energía sin causar ansiedad ni nerviosismo.
✔️ Máxima Pureza: Alimento sin azúcares añadidos, libre de partículas extrañas, garantizando una bebida ligera y de un sabor excepcional.`,
    seoTitle: 'Guanda Mix Infusión: Digestión Ligera y Flor de Jamaica',
    seoDescription: 'Infusión herbal Guanda Mix con Flor de Jamaica y alcachofa para desinflamar y drenar líquidos. Registro INVIMA. ¡Envío Gratis y Pago Contra Entrega!',
    benefits: [
      "Deshincha piernas, tobillos y abdomen eliminando líquidos retenidos",
      "Limpia y descongestiona los riñones cargados gracias a la flor de jamaica",
      "Quita la pesadez estomacal y ayuda a digerir mejor las comidas grasosas",
      "Aporta magnesio y maca para quitar el cansancio y soltar la tensión muscular",
      "Refrescante sabor a cereza sin azúcar, ideal para tomar frío durante el día"
    ],
    image: '/assets/products/guanda-mix.webp',
    basePrice: 79900,
    size: '350g',
    presentation: 'Polvo',
    invima: 'IRSA-0245-2025',
    googleCategory: 'Health & Beauty > Health Care > Fitness & Nutrition',
    condition: 'new',
    supportImages: [
      '/assets/products/guanda-mix-apoyo-1.webp',
      '/assets/products/guanda-mix-apoyo-2.webp',
      '/assets/products/guanda-mix-apoyo-3.webp'
    ],
    keywords: 'retención de líquidos, deshinchar piernas y abdomen, flor de jamaica, té verde digestivo, citrato de magnesio, bisglicinato, maca andina, pesadez estomacal, sabor cereza sin azúcar, Guanda Mix original invima, Azenza, comprar colombia, pago contra entrega, envío gratis',
    components: 'Hierbas aromáticas en polvo, Té verde, Flor de jamaica, Citrato de magnesio, Bisglicinato de magnesio, Carbonato de calcio, Fumarato ferroso, Vitaminas y Minerales',
    componentBenefits: [
      {
        name: "Hierbas Aromáticas y Té Verde",
        benefit: "Desinflaman el estómago hinchado tras comer y eliminan los eructos y la pesadez digestiva."
      },
      {
        name: "Flor de Jamaica y Maca",
        benefit: "Descongestionan los riñones cargados, eliminan la retención de líquidos y dan energía sin dar taquicardia."
      },
      {
        name: "Magnesio Dinámico y Vitaminas",
        benefit: "Sueltan la rigidez muscular, quitan los calambres y calman los nervios alterados."
      }
    ],
    longTailKeywords: [
      'mejor infusión herbal para drenar líquidos retenidos y desinflamar el vientre',
      'cómo limpiar los riñones y deshinchar piernas y tobillos con flor de jamaica',
      'guanda mix azenza precio colombia oferta pago contra entrega',
      'bebida digestiva con citrato de magnesio y té verde registro invima',
      'comprar guanda mix sabor cereza sin azúcar con envío gratis',
      'pedir guanda mix por whatsapp a domicilio'
    ],
    seoFaqs: [
      { q: '¿Cómo se prepara el Guanda Mix?', a: 'Mezclar 1 y media cucharadas (30g) in un vaso de agua, leche o bebida vegetal (240ml); se puede preparar en licuadora o agitando manualmente.' },
      { q: '¿Contiene alérgenos o advertencias?', a: 'Contiene derivados lácteos (no apto para personas con alergia al suero de leche) y no se recomienda ante hipersensibilidad a alguno de sus componentes.' },
      { q: '¿Cuál es la vida útil de Guanda Mix?', a: 'Bajo condiciones adecuadas de almacenamiento y manipulación controlada, conserva todas sus propiedades durante 24 meses.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 79900 },
      { id: '2u', label: '2 Unidades', units: 2, price: 119850 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 159800, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 239700, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Saray Lorena', text: 'Me ha ayudado muchísimo con la digestión pesada, me siento súper ligera y el sabor a cereza es riquísimo.', rating: 5 },
      { name: 'Gustavo Adolfo', text: 'Excelente para tomar frío por las tardes, me da una energía deliciosa sin ponerme ansioso.', rating: 5 }
    ],
    whyChoose: {
      title: 'Frescura y Alivio Digestivo Natural',
      description: 'En AZENZA creamos bienestar natural para tu día a día. Guanda Mix une los secretos digestivos de la Flor de Jamaica, el té verde y el magnesio de máxima asimilación para brindarte un vientre plano y una energía brillante con registro INVIMA garantizado.'
    }
  },
  {
    id: 'nad-1',
    masterId: '129308',
    name: '+NAD',
    category: 'salud-bienestar',
    shortDescription: 'Soporte Avanzado para la Vitalidad y el Bienestar Celular.',
    description: `El agotamiento mitocondrial prematuro, la pérdida gradual de firmeza dérmica y la fatiga mental a media jornada evidencian el descenso acelerado de coenzimas celulares clave provocado por el estrés oxidativo y el paso de los años. +NAD funciona como un sistema de bio-reactivación celular y longevidad que combina Nicotinamida (precursor directo y biodisponible del NAD+) con Trans-Resveratrol polifenólico, Calostro Bovino, Quercetina y Lactoferrina, formulado sobre una base cremosa de coco rica en triglicéridos de cadena media (MCT).

A mediano y largo plazo, esta sinergia mitocondrial estimula las vías fisiológicas de reparación celular, optimiza la transformación de nutrientes en ATP limpio y sostiene la integridad inmunológica y dérmica, devolviendo a tu cuerpo energía metabólica continua, mente despierta y una apariencia saludable y vital. Avalado con Registro INVIMA oficial (2018DM-0018869), su polvo de 350g se absorbe con facilidad sin dejar sensación pesada, convirtiéndose en el estándar diario de nutrición celular avanzada para vivir con plenitud en cualquier etapa.

✔️ Rejuvenecimiento Celular: Protege las mitocondrias y promueve la reparación biológica natural.
✔️ Energía Metabólica: Transforma los nutrientes en energía vital de forma más eficiente y duradera.
✔️ Soporte Inmunológico: Alimento enriquecido para fortalecer las defensas y la vitalidad diaria.`,
    seoTitle: '+NAD + Resveratrol Original: Longevidad y Energía Pura',
    seoDescription: 'Activa la juventud celular y máxima vitalidad con +NAD y Resveratrol concentrado. Alta biodisponibilidad y Registro INVIMA. ¡Compra con Envío Gratis!',
    benefits: [
      "Recarga la energía cuando sientes que el cuerpo no responde a mitad de la tarde",
      "Despeja la mente cansada y combate el agotamiento mental en el trabajo",
      "Ayuda a que el cuerpo se recupere más rápido del desgaste y de los años",
      "Fórmula en polvo con coco que se digiere fácil y no causa pesadez estomacal",
      "Mantiene tu organismo fuerte, activo y con defensas listas para el día a día"
    ],
    image: '/assets/products/nad-1.webp',
    basePrice: 79900,
    size: '350g',
    presentation: 'Polvo',
    invima:'2018DM-0018869',
    googleCategory: 'Health & Beauty > Health Care > Fitness & Nutrition',
    condition: 'new',
    supportImages: [
      '/assets/products/nad-1-apoyo-2.webp',
      '/assets/products/nad-1-apoyo-3.webp',
      '/assets/products/nad-1-apoyo-4.webp'
    ],
    keywords: 'nad suplemento, nicotinamida antiedad, resveratrol concentrado, energía mitocondrial, fatiga celular, 10g colágeno puro, crema de coco, longevidad, +NAD original invima, Azenza, comprar colombia, pago contra entrega, envío gratis',
    components: 'Colágeno (10g), Crema de Coco, NAD, Vitaminas A, C, D, E y complejo B',
    componentBenefits: [
      {
        name: "Precursores de NAD",
        benefit: "Recargan de energía las células agotadas cuando sientes que el cuerpo no da más a mitad de la tarde."
      },
      {
        name: "10g de Colágeno y Crema de Coco",
        benefit: "Nutren y reafirman la piel arrugada y alivian articulaciones tiesas sin irritar el estómago."
      },
      {
        name: "Complejo de Vitaminas",
        benefit: "Suben las defensas y aceleran la recuperación del cuerpo frente al desgaste y los años."
      }
    ],
    longTailKeywords: [
      'mejor suplemento de NAD+ y resveratrol para rejuvenecimiento celular',
      'cómo recuperar la energía física y mitocondrial con nicotinamida y colágeno',
      'nad suplemento azenza precio colombia oferta pago contra entrega',
      'polvo antiedad con 10g de colágeno y crema de coco registro invima',
      'comprar suplemento nad original con envío gratis nacional',
      'pedir nad plus azenza por whatsapp a domicilio'
    ],
    seoFaqs: [
      { q: '¿Qué diferencia a +NAD de otros colágenos?', a: 'Este es un sistema celular que añade Nicotinamida y Resveratrol para apoyar el bienestar desde el núcleo.' },
      { q: '¿Cómo ayuda el calostro bovino en este producto?', a: 'Aporta factores de transferencia que blindan tu sistema inmune para que tu vitalidad y equilibrio natural sean inquebrantables.' },
      { q: '¿Se puede mezclar con bebidas calientes?', a: 'Es preferible consumirlo en jugos o agua a temperatura ambiente para preservar la calidad certificada de sus micronutrientes.' },
      { q: '¿Ayuda con la memoria y la claridad mental?', a: 'Sí, al optimizar la energía celular, favorece el rendimiento cognitivo y el enfoque diario con total seguridad.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 79900 },
      { id: '2u', label: '2 Unidades', units: 2, price: 119850 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 159800, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 239700, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Roberto K.', text: 'Siento que mis células se han renovado. Tengo mucha más claridad mental.', rating: 5 },
      { name: 'Lucía F.', text: 'Excelente para el antienvejecimiento celular. Me siento con más energía vital.', rating: 5 }
    ],
    whyChoose: {
      title: 'Longevidad y energía celular',
      description: 'En AZENZA estamos comprometidos con tu salud, ofrecemos productos con registro INVIMA con ciencia avanzada. +NAD apoya tu bienestar celular con Resveratrol y Quercetina. Fórmula balanceada para una vida saludable con calidad certificada.'
    }
  },
  {
    id: 'titan-coffee',
    masterId: '23013',
    name: 'Titan Coffee',
    category: 'salud-sexual',
    shortDescription: 'Café de Alto Rendimiento para una Energía Inagotable.',
    description: `El cansancio matutino recurrente, la falta de impulso físico y los bajones de lucidez mental a mitad de jornada merman tu rendimiento productivo y tu vitalidad diaria. Titan Coffee funciona como un café biofuncional de alto rendimiento que fusiona café gourmet seleccionado con la sinergia adaptógena y vigorizante de Maca, Borojó y Chontaduro, estructurado sobre una base cremosa de coco rica en triglicéridos de cadena media.

Esta matriz botánica permite una liberación progresiva de energía sin ocasionar acidez, picos de nerviosismo ni descensos abruptos, nutriendo el metabolismo celular para sostener un vigor físico superior y una claridad mental prolongada ante jornadas de alta exigencia. Certificado con Registro INVIMA oficial, su formato en polvo de 400g se disuelve al instante sin lácteos, ofreciendo un sabor refinado y una absorción eficiente para arrancar cada día con máxima potencia.

✔️ ✔️ Ritual de Potencia: El sabor del café gourmet potenciado con Maca y Chontaduro para el vigor.
✔️ Vigor Mental: Mejora la concentración y reduce la fatiga intelectual en jornadas de alta presión.
✔️ Fórmula Nutritiva: Base de coco que aporta grasas saludables y una textura cremosa inigualable.`,
    seoTitle: 'Titan Coffee Original: Café Energizante con Maca y Borojó',
    seoDescription: 'Despierta tu vigor y energía física con Titan Coffee ($69.900). Café funcional con Maca, Borojó y Registro INVIMA. ¡Pídelo con Pago Contra Entrega!',
    benefits: [
      'Desayuno de alto rendimiento para días de extrema exigencia física',
      'Combate el agotamiento laboral y mejora la agudeza mental diaria',
      'Totalmente libre de lácteos con una base nutritiva de crema de coco',
      'Energía prolongada sin generar picos de ansiedad o nerviosismo',
      'Sabor delicioso y textura cremosa de calidad gourmet certificada'
    ],
    image: '/assets/products/Titancoffee.webp',
    basePrice: 69900,
    size: '400g',
    presentation: 'Polvo',
    invima: 'PSA-000982-2018',
    googleCategory: 'Food, Beverages & Tobacco > Beverages > Coffee',
    condition: 'new',
    supportImages: [
      '/assets/products/titancoffee-apoyo-1.webp',
      '/assets/products/titancoffee-apoyo-2.webp',
      '/assets/products/titancoffee-apoyo-3.webp',
      '/assets/products/titancoffee-apoyo-4.webp'
    ],
    keywords: 'café energizante, café con maca y borojó, chontaduro, vigor masculino, potencia y energía matutina, café con crema de coco sin lácteos, concentración mental, Titan Coffee original invima, Azenza, comprar colombia, pago contra entrega, envío gratis',
    components: 'Maca, Chontaduro, Borojó, Café soluble y Crema de Coco',
    componentBenefits: [
    {
        'name':'Café Soluble y Crema de Coco',
        'benefit': 'Elevan el estado de alerta mental y el enfoque sin generar picos de nerviosismo o agitación.'
    },
    {
        'name': 'Maca, Chontaduro y Borojó',
        'benefit': 'Mantienen al cuerpo activo y previenen el agotamiento físico durante el día.'
    }
],
    longTailKeywords: [
      'mejor café funcional con maca y chontaduro para energía y vigor diario',
      'cómo tener energía física prolongada sin acidez con café gourmet y borojó',
      'titan coffee azenza precio colombia oferta pago contra entrega',
      'café saludable sin lácteos con crema de coco y registro invima',
      'comprar titan coffee energizante original con envío gratis nacional',
      'pedir titan coffee por whatsapp a domicilio'
    ],
    seoFaqs: [
      { q: '¿Titan Coffee es apto para personas con intolerancia a la lactosa?', a: 'Sí, su base es Crema de Coco, lo que lo hace gentil con tu estómago y promueve un bienestar integral sin lácteos.' },
      { q: '¿Puedo tomarlo si hago ayuno intermitente?', a: 'Sí, es una excelente opción para brindar vitalidad y energía limpia sin romper tu equilibrio natural metabólico drásticamente.' },
      { q: '¿Se siente el sabor a los extractos de maca y borojó?', a: 'No, su formulación gourmet equilibra perfectamente el sabor del café premium con el beneficio de vigor y calidad certificada.' },
      { q: '¿Contiene azúcar añadida?', a: 'Titan Coffee está diseñado para ser una fuente de energía saludable, permitiéndote disfrutar de tu vitalidad diaria con total confianza.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 69900 },
      { id: '2u', label: '2 Unidades', units: 2, price: 104850 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 139800, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 209700, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Marcos P.', text: 'El café más potente que he probado. Me mantiene activo todo el día.', rating: 5 },
      { name: 'Elena B.', text: 'Sabor intenso y energía duradera. Mi favorito para el trabajo.', rating: 5 }
    ],
    whyChoose: {
      title: 'Energía que Despierta tus Sentidos',
      description: 'En AZENZA transformamos tu ritual matutino en una fuente de vitalidad. Titan Coffee fusiona el sabor más selecto con ingredientes que impulsan tu rendimiento físico y mental, garantizando que empieces cada jornada con la fuerza y el enfoque que necesitas.'
    }
  },
  {
    id: 'hemocream',
    masterId: '58626',
    name: 'Hemocream',
    category: 'salud-bienestar',
    shortDescription: 'Cuidado Botánico Avanzado en Zonas Sensibles.',
    description: `El ardor punzante, la inflamación dolorosa de los plexos vasculares en la zona anorrectal y el malestar agudo durante o después de la evacuación condicionan cada movimiento, generando temor, incomodidad al sentarse y desgaste diario. Hemocream actúa como una emulsión fitoterapéutica vasotónica y descongestionante que sincroniza las propiedades antiinflamatorias y epitelizantes de la Caléndula concentrada y el Aloe Vera con la acción circulatoria del Castaño de Indias, la Centella Asiática, la Manzanilla y la Avena coloidal.

A mediano y largo plazo, esta sinergia botánica reconforta las microfisuras de la mucosa, disminuye la congestión venosa local y refuerza la elasticidad de los tejidos epiteliales sensibles, reduciendo la fricción traumática en cada deposición y devolviendo un confort duradero sin necesidad de corticoides ni químicos agresivos. Avalada con Registro INVIMA oficial (NSOC15678-23CO), su textura en crema de 30ml de absorción rápida no mancha las prendas ni deja sensación grasa, ofreciendo un alivio refrescante inmediato, higiénico y de total discreción.

✔️ Alivio Antiinflamatorio: Calma instantáneamente el dolor, el ardor y la picazón en zonas sensibles.
✔️ Regeneración Celular: La caléndula y el aloe vera aceleran la recuperación natural de los tejidos afectados.
✔️ Facilidad y Confort: Mejora la suavidad de la zona para permitir una evacuación sin traumas ni dolor excesivo.`,
    seoTitle: 'Hemocream Cuidado Botánico: Alivio Rápido y Confort',
    seoDescription: 'Alivio reconfortante inmediato para zonas sensibles y ardor con Hemocream crema botánica. Suave con la piel y Registro INVIMA. ¡Paga seguro al recibir!',
    benefits: [
      "Alivia en minutos el ardor punzante, la picazón y el dolor al sentarse o caminar",
      "Desinflama las venas y paquetes hemorroidales con Castaño de Indias puro",
      "Reduce la irritación, el sangrado leve y la molestia intensa al momento de evacuar",
      "Reconforta los tejidos irritados y acelera la cicatrización natural de la zona",
      "Crema suave que se absorbe al instante, no mancha la ropa interior ni tiene olor fuerte"
    ],
    image: '/assets/products/Hemocream.webp',
    basePrice: 59900,
    size: '30ml',
    presentation: 'Crema',
    invima: 'NSOC15678-23CO',
    googleCategory: 'Health & Beauty > Health Care',
    condition: 'new',
    supportImages: [
      '/assets/products/hemocream-apoyo-1.webp',
      '/assets/products/hemocream-apoyo-2.webp',
      '/assets/products/hemocream-apoyo-3.webp',
      '/assets/products/hemocream-apoyo-4.png'
    ],
    keywords: 'crema para hemorroides, desinflamar hemorroides externas, calmar ardor anal, castaño de indias, caléndula y aloe vera, dolor al sentarse, fisura anal, picazón anal, Hemocream original invima, Azenza, comprar colombia, pago contra entrega, envío gratis',
    components: 'Caléndula, Castaño de Indias, Aloe Vera, Avena, Manzanilla y Centella Asiática',
    componentBenefits: [
      {
        name: "Caléndula, Manzanilla y Aloe Vera",
        benefit: "Calman al instante el fuego, la picazón insoportable y el dolor punzante al sentarte o caminar."
      },
      {
        name: "Castaño de Indias y Centella Asiática",
        benefit: "Desinflaman los paquetes hemorroidales hinchados y reducen el sangrado y dolor al evacuar."
      },
      {
        name: "Avena Pura",
        benefit: "Crea una capa suave que protege la piel irritada y acelera el alivio natural de las heridas."
      }
    ],
    longTailKeywords: [
      'mejor crema botánica para desinflamar hemorroides y calmar el ardor anal',
      'cómo aliviar el dolor al sentarse y evacuar con castaño de indias y caléndula',
      'hemocream azenza precio colombia oferta pago contra entrega',
      'crema natural para fisuras anales sin corticoides con registro invima',
      'comprar crema hemocream original con envío gratis y empaque discreto',
      'pedir hemocream por whatsapp a domicilio pago al recibir'
    ],
    seoFaqs: [
      { q: '¿Cómo debo aplicar este producto para obtener mejores resultados?', a: 'Se recomienda aplicar una pequeña cantidad en la zona afectada 2 o 3 veces al día, preferiblemente después de ir al baño.' },
      { q: '¿Este producto brinda alivio de inmediato?', a: 'Sí, sus extractos de menta y manzanilla brindan una calma refrescante que mejora tu bienestar desde el primer uso.' },
      { q: '¿Contiene corticoides?', a: 'No, es una fórmula 100% botánica, lo que permite un uso prolongado y seguro sin efectos secundarios hormonales.' },
      { q: '¿Es segura durante el embarazo?', a: 'Al ser natural con calidad certificada es generalmente segura, pero siempre recomendamos consultar a su profesional de salud.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 59900 },
      { id: '2u', label: '2 Unidades', units: 2, price: 89850 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 119850, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 179700, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Jorge T.', text: 'Me ha aliviado mucho el malestar y la inflamación. Muy efectiva.', rating: 5 },
      { name: 'Marta S.', text: 'Excelente crema, brinda un alivio rápido y duradero. Calidad certificada.', rating: 5 }
    ],
    whyChoose: {
      title: 'Alivio y confort inmediato',
      description: 'En AZENZA estamos comprometidos con tu salud, ofrecemos productos con registro INVIMA de alivio suave. Este cuidado botánico ayuda a calmar el ardor y la pesadez gracias a la Caléndula y el Aloe Vera. Recupera tu confort con calidad certificada.'
    }
  },
  {
    id: 'ashwagandha',
    masterId: '231797',
    name: 'Ashwagandha',
    category: 'salud-bienestar',
    shortDescription: 'Equilibrio Emocional, Alivio del Estrés y Descanso Reparador.',
        description: `La tensión nerviosa constante, el agotamiento mental al final de la jornada y la dificultad para desconectar la mente al intentar dormir son el reflejo de un sistema nervioso sobrecargado por picos continuos de cortisol. Ashwagandha actúa como un modulador adaptógeno botánico de alta pureza que ayuda a estabilizar el eje neuroendocrino, sincronizando extractos estandarizados de Withania somnifera con una matriz lipídica que maximiza la absorción de los withanólidos activos sin generar somnolencia diurna.

A mediano y largo plazo, esta regulación adaptógena disminuye la hiperreactividad frente al estrés diario, propicia un descanso nocturno profundo y reparador, y restituye la claridad mental, permitiéndote recuperar la serenidad, la concentración y una vitalidad equilibrada. Con respaldo de Registro INVIMA oficial (NSA-2948-2026), su formato en cápsulas blandas (softgel) asegura una biodisponibilidad superior y máxima tolerancia digestiva, eliminando la fricción para tu bienestar integral.

✔️ Control del Estrés: Regula el cortisol, reduce la ansiedad y promueve la calma.
✔️ Sueño Reparador: Combate el insomnio y relaja el sistema nervioso sin causar somnolencia diurna.
✔️ Resiliencia Natural: Optimiza el rendimiento mental y aporta un estado de ánimo positivo.`,
    seoTitle: 'Ashwagandha Pura Original: Control de Estrés y Sueño',
    seoDescription: 'Compra Ashwagandha pura por solo $69.900 COP. Reduce el estrés, baja el cortisol y duerme mejor. Registro INVIMA garantizado y Envío Gratis a Colombia.',
    benefits: [
      "Baja el estrés, calma los nervios y alivia la opresión en el pecho por angustia",
      "Ayuda a dormir profundo sin despertarse a las 3 de la mañana con preocupaciones",
      "Quita la sensación de cabeza saturada y mejora la concentración en el trabajo",
      "Evita que el estrés te baje las defensas o te cause dolores de cabeza tensionales",
      "Cápsulas blandas fáciles de pasar, suaves con el estómago y sin causar sueño de día"
    ],
    image: '/assets/products/ashwagandha.webp',
    basePrice: 69900,
    size: '60 Unidades',
    presentation: 'Capsulas Blandas',
    invima: 'NSA-2948-2026',
    googleCategory: 'Health & Beauty > Health Care > Fitness & Nutrition',
    condition: 'new',
    supportImages: [
      '/assets/products/ashwagandha-apoyo-1.webp',
      '/assets/products/ashwagandha-apoyo-2.webp',
      '/assets/products/ashwagandha-apoyo-3.webp'
    ],
    keywords: 'ashwagandha cápsulas, bajar el cortisol, estrés y ansiedad, ataques de pánico, insomnio y sueño profundo, adaptógeno natural, tensión nerviosa, paz mental, Ashwagandha original invima, Azenza, comprar colombia, pago contra entrega, envío gratis',
    components: 'Ashwagandha, Gelatina, Glicerina, Sorbato de Potasio, Aceite Vegetal, Lecitina de Soya, Dioxido de Silicio',
    componentBenefits: [
      {
        name: "Extracto Puro de Ashwagandha",
        benefit: "Baja los niveles de cortisol, calma los ataques de nervios y quita la opresión en el pecho por angustia."
      },
      {
        name: "Matriz Lipídica de Fácil Absorción",
        benefit: "Permite que el cuerpo absorba el extracto sin causarte ardor estomacal ni somnolencia en el día."
      }
    ],
    longTailKeywords: [
      'mejor suplemento de ashwagandha pura en Colombia para bajar el cortisol',
      'cómo quitar el estrés la ansiedad y el insomnio sin fármacos',
      'ashwagandha azenza precio colombia oferta pago contra entrega',
      'cápsulas blandas de ashwagandha para dormir profundo con registro invima',
      'comprar adaptógeno natural para la fatiga mental con envío gratis',
      'pedir ashwagandha original por whatsapp a domicilio'
    ],
    seoFaqs: [
      { q: '¿En cuánto tiempo se sienten los efectos de la Ashwagandha?', a: 'Muchos usuarios sienten un alivio de la tensión nerviosa y una mejor calidad del sueño desde la primera semana de uso constante.' },
      { q: '¿Produce somnolencia durante el día?', a: 'No, como adaptógeno ayuda a equilibrar tu cuerpo, dándote energía por el día y promoviendo el descanso reparador en la noche.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 69900 },
      { id: '2u', label: '2 Unidades', units: 2, price: 104850 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 139800, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 209700, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Camila V.', text: 'Sufría de mucho insomnio por el trabajo y la ashwagandha me ha devuelto el sueño profundo. Me despierto renovada.', rating: 5 },
      { name: 'Felipe M.', text: 'Excelente para el estrés del día a día, me siento mucho más tranquilo y enfocado.', rating: 5 }
    ],
    whyChoose: {
      title: 'Serenidad y Resiliencia Natural',
      description: 'En AZENZA impulsamos tu bienestar con extractos adaptógenos de alta pureza. Nuestra Ashwagandha ayuda a regular el cortisol para brindarte paz mental y un descanso profundo con registro sanitario oficial.'
    }
  },
  {
    id: 'resveratrol-nad',
    masterId: '232077',
    name: 'Resveratrol y Vitamina B3 (NAD)',
    category: 'salud-bienestar',
    shortDescription: 'Energía y vitalidad Celular, Protección Antienvejecimiento.',
        description: `La fatiga celular persistente, el desgaste prematuro de la piel y la pérdida de vitalidad física son consecuencias directas del declive de reservas metabólicas y el estrés oxidativo acumulado. El complejo de Resveratrol y Vitamina B3 (NAD) actúa como un sistema botánico y celular que integra polifenoles de alta pureza con precursores activos de NAD+, estimulando las vías de reparación del ADN y la producción eficiente de energía mitocondrial.

A mediano y largo plazo, este soporte sinérgico optimiza la oxigenación de los tejidos, desacelera el daño oxidativo celular y preserva la firmeza y turgencia natural de la piel y las articulaciones. Con respaldo de Registro INVIMA oficial (NSA-2948-2026), su formato en cápsulas blandas (softgel) asegura una máxima biodisponibilidad y asimilación inmediata sin intolerancia gástrica, revitalizando tu organismo día tras día.

✔️ Longevidad Celular: Activa los genes de la juventud y promueve de forma segura la reparación del ADN.
✔️ Energía Mitocondrial: La vitamina B3 y el NAD+ optimizan la energía celular, reduciendo eficazmente el cansancio.
✔️ Firmeza y Elasticidad: Combate los radicales libres para restaurar la turgencia natural de la piel y los tejidos.`,

    seoTitle: 'Resveratrol + NAD Original: Energía y Juventud Celular',
    seoDescription: 'Fórmula antiedad con Resveratrol y Vitamina B3 (+NAD) por $69.900 COP. Energía celular y longevidad con Registro INVIMA. ¡Paga en casa con Envío Gratis!',
    benefits: [
      "Combate el cansancio crónico y la falta de aire o fuerza al hacer tus labores",
      "Frena el envejecimiento prematuro y devuelve la lozanía a la piel reseca o marchita",
      "Protege el corazón y mejora la circulación para aliviar manos y pies fríos",
      "Ayuda a recuperar la energía en el cuerpo desgastado por los años o el trabajo",
      "Cápsulas blandas (softgel) de alta absorción que no provocan acidez ni malestar"
    ],
    image: '/assets/products/resveratrol-nad.webp',
    basePrice: 69900,
    size: '60 Unidades',
    presentation: 'Capsulas Blandas',
    invima: 'NSA-2948-2026',
    googleCategory: 'Health & Beauty > Health Care > Fitness & Nutrition',
    condition: 'new',
    supportImages: [
      '/assets/products/resveratrol-nad-apoyo-1.webp',
      '/assets/products/resveratrol-nad-apoyo-2.webp',
      '/assets/products/resveratrol-nad-apoyo-3.webp'
    ],
    keywords: 'resveratrol con nad, vitamina b3 nicotinamida, rejuvenecimiento celular, antiedad arrugas, energía mitocondrial, cansancio crónico, longevidad cápsulas, circulación, Resveratrol NAD original invima, AZENZA, comprar colombia, pago contra entrega, envío gratis',
    components: 'Resveratrol, Vitamina B3 (Nicotinamida), precursores de NAD+, Glicerina, Sorbato de Potasio, Aceite Vegetal',
    componentBenefits: [
      {
        name: "Resveratrol y Vitamina B3",
        benefit: "Frenan el envejecimiento celular prematuro, quitan el cansancio crónico y devuelven la lozanía a la piel marchita."
      },
      {
        name: "Matriz Lipídica de Fácil Absorción",
        benefit: "Garantiza que los nutrientes lleguen directo a tus células sin perderse en la digestión ni causar acidez."
      }
    ],
    longTailKeywords: [
      'mejor suplemento de resveratrol y vitamina B3 NAD en Colombia',
      'cómo aumentar el NAD celular y frenar el envejecimiento de la piel',
      'resveratrol nad azenza precio colombia oferta pago contra entrega',
      'cápsulas blandas de resveratrol con nicotinamida registro invima',
      'comprar antioxidante celular antiedad con envío gratis nacional',
      'pedir resveratrol y nad por whatsapp a domicilio'
    ],
    seoFaqs: [
      { q: '¿Qué es el NAD y cómo ayuda con el envejecimiento?', a: 'El NAD+ es una coenzima celular indispensable para la producción de energía y la reparación del ADN. Sus niveles disminuyen con la edad, y precursores como la Vitamina B3 ayudan a restaurarlos.' },
      { q: '¿Cómo se debe consumir?', a: 'Debe tomarse por via oral acompañado de agua o preferiblemente de alimentos.' },
      { q: '¿Es apto para adultos mayores?', a: 'Absolutamente, es ideal para personas que buscan mantener la agilidad mental, la firmeza cutánea y la energía celular.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 69900 },
      { id: '2u', label: '2 Unidades', units: 2, price: 104850 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 139800, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 209700, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Diana R.', text: 'He sentido un cambio enorme en mi piel y mi nivel de energía. Se siente la diferencia en la vitalidad diaria.', rating: 5 },
      { name: 'Carlos T.', text: 'Es un excelente producto antienvejecimiento, me siento menos cansado por las tardes.', rating: 5 }
    ],
    whyChoose: {
      title: 'Ciencia Celular y Rejuvenecimiento',
      description: 'En AZENZA comprometidos con tu longevidad. Resveratrol y Vitamina B3 (NAD) une ciencia mitocondrial con pureza antioxidante para reactivar tus niveles de energía y elasticidad celular de forma certificada.'
    }
  },
  {
    id: 'vinagre-manzana',
    masterId: '232090',
    name: 'Vinagre de Manzana',
    category: 'salud-bienestar',
    shortDescription: 'Equilibrio Digestivo, Control de Ansiedad y Metabolismo Activo.',
        description: `La pesadez estomacal tras cada comida, la distensión abdominal recurrente y los picos repentinos de ansiedad por alimentos dulces reflejan un metabolismo digestivo enlentecido y un pH gástrico desbalanceado. Vinagre de Manzana actúa como un regulador digestivo y metabólico que concentra los ácidos orgánicos activos de la manzana en una matriz oleosa, facilitando la descomposición enzimática de nutrientes sin el sabor agresivo ni el desgaste del esmalte dental del vinagre líquido.

A mediano y largo plazo, este estímulo gástrico optimiza la motilidad intestinal, estabiliza la respuesta glucémica posprandial y previene la retención de gases, promoviendo una sensación constante de ligereza y vientre desinflamado. Con respaldo de Registro INVIMA oficial (NSA-2948-2026), su presentación en cápsulas blandas (softgel) asegura una dosificación exacta, absorción limpia y libre de acidez bucal para acompañar tus metas diarias con total seguridad.

✔️ Activación de Energía: Transforma los alimentos en combustible celular para apoyar un rendimiento físico y mental superior.
✔️ Metabolismo y Control: Acelera el metabolismo de forma natural y ayuda a evitar que el cuerpo acumule grasa.
✔️ Salud Digestiva: Disminuye la inflamación abdominal, controla los antojos de dulce y promueve una digestión ligera.`,
    seoTitle: 'Vinagre de Manzana Puro: Metabolismo y Digestión Ligera',
    seoDescription: 'Acelera tu metabolismo y mejora la digestión con Vinagre de Manzana puro ($69.900). Suplemento natural con Registro INVIMA. ¡Pídelo Contra Entrega!',
    benefits: [
      "Quita la ansiedad incontrolable de picar dulces, harinas y panes entre comidas",
      "Alivia la pesadez de estómago, los gases y el reflujo tras comidas abundantes",
      "Ayuda a desinflamar el abdomen y apoya la quema natural de grasa acumulada",
      "Ayuda a mantener estables los niveles de azúcar en sangre después de comer",
      "Todos los beneficios del vinagre en cápsulas blandas: sin mal sabor ni daño al esmalte"
    ],
    image: '/assets/products/vinagre-manzana.webp',
    basePrice: 69900,
    size: '60 Unidades',
    presentation: 'Capsulas Blandas',
    invima: 'NSA-2948-2026',
    googleCategory: 'Health & Beauty > Health Care > Fitness & Nutrition',
    condition: 'new',
    supportImages: [
      '/assets/products/vinagre-manzana-apoyo-1.webp',
      '/assets/products/vinagre-manzana-apoyo-2.webp',
      '/assets/products/vinagre-manzana-apoyo-3.webp',
      '/assets/products/vinagre-manzana-apoyo-4.webp'
    ],
    keywords: 'vinagre de manzana cápsulas, adelgazar abdomen, ansiedad por dulces y harinas, acelerar metabolismo, vientre plano, reflujo y pesadez, glucosa en sangre, digestión ligera, Vinagre de Manzana original invima, AZENZA, comprar colombia, pago contra entrega, envío gratis',
    components: 'Vinagre de Sidra de Manzana, Aceite Vegetal y Lecitina de Soya',
    componentBenefits: [
      {
        name: "Vinagre de Sidra de Manzana Concentrado",
        benefit: "Quita la ansiedad de comer harinas y dulces, acelera la digestión de grasas y desinflama el vientre abultado."
      },
      {
        name: "Cápsula Blanda Suave",
        benefit: "Te da todos los beneficios quemagrasa y digestivos del vinagre sin dañar tus dientes ni quemar tu garganta."
      }
    ],
    longTailKeywords: [
      'mejor vinagre de manzana en cápsulas blandas Colombia para bajar de peso',
      'cómo tomar vinagre de manzana sin dañar el esmalte de los dientes',
      'vinagre de manzana azenza precio colombia oferta pago contra entrega',
      'suplemento para desinflamar el estómago y controlar la ansiedad de comer',
      'comprar vinagre de sidra de manzana puro con registro invima y envío gratis',
      'pedir vinagre de manzana por whatsapp a domicilio'
    ],
    seoFaqs: [
      { q: '¿Daña este vinagre el esmalte de los dientes?', a: 'No, al estar formulado en una mezcla en polvo balanceada para diluir, no entra en contacto ácido directo con el esmalte como el vinagre líquido puro.' },
      { q: '¿Cómo se debe Consumir?', a: 'Debe tomarse por via oral con un vaso de agua, preferiblemente antes de la comida principal para optimizar la digestión y controlar saciedad.' },
      { q: '¿Es apto para personas con gastritis?', a: 'Sí, su fórmula amortiguada y balanceada ayuda a regular la acidez de forma natural sin agredir las mucosas.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 69900 },
      { id: '2u', label: '2 Unidades', units: 2, price: 104850 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 139800, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 209700, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Isabela M.', text: 'Me ha ayudado muchísimo a desinflamarme el estómago y a controlar la ansiedad por las tardes. Súper recomendado.', rating: 5 },
      { name: 'Andrés Q.', text: 'Excelente opción para tener los beneficios del vinagre de manzana sin su sabor fuerte.', rating: 5 }
    ],
    whyChoose: {
      title: 'Ligereza y Equilibrio Metabólico',
      description: 'En AZENZA te ofrecemos soluciones de salud digestiva seguras. Nuestro Vinagre de Manzana estimula la buena digestión y el balance metabólico con una fórmula gentil y registro INVIMA garantizado.'
    }
  },
  {
    id: 'citrato-potasio-magnesio',
    masterId: '232080',
    name: 'Citrato de Potasio y Magnesio',
    category: 'salud-bienestar',
    shortDescription: 'Equilibrio Electrolítico, Bienestar Muscular, Sistema Nervioso y Salud Cardiovascular.',
        description: `Los calambres nocturnos repentinos, la fatiga muscular tras mínimos esfuerzos y la sensación de retención de líquidos son manifestaciones claras de un déficit en el balance electrolítico celular. Citrato de Potasio y Magnesio actúa como un sistema mineral de absorción quelada que sincroniza dos cationes esenciales en sus formas orgánicas más biodisponibles, regulando la bomba sodio-potasio y desactivando la sobreexcitación muscular sin causar molestias estomacales.

A mediano y largo plazo, este equilibrio mineral restituye la contractilidad muscular armónica, favorece el drenaje fisiológico del exceso de líquidos y colabora en el mantenimiento de una presión arterial saludable y un descanso nocturno continuo. Avalado con Registro INVIMA oficial (NSA-2948-2026), su formulación en cápsulas blandas (softgel) garantiza una disolución entérica rápida y libre de sabor amargo, brindando soporte neuromuscular confiable y sostenido.

✔️ Bienestar Muscular: Alivia la tensión, previene calambres y espasmos, y acelera la recuperación física.
✔️ Sistema Nervioso y Sueño: Promueve una relajación profunda, ayuda a controlar el estrés y mejora la calidad del descanso.
✔️ Balance y Energía: Optimiza el equilibrio de líquidos en el cuerpo, regula la presión y combate el cansancio crónico.`,
    seoTitle: 'Citrato de Potasio y Magnesio: Cero Calambres y Energía',
    seoDescription: 'Elimina calambres y fatiga con Citrato de Potasio y Magnesio ($69.900). Alta biodisponibilidad y Registro INVIMA. ¡Envío Gratis y Pago al Recibir!',
    benefits: [
      "Elimina los tirones y calambres dolorosos en piernas, pantorrillas y pies de noche",
      "Desinflama piernas y pies hinchados por retención de líquidos y exceso de sal",
      "Ayuda a regular la presión y relaja los vasos sanguíneos tensos",
      "Suelta la tensión en la espalda y cuello para dormir relajado toda la noche",
      "Cápsulas blandas de máxima absorción mineral, sin sabor amargo y suaves con el colon"
    ],
    image: '/assets/products/citrato-potasio-magnesio.webp',
    basePrice: 69900,
    size: '60 Unidades',
    presentation: 'Capsulas Blandas',
    invima: 'NSA-2948-2026',
    googleCategory: 'Health & Beauty > Health Care > Fitness & Nutrition',
    condition: 'new',
    supportImages: [
      '/assets/products/citrato-potasio-magnesio-apoyo-1.webp',
      '/assets/products/citrato-potasio-magnesio-apoyo-2.webp',
      '/assets/products/citrato-potasio-magnesio-apoyo-3.webp'
    ],
    keywords: 'citrato de potasio y magnesio, calambres en las piernas, dolor nocturno pantorrillas, retención de líquidos, pies y piernas hinchadas, presión arterial, tensión muscular cuello y espalda, Citrato de Potasio y Magnesio original invima, AZENZA, comprar colombia, pago contra entrega, envío gratis',
    components: 'Citrato de Potasio, Citrato de Magnesio',
    componentBenefits: [
      {
        name: "Citrato de Potasio",
        benefit: "Elimina la sal y los líquidos retenidos que hinchan pies y piernas, y ayuda a regular la presión arterial."
      },
      {
        name: "Citrato de Magnesio",
        benefit: "Quita de raíz los tirones y calambres nocturnos en las piernas, relajando los músculos contraídos."
      },
      {
        name: "Matriz Lipídica de Fácil Absorción",
        benefit: "Permite una absorción mineral inmediata sin sabor amargo ni molestias en el estómago."
      }
    ],
    longTailKeywords: [
      'mejor citrato de potasio y magnesio en Colombia para calambres nocturnos',
      'cómo quitar los tirones en las piernas y deshinchar los pies con minerales',
      'citrato de potasio y magnesio azenza precio colombia pago contra entrega',
      'cápsulas blandas de potasio y magnesio con registro invima y envío gratis',
      'suplemento mineral para regular la presión y evitar la fatiga muscular',
      'pedir citrato de potasio y magnesio por whatsapp a domicilio'
    ],
    seoFaqs: [
      { q: '¿Por qué son mejores los citratos?', a: 'Los citratos son formas orgánicas que el cuerpo humano absorbe y asimila con un 90% más de efectividad que los óxidos o carbonatos de magnesio y potasio.' },
      { q: '¿Ayuda con la retención de líquidos?', a: 'Sí, el potasio actúa como un regulador natural que facilita la expulsión del exceso de sodio a través de los riñones.' },
      { q: '¿Tiene alguna contraindicación?', a: 'Personas con insuficiencia renal severa o afecciones cardíacas graves deben consultar a su médico antes de consumir.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 69900 },
      { id: '2u', label: '2 Unidades', units: 2, price: 104850 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 139800, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 209700, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Sonia P.', text: 'Sufría de calambres todas las noches y desde la primera semana que tomé el citrato de potasio y magnesio desaparecieron. Increíble.', rating: 5 },
      { name: 'Ricardo G.', text: 'Excelente para recuperar electrolitos después de mis entrenamientos en bicicleta. No me volví a fatigar.', rating: 5 }
    ],
    whyChoose: {
      title: 'Balance Mineral y Alivio Neuromuscular',
      description: 'En AZENZA garantizamos tu bienestar con formulaciones de alta biodisponibilidad. Nuestro Citrato de Potasio y Magnesio relaja el sistema muscular y protege tus articulaciones y corazón con calidad certificada.'
    }
  },
  {
    id: 'oregano',
    masterId: '231795',
    name: 'Orégano',
    category: 'salud-bienestar',
    shortDescription: 'Inmunidad Avanzada, Antiparasitario y Balance Digestivo.',
        description: `La inflamación intestinal persistente, el exceso de gases por disbiosis, la recurrencia de molestias fúngicas y la debilidad en las defensas suelen ser el resultado de un desequilibrio en la microbiota y la proliferación de microorganismos oportunistas. Orégano actúa como un sistema botánico de purificación y defensa inmunitaria que concentra fitocompuestos bioactivos, en especial carvacrol y timol, creando una barrera natural que inhibe agentes patógenos sin barrer la flora bacteriana benéfica.

A mediano y largo plazo, esta depuración botánica reduce la fermentación gástrica anormal, alivia la sensación de hinchazón abdominal y refuerza la respuesta inmunológica celular ante cambios ambientales o desgaste físico. Con respaldo de Registro INVIMA oficial (NSA-2948-2026), su presentación en cápsulas blandas (softgel) permite aprovechar toda la potencia antimicrobiana del aceite esencial concentrado sin experimentar el ardor orofaríngeo ni el reflujo característico del extracto líquido tradicional.

✔️ Escudo e Inmunidad: Potente protector natural que fortalece las defensas y combate amenazas externas gracias a su acción antioxidante.
✔️ Bienestar Digestivo: Alivia los gases, reduce la inflamación estomacal y apoya el funcionamiento correcto y ligero de todo el sistema digestivo.
✔️ Limpieza Profunda: Ayuda a regular la microbiota intestinal, mitiga la candidiasis y depura el organismo de manera segura.`,
    seoTitle: 'Aceite de Orégano Concentrado: Defensas y Salud Digestiva',
    seoDescription: 'Poderoso antibacteriano natural y escudo inmune con Aceite de Orégano concentrado ($69.900). Registro INVIMA oficial. ¡Paga en casa con Envío Gratis!',
    benefits: [
      "Ayuda a eliminar parásitos intestinales, bacterias nocivas y exceso de cándida",
      "Desinflama la barriga hinchada, quita los gases con mal olor y alivia los cólicos",
      "Limpia el tracto digestivo a fondo para que puedas comer sin miedo a la distensión",
      "Refuerza las defensas naturales contra infecciones respiratorias y de garganta",
      "Cápsulas blandas que evitan el ardor en la boca y el fuerte picor del aceite líquido"
    ],
    image: '/assets/products/oregano.webp',
    basePrice: 69900,
    size: '60 Unidades',
    presentation: 'Capsulas Blandas',
    invima: 'NSA-2948-2026',
    googleCategory: 'Health & Beauty > Health Care > Fitness & Nutrition',
    condition: 'new',
    supportImages: [
      '/assets/products/oregano-apoyo-1.webp',
      '/assets/products/oregano-apoyo-2.webp',
      '/assets/products/oregano-apoyo-3.webp',
      '/assets/products/oregano-apoyo-4.webp'
    ],
    keywords: 'aceite de orégano cápsulas, carvacrol concentrado, parásitos intestinales, eliminar hongo cándida, antiparasitario natural, gases con mal olor, limpiar el colon, defensas altas, Orégano original invima, AZENZA, comprar colombia, pago contra entrega, envío gratis',
    components: 'Orégano, Glicerina, Sorbato de Potasio, aceite Vegetal, Lecitina de Soya, Dioxido de Silicio',
    componentBenefits: [
      {
        name: "Extracto Concentrado de Orégano (Carvacrol)",
        benefit: "Mata parásitos, hongos y bacterias dañinas en el intestino, quitando los gases fétidos y la barriga inflada."
      },
      {
        name: "Cápsula Blanda Entérica",
        benefit: "Llega directo al intestino para limpiar a fondo sin producir ardor en la boca ni reflujo a orégano."
      }
    ],
    longTailKeywords: [
      'mejor suplemento de orégano con carvacrol en Colombia para desparasitar',
      'cómo eliminar el hongo cándida y limpiar el intestino naturalmente',
      'aceite de orégano azenza precio colombia oferta pago contra entrega',
      'cápsulas blandas de orégano para gases fétidos y colon con registro invima',
      'comprar antibacteriano y antiparasitario natural con envío gratis',
      'pedir cápsulas de orégano por whatsapp a domicilio'
    ],
    seoFaqs: [
      { q: '¿Qué es el carvacrol y por qué es importante?', a: 'El carvacrol es el compuesto activo principal del orégano, reconocido científicamente por sus potentes propiedades antiparasitarias y fungicidas.' },
      { q: '¿Cómo ayuda en la digestión?', a: 'Elimina las bacterias nocivas en el colon que provocan fermentación y gases, permitiendo que la flora saludable se restablezca.' },
      { q: '¿Es seguro para uso continuo?', a: 'Se recomienda consumirlo en ciclos de detox (15 a 30 días) para realizar una depuración digestiva profunda y segura.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 69900 },
      { id: '2u', label: '2 Unidades', units: 2, price: 104850 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 139800, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 209700, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Lorena B.', text: 'Un suplemento increíble para el sistema digestivo. Me ayudó a limpiar mi colon y la inflamación desapareció.', rating: 5 },
      { name: 'Juan P.', text: 'Excelente para las defensas. He notado que ya no me enfermo tan seguido desde que lo tomo.', rating: 5 }
    ],
    whyChoose: {
      title: 'Purificación e Inmunidad Botánica',
      description: 'En AZENZA creemos en el poder curativo de la fitoterapia. Nuestro suplemento de Orégano ofrece una concentración óptima de carvacrol para restaurar tu armonía digestiva de manera certificada.'
    }
  },
  {
    id: 'bisglicinato-magnesio',
    masterId: '232091',
    name: 'Bisglicinato de Magnesio',
    category: 'salud-bienestar',
    shortDescription: 'Relajación Profunda, Descanso Reparador y Alivio del Estrés.',
        description: `La rigidez cervical persistente, la hiperactividad mental antes de dormir y los espasmos musculares involuntarios son señales evidentes de un agotamiento neurofisiológico originado por la demanda constante del estrés moderno. Bisglicinato de Magnesio actúa como un sistema de relajación neuromuscular profunda que une cada átomo de magnesio a dos moléculas de glicina, un aminoácido calmante que potencia el paso a través de la barrera intestinal sin producir el efecto laxante de otras sales de magnesio.

A mediano y largo plazo, este aporte de alta biodisponibilidad modula los receptores GABA en el cerebro, amortigua los picos de cortisol y acelera la recuperación de las fibras musculares tensas, garantizando un despertar con ligereza corporal y lucidez mental. Con Registro INVIMA oficial (NSA-2948-2026), su formato en cápsulas blandas (softgel) proporciona una asimilación suave y de alta tolerancia gástrica para restituir tu calma y bienestar de forma segura.

✔️ Alivio del Estrés y Ansiedad: Equilibra el sistema nervioso, reduce los niveles de cortisol y ayuda a mantener la calma en días exigentes.
✔️ Calma Mental y Enfoque: Disminuye la fatiga mental, promueve la claridad cognitiva y mejora la concentración diaria.
✔️ Descanso y Alivio Muscular: Promueve una relajación profunda, previene espasmos y optimiza la calidad del sueño reparador.`,
    seoTitle: 'Bisglicinato de Magnesio Quelado: Sueño Profundo y Relax',
    seoDescription: 'Máxima absorción para relajar músculos y conciliar un sueño profundo con Bisglicinato de Magnesio ($69.900). Registro INVIMA. ¡Paga Contra Entrega!',
    benefits: [
      "Relaja los músculos trancados, espasmos y contracturas dolorosas en cuello y hombros",
      "Combate el insomnio para que duermas profundo y no te despiertes agotado",
      "Calma la ansiedad, los nervios y los pensamientos que no te dejan descansar",
      "Magnesio quelado que no afloja el estómago ni produce diarrea como otros magnesios",
      "Cápsulas blandas que se absorben rápido y alivian el estrés desde los primeros días"
    ],
    image: '/assets/products/bisglicinato-magnesio.webp',
    basePrice: 69900,
    size: '60 Unidades',
    presentation: 'Capsulas Blandas',
    invima: 'NSA-2948-2026',
    googleCategory: 'Health & Beauty > Health Care > Fitness & Nutrition',
    condition: 'new',
    supportImages: [
      '/assets/products/bisglicinato-magnesio-apoyo-1.webp',
      '/assets/products/bisglicinato-magnesio-apoyo-2.webp',
      '/assets/products/bisglicinato-magnesio-apoyo-3.webp'
    ],
    keywords: 'bisglicinato de magnesio, magnesio quelado con glicina, insomnio y sueño profundo, relajante muscular sin diarrea, contracturas cuello y espalda, estrés y ansiedad, sistema nervioso, Bisglicinato de Magnesio original invima, AZENZA, comprar colombia, pago contra entrega, envío gratis',
    components: 'Bisglicinato de Magnesio, Glicina, Vitaminas del grupo B',
    componentBenefits: [
      {
        name: "Bisglicinato de Magnesio Quelado",
        benefit: "Suelta los músculos trancados en cuello y espalda, calma la mente acelerada y te ayuda a dormir profundo sin despertar agotado."
      },
      {
        name: "Glicina Relajante",
        benefit: "Aminoácido calmante que alivia el estrés y la ansiedad sin causar diarrea ni malestar estomacal."
      }
    ],
    longTailKeywords: [
      'mejor bisglicinato de magnesio quelado en Colombia para dormir profundo',
      'magnesio que no afloje el estómago ni de diarrea para relajar la mente',
      'bisglicinato de magnesio azenza precio colombia oferta pago contra entrega',
      'cápsulas blandas de magnesio quelado con glicina registro invima',
      'suplemento para relajar músculos y quitar el insomnio con envío gratis',
      'pedir bisglicinato de magnesio por whatsapp a domicilio'
    ],
    seoFaqs: [
      { q: '¿Qué diferencia al Bisglicinato de otras formas de magnesio?', a: 'Es un magnesio quelado (unido a glicina) que se absorbe al máximo en las células cerebrales y nerviosas, y al no competir por el agua gástrica, no produce el efecto laxante del cloruro o sulfato de magnesio.' },
      { q: '¿Ayuda a controlar la ansiedad?', a: 'Sí, la glicina actúa en conjunto con el magnesio estimulando los receptores GABA que disminuyen la sobreexcitación cerebral, induciendo serenidad.' },
      { q: '¿En qué momento del día es mejor tomarlo?', a: 'Se recomienda consumirlo de 30 a 45 minutos antes de acostarse para preparar el cuerpo y la mente para un sueño profundo.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 69900 },
      { id: '2u', label: '2 Unidades', units: 2, price: 104850 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 139800, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 209700, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Marta L.', text: 'El mejor descubrimiento para mis noches. Concilio el sueño súper rápido y amanezco con una energía maravillosa.', rating: 5 },
      { name: 'Fernando S.', text: 'Mis piernas y mi espalda se relajan por completo. No he vuelto a tener tensiones musculares al dormir.', rating: 5 }
    ],
    whyChoose: {
      title: 'Descanso y Confort Neuromuscular Superior',
      description: 'En AZENZA estamos comprometidos con tu descanso. Nuestro Bisglicinato de Magnesio de grado farmacológico ofrece la máxima asimilación relajante para restaurar tu ritmo biológico de forma segura.'
    }
  },
  {
    id: 'tonico-capilar-folivance',
    masterId: '11261',
    name: 'Tónico Capilar Folivance',
    category: 'belleza-integral',
    shortDescription: 'Densificador Capilar y Ritual de Crecimiento Acelerado.',
    description: `El afinamiento progresivo de la fibra, la caída difusa durante el peinado y las zonas de baja densidad en el cuero cabelludo son consecuencia directa de una irrigación sanguínea deficiente y una desnutrición en la papila dérmica folicular. El Tónico Capilar Folivance actúa como un sistema de bioestimulación tricológica intensiva que sincroniza la acción reparadora de un complejo de Aminoácidos puros, Biotina de alta pureza y Niacinamida (Vitamina B3) para reactivar el metabolismo de la raíz y controlar la microinflamación del cuero cabelludo.

A mediano y largo plazo, esta sinergia de nutrientes esenciales activa la fase anágena de crecimiento, optimiza la oxigenación folicular y fortalece los puentes de queratina, frenando el desprendimiento prematuro y aumentando el grosor, la densidad y la resistencia de cada hebra frente a la rotura. Avalado con Registro INVIMA oficial, su formulación líquida en spray no requiere enjuague y se absorbe al instante sin apelmazar ni dejar sensación grasosa, ofreciendo un tratamiento diario práctico, limpio y de máxima biodisponibilidad tópica.

✔️ Estructura y Reparación: Los aminoácidos fortalecen la fibra capilar, reparan el cabello existente y previenen la rotura.
✔️ Crecimiento y Grosor: La biotina estimula la aparición de nuevas hebras, mejora la oxigenación y engrosa el cabello de raíz a puntas.
✔️ Circulación y Control: La niacinamida mejora el flujo sanguíneo en el cuero cabelludo, calma la irritación y controla el exceso de grasa.`,
    seoTitle: 'Tónico Capilar Folivance: Anti-Caída y Máximo Crecimiento',
    seoDescription: 'Frena la caída y nutre el folículo con Tónico Capilar Folivance extractos botánicos activos ($69.900). Registro INVIMA. ¡Envío Gratis Contra Entrega!',
    benefits: [
      'Frena la caída del cabello de forma visible desde la segunda semana',
      'Estimula la fase de crecimiento activo (anágena) para nuevas hebras',
      'Engrosa y fortalece la fibra capilar reduciendo el quiebre y puntas abiertas',
      'Fórmula ligera en spray de rápida absorción que no deja el cabello grasoso',
      'Nutre a profundidad cejas, barra y cuero cabelludo debilitado'
    ],
    image: '/assets/products/folivance.webp',
    basePrice: 69900,
    size: '120g',
    presentation: 'Líquido (Spray)',
    googleCategory: 'Health & Beauty > Personal Care > Hair Care > Hair Loss Treatments',
    condition: 'new',
    supportImages: [
      '/assets/products/folivance-apoyo-1.webp',
      '/assets/products/folivance-apoyo-2.webp'
    ],
    keywords: 'tónico folivance, caída del cabello, crecimiento capilar acelerado, biotina líquida, aminoácidos capilares, niacinamida cuero cabelludo, engrosar cabello fino, crecimiento de barba, Tónico Capilar Folivance original invima, Azenza, comprar colombia, pago contra entrega, envío gratis',
    components: 'Biotina, Aminoácidos, niacinamida',
    componentBenefits: [
      { name: 'Aminoácidos', benefit: 'fortalece, da estructura y repara el cabello existente.' },
      { name: 'Biotina', benefit: 'Estimulan el crecimiento de hebras de cabello, mejoran la oxigenación y engrosan el cabello.' },
      { name: 'Niacinamida (vitamina B3)', benefit: 'Mejora la circulación, calma la irritación y controla el exceso de grasa en el cuero cabelludo .' }

    ],
    longTailKeywords: [
      'mejor tónico para el crecimiento acelerado del cabello en Colombia',
      'cómo detener la caída del pelo y poblar la barba con biotina y niacinamida',
      'tónico capilar folivance azenza precio colombia oferta pago contra entrega',
      'spray anticaída y fortalecedor capilar con registro invima y envío gratis',
      'tratamiento capilar no grasoso para engrosar cabello fino y quebradizo',
      'pedir tónico folivance por whatsapp a domicilio'
    ],
    seoFaqs: [
      { q: '¿Cómo se debe aplicar Folivance?', a: 'Aplicar directamente sobre el cuero cabelludo limpio en las zonas deseadas, masajear suavemente con la yema de los dedos por 2 minutos para activar la absorción. No requiere enjuague.' },
      { q: '¿Deja el cabello pesado o con mal olor?', a: 'No, Folivance posee una textura líquida ultra-ligera y de rápida absorción con un aroma herbal muy refrescante que deja el cabello suelto.' },
      { q: '¿Sirve para rellenar la barba y cejas?', a: 'Sí, es sumamente efectivo para estimular el volumen y densidad de los folículos en barba y cejas de forma segura.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 69900 },
      { id: '2u', label: '2 Unidades', units: 2, price: 104850 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 139800, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 209700, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Liliana M.', text: 'Llevo 3 semanas usando el tónico Folivance y la caída se detuvo casi por completo. Siento el cabello mucho más abundante y con brillo.', rating: 5 },
      { name: 'Andrés S.', text: 'Excelente producto. Lo usé para rellenar zonas de la barba y los resultados son sorprendentes. Se siente súper fresca la aplicación.', rating: 5 }
    ],
    whyChoose: {
      title: 'Densidad y Fuerza Capilar Certificada',
      description: 'En AZENZA redefinimos el cuidado capilar con soluciones científicas de alto impacto. FOLIvance une el poder del Trichogen y extractos herbales para devolver la vitalidad y el volumen a tu cabello de manera segura.'
    }
  },
  {
    id: 'shampoo-intensivo',
    masterId: '232077',
    name: 'Shampoo Intensivo',
    category: 'belleza-integral',
    shortDescription: 'Limpieza Profunda, Control Grasa y Fortalecimiento Folicular.',
    description: `La acumulación de sebo excesivo en el cuero cabelludo, la asfixia folicular por residuos químicos y el uso recurrente de detergentes agresivos debilitan la cutícula capilar, provocando caída por quiebre, pérdida acelerada de densidad y opacidad constante. El Shampoo Intensivo funciona como un sistema tricológico de higiene purificante y nutrición folicular libre de sal y sulfatos abrasivos que sincroniza la acción reguladora y vasodilatadora de la Niacinamida (Vitamina B3) con la recarga estructural de un complejo de Aminoácidos esenciales y Biotina pura.

A nivel dérmico y cuticular, limpia en profundidad sin resecar la barrera epidérmica, oxigena los poros del bulbo piloso y sella las hebras dañadas para evitar puntas abiertas, permitiendo que el cabello crezca con mayor calibre, elasticidad y resistencia ante el cepillado diario. Avalado con Registro INVIMA oficial, su presentación de 450ml rinde de manera sobresaliente para el uso frecuente en todo tipo de cabello, protegiendo procesos químicos y devolviendo un brillo natural, sedoso y con volumen renovado desde el primer lavado.

✔️ Estructura y Brillo: Los aminoácidos fortalecen la fibra capilar, reparan el cabello existente, previenen la rotura y restauran un brillo saludable desde el primer uso.
✔️ Crecimiento y Grosor: La biotina estimula la aparición de nuevo cabello, mejora la oxigenación folicular y lo engrosa de raíz a puntas.
✔️ Circulación y Control: La niacinamida mejora el flujo sanguíneo en el cuero cabelludo, calma la irritación y controla el exceso de grasa de forma duradera.`,
    seoTitle: 'Shampoo Intensivo Sin Sal: Anti-Caída, Brillo y Fuerza',
    seoDescription: 'Limpia suavemente, fortalece la raíz y previene la caída con Shampoo Intensivo Sin Sal ($69.900). Registro INVIMA. ¡Pídelo con Pago Contra Entrega!',
    benefits: [
      'Limpia de manera profunda y regula el exceso de grasa en la raíz',
      'Previene la caída del cabello fortaleciendo la fibra capilar',
      'Fórmula profesional libre de sal y parabenos que protege el color',
      'Devuelve el brillo natural y aporta una sedosidad extraordinaria',
      'Enriquecido con Biotina para reparar el cabello dañado'
    ],
    image: '/assets/products/shampoo-intensivo.webp',
    basePrice: 69900,
    size: '450ml',
    presentation: 'Líquido',
    googleCategory: 'Health & Beauty > Personal Care > Hair Care > Shampoo & Conditioner > Shampoo',
    condition: 'new',
    supportImages: [
      '/assets/products/shampoo-intensivo-apoyo-1.webp',
      '/assets/products/shampoo-intensivo-apoyo-2.webp',
      '/assets/products/shampoo-intensivo-apoyo-3.webp',
      '/assets/products/shampoo-intensivo-apoyo-4.webp'
    ],
    keywords: 'shampoo sin sal, shampoo anticaída profesional, biotina y aminoácidos, niacinamida capilar, control grasa en la raíz, cabello maltratado y quebradizo, sin sulfatos, Shampoo Intensivo original invima, Azenza, comprar colombia, pago contra entrega, envío gratis',
    components: 'Biotina, aminoácidos y niacinamida',
    componentBenefits: [
      { name: 'Aminoácidos', benefit: 'fortalece, da estructura y repara el cabello existente.' },
      { name: 'Biotina', benefit: 'Estimulan el crecimiento de hebras de cabello, mejoran la oxigenación y engrosan el cabello.' },
      { name: 'Niacinamida (vitamina B3)', benefit: 'Mejora la circulación, calma la irritación y controla el exceso de grasa en el cuero cabelludo .' }
    ],
    longTailKeywords: [
      'mejor shampoo intensivo sin sal para la caída del cabello en Colombia',
      'shampoo profesional con biotina y aminoácidos para reparar puntas abiertas',
      'shampoo intensivo azenza precio colombia oferta pago contra entrega',
      'shampoo libre de sal y sulfatos para queratinas con registro invima',
      'comprar shampoo fortalecedor y anticaída con envío gratis nacional',
      'pedir shampoo intensivo por whatsapp a domicilio'
    ],
    seoFaqs: [
      { q: '¿Contiene sal o sulfatos?', a: 'No, es un shampoo formulado 100% libre de sal (cloruro de sodio) y sulfatos agresivos, ideal para cuidar queratinas y tintes.' },
      { q: '¿Se puede utilizar en cabellos grasos?', a: 'Sí, equilibra la producción de sebo sin resecar las puntas, promoviendo vitalidad.' },
      { q: '¿Con qué frecuencia se debe lavar?', a: 'Se puede usar diariamente o según tu rutina habitual, ya que su base limpiadora es extremadamente gentil.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 69900 },
      { id: '2u', label: '2 Unidades', units: 2, price: 104850 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 139800, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 209700, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Verónica P.', text: 'Me encanta este shampoo. Siento mi cabello súper limpio, sedoso y con un brillo espectacular. La caída disminuyó un montón.', rating: 5 },
      { name: 'Mario J.', text: 'Excelente fragancia y consistencia. Deja el pelo muy manejable y nada reseco.', rating: 5 }
    ],
    whyChoose: {
      title: 'Fortaleza y Brillo de Salón',
      description: 'En AZENZA comprometidos con tu salud capilar. Nuestro Shampoo Intensivo repara la fibra capilar y nutre tu cabello desde la raíz con una fórmula profesional libre de químicos agresivos y registro INVIMA garantizado.'
    }
  },
  {
    id: 'aceite-relajante',
    masterId: '232077',
    name: 'Aceite Relajante',
    category: 'belleza-integral',
    shortDescription: 'Alivio de Tensiones, Masaje Terapéutico, Descanso Corporal, Fortalecimiento de la Piel.',
    description: `La pesadez continua en las piernas, la hinchazón vespertina provocada por extensas jornadas de pie o sentado y la rigidez muscular acumulada reflejan un estancamiento en el retorno venoso y fatiga tisular. Nuestro Aceite Relajante actúa como un sistema fitocosmético vasotónico de drenaje que sincroniza la potencia botánica de extractos puros de Castaño de Indias (rico en escina venotónica) y Centella Asiática estructurante en una base oleosa altamente emoliente y nutritiva.

Al aplicarse mediante masaje drenante ascendente, estimula la microcirculación superficial, favorece la reabsorción de líquidos retenidos y promueve la síntesis de colágeno perivascular, atenuando la apariencia de arañitas dérmicas y devolviendo al cuerpo una ligereza prolongada y una piel profundamente hidratada y elástica. Avalado con Registro INVIMA oficial, su textura sedosa proporciona un deslizamiento fluido y profesional que se absorbe progresivamente sin manchar la ropa ni dejar sensación pringosa, convirtiéndose en el ritual ideal para desinflamar y recuperar el descanso corporal absoluto.

✔️ Circulación y Alivio: El castaño de indias ayuda a tonificar la piel, disminuye la pesadez y reduce notablemente la tensión en las piernas cansadas mediante el masaje.
✔️ Elasticidad y Firmeza: La centella asiática favorece la firmeza de la piel estimulando de forma natural los tejidos, mejora su aspecto y atenúa la apariencia de las várices y líneas superficiales.
✔️ Acción Protectora y Nutrición: Su base aceitosa humecta profundamente la piel, mientras que sus antioxidantes naturales protegen las células contra el desgaste y la resequedad diaria.`,
    seoTitle: 'Aceite Corporal Relajante: Masajes y Cero Tensión',
    seoDescription: 'Alivia contracturas y relaja la mente con Aceite Corporal Relajante para masajes ($69.900). Textura sedosa con Registro INVIMA. ¡Envío Gratis nacional!',
    benefits: [
      'Disuelve el estrés y libera la rigidez de tus músculos',
      'Desliza suavemente sobre la piel facilitando masajes profundos',
      'Calma la pesadez muscular y promueve una óptima circulación',
      'Mejora la apariencia de la piel aportando nutrición y suavidad',
      'Genera una inmediata sensación de alivio y descanso corporal absoluto'
    ],
    image: '/assets/products/aceite-relajante.webp',
    basePrice: 69900,
    size: '60g',
    presentation: 'Aceite',
    googleCategory: 'Health & Beauty > Personal Care > Massage & Relaxation > Massage Oil',
    condition: 'new',
    supportImages: [
      '/assets/products/aceite-relajante-apoyo-1.webp',
      '/assets/products/aceite-relajante-apoyo-2.webp',
      '/assets/products/aceite-relajante-apoyo-3.webp'
    ],
    keywords: 'aceite para masajes, dolor muscular y contracturas, piernas cansadas y pesadas, venas várices, castaño de indias, centella asiática, aceite descontracturante espalda y cuello, circulación, Aceite Relajante original invima, Azenza, comprar colombia, pago contra entrega, envío gratis',
    components: 'Aceite de Castaño de Indias, Centella Asiática, Extracto de Uva',
    componentBenefits: [
      { name: 'Castaño de Indias', benefit: 'Desinflama las venas, alivia la pesadez en las piernas y combate la retención de líquidos (ideal para várices).' },
      { name: 'Centella Asiática', benefit: 'Estimula la producción de colágeno, repara los tejidos de la piel y mejora la elasticidad de los vasos sanguíneos.' },
      { name: 'extracto de Uva', benefit: 'Aporta potentes antioxidantes que protegen las venas del envejecimiento y refuerzan la circulación general.' }
    ],
    longTailKeywords: [
      'mejor aceite para masajes descontracturantes y piernas cansadas Colombia',
      'cómo aliviar la pesadez en las piernas y várices con castaño de indias',
      'aceite relajante azenza precio colombia oferta pago contra entrega',
      'aceite corporal para contracturas en espalda y cuello con registro invima',
      'comprar aceite para masajes relajantes con envío gratis nacional',
      'pedir aceite relajante por whatsapp a domicilio'
    ],
    seoFaqs: [
      { q: '¿Deja la piel pegajosa o grasosa?', a: 'No, su fórmula está balanceada con aceites ligeros de almendras que se absorben paulatinamente nutriendo la piel sin dejar residuo pesado.' },
      { q: '¿Se puede aplicar en niños?', a: 'Sí, al ser una mezcla botánica gentil de lavanda y caléndula, es excelente para realizar masajes relajantes antes de dormir.' },
      { q: '¿Ayuda con la fatiga tras hacer ejercicio?', a: 'Absolutamente, es ideal para masajear las zonas tensionadas, promoviendo una excelente recuperación muscular.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 69900 },
      { id: '2u', label: '2 Unidades', units: 2, price: 104850 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 139800, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 209700, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Guillermo F.', text: 'El aroma a lavanda es súper relajante y es perfecto para masajear la espalda después de un día estresante. Deja la piel muy suave.', rating: 5 },
      { name: 'Patricia L.', text: 'Excelente calidad, hidrata muy bien y quita toda la tensión del cuello de inmediato. Lo uso todas las noches.', rating: 5 }
    ],
    whyChoose: {
      title: 'Alivio Terapéutico y Paz Sensorial',
      description: 'En AZENZA fusionamos naturaleza y bienestar. Nuestro Aceite Relajante combina aceites florales y botánicos que desinflaman tus músculos y calman tu mente con calidad certificada oficial.'
    }
  },
  {
    id: 'gel-frio-relajante',
    masterId: '232079',
    name: 'Gel Frío Relajante',
    category: 'belleza-integral',
    shortDescription: 'Efecto Criogénico, Alivio Muscular y Piernas Cansadas.',
    description: `El ardor punzante, la hinchazón congestiva en pantorrillas y tobillos tras largas jornadas de inmovilidad o esfuerzo físico, y la sensación de pesadez que entumece las piernas impiden un descanso reparador y limitan la movilidad cotidiana. Nuestro Gel Frío Relajante actúa como un sistema dermo-criogénico de descongestión vascular que integra la acción del Mentol bioactivo de alta pureza con extractos venotónicos concentrados de Castaño de Indias y Centella Asiática, provocando una respuesta térmica de vasoconstricción localizada inmediata que desinflama los tejidos y disipa la fatiga muscular acumulada.

A nivel circulatorio y tisular, este estímulo térmico sostenido activa el drenaje linfático periférico, alivia la tensión provocada por la insuficiencia venosa superficial y refuerza la firmeza cutánea, atenuando la visibilidad de dilataciones vasculares y devolviendo a las extremidades una sensación prolongada de ligereza y confort. Avalado con Registro INVIMA oficial, su formulación en hidro-gel de penetración ultra-rápida no deja residuos grasos ni mancha las prendas, brindando un alivio criogénico instantáneo, higiénico y confiable para recuperar la frescura y vitalidad en cada paso.

✔️ Efecto Frío: El mentol aporta una sensación de frescura calmante inmediata que disminuye la pesadez, alivia el dolor local y descansa las piernas de forma instantánea.
✔️ Tonificación y Circulación Ampliada: El castaño de indias activa el flujo sanguíneo de forma localizada, estimula la circulación en la zona aplicada y en toda la pierna, y previene eficazmente la hinchazón diaria.
✔️ Firmeza y Reparación: La centella asiática mejora la consistencia de los tejidos cutáneos de las piernas, disminuye la flacidez y ayuda a desvanecer visualmente las várices.`,
    seoTitle: 'Gel Frío Criogénico: Alivio Inmediato de Piernas Cansadas',
    seoDescription: 'Descansa tus piernas pesadas y alivia la tensión con Gel Frío Criogénico efecto hielo. Rápida absorción con Registro INVIMA. ¡Paga al recibir en casa!',
    benefits: [
      'Efecto frío criogénico inmediato que reduce la inflamación local',
      'Alivia de forma efectiva la pesadez y cansancio en piernas y pies',
      'Favorece la circulación sanguínea ideal para el cuidado de varices',
      'Relaja la tensión muscular tras el deporte o trabajo pesado',
      'Textura en gel ligera, no grasosa y de rápida absorción'
    ],
    image: '/assets/products/gel-frio.webp',
    basePrice: 59900,
    size: '60g',
    presentation: 'Gel',
    googleCategory: 'Health & Beauty > Personal Care > Cosmetics > Skin Care',
    condition: 'new',
    supportImages: [
      '/assets/products/gel-frio-apoyo-1.webp',
      '/assets/products/gel-frio-apoyo-2.webp'
    ],
    keywords: 'gel frío criogénico, efecto hielo desinflamatorio, piernas pesadas y cansadas, venas várices inflamadas, mentol puro, castaño de indias, centella asiática, fatiga muscular deportistas, Gel Frío original invima, Azenza, comprar colombia, pago contra entrega, envío gratis',
    components: 'Mentol, Castaño de Indias, Centella Asiática',
    componentBenefits: [
      { name: 'Mentol', benefit: 'Proporcionan un efecto frío inmediato que insensibiliza la molestia y desinflama.' },
      { name: 'Castaño de Indias', benefit: 'Estimulan la circulación periférica reduciendo la retención y la hinchazón.' },
      { name: 'Centella Asiática', benefit: 'Estimula la producción de colágeno, repara los tejidos de la piel y mejora la elasticidad de los vasos sanguíneos.' }
    ],
    longTailKeywords: [
      'mejor gel frío criogénico en Colombia para aliviar piernas cansadas',
      'gel efecto hielo para desinflamar venas várices y calmar pesadez',
      'gel frío relajante azenza precio colombia oferta pago contra entrega',
      'gel de mentol y castaño de indias con registro invima y envío gratis',
      'cómo deshinchar tobillos y piernas adoloridas tras estar de pie todo el día',
      'pedir gel frío criogénico por whatsapp a domicilio'
    ],
    seoFaqs: [
      { q: '¿Cómo se debe aplicar el gel frío?', a: 'Aplicar sobre la zona afectada con masajes ascendentes (de abajo hacia arriba) hasta que se absorba. Se sentirá una oleada de frío que relaja de inmediato.' },
      { q: '¿Sirve para golpes o esguinces?', a: 'Sí, su efecto frío y desinflamatorio ayuda a mitigar la inflamación y dolor de contusiones ligeras.' },
      { q: '¿Mancha la ropa?', a: 'No, su consistencia en gel de grado profesional penetra al instante sin dejar humedad ni manchas en tus prendas.' }
    ],
    promos: [
      { id: '1u', label: '1 Unidad', units: 1, price: 69900 },
      { id: '2u', label: '2 Unidades', units: 2, price: 104850 },
      { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: 139800, badge: '⭐ Recomendado' },
      { id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: 209700, badge: '🔥 Mejor Oferta' }
    ],
    testimonials: [
      { name: 'Mónica T.', text: 'Trabajo de pie todo el día y este gel frío ha sido mi salvación. Me quita todo el dolor y pesadez en las piernas al instante.', rating: 5 },
      { name: 'Gustavo R.', text: 'Es excelente para después de correr, relaja los gemelos de inmediato con un frío muy refrescante.', rating: 5 }
    ],
    whyChoose: {
      title: 'Efecto Criogénico y Alivio de Circulación',
      description: 'En AZENZA estamos comprometidos con tu movilidad activa. Nuestro Gel Frío combina mentol y extractos circulatorios para deshinchar y aliviar tu cansancio de forma rápida y certificada.'
    }
  }
];

// Reordenar dinámicamente el array PRODUCTS para que la declaración expuesta coincida
// exactamente con la estructura de categorías de la tienda, optimizando la navegación de carrusel (adelante/atrás)
(function() {
  const categoryOrder = ['salud-bienestar', 'belleza-integral', 'salud-sexual'];
  PRODUCTS.sort((a, b) => {
    const idxA = categoryOrder.indexOf(a.category);
    const idxB = categoryOrder.indexOf(b.category);
    if (idxA !== idxB) {
      return idxA - idxB;
    }
    return 0; // Orden relativo estable dentro de la misma categoría
  });
})();

export interface Promotion {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  originalPrice: number;
  products: string[];
  videoUrl?: string;
  videoUrlMp4?: string;
  videoPoster?: string;
  seoTitle?: string;
  seoDescription?: string;
  whyChoose?: {
    title: string;
    description: string;
  };
  badge?: string;
  keywords?: string;
  components?: string;
  componentBenefits?: ComponentBenefit[];
  longTailKeywords?: string[];
  seoFaqs?: { q: string; a: string }[];
  benefits?: string[];
  testimonials?: {
    name: string;
    text: string;
    rating: number;
  }[];
  peso_adicional?: number;
  googleCategory?: string;
  googleTitle?: string;
  googleDescription?: string;
  condition?: 'new' | 'used' | 'refurbished';
  supportImages?: string[];
}

export const COMBO_OF_THE_MONTH: Promotion = {
  id: 'combo-inmunidad-dual',
  name: 'Inmunidad Dual',
  description: `Resvisfactor y Coliplus: la combinación perfecta para desinflamar tu vientre, sentirte mas ligero y libre de molestias. Cuando el colon se congestiona con desechos acumulados, toxinas y gases, el cuerpo entero se debilita: surgen la pesadez estomacal constante, cólicos después de comer y una caída drástica en las defensas que te expone a resfriados y fatiga diaria. Este combo sincroniza la matriz de fibras solubles de Chía, Linaza y Pitaya de Coliplus para barrer los residuos retenidos y desinflamar la mucosa intestinal, junto al Calostro Bovino y Hongos Shiitake y Ganoderma de Resvisfactor, que reactivan la protección de tus glóbulos blancos desde la raíz.

A mediano plazo, esta sinergia elimina la distensión abdominal, regula las evacuaciones diarias sin retortijones y devuelve la vitalidad a tu cuerpo, logrando que despiertes con energía renovada y una digestión tranquila. Ambos productos cuentan con Registro INVIMA oficial y vienen en formatos rendidores de consumo fácil y agradable.

✔️ Defensas Blindadas: El calostro bovino y los hongos adaptógenos fortalecen tu escudo natural contra gripes y decaimiento.
✔️ Vientre Plano y Alivio: La linaza y pitaya descongestionan el colon, expulsando gases dolorosos y pesadez tras comer.
✔️ Evacuación Diaria Suave: Promueve deposiciones diarias fluidas sin cólicos, devolviéndote ligereza y energía física.`,
  image: '/assets/combos/combo-bienestar.webp',
  price: 129900,
  originalPrice: 165800,
  peso_adicional: 0,
  googleCategory: 'Health & Beauty > Health Care > Fitness & Nutrition',
  condition: 'new',
  products: ['resvis', 'coliplus'],
  seoTitle: 'Combo Inmunidad Dual: Desinflama el Vientre y Refuerza Defensas | Envío Gratis',
  seoDescription: 'Desinflama tu vientre abultado y blinda tus defensas con Inmunidad Dual (Resvisfactor + Coliplus) por $129.900 COP (Ahorro $35.900). ¡Envío Gratis Contra Entrega!',
  whyChoose: {
    title: 'Desinflama tu Vientre y Refuerza tus Defensas Naturales',
    description: 'La combinación perfecta para desinflamar tu vientre, sentirte mas ligero y libre de molestias con Resvisfactor y Coliplus.'
  },
  badge: 'OFERTA DEL MES',
  benefits: [
    'Desinflama el vientre hinchado y limpia el colon con Coliplus',
    'Sube las defensas para evitar gripes y recaídas con Resvisfactor',
    'Quita los gases dolorosos, cólicos y pesadez tras cada comida',
    'Ahorro de $35.900 con Envío Gratis y Pago Contra Entrega'
  ],
  keywords: 'inmunidad dual, resvisfactor, coliplus, desinflamar vientre hinchado, limpiar colon de toxinas, defensas bajas, calostro bovino, hongos adaptogenos, fibra de pitaya, estreñimiento, evacuar sin dolor, combo oferta colombia, pago contra entrega, envio gratis, azenza',
  components: 'Resvisfactor y Coliplus',
  componentBenefits: [
    {
      name: 'Resvisfactor (Calostro y Shiitake)',
      benefit: 'Activa tus defensas naturales con calostro bovino para no vivir con gripes, decaimiento ni debilidad constante.'
    },
    {
      name: 'Coliplus (Fibra de Linaza y Pitaya)',
      benefit: 'Desinflama el colon irritado, afloja el intestino perezoso y saca los gases acumulados sin dolor.'
    }
  ],
  longTailKeywords: [
    'combo para desinflamar el vientre abultado y subir defensas rapido',
    'resvisfactor y coliplus precio colombia oferta del mes',
    'limpieza profunda de colon con pitaya y fortalecimiento inmunologico',
    'como desinflamar el estomago y evacuar a diario sin colicos ni dolor',
    'combo inmunidad dual azenza original pago contra entrega envio gratis',
    'comprar resvisfactor y coliplus con registro invima colombia',
    'remedio natural para colon irritable gases y defensas caidas',
    'pedir combo inmunidad dual por whatsapp con domicilio gratis'
  ],
  seoFaqs: [
    { q: '¿Cómo debo tomar los productos del Combo Inmunidad Dual?', a: 'Toma Coliplus disuelto en agua tibia por las mañanas o noches para regular el colon, y toma Resvisfactor diariamente para fortalecer tus defensas.' },
    { q: '¿En cuánto tiempo se sienten los beneficios?', a: 'La sensación de alivio y vientre desinflamado con Coliplus se experimenta desde los primeros días, mientras que el escudo inmunológico se consolida día a día.' },
    { q: '¿Tienen registro oficial INVIMA?', a: 'Sí, tanto Resvisfactor como Coliplus cuentan con Registro Sanitario INVIMA oficial y vigente.' }
  ],
  testimonials: [
    { name: 'Gloria Esperanza M.', text: 'El vientre se me desinflamó por completo desde la primera semana y no he vuelto a sufrir de resfriados. Excelente combo.', rating: 5 },
    { name: 'Mauricio S.', text: 'Coliplus y Resvisfactor juntos son lo mejor que he probado. Me siento con más energía y ligereza digestiva.', rating: 5 }
  ]
};

export const PROMOTIONS: Promotion[] = [
  {
    id: 'promo-1',
    name: 'Combo Piel Radiante',
    description: `Las manchas oscuras por el sol, la resequedad y las líneas de expresión profundas reflejan la pérdida progresiva de colágeno y la acumulación de radicales libres en la piel. El Combo Piel Radiante combina la acción tópica de la crema dermocosmética Miskinne con la nutrición celular interna del Resveratrol líquido concentrado con Colágeno y Biotina. Mientras Miskinne penetra las capas dérmicas para aclarar manchas visibles, suavizar zonas agrietadas y emparejar el tono, el Resveratrol frena el estrés oxidativo desde el interior del organismo, devolviendo elasticidad y firmeza a los tejidos del rostro y cuello.

A mediano y largo plazo, esta doble acción hidrata profundamente la piel, suaviza patas de gallo y arrugas, y previene nuevas hiperpigmentaciones, logrando un cutis luminoso, terso y rejuvenecido. Con Registro INVIMA oficial y fórmulas seguras, es el tratamiento definitivo para devolverle la juventud a tu rostro sin recurrir a procedimientos agresivos.

✔️ Tono Claro y Uniforme: Atenúa manchas solares, paño y zonas oscuras para un cutis visiblemente radiante.
✔️ Reafirmación y Elasticidad: El colágeno y resveratrol tensan la piel y rellenan líneas de expresión marcadas.
✔️ Cuidado Celular Dual: Hidratación externa intensiva con Miskinne y regeneración antioxidante interna con Resveratrol.`,
    image: '/assets/combos/promo-1.webp',
    price: 104850,
    originalPrice: 139800,
    googleCategory: 'Health & Beauty > Health Care > Fitness & Nutrition',
    condition: 'new',
    products: ['resveratrol', 'miskinne'],
    seoTitle: 'Combo Piel Radiante: Aclara Manchas de Sol y Rejuvenece el Cutis | Envío Gratis',
    seoDescription: 'Elimina manchas de sol, resequedad y arrugas con el Combo Piel Radiante (Resveratrol + Miskinne). Ahorra $34.950 COP con Registro INVIMA y Pago Contra Entrega.',
    whyChoose: {
      title: 'Elimina Manchas del Sol, Resequedad y Líneas de Expresión',
      description: 'Elimina la resequedad, atenúa manchas causadas por el sol y suaviza líneas de expresión combinando la nutrición celular del Resveratrol con la hidratación reparadora de Miskinne. Calidad certificada con registro INVIMA para lucir una piel luminosa, firme y visiblemente renovada.'
    },
    badge: 'COMBO N°1',
    keywords: 'combo piel radiante, resveratrol, miskinne, arbutina al 5 por ciento, colageno hidrolizado bebible, crema para manchas de sol, aclarar la cara, quitar arrugas patas de gallo, rejuvenecimiento facial natural, azenza, pago contra entrega colombia, envio gratis',
    components: 'Arbutina (5%), Resveratrol, Colágeno Hidrolizado (10.000mg), Crema de Coco, Arándano y Uva liofilizada',
    componentBenefits: [
      {
        name: 'Arbutina (5%)',
        benefit: 'Borra y aclara manchas rebeldes del sol, la edad o el acné sin pelar ni irritar la piel.'
      },
      {
        name: 'Resveratrol y Frutos Rojos',
        benefit: 'Frena el envejecimiento prematuro, combatiendo la piel marchita y protegiéndola del desgaste diario.'
      },
      {
        name: '10.000mg de Colágeno y Coco',
        benefit: 'Rellena la piel descolgada, fortalece uñas quebradizas y frena la caída del cabello dándole elasticidad.'
      }
    ],
    longTailKeywords: [
      'mejor combo para aclarar manchas solares y arrugas en la cara',
      'crema miskinne con arbutina y resveratrol colageno colombia',
      'como rejuvenecer la piel del rostro y eliminar resequedad sin cirugia',
      'combo piel radiante azenza precio oferta pago contra entrega',
      'colageno hidrolizado con biotina y crema despigmentante invima',
      'tratamiento para el paño manchas oscuras y piel marchita colombia',
      'comprar combo piel radiante por whatsapp con envio gratis'
    ],
    seoFaqs: [
      { q: '¿El resveratrol ayuda a la piel?', a: 'Sí, protege las células del daño oxidativo, promoviendo un bienestar integral y juventud.' },
      { q: '¿Miskinne se usa en todo el cuerpo?', a: 'Es ideal para brindar suavidad extrema y vitalidad a toda tu piel diariamente.' },
      { q: '¿Este combo sirve para pieles maduras?', a: 'Efectivamente, su fórmula balanceada es excelente para recuperar firmeza y equilibrio natural.' }
    ],
    benefits: [
      'Aclara manchas oscuras, pecas y marcas del sol en el rostro',
      'Elimina la resequedad y la tirantez dejando la piel suave y sedosa',
      'Reduce líneas de expresión y arrugas gracias al colágeno bebible',
      'Devuelve el brillo y la firmeza natural para verte más joven'
    ],
    testimonials: [
      { name: 'Martha Lucia', text: 'Mi piel se ve mucho más radiante desde que uso este combo. ¡Me encanta!', rating: 5 },
      { name: 'Gloria Ines', text: 'Excelente combinación, el resveratrol me da mucha energía.', rating: 5 }
    ]
  },
  {
    id: 'promo-2',
    name: 'Combo Belleza Eterna',
    description: `El envejecimiento prematuro, las manchas rebeldes por el sol o la edad y la pérdida de elasticidad provocan que el rostro luzca opaco, marchito y con líneas marcadas. El Combo Belleza Eterna une la acción despigmentante focalizada de la crema Eventone con la nutrición celular del Resveratrol líquido con Colágeno Hidrolizado y Vitaminas antioxidantes. Eventone actúa directamente sobre el exceso de melanina para desvanecer manchas oscuras y unificar el tono en rostro y zonas corporales, mientras el Resveratrol protege las células del estrés oxidativo, estimulando la firmeza y redensificación de las capas de la dermis.

A mediano plazo, esta terapia integral atenúa arrugas profundas, mejora la textura en mejillas y cuello, y restaura la hidratación profunda, devolviéndote una apariencia fresca, clara y descansada. Con Registro INVIMA oficial y libre de ingredientes agresivos, ofrece una transformación visible y duradera sin irritar la piel.

✔️ Despigmentación Efectiva: Aclara manchas rebeldes y marcas solares, devolviendo un tono parejo y luminoso.
✔️ Efecto Antiedad Intensivo: Estimula el colágeno natural para suavizar arrugas, patas de gallo y flacidez.
✔️ Nutrición y Firmeza: Regenera los tejidos desde adentro hacia afuera, protegiendo tu piel del desgaste diario.`,
    image: '/assets/combos/promo-2.webp',
    price: 123675,
    originalPrice: 164900,
    googleCategory: 'Health & Beauty > Health Care > Fitness & Nutrition',
    condition: 'new',
    products: ['resveratrol', 'eventone'],
    seoTitle: 'Combo Belleza Eterna: Aclara Manchas Rebeldes y Reafirma el Rostro | Envío Gratis',
    seoDescription: 'Desvanece manchas rebeldes y rellena arrugas con el Combo Belleza Eterna (Resveratrol + Eventone). Ahorra $41.225 COP con INVIMA. ¡Envío Gratis Contra Entrega!',
    whyChoose: {
      title: 'Aclara Manchas Oscuras y Rejuvenece el Rostro',
      description: 'Aclara manchas rebeldes oscuras provocadas por el sol o la edad y devuelve la elasticidad a tu rostro uniendo la acción despigmentante de Eventone con la regeneración profunda del Resveratrol. Fórmula certificada para un tono parejo, radiante y libre de manchas.'
    },
    badge: 'COMBO N°2',
    keywords: 'combo belleza eterna, resveratrol, eventone, bio retinol, acido hialuronico, crema despigmentante manchas oscuras, manchas de la edad y sol, firmeza cuello y rostro, flacidez facial, colageno hidrolizado, azenza, comprar online colombia, pago contra entrega',
    components: 'Bio Retinol, Ácido Hialurónico, Resveratrol, Colágeno Hidrolizado, Vitamina B5 y extractos de Uva y Arándano',
    componentBenefits: [
      {
        name: 'Bio Retinol y Ácido Hialurónico',
        benefit: 'Rellena arrugas profundas y desvanece manchas oscuras sin provocar enrojecimiento ni irritación.'
      },
      {
        name: 'Resveratrol y Arándano',
        benefit: 'Protege contra el desgaste del tiempo y renueva la piel opaca para devolverle frescura y lozanía.'
      },
      {
        name: 'Colágeno Hidrolizado y Vitamina B5',
        benefit: 'Reafirma la piel descolgada, frena la caída del pelo y engruesa las uñas débiles.'
      }
    ],
    longTailKeywords: [
      'combo para desmanchar el rostro y tensar piel flacida colombia',
      'crema eventone con bio retinol y resveratrol bebible precio',
      'como quitar manchas oscuras de la edad y rellenar lineas de expresion',
      'combo belleza eterna azenza original pago contra entrega envio gratis',
      'tratamiento despigmentante facial no agresivo con registro invima',
      'suero y crema para cutis maduro firme y libre de manchas',
      'comprar combo belleza eterna azenza pedir por whatsapp'
    ],
    seoFaqs: [
      { q: '¿Eventone quita manchas de sol?', a: 'Sí, ayuda a unificar el tono promoviendo una piel radiante y bienestar integral.' },
      { q: '¿El resveratrol potencia el efecto aclarante?', a: 'Al proteger las células, permite que la piel se regenere con mayor vitalidad y equilibrio natural.' },
      { q: '¿Se puede usar en pieles sensibles?', a: 'Su fórmula balanceada con calidad certificada es apta para cuidar tu piel con suavidad.' }
    ],
    benefits: [
      'Rellena patas de gallo, arrugas y surcos en el rostro y cuello',
      'Desvanece manchas oscuras y empareja el tono natural de la piel',
      'Tensa la piel flácida y caída devolviéndole elasticidad juvenil',
      'Fortalece el cabello débil y las uñas para que no se quiebren'
    ],
    testimonials: [
      { name: 'Sandra Milena', text: 'He notado que mis manchas han disminuido. Muy recomendado.', rating: 5 },
      { name: 'Patricia Gomez', text: 'Siento mi piel más suave y protegida.', rating: 4 }
    ]
  },
  {
    id: 'promo-3',
    name: 'Combo Detox Digestivo',
    description: `La congestión simultánea del hígado y del colon es la causante directa de la pesadez estomacal, la boca amarga al despertar, los cólicos y el vientre abotagado que no cede. El Combo Detox Digestivo reúne la acción depurativa de Rtafull con la limpieza intestinal profunda de Coliplus para brindar un drenaje completo. Rtafull activa la producción biliar con extractos de Alcachofa, Jamaica, Berenjena, Apio y Perejil para procesar grasas densas y drenar riñones cargados de impurezas, mientras Coliplus aporta mucílagos de Linaza, Chía y Pitaya que barren suavemente las toxinas y desechos adheridos a las paredes del colon.

A mediano plazo, este protocolo botánico desinflama el abdomen visiblemente, alivia el reflujo y los gases con mal olor, y normaliza las evacuaciones diarias sin diarreas ni retortijones. Avalado con Registros INVIMA oficiales, es la alternativa más segura y natural para resetear tu digestión y sentirte ligero todos los días.

✔️ Drenaje Hepático y Renal: Limpia grasas acumuladas y toxinas en el hígado y los riñones de forma 100% natural.
✔️ Colon Limpio y Desinflamado: Barre residuos retenidos por semanas, eliminando la hinchazón y la pesadez del vientre.
✔️ Digestión Ligera y Sin Gases: Calma cólicos, flatulencias dolorosas y la acidez o boca amarga tras comer.`,
    image: '/assets/combos/promo-3.webp',
    price: 116850,
    originalPrice: 155000,
    googleCategory: 'Health & Beauty > Health Care > Fitness & Nutrition',
    condition: 'new',
    products: ['coliplus', 'rtafull'],
    seoTitle: 'Combo Detox Digestivo: Limpia Hígado Graso y Desinflama el Colon | Envío Gratis',
    seoDescription: 'Limpia el hígado graso, desinflama el colon y expulsa gases retenidos con Rtafull + Coliplus. Ahorra $38.150 COP. ¡Envío Gratis y Pago Contra Entrega en Colombia!',
    whyChoose: {
      title: 'Limpia el Hígado Graso, Desinflama el Colon y Elimina Gases',
      description: 'Dile adiós a la pesadez estomacal, la boca amarga y los gases retenidos combinando la limpieza de hígado graso de Rtafull con la descongestión de colon de Coliplus. Drena toxinas acumuladas y evacúa a diario sin cólicos ni retortijones con calidad certificada.'
    },
    badge: 'COMBO N°3',
    keywords: 'combo detox digestivo, rtafull, coliplus, limpiar higado graso, desinflamar colon irritable, boca amarga al despertar, pesadez estomacal, expulsion de gases, evacuar a diario, linaza y pitaya, alcachofa liquida, azenza, pago contra entrega',
    components: 'Linaza, Pitaya, Flor de Jamaica, Alcachofa, Semillas de Chía, Espirulina, Té Verde y Perejil',
    componentBenefits: [
      {
        name: 'Linaza, Chía y Pitaya',
        benefit: 'Aflojan las heces atascadas y mueven el colon perezoso para ir al baño a diario sin pujar.'
      },
      {
        name: 'Alcachofa, Té Verde y Perejil',
        benefit: 'Disuelven las grasas acumuladas en el hígado, quitan la boca amarga y desinflaman riñones.'
      },
      {
        name: 'Flor de Jamaica y Espirulina',
        benefit: 'Sacan los líquidos retenidos, quitan los cólicos dolorosos y desinflaman la barriga hinchada.'
      }
    ],
    longTailKeywords: [
      'mejor combo para limpiar higado graso y desinflamar colon hinchado',
      'rtafull y coliplus precio colombia oferta combo detox',
      'como desintoxicar el higado y sacar heces retenidas sin colicos',
      'combo detox digestivo azenza original contra entrega envio gratis',
      'remedio natural para la boca amarga digestion lenta y barriga abultada',
      'limpieza de higado y colon con registro invima comprar colombia',
      'pedir combo rtafull y coliplus por whatsapp domicilio gratis'
    ],
    seoFaqs: [
      { q: '¿Este combo causa diarrea?', a: 'No, su fórmula balanceada promueve una limpieza gentil respetando tu equilibrio natural y vitalidad.' },
      { q: '¿Cuánto dura el cuidado detox?', a: 'Se recomienda realizarlo durante un mes para un bienestar integral y resultados duraderos.' },
      { q: '¿Puedo comer normal durante el detox?', a: 'Sí, pero una dieta balanceada potenciará la vitalidad y calidad certificada del proceso.' }
    ],
    benefits: [
      'Ayuda a limpiar el hígado graso y a eliminar toxinas y grasas pesadas',
      'Descongestiona riñones cargados expulsando líquidos retenidos e impurezas',
      'Quita el estreñimiento y limpia el colon para evacuar diario sin dolor',
      'Elimina la hinchazón del estómago, los gases con mal olor y los cólicos'
    ],
    testimonials: [
      { name: 'Jorge Eliécer', text: 'El mejor detox que he probado. Me siento renovado.', rating: 5 },
      { name: 'Beatriz Elena', text: 'Adiós a la inflamación. Muy efectivo.', rating: 5 }
    ]
  },
  {
    id: 'promo-4',
    name: 'Combo Control & Detox',
    description: `El metabolismo lento, los ataques de ansiedad por comer dulce entre comidas y la sobrecarga de toxinas en el hígado dificultan la pérdida de peso y mantienen el abdomen distendido y pesado. El Combo Control & Detox combina el control del apetito y termogénesis de Liteplex con el drenaje hepático y renal profundo de Rtafull. Liteplex modula el apetito y ayuda a transformar los depósitos de grasa en energía activa con extractos reductores, mientras Rtafull descongestiona el hígado graso mediante Alcachofa, Jamaica, Berenjena, Apio y Perejil, optimizando la eliminación de impurezas y líquidos retenidos.

A mediano y largo plazo, esta potente alianza acelera el gasto calórico de manera natural, reduce medidas en cintura y cadera, y desinflama el vientre hinchado, permitiéndote alcanzar tu peso ideal sin pasar hambre ni sufrir fatiga. Con Registro INVIMA oficial, es un método cómodo y confiable para estilizar tu figura y depurar tu organismo.

✔️ Control Efectivo del Apetito: Calma la ansiedad de picar entre horas y prolonga la saciedad de forma natural.
✔️ Metabolismo y Quema de Grasa: Ayuda a movilizar y oxidar grasa acumulada en zonas difíciles como abdomen y cintura.
✔️ Limpieza Hepática Profunda: Descongestiona el hígado graso y drena líquidos retenidos para verte y sentirte liviano.`,
    image: '/assets/combos/promo-4.webp',
    price: 119850,
    originalPrice: 159800,
    googleCategory: 'Health & Beauty > Health Care > Fitness & Nutrition',
    condition: 'new',
    products: ['liteplex', 'rtafull'],
    seoTitle: 'Combo Control & Detox: Acelera Metabolismo y Quema Grasa | Envío Gratis',
    seoDescription: 'Acelera el metabolismo lento, frena la ansiedad por dulce y desinflama el abdomen con Liteplex + Rtafull. Ahorra $39.950 COP con Pago Contra Entrega en Colombia.',
    whyChoose: {
      title: 'Acelera el Metabolismo Lento y Quema Grasa Acumulada',
      description: 'Reactiva el metabolismo lento, frena los ataques de ansiedad por dulce y desinflama tu abdomen integrando Liteplex y Rtafull. Quema grasa acumulada de manera natural mientras depuras el hígado cargado de impurezas con fórmula certificada.'
    },
    badge: 'COMBO N°4',
    keywords: 'combo control detox, liteplex, rtafull, quemar grasa abdominal, acelerar metabolismo lento, calmar ansiedad de dulce, desinflamar barriga, retencion de liquidos, te verde y jengibre, alcachofa, azenza, comprar colombia, pago contra entrega',
    components: 'Té Verde, Jengibre, Alcachofa, Flor de Jamaica, Perejil, Berenjena, Apio y Albahaca',
    componentBenefits: [
      {
        name: 'Jengibre y Albahaca',
        benefit: 'Calman el ardor de estómago, reducen los gases y quitan la inflamación tras comer.'
      },
      {
        name: 'Alcachofa, Apio y Berenjena',
        benefit: 'Ayudan a procesar las grasas pesadas, limpian el hígado y alivian la llenura.'
      },
      {
        name: 'Flor de Jamaica y Perejil',
        benefit: 'Descongestionan los riñones y expulsan el líquido que te hace sentir pesado e hinchado.'
      }
    ],
    longTailKeywords: [
      'combo natural para acelerar metabolismo y quemar grasa del abdomen',
      'liteplex y rtafull precio colombia oferta control de peso',
      'como frenar la ansiedad por comer dulce y desinflamar la cintura',
      'combo control y detox azenza envio gratis pago contra entrega',
      'suplemento para perder medidas sin efecto rebote con registro invima',
      'drenaje linfatico y quema de grasa natural sin pasar hambre',
      'comprar combo control y detox por whatsapp con envio gratis'
    ],
    seoFaqs: [
      { q: '¿Liteplex quita el hambre?', a: 'Ayuda a controlar la ansiedad, promoviendo un bienestar integral y control consciente.' },
      { q: '¿Rtafull ayuda a moldear la figura?', a: 'Al limpiar el hígado y colon, mejora el metabolismo y la vitalidad para tu equilibrio natural.' },
      { q: '¿Tiene efecto rebote?', a: 'Nuestra fórmula balanceada prioriza la salud, evitando efectos negativos con calidad certificada.' }
    ],
    benefits: [
      'Limpia el hígado graso y activa el metabolismo para quemar grasa acumulada',
      'Calma los ataques de ansiedad por comer dulces y carbohidratos',
      'Elimina la retención de líquidos que hincha las piernas y el abdomen',
      'Quita la pesadez después de comer y el abotagamiento estomacal'
    ],
    testimonials: [
      { name: 'Claudia Patricia', text: 'Me ha ayudado mucho en mi proceso de moldear la figura.', rating: 5 },
      { name: 'Ricardo Jose', text: 'Siento mucha más energía y menos ansiedad.', rating: 4 }
    ]
  },
  {
    id: 'promo-5',
    name: 'Combo Protección Total',
    description: `La sudoración excesiva, el mal olor persistente en axilas o pies y la sensación de pesadez corporal se originan tanto por proliferación bacteriana externa como por toxinas acumuladas en el hígado y los riñones. El Combo Protección Total proporciona una solución dual que actúa por dentro y por fuera. Tufoff regula las glándulas sudoríparas y erradica bacterias y hongos causantes del mal olor, manteniendo axilas y pies secos y frescos hasta por 5 días; al mismo tiempo, Rtafull depura el hígado graso y drena los riñones mediante extractos botánicos, purificando las toxinas que intensifican el olor del sudor.

A mediano plazo, este tratamiento elimina las manchas de sudor en la ropa, la irritación en pliegues dérmicos y la incomodidad digestiva, devolviéndote seguridad personal, frescura duradera y ligereza estomacal. Formulados con Registro INVIMA oficial, garantizan una protección clínica impecable sin agredir la piel ni el organismo.

✔️ Cero Sudor y Mal Olor: Mantiene axilas y pies completamente secos y sin bacterias hasta por 5 días seguidos.
✔️ Depuración Interna de Toxinas: Limpia el hígado y los riñones para neutralizar olores corporales desde la raíz.
✔️ Seguridad y Frescura Prolongada: Olvídate de camisas manchadas, rozaduras y pesadez con una rutina simple y duradera.`,
    image: '/assets/combos/promo-5.webp',
    price: 123675,
    originalPrice: 164900,
    googleCategory: 'Health & Beauty > Health Care > Fitness & Nutrition',
    condition: 'new',
    products: ['tufoff', 'rtafull'],
    seoTitle: 'Combo Protección Total: Elimina Mal Aliento y Drena Toxinas | Envío Gratis',
    seoDescription: 'Elimina el mal aliento estomacal y neutraliza olores corporales limpiando hígado y boca con Tufoff + Rtafull. Ahorra $41.225 COP. ¡Envío Gratis Contra Entrega!',
    whyChoose: {
      title: 'Elimina el Mal Aliento y Desintoxica Hígado y Riñones',
      description: 'Elimina el mal aliento persistente y el olor corporal fuerte atacando la causa real desde el interior: depura las toxinas del hígado y riñones con Rtafull y mantén una higiene profunda y frescura inmediata con Tufoff. Máxima protección y limpieza interna garantizada.'
    },
    badge: 'COMBO N°5',
    keywords: 'combo proteccion total, tufoff, rtafull, eliminar mal aliento de estomago, halitosis persistente, sudoracion excesiva axilas, olor corporal fuerte, desintoxicar higado, bicarbonato y menta, azenza, pago contra entrega colombia, envio gratis',
    components: 'Flor de Jamaica, Alcachofa, Perejil, Berenjena, Eritritol, Inulina, Aceite de Menta y Bicarbonato de Sodio',
    componentBenefits: [
      {
        name: 'Alcachofa, Berenjena y Perejil',
        benefit: 'Limpian el hígado graso, quitan la boca amarga y ayudan a procesar comidas grasosas.'
      },
      {
        name: 'Menta Natural y Bicarbonato',
        benefit: 'Cortan de raíz los olores fuertes en la boca y dejan una frescura limpia y duradera.'
      },
      {
        name: 'Inulina y Prebióticos',
        benefit: 'Equilibran las bacterias buenas en la boca y el estómago para que no vuelva el mal olor.'
      }
    ],
    longTailKeywords: [
      'combo para quitar mal aliento que viene del estomago e higado',
      'tufoff y rtafull precio colombia oferta proteccion corporal',
      'como eliminar el olor a sudor fuerte en axilas y pies por dias',
      'combo proteccion total azenza original pago contra entrega',
      'tratamiento para la halitosis y boca amarga con registro invima',
      'remedio natural para el mal aliento cronico y depuracion hepatica',
      'pedir combo proteccion total por whatsapp con envio gratis'
    ],
    seoFaqs: [
      { q: '¿Tufoff ayuda con el sudor fuerte?', a: 'Sí, brinda una frescura duradera que junto a la limpieza de Rtafull promueve el bienestar integral.' },
      { q: '¿Rtafull limpia la sangre?', a: 'Ayuda a depurar el hígado y colon, lo que se refleja en una vitalidad renovada y equilibrio natural.' },
      { q: '¿Se puede tomar por tiempo prolongado?', a: 'Nuestra fórmula balanceada es segura para un mantenimiento preventivo con calidad certificada.' }
    ],
    benefits: [
      'Elimina el mal aliento persistente desde la boca y desde el estómago',
      'Limpia el hígado sobrecargado y elimina el sabor amargo al despertar',
      'Alivia la acidez, los reflujos molestos y la pesadez estomacal',
      'Desintoxica riñones y órganos digestivos para un cuerpo limpio y fresco'
    ],
    testimonials: [
      { name: 'Luz Marina', text: 'Me siento protegida y con mucha más vitalidad.', rating: 5 },
      { name: 'Fernando', text: 'Un combo esencial para mantener la salud.', rating: 5 }
    ]
  },
  {
    id: 'promo-6',
    name: 'Combo Alivio Muscular',
    description: `Los dolores punzantes en rodillas, espalda baja y hombros, el crujido al agacharse y la rigidez articular al levantarse son señales claras de desgaste en cartílagos y sobrecarga muscular. El Combo Alivio Muscular combina el alivio tópico inmediato de la Loción Herbal con la nutrición estructural interna del Colágeno Hidrolizado con Citrato de Magnesio. La Loción Herbal penetra la piel con extractos botánicos calmantes que relajan tendones y desinflaman contracturas con un efecto térmico reconfortante, mientras el Colágeno y Magnesio regeneran cartílagos, tendones y masa ósea desde el interior.

A mediano y largo plazo, este tratamiento restaura la movilidad y lubricación articular, previene calambres nocturnos y devuelve la agilidad para caminar, subir gradas y realizar tus labores cotidianas sin molestias. Con Registro INVIMA oficial y fórmulas puras, es la fórmula confiable para recuperar tu libertad de movimiento.

✔️ Alivio Rápido del Dolor: Calma contracturas, lumbagos y molestias en articulaciones desde la primera aplicación.
✔️ Regeneración Articular: El colágeno hidrolizado y magnesio nutren y fortalecen cartílagos frente al desgaste diario.
✔️ Flexibilidad y Cero Rigidez: Relaja músculos tensos y elimina calambres para que te muevas con soltura y sin quejas.`,
    image: '/assets/combos/promo-6.webp',
    price: 123675,
    originalPrice: 164900,
    googleCategory: 'Health & Beauty > Health Care > Fitness & Nutrition',
    condition: 'new',
    products: ['locion', 'colageno'],
    seoTitle: 'Combo Alivio Muscular: Alivia Dolores de Rodilla y Rigidez | Envío Gratis',
    seoDescription: 'Alivia dolores de rodillas desgastadas, lumbago y rigidez con Loción Termoactiva + Colágeno Magnesio. Ahorra $41.225 COP. ¡Paga en Casa con Envío Gratis!',
    whyChoose: {
      title: 'Alivia Dolores en Rodillas, Espalda y Rigidez Articular',
      description: 'Calma el dolor punzante en rodillas, espalda y hombros de forma inmediata con el calor reconfortante de la Loción Termoactiva, mientras el Colágeno hidrolizado regenera cartílagos y ligamentos desgastados. Vuelve a moverte sin rigidez ni crujidos molestos con fórmula certificada.'
    },
    badge: 'COMBO N°6',
    keywords: 'combo alivio muscular, locion termoactiva herbal, colageno hidrolizado con magnesio, dolor de rodillas, crujidos al agacharse, rigidez articular al levantarse, lumbago, dolor de espalda baja, calambres nocturnos, azenza, pago contra entrega',
    components: 'Extractos naturales relajantes, Colágeno Hidrolizado y Citrato de Magnesio',
    componentBenefits: [
      {
        name: 'Loción Herbal con Efecto Térmico',
        benefit: 'Penetra con calor calmante para desinflamar músculos tensos, espaldas adoloridas y rodillas inflamadas.'
      },
      {
        name: 'Colágeno Hidrolizado y Magnesio',
        benefit: 'Frena el desgaste de cartílagos, quita los calambres en las piernas y lubrica las articulaciones resecas.'
      }
    ],
    longTailKeywords: [
      'combo para dolor agudo de rodillas cartílagos y espalda colombia',
      'locion termoactiva y colageno con magnesio precio oferta azenza',
      'como quitar la rigidez en las articulaciones y levantarse sin dolor',
      'combo alivio muscular azenza envio gratis pago contra entrega',
      'tratamiento para desgaste articular y calambres con registro invima',
      'locion para dolores musculares fuertes y colageno regenerador',
      'comprar combo alivio muscular azenza por whatsapp contra entrega'
    ],
    seoFaqs: [
      { q: '¿La loción se puede usar antes de hacer ejercicio?', a: 'Sí, su efecto termoactivo prepara los músculos para el bienestar integral y vitalidad.' },
      { q: '¿El colágeno ayuda a los huesos?', a: 'Efectivamente, nutre el sistema óseo y articular promoviendo un equilibrio natural duradero.' },
      { q: '¿Sirve para desgaste prolongado?', a: 'Nuestra fórmula balanceada es un excelente apoyo para el alivio constante con calidad certificada.' }
    ],
    benefits: [
      'Calma los dolores agudos en rodillas, espalda, cuello y articulaciones',
      'Quita la rigidez matutina para levantarte y caminar sin molestias ni crujidos',
      'Alivia contracturas, calambres nocturnos y fatiga muscular acumulada',
      'Nutre y lubrica los cartílagos desgastados con colágeno y magnesio'
    ],
    testimonials: [
      { name: 'Doña Rosa', text: 'Mis rodillas ya no me molestan tanto. Gracias.', rating: 5 },
      { name: 'Don Pedro', text: 'La loción es mágica para después del trabajo.', rating: 5 }
    ]
  },
  {
    id: 'promo-8',
    name: 'Combo Vitalidad & Limpieza',
    description: `El cansancio crónico al despertar, el bajo rendimiento físico o íntimo y la pesadez estomacal tras comer evidencian un cuerpo saturado de toxinas y falto de nutrientes energéticos clave. El Combo Vitalidad & Limpieza une el vigorizante nutricional Tyruss Full con el sistema de drenaje hepático y renal de Rtafull. Tyruss Full reactiva el vigor natural, mejora la resistencia y combate el desgano físico y mental sin taquicardias gracias a sus bioactivos estimulantes; en paralelo, Rtafull depura el hígado graso y purifica las vías urinarias con Alcachofa, Jamaica, Apio y Perejil, aligerando la digestión.

A mediano y largo plazo, esta combinación devuelve la energía sostenida durante todo el día, disuelve la inflamación abdominal y revitaliza tu bienestar físico y vital para rendir al máximo en cada jornada. Con Registro INVIMA oficial y origen natural, es el impulso perfecto para vivir activo, liviano y con fuerza renovada.

✔️ Energía y Rendimiento Superior: Eleva el vigor físico, la resistencia y la vitalidad diaria sin bajones ni nerviosismo.
✔️ Depuración Hepática Total: Descongestiona el hígado graso de impurezas, eliminando la boca amarga y la pesadez estomacal.
✔️ Cuerpo Ligero y Despejado: Elimina toxinas acumuladas para que comiences cada día con claridad mental y motivación.`,
    image: '/assets/combos/promo-8.webp',
    price: 127350,
    originalPrice: 169800,
    googleCategory: 'Health & Beauty > Health Care > Fitness & Nutrition',
    condition: 'new',
    products: ['tyruss-full', 'rtafull'],
    seoTitle: 'Combo Vitalidad & Limpieza: Vence el Cansancio y Limpia el Hígado | Envío Gratis',
    seoDescription: 'Elimina el cansancio crónico, recupera energía física y depura el hígado graso con Tyruss Full + Rtafull. Ahorra $42.450 COP. ¡Envío Gratis Contra Entrega!',
    whyChoose: {
      title: 'Elimina el Cansancio Crónico y Descongestiona el Hígado',
      description: 'Vence la fatiga constante al levantarte y la pesadez estomacal tras cada comida combinando la energía vigorizante de Tyruss Full con el drenaje hepático de Rtafull. Limpia el hígado graso de toxinas y rinde al máximo durante todo el día con calidad certificada.'
    },
    badge: 'COMBO N°8',
    keywords: 'combo vitalidad limpieza, tyruss full, rtafull, cansancio cronico al despertar, fatiga fisica y mental, oxigenar sangre con clorofila, limpiar higado graso, espirulina y chlorella, desgano diario, azenza, comprar online colombia, pago contra entrega',
    components: 'Clorofila, Espirulina, Chlorella, Alcachofa, Flor de Jamaica, Omega 3, Espinaca, Aguacate y Té Verde',
    componentBenefits: [
      {
        name: 'Clorofila, Espirulina y Chlorella',
        benefit: 'Oxigenan el cuerpo, limpian la sangre y quitan la fatiga constante desde la primera toma.'
      },
      {
        name: 'Alcachofa, Flor de Jamaica y Té Verde',
        benefit: 'Disuelven las grasas del hígado, descongestionan riñones y ayudan a expulsar líquidos acumulados.'
      },
      {
        name: 'Espinaca y Omega 3',
        benefit: 'Nutren el cuerpo desgastado para que rindas con claridad mental y sin agotamiento físico.'
      }
    ],
    longTailKeywords: [
      'combo para eliminar el cansancio cronico y limpiar el higado',
      'tyruss full y rtafull precio colombia oferta vitalidad',
      'como tener mas energia durante el dia sin taquicardias ni cafeina',
      'combo vitalidad y limpieza azenza original pago contra entrega',
      'suplemento para la fatiga debilidad fisica y pesadez hepatica',
      'clorofila pura y extracto botánico depurativo con registro invima',
      'comprar combo vitalidad y limpieza azenza por whatsapp'
    ],
    seoFaqs: [
      { q: '¿Tyruss Full se puede mezclar con Rtafull?', a: 'Se recomienda tomarlos por separado para que cada fórmula balanceada actúe en tu bienestar integral.' },
      { q: '¿Ayuda a mejorar la digestión?', a: 'Sí, la limpieza de Rtafull junto a la vitalidad de Tyruss promueven un equilibrio natural digestivo.' },
      { q: '¿Es apto para deportistas?', a: 'Efectivamente, apoya el rendimiento y la recuperación con calidad certificada para una vida activa.' }
    ],
    benefits: [
      'Elimina el cansancio crónico y la pesadez corporal recargando tu energía',
      'Ayuda a limpiar el hígado graso y drena riñones cargados de toxinas acumuladas',
      'Oxigena la sangre con clorofila pura para combatir el desgano matutino',
      'Desinflama la barriga y saca los líquidos retenidos que te hacen sentir pesado'
    ],
    testimonials: [
      { name: 'Javier', text: 'Siento que mi cuerpo funciona mucho mejor.', rating: 5 },
      { name: 'Mónica', text: 'Excelente para recuperar la energía perdida.', rating: 5 }
    ]
  },
  {
    id: 'promo-9',
    name: 'Inmunidad Dual',
    description: `Cuando el colon se inflama por desechos biológicos acumulados y gases retenidos, el sistema inmune se debilita, causando pesadez abdominal, evacuaciones dolorosas y vulnerabilidad a gripes frecuentes y fatiga continua. El Combo Inmunidad Dual une la acción depurativa de Coliplus con el blindaje inmune de Resvisfactor. Mientras las fibras prebióticas de Chía, Linaza y Pitaya lubrican el tracto entérico y facilitan una limpieza profunda del colon sin cólicos ni diarreas, el Calostro Bovino, Hongos Shiitake y Ganoderma y aminoácidos esenciales estimulan las defensas celulares y combaten el desgaste corporal.

A mediano y largo plazo, su consumo combinado equilibra la flora bacteriana, aplana el vientre abotagado y fortalece las vías respiratorias frente a cambios climáticos y virus. Con Registro INVIMA oficial y fórmulas de alta biodisponibilidad, es el tratamiento definitivo para despedirte de la inflamación de colon y vivir protegido y enérgico.

✔️ Defensas Blindadas: Calostro bovino y hongos medicinales que refuerzan tu sistema inmune contra virus y decaimiento.
✔️ Vientre Plano y Sin Gases: Desinflama el colon irritado, expulsa flatulencias dolorosas y quita la pesadez tras comer.
✔️ Evacuación Regular y Suave: Barre residuos adheridos al intestino para que vayas al baño diariamente sin esfuerzo.`,
    image: '/assets/combos/combo-bienestar.webp',
    price: 129900,
    originalPrice: 165800,
    products: ['resvis', 'coliplus'],
    seoTitle: 'Combo Inmunidad Dual: Desinflama el Vientre y Refuerza Defensas | Envío Gratis',
    seoDescription: 'Desinflama tu vientre abultado y blinda tus defensas con Inmunidad Dual (Resvisfactor + Coliplus) por $129.900 COP (Ahorro $35.900). ¡Envío Gratis Contra Entrega!',
    whyChoose: {
      title: 'Desinflama tu Vientre y Refuerza tus Defensas Naturales',
      description: 'Desinflama el colon de desechos biológicos acumulados con las fibras prebióticas de Coliplus y blinda tus defensas contra gripes frecuentes y cansancio con Resvisfactor. Digestión suave y ligera combinada con protección inmune de calidad certificada.'
    },
    badge: 'COMBO N°9',
    benefits: [
      'Sube las defensas para evitar gripes constantes, recaídas y debilidad',
      'Desinflama el colon irritado y quita los gases con mal olor y cólicos',
      'Limpia el intestino perezoso para que evacues a diario sin dolor ni esfuerzo',
      'Elimina la pesadez estomacal y devuelve la energía y ligereza al cuerpo'
    ],
    keywords: 'inmunidad dual, resvisfactor, coliplus, desinflamar vientre hinchado, limpiar colon de toxinas, defensas bajas, calostro bovino, hongos adaptogenos, fibra de pitaya, estreñimiento, evacuar sin dolor, combo oferta colombia, pago contra entrega, envio gratis, azenza',
    components: 'Calostro Bovino, Hongo Shiitake, Resveratrol, Linaza, Pitaya, Flor de Jamaica, Alcachofa, Betaglucanos y Vitaminas',
    componentBenefits: [
      {
        name: 'Calostro Bovino y Hongo Shiitake',
        benefit: 'Blindan tus defensas para que los cambios de clima y los virus no te tiren a la cama.'
      },
      {
        name: 'Linaza, Pitaya y Alcachofa',
        benefit: 'Desinflaman el vientre hinchado, combaten el estreñimiento y barren los desechos pegados al colon.'
      },
      {
        name: 'Resveratrol y Vitaminas',
        benefit: 'Protegen tus células y te devuelven la vitalidad para que no sientas ese desgano diario.'
      }
    ],
    longTailKeywords: [
      'combo para desinflamar el vientre abultado y subir defensas rapido',
      'resvisfactor y coliplus precio colombia oferta del mes',
      'limpieza profunda de colon con pitaya y fortalecimiento inmunologico',
      'como desinflamar el estomago y evacuar a diario sin colicos ni dolor',
      'combo inmunidad dual azenza original pago contra entrega envio gratis',
      'comprar resvisfactor y coliplus con registro invima colombia',
      'remedio natural para colon irritable gases y defensas caidas',
      'pedir combo inmunidad dual por whatsapp con domicilio gratis'
    ],
    seoFaqs: [
      { q: '¿Por qué este combo es el más recomendado?', a: 'Porque combina el poder antioxidante de Resvis Factor con el bienestar digestivo de Coliplus para una salud integral total.' },
      { q: '¿En cuánto tiempo veré resultados?', a: 'La mayoría siente una reconfortación y mayor vitalidad desde la primera semana de uso constante.' },
      { q: '¿Es seguro para personas con gastritis?', a: 'Sí, su fórmula balanceada es gentil con el estómago, promoviendo el equilibrio natural.' }
    ],
    testimonials: [
      { name: 'Andrés Castro', text: 'Este combo cambió mi vida digestiva por completo.', rating: 5 },
      { name: 'Liliana Restrepo', text: 'Me siento mucho más ligera y con más energía.', rating: 5 }
    ]
  }
];


export interface GiftProduct {
  id: string;
  masterId: string;
  name: string;
}

export const GIFT_PRODUCTS: GiftProduct[] = [
  { id: 'gift-coli', masterId: '49603', name: 'Obsequio Coliplus' },
  { id: 'gift-titan', masterId: '26846', name: 'Obsequio Titan Coffe' },
  { id: 'gift-coffee-col', masterId: '26845', name: 'Obsequio Coffe Colageno' },
  { id: 'gift-dampy', masterId: '76365', name: 'Obsequio Pañitos Dampy' },
  { id: 'gift-repo', masterId: '11301', name: 'Obsequio Gratis Repolarizador' },
  { id: 'gift-shampoo', masterId: '11270', name: 'Obsequio Shampoo Sin sal' },
  { id: 'gift-termo', masterId: '11253', name: 'Obsequio termoactiva' },
];

export const COLOMBIA_DATA = {
  'Amazonas': ['Leticia', 'Puerto Nariño', 'El Encanto', 'La Chorrera', 'La Pedrera', 'La Victoria', 'Mirití - Paraná', 'Puerto Alegría', 'Puerto Arica', 'Puerto Santander', 'Tarapacá'],
  'Antioquia': ['Medellín', 'Abejorral', 'Abriaquí', 'Alejandría', 'Amagá', 'Amalfi', 'Andes', 'Angelópolis', 'Angostura', 'Anorí', 'Santa Fé De Antioquia', 'Anzá', 'Apartadó', 'Arboletes', 'Argelia', 'Armenia', 'Barbosa', 'Belmira', 'Bello', 'Betania', 'Betulia', 'Ciudad Bolívar', 'Briceño', 'Buriticá', 'Cáceres', 'Caicedo', 'Caldas', 'Campamento', 'Cañasgordas', 'Caracolí', 'Caramanta', 'Carepa', 'El Carmen De Viboral', 'Carolina', 'Caucasia', 'Chigorodó', 'Cisneros', 'Cocorná', 'Concepción', 'Concordia', 'Copacabana', 'Dabeiba', 'Donmatías', 'Ebéjico', 'El Bagre', 'Entrerríos', 'Envigado', 'Fredonia', 'Frontino', 'Giraldo', 'Girardota', 'Gómez Plata', 'Granada', 'Guadalupe', 'Guarne', 'Guatapé', 'Heliconia', 'Hispania', 'Itagüí', 'Ituango', 'Jardín', 'Jericó', 'La Ceja', 'La Estrella', 'La Pintada', 'La Unión', 'Liborina', 'Maceo', 'Marinilla', 'Montebello', 'Murindó', 'Mutatá', 'Nariño', 'Necoclí', 'Nechí', 'Olaya', 'Peñol', 'Peque', 'Pueblorrico', 'Puerto Berrío', 'Puerto Nare', 'Puerto Triunfo', 'Remedios', 'Retiro', 'Rionegro', 'Sabanalarga', 'Sabaneta', 'Salgar', 'San Andrés De Cuerquía', 'San Carlos', 'San Francisco', 'San Jerónimo', 'San José De La Montaña', 'San Juan De Urabá', 'San Luis', 'San Pedro De Los Milagros', 'San Pedro De Urabá', 'San Rafael', 'San Roque', 'San Vicente Ferrer', 'Santa Bárbara', 'Santa Rosa De Osos', 'Santo Domingo', 'El Santuario', 'Segovia', 'Sonsón', 'Sopetrán', 'Támesis', 'Tarazá', 'Tarso', 'Titiribí', 'Toledo', 'Turbo', 'Uramita', 'Urrao', 'Valdivia', 'Valparaíso', 'Vegachí', 'Venecia', 'Vigía Del Fuerte', 'Yalí', 'Yarumal', 'Yolombó', 'Yondó', 'Zaragoza'],
  'Arauca': ['Arauca', 'Arauquita', 'Cravo Norte', 'Fortul', 'Puerto Rondón', 'Saravena', 'Tame'],
  'Atlántico': ['Barranquilla', 'Baranoa', 'Campo De La Cruz', 'Candelaria', 'Galapa', 'Juan De Acosta', 'Luruaco', 'Malambo', 'Manatí', 'Palmar De Varela', 'Piojó', 'Polonuevo', 'Ponedera', 'Puerto Colombia', 'Repelón', 'Sabanagrande', 'Sabanalarga', 'Santa Lucía', 'Santo Tomás', 'Soledad', 'Suan', 'Tubará', 'Usiacurí'],
  'Bogotá D.C.': ['Bogotá, D.C.'],
  'Bolívar': ['Cartagena De Indias', 'Achí', 'Altos Del Rosario', 'Arenal', 'Arjona', 'Arroyohondo', 'Barranco De Loba', 'Calamar', 'Cantagallo', 'Cicuco', 'Córdoba', 'Clemencia', 'El Carmen De Bolívar', 'El Guamo', 'El Peñón', 'Hatillo De Loba', 'Magangué', 'Mahates', 'Margarita', 'María La Baja', 'Montecristo', 'Santa Cruz De Mompox', 'Morales', 'Norosí', 'Pinillos', 'Regidor', 'Río Viejo', 'San Cristóbal', 'San Estanislao', 'San Fernando', 'San Jacinto', 'San Jacinto Del Cauca', 'San Juan Nepomuceno', 'San Martín De Loba', 'San Pablo', 'Santa Catalina', 'Santa Rosa', 'Santa Rosa Del Sur', 'Simití', 'Soplaviento', 'Talaigua Nuevo', 'Tiquisio', 'Turbaco', 'Turbaná', 'Villanueva', 'Zambrano'],
  'Boyacá': ['Tunja', 'Almeida', 'Aquitania', 'Arcabuco', 'Belén', 'Berbeo', 'Betéitiva', 'Boavita', 'Boyacá', 'Briceño', 'Buenavista', 'Busbanzá', 'Caldas', 'Campohermoso', 'Cerinza', 'Chinavita', 'Chiquinquirá', 'Chiscas', 'Chita', 'Chitaraque', 'Chivatá', 'Ciénega', 'Cómbita', 'Coper', 'Corrales', 'Covarachía', 'Cubará', 'Cucaita', 'Cuítiva', 'Chíquiza', 'Chivor', 'Duitama', 'El Cocuy', 'El Espino', 'Firavitoba', 'Floresta', 'Gachantivá', 'Gámeza', 'Garagoa', 'Guacamayas', 'Guateque', 'Guayatá', 'Güicán De La Sierra', 'Iza', 'Jenesano', 'Jericó', 'Labranzagrande', 'La Capilla', 'La Victoria', 'La Uvita', 'Villa De Leyva', 'Macanal', 'Maripí', 'Miraflores', 'Mongua', 'Monguí', 'Moniquirá', 'Motavita', 'Muzo', 'Nobsa', 'Nuevo Colón', 'Oicatá', 'Otanche', 'Pachavita', 'Páez', 'Paipa', 'Pajarito', 'Panqueba', 'Pauna', 'Paya', 'Paz De Río', 'Pesca', 'Pisba', 'Puerto Boyacá', 'Quípama', 'Ramiriquí', 'Ráquira', 'Rondón', 'Saboyá', 'Sáchica', 'Samacá', 'San Eduardo', 'San José De Pare', 'San Luis De Gaceno', 'San Mateo', 'San Miguel De Sema', 'San Pablo De Borbur', 'Santana', 'Santa María', 'Santa Rosa De Viterbo', 'Santa Sofía', 'Sativanorte', 'Sativasur', 'Siachoque', 'Soatá', 'Socotá', 'Socha', 'Sogamoso', 'Somondoco', 'Sora', 'Sotaquirá', 'Soracá', 'Susacón', 'Sutamarchán', 'Sutatenza', 'Tasco', 'Tenza', 'Tibaná', 'Tibasosa', 'Tinjacá', 'Tipacoque', 'Toca', 'Togüí', 'Tópaga', 'Tota', 'Tununguá', 'Turmequé', 'Tuta', 'Tutazá', 'Úmbita', 'Ventaquemada', 'Viracachá', 'Zetaquira'],
  'Caldas': ['Manizales', 'Aguadas', 'Anserma', 'Aranzazu', 'Belalcázar', 'Chinchiná', 'Filadelfia', 'La Dorada', 'La Merced', 'Manzanares', 'Marmato', 'Marquetalia', 'Marulanda', 'Neira', 'Norcasia', 'Pácora', 'Palestina', 'Pensilvania', 'Riosucio', 'Risaralda', 'Salamina', 'Samaná', 'San José', 'Supía', 'Victoria', 'Villamaría', 'Viterbo'],
  'Caquetá': ['Florencia', 'Albania', 'Belén De Los Andaquíes', 'Cartagena Del Chairá', 'Curillo', 'El Doncello', 'El Paujíl', 'La Montañita', 'Milán', 'Morelia', 'Puerto Rico', 'San José Del Fragua', 'San Vicente Del Caguán', 'Solano', 'Solita', 'Valparaíso'],
  'Casanare': ['Yopal', 'Aguazul', 'Chámeza', 'Hato Corozal', 'La Salina', 'Maní', 'Monterrey', 'Nunchía', 'Orocué', 'Paz De Ariporo', 'Pore', 'Recetor', 'Sabanalarga', 'Sácama', 'San Luis De Palenque', 'Támara', 'Tauramena', 'Trinidad', 'Villanueva'],
  'Cauca': ['Popayán', 'Almaguer', 'Argelia', 'Balboa', 'Bolívar', 'Buenos Aires', 'Cajibío', 'Caldono', 'Caloto', 'Corinto', 'El Tambo', 'Florencia', 'Guachené', 'Guapi', 'Inzá', 'Jambaló', 'La Sierra', 'La Vega', 'López De Micay', 'Mercaderes', 'Miranda', 'Morales', 'Padilla', 'Páez', 'Patía', 'Piamonte', 'Piendamó - Tunía', 'Puerto Tejada', 'Puracé', 'Rosas', 'San Sebastián', 'Santander De Quilichao', 'Santa Rosa', 'Silvia', 'Sotará - Paispamba', 'Suárez', 'Sucre', 'Timbío', 'Timbiquí', 'Toribío', 'Totoró', 'Villa Rica'],
  'Cesar': ['Valledupar', 'Aguachica', 'Agustín Codazzi', 'Astrea', 'Becerril', 'Bosconia', 'Chimichagua', 'Chiriguaná', 'Curumaní', 'El Copey', 'El Paso', 'Gamarra', 'González', 'La Gloria', 'La Jagua De Ibirico', 'Manaure Balcón Del Cesar', 'Pailitas', 'Pelaya', 'Pueblo Bello', 'Río De Oro', 'La Paz', 'San Alberto', 'San Diego', 'San Martín', 'Tamalameque'],
  'Chocó': ['Quibdó', 'Acandí', 'Alto Baudó', 'Atrato', 'Bagadó', 'Bahía Solano', 'Bajo Baudó', 'Bojayá', 'El Cantón Del San Pablo', 'Carmen Del Darién', 'Cértegui', 'Condoto', 'El Carmen De Atrato', 'El Litoral Del San Juan', 'Istmina', 'Juradó', 'Lloró', 'Medio Atrato', 'Medio Baudó', 'Medio San Juan', 'Nóvita', 'Nuevo Belén De Bajirá', 'Nuquí', 'Río Iró', 'Río Quito', 'Riosucio', 'San José Del Palmar', 'Sipí', 'Tadó', 'Unguía', 'Unión Panamericana'],
  'Córdoba': ['Montería', 'Ayapel', 'Buenavista', 'Canalete', 'Cereté', 'Chimá', 'Chinú', 'Ciénaga De Oro', 'Cotorra', 'La Apartada', 'Lorica', 'Los Córdobas', 'Momil', 'Montelíbano', 'Moñitos', 'Planeta Rica', 'Pueblo Nuevo', 'Puerto Escondido', 'Puerto Libertador', 'Purísima De La Concepción', 'Sahagún', 'San Andrés De Sotavento', 'San Antero', 'San Bernardo Del Viento', 'San Carlos', 'San José De Uré', 'San Pelayo', 'Tierralta', 'Tuchín', 'Valencia'],
  'Cundinamarca': ['Agua De Dios', 'Albán', 'Anapoima', 'Anolaima', 'Arbeláez', 'Beltrán', 'Bituima', 'Bojacá', 'Cabrera', 'Cachipay', 'Cajicá', 'Caparrapí', 'Cáqueza', 'Carmen De Carupa', 'Chaguaní', 'Chía', 'Chipaque', 'Choachí', 'Chocontá', 'Cogua', 'Cota', 'Cucunubá', 'El Colegio', 'El Peñón', 'El Rosal', 'Facatativá', 'Fómeque', 'Fosca', 'Funza', 'Fúquene', 'Fusagasugá', 'Gachalá', 'Gachancipá', 'Gachetá', 'Gama', 'Girardot', 'Granada', 'Guachetá', 'Guaduas', 'Guasca', 'Guataquí', 'Guatavita', 'Guayabal De Síquima', 'Guayabetal', 'Gutiérrez', 'Jerusalén', 'Junín', 'La Calera', 'La Mesa', 'La Palma', 'La Peña', 'La Vega', 'Lenguazaque', 'Machetá', 'Madrid', 'Manta', 'Medina', 'Mosquera', 'Nariño', 'Nemocón', 'Nilo', 'Nimaima', 'Nocaima', 'Venecia', 'Pacho', 'Paime', 'Pandi', 'Paratebueno', 'Pasca', 'Puerto Salgar', 'Pulí', 'Quebradanegra', 'Quetame', 'Quipile', 'Apulo', 'Ricaurte', 'San Antonio Del Tequendama', 'San Bernardo', 'San Cayetano', 'San Francisco', 'San Juan De Rioseco', 'Sasaima', 'Sesquilé', 'Sibaté', 'Silvania', 'Simijaca', 'Soacha', 'Sopó', 'Subachoque', 'Suesca', 'Supatá', 'Susa', 'Sutatausa', 'Tabio', 'Tausa', 'Tena', 'Tenjo', 'Tibacuy', 'Tibirita', 'Tocaima', 'Tocancipá', 'Topaipí', 'Ubalá', 'Ubaque', 'Villa De San Diego De Ubaté', 'Une', 'Útica', 'Vergara', 'Vianí', 'Villagómez', 'Villapinzón', 'Villeta', 'Viotá', 'Yacopí', 'Zipacón', 'Zipaquirá'],
  'Guainía': ['Inírida', 'Barrancominas', 'San Felipe', 'Puerto Colombia', 'La Guadalupe', 'Cacahual', 'Pana Pana', 'Morichal'],
  'Guaviare': ['San José Del Guaviare', 'Calamar', 'El Retorno', 'Miraflores'],
  'Huila': ['Neiva', 'Acevedo', 'Agrado', 'Aipe', 'Algeciras', 'Altamira', 'Baraya', 'Campoalegre', 'Colombia', 'Elías', 'Garzón', 'Gigante', 'Guadalupe', 'Hobo', 'Íquira', 'Isnos', 'La Argentina', 'La Plata', 'Nátaga', 'Oporapa', 'Paicol', 'Palermo', 'Palestina', 'Pital', 'Pitalito', 'Rivera', 'Saladoblanco', 'San Agustín', 'Santa María', 'Suaza', 'Tarqui', 'Tesalia', 'Tello', 'Teruel', 'Timaná', 'Villavieja', 'Yaguará'],
  'La Guajira': ['Riohacha', 'Albania', 'Barrancas', 'Dibulla', 'Distracción', 'El Molino', 'Fonseca', 'Hatonuevo', 'La Jagua Del Pilar', 'Maicao', 'Manaure', 'San Juan Del Cesar', 'Uribia', 'Urumita', 'Villanueva'],
  'Magdalena': ['Santa Marta', 'Algarrobo', 'Aracataca', 'Ariguaní', 'Cerro De San Antonio', 'Chivolo', 'Ciénaga', 'Concordia', 'El Banco', 'El Piñón', 'El Retén', 'Fundación', 'Guamal', 'Nueva Granada', 'Pedraza', 'Pijiño Del Carmen', 'Pivijay', 'Plato', 'Puebloviejo', 'Remolino', 'Sabanas De San Ángel', 'Salamina', 'San Sebastián De Buenavista', 'San Zenón', 'Santa Ana', 'Santa Bárbara De Pinto', 'Sitionuevo', 'Tenerife', 'Zapayán', 'Zona Bananera'],
  'Meta': ['Villavicencio', 'Acacías', 'Barranca De Upía', 'Cabuyaro', 'Castilla La Nueva', 'Cubarral', 'Cumaral', 'El Calvario', 'El Castillo', 'El Dorado', 'Fuente De Oro', 'Granada', 'Guamal', 'Mapiripán', 'Mesetas', 'La Macarena', 'Uribe', 'Lejanías', 'Puerto Concordia', 'Puerto Gaitán', 'Puerto López', 'Puerto Lleras', 'Puerto Rico', 'Restrepo', 'San Carlos De Guaroa', 'San Juan De Arama', 'San Juanito', 'San Martín', 'Vistahermosa'],
  'Nariño': ['Pasto', 'Albán', 'Aldana', 'Ancuya', 'Arboleda', 'Barbacoas', 'Belén', 'Buesaco', 'Colón', 'Consacá', 'Contadero', 'Córdoba', 'Cuaspud Carlosama', 'Cumbal', 'Cumbitara', 'Chachagüí', 'El Charco', 'El Peñol', 'El Rosario', 'El Tablón De Gómez', 'El Tambo', 'Funes', 'Guachucal', 'Guaitarilla', 'Gualmatán', 'Iles', 'Imués', 'Ipiales', 'La Cruz', 'La Florida', 'La Llanada', 'La Tola', 'La Unión', 'Leiva', 'Linares', 'Los Andes', 'Magüí', 'Mallama', 'Mosquera', 'Nariño', 'Olaya Herrera', 'Ospina', 'Francisco Pizarro', 'Policarpa', 'Potosí', 'Providencia', 'Puerres', 'Pupiales', 'Ricaurte', 'Roberto Payán', 'Samaniego', 'Sandoná', 'San Bernardo', 'San Lorenzo', 'San Pablo', 'San Pedro De Cartago', 'Santa Bárbara', 'Santacruz', 'Sapuyes', 'Taminango', 'Tangua', 'San Andrés De Tumaco', 'Túquerres', 'Yacuanquer'],
  'Norte de Santander': ['San José De Cúcuta', 'Ábrego', 'Arboledas', 'Bochalema', 'Bucarasica', 'Cácota', 'Cáchira', 'Chinácota', 'Chitagá', 'Convención', 'Cucutilla', 'Durania', 'El Carmen', 'El Tarra', 'El Zulia', 'Gramalote', 'Hacarí', 'Herrán', 'Labateca', 'La Esperanza', 'La Playa', 'Los Patios', 'Lourdes', 'Mutiscua', 'Ocaña', 'Pamplona', 'Pamplonita', 'Puerto Santander', 'Ragonvalia', 'Salazar', 'San Calixto', 'San Cayetano', 'Santiago', 'Sardinata', 'Silos', 'Teorama', 'Tibú', 'Toledo', 'Villa Caro', 'Villa Del Rosario'],
  'Putumayo': ['Mocoa', 'Colón', 'Orito', 'Puerto Asís', 'Puerto Caicedo', 'Puerto Guzmán', 'Puerto Leguízamo', 'Sibundoy', 'San Francisco', 'San Miguel', 'Santiago', 'Valle Del Guamuez', 'Villagarzón'],
  'Quindío': ['Armenia', 'Buenavista', 'Calarcá', 'Circasia', 'Córdoba', 'Filandia', 'Génova', 'La Tebaida', 'Montenegro', 'Pijao', 'Quimbaya', 'Salento'],
  'Risaralda': ['Pereira', 'Apía', 'Balboa', 'Belén De Umbría', 'Dosquebradas', 'Guática', 'La Celia', 'La Virginia', 'Marsella', 'Mistrató', 'Pueblo Rico', 'Quinchía', 'Santa Rosa De Cabal', 'Santuario'],
  'San Andrés y Providencia': ['San Andrés', 'Providencia'],
  'Santander': ['Bucaramanga', 'Aguada', 'Albania', 'Aratoca', 'Barbosa', 'Barichara', 'Barrancabermeja', 'Betulia', 'Bolívar', 'Cabrera', 'California', 'Capitanejo', 'Carcasí', 'Cepitá', 'Cerrito', 'Charalá', 'Charta', 'Chima', 'Chipatá', 'Cimitarra', 'Concepción', 'Confines', 'Contratación', 'Coromoro', 'Curití', 'El Carmen De Chucurí', 'El Guacamayo', 'El Peñón', 'El Playón', 'Encino', 'Enciso', 'Florián', 'Floridablanca', 'Galán', 'Gámbita', 'Girón', 'Guaca', 'Guadalupe', 'Guapotá', 'Guavatá', 'Güepsa', 'Hato', 'Jesús María', 'Jordán', 'La Belleza', 'Landázuri', 'La Paz', 'Lebrija', 'Los Santos', 'Macaravita', 'Málaga', 'Matanza', 'Mogotes', 'Molagavita', 'Ocamonte', 'Oiba', 'Onzaga', 'Palmar', 'Palmas Del Socorro', 'Páramo', 'Piedecuesta', 'Pinchote', 'Puente Nacional', 'Puerto Parra', 'Puerto Wilches', 'Rionegro', 'Sabana De Torres', 'San Andrés', 'San Benito', 'San Gil', 'San Joaquín', 'San José De Miranda', 'San Miguel', 'San Vicente De Chucurí', 'Santa Bárbara', 'Santa Helena Del Opón', 'Simacota', 'Socorro', 'Suaita', 'Sucre', 'Suratá', 'Tona', 'Valle De San José', 'Vélez', 'Vetas', 'Villanueva', 'Zapatoca'],
  'Sucre': ['Sincelejo', 'Buenavista', 'Caimito', 'Colosó', 'Corozal', 'Coveñas', 'Chalán', 'El Roble', 'Galeras', 'Guaranda', 'La Unión', 'Los Palmitos', 'Majagual', 'Morroa', 'Ovejas', 'Palmito', 'Sampués', 'San Benito Abad', 'San Juan De Betulia', 'San Marcos', 'San Onofre', 'San Pedro', 'San Luis De Sincé', 'Sucre', 'Santiago De Tolú', 'San José De Toluviejo'],
  'Tolima': ['Ibagué', 'Alpujarra', 'Alvarado', 'Ambalema', 'Anzoátegui', 'Armero', 'Ataco', 'Cajamarca', 'Carmen De Apicalá', 'Casabianca', 'Chaparral', 'Coello', 'Coyaima', 'Cunday', 'Dolores', 'Espinal', 'Falan', 'Flandes', 'Fresno', 'Guamo', 'Herveo', 'Honda', 'Icononzo', 'Lérida', 'Líbano', 'San Sebastián De Mariquita', 'Melgar', 'Murillo', 'Natagaima', 'Ortega', 'Palocabildo', 'Piedras', 'Planadas', 'Prado', 'Purificación', 'Rioblanco', 'Roncesvalles', 'Rovira', 'Saldaña', 'San Antonio', 'San Luis', 'Santa Isabel', 'Suárez', 'Valle De San Juan', 'Venadillo', 'Villahermosa', 'Villarrica'],
  'Valle del Cauca': ['Cali', 'Alcalá', 'Andalucía', 'Ansermanuevo', 'Argelia', 'Bolívar', 'Buenaventura', 'Guadalajara De Buga', 'Bugalagrande', 'Caicedonia', 'Calima', 'Candelaria', 'Cartago', 'Dagua', 'El Águila', 'El Cairo', 'El Cerrito', 'El Dovio', 'Florida', 'Ginebra', 'Guacarí', 'Jamundí', 'La Cumbre', 'La Unión', 'La Victoria', 'Obando', 'Palmira', 'Pradera', 'Restrepo', 'Riofrío', 'Roldanillo', 'San Pedro', 'Sevilla', 'Toro', 'Trujillo', 'Tuluá', 'Ulloa', 'Versalles', 'Vijes', 'Yotoco', 'Yumbo', 'Zarzal'],
  'Vaupés': ['Mitú', 'Carurú', 'Pacoa', 'Taraira', 'Papunahua', 'Yavaraté'],
  'Vichada': ['Puerto Carreño', 'La Primavera', 'Santa Rosalía', 'Cumaribo']
};

export const GENERAL_FAQS = [
  {
    q: "¿Cómo es el proceso de envío?",
    a: "Realizamos envíos a todo el país. El tiempo estimado es de 2 a 5 días hábiles dependiendo de tu ubicación. Recibirás un número de guía para rastrear tu pedido."
  },
  {
    q: "¿Tienen registro y certificaciones sanitarias?",
    a: "Sí, todos nuestros productos son 100% originales y cuentan con sus correspondientes registros de calidad y certificados sanitarios vigentes."
  },
  {
    q: "¿Cómo funciona el pago contra entrega?",
    a: "Es muy sencillo: realizas el pedido a través de nuestra web o WhatsApp, y pagas el valor total en efectivo únicamente cuando el transportador entregue el producto en tu puerta."
  },
  {
    q: "¿Tienen garantía de satisfacción?",
    a: "Garantizamos que recibirás un producto 100% original y en perfecto estado. Si el empaque llega dañado, realizamos el cambio sin costo adicional."
  }
];

// ECUADOR CONFIGURATION & PRODUCT LIST
export const ECUADOR_PRODUCT_IDS = [
  'coliplus',
  'hemocream',
  'tonico-capilar',
  'colageno',
  'rtafull',
  'derman',
  'locion',
  'mamooth',
  'titan-coffee',
  'instant-virgin'
];

export interface EcuadorPricing {
  basePrice: number;
  promos: {
    id: string;
    label: string;
    units: number;
    price: number;
    badge?: string;
  }[];
}

function generateCountryPromos(basePrice: number) {
  const isDecimal = !Number.isInteger(basePrice) && basePrice < 100;
  const round = (val: number) => isDecimal ? Math.round(val * 100) / 100 : Math.round(val);
  return [
    { id: '1u', label: '1 Unidad', units: 1, price: basePrice },
    { id: '2u', label: '2 Unidades', units: 2, price: round(basePrice * 1.5) },
    { id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: round(basePrice * 2.0), badge: '⭐ Recomendado' }
  ];
}

export const COUNTRY_PRICING: Record<CountryCode, Record<string, EcuadorPricing>> = {
  CR: {
    'mamooth': { basePrice: 19000, promos: generateCountryPromos(19000) },
    'derman': { basePrice: 17000, promos: generateCountryPromos(17000) },
    'hemocream': { basePrice: 17000, promos: generateCountryPromos(17000) },
    'instant-virgin': { basePrice: 17000, promos: generateCountryPromos(17000) },
  },
  EC: {
    'coliplus': { basePrice: 37.00, promos: generateCountryPromos(37.00) },
    'hemocream': { basePrice: 34.99, promos: generateCountryPromos(34.99) },
    'tonico-capilar': { basePrice: 34.99, promos: generateCountryPromos(34.99) },
    'colageno': { basePrice: 37.00, promos: generateCountryPromos(37.00) },
    'rtafull': { basePrice: 35.00, promos: generateCountryPromos(35.00) },
    'derman': { basePrice: 39.99, promos: generateCountryPromos(39.99) },
    'locion': { basePrice: 39.99, promos: generateCountryPromos(39.99) },
    'mamooth': { basePrice: 33.99, promos: generateCountryPromos(33.99) },
    'titan-coffee': { basePrice: 37.00, promos: generateCountryPromos(37.00) },
    'instant-virgin': { basePrice: 23.94, promos: generateCountryPromos(23.94) },
  },
  GT: {
    'derman': { basePrice: 189.00, promos: generateCountryPromos(189.00) },
    'hemocream': { basePrice: 115.00, promos: generateCountryPromos(115.00) },
    'instant-virgin': { basePrice: 135.00, promos: generateCountryPromos(135.00) },
    'mamooth': { basePrice: 165.00, promos: generateCountryPromos(165.00) },
  },
  HN: {
    'derman': { basePrice: 759.00, promos: generateCountryPromos(759.00) },
    'instant-virgin': { basePrice: 250.00, promos: generateCountryPromos(250.00) },
  },
  PE: {
    'derman': { basePrice: 89.90, promos: generateCountryPromos(89.90) },
    'locion': { basePrice: 89.90, promos: generateCountryPromos(89.90) },
  },
  DO: {
    'instant-virgin': { basePrice: 1970, promos: generateCountryPromos(1970) },
    'mamooth': { basePrice: 1990, promos: generateCountryPromos(1990) },
    'derman': { basePrice: 1990, promos: generateCountryPromos(1990) },
    'hemocream': { basePrice: 1970, promos: generateCountryPromos(1970) },
    'coliplus': { basePrice: 2190, promos: generateCountryPromos(2190) },
  },
  CO: {},
  CL: {},
  VE: {}
};

export const ECUADOR_PRICING = COUNTRY_PRICING.EC;

export const ECUADOR_DATA: Record<string, string[]> = {
  'Azuay': ['Cuenca', 'Gualaceo', 'Paute', 'Santa Isabel', 'Sigsig', 'Girón', 'Chordeleg', 'Camilo Ponce Enríquez'],
  'Bolívar': ['Guaranda', 'Chimbo', 'San Miguel', 'Caluma', 'Echeandía', 'Las Naves'],
  'Cañar': ['Azogues', 'La Troncal', 'Cañar', 'Biblián', 'El Tambo'],
  'Carchi': ['Tulcán', 'San Gabriel (Montúfar)', 'Bolívar', 'Espejo (El Ángel)', 'Mira'],
  'Chimborazo': ['Riobamba', 'Alausí', 'Guano', 'Chambo', 'Colta', 'Cumandá', 'Pallatanga'],
  'Cotopaxi': ['Latacunga', 'Salcedo', 'Pujilí', 'La Maná', 'Saquisilí', 'Sigchos'],
  'El Oro': ['Machala', 'Pasaje', 'Santa Rosa', 'Arenillas', 'Huaquillas', 'Piñas', 'Zaruma', 'El Guabo'],
  'Esmeraldas': ['Esmeraldas', 'Quinindé', 'Atacames', 'San Lorenzo', 'Muisne', 'Rioverde'],
  'Galápagos': ['Puerto Baquerizo Moreno', 'Puerto Ayora', 'Puerto Villamil'],
  'Guayas': ['Guayaquil', 'Durán', 'Samborondón', 'Daule', 'Milagro', 'Salitre', 'Balzar', 'El Triunfo', 'Naranjal', 'Pedro Carbo', 'Playas (General Villamil)'],
  'Imbabura': ['Ibarra', 'Otavalo', 'Cotacachi', 'Antonio Ante (Atuntaqui)', 'Pimampiro', 'Urcuquí'],
  'Loja': ['Loja', 'Catamayo', 'Calvas (Cariamanga)', 'Macará', 'Paltas (Catacocha)', 'Saraguro'],
  'Los Ríos': ['Babahoyo', 'Quevedo', 'Ventanas', 'Vinces', 'Buena Fe', 'Puebloviejo', 'Valencia'],
  'Manabí': ['Portoviejo', 'Manta', 'Chone', 'Montecristi', 'Jipijapa', 'Bahía de Caráquez (Sucre)', 'El Carmen', 'Pedernales', 'Rocafuerte'],
  'Morona Santiago': ['Macas', 'Gualaquiza', 'Sucúa'],
  'Napo': ['Tena', 'Archidona', 'El Chaqui'],
  'Orellana': ['Puerto Francisco de Orellana (El Coca)', 'La Joya de los Sachas'],
  'Pastaza': ['Puyo', 'Mera', 'Santa Clara'],
  'Pichincha': ['Quito', 'Rumiñahui (Sangolquí)', 'Mejía (Machachi)', 'Cayambe', 'Puerto Quito', 'Pedro Moncayo (Tabacundo)', 'San Miguel de los Bancos'],
  'Santa Elena': ['Santa Elena', 'La Libertad', 'Salinas'],
  'Santo Domingo de los Tsáchilas': ['Santo Domingo', 'La Concordia'],
  'Sucumbíos': ['Nueva Loja (Lago Agrio)', 'Shushufindi'],
  'Tungurahua': ['Ambato', 'Baños de Agua Santa', 'Pelileo', 'Píllaro', 'Cevallos', 'Tisaleo'],
  'Zamora Chinchipe': ['Zamora', 'Yantzaza']
};

let cachedEcuadorProducts: Product[] | null = null;
let cachedEcuadorCategories: Category[] | null = null;
let cachedColombiaCategories: Category[] | null = null;

export type CountryCode = 'CO' | 'CL' | 'CR' | 'EC' | 'GT' | 'HN' | 'PE' | 'DO' | 'VE';

export const COUNTRY_CONFIGS: Record<CountryCode, {
  name: string;
  flag: string;
  currency: string;
  symbol: string;
  phonePrefix: string;
  priceMultiplier: number;
}> = {
  CO: { name: 'Colombia', flag: '🇨🇴', currency: 'COP', symbol: '$', phonePrefix: '+57', priceMultiplier: 1 },
  CL: { name: 'Chile', flag: '🇨🇱', currency: 'CLP', symbol: '$', phonePrefix: '+56', priceMultiplier: 0.225 },
  CR: { name: 'Costa Rica', flag: '🇨🇷', currency: 'CRC', symbol: '₡', phonePrefix: '+506', priceMultiplier: 0.135 },
  EC: { name: 'Ecuador', flag: '🇪🇨', currency: 'USD', symbol: '$', phonePrefix: '+593', priceMultiplier: 0.00046 },
  GT: { name: 'Guatemala', flag: '🇬🇹', currency: 'GTQ', symbol: 'Q', phonePrefix: '+502', priceMultiplier: 0.002 },
  HN: { name: 'Honduras', flag: '🇭🇳', currency: 'HNL', symbol: 'L', phonePrefix: '+504', priceMultiplier: 0.006 },
  PE: { name: 'Perú', flag: '🇵🇪', currency: 'PEN', symbol: 'S/', phonePrefix: '+51', priceMultiplier: 0.00095 },
  DO: { name: 'República Dominicana', flag: '🇩🇴', currency: 'DOP', symbol: 'RD$', phonePrefix: '+1', priceMultiplier: 0.015 },
  VE: { name: 'Venezuela', flag: '🇻🇪', currency: 'VES', symbol: 'Bs.', phonePrefix: '+58', priceMultiplier: 0.09 },
};

export const CHILE_DATA: Record<string, string[]> = {
  'Región Metropolitana': ['Santiago', 'Puente Alto', 'Maipú', 'La Florida', 'Las Condes', 'Peñalolén', 'San Bernardo', 'Providencia', 'Ñuñoa'],
  'Valparaíso': ['Valparaíso', 'Viña del Mar', 'Concón', 'Quilpué', 'Villa Alemana', 'San Antonio'],
  'Biobío': ['Concepción', 'Talcahuano', 'Chillán', 'Los Ángeles', 'San Pedro de la Paz'],
  'Antofagasta': ['Antofagasta', 'Calama', 'Tocopilla', 'Mejillones'],
  'Araucanía': ['Temuco', 'Padre Las Casas', 'Villarrica', 'Pucón', 'Angol'],
  'Maule': ['Talca', 'Curicó', 'Linares', 'Cauquenes'],
  "O'Higgins": ['Rancagua', 'San Fernando', 'Rengo', 'Machalí'],
  'Coquimbo': ['La Serena', 'Coquimbo', 'Ovalle', 'Illapel'],
  'Los Lagos': ['Puerto Montt', 'Osorno', 'Castro', 'Ancud', 'Puerto Varas']
};

export const COSTA_RICA_DATA: Record<string, string[]> = {
  'San José': ['San José', 'Escazú', 'Desamparados', 'Puriscal', 'Tarrazú', 'Aserrí', 'Santa Ana', 'Tibás', 'Curridabat', 'Pérez Zeledón'],
  'Alajuela': ['Alajuela', 'San Ramón', 'Grecia', 'San Mateo', 'Atenas', 'Naranjo', 'Palmares', 'San Carlos'],
  'Cartago': ['Cartago', 'Paraíso', 'La Unión', 'Jiménez', 'Turrialba', 'Oreamuno', 'El Guarco'],
  'Heredia': ['Heredia', 'Barva', 'Santo Domingo', 'Santa Bárbara', 'San Rafael', 'Belén', 'Sarapiquí'],
  'Guanacaste': ['Liberia', 'Nicoya', 'Santa Cruz', 'Bagaces', 'Carrillo', 'Cañas', 'Tilarán'],
  'Puntarenas': ['Puntarenas', 'Esparza', 'Buenos Aires', 'Osa', 'Quepos', 'Golfito', 'Garabito'],
  'Limón': ['Limón', 'Pococí', 'Siquirres', 'Talamanca', 'Matina', 'Guácimo']
};

export const GUATEMALA_DATA: Record<string, string[]> = {
  'Guatemala': ['Guatemala', 'Mixco', 'Villa Nueva', 'San Juan Sacatepéquez', 'Petapa', 'Chinautla', 'San José Pinula', 'Amatitlán', 'Villa Canales'],
  'Sacatepéquez': ['Antigua Guatemala', 'Jocotenango', 'Pastores', 'Sumpango', 'Santiago Sacatepéquez', 'San Lucas Sacatepéquez', 'Ciudad Vieja'],
  'Quetzaltenango': ['Quetzaltenango', 'Salcajá', 'Olintepeque', 'Coatepeque', 'Colomba Costa Cuca', 'Cantel'],
  'Escuintla': ['Escuintla', 'Santa Lucía Cotzumalguapa', 'La Democracia', 'Siquinalá', 'Masagua', 'Tiquisate', 'Palín'],
  'Alta Verapaz': ['Cobán', 'San Pedro Carchá', 'San Juan Chamelco', 'Tactic', 'Chisec'],
  'Chimaltenango': ['Chimaltenango', 'Tecpán Guatemala', 'Patzún', 'San Martín Jilotepeque'],
  'Quiché': ['Santa Cruz del Quiché', 'Santo Tomás Chichicastenango', 'Nebaj', 'Joyabaj', 'Ixcán'],
  'San Marcos': ['San Marcos', 'San Pedro Sacatepéquez', 'Malacatán', 'Ayutla', 'Tecún Umán']
};

export const HONDURAS_DATA: Record<string, string[]> = {
  'Francisco Morazán': ['Tegucigalpa (Distrito Central)', 'Valle de Ángeles', 'Santa Lucía', 'Talanga', 'Guaimaca', 'Sabanagrande'],
  'Cortés': ['San Pedro Sula', 'Choloma', 'La Lima', 'Villanueva', 'Puerto Cortés', 'Santa Cruz de Yojoa', 'Omoa'],
  'Atlántida': ['La Ceiba', 'Tela', 'El Porvenir', 'La Masica'],
  'Choluteca': ['Choluteca', 'Marcovia', 'San Marcos de Colón', 'El Triunfo'],
  'Comayagua': ['Comayagua', 'Siguatepeque', 'La Libertad', 'Taulabé'],
  'Yoro': ['Yoro', 'El Progreso', 'Olanchito', 'Santa Rita'],
  'Olancho': ['Juticalpa', 'Catacamas', 'Campamento', 'San Francisco de la Paz']
};

export const PERU_DATA: Record<string, string[]> = {
  'Lima': ['Lima', 'Callao', 'Miraflores', 'San Isidro', 'Surco', 'La Molina', 'San Borja', 'Barranco', 'Chorrillos', 'Los Olivos', 'San Martín de Porres', 'Ate', 'Comas', 'Villa El Salvador', 'San Juan de Lurigancho', 'Puente Piedra', 'Huacho', 'Cañete'],
  'Arequipa': ['Arequipa', 'Cayma', 'Cerro Colorado', 'Yanahuara', 'Hunter', 'Socabaya', 'Paucarpata', 'Mollendo', 'Camaná'],
  'La Libertad': ['Trujillo', 'Víctor Larco Herrera', 'Huanchaco', 'La Esperanza', 'El Porvenir', 'Chepén', 'Pacasmayo'],
  'Piura': ['Piura', 'Castilla', 'Catacaos', 'Sullana', 'Talara', 'Paita', 'Sechura'],
  'Lambayeque': ['Chiclayo', 'Lambayeque', 'Ferreñafe', 'José Leonardo Ortiz', 'Pimentel'],
  'Cusco': ['Cusco', 'San Sebastián', 'San Jerónimo', 'Santiago', 'Wanchaq', 'Urubamba', 'Calca', 'Sicuani'],
  'Junín': ['Huancayo', 'El Tambo', 'Chilca', 'Tarma', 'Jauja', 'Concepción', 'Satipo'],
  'Áncash': ['Huaraz', 'Independencia', 'Chimbote', 'Nuevo Chimbote', 'Casma', 'Huarmey'],
  'Ica': ['Ica', 'Chincha Alta', 'Pisco', 'Nazca', 'Palpa', 'Paracas']
};

export const DOMINICAN_REPUBLIC_DATA: Record<string, string[]> = {
  'Distrito Nacional': ['Santo Domingo de Guzmán (Distrito Nacional)', 'Gascue', 'Piantini', 'Naco', 'Arroyo Hondo', 'Bella Vista'],
  'Santo Domingo': ['Santo Domingo Este', 'Santo Domingo Oeste', 'Santo Domingo Norte', 'Boca Chica', 'Los Alcarrizos', 'Pedro Brand'],
  'Santiago': ['Santiago de los Caballeros', 'Villa González', 'Licey al Medio', 'Tamboril', 'Puñal', 'San José de las Matas'],
  'La Altagracia': ['Higüey (Salvaleón de Higüey)', 'San Rafael del Yuma', 'Bávaro', 'Punta Cana'],
  'La Romana': ['La Romana', 'Guaymate', 'Villa Hermosa'],
  'San Cristóbal': ['San Cristóbal', 'Yaguate', 'Villa Altagracia', 'Bajos de Haina'],
  'Puerto Plata': ['San Felipe de Puerto Plata', 'Sosúa', 'Cabarete', 'Imbert', 'Luperón'],
  'La Vega': ['Concepción de La Vega', 'Jarabacoa', 'Constanza'],
  'San Pedro de Macorís': ['San Pedro de Macorís', 'Los Llanos', 'Consuelo']
};

export const VENEZUELA_DATA: Record<string, string[]> = {
  'Distrito Capital': ['Caracas', 'Libertador (Catia, El Paraíso, La Candelaria, El Recreo, San Bernardino, 23 de Enero)'],
  'Miranda': ['Baruta', 'Chacao', 'El Hatillo', 'Sucre (Petare)', 'Guaicaipuro (Los Teques)', 'Carrizal', 'Los Salias (San Antonio de los Altos)', 'Zamora (Guatire)'],
  'Zulia': ['Maracaibo', 'San Francisco', 'Cabimas', 'Ciudad Ojeda (Lagunillas)', 'Machiques', 'La Villa del Rosario'],
  'Carabobo': ['Valencia', 'Naguanagua', 'San Diego', 'Guacara', 'Los Guayos', 'Puerto Cabello'],
  'Lara': ['Barquisimeto (Iribarren)', 'Cabudare (Palavecino)', 'Quíbor (Jiménez)', 'El Tocuyo', 'Carora'],
  'Aragua': ['Maracay (Girardot)', 'Turmero', 'Cagua', 'Palo Negro', 'Villa de Cura'],
  'Anzoátegui': ['Barcelona (Bolívar)', 'Puerto La Cruz', 'Lechería', 'Anaco', 'El Tigre']
};

export function getLocationDataForCountry(country: CountryCode) {
  switch (country) {
    case 'CL': return CHILE_DATA;
    case 'CR': return COSTA_RICA_DATA;
    case 'EC': return ECUADOR_DATA;
    case 'GT': return GUATEMALA_DATA;
    case 'HN': return HONDURAS_DATA;
    case 'PE': return PERU_DATA;
    case 'DO': return DOMINICAN_REPUBLIC_DATA;
    case 'VE': return VENEZUELA_DATA;
    case 'CO':
    default:
      return COLOMBIA_DATA;
  }
}

export function getPhonePrefixForCountry(country: CountryCode): string {
  switch (country) {
    case 'CL': return '+56';
    case 'CR': return '+506';
    case 'EC': return '+593';
    case 'GT': return '+502';
    case 'HN': return '+504';
    case 'PE': return '+51';
    case 'DO': return '+1';
    case 'VE': return '+58';
    case 'CO':
    default:
      return '+57';
  }
}

let cachedCountryProducts: Record<string, Product[]> = {};
let cachedCountryCategories: Record<string, Category[]> = {};

const countryAllowedProducts: Partial<Record<CountryCode, string[]>> = {
  VE: ['coliplus', 'derman', 'instant-virgin', 'rtafull'],
  DO: ['coliplus', 'derman', 'hemocream', 'instant-virgin', 'mamooth'],
  PE: ['locion', 'coliplus', 'derman', 'hemocream'],
  HN: ['derman', 'instant-virgin'],
  GT: ['derman', 'hemocream', 'instant-virgin', 'mamooth'],
    EC: ['coliplus', 'derman', 'hemocream', 'instant-virgin', 'locion', 'mamooth', 'rtafull'],
  CR: ['derman', 'hemocream', 'instant-virgin', 'mamooth']
};

export function getProductsForCountry(country: CountryCode = 'CO'): Product[] {
  const allowedIds = countryAllowedProducts[country];

  if (country === 'CO') {
    return allowedIds ? PRODUCTS.filter(p => allowedIds.includes(p.id)) : PRODUCTS;
  }

  if (!cachedCountryProducts[country]) {
    const config = COUNTRY_CONFIGS[country];
    const multiplier = config ? config.priceMultiplier : 1;
    const countryPricing = COUNTRY_PRICING[country] || {};

    cachedCountryProducts[country] = PRODUCTS.map(p => {
      const pricing = countryPricing[p.id];
      if (pricing) {
        return {
          ...p,
          basePrice: pricing.basePrice,
          promos: pricing.promos
        };
      }
      return {
        ...p,
        basePrice: Math.round(p.basePrice * multiplier),
        promos: p.promos.map(promo => ({
          ...promo,
          price: Math.round(promo.price * multiplier)
        }))
      };
    });
  }

  const countryProds = cachedCountryProducts[country];
  return allowedIds ? countryProds.filter(p => allowedIds.includes(p.id)) : countryProds;
}

export function getProductForCountry(productId: string, country: CountryCode = 'CO'): Product | undefined {
  const allProds = getProductsForCountry(country);
  return allProds.find(p => p.id === productId);
}

export function getCategoriesForCountry(country: CountryCode = 'CO'): Category[] {
  if (!cachedCountryCategories[country]) {
    const products = getProductsForCountry(country);
    const productIds = new Set(products.map(p => p.id));
    const categoryIdsWithProducts = new Set(products.map(p => p.category));
    
    const hasCombos = COMBO_OF_THE_MONTH.products.every(pid => productIds.has(pid)) ||
      PROMOTIONS.some(promo => promo.products.every(pid => productIds.has(pid)));

    cachedCountryCategories[country] = CATEGORIES.filter(cat => {
      if (cat.id === 'combos') {
        return hasCombos;
      }
      return categoryIdsWithProducts.has(cat.id);
    });
  }
  return cachedCountryCategories[country];
}


