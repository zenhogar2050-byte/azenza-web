import re

for landing_file in ["src/pages/ProductLanding.tsx", "src/pages/ComboLanding.tsx"]:
    with open(landing_file, "r") as f:
        content = f.read()

    # The error suggests `price` is used in SEOManager but not defined in the scope of ProductLanding/ComboLanding
    # It seems my previous attempt to inject `const price = ...` failed to work or was placed incorrectly.
    
    # I will make `price` available by defining it clearly in the component.
    # In ProductLanding, it is defined in the component body.
    # The SEOManager component call is inside the JSX.
    
    # I will replace the <SEOManager call to pass a calculated price prop directly.
    
    # Regex to find SEOManager and add price={...}
    # This might be tricky. Let us just define `price` variable explicitly.
    
    # Let us check `ProductLanding.tsx` structure again to see where `price` is defined.
    # Based on previous `cat`, it looks like `ProductLanding` has `const price = ...` inside.
    # The problem might be SSR pre-rendering context.
    
    # I will ensure `price` is defined inside the functional component.
    
    # I will define `const price` *before* the return statement.
    
    pattern = r"(return \(\s*<div)"
    
    if "ProductLanding" in landing_file:
        replacement = "const price = Number(product.promos ? product.promos[0].price : product.basePrice);\n  return (<div"
    else:
        replacement = "const price = Number(combo.price);\n  return (<div"
        
    if re.search(pattern, content):
        content = re.sub(pattern, replacement, content)
        with open(landing_file, "w") as f:
            f.write(content)
        print(f"Updated {landing_file} with defined price")
    else:
        print(f"Failed to find return in {landing_file}")

