import Ember from 'ember';



export default Ember.Route.extend({
  model() {
    return this.store.findAll('location');
  },
  actions: {
    saveLocation(params) {
      var newLocation = this.store.createRecord('location', params);
      newLocation.save();
      this.transitionTo('index');
    }
  }
});
