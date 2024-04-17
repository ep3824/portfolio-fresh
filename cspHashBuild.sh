#!/bin/bash
HASHES_FILE="/home/ethanp/portfolio-fresh/hashes.json"
CSP_HEADER="default-src 'self';"

if [ -f "$HASHES_FILE" ]; then
    hashes=$(cat "$HASHES_FILE" | jq -r '.[] | "script-src \(.);"')
    CSP_HEADER="$CSP_HEADER $hashes"
fi

echo "add_header Content-Security-Policy \"$CSP_HEADER\" always;" > /usr/local/openresty/nginx/conf/snippets/csp.conf
