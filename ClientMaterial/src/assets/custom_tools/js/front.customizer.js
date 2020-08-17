/* Add custom sidebar */
var custom_options ='<div class="custom_options_shadow"></div>';
custom_options  +='<div id="custom_options" class="custom_options co_light">';
custom_options  +=	'<a href="#" id="co_toggle" class="icon-params"></a>';
custom_options  +=	'<div class="co_header">';
custom_options  +=		'<div class="co_title">';
custom_options  +=			'<span>Style switcher</span>';
custom_options  +=			'<!--<a href="#" id="co_theme_reset" class="co_reset icon-retweet" title="Reset to defaults">Reset</a>-->';
custom_options  +=		'</div>';
custom_options  +=	'</div>';
custom_options  +=	'<div id="sc_custom_scroll" class="co_options sc_scroll sc_scroll_vertical">';
custom_options  +=		'<div class="sc_scroll_wrapper swiper-wrapper">';
custom_options  +=			'<div class="sc_scroll_slide swiper-slide">';
custom_options  +=				'<input type="hidden" id="co_site_url" name="co_site_url" value="#" />';
custom_options  +=				'<div class="co_section">';
custom_options  +=					'<div class="co_label">Body styles</div>';
custom_options  +=					'<div class="co_switch_box co_switch_horizontal co_switch_columns_3" data-options="body_style">';
custom_options  +=						'<div class="switcher" data-value="body_style_fullscreen">';
custom_options  +=						'</div>';
custom_options  +=						'<a href="#" data-value="body_style_boxed">Boxed</a>';
custom_options  +=						'<a href="#" data-value="body_style_wide">Wide</a>';
custom_options  +=						'<a href="#" data-value="body_style_fullscreen">Fullwide</a>';
custom_options  +=					'</div>';
custom_options  +=				'</div>';
custom_options  +=				'<div class="co_section">';
custom_options  +=					'<div class="co_label">Custom Color</div>';
custom_options  +=					'<div class="co_colorpic_list">';
custom_options  +=						'<div class="iColorPicker" data-options="main_color" data-value="#f15a23">';
custom_options  +=							'<span>Main color</span>';
custom_options  +=						'</div>';
custom_options  +=						'<div class="iColorPicker" data-options="accent_color" data-value="#63cac5">';
custom_options  +=							'<span>Accent color</span>';
custom_options  +=						'</div>';
custom_options  +=					'</div>';
custom_options  +=				'</div>';
custom_options  +=				'<div class="co_section">';
custom_options  +=					'<div class="co_label">Background image</div>';
custom_options  +=					'<div id="co_bg_images_list" class="co_image_check" data-options="bg_image">';
custom_options  +=						'<a href="#" id="pattern_1" class="co_image_wrapper" style="background-image: url(custom_tools/images/bg/image_1_thumb.jpg)">';
custom_options  +=							'<span class="co_bg_preview" style="background-image: url(custom_tools/images/bg/image_1.jpg)"></span>';
custom_options  +=						'</a>';
custom_options  +=						'<a href="#" id="pattern_2" class="co_image_wrapper" style="background-image: url(custom_tools/images/bg/image_2_thumb.jpg)">';
custom_options  +=							'<span class="co_bg_preview" style="background-image: url(custom_tools/images/bg/image_2.jpg)"></span>';
custom_options  +=						'</a>';
custom_options  +=						'<a href="#" id="pattern_3" class="co_image_wrapper" style="background-image: url(custom_tools/images/bg/image_3_thumb.jpg)">';
custom_options  +=							'<span class="co_bg_preview" style="background-image: url(custom_tools/images/bg/image_3.jpg)"></span>';
custom_options  +=						'</a>';
custom_options  +=					'</div>';
custom_options  +=				'</div>';
custom_options  +=				'<div class="co_section">';
custom_options  +=					'<div class="co_label">Patterns</div>';
custom_options  +=					'<div id="co_bg_pattern_list" class="co_image_check" data-options="bg_pattern">';
custom_options  +=						'<a href="#" id="pattern_1" class="co_pattern_wrapper" style="background-image: url(custom_tools/images/bg/pattern_1_thumb.png)">';
custom_options  +=							'<span class="co_bg_preview" style="background-image: url(custom_tools/images/bg/pattern_1.png)"></span>';
custom_options  +=						'</a>';
custom_options  +=						'<a href="#" id="pattern_2" class="co_pattern_wrapper" style="background-image: url(custom_tools/images/bg/pattern_2_thumb.png)">';
custom_options  +=							'<span class="co_bg_preview" style="background-image: url(custom_tools/images/bg/pattern_2.png)"></span>';
custom_options  +=						'</a>';
custom_options  +=						'<a href="#" id="pattern_3" class="co_pattern_wrapper" style="background-image: url(custom_tools/images/bg/pattern_3_thumb.png)">';
custom_options  +=							'<span class="co_bg_preview" style="background-image: url(custom_tools/images/bg/pattern_3.png)"></span>';
custom_options  +=						'</a>';
custom_options  +=						'<a href="#" id="pattern_4" class="co_pattern_wrapper" style="background-image: url(custom_tools/images/bg/pattern_4_thumb.png)">';
custom_options  +=							'<span class="co_bg_preview" style="background-image: url(custom_tools/images/bg/pattern_4.png)"></span>';
custom_options  +=						'</a>';
custom_options  +=						'<a href="#" id="pattern_5" class="co_pattern_wrapper" style="background-image: url(custom_tools/images/bg/pattern_5_thumb.png)">';
custom_options  +=							'<span class="co_bg_preview" style="background-image: url(custom_tools/images/bg/pattern_5.png)"></span>';
custom_options  +=						'</a>';
custom_options  +=					'</div>';
custom_options  +=				'</div>';
custom_options  +=			'</div>';
custom_options  +=		'</div>';
custom_options  +=		'<div id="sc_custom_scroll_bar" class="sc_scroll_bar sc_scroll_bar_vertical sc_custom_scroll_bar"></div>';
custom_options  +=	'</div>';
custom_options  +='</div>';

jQuery('body').append(custom_options);

// Customization panel
jQuery(document).ready(function() {
	"use strict";

	// Open/close panel
	if (jQuery('#custom_options').length > 0) {

		jQuery('#co_toggle').click(function(e) {
			"use strict";
			var co = jQuery('#custom_options').eq(0);
			if (co.hasClass('opened')) {
				co.removeClass('opened');
				jQuery('body').removeClass('custom_options_opened');
				jQuery('.custom_options_shadow').fadeOut(500);
			} else {
				co.addClass('opened');
				jQuery('body').addClass('custom_options_opened');
				jQuery('.custom_options_shadow').fadeIn(500);
			}
			e.preventDefault();
			return false;
		});
		jQuery('.custom_options_shadow').click(function(e) {
			"use strict";
			jQuery('#co_toggle').trigger('click');
			e.preventDefault();
			return false;
		});

		// First open custom panel
		if (THEMEREX_GLOBALS['demo_time'] > 0) {
			if (themerex_get_cookie('themerex_custom_options_demo') != 1 ){
				setTimeout(function() { jQuery("#co_toggle").trigger('click'); }, THEMEREX_GLOBALS['demo_time']);
				themerex_set_cookie('themerex_custom_options_demo', '1', 1);
			}
		}

		themerex_custom_options_reset(!THEMEREX_GLOBALS['remember_visitors_settings']);

		jQuery('#custom_options #co_theme_reset').click(function (e) {
			"use strict";
			jQuery('#custom_options .co_section').each(function () {
				"use strict";
				jQuery(this).find('div[data-options]').each(function() {
					var opt = jQuery(this).data('options');
					if (THEMEREX_GLOBALS['remember_visitors_settings']) 
						themerex_del_cookie(opt);
					else
						themerex_custom_options_remove_option_from_url(opt);
				});
			});
			themerex_custom_options_show_loader();
			//window.location.reload();
			window.location.href = jQuery('#co_site_url').val();
			e.preventDefault();
			return false;
		});

		// Switcher
		var swither = jQuery("#custom_options .co_switch_box:not(.inited)" )
		if (swither.length > 0) {
			swither.each(function() {
				jQuery(this).addClass('inited');
				themerex_custom_options_switcher(jQuery(this));
			});

            jQuery("#custom_options .co_switch_box a" ).on("click", function(e) {
                "use strict";
                var value = jQuery(this).data('value');
                var wrap = jQuery(this).parent('.co_switch_box');
                var options = wrap.data('options');
                wrap.find('.switcher').data('value', value);
                jQuery(document).find("body").removeClass("bg_pattern_0 bg_pattern_1 bg_pattern_2 bg_pattern_3 bg_pattern_4 bg_pattern_5 bg_pattern_6 bg_pattern_7 bg_pattern_8 bg_pattern_9 bg_image_1 bg_image_2 bg_image_3 bg_image_4 bg_image_5 bg_image_6 bg_image_7 bg_image_8 body_style_wide body_style_boxed body_style_fullscreen").addClass( value );
                jQuery(document).find("#custom_options .switcher").css("left", "");
                var page_content = jQuery('body').eq(0);
                if (page_content.hasClass("body_style_wide")) {
                    jQuery(document).find(".page_content").addClass("container");
                } else {
                        jQuery(document).find(".page_content").removeClass('container');
                    }
                var page_content = jQuery('body').eq(0);
                if (page_content.hasClass("body_style_boxed")) {
                    jQuery(document).find(".page_content_wrap").addClass("container");
                } else {}
                if (page_content.hasClass("body_style_wide")) {
                    jQuery(document).find(".page_content_wrap").addClass("container");
                } else {
                        jQuery(document).find(".page_wrap").removeClass('container');
                }
                if (page_content.hasClass("body_style_fullscreen")) {
                    jQuery(document).find(".page_content_wrap").removeClass('container');
                } else {}
                e.preventDefault();
                return false;
            });
		}

		// ColorPicker
		themerex_color_picker();
		jQuery('#custom_options .iColorPicker').each(function() {
			"use strict";
			jQuery(this).css('backgroundColor', jQuery(this).data('value'));
		});

		jQuery('#custom_options .iColorPicker').click(function (e) {
			"use strict";
			themerex_color_picker_show(null, jQuery(this), function(fld, clr) {
				"use strict";
				var val = fld.data('value');
				var options = fld.data('options');
				fld.css('backgroundColor', clr);
				if (THEMEREX_GLOBALS['remember_visitors_settings']) themerex_set_cookie(options, clr, 1);
				if (options == 'bg_color') {
					if (THEMEREX_GLOBALS['remember_visitors_settings'])  {
						themerex_del_cookie('bg_image');
						themerex_del_cookie('bg_pattern');
					}
				}
				themerex_custom_options_reset(true);
				themerex_custom_options_apply_settings(options, clr);
			});
		});

		
		// Background patterns
        jQuery("#custom_options #co_bg_pattern_list a").on("click", function(b) {
            jQuery("#custom_options #co_bg_pattern_list .co_pattern_wrapper,#custom_options #co_bg_images_list .co_image_wrapper").removeClass("current");
            var a = jQuery(this).addClass("current");
            var c = a.attr("id").substr(-1);
            jQuery(document).find("body").removeClass("bg_pattern_0 bg_pattern_1 bg_pattern_2 bg_pattern_3 bg_pattern_4 bg_pattern_5 bg_pattern_6 bg_pattern_7 bg_pattern_8 bg_pattern_9 bg_image_1 bg_image_2 bg_image_3 bg_image_4 bg_image_5 bg_image_6 bg_image_7 bg_image_8 body_style_wide body_style_boxed body_style_fullscreen").addClass("bg_pattern_" + c);
            //jQuery(document).find(".body_wrap").addClass("container");
            jQuery(document).find("body").addClass("body_style_boxed");
            jQuery(document).find("#custom_options .switcher").css("left" , "0" , "!important");
            var page_content = jQuery('body').eq(0);
            if (page_content.hasClass("body_style_boxed")) {
                jQuery(document).find(".page_wrap").addClass("container");
            } else {
                    jQuery(document).find(".page_wrap").removeClass('container');
                }  
            b.preventDefault();
            return false
        });

		// Background images

        jQuery("#custom_options #co_bg_images_list a").on("click", function(b) {
            jQuery("#custom_options #co_bg_images_list .co_image_wrapper,#custom_options #co_bg_pattern_list .co_pattern_wrapper").removeClass("current");
            var a = jQuery(this).addClass("current");
            var c = a.attr("id").substr(-1);
            jQuery(document).find("body").removeClass("bg_pattern_0 bg_pattern_1 bg_pattern_2 bg_pattern_3 bg_pattern_4 bg_pattern_5 bg_pattern_6 bg_pattern_7 bg_pattern_8 bg_pattern_9 bg_image_1 bg_image_2 bg_image_3 bg_image_4 bg_image_5 bg_image_6 bg_image_7 bg_image_8 body_style_wide body_style_boxed body_style_fullscreen").addClass("bg_image_" + c);
            jQuery(document).find("body").addClass("body_style_boxed");
            jQuery(document).find("#custom_options .switcher").css("left" , "0" , "!important");
            var page_content = jQuery('body').eq(0);
            if (page_content.hasClass("body_style_boxed")) {
                jQuery(document).find(".page_wrap").addClass("container");
            } else {
                    jQuery(document).find(".page_wrap").removeClass('container');
                }              
            b.preventDefault();
            return false
        });

		jQuery('#custom_options #co_bg_pattern_list a, #custom_options #co_bg_images_list a, .iColorPicker').hover(
			function() {
				"use strict";
				jQuery(this).addClass('current');
			},
			function() {
				"use strict";
				jQuery(this).removeClass('current');
			}
		);
	}
});

jQuery(window).resize(function () {
	jQuery('#custom_options .sc_scroll').css('height',jQuery('#custom_options').height()-46);
});


// SwitchBox
function themerex_custom_options_switcher(wrap) {
	"use strict";
	var drag = wrap.find('.switcher').eq(0);
	var value = drag.data('value');
	var pos = wrap.find('a[data-value="'+value+'"]').position();
	if (pos != undefined) {
		drag.css({
			left: pos.left,
			top: pos.top
		});
	}
}

// Show Reset button
function themerex_custom_options_reset() {
	"use strict";

	var cooks = arguments[0] ? true : false;
	
	if (!cooks) {
		jQuery('#custom_options .co_section').each(function () {
			if (cooks) return;
	
			jQuery(this).find('div[data-options]').each(function() {
				var cook = themerex_get_cookie(jQuery(this).data('options'));
				if (cook != null && cook != undefined)
					cooks = true;			
			});
		});
	}
	if (cooks)
		jQuery('#custom_options').addClass('co_show_reset');			
	else
		jQuery('#custom_options').removeClass('co_show_reset');
}

// Remove specified option from URL
function themerex_custom_options_remove_option_from_url(option) {
	var pos = -1, pos2 = -1, pos3 = -1;
	var loc = jQuery('#co_site_url').val();
	if (loc && (pos = loc.indexOf('?')) > 0) {
		if ((pos2 = loc.indexOf(option, pos)) > 0) {
			if ((pos3 = loc.indexOf('&', pos2)) > 0)
				loc = loc.substr(0, pos2) + loc.substr(pos3);
			else
				loc = loc.substr(0, pos2);
		}
		jQuery('#co_site_url').val(loc);
	}
}

// Show Loader
function themerex_custom_options_show_loader() {
	jQuery('.custom_options_shadow').addClass('loading');
}

// Apply settings
function themerex_custom_options_apply_settings(option, val) {
	if (window.themerex_skin_customizer)
		themerex_skin_customizer(option, val);
	else {
		themerex_custom_options_show_loader();
		location.reload();
	}
}
