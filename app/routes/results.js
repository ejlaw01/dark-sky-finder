import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + params.city + '&appid=' + key;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.weather;
    });l
  }
});
