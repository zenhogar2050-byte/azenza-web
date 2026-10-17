import re

file_path = "src/App.tsx"
with open(file_path, "r") as f:
    content = f.read()

# Add import
import_line = "import CountryModal from './components/CountryModal';"
new_import = import_line + "\nimport GeoCountryNotice from './components/GeoCountryNotice';"

content = content.replace(import_line, new_import)

# Add component
comp_line = "<CountryModal />"
new_comp = "<CountryModal />\n          <GeoCountryNotice />"

content = content.replace(comp_line, new_comp)

with open(file_path, "w") as f:
    f.write(content)

print("Updated App.tsx with GeoCountryNotice")
