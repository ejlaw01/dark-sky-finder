import Ember from 'ember';



export default Ember.Route.extend({
  model() {
    return this.store.findAll('location');
  },

  actions: {
    test() {
      console.log(this.get(model()));
    }
  }
});
