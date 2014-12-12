var css = Assets.getText('style.css');
Router.route('/', function () {
  if(canSSR(this.url)) {
    var posts = Posts.find();
    var html = SSR.render('layout', {
      css: css,
      template: "home",
      data: {posts: posts}
    });

    this.response.end(html);
  } else {
    this.next();
  }
}, {where: 'server'});

Router.route('/singlepost', function () {
  if(canSSR(this.url)) {
    var html = SSR.render('layout', {
      css: css,
      template: "singlepost"
    });
    this.response.end(html);
  } else {
    this.next();
  }
}, {where: 'server'});


function canSSR (url) {
  return /_escaped_fragment_/.test(url);
}