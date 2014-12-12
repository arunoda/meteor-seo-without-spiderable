SSR.compileTemplate('layout', Assets.getText('layout.html'));
Template.layout.helpers({
  getDocType: function() {
    return "<!DOCTYPE html>";
  }
});

SSR.compileTemplate('home', Assets.getText('home.html'));
SSR.compileTemplate('singlepost', Assets.getText('singlepost.html'));