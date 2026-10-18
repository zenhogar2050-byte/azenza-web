import re

for landing_file in ["src/pages/ProductLanding.tsx", "src/pages/ComboLanding.tsx"]:
    with open(landing_file, "r") as f:
        content = f.read()

    # The issue: productData is passed as an object containing basePrice in COP.
    # We need to change `productData` to use the price converted to local currency.
    # In ProductLanding.tsx, we have `const price = Number(promo?.price || product.basePrice);`
    
    # We need to find the `productData` object inside the SEOManager and update `basePrice`
    
    # regex to find productData object
    pattern = r"(productData=\{[\s\S]*?basePrice:\s*)product\.basePrice"
    replacement = r"\1price"
    
    if re.search(pattern, content):
        content = re.sub(pattern, replacement, content)
        with open(landing_file, "w") as f:
            f.write(content)
        print(f"Updated {landing_file} to pass converted price")
    else:
        print(f"Could not find productData in {landing_file}")

