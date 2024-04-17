#!/bin/bash
HASHES_FILE="/home/ethanp/portfolio-fresh/dist/hashes.json"
CSP_HEADER="default-src 'self';"

# Check if the hash file exists and generate CSP directives accordingly
if [ -f "$HASHES_FILE" ]; then
    # Append script-src hashes with single quotes around each hash
    script_hashes=$(jq -r 'to_entries | map(select(.key | endswith(".js"))) | .[] | "\x27" + .value + "\x27"' "$HASHES_FILE" | paste -sd' ' -)
    if [ -n "$script_hashes" ]; then
        CSP_HEADER="${CSP_HEADER} script-src 'self' $script_hashes;"
    fi

    # Append style-src hashes with single quotes around each hash
    style_hashes=$(jq -r 'to_entries | map(select(.key | endswith(".css"))) | .[] | "\x27" + .value + "\x27"' "$HASHES_FILE" | paste -sd' ' -)
    if [ -n "$style_hashes" ]; then
        CSP_HEADER="${CSP_HEADER} style-src 'self' $style_hashes;"
    fi
else
    # Default fallbacks if no hashes are generated
    CSP_HEADER="${CSP_HEADER} script-src 'self'; style-src 'self';"
fi

# Additional directives
CSP_HEADER="${CSP_HEADER} img-src 'self' https:; font-src 'self' https:; connect-src 'self' https:;"

# Write the CSP to the nginx snippet
echo "add_header Content-Security-Policy \"$CSP_HEADER\" always;" > /usr/local/openresty/nginx/conf/snippets/csp.conf

# Output for verification
echo "CSP Header Set: $CSP_HEADER"
