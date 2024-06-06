If you are accessing the site through Netlify you have to clear your local storage from inspect element, 
application and if you get a broken page just remove /products from the URL and you shall be able to access site again, 

I have created all functions which are storing data in localhost as well as in json local Server instance, 
registration, Login with localhost server which you can check only after cloning my project on your local server,
and have to run three different commands as follow to have all functinality working.


To run App: npm run dev

To run Razorpay Payment Gateway Server: /Server/ node Server.js

To run Database: /src/ npx json-server -p 4000 /database.json

Once you have all setup then you can use all functions right from Registration, Login, Add To Cart, Checkout, Payment, Order History
