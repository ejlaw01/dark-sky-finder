import Ember from 'ember';


export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions: {
    showMap() {
      //underlay section
      var container = this.$('.map-display')[0];
      var options = {
        center: {lat: 45.5, lng: -122},
        zoom: 7,
        mapTypeId: 'terrain',
      };
      var underlay = this.get('map').findMap(container, options);

      //overlay section
      var bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(45.5, -238),
        new google.maps.LatLng(30, -300));
      var src = 'http://www.lightpollution.it/worldatlas/images/fig2.jpg';
      // var overlay = this.get('DarkSkyOverlay').showOverlay(bound, src, underlay);
    }
  }
});
