import Ember from 'ember';


export default Ember.Route.extend({
  setupController: function(controller) {
    controller.setProperties({
      lat: 45.5,
      lng: -122,
      zoom: 7
    });
  }
});
