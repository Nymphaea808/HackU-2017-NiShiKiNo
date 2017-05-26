import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Records = new Mongo.Collection('records');

RecordSchema = new SimpleSchema({
  userID: {
    type: String,
    autoform: {
      type: 'hidden',
      label: false
    },
    autoValue: function () { 
      return this.userId;
    }
  }, 
  username: {
    type: String,
    label: '名前'
  },
  address: {
    type: String,
    label: '住所'
  },
  image: {
    type: String,
    label: 'プロフィール画像'
  },
  comment: {
    type: String,
    label: 'ひとこと'
  }
});


Meteor.methods({
  updateProfile: function(profileAttributes) {
    check(Meteor.userId(), String);
    // check(profileAttributes, {
    //   userID: String,
    // })
    console.log(this.userId);
    console.log(profileAttributes);
    var user = Meteor.user();
    //var profile = _.extend(profileAttributes, {
      //userID: Meteor.userId(),
    //});
    //console.log(profile);
    //profileId = Records.update(
      //{ userID: this.userId}, 
      //{ $set: 
        //{
          //username: profileAttributes.username,
          //address: profileAttributes.address,
          //image: '',
          //comment: profileAttributes.comment
        //}
      //}
    //);
    //console.log(profileId);
    //return profileId;
    

  }
});
