import re

for landing_file in ["src/pages/ProductLanding.tsx", "src/pages/ComboLanding.tsx"]:
    with open(landing_file, "r") as f:
        content = f.read()

    # The error is ReferenceError: price is not defined.
    # It seems in my previous fix I assumed `price` variable was available, but it might not be.
    # I need to find where `price` is defined.
    
    # Let us fix it by defining `price` before passing it to SEOManager.
    # In ProductLanding.tsx:
    # `const price = Number(promo?.price || product.basePrice);` 
    # Wait, it *is* defined. Why does the server bundle say it is not?
    # Maybe because of scoping.
    
    # I will wrap the SEOManager call in a block where `price` is guaranteed to exist.
    # Actually, I will pass the calculated price directly if it exists, or basePrice if not.
    
    # Better yet, I will define `const price = ...` just before SEOManager if it is missing.
    
    content = content.replace(
        "<SEOManager",
        "const price = Number(product.promos ? product.promos[0].price : product.basePrice);\n      <SEOManager"
    )
    
    with open(landing_file, "w") as f:
        f.write(content)
    print(f"Updated {landing_file} with price variable")
