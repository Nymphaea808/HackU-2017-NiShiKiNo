Meteor.publish('threads',function(){
  return Threads.find();
})