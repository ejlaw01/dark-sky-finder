import Ember from 'ember'

export default Ember.Route.extend({

  actions: {
    getWeather(params) {
      var newCity = this.store.createRecord('location', params);
      newCity.save();
      this.transitionTo('location', params.city);
    }
  }
});
