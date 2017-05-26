Template.inputForm.events({
  'submit #inputForm':function(e){
    e.preventDefault();//formのsubmit処理無効化
    Router.go('customerThreadList');
  },
});

Template.inputForm.onCreated(function() {
});
