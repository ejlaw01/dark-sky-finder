import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({

  map: Ember.inject.service('google-map'),

  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
  
  ready: function() {
    console.log('hi!');
  }
});

loadInitializers(App, config.modulePrefix);

export default App;
