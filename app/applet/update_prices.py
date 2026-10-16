import re

file_path = "/app/applet/src/constants.ts"
with open(file_path, "r") as f:
    content = f.read()

price_updates = {
    "mamooth": 69900,
    "instant-virgin": 89900,
    "titan-coffee": 69900,
    "haydar": 59000,
    "zafir": 59000,
    "creatina": 99000,
    "booster-lion": 69900,
    "megamac": 69900,
    "guanda-mix": 69900,
    "citramix": 69900,
    "c-lagen": 89900,
    "colageno-cafe": 75000,
    "kds-10": 69900,
    "nad-1": 69900,
    "iprossmen": 75900,
    "resveratrol": 69900,
    "akha": 67000
}

for pid, new_bp in price_updates.items():
    pattern = r"(id:\s*['\"]" + pid + r"['\"],[\s\S]*?basePrice:\s*)(\d+)([\s\S]*?promos:\s*\[[\s\S]*?\])"
    
    def repl(m):
        bp = new_bp
        p2u = round(bp * 1.5)
        p2x3 = round(bp * 2.0)
        p3x5 = round(bp * 3.0)
        new_promos = f"promos: [\n      {{ id: '1u', label: '1 Unidad', units: 1, price: {bp} }},\n      {{ id: '2u', label: '2 Unidades', units: 2, price: {p2u} }},\n      {{ id: '2x3', label: 'Pague 2 Lleve 3', units: 3, price: {p2x3}, badge: '⭐ Recomendado' }},\n      {{ id: '3x5', label: 'Pague 3 Lleve 5', units: 5, price: {p3x5}, badge: '🔥 Mejor Oferta' }\n    ]"
        return m.group(1) + str(bp) + m.group(3).split("promos:")[0] + new_promos

    new_content, count = re.subn(pattern, repl, content)
    if count > 0:
        content = new_content
        print(f"Updated {pid} -> basePrice: {new_bp}")
    else:
        print(f"Failed to update {pid}")

# Also update promotions promo-3, promo-4, promo-6 to 114500
promo_updates = ["promo-3", "promo-4", "promo-6"]
for promo_id in promo_updates:
    pattern_promo = r"(id:\s*['\"]" + promo_id + r"['\"],[\s\S]*?price:\s*)(\d+)([\s\S]*?originalPrice:\s*)(\d+)"
    def repl_promo(m):
        new_price = 114500
        return m.group(1) + str(new_price) + m.group(3) + m.group(4)

    content, count = re.subn(pattern_promo, repl_promo, content)
    print(f"Updated promo {promo_id} price to 114500, count: {count}")

with open(file_path, "w") as f:
    f.write(content)

print("Done updating constants.ts")
