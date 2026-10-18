import re

# 1. Update CountryContext.tsx to prioritize URL param over localStorage
cc_path = "src/CountryContext.tsx"
with open(cc_path, "r") as f:
    cc_content = f.read()

# Current logic: 
# return localStorage.getItem("azenza_country") || currentCountryCode;
# We need to change the order so URL param > LocalStorage > Default

new_init = """  const [countryId, setCountryIdState] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const queryCountry = urlParams.get("country");
      if (queryCountry && COUNTRIES.some(c => c.id === queryCountry.toUpperCase())) {
        return queryCountry.toUpperCase();
      }
      if (typeof localStorage !== "undefined") {
        return localStorage.getItem("azenza_country") || currentCountryCode;
      }
    }
    return currentCountryCode;
  });"""

# This is a bit complex to replace with regex because of indentation. 
# I will use a simpler replace
pattern = r"const \[countryId, setCountryIdState\] = useState<string>\(\(\) => \{[\s\S]*?return currentCountryCode;\n  \}\);"
cc_content = re.sub(pattern, new_init, cc_content)

with open(cc_path, "w") as f:
    f.write(cc_content)
print("Updated CountryContext.tsx priority")

# 2. Update SEOManager.tsx to extract currency/country from URL if missing
sm_path = "src/components/SEOManager.tsx"
with open(sm_path, "r") as f:
    sm_content = f.read()

# We need to make sure generateSchemaGraph receives correct data even if not passed
sm_content = sm_content.replace(
    "  const schemaData = generateSchemaGraph({",
    """  let finalCurrency = currency;
  let finalCountry = countryCode;
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    const qCountry = urlParams.get('country');
    if (qCountry) {
        const found = COUNTRIES.find(c => c.id === qCountry.toUpperCase());
        if (found) {
            finalCurrency = found.currency;
            finalCountry = found.id;
        }
    }
  }
  const schemaData = generateSchemaGraph({"""
)
sm_content = sm_content.replace("    currency,", "    currency: finalCurrency,")
sm_content = sm_content.replace("    countryCode", "    countryCode: finalCountry")

with open(sm_path, "w") as f:
    f.write(sm_content)
print("Updated SEOManager.tsx for dynamic currency")

