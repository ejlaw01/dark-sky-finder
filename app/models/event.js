import DS from 'ember-data';

export default DS.Model.extend({
  organizer: DS.attr('organizer'),
  date: DS.attr('date'),
  attend: DS.attr('attend'),
  body: DS.attr('body'),
  meeting-pub: DS.attr('meeting-pub'),
  location: DS.belongsTo('location', { async: true}),
});
