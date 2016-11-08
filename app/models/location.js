import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr(),
  name: DS.attr(),
  directions: DS.attr(),
  lat: DS.attr(),
  lng: DS.attr(),
  locationPub: DS.attr(),
  rating: DS.attr(),
  description: DS.attr()
  //events: DS.hasMany('event', { async: true })
});
