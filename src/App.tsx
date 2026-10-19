import React, { useEffect } from 'react';
import { BrowserRouter, MemoryRouter, Routes, Route, useLocation, useParams, Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CartProvider } from './CartContext';
import { CountryProvider, useCountry, COUNTRIES } from './CountryContext';
import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import WhatsAppFloat from './components/WhatsAppFloat';
import CountryModal from './components/CountryModal';
import GeoCountryNotice from './components/GeoCountryNotice';
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

// Wrapper para sincronizar el prefijo de país de la URL con el estado global de CountryContext
function CountryRouteWrapper() {
  const { countryCode } = useParams<{ countryCode: string }>();
  const { country, setCountryId } = useCountry();

  useEffect(() => {
    if (countryCode) {
      const upper = countryCode.toUpperCase();
      if (COUNTRIES.some(c => c.id === upper) && country.id !== upper) {
        setCountryId(upper);
      }
    }
  }, [countryCode, country.id, setCountryId]);

  if (!countryCode) {
    return <NotFound />;
  }

  const upper = countryCode.toUpperCase();
  const isValid = COUNTRIES.some(c => c.id === upper);
  if (!isValid) {
    return <NotFound />;
  }

  return <Outlet />;
}

// Rutas de la aplicación (tanto para navegación estándar como geolocalizada por prefijo de país)
function AppRoutes() {
  return (
    <Routes>
      {/* Rutas administrativas globales */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/dashboard" element={<AdminDashboard />} />

      {/* Rutas base estándar (por defecto / sin prefijo) */}
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

      {/* Rutas con prefijo de país para indexado geográfico en Google (ej. /co/, /ec/, /pe/, /cl/, /cr/, /gt/, /hn/, /do/, /ve/) */}
      <Route path="/:countryCode" element={<CountryRouteWrapper />}>
        <Route index element={<Home />} />
        <Route path="producto/:id" element={<ProductLanding />} />
        <Route path="combo/:id" element={<ComboLanding />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="categoria/:id" element={<CategoryPage />} />
        <Route path="quienes-somos" element={<AboutUs />} />
        <Route path="politica-privacidad" element={<PrivacyPolicy />} />
        <Route path="politica-reembolso" element={<RefundPolicy />} />
        <Route path="terminos-servicio" element={<TermsOfService />} />
        <Route path="condiciones-entrega" element={<DeliveryConditions />} />
        <Route path="devoluciones-garantia" element={<ReturnsWarranty />} />
        <Route path="gracias" element={<Gracias />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function App({ initialPath = '/' }: { initialPath?: string } = {}) {
  const isBrowser = typeof window !== 'undefined';
  const currentPath = isBrowser ? (typeof window !== 'undefined' ? window.location.pathname : '/') : initialPath;

  return (
    <ErrorBoundary>
      <HelmetProvider>
      <CartProvider>
        <CountryProvider initialPath={currentPath}>
          {isBrowser ? (
            <BrowserRouter>
              <ScrollToTop />
              <MainLayout>
                <AppRoutes />
              </MainLayout>
            </BrowserRouter>
          ) : (
            <MemoryRouter initialEntries={[initialPath]}>
              <MainLayout>
                <AppRoutes />
              </MainLayout>
            </MemoryRouter>
          )}
          <CountryModal />
          <GeoCountryNotice />
        </CountryProvider>
      </CartProvider>
    </HelmetProvider>
  </ErrorBoundary>
  );
}

export default App;
