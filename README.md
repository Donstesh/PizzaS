# Getting Started with Pizzas React App

 1. ### `git clone https://github.com/Donstesh/PizzaS.git`
 2. ### `npm install`
## Available Scripts

In the project directory, you can run:

### `npm run-script build`
### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Runnig the Reporting tool localy App Localy


 1. ### Go to index.mjs 
####          `comment out lines 84-88 and 107-119`
####          `comment out lines 150-151` to by pass authentication error
 2. #### Line 748 `app.use('/internal-reporting/kpi', kpiRouter);`
 3. #### Line 748 `app.use('/internal-reporting/dashboard', dashboardRouter);`
 4. #### Line 959 `app.use('/internal-reporting/combos', combosRouter);`


### ScopeID error kpi.js

#### Line 959 `const clientId = (action === 'globalReport') ? clientList : (req?.user?.scopeId || clientList);`

###          dashboard.js

5. #### Line 91 `const clientId =  286 ; //req.user.scopeId;`

# On Dashboard Project folder

###          `dev-config.json`

6. #### Line 4 `"/internal-reporting": "http://dedicated_ip:port"`
