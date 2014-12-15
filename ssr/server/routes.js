var css = Assets.getText('style.css');
var seoPicker = Picker.filter(function(req, res) {
  return /_escaped_fragment_/.test(req.url);
});

seoPicker.route('/', function(params, req, res) {
  var posts = Posts.find();
  var html = SSR.render('layout', {
    css: css,
    template: "home",
    data: {posts: posts}
  });

  res.end(html);
});

seoPicker.route('/post/:_id', function(params, req, res) {
  var post = Posts.findOne(params._id);
  var html = SSR.render('layout', {
    css: css,
    template: "singlepost",
    data: {post: post}
  });

  res.end(html);
});