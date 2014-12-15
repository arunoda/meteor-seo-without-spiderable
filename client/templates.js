Template.home.helpers({
  posts: function() {
    return Posts.find();
  }
});

Template.singlepost.helpers({
  post: function() {
    var postId = Router.current().params._id;
    return Posts.findOne(postId);
  }
});