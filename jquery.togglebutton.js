/*
 * jQuery toggleButton Plugin
 *
 * Copyright (c) 2016 Sophie Idromenos <sophia.idro@gmail.com>
 * Licensed under the MIT license.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 */
(function( $ ) {
  $.fn.toggleButton = function(options) {
    var settings = $.extend({}, options );
    var btn = $(this);
    var sections = $(settings.sections.join(','));
    var showMoreClass = settings.className;

    btn.text(sections.hasClass(showMoreClass) ? settings.on : settings.off);
    sections.toggleClass(showMoreClass);

    return this;

  };

}( jQuery ));
