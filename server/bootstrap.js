if(!Posts.findOne()) {
  Posts.insert({name: "This is the post 1"});
  Posts.insert({name: "This is the post 2"});
}