/**
 * @file
 * Set-up main menu as a mobile-style burger menu.
 */

(function ($) {
  $(document).ready(function() {

    // Initialize.
    $('#main-menu nav').hide();

    // Add the open/close behaviour.
    $('#main-menu-button').click(function(event) {
      $('#main-menu nav').toggle();
    });
  });
})(jQuery);
