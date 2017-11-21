import Route from '@ember/routing/route';
import DS from 'ember-data';

const getUsers = () => {
  return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
}

export default Route.extend({
  firstName: DS.attr()
  // model() {
  //   return getUsers();
  // }
});
