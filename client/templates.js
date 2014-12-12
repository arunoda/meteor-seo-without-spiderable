Template.home.helpers({
  posts: function() {
    return Posts.find();
  }
});