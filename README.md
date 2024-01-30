# www.ethanparent.com

Here are some features of this website:

## General Features for the Root Domain

1. Utilizes Material UI for visual components and "easy" responsive design on xs - lg screens.
2. Reuses components like ProjectCard to reduce the need to change code in multiple places.
3. Proxies the fetch requests from the frontend to the backend server to obscure API keys and other sensitive information. Also allows for better scaled API request handling.
4. Utilizes Load Balancing on the frontend, with SSL/TLS termination. 
5. Has HTTP/2 enabled
6. End to end encryption thanks to AWS Certificate Manager
7. AWS WAF Enabled for protection against bots and CloudWatch for log management 

## Weather App

1. Caches API responses and stores them in memory for 1 day
2. Minimize API Weather calls by making 1 call and parsing data for forecast and realtime
3. Implements security suggestions from Snyk.io (input validation, sanitization, XSS attack prevention, etc.)

## Future Improvements

1. Create more projects for projects section. 
2. Add loading wheel so users can see when the weather information is done loading
3. Consider switching from EC2 -> Lambda to save money, at least for routing
4. Improve load time for Weather app (reduce network load)
5. Improve caching, prevent stale data (might not be applicable for the weather app, but may be necessary with future apps)

## Bugs

1. Some cities that populate with the state/municipality will cause the weather app to crash, ex: Rio de Janeiro populates as Rio-de-Janeiro-State-of-Rio-de-Janeiro-Brazil , which does not work with Tomorrow.io forecast API. I need to account for cities like this and parse out the municipality / state names ( as well as create an error message page ) (Update: appears semi fixed, need to test with more city names)
2. Weather app spacing needs some tweaks on mobile
3. ****High Severity**** Weather app will ocassionaly not render a new city and will go back to the default city (Frisco, TX). Need to find root cause and fix. 




