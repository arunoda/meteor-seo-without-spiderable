var css = Assets.getText('style.css');

Router.route('/', function () {
  var posts = Posts.find();
  var html = SSR.render('layout', {
    css: css,
    template: "home",
    data: {posts: posts}
  });

  this.response.end(html);
}, {where: 'server'});

Router.route('/singlepost', function () {
  var html = SSR.render('layout', {
    css: css,
    template: "singlepost"
  });
  this.response.end(html);
}, {where: 'server'});