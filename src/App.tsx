import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { ThankYouView } from './components/ThankYouView';
import { TrackingAuditModal } from './components/TrackingAuditModal';
import { Footer } from './components/Footer';
import { PRODUCTS } from './data/products';
import { Product, CartItem, Order } from './types';
import { Filter, Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react';
import { getStoredGclid } from './utils/analytics';

export function App() {
  const [currentView, setCurrentView] = useState<'home' | 'thank_you'>('home');
  const [cart, setCart] = useState<CartItem[]>([
    { product: PRODUCTS[0], quantity: 1 }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<Order | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleQuickBuy = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCheckoutOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleOrderComplete = (order: Order) => {
    setCompletedOrder(order);
    setIsCheckoutOpen(false);
    setCurrentView('thank_you');
    setCart([]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSimulatePurchase = () => {
    const randomProduct = PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)];
    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    const simulatedOrder: Order = {
      id: 'sim_' + Date.now(),
      orderNumber: `ORD-SIM-${randomSuffix}`,
      transactionId: `AZ-SIM-COL-${randomSuffix}`,
      items: [{ product: randomProduct, quantity: 2 }],
      subtotal: randomProduct.price * 2,
      shipping: 0,
      discount: 0,
      total: randomProduct.price * 2,
      currency: 'COP',
      customer: {
        fullName: 'Prueba de Diagnóstico GA4',
        email: 'test.tracking@azenza.com.co',
        phone: '3001234567',
        documentId: '9988776655',
        address: 'Carrera 7 # 71-21 Torre B',
        neighborhood: 'Chapinero',
        city: 'Bogotá',
        department: 'Bogotá D.C.',
        notes: 'Orden simulada para verificación de tags'
      },
      paymentMethod: 'contra_entrega',
      paymentStatus: 'approved',
      tracking: {
        gclid: getStoredGclid() || 'CjwKCAjw_test_gclid_conversion_sample',
        utmSource: 'google_ads_test',
        utmMedium: 'cpc',
        utmCampaign: 'campana_colombia_conversiones',
        timestamp: Date.now(),
        sessionId: 'sess_' + Math.random().toString(36).substring(2, 8),
      },
      createdAt: new Date().toISOString()
    };

    handleOrderComplete(simulatedOrder);
  };

  const scrollToCatalog = () => {
    const catalogElement = document.getElementById('catalogo');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900">
      {/* Global Navigation Header */}
      <Header
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAudit={() => setIsAuditOpen(true)}
        onNavigateHome={() => {
          setCurrentView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main App Body */}
      <main className="flex-1">
        {currentView === 'home' ? (
          <>
            <Hero onScrollToCatalog={scrollToCatalog} />

            {/* Product Catalog Section */}
            <section id="catalogo" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Catálogo Oficial AZENZA Colombia</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
                    Bienestar & Fórmulas Naturales
                  </h2>
                  <p className="mt-2 text-sm text-stone-600 max-w-xl">
                    Todos nuestros productos cuentan con registro de calidad y despacho rápido en toda Colombia con pago contra entrega.
                  </p>
                </div>

                {/* Category Filters */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
                  {[
                    { id: 'all', label: 'Todos' },
                    { id: 'suplementos', label: 'Suplementos' },
                    { id: 'infusiones', label: 'Infusiones' },
                    { id: 'aromaterapia', label: 'Aromaterapia' },
                    { id: 'superalimentos', label: 'Superalimentos' }
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-smooth ${
                        selectedCategory === cat.id
                          ? 'bg-stone-900 text-white shadow-xs'
                          : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-100'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                    onQuickBuy={handleQuickBuy}
                  />
                ))}
              </div>

              {/* Why Choose AZENZA Section */}
              <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-stone-900 text-white overflow-hidden relative">
                <div className="max-w-2xl relative z-10 space-y-4">
                  <div className="text-xs font-bold text-emerald-400 tracking-widest uppercase">
                    Compromiso de Pureza
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold leading-snug">
                    ¿Por qué miles de colombianos eligen el bienestar con AZENZA?
                  </h3>
                  <p className="text-sm text-stone-300 leading-relaxed">
                    Priorizamos fórmulas limpias con máxima biodisponibilidad orgánica. Sin rellenos artificiales, sin azúcares ocultos y con trazabilidad garantizada desde el cultivo botánico hasta tu hogar.
                  </p>
                  <div className="pt-4 flex flex-wrap gap-4 text-xs font-medium">
                    <span className="flex items-center gap-1.5 text-emerald-300">
                      <ShieldCheck className="w-4 h-4" /> 100% Ingredientes Puros
                    </span>
                    <span className="flex items-center gap-1.5 text-emerald-300">
                      <HeartHandshake className="w-4 h-4" /> Asesoría Personalizada
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          completedOrder && (
            <ThankYouView
              order={completedOrder}
              onContinueShopping={() => {
                setCurrentView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenAudit={() => setIsAuditOpen(true)}
            />
          )
        )}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        onOrderComplete={handleOrderComplete}
      />

      {/* Tracking & GA4 Diagnostic Modal */}
      <TrackingAuditModal
        isOpen={isAuditOpen}
        onClose={() => setIsAuditOpen(false)}
        lastOrder={completedOrder}
        onSimulatePurchase={handleSimulatePurchase}
      />
    </div>
  );
}

export default App;
