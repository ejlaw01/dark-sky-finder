import Ember from 'ember';

export default Ember.Component.extend({
  addLocation: false,
  actions: {
    locationFormShow() {
      this.set('addLocation', true);
    }
  }
});
