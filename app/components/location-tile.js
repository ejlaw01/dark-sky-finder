import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    increaseScore(location) {
      this.sendAction("increaseScore", location);
    },
    decreaseScore(location) {
      this.sendAction("decreaseScore", location);
    }
  }
});
