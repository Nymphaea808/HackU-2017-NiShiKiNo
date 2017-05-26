if(Threads.find().count()===0){

  var ids=Threads.insert(
    {
      threadID: '1',
      customerID: {},
      threadDate: '2017/05/26',
      threadTitle:'カレーのアレ',
      threadCategories:{},
      threadComment:'カレーのルーを入れる，何か魔法のランプみたいなやつ探してます．',
      location:{},
      isClosed: false,
      threadStatus: 'processing',
      searchRange:{}
    }
  );
  console.log(ids);
  Posts.insert(
    {
      postID:'1',
      threadID:ids,
      postUser:{},
      postDate:'2017/05/26 09:00',
      replyID:{},
      postComment: 'カレー入れるアレありまぁす!!!'
    }
  );
  ids=Threads.insert(
    {
      threadID: '2',
      customerID: {},
      threadDate: '2017/05/24',
      threadTitle:'シンセのACアダプター',
      threadCategories:{},
      threadComment:`〇〇の機種に合うACアダプター売ってませんか?`,
      location:{},
      isClosed: true,
      threadStatus:'done',
      searchRange:{}
    }
  );
  Posts.insert(
    {
      postID:'2',
      threadID:ids,
      postUser:{},
      postDate:'2017/05/26 10:00',
      replyID:{},
      postComment: 'アダプター，うちで売ってます．'
    }
  );
  console.log(ids);

}
//if(Records.find().count() === 0) {
  //var userids = Records.insert({
    //userID: {},
    //username: 'Kiri Man',
    //address: 'Tokyo, Japan',
    //image: '',
    //comment: 'Hi! I am Kiri man'
  //});

  //console.log(userids);
//}
