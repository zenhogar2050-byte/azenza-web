with open("src/lib/seo-logic.ts", "r") as f:
    text = f.read()

old_sig = """export const generateSchemaGraph = (params: {
    type: string, 
    title: string, 
    description: string, 
    canonicalUrl: string, 
    ogImage?: string, 
    productData?: any,
    faqs?: { q: string, a: string }[]
}) => {
    const { type, title, description, canonicalUrl, ogImage, productData, faqs } = params;"""

new_sig = """export const generateSchemaGraph = (params: {
    type: string, 
    title: string, 
    description: string, 
    canonicalUrl: string, 
    ogImage?: string, 
    productData?: any,
    faqs?: { q: string, a: string }[],
    currency?: string,
    countryCode?: string
}) => {
    const { type, title, description, canonicalUrl, ogImage, productData, faqs, currency = 'COP', countryCode = 'CO' } = params;"""

if old_sig in text:
    text = text.replace(old_sig, new_sig)
    with open("src/lib/seo-logic.ts", "w") as f:
        f.write(text)
    print("Fixed seo-logic.ts parameter destructuring")
else:
    print("Signature block not found exactly, let us check")
