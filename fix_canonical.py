import re

# 1. Update SEOManager.tsx to use correct domain
sm_path = "src/components/SEOManager.tsx"
with open(sm_path, "r") as f:
    sm_content = f.read()

# Change fullUrl calculation
sm_content = sm_content.replace(
    'const fullUrl = getFullUrl(COUNTRY_DOMAINS["CO"]);',
    'const fullUrl = getFullUrl(COUNTRY_DOMAINS[countryCode] || COUNTRY_DOMAINS["CO"]);'
)

with open(sm_path, "w") as f:
    f.write(sm_content)
print("Updated SEOManager.tsx to use correct domain")

# 2. Update ProductLanding.tsx & ComboLanding.tsx to pass country parameter in canonicalUrl
for landing_file in ["src/pages/ProductLanding.tsx", "src/pages/ComboLanding.tsx"]:
    with open(landing_file, "r") as f:
        l_content = f.read()
    
    # Identify the canonicalUrl prop in SEOManager
    if "canonicalUrl={`/producto/${product.id}`}" in l_content:
        l_content = l_content.replace(
            "canonicalUrl={`/producto/${product.id}`}",
            "canonicalUrl={country.id === 'CO' ? `/producto/${product.id}` : `/producto/${product.id}?country=${country.id}`}"
        )
    elif "canonicalUrl={`/combo/${combo.id}`}" in l_content:
        l_content = l_content.replace(
            "canonicalUrl={`/combo/${combo.id}`}",
            "canonicalUrl={country.id === 'CO' ? `/combo/${combo.id}` : `/combo/${combo.id}?country=${country.id}`}"
        )
    
    with open(landing_file, "w") as f:
        f.write(l_content)
    print(f"Updated {landing_file} canonicalUrl")

print("All canonical fixes applied successfully!")
