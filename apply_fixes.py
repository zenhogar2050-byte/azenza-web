import re

# 1. Update CountryContext.tsx to support ?country= query param
cc_path = "src/CountryContext.tsx"
with open(cc_path, "r") as f:
    cc_content = f.read()

old_init = """  const [countryId, setCountryIdState] = useState<string>(() => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      return localStorage.getItem("azenza_country") || currentCountryCode;
    }
    return currentCountryCode;
  });"""

new_init = """  const [countryId, setCountryIdState] = useState<string>(() => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const queryCountry = urlParams.get("country");
      if (queryCountry && COUNTRIES.some(c => c.id === queryCountry.toUpperCase())) {
        const found = queryCountry.toUpperCase();
        localStorage.setItem("azenza_country", found);
        return found;
      }
      return localStorage.getItem("azenza_country") || currentCountryCode;
    }
    return currentCountryCode;
  });"""

if old_init in cc_content:
    cc_content = cc_content.replace(old_init, new_init)
    with open(cc_path, "w") as f:
        f.write(cc_content)
    print("Updated CountryContext.tsx")
else:
    print("Could not find init in CountryContext.tsx")

# 2. Update seo-logic.ts to accept currency and countryCode
sl_path = "src/lib/seo-logic.ts"
with open(sl_path, "r") as f:
    sl_content = f.read()

# Replace function signature
sl_content = sl_content.replace(
    "export function generateSchemaGraph({",
    "export function generateSchemaGraph({ currency = 'COP', countryCode = 'CO', "
)

# Replace hardcoded COP and CO in schema
sl_content = sl_content.replace('"priceCurrency": "COP"', '"priceCurrency": currency')
sl_content = sl_content.replace('"applicableCountry": "CO"', '"applicableCountry": countryCode')
sl_content = sl_content.replace('"addressCountry": "CO"', '"addressCountry": countryCode')
sl_content = sl_content.replace('"currency": "COP"', '"currency": currency')

with open(sl_path, "w") as f:
    f.write(sl_content)
print("Updated seo-logic.ts")

# 3. Update SEOManager.tsx to accept currency and countryCode and pass them to generateSchemaGraph
sm_path = "src/components/SEOManager.tsx"
with open(sm_path, "r") as f:
    sm_content = f.read()

if "currency?: string;" not in sm_content:
    sm_content = sm_content.replace(
        "  faqs?: Array<{ q: string; a: string }>;\n  keywords?: string[];\n}",
        "  faqs?: Array<{ q: string; a: string }>;\n  keywords?: string[];\n  currency?: string;\n  countryCode?: string;\n}"
    )

sm_content = sm_content.replace(
    "  keywords = [],\n}) => {",
    "  keywords = [],\n  currency = 'COP',\n  countryCode = 'CO',\n}) => {"
)

sm_content = sm_content.replace(
    "  const schemaData = generateSchemaGraph({\n    type,\n    title,\n    description: finalDescription,\n    canonicalUrl: fullUrl,\n    ogImage: finalImage,\n    productData,\n    faqs\n  });",
    "  const schemaData = generateSchemaGraph({\n    type,\n    title,\n    description: finalDescription,\n    canonicalUrl: fullUrl,\n    ogImage: finalImage,\n    productData,\n    faqs,\n    currency,\n    countryCode\n  });"
)

with open(sm_path, "w") as f:
    f.write(sm_content)
print("Updated SEOManager.tsx")

# 4. Update ProductLanding.tsx & ComboLanding.tsx to pass currency and countryCode to SEOManager
for landing_file in ["src/pages/ProductLanding.tsx", "src/pages/ComboLanding.tsx"]:
    with open(landing_file, "r") as f:
        l_content = f.read()
    
    if "useCountry" not in l_content:
        l_content = l_content.replace("import { useNavigate,", "import { useCountry } from '../CountryContext';\nimport { useNavigate,")
    
    if "const { country } = useCountry();" not in l_content:
        l_content = re.sub(r"(export default function \w+\(\) \{\s*const \{[^}]+\} = [^;]+;\s*)", r"\1  const { country } = useCountry();\n", l_content)
    
    if "currency={country.currency}" not in l_content:
        l_content = l_content.replace("<SEOManager", "<SEOManager\n        currency={country.currency}\n        countryCode={country.id}")
    
    with open(landing_file, "w") as f:
        f.write(l_content)
    print(f"Updated {landing_file}")

# 5. Update scripts/generate-google-feed.ts to include ?country= parameter in links
gf_path = "scripts/generate-google-feed.ts"
with open(gf_path, "r") as f:
    gf_content = f.read()

gf_content = gf_content.replace(
    "xml += `    <g:link>${baseUrl}/producto/${p.id}</g:link>\\n`;",
    "const pLink = countryCode === 'CO' ? `${baseUrl}/producto/${p.id}` : `${baseUrl}/producto/${p.id}?country=${countryCode}`;\n    xml += `    <g:link>${pLink}</g:link>\\n`;"
)

gf_content = gf_content.replace(
    "xml += `    <g:link>${baseUrl}/combo/${combo.id}</g:link>\\n`;",
    "const cLink = countryCode === 'CO' ? `${baseUrl}/combo/${combo.id}` : `${baseUrl}/combo/${combo.id}?country=${countryCode}`;\n    xml += `    <g:link>${cLink}</g:link>\\n`;"
)

gf_content = gf_content.replace(
    "xml += `    <g:link>${baseUrl}/combo/${promo.id}</g:link>\\n`;",
    "const prLink = countryCode === 'CO' ? `${baseUrl}/combo/${promo.id}` : `${baseUrl}/combo/${promo.id}?country=${countryCode}`;\n    xml += `    <g:link>${prLink}</g:link>\\n`;"
)

with open(gf_path, "w") as f:
    f.write(gf_content)
print("Updated generate-google-feed.ts")

print("All fixes applied successfully!")
