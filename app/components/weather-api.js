import Ember from 'ember';

export default Ember.Component.extend({
  // weatherApi: Ember.inject.service(),

  // model: function(params) {
  //   var key = config.myApiKey;
  //   var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;
  //     return Ember.$getJSON(url).then(function(responseJSON) {
  //       return responseJSON.results;
  //   });
  // }

  actions: {
    getWeather(city) {
      var params = {
        city: this.get('city'),
      };
      console.log(city);
      this.sendAction('getWeather', params);
    }
  }
});
