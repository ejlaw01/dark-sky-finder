import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr('image'),
  name: DS.attr('name'),
  directions: DS.attr('directions'),
  lat: DS.attr('lat'),
  long: DS.attr('long'),
  location-pub: DS.attr('location-pub'),
  rating: DS.attr('rating'),
  description: DS.attr('description'),
  events: DS.hasMany('event', { async: true })
});
