/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'dark-sky-finder',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    firebase: {
      apiKey: "AIzaSyBnoDaDf2p23haJFzhmUiMhwj_GPPX3770",
      authDomain: "dark-skies-43697.firebaseapp.com",
      databaseURL: "https://dark-skies-43697.firebaseio.com",
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV.contentSecurityPolicy = {
    'script-src': "'self' 'unsafe-eval' https://*.googleapis.com https://*.gstatic.com",
       'img-src': "'self' https://*.googleapis.com https://*.gstatic.com",
       'font-src': "'self' https://*.gstatic.com",
       'style-src': "'self' 'unsafe-inline' https://*.googleapis.com"
  }   

  if (environment === 'development') {
    ENV.myApiKey = process.env.apiKey;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
