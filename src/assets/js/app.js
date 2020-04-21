(function ($) {
  "use strict";
  // Jquery clickable functions starts
  jQuery(document).ready(function ($) {
    $(".counter").counterUp({});

    $(".masonary-container").magnificPopup({
      gallery: {
        enabled: true,
      },
      zoom: {
        enabled: true,
        duration: 300,
        easing: "ease-in-out",
        opener: function (openerElement) {
          return openerElement.is("img") ?
            openerElement :
            openerElement.find("img");
        },
      },
      mainClass: "mfp-with-zoom",
      delegate: "a",
      type: "image",
    });
  });

  jQuery(window).load(function () {
    $(document).on("scroll", function () {
      if ($(this).scrollTop() > 100) {
        $("header").addClass("sticky");
      } else {
        $("header").removeClass("sticky");
      }
    });
  });
})(jQuery);
