import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('location');
  },

  setupController: function(controller) {
    controller.setProperties({
      lat: 45.5,
      lng: -122,
      zoom: 7
    });
  },
  actions: {
    getWeather(params) {
      this.transitionTo('results', params.city);
    },
    saveLocation(params) {
      var newLocation = this.store.createRecord('location', params);
      newLocation.save();
      this.transitionTo('index');
    },
    increaseScore(location) {
      this.store.findRecord('location', location.id).then(function(){
        location.incrementProperty('rating');
        return location.save();
      });
    },
    decreaseScore(location) {
      this.store.findRecord('location', location.id).then(function(){
        location.decrementProperty('rating');
        return location.save();
      });
    }
  }
});
