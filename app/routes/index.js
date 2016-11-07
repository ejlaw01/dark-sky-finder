import Ember from 'ember'

export default Ember.Route.extend({
  // weatherApi: Ember.inject.service(),
  actions: {
    getWeather(params) {
      var newCity = this.store.createRecord('location', params);
      newCity.save();
      this.transitionTo('index');
    }
  }
});
