import { useState } from 'react';
import { useCart } from '../CartContext';
import { PRODUCTS, COMBO_OF_THE_MONTH, PROMOTIONS, Product } from '../constants';
import { formatCurrency, cn } from '../utils';
import { Sparkles, ShoppingCart, CheckCircle2, Calculator, ArrowRight, Zap, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Image from './Image';
import { track, trackGoogleBeginCheckout } from '../utils/pixel';

function getProductPriceForUnits(product: Product, units: number): number {
  const exactPromo = product.promos.find(p => p.units === units);
  if (exactPromo) return exactPromo.price;

  const sortedPromos = [...product.promos].sort((a, b) => b.units - a.units);
  for (const promo of sortedPromos) {
    if (units % promo.units === 0) {
      const multiplier = units / promo.units;
      return promo.price * multiplier;
    }
  }

  const oneUnit = product.promos.find(p => p.units === 1)?.price || product.basePrice;
  return oneUnit * units;
}

export function calculateComboPrice(product1Id: string, product2Id: string, qty: number = 1, productsList: Product[] = PRODUCTS) {
  const p1 = productsList.find(p => p.id === product1Id);
  const p2 = productsList.find(p => p.id === product2Id);
  if (!p1 || !p2) return { price: 0, originalPrice: 0, isExisting: false, matchedCombo: null, name: '', image: '' };

  const allCombos = [COMBO_OF_THE_MONTH, ...PROMOTIONS];
  const matchedCombo = allCombos.find(c => 
    c.products.length === 2 && 
    c.products.includes(p1.id) && 
    c.products.includes(p2.id)
  );

  if (matchedCombo) {
    if (qty === 1) {
      return {
        price: matchedCombo.price,
        originalPrice: matchedCombo.originalPrice || (p1.basePrice + p2.basePrice),
        isExisting: true,
        matchedCombo,
        name: matchedCombo.name,
        image: matchedCombo.image
      };
    } else {
      // Rule 3: For qty > 1 of pre-existing combo, take the value of individual product promotions for `qty` units
      const price1 = getProductPriceForUnits(p1, qty);
      const price2 = getProductPriceForUnits(p2, qty);
      const orig1 = (p1.basePrice || p1.promos.find(p => p.units === 1)?.price || 0) * qty;
      const orig2 = (p2.basePrice || p2.promos.find(p => p.units === 1)?.price || 0) * qty;
      return {
        price: price1 + price2,
        originalPrice: orig1 + orig2,
        isExisting: true,
        matchedCombo,
        name: `${qty}x ${matchedCombo.name}`,
        image: matchedCombo.image
      };
    }
  }

  // Custom combo rules (Rule 1 & Rule 3):
  // Rule 1: most expensive product at 100%, economical product at 50%
  const price1Single = p1.promos.find(p => p.units === 1)?.price || p1.basePrice;
  const price2Single = p2.promos.find(p => p.units === 1)?.price || p2.basePrice;

  const maxPrice = Math.max(price1Single, price2Single);
  const minPrice = Math.min(price1Single, price2Single);

  const oneComboPrice = maxPrice + (minPrice * 0.5);
  const oneComboOriginal = price1Single + price2Single;

  const totalPrice = oneComboPrice * qty;
  const totalOriginal = oneComboOriginal * qty;

  return {
    price: Math.round(totalPrice),
    originalPrice: Math.round(totalOriginal),
    isExisting: false,
    matchedCombo: null,
    name: qty > 1 ? `${qty}x Combo Personalizado (${p1.name} + ${p2.name})` : `Combo Personalizado (${p1.name} + ${p2.name})`,
    image: p1.image
  };
}

export default function ComboCalculator() {
  const { getProducts, addComboToCart } = useCart();
  const navigate = useNavigate();
  const availableProducts = getProducts();

  const [product1Id, setProduct1Id] = useState<string>(availableProducts[0]?.id || 'rtafull');
  const [product2Id, setProduct2Id] = useState<string>(availableProducts[1]?.id || 'coliplus');
  const [comboQty, setComboQty] = useState<number>(1);

  const p1 = availableProducts.find(p => p.id === product1Id) || availableProducts[0];
  const p2 = availableProducts.find(p => p.id === product2Id) || availableProducts[1];

  const calculation = calculateComboPrice(product1Id, product2Id, comboQty, availableProducts);

  const handleAddToCart = () => {
    if (!p1 || !p2) return;
    const customCombo = {
      id: calculation.matchedCombo ? calculation.matchedCombo.id : `custom-${p1.id}-${p2.id}-${comboQty}`,
      name: calculation.name,
      price: calculation.price,
      originalPrice: calculation.originalPrice,
      badge: calculation.isExisting ? 'OFERTA ESPECIAL' : 'COMBO ARMADO A MEDIDA',
      products: [p1.id, p2.id],
      image: calculation.image || p1.image
    };

    track('InitiateCheckout', {
      content_ids: [customCombo.id],
      content_name: customCombo.name,
      value: calculation.price,
      currency: 'COP',
      num_items: comboQty,
      content_type: 'product'
    });
    trackGoogleBeginCheckout(calculation.price);

    addComboToCart(customCombo);
    navigate('/checkout');
  };

  return (
    <section className="py-16 bg-gradient-to-b from-stone-50 to-emerald-50/30 border-y border-stone-200" id="calculadora-combos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-widest mb-4 shadow-sm">
            <Calculator className="w-4 h-4" />
            <span>Calculadora Inteligente de Combos</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-stone-900 font-display tracking-tight mb-4">
            Arma tu Combo Ideal y <span className="text-emerald-700">Ahorra al Máximo</span>
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Selecciona dos productos de tu preferencia y la cantidad de combos. El sistema aplicará automáticamente nuestras políticas de descuento: el producto más caro al 100% y el segundo al 50%, o los precios promocionales por cantidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-start max-w-5xl mx-auto">
          {/* Controls Card */}
          <div className="bg-white p-6 sm:p-8 rounded-[2.5rem] shadow-xl border-2 border-emerald-100 space-y-6">
            <h3 className="text-xl font-black text-stone-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-600" />
              <span>Configura tu Combinación</span>
            </h3>

            {/* Product 1 Selection */}
            <div>
              <label className="block text-xs font-black text-stone-600 uppercase tracking-wider mb-2">
                1. Primer Producto Principal (100% Precio Base)
              </label>
              <select
                value={product1Id}
                onChange={(e) => setProduct1Id(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border-2 border-stone-200 bg-stone-50 font-bold text-stone-800 focus:border-emerald-600 focus:outline-none transition-all text-sm sm:text-base"
              >
                {availableProducts.map(p => (
                  <option key={p.id} value={p.id}>
                    {p.name} — {formatCurrency(p.promos.find(pr => pr.units === 1)?.price || p.basePrice)}
                  </option>
                ))}
              </select>
            </div>

            {/* Product 2 Selection */}
            <div>
              <label className="block text-xs font-black text-stone-600 uppercase tracking-wider mb-2">
                2. Segundo Producto (50% de Descuento en Combo Simple)
              </label>
              <select
                value={product2Id}
                onChange={(e) => setProduct2Id(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border-2 border-stone-200 bg-stone-50 font-bold text-stone-800 focus:border-emerald-600 focus:outline-none transition-all text-sm sm:text-base"
              >
                {availableProducts.map(p => (
                  <option key={p.id} value={p.id}>
                    {p.name} — {formatCurrency(p.promos.find(pr => pr.units === 1)?.price || p.basePrice)}
                  </option>
                ))}
              </select>
            </div>

            {/* Quantity Selection */}
            <div>
              <label className="block text-xs font-black text-stone-600 uppercase tracking-wider mb-2">
                3. Cantidad de Combos
              </label>
              <div className="flex items-center gap-3">
                {[1, 2, 3, 5].map((qty) => (
                  <button
                    key={qty}
                    onClick={() => setComboQty(qty)}
                    className={cn(
                      "flex-1 py-3 rounded-2xl font-black text-sm sm:text-base transition-all border-2",
                      comboQty === qty 
                        ? "bg-emerald-600 text-white border-emerald-600 shadow-md scale-105" 
                        : "bg-stone-50 text-stone-700 border-stone-200 hover:border-stone-300"
                    )}
                  >
                    {qty} {qty === 1 ? 'Combo' : 'Combos'}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-900 font-medium space-y-1.5">
              <div className="flex items-center gap-2 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Política de Precios Aplicada:</span>
              </div>
              <p>
                {calculation.isExisting 
                  ? "✨ ¡Coincide con nuestro combo oficial! Se aplica el precio preferencial por volumen para los artículos seleccionados." 
                  : "💡 Producto más caro al 100% y el secundario al 50% de su valor de venta."}
              </p>
            </div>
          </div>

          {/* Summary / Result Card */}
          <div className="bg-stone-900 text-white p-6 sm:p-8 rounded-[2.5rem] shadow-2xl flex flex-col justify-between border border-stone-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  {calculation.isExisting ? 'Combo Oficial' : 'Combo Personalizado'}
                </span>
                <span className="text-xs font-bold text-stone-400">Envío Gratis + Pago Contra Entrega</span>
              </div>

              <h4 className="text-2xl font-black font-display mb-2 text-white">
                {calculation.name}
              </h4>

              <div className="flex items-center gap-4 my-6 py-4 border-y border-stone-800">
                <div className="w-16 h-16 rounded-2xl bg-stone-800 overflow-hidden flex items-center justify-center p-1 shrink-0 border border-stone-700">
                  <Image src={calculation.image || p1.image} alt={calculation.name} preset="thumb" className="w-full h-full object-contain" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-stone-400">Incluye:</div>
                  <div className="text-sm font-bold text-stone-200">{p1.name} + {p2.name} (x{comboQty})</div>
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <div className="flex justify-between items-center text-sm text-stone-400">
                  <span>Precio regular sugerido:</span>
                  <span className="line-through">{formatCurrency(calculation.originalPrice)}</span>
                </div>
                <div className="flex justify-between items-center text-sm text-emerald-400 font-bold">
                  <span>Tu ahorro total:</span>
                  <span>{formatCurrency(calculation.originalPrice - calculation.price)}</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-stone-800">
                  <span className="text-lg font-bold text-white">Total a Pagar:</span>
                  <span className="text-3xl sm:text-4xl font-black text-emerald-400 font-display">
                    {formatCurrency(calculation.price)}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full py-5 bg-emerald-500 text-white rounded-2xl font-black text-lg hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-3 group cursor-pointer"
            >
              <ShoppingCart className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>COMPRAR COMBO AHORA</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
