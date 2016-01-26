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
      .attr('aria-controls', 'main-menu-nav')
      .attr('aria-expanded', false)
      .click(function(event) {
        if (menuDisplayed === true) {
          $(this).attr('aria-expanded', false)
          $('#main-menu nav').hide();
          menuDisplayed = false;
        }
        else {
          $(this).attr('aria-expanded', true)
          $('#main-menu nav').show();
          menuDisplayed = true;
        }
      });
  });
})(jQuery);
