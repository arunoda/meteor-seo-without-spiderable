Router.configure({
  waitOn: function() {
    return Meteor.subscribe("posts");
  },
  layoutTemplate: "layout"
});

Router.route('/', {
  template: "home",
  fastRender: true
});

Router.route('/post/:_id', {
  template: "singlepost",
  fastRender: true
});