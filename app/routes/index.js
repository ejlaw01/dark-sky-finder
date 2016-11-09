import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('location');
  },

  setupController: function(controller) {
    controller.setProperties({
      lat: 48,
      lng: -122,
      zoom: 6,
      overlays: Ember.A([
        // {
        //   id: 'tile-test',         // Recommended
        //   lat: 34,  // Required
        //   lng: -126,        // Required
        //   content: '<img class="na-tile" src="/images/North-America.png">',
        //   layer: 'overlayLayer',       // Id of any of the layers defined in google.maps.MapPanes
        //   verticalAlign: 'middle',      // middle | bottom
        //   horizontalAlign: 'right', // left | right
        //   horizontalOffset: 0,      // in pixels
        //   verticalOffset: 0,        // in pixels
        // }
        {
          id: 'tile-test',         // Recommended
          lat: 55.75,  // Required
          lng: -135,        // Required
          content: '<img class="pnw-tile" src="/images/tile_4_2_5.png">',
          layer: 'overlayLayer',       // Id of any of the layers defined in google.maps.MapPanes
          verticalAlign: 'bottom',      // middle | bottom
          horizontalAlign: 'right', // left | right
          horizontalOffset: 0,      // in pixels
          verticalOffset: 0,        // in pixels
        },
        {
          id: 'tile-test',         // Recommended
          lat: 40.95,  // Required
          lng: -135,        // Required
          content: '<img class="pnw-tile" src="/images/tile_4_2_6.png">',
          layer: 'overlayLayer',       // Id of any of the layers defined in google.maps.MapPanes
          verticalAlign: 'bottom',      // middle | bottom
          horizontalAlign: 'right', // left | right
          horizontalOffset: 0,      // in pixels
          verticalOffset: 0,        // in pixels
        }
      ])
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
