import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    getWeather() {
      var params = {
        city: this.get('city'),
      };
      this.sendAction('getWeather', params);
    }
  }
});
