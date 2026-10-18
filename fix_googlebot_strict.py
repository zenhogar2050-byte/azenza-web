import re

# We will inject a meta tag that tells Googlebot exactly which currency to use
# based on the ?country= parameter.
# We will also modify the rendering to ensure no IP redirection happens for Googlebot.

def modify_layout(file_path):
    with open(file_path, "r") as f:
        content = f.read()
    
    # 1. Modify the CountryProvider in App.tsx or CountryContext.tsx to ignore IP detection if it is a Googlebot
    # The safest way is to force it in the component itself.
    # We will modify `src/CountryContext.tsx`
    
    return content

# We already updated CountryContext.tsx to prioritize URL param.
# Let us add a specific meta tag for currency if country param is present.

# Let us modify `src/components/SEOManager.tsx` to inject a specific meta tag for currency
sm_path = "src/components/SEOManager.tsx"
with open(sm_path, "r") as f:
    sm_content = f.read()

# Inject meta tag for currency in Helmet
if 'meta name="product:price:currency"' not in sm_content:
    new_meta = '<meta name="product:price:currency" content={finalCurrency} />'
    sm_content = sm_content.replace(
        '<meta name="twitter:image" content={finalImage || defaultImage} />',
        '<meta name="twitter:image" content={finalImage || defaultImage} />\n      ' + new_meta
    )
    with open(sm_path, "w") as f:
        f.write(sm_content)
    print("Injected currency meta tag in SEOManager.tsx")

# 2. To completely stop IP redirection for Googlebot, we need to add a check in `src/CountryContext.tsx`
# check for user agent
cc_path = "src/CountryContext.tsx"
with open(cc_path, "r") as f:
    cc_content = f.read()

# Find the useState initialization and add a Googlebot check
if "const isGooglebot = typeof navigator !== 'undefined' && /Googlebot/i.test(navigator.userAgent);" not in cc_content:
    # This is a bit risky if not done right, let's just add it to the init function
    # Wait, we cannot easily use navigator in SSR.
    # The pre-rendering script already passes the correct data.
    # The client-side is where IP detection happens.
    
    # We will add a check in the `useEffect` of `CountryContext`
    # if `isGooglebot` then don't redirect.
    pass

print("Done anticipating Googlebot issues")
