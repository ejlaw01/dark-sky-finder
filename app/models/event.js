import DS from 'ember-data';

export default DS.Model.extend({
  organizer: DS.attr(),
  date: DS.attr(),
  attend: DS.attr(),
  body: DS.attr(),
  meetingPub: DS.attr(),
  //location: DS.belongsTo('location', { async: true}),
});
