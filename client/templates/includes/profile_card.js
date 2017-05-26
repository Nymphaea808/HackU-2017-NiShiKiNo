import '../../../lib/collections/profile.js'

Meteor.call('updateProfile', function(error, result) {
  if(error) alert('Error');
  else console.log(result);
});
Template.profileCard.helpers({
    name: "Kiri Man",
    age: 24,
    address: "Toky, Japan",
    comment: "Hi! I am Kiri man.",
    id: Meteor.userId()
});
