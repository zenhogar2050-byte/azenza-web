import re
import os

files = ["/public/meta-catalog.csv", "/public/meta-feed.xml", "/public/google-feed.xml"]
updates = {
    "miskinne": "55000",
    "titan-coffee": "73500",
    "iprossmen": "59900"
}

for file_path in files:
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue
    
    with open(file_path, "r") as f:
        content = f.read()

    for pid, new_price in updates.items():
        if file_path.endswith(".csv"):
            # Update price in CSV, looks like: "miskinne",...,"59900 COP"
            pattern = rf'("{pid}","[^"]*","[^"]*","in stock","new",")(\d+)( COP")'
            content, count = re.subn(pattern, rf'\1{new_price}\3', content)
            print(f"Updated {pid} in {file_path}: {count} occurrences")
        elif file_path.endswith(".xml"):
            # Update price in XML, looks like: <g:id><![CDATA[pid]]></g:id>...<g:price><![CDATA[old_price COP]]></g:price>
            pattern = rf'(<g:id><!\[CDATA\[{pid}\]\]><\/g:id>[\s\S]*?<g:price><!\[CDATA\[)(\d+)( COP\]\]><\/g:price>)'
            content, count = re.subn(pattern, rf'\1{new_price}\3', content)
            print(f"Updated {pid} in {file_path}: {count} occurrences")

    with open(file_path, "w") as f:
        f.write(content)
