import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr(),
  name: DS.attr(),
  directions: DS.attr(),
  //lat: DS.attr('number'),
  //lng: DS.attr('number'),
  locationPub: DS.attr(),
  rating: DS.attr('number'),
  description: DS.attr()
  //events: DS.hasMany('event', { async: true })
});
