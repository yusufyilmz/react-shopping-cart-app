## Reactreduxshoppingcart

A react redux shopping chart project.

# Getting Started

# Installing:

Install the required packages with that command at project directory:

    npm install 

# Start:

To start and debug project run that that command at project directory:

    npm start 

Runs the app in development mode. Open http://localhost:3000 to view it in the browser. 

# Test:

There are several test cases for components and reducers. To run test cases, run that command at project directory:

    npm test 

# Deployment:

To prepare a deployment of project, run that command at project directory:

    npm run build 

# Code Overview

# Dependencies:
   
-   react - to create an react environment 
-   redux - to create an redux environment 
-   redux-thunk - to make async requests 
-   redux-promise - to handle json fetch
-   lodash - to handle objects and arrays
-   Enzyme, chai, and sinon  - Packages that are used to write test cases;                     

# Features:

-   Create a product store from a json file (For test purpose)
-   Add product from store to chart
-   Increase, decrease quantity product at chart
-   Remove product from chart
-   Clear chart
-   Add and edit comment to product at chart
-   Refresh page and get chart last state
-   Prepare bill for chart

# Application Structure

   index.js - The entry point to our application.
-   components - react components that are used by containers.
-   containers - react component that does data fetching.
-   actions - actions folder.
-   assets - css, images and font folders.
-   reducers - redux reducers.
-   stores - redux stores and middlewares that are used.


# TODO

- css improvements
- write more test cases
- do some logging
- authorization

# License

This project is licensed under the MIT License 

# Authors

Yusuf Yılmaz
