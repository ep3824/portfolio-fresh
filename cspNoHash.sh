#!/bin/bash

# Define the basic CSP rules
CSP_HEADER="default-src 'self';"

# Allow inline scripts and styles
CSP_HEADER+=" script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;"
CSP_HEADER+=" style-src 'self' 'unsafe-inline';"

# Allow images and fonts from self and HTTPS sources
CSP_HEADER+=" img-src 'self' https:; font-src 'self' https:;"

# Allow connections (AJAX, WebSockets) from self and HTTPS sources
CSP_HEADER+=" connect-src 'self' https:;"

# Write the CSP to the nginx snippet file
echo "add_header Content-Security-Policy \"$CSP_HEADER\" always;" > /usr/local/openresty/nginx/conf/snippets/csp.conf

# Output for verification
echo "CSP Header Set: $CSP_HEADER"
