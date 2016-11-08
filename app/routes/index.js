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
    },
    increaseScore(location) {
      this.store.findRecord('location', location.id).then(function(){
        location.incrementProperty('rating');
        return location.save();
      });
    },
    decreaseScore(location) {
      this.store.findRecord('location', location.id).then(function(){
        location.decrementProperty('rating');
        return location.save();
      });
    }
  }
});
