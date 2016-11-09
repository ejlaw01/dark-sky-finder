import Ember from 'ember';



export default Ember.Route.extend({
  model() {
    return this.store.findAll('location');
  },
  setupController: function(controller) {
    controller.setProperties({
      lat: 45.5,
      lng: -122,
      zoom: 7,
      overlays: Ember.A([
        {
          id: 'tile-test',         // Recommended
          lat: 45.5,  // Required
          lng: -122,        // Required
          content: '<img class="tile" src="/images/tile_3_3_2.png">',
          layer: 'floatPane',       // Id of any of the layers defined in google.maps.MapPanes
          verticalAlign: 'top',      // middle | bottom
          horizontalAlign: 'left', // left | right
          horizontalOffset: 50,      // in pixels
          verticalOffset: 50,        // in pixels
          // click: function(event, overlay) {},
          // dblclick: function(event, overlay) {},
          // mouseup: function(event, overlay) {},
          // mousedown: function(event, overlay) {},
          // mouseover: function(event, overlay) {},
          // mousemove: function(event, overlay) {},
          // mouseout: function(event, overlay) {}
        }
      ])
    });
  }
});
