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
        $(this).trigger('click');
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
