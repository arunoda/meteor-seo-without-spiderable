Router.configure({
  waitOn: function() {
    return Meteor.subscribe("posts");
  },
  layoutTemplate: "layout"
});

Router.route('/', function () {
  this.render("home");
});

Router.route('/singlepost', function () {
  this.render("singlepost");
});