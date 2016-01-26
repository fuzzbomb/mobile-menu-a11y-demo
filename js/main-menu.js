/**
 * @file
 * Set-up main menu as a mobile-style burger menu.
 */

(function ($) {
  $(document).ready(function() {

    // Initialize.
    var menuDisplayed = false;
    $('#main-menu nav').hide();

    // Add the open/close behaviour.
    $('#main-menu-button')
      .keypress( function(event) {
        // Only respond to enter or spacebar keys
        if (event.which == 13 || event.which == 32) {
          // Spacebar usually triggers page scrolling.
          event.preventDefault();
          $(this).trigger('click');
        }
      })
      .click(function(event) {
        if (menuDisplayed === true) {
          $('#main-menu nav').hide();
          menuDisplayed = false;
        }
        else {
          $('#main-menu nav').show();
          menuDisplayed = true;
        }
      });
  });
})(jQuery);
