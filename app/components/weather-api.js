import Ember from 'ember';

export default Ember.Component.extend({
  weatherApi: Ember.inject.service(),

  actions: {
    getWeather() {
      var params = {
        city: this.get('city'),
      };
      console.log(params);
      this.sendAction('getWeather', params);
    }
  }
});
