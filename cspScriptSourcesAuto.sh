#!/bin/bash

# Directory containing your web files
WEB_DIR="/home/ethanp/portfolio-fresh/dist/assets"

# Start with a basic CSP directive allowing scripts from self
CSP="script-src 'self'"

# Use grep to find all occurrences of script sources from external URLs
# This example assumes scripts are included in a standard way in HTML or JS files
# and that URLs are quoted with double quotes
grep -hoE "src=\"https?://[^\"]+" $WEB_DIR/*.{html,js} | \
cut -d\" -f2 | \
sort -u | \
while read -r url; do
    # Extract the domain from the URL and add it to the CSP directive
    domain=$(echo $url | cut -d/ -f1-3)
    CSP="$CSP $domain"
done

# Output the final CSP string
echo "Content-Security-Policy: $CSP;"

# Optionally, you can write this to a file or directly into your nginx or Apache config
# For example, for Nginx you might do:
echo "add_header Content-Security-Policy \"$CSP;\" always;" > /usr/local/openresty/nginx/conf/snippets/csp.conf
