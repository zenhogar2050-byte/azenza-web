import React, { useEffect } from 'react';
import { BrowserRouter, MemoryRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CartProvider } from './CartContext';
import { CountryProvider } from './CountryContext';
import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import WhatsAppFloat from './components/WhatsAppFloat';
import CountryModal from './components/CountryModal';
import ErrorBoundary from './components/ErrorBoundary';

import Home from './pages/Home';
import ProductLanding from './pages/ProductLanding';
import ComboLanding from './pages/ComboLanding';
import Checkout from './pages/Checkout';
import CategoryPage from './pages/CategoryPage';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import TermsOfService from './pages/TermsOfService';
import DeliveryConditions from './pages/DeliveryConditions';
import ReturnsWarranty from './pages/ReturnsWarranty';
import Gracias from './pages/Gracias';
import AdminDashboard from './pages/AdminDashboard';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname]);

  return null;
}

function MainLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin') || location.pathname.startsWith('/dashboard');

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-emerald-500 selection:text-white">
      <TopBanner />
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <WhatsAppFloat />
    </div>
  );
}

export function App({ initialPath = '/' }: { initialPath?: string } = {}) {
  const isBrowser = typeof window !== 'undefined';

  return (
    <ErrorBoundary>
      <HelmetProvider>
      <CartProvider>
        <CountryProvider>
          {isBrowser ? (
            <BrowserRouter>
              <ScrollToTop />
              <MainLayout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/producto/:id" element={<ProductLanding />} />
                  <Route path="/combo/:id" element={<ComboLanding />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/categoria/:id" element={<CategoryPage />} />
                  <Route path="/quienes-somos" element={<AboutUs />} />
                  <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
                  <Route path="/politica-reembolso" element={<RefundPolicy />} />
                  <Route path="/terminos-servicio" element={<TermsOfService />} />
                  <Route path="/condiciones-entrega" element={<DeliveryConditions />} />
                  <Route path="/devoluciones-garantia" element={<ReturnsWarranty />} />
                  <Route path="/gracias" element={<Gracias />} />
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route path="/dashboard" element={<AdminDashboard />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </MainLayout>
            </BrowserRouter>
          ) : (
            <MemoryRouter initialEntries={[initialPath]}>
              <MainLayout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/producto/:id" element={<ProductLanding />} />
                  <Route path="/combo/:id" element={<ComboLanding />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/categoria/:id" element={<CategoryPage />} />
                  <Route path="/quienes-somos" element={<AboutUs />} />
                  <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
                  <Route path="/politica-reembolso" element={<RefundPolicy />} />
                  <Route path="/terminos-servicio" element={<TermsOfService />} />
                  <Route path="/condiciones-entrega" element={<DeliveryConditions />} />
                  <Route path="/devoluciones-garantia" element={<ReturnsWarranty />} />
                  <Route path="/gracias" element={<Gracias />} />
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route path="/dashboard" element={<AdminDashboard />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </MainLayout>
            </MemoryRouter>
          )}
          <CountryModal />
        </CountryProvider>
      </CartProvider>
    </HelmetProvider>
  </ErrorBoundary>
  );
}

export default App;
