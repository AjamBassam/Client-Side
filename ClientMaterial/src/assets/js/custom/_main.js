    "use strict";
// Javascript String constants for translation
THEMEREX_GLOBALS["strings"] = {
	bookmark_add: 		"Add the bookmark",
	bookmark_added:		"Current page has been successfully added to the bookmarks. You can see it in the right panel on the tab \'Bookmarks\'",
	bookmark_del: 		"Delete this bookmark",
	bookmark_title:		"Enter bookmark title",
	bookmark_exists:		"Current page already exists in the bookmarks list",
	search_error:		"Error occurs in AJAX search! Please, type your query and press search icon for the traditional search way.",
	email_confirm:		"On the e-mail address <b>%s</b> we sent a confirmation email.<br>Please, open it and click on the link.",
	reviews_vote:		"Thanks for your vote! New average rating is:",
	reviews_error:		"Error saving your vote! Please, try again later.",
	error_like:			"Error saving your like! Please, try again later.",
	error_global:		"Global error text",
	name_empty:			"The name can\'t be empty",
	name_long:			"Too long name",
	email_empty:			"Too short (or empty) email address",
	email_long:			"Too long email address",
	email_not_valid:		"Invalid email address",
	subject_empty:		"The subject can\'t be empty",
	subject_long:		"Too long subject",
	criteria_empty:		"The predefined destinations can\'t be empty",
	criteria_long:		"Too long predefined destinations",
	date_start_empty:		"The date start can\'t be empty",
	date_end_empty:		"The date end can\'t be empty",
	text_empty:			"The message text can\'t be empty",
	text_long:			"Too long message text",
	send_complete:		"Send message complete!",
	send_order_complete:	"Your request has been received. We will get back to you asap!",
	send_error:			"Transmit failed!",
	login_empty:			"The Login field can\'t be empty",
	login_long:			"Too long login field",
	password_empty:		"The password can\'t be empty and shorter then 5 characters",
	password_long:		"Too long password",
	password_not_equal:	"The passwords in both fields are not equal",
	registration_success:"Registration success! Please log in!",
	registration_failed:	"Registration failed!",
	geocode_error:		"Geocode was not successful for the following reason:",
	googlemap_not_avail:	"Google map API not available!",
	editor_save_success:	"Post content saved!",
	editor_save_error:	"Error saving post data!",
	editor_delete_post:	"You really want to delete the current post?",
	editor_delete_post_header:"Delete post",
	editor_delete_success:	"Post deleted!",
	editor_delete_error:		"Error deleting post!",
	editor_caption_cancel:	"Cancel",
	editor_caption_close:	"Close"
};

// Theme base font
if (THEMEREX_GLOBALS['theme_font']=='') THEMEREX_GLOBALS['theme_font'] = 'Cabin';
THEMEREX_GLOBALS['main_color'] = '#f15a23';
THEMEREX_GLOBALS['accent_color'] = '#63cac5';
THEMEREX_GLOBALS['vc_edit_mode']		= false;

// Theme skin
THEMEREX_GLOBALS['theme_font']		= '';
THEMEREX_GLOBALS['theme_skin']		= 'solaris';
THEMEREX_GLOBALS['theme_skin_bg']	= '';


// AJAX parameters
THEMEREX_GLOBALS['ajax_url']			= '#';
THEMEREX_GLOBALS['ajax_nonce']		= 'a78373a07c';
THEMEREX_GLOBALS['ajax_nonce_editor'] = '3b7b2a8204';

// Site base url
THEMEREX_GLOBALS['site_url']			= '#';

// Slider height
THEMEREX_GLOBALS['slider_height']	= 100;

// System message
THEMEREX_GLOBALS['system_message']	= {
	message: '',
	status: '',
	header: ''
};

// User logged in
THEMEREX_GLOBALS['user_logged_in']	= false;

// Show table of content for the current page
THEMEREX_GLOBALS['toc_menu']		= 'fixed';
THEMEREX_GLOBALS['toc_menu_home']	= false;
THEMEREX_GLOBALS['toc_menu_top']	= false;

// Fix main menu

if ((jQuery("body.error404")).length > 0 || (jQuery("body.no_fix_menu")).length > 0) {
	THEMEREX_GLOBALS['menu_fixed']		= false;
}else {
	THEMEREX_GLOBALS['menu_fixed']		= true;
}

// Use responsive version for main menu
THEMEREX_GLOBALS['menu_relayout']	= 1000;
THEMEREX_GLOBALS['menu_responsive']	= 1120;
THEMEREX_GLOBALS['menu_slider']     = false;

// Right panel demo timer
THEMEREX_GLOBALS['demo_time']		= 0;

// Video and Audio tag wrapper
THEMEREX_GLOBALS['media_elements_enabled'] = true;

// Use AJAX search
THEMEREX_GLOBALS['ajax_search_enabled'] 	= false;
THEMEREX_GLOBALS['ajax_search_min_length']	= 3;
THEMEREX_GLOBALS['ajax_search_delay']		= 200;

// Css Animation
THEMEREX_GLOBALS['css_animation']      = true;
THEMEREX_GLOBALS['menu_animation_in']  = 'slideInUp';
THEMEREX_GLOBALS['menu_animation_out'] = 'fadeOut';

// Popup windows engine
THEMEREX_GLOBALS['popup_engine']	= 'magnific';
THEMEREX_GLOBALS['popup_gallery']	= true;

// E-mail mask
THEMEREX_GLOBALS['email_mask']		= '^([a-zA-Z0-9_\-]+\.)*[a-zA-Z0-9_\-]+@[a-z0-9_\-]+(\.[a-z0-9_\-]+)*\.[a-z]{2,6}$';

// Messages max length
THEMEREX_GLOBALS['contacts_maxlength']	= 1000;
THEMEREX_GLOBALS['comments_maxlength']	= 1000;

// Remember visitors settings
THEMEREX_GLOBALS['remember_visitors_settings']	= false;
THEMEREX_GLOBALS['admin_mode']			= false;
THEMEREX_GLOBALS['isotope_resize_delta']	= 0.3;
THEMEREX_GLOBALS['error_message_box']	= null;
THEMEREX_GLOBALS['viewmore_busy']		= false;
THEMEREX_GLOBALS['video_resize_inited']	= false;
THEMEREX_GLOBALS['top_panel_height']		= 0;

jQuery(window).load(function() {
    "use strict";
});

jQuery(document).ready(function() {
    "use strict";
	main_slider_init();
	price_filter();
	hover_mobile();
	woo_review_star();
	reviews_stars();
	photostack_init();
	disable_drag_n_drop();
});

/*Main slider*/
function main_slider_init() {
    if (jQuery("#mainslider_1").length > 0) {


		var setREVStartSize = function() {
			var	tpopt = new Object();
				tpopt.startwidth = 1920;
				tpopt.startheight = 800;
				tpopt.container = jQuery('#rev_slider_4_1');
				tpopt.fullScreen = "on";
				tpopt.forceFullWidth="off";

			tpopt.container.closest(".rev_slider_wrapper").css({height:tpopt.container.height()});tpopt.width=parseInt(tpopt.container.width(),0);tpopt.height=parseInt(tpopt.container.height(),0);tpopt.bw=tpopt.width/tpopt.startwidth;tpopt.bh=tpopt.height/tpopt.startheight;if(tpopt.bh>tpopt.bw)tpopt.bh=tpopt.bw;if(tpopt.bh<tpopt.bw)tpopt.bw=tpopt.bh;if(tpopt.bw<tpopt.bh)tpopt.bh=tpopt.bw;if(tpopt.bh>1){tpopt.bw=1;tpopt.bh=1}if(tpopt.bw>1){tpopt.bw=1;tpopt.bh=1}tpopt.height=Math.round(tpopt.startheight*(tpopt.width/tpopt.startwidth));if(tpopt.height>tpopt.startheight&&tpopt.autoHeight!="on")tpopt.height=tpopt.startheight;if(tpopt.fullScreen=="on"){tpopt.height=tpopt.bw*tpopt.startheight;var cow=tpopt.container.parent().width();var coh=jQuery(window).height();if(tpopt.fullScreenOffsetContainer!=undefined){try{var offcontainers=tpopt.fullScreenOffsetContainer.split(",");jQuery.each(offcontainers,function(e,t){coh=coh-jQuery(t).outerHeight(true);if(coh<tpopt.minFullScreenHeight)coh=tpopt.minFullScreenHeight})}catch(e){}}tpopt.container.parent().height(coh);tpopt.container.height(coh);tpopt.container.closest(".rev_slider_wrapper").height(coh);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(coh);tpopt.container.css({height:"100%"});tpopt.height=coh;}else{tpopt.container.height(tpopt.height);tpopt.container.closest(".rev_slider_wrapper").height(tpopt.height);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(tpopt.height);}
		};

		/* CALL PLACEHOLDER */
		setREVStartSize();


		var tpj=jQuery;
		tpj.noConflict();
		var revapi4;

		tpj(document).ready(function() {

		if(tpj('#rev_slider_4_1').revolution == undefined){
			revslider_showDoubleJqueryError('#rev_slider_4_1');
		}else{
		   	revapi4 = tpj('#rev_slider_4_1').show().revolution(
				{	
					dottedOverlay:"none",
					delay:9000,
					startwidth:1920,
					startheight:800,
					hideThumbs:200,
					thumbWidth:100,
					thumbHeight:50,
					thumbAmount:3,
					simplifyAll:"off",
					navigationType:"none",
					navigationArrows:"none",
					navigationStyle:"round",
					touchenabled:"on",
					onHoverStop:"on",
					nextSlideOnWindowFocus:"off",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					drag_block_vertical: false,
					keyboardNavigation:"on",
					navigationHAlign:"center",
					navigationVAlign:"bottom",
					navigationHOffset:0,
					navigationVOffset:20,
					soloArrowLeftHalign:"left",
					soloArrowLeftValign:"center",
					soloArrowLeftHOffset:40,
					soloArrowLeftVOffset:0,
					soloArrowRightHalign:"right",
					soloArrowRightValign:"center",
					soloArrowRightHOffset:40,
					soloArrowRightVOffset:0,
					shadow:0,
					fullWidth:"off",
					fullScreen:"on",
					spinner:"spinner0",
					stopLoop:"off",
					stopAfterLoops:-1,
					stopAtSlide:-1,
					shuffle:"off",
					forceFullWidth:"off",
					fullScreenAlignForce:"off",
					minFullScreenHeight:"",
					hideThumbsOnMobile:"off",
					hideNavDelayOnMobile:1500,
					hideBulletsOnMobile:"off",
					hideArrowsOnMobile:"off",
					hideThumbsUnderResolution:0,
					fullScreenOffsetContainer: "",
					fullScreenOffset: "",
					hideSliderAtLimit:0,
					hideCaptionAtLimit:0,
					hideAllCaptionAtLilmit:0,
					startWithSlide:0
				});
			}
		});
	}

	if (jQuery("#mainslider_2").length > 0) {
		var setREVStartSize = function() {
			var	tpopt = new Object();
				tpopt.startwidth = 1240;
				tpopt.startheight = 600;
				tpopt.container = jQuery('#rev_slider_6_1');
				tpopt.fullScreen = "on";
				tpopt.forceFullWidth="off";

			tpopt.container.closest(".rev_slider_wrapper").css({height:tpopt.container.height()});tpopt.width=parseInt(tpopt.container.width(),0);tpopt.height=parseInt(tpopt.container.height(),0);tpopt.bw=tpopt.width/tpopt.startwidth;tpopt.bh=tpopt.height/tpopt.startheight;if(tpopt.bh>tpopt.bw)tpopt.bh=tpopt.bw;if(tpopt.bh<tpopt.bw)tpopt.bw=tpopt.bh;if(tpopt.bw<tpopt.bh)tpopt.bh=tpopt.bw;if(tpopt.bh>1){tpopt.bw=1;tpopt.bh=1}if(tpopt.bw>1){tpopt.bw=1;tpopt.bh=1}tpopt.height=Math.round(tpopt.startheight*(tpopt.width/tpopt.startwidth));if(tpopt.height>tpopt.startheight&&tpopt.autoHeight!="on")tpopt.height=tpopt.startheight;if(tpopt.fullScreen=="on"){tpopt.height=tpopt.bw*tpopt.startheight;var cow=tpopt.container.parent().width();var coh=jQuery(window).height();if(tpopt.fullScreenOffsetContainer!=undefined){try{var offcontainers=tpopt.fullScreenOffsetContainer.split(",");jQuery.each(offcontainers,function(e,t){coh=coh-jQuery(t).outerHeight(true);if(coh<tpopt.minFullScreenHeight)coh=tpopt.minFullScreenHeight})}catch(e){}}tpopt.container.parent().height(coh);tpopt.container.height(coh);tpopt.container.closest(".rev_slider_wrapper").height(coh);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(coh);tpopt.container.css({height:"100%"});tpopt.height=coh;}else{tpopt.container.height(tpopt.height);tpopt.container.closest(".rev_slider_wrapper").height(tpopt.height);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(tpopt.height);}
		};

		/* CALL PLACEHOLDER */
		setREVStartSize();


		var tpj=jQuery;
		tpj.noConflict();
		var revapi6;

		tpj(document).ready(function() {

		if(tpj('#rev_slider_6_1').revolution == undefined){
			revslider_showDoubleJqueryError('#rev_slider_6_1');
		}else{
		   revapi6 = tpj('#rev_slider_6_1').show().revolution(
			{	
				dottedOverlay:"none",
				delay:9000,
				startwidth:1240,
				startheight:600,
				hideThumbs:200,
				thumbWidth:100,
				thumbHeight:50,
				thumbAmount:3,
				simplifyAll:"off",
				navigationType:"none",
				navigationArrows:"none",
				navigationStyle:"round",
				touchenabled:"on",
				onHoverStop:"on",
				nextSlideOnWindowFocus:"off",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				drag_block_vertical: false,
				keyboardNavigation:"on",
				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:20,
				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,
				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,
				shadow:0,
				fullWidth:"off",
				fullScreen:"on",
				spinner:"spinner0",
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				shuffle:"off",
				forceFullWidth:"off",
				fullScreenAlignForce:"off",
				minFullScreenHeight:"",
				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResolution:0,
				fullScreenOffsetContainer: "",
				fullScreenOffset: "",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:481,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0					
			});
			}
		});
	}

}

// Price range slider
function price_filter() {
    if (jQuery("#slider-range").length > 0) {
        jQuery("#slider-range").slider({
            range: true,
            min: 0,
            max: 250,
            values: [0, 250],
            slide: function(event, ui) {
                jQuery("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        jQuery("#amount").val("$" + jQuery("#slider-range").slider("values", 0) +
            " - $" + jQuery("#slider-range").slider("values", 1));
    }
}

// Hover effects on mobile
function hover_mobile() {
    if (jQuery("#mobile_tap_hover").length > 0) {
        $('a.taphover').on("touchstart", function(e) {
            var link = $(this); //preselect the link
            if (link.hasClass('hover')) {
                return true;
            } else {
                link.addClass("hover");
                //$(this).parent().css({'z-index': 1});
                $('a.taphover').not(this).removeClass("hover");
                e.preventDefault();
                return false; //extra, and to make sure the function has consistent return points
            }
        });

        $('.post_nav.taphover').on("touchstart", function(e) {
            var link = $(this); //preselect the link
            if (link.hasClass('hover')) {
                $('.post_nav_next.taphover').not(this).removeClass("hover");
                $('.post_nav_prev.taphover').not(this).removeClass("hover");
                return true;
            } else {
                link.addClass("hover");
                $('.post_nav.taphover').not(this).removeClass("hover");
                e.preventDefault();
                return false; //extra, and to make sure the function has consistent return points
            }
        });
    }
}

// Select review stars
function woo_review_star() {
    if (jQuery(".stars", "#review_form").length > 0) {
        $(".stars").find("a").on("click", function() {
            $("a.active").removeClass("active");
            $(this).addClass("active");
            return false;
        });
    }
}


/*reviews stars*/
function reviews_stars() {
    "use strict";
    if (jQuery(".reviews_stars").length > 0) {
        jQuery(".reviews_stars").each(function() {
            var percent = jQuery(this).attr("data-mark");
            jQuery(this).find('.reviews_stars_hover').css({'width': percent + '%'});
        });
    }
}

function photostack_init() {
	 if (jQuery("#sc_gallery_1704673368").length > 0) {
		jQuery(document.getElementById( "sc_gallery_1704673368" )).parent(".sc_gallery_area").height("auto");

		new Photostack( document.getElementById( "sc_gallery_1704673368" ), {
			callback : function( item ) {
			}
		});
	}
}

function disable_drag_n_drop() {
	jQuery(document).on("dragstart", function(e) {
	     if (e.target.nodeName.toUpperCase() == "IMG") {
	         return false;
	     }
	});
}

