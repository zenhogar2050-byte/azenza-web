const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID || '26749410671349006';
const FB_KEY = 'fb_entry_time';

export const initPixel = () => {
  if (typeof window === 'undefined') return;
  if (!PIXEL_ID || window.fbq) return;

  const isProd = window.location.hostname === 'azenza.com.co' || window.location.hostname === 'zenhogar.live';
  const isDev = window.location.hostname === 'localhost' || window.location.hostname.includes('run.app');
  
  if (!isProd && !isDev) return;

  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

  window.fbq('init', PIXEL_ID);
  window.fbq('track', 'PageView');
};

export const markFacebookEntry = () => {
  if (typeof window === 'undefined') return;
  const p = new URLSearchParams(window.location.search);
  const isFb = p.has('fbclid') || p.get('utm_source') === 'fb' || document.referrer.includes('facebook.com');
  if (isFb) sessionStorage.setItem(FB_KEY, Date.now().toString());
};

export const track = (event, data = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    const processedData = { ...data };
    if (processedData.value) processedData.value = Math.round(Number(processedData.value));
    window.fbq('track', event, processedData);
  }
};

export const trackPurchaseIfFromFacebook = (data) => {
  if (typeof window === 'undefined') return;
  const entry = sessionStorage.getItem(FB_KEY);
  if (!entry) return;
  const mins = (Date.now() - parseInt(entry, 10)) / 60000;
  if (mins < 30) track('Purchase', data);
};

// Google Analytics (GA4) & GTM Helper Functions
export const trackGooglePurchase = (orderData = {}, ticketNumber, customerData = {}) => {
  if (typeof window === 'undefined') return;

  const transactionId = String(ticketNumber || orderData.transaction_id || `PO-${Date.now()}`);
  const dedupeKey = `tracked_purchase_${transactionId}`;

  // Check if already tracked in this browser session to avoid duplicate hits on refresh
  if (sessionStorage.getItem(dedupeKey)) {
    console.log(`ℹ️ [GA4/GTM] Purchase ${transactionId} already tracked in this session.`);
    return;
  }
  sessionStorage.setItem(dedupeKey, 'true');

  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
  }

  const numericValue = Math.round(Number(orderData.value || 0));

  // Format items according to standard GA4 & Google Ads schema
  let formattedItems = [];
  if (Array.isArray(orderData.items) && orderData.items.length > 0) {
    formattedItems = orderData.items.map((item, index) => ({
      item_id: String(item.id || item.productId || item.item_id || `item_${index + 1}`),
      item_name: String(item.name || item.productName || item.item_name || 'Producto Azenza'),
      affiliation: 'Azenza Colombia',
      item_brand: 'Azenza',
      item_category: 'Salud y Bienestar',
      price: Math.round(Number(item.price || numericValue)),
      quantity: Number(item.quantity || item.qty || 1)
    }));
  } else {
    formattedItems = [
      {
        item_id: transactionId,
        item_name: orderData.content_name || 'Compra Azenza',
        affiliation: 'Azenza Colombia',
        item_brand: 'Azenza',
        item_category: 'Salud y Bienestar',
        price: numericValue,
        quantity: 1
      }
    ];
  }

  const purchasePayload = {
    transaction_id: transactionId,
    value: numericValue,
    currency: 'COP',
    tax: 0,
    shipping: 0,
    items: formattedItems
  };

  // Google Ads Enhanced Conversions: Set user data if available
  const email = (customerData.email || orderData.email || '').trim();
  const phone = (customerData.phone || orderData.phone || '').trim();
  const address = (customerData.address || orderData.address || '').trim();
  const city = (customerData.city || orderData.city || '').trim();

  if (email || phone) {
    const userData = {};
    if (email && email.includes('@') && !email.includes('contacto@azenza.com.co')) {
      userData.email = email.toLowerCase();
    }
    if (phone) {
      const cleanPhone = phone.replace(/\D/g, '');
      userData.phone_number = cleanPhone.startsWith('57') ? `+${cleanPhone}` : `+57${cleanPhone}`;
    }
    if (address) {
      userData.address = {
        street: address,
        city: city || 'Colombia',
        country: 'CO'
      };
    }
    if (Object.keys(userData).length > 0) {
      try {
        window.gtag('set', 'user_data', userData);
      } catch (err) {
        console.warn('Could not set user_data for enhanced conversions:', err);
      }
    }
  }

  try {
    // 1. GA4 gtag dispatch with beacon transport
    window.gtag('event', 'purchase', {
      ...purchasePayload,
      transport_type: 'beacon'
    });

    // 2. GTM dataLayer push with standard GA4 ecommerce structure
    window.dataLayer.push({ ecommerce: null }); // Clear previous ecommerce object as per GTM standard
    window.dataLayer.push({
      event: 'purchase',
      ecommerce: purchasePayload
    });

    // 3. Meta Pixel
    if (window.fbq) {
      window.fbq('track', 'Purchase', {
        value: numericValue,
        currency: 'COP',
        content_name: 'Compra Finalizada',
        content_type: 'product',
        content_ids: formattedItems.map(i => i.item_id),
        num_items: formattedItems.reduce((acc, curr) => acc + curr.quantity, 0)
      });
    }

    console.log('📊 [GA4/GTM/Pixel] Purchase event tracked successfully:', transactionId, numericValue, purchasePayload);
  } catch (e) {
    console.error('❌ [GA4/GTM] Error tracking purchase:', e);
  }
};

export const trackGoogleWhatsAppClick = (orderData) => {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
  }
  try {
    const payload = {
      value: Math.round(Number(orderData?.value || 0)),
      currency: 'COP',
      event_category: 'Engagement',
      event_label: 'Confirmar Pedido WhatsApp',
      transport_type: 'beacon'
    };
    window.gtag('event', 'whatsapp_confirmation', payload);
    window.dataLayer.push({
      event: 'whatsapp_confirmation',
      ...payload
    });
    console.log('📊 [GA4/GTM] WhatsApp Confirmation clicked and tracked successfully');
  } catch (e) {
    console.error('❌ [GA4/GTM] Error tracking WhatsApp click:', e);
  }
};

export const trackGoogleBeginCheckout = (value) => {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
  }
  try {
    const numericVal = Math.round(Number(value || 0));
    const payload = {
      value: numericVal,
      currency: 'COP',
      items: [
        {
          item_id: 'checkout_azenza',
          item_name: 'Checkout Azenza',
          affiliation: 'Azenza Colombia',
          item_brand: 'Azenza',
          price: numericVal,
          quantity: 1
        }
      ]
    };
    window.gtag('event', 'begin_checkout', payload);
    window.dataLayer.push({ ecommerce: null });
    window.dataLayer.push({
      event: 'begin_checkout',
      ecommerce: payload
    });
    console.log('📊 [GA4/GTM] Begin Checkout event tracked successfully:', numericVal);
  } catch (e) {
    console.error('❌ [GA4/GTM] Error tracking begin_checkout:', e);
  }
};
