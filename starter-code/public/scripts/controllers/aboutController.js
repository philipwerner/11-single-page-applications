'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // DONE: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.init = function() {
    console.log('about page');
    $('#articles').hide();
    $('#about').fadeIn(1000);
  };

  module.aboutController = aboutController;
})(app);
