# ethanparent.com

Here are some features of this website:

1. Caches API responses and stores them in memory for 1 day
2. Proxies the fetch requests from the frontend to the backend server to obscure API keys and other sensitive information. Also allows for better scaled API request handling.
3. Utilizes Material UI for visual components and "easy" responsive design on xs - lg screens.
4. Reuses components like ProjectCard to reduce the need to change code in multiple places.
5. Utilizes Load Balancing on the frontend, with SSL/TLS termination. 
6. Has HTTP/2 enabled
8. End to end encryption
9. AWS WAF Enabled
10. Minimize API Weather calls by making 1 call and parsing data for forecast and realtime
11. Implements security suggestions from Snyk.io (input validation, sanitization, XSS attack prevention, etc.)

## TBD

1. Create more projects for projects section

## Bugs

1. Some cities that populate with the state/municipality will cause the weather app to crash, ex: Rio de Janeiro populates as Rio-de-Janeiro-State-of-Rio-de-Janeiro-Brazil , which does not work with Tomorrow.io forecast API. I need to account for cities like this and parse out the municipality / state names ( as well as create an error message page ) (Update: appears fixed, need to test with more city names)




