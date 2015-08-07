# testing-nodejs

basic environment to work with javascript and testing

# getting started

1. install nodejs (https://nodejs.org/)

2. clone the repository on your local machine

``` sh
git clone git@github.com:efleming969/testing-nodejs.git
```

3. from inside the project directory, install necessary dependencies

``` sh
npm install 
```

4. install selenium and webdriver components (this can take awhile!)

``` sh
node ./node_modules/.bin/selenium-standalone install
```

5. continuously build the application

``` sh
npm run build-ci
```

6. run the application

``` sh
npm run app
```

7. open test runner in a browser http://localhost:8080/mainTest.js
