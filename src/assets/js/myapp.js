function revslider_showDoubleJqueryError(sliderID) {
    var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
    errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
    errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option: <strong><b>Put JS Includes To Body</b></strong> option to true.";
    errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
    errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>"
    jQuery(sliderID).show().html(errorMessage);
}

var tpj = jQuery;
var revapi4;
tpj(document).ready(function () {
    if (tpj("#rev_slider_4_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_4_1");
    } else {
        revapi4 = tpj("#rev_slider_4_1").show().revolution({
            sliderType: "standard",
            sliderLayout: "fullwidth",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {
                keyboardNavigation: "on",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {
                    style: "gyges",
                    enable: true,
                    hide_onmobile: false,
                    hide_over: 778,
                    hide_onleave: false,
                    tmp: '',
                    left: {
                        h_align: "right",
                        v_align: "bottom",
                        h_offset: 40,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "bottom",
                        h_offset: 0,
                        v_offset: 0
                    }
                },
                tabs: {
                    style: "hebe",
                    enable: true,
                    width: 250,
                    height: 100,
                    min_width: 250,
                    wrapper_padding: 0,
                    wrapper_color: "transparent",
                    wrapper_opacity: "0",
                    tmp: '<div class="tp-tab-title">{{param1}}</div><div class="tp-tab-desc">{{title}}</div>',
                    visibleAmount: 3,
                    hide_onmobile: true,
                    hide_under: 778,
                    hide_onleave: false,
                    hide_delay: 200,
                    direction: "vertical",
                    span: false,
                    position: "inner",
                    space: 10,
                    h_align: "right",
                    v_align: "center",
                    h_offset: 30,
                    v_offset: 0
                }
            },
            responsiveLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [500, 450, 400, 350],
            lazyType: "none",
            parallax: {
                type: "scroll",
                origo: "enterpoint",
                speed: 400,
                levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "on",
            stopAfterLoops: 0,
            stopAtSlide: 1,
            shuffle: "off",
            autoHeight: "off",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            startWithSlide: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
    }
});
jQuery(window).load(function () {
    var retina = window.devicePixelRatio > 1 ? true : false;
    if (retina) {
        var retinaEl = jQuery("#logo img.logo-main");
        var retinaLogoW = retinaEl.width();
        var retinaLogoH = retinaEl.height();
        retinaEl.attr("src", "content/space/images/retina-space.png").width(retinaLogoW).height(retinaLogoH);
        var stickyEl = jQuery("#logo img.logo-sticky");
        var stickyLogoW = stickyEl.width();
        var stickyLogoH = stickyEl.height();
        stickyEl.attr("src", "content/space/images/retina-space.png").width(stickyLogoW).height(stickyLogoH);
        var mobileEl = jQuery("#logo img.logo-mobile");
        var mobileLogoW = mobileEl.width();
        var mobileLogoH = mobileEl.height();
        mobileEl.attr("src", "content/space/images/retina-space-responsive.png").width(mobileLogoW).height(mobileLogoH);
    }
});