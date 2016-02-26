Getting started with JavaScript unit testing – Node, Jasmine, Karma

# Install
Download and install node.js

npm install -g bower
npm install -g karma
npm install -g karma-cli
npm install -g phantomjs

## Dependencies:
npm install -g karma-cli karma-jasmine karma-chrome-launcher
npm install -g phantomjs

## To run Karma tests:
karma start karma.conf.js

## For single run test:
karma start karma.conf.js --single-run --browsers PhantomJS