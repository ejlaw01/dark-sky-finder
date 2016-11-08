import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + params.city + '&appid=' + '6093f3b9eaaf68a2e9230a56390afe3e';
    return Ember.$getJSON(url).then(function(responseJSON) {
      return "responseJSON.results";
    });
  }
});
