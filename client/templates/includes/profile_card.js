if(Records.find().count() === 0) {
  
  var profile = {
    userID: Meteor.userId(),
    username: 'kiri man',
    address: 'tokyo',
    comment: 'Hi! I am Kiri man.'
  }    

  Template.profileCard.helpers({
    profileData: function() {
      return Template.instance().myAsyncValue.get();
    }
  });

  Template.profileCard.created = function (){
    var self = this;
    self.myAsyncValue = new ReactiveVar("Waiting for response from server...");
    Meteor.call('initProfile', profile, function(error, result) {
      if(error) {
        alert('Error');
      } else {
    	  var profile = Records.findOne({_id: result});
    	  self.myAsyncValue.set(profile);
  	  }
    });
  }
}
