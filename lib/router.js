Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn:function() {return Meteor.subscribe('threads');},
  notFoundTemplate: 'notFound',
});


Router.route('/',{name:'welcome'});
// アバウトボタン
Router.route('/about',{name:'aboutApp'});

// カスタマーのプロフィールを編集する
Router.route('/edit', {
  name:'showProfile',
  data: function() {
    console.log(this.params);
    console.log(this);
    return; 
  }
});

// カスタマースレッド一覧
Router.route('/cthread',{name:'customerThreadList'});

// カスタマースレッド詳細
Router.route('/cthread/:_id',
{
  subscriptions:function(){
    return Meteor.subscribe('posts',{threadID:this.params._id});
    // this.subscribe('posts',this.params._id);
  },

  name:'customerThreadDetail',
  data: function(){
    var currentID= this.params._id;

    // console.log('currentID'+currentID);
    var foundThread=Threads.findOne({_id: currentID});
    var foundPosts=Posts.find({threadID: currentID});
    // console.log('found thread '+foundID);
    // console.log('found posts '+foundPosts.fetch());
    return foundThread;
  }
});

// Router.map(function() {
//   this.route('customerThreadDetail', {
//     path: '/cthread/cdetail/:_id',
//     data: function() { return Threads.findOne(this.params._id); }
//   });
// });

// 新しいカスタマースレッド作成
Router.route('/cthreadadd',{name:'customerThreadAdd'});

// カスタマースレッドの編集画面
Router.route('/cthread/edit/:_id',
{
  name:'customerThreadEdit',
  data: function(){
    console.log(this.params);
    console.log(Threads.findOne({_id: this.params._id}));
    return Threads.findOne({_id: this.params._id});
  }
});

// プロバイダスレッド一覧
Router.route('/pthread',{name:'providerThreadList'});
