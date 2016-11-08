import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    getWeather(params) {
      this.transitionTo('results', params.city);
    }
  }
});
