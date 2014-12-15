Template.layout.events({
  "click #ssr-link": function(e) {
    e.preventDefault();
    location.href = location.href + "?_escaped_fragment_=";
  }
});