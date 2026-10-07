import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CATEGORIES, COMBO_OF_THE_MONTH, PROMOTIONS, COUNTRY_CONFIGS } from '../constants';
import { ArrowRight, ArrowLeft, Sparkles, Heart, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Footer from '../components/Footer';
import SEOManager from '../components/SEOManager';
import Breadcrumbs from '../components/Breadcrumbs';
import { formatCurrency, cn } from '../utils';
import { useCart } from '../CartContext';
import Image from '../components/Image';

export default function CategoryPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { getProducts, getCategories, isCO, country } = useCart();
  const config = COUNTRY_CONFIGS[country] || COUNTRY_CONFIGS['CO'];
  const multiplier = isCO ? 1 : (config.priceMultiplier || 1);

  const activeCategories = getCategories();
  const availableProducts = getProducts();

  // Normalización ultra-robusta de slugs para emparejar enlaces basados tanto en ID como en Nombre de la categoría
  const cleanStr = (str: string) => 
    str.toLowerCase()
       .normalize("NFD")
       .replace(/[\u0300-\u036f]/g, "") // Limpiar tildes y acentos
       .replace(/[^a-z0-9]+/g, '-')     // Reemplazar espacios y caracteres no alfa-numéricos con guion
       .replace(/-+/g, '-')             // Colapsar guiones múltiples
       .replace(/^-+|-+$/g, '');        // Recortar guiones iniciales/finales

  const targetIdClean = id ? cleanStr(id) : '';

  const category = activeCategories.find(c => {
    const cleanId = cleanStr(c.id);
    const cleanName = cleanStr(c.name);
    return cleanId === targetIdClean || cleanName === targetIdClean;
  });

  const isCombosCategory = category?.id === 'combos';

  const productIds = new Set(availableProducts.map(p => p.id));
  const validPromos = PROMOTIONS.filter(promo => 
    promo.products.every(pid => productIds.has(pid))
  );
  const isComboOfTheMonthValid = COMBO_OF_THE_MONTH.products.every(pid => productIds.has(pid));

  const comboProducts = [
    ...(isComboOfTheMonthValid ? [{
      ...COMBO_OF_THE_MONTH,
      price: Math.round(COMBO_OF_THE_MONTH.price * (isCO ? 1 : multiplier)),
      basePrice: Math.round(COMBO_OF_THE_MONTH.price * (isCO ? 1 : multiplier)),
      shortDescription: COMBO_OF_THE_MONTH.description,
      size: 'Envío Gratis',
      presentation: 'Kit Completo',
    }] : []),
    ...validPromos.map(p => ({
      ...p,
      price: Math.round(p.price * (isCO ? 1 : multiplier)),
      basePrice: Math.round(p.price * (isCO ? 1 : multiplier)),
      shortDescription: p.description,
      size: 'Envío Gratis',
      presentation: p.id === 'promo-9' ? 'Kit Completo' : 'Kit Promocional',
    }))
  ];

  const categoryProducts = isCombosCategory
    ? comboProducts
    : (category 
        ? availableProducts.filter(p => cleanStr(p.category) === cleanStr(category.id))
        : []);

  const currentIndex = category ? activeCategories.findIndex(c => c.id === category.id) : -1;
  const nextCategory = currentIndex !== -1 ? activeCategories[(currentIndex + 1) % activeCategories.length] : null;

  const handleNextCategory = () => {
    if (nextCategory) {
      navigate(`/categoria/${nextCategory.id}`);
    }
  };

  const handleGoBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Categoría no encontrada</h1>
          <button 
            onClick={handleGoBack} 
            className="text-emerald-600 font-black flex items-center justify-center gap-3 p-4 rounded-2xl hover:bg-emerald-50 transition-all active:scale-95 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
            <span className="text-lg">Volver</span>
          </button>
        </div>
      </div>
    );
  }

  const getThemeClasses = () => {
    switch (category.color) {
      case 'emerald':
        return {
          bg: 'bg-emerald-50',
          text: 'text-emerald-600',
          accent: 'bg-emerald-600',
          hover: 'hover:border-emerald-200 hover:shadow-emerald-900/5',
          icon: <Sparkles className="w-12 h-12 text-emerald-600" />
        };
      case 'rose':
        return {
          bg: 'bg-rose-50',
          text: 'text-rose-600',
          accent: 'bg-rose-600',
          hover: 'hover:border-rose-200 hover:shadow-rose-900/5',
          icon: <Heart className="w-12 h-12 text-rose-600" />
        };
      case 'purple':
        return {
          bg: 'bg-purple-50',
          text: 'text-purple-600',
          accent: 'bg-purple-600',
          hover: 'hover:border-purple-200 hover:shadow-purple-900/5',
          icon: <Zap className="w-12 h-12 text-purple-600" />
        };
      default:
        return {
          bg: 'bg-stone-50',
          text: 'text-stone-600',
          accent: 'bg-stone-900',
          hover: 'hover:border-stone-200 hover:shadow-stone-900/5',
          icon: <Sparkles className="w-12 h-12 text-stone-600" />
        };
    }
  };

  const theme = getThemeClasses();

  return (
    <div className="flex flex-col min-h-screen">
      <SEOManager 
        title={category.name}
        description={`${category.description} Encuentra soluciones naturales para tu bienestar con productos naturales originales.`}
        canonicalUrl={`/categoria/${category.id}`}
        type="category"
        categoryProducts={categoryProducts}
      />
      
      {/* Floating Category Navigation */}
      <button 
        onClick={handleGoBack}
        className="fixed left-2 sm:left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-50 bg-white/90 backdrop-blur-md text-stone-700 hover:text-emerald-600 hover:bg-white w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:scale-105 active:scale-95 opacity-50 hover:opacity-100 transition-all border border-stone-200/80 flex items-center justify-center group focus:outline-none"
        aria-label="Volver"
      >
        <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>

      <button 
        onClick={handleNextCategory}
        className="fixed right-2 sm:right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-50 bg-white/90 backdrop-blur-md text-stone-700 hover:text-emerald-600 hover:bg-white w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:scale-105 active:scale-95 opacity-50 hover:opacity-100 transition-all border border-stone-200/80 flex items-center justify-center group focus:outline-none"
        aria-label="Siguiente"
      >
        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      <Breadcrumbs />

      {/* Header Section */}
      <section className={cn("py-4 lg:py-6 relative overflow-hidden", theme.bg)}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-6">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-row items-center gap-4 lg:gap-8 flex-grow"
          >
            <div className="shrink-0">
              {category.image ? (
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl overflow-hidden bg-white shadow-md border-2 border-white">
                  <Image 
                    src={category.image} 
                    alt={category.name}
                    preset="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="scale-50 sm:scale-60 lg:scale-75">
                  {theme.icon}
                </div>
              )}
            </div>
            <div className="flex-1">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-black text-[var(--color-brand-primary)] mb-0.5 font-display leading-tight">
                {category.name}
              </h1>
              <p className="text-base text-justify text-stone-600 max-w-xl leading-relaxed">
                {category.description}
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative background elements */}
        <div className={cn("absolute top-0 right-0 w-1/3 h-full opacity-10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2", theme.accent)} />
      </section>

      {/* Products Grid */}
      <section className="pt-[23px] pb-24 bg-white flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categoryProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {(categoryProducts as any[]).map((product: any, index: number) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white rounded-[2rem] p-5 border-2 border-emerald-300 hover:border-emerald-400 hover:shadow-xl transition-all flex flex-col h-full shadow-sm"
                >
                  <Link to={isCombosCategory ? `/combo/${product.id}` : `/producto/${product.id}`} className="flex flex-col h-full">
                    <div className="aspect-square rounded-2xl overflow-hidden bg-stone-100/70 mb-5 flex items-center justify-center p-3 shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        preset="card"
                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col flex-grow text-left">
                      <h3 className="text-2xl font-black text-stone-900 font-display leading-tight mb-2">{product.name}</h3>
                      
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        {(product.size || product.presentation) && (
                          <div className="inline-flex items-center px-3 py-1 rounded-lg bg-white text-stone-600 text-xs font-medium border border-stone-200 shadow-sm">
                            <div className="flex items-center gap-1.5">
                              {product.size && <span>{product.size}</span>}
                              {product.size && product.presentation && <span className="w-1 h-1 rounded-full bg-stone-300" />}
                              {product.presentation && <span>{product.presentation}</span>}
                            </div>
                          </div>
                        )}
                        {isCombosCategory ? (
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-100 shadow-sm">
                            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                            <span className="whitespace-nowrap">
                              {product.badge && !product.badge.toUpperCase().includes('COMBO N°') 
                                ? product.badge 
                                : 'COMBOS'}
                            </span>
                          </div>
                        ) : (
                          product.invima && (
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white text-stone-700 text-xs font-semibold border border-stone-200 shadow-sm">
                              <ShieldCheck className="w-3.5 h-3.5 text-[#009b63]" />
                              <span>INVIMA: {product.invima.includes('proceso') || product.invima.includes('verificación') ? 'En trámite' : product.invima}</span>
                            </div>
                          )
                        )}
                      </div>

                      <div className="mb-3">
                        <h4 className="text-base font-black text-[#009b63] uppercase tracking-wide mb-1 font-display">
                          {isCombosCategory ? 'EL COMBO CONTIENE:' : 'ES ÚTIL PARA:'}
                        </h4>
                        <p className="text-stone-600 text-sm leading-relaxed">
                          {isCombosCategory ? product.components : product.shortDescription}
                        </p>
                      </div>

                      {/* Benefits with checkmarks */}
                      <div className="space-y-2 mb-6">
                        {(product.benefits || []).slice(0, 3).map((benefit: string, i: number) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#009b63] shrink-0 mt-0.5" />
                            <span className="text-xs text-stone-700 font-normal leading-snug">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100">
                        <span className="text-2xl font-black text-[#009b63] font-display">
                          {isCombosCategory ? formatCurrency(product.price || product.basePrice) : `Desde ${formatCurrency(product.basePrice)}`}
                        </span>
                        <div className="w-11 h-11 rounded-full bg-[#009b63] text-white flex items-center justify-center hover:bg-emerald-700 transition-colors shadow-sm shrink-0">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-stone-500 text-lg">Próximamente más productos en esta categoría.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
