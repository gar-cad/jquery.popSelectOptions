(function ($) {
    // jquery plugin to populate dropdown from dictionary
	$.fn.popSelectOptions = function (options) {
		var settings = $.extend({
			options: [{'value': '-', 'label': 'Default option'}], 'default': 0 
        }, options),
            html = "",
            counter = 0;
		settings.options.forEach(function (entry) {
			html += "<option value=\"" + entry.value + "\"" + (counter == settings.default ? " selected" : "") + ">" + entry.label + "</option>";
            counter ++;
		});
		
		return this.each(function () {
			$(this).html(html);
		});
	};
}(jQuery));