#!/bin/bash

# Directory containing your web files
WEB_DIR="/home/ethanp/portfolio-fresh/dist"

# Start with a basic CSP directive allowing scripts from self
CSP="script-src 'self'"

# Use find and grep to search recursively for external script URLs in HTML and JS files
find $WEB_DIR -type f \( -name "*.html" -or -name "*.js" \) -exec grep -hoE "src=\"https?://[^\"]+" {} \; | \
cut -d\" -f2 | \
sort -u | \
while read -r url; do
    # Extract the domain from the URL and add it to the CSP directive
    domain=$(echo $url | cut -d/ -f1-3)
    CSP="$CSP $domain"
done

# Output the final CSP string
echo "Content-Security-Policy: $CSP;"

# Optionally, write this to a file or directly into your nginx or Apache config
echo "add_header Content-Security-Policy \"$CSP;\" always;" > /usr/local/openresty/nginx/conf/snippets/csp.conf
