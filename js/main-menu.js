/**
 * @file
 * Set-up main menu as a mobile-style burger menu.
 */

(function ($) {
  $(document).ready(function() {

    // Add the open/close behaviour.
    $('#main-menu-button')
      .attr('aria-controls', 'main-menu-list')
      .attr('aria-expanded', false)
      .click(function(event) {
        if (menuDisplayed === true) {
          $(this).attr('aria-expanded', false)
          $('#main-menu-list').hide();
          menuDisplayed = false;
        }
        else {
          $(this).attr('aria-expanded', true)
          $('#main-menu-list').show();
          menuDisplayed = true;
        }
      });

    // Initialize.
    var menuDisplayed = false;
    $('#main-menu-list').hide();
  });
})(jQuery);
