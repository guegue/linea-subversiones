<template>
    <div id="app" class="layout-full-width mobile-tb-left button-stroke no-content-padding header-transparent header-fw minimalist-header
         sticky-header sticky-dark ab-hide subheader-both-center menuo-right menuo-no-borders footer-copy-center">
        <!-- Main Theme Wrapper -->
<!--        <div id="Wrapper">-->
<!--            &lt;!&ndash; Header Wrapper &ndash;&gt;-->
<!--            <div id="Header_wrapper">-->
<!--                &lt;!&ndash; Header &ndash;&gt;-->
<!--                <header id="Header">-->

<!--                    &lt;!&ndash; Header -  Logo and Menu area &ndash;&gt;-->
<!--                    <div id="Top_bar">-->
<!--                        <div class="container">-->
<!--                            <div class="column one">-->
<!--                                <div class="top_bar_left clearfix">-->
<!--                                    &lt;!&ndash; Logo&ndash;&gt;-->
<!--                                    <div class="logo">-->
<!--                                        <a id="logo" href="" title="BeSpace - BeTheme"> <img class="logo-main scale-with-grid" src="content/space/images/space.png" alt="BeSpace - BeTheme" /> <img class="logo-sticky scale-with-grid" src="content/space/images/space.png" alt=""> <img class="logo-mobile scale-with-grid" src="content/space/images/space-responsive.png" alt=""> </a>-->
<!--                                    </div>-->
<!--                                    &lt;!&ndash; Main menu&ndash;&gt;-->
<!--                                    <div class="menu_wrapper">-->
<!--                                        <nav id="menu" class="menu-main-menu-container">-->
<!--                                            <ul id="menu-main-menu" class="menu">-->
<!--                                                <li class="current_page_item">-->
<!--                                                    <a href=""><span>HOME</span></a>-->
<!--                                                </li>-->
<!--                                                <li>-->
<!--                                                    <a href=""><span>TECHNOLOGY</span></a>-->
<!--                                                </li>-->
<!--                                                <li>-->
<!--                                                    <a href=""><span>STAFF</span></a>-->
<!--                                                </li>-->
<!--                                                <li>-->
<!--                                                    <a href=""><span>ARTICLES</span></a>-->
<!--                                                </li>-->
<!--                                                <li>-->
<!--                                                    <a href=""><span>ABOUT</span></a>-->
<!--                                                </li>-->
<!--                                                <li>-->
<!--                                                    <a target="_blank" href=""><span><span style="padding: 0px; color:#AAA;">BUY NOW</span></span></a>-->
<!--                                                </li>-->
<!--                                            </ul>-->
<!--                                        </nav><a class="responsive-menu-toggle" href="#"><i class="icon-menu"></i></a>-->
<!--                                    </div>-->
<!--                                    &lt;!&ndash; Secondary menu area - only for certain pages &ndash;&gt;-->
<!--                                    <div class="secondary_menu_wrapper"></div>-->
<!--                                    &lt;!&ndash; Banner area - only for certain pages&ndash;&gt;-->
<!--                                    <div class="banner_wrapper"></div>-->
<!--                                    &lt;!&ndash; Header Searchform area&ndash;&gt;-->
<!--                                    <div class="search_wrapper">-->
<!--                                        <form method="get" id="searchform" action="#">-->

<!--                                            <input type="text" class="field" name="s" id="s" placeholder="Enter your search" />-->
<!--                                            <input type="submit" class="submit flv_disp_none" value="" />-->
<!--                                        </form>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </header>-->
<!--            </div>-->
<!--            &lt;!&ndash; Main Content &ndash;&gt;-->
<!--&lt;!&ndash;            <div id="Content">&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="content_wrapper clearfix">&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="sections_group">&ndash;&gt;-->
<!--&lt;!&ndash;                        <div class="entry-content">&ndash;&gt;-->
<!--&lt;!&ndash;                            <div class="section full-screen full-width highlight-right section-border-bottom " style="padding-top:0px; padding-bottom:0px; background-image:url(content/space/images/home_space_sectionbg1.jpg); background-repeat:no-repeat; background-position:center top; background-attachment:fixed; background-size:cover; -webkit-background-size:cover" data-stellar-background-ratio="0.5">&ndash;&gt;-->
<!--&lt;!&ndash;                                <div class="section_wrapper clearfix">&ndash;&gt;-->
<!--&lt;!&ndash;                                    <div class="items_group clearfix">&ndash;&gt;-->
<!--&lt;!&ndash;                                        &lt;!&ndash; One Second (1/2) Column &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                                        <div class="column one-second column_placeholder">&ndash;&gt;-->
<!--&lt;!&ndash;                                            <div class="placeholder">&ndash;&gt;-->
<!--&lt;!&ndash;                                                &nbsp;&ndash;&gt;-->
<!--&lt;!&ndash;                                            </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                        &lt;!&ndash; One Second (1/2) Column &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                                        <div class="column one-second column_column ">&ndash;&gt;-->
<!--&lt;!&ndash;           `                                 <div class="column_attr animate" data-anim-type="fadeInRight">&ndash;&gt;-->
<!--&lt;!&ndash;                                                <div style="padding: 40px; box-sizing: border-box; -webkit-box-sizing: border-box;">&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <h5 style="letter-spacing: 4px;">New at Be Space</h5>&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <h2 style="margin-right: 10%;">The new way&ndash;&gt;-->
<!--&lt;!&ndash;                                                        <br>&ndash;&gt;-->
<!--&lt;!&ndash;                                                        of exploring space</h2>&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <hr class="no_line hrmargin_b_30" />&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <div style="position: relative; margin-left: -20%;"><img class="scale-with-grid" src="content/space/images/home_space_hr.png" alt="">&ndash;&gt;-->
<!--&lt;!&ndash;                                                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <hr class="no_line hrmargin_b_30" />&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <h6 style="margin-right: 30%;">Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</h6>&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <hr class="no_line hrmargin_b_40" />&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <a class="button button_large button_theme button_js" href="content/space/about.html"><span class="button_label">Read more</span></a>&ndash;&gt;-->
<!--&lt;!&ndash;                                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                            </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                            </div>&ndash;&gt;-->
<!--&lt;!&ndash;                            <div class="section equal-height " style="padding-top:90px; padding-bottom:50px; ">&ndash;&gt;-->
<!--&lt;!&ndash;                                <div class="section_wrapper clearfix">&ndash;&gt;-->
<!--&lt;!&ndash;                                    <div class="items_group clearfix">&ndash;&gt;-->
<!--&lt;!&ndash;                                        &lt;!&ndash; One Second (1/2) Column &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                                        <div class="column one-second column_column ">&ndash;&gt;-->
<!--&lt;!&ndash;                                            <div class="column_attr" style=" padding:0 8% 0 0;">&ndash;&gt;-->
<!--&lt;!&ndash;                                                <hr class="no_line" style="margin: 0 auto 50px;" />&ndash;&gt;-->
<!--&lt;!&ndash;                                                <h3>New way of traveling</h3>&ndash;&gt;-->
<!--&lt;!&ndash;                                                <hr class="no_line hrmargin_b_30" />&ndash;&gt;-->
<!--&lt;!&ndash;                                                <h6>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</h6>&ndash;&gt;-->
<!--&lt;!&ndash;                                                <hr class="no_line hrmargin_b_30" />&ndash;&gt;-->
<!--&lt;!&ndash;                                                <p>&ndash;&gt;-->
<!--&lt;!&ndash;                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.&ndash;&gt;-->
<!--&lt;!&ndash;                                                </p>&ndash;&gt;-->
<!--&lt;!&ndash;                                                <hr class="no_line hrmargin_b_30" />&ndash;&gt;-->
<!--&lt;!&ndash;                                                <p>&ndash;&gt;-->
<!--&lt;!&ndash;                                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dooluptatem.&ndash;&gt;-->
<!--&lt;!&ndash;                                                </p>&ndash;&gt;-->
<!--&lt;!&ndash;                                                <hr class="no_line hrmargin_b_30" />&ndash;&gt;-->
<!--&lt;!&ndash;                                                <a class="button button_large button_theme button_js" href=""><span class="button_label">Read more</span></a>&ndash;&gt;-->
<!--&lt;!&ndash;                                            </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                        &lt;!&ndash; One Second (1/2) Column &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                                        <div class="column one-second column_column space-border">&ndash;&gt;-->
<!--&lt;!&ndash;                                            <div class="column_attr" style=" padding:0 0 0 9%;">&ndash;&gt;-->
<!--&lt;!&ndash;                                                <hr class="no_line hrmargin_b_40" />&ndash;&gt;-->
<!--&lt;!&ndash;                                                <div class="image_frame image_item no_link scale-with-grid alignnone no_border">&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <div class="image_wrapper"><img class="scale-with-grid" src="content/space/images/home_space_pic1.jpg" alt="" width="442" height="313" />&ndash;&gt;-->
<!--&lt;!&ndash;                                                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                <hr class="no_line hrmargin_b_30" />&ndash;&gt;-->
<!--&lt;!&ndash;                                                <ul class="list_check" style="font-size: 13px;">&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <li style="background: url(content/space/images/home_space_list.png) no-repeat; padding-left: 30px;">&ndash;&gt;-->
<!--&lt;!&ndash;                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&ndash;&gt;-->
<!--&lt;!&ndash;                                                    </li>&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <li style="background: url(content/space/images/home_space_list.png) no-repeat; padding-left: 30px;">&ndash;&gt;-->
<!--&lt;!&ndash;                                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.&ndash;&gt;-->
<!--&lt;!&ndash;                                                    </li>&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <li style="background: url(content/space/images/home_space_list.png) no-repeat; padding-left: 30px;">&ndash;&gt;-->
<!--&lt;!&ndash;                                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&ndash;&gt;-->
<!--&lt;!&ndash;                                                    </li>&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <li style="background: url(content/space/images/home_space_list.png) no-repeat; padding-left: 30px;">&ndash;&gt;-->
<!--&lt;!&ndash;                                                        Incidunt ut labore et dolore magnam aliquam.&ndash;&gt;-->
<!--&lt;!&ndash;                                                    </li>&ndash;&gt;-->
<!--&lt;!&ndash;                                                </ul>&ndash;&gt;-->
<!--&lt;!&ndash;                                                <hr class="no_line hrmargin_b_20" />&ndash;&gt;-->
<!--&lt;!&ndash;                                            </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                            </div>&ndash;&gt;-->
<!--&lt;!&ndash;                            <div class="section full-width sections_style_0 ">&ndash;&gt;-->
<!--&lt;!&ndash;                                <div class="section_wrapper clearfix">&ndash;&gt;-->
<!--&lt;!&ndash;                                    <div class="items_group clearfix">&ndash;&gt;-->
<!--&lt;!&ndash;                                        &lt;!&ndash; One full width row&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                                        <div class="column one column_slider_plugin ">&ndash;&gt;-->
<!--&lt;!&ndash;                                            &lt;!&ndash; Revolution slider area&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                                            <div class="mfn-main-slider">&ndash;&gt;-->
<!--&lt;!&ndash;                                                <link href="http://fonts.googleapis.com/css?family=Roboto+Slab:400,700" rel="stylesheet" property="stylesheet" type="text/css" media="all" />&ndash;&gt;-->
<!--&lt;!&ndash;                                                <link href="http://fonts.googleapis.com/css?family=Roboto:900,700" rel="stylesheet" property="stylesheet" type="text/css" media="all" />&ndash;&gt;-->
<!--&lt;!&ndash;                                                <div id="rev_slider_4_1_wrapper" class="rev_slider_wrapper fullwidthbanner-container" style="margin:0px auto;background-color:#fff;padding:0px;margin-top:0px;margin-bottom:0px;">&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <div id="rev_slider_4_1" class="rev_slider fullwidthabanner" data-version="5.0.6">&ndash;&gt;-->
<!--&lt;!&ndash;                                                        <ul>&ndash;&gt;-->
<!--&lt;!&ndash;                                                            <li data-index="rs-2279" data-transition="parallaxvertical" data-slotamount="default" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb="content/space/images/home_space_blog2-100x50.jpg" data-rotate="0" data-fstransition="fade" data-fsmasterspeed="1500" data-fsslotamount="7" data-saveperformance="off" data-title="Quisque lorem tortor fringilla" data-param1="Universe" data-description="Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus. Integer ultrices posuere cubilia Curae, Nulla ipsum dolor lacus, suscipit adipiscing. Cum sociis natoque penatibus et ultrices volutpat.">&ndash;&gt;-->
<!--&lt;!&ndash;                                                                <img src="content/space/images/home_space_blog2.jpg" alt="" width="1920" height="1280" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" class="rev-slidebg" data-no-retina>&ndash;&gt;-->
<!--&lt;!&ndash;                                                                <div class="tp-caption tp-shape tp-shapewrapper tp-resizeme rs-parallaxlevel-0" id="slide-2279-layer-3" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="normal" data-transform_idle="o:1;" data-transform_in="opacity:0;s:1500;e:Power3.easeInOut;" data-transform_out="opacity:0;s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-start="1000" data-basealign="slide" data-responsive_offset="on" style="z-index: 5;background-color:rgba(0, 0, 0, 0.35);border-color:rgba(0, 0, 0, 1.00);"></div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                                <div class="tp-caption Newspaper-Title tp-resizeme rs-parallaxlevel-0" id="slide-2279-layer-1" data-x="['left','left','left','left']" data-hoffset="['50','50','50','30']" data-y="['top','top','top','top']" data-voffset="['165','135','105','130']" data-fontsize="['50','50','50','30']" data-lineheight="['55','55','55','35']" data-fontweight="['700','400','400','400']" data-width="['600','600','600','420']" data-height="none" data-whitespace="normal" data-transform_idle="o:1;" data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;" data-mask_in="x:0px;y:0px;" data-mask_out="x:0;y:0;" data-start="1000" data-splitin="none" data-splitout="none" data-responsive_offset="on" style="z-index: 6; min-width: 600px; max-width: 600px; white-space: normal; font-weight: 700;">&ndash;&gt;-->
<!--&lt;!&ndash;                                                                    Quisque lorem tortor fringilla&ndash;&gt;-->
<!--&lt;!&ndash;                                                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                                <div class="tp-caption Newspaper-Subtitle tp-resizeme rs-parallaxlevel-0" id="slide-2279-layer-2" data-x="['left','left','left','left']" data-hoffset="['50','50','50','30']" data-y="['top','top','top','top']" data-voffset="['140','110','80','100']" data-fontweight="['400','900','900','900']" data-color="['rgba(255, 255, 255, 1.00)','rgba(168, 216, 238, 1.00)','rgba(168, 216, 238, 1.00)','rgba(168, 216, 238, 1.00)']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;" data-mask_in="x:0px;y:0px;" data-mask_out="x:0;y:0;" data-start="1000" data-splitin="none" data-splitout="none" data-responsive_offset="on" style="z-index: 7; white-space: nowrap; font-weight: 400; color: rgba(255, 255, 255, 1.00);text-transform:uppercase;">&ndash;&gt;-->
<!--&lt;!&ndash;                                                                    May 6, 2014&ndash;&gt;-->
<!--&lt;!&ndash;                                                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                                <a class="tp-caption Newspaper-Button rev-btn rs-parallaxlevel-0" href="content/space/item-1.html" target="_self" id="slide-2279-layer-5" data-x="['left','left','left','left']" data-hoffset="['53','53','53','30']" data-y="['top','top','top','top']" data-voffset="['361','331','301','245']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power1.easeInOut;" data-style_hover="c:rgba(0, 0, 0, 1.00);bg:rgba(255, 255, 255, 1.00);cursor:pointer;" data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;" data-mask_in="x:0px;y:0px;" data-mask_out="x:0;y:0;" data-start="1000" data-splitin="none" data-splitout="none" data-actions='' data-responsive_offset="on" data-responsive="off" style="z-index: 8; white-space: nowrap;outline:none;box-shadow:none;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;">Read more </a>&ndash;&gt;-->
<!--&lt;!&ndash;                                                            </li>&ndash;&gt;-->
<!--&lt;!&ndash;                                                            <li data-index="rs-2281" data-transition="parallaxvertical" data-slotamount="default" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb="content/space/images/home_space_blog4-100x50.jpg" data-rotate="0" data-saveperformance="off" data-title="Vivamus sit amet metus sem uspendisse pellen" data-param1="Technology" data-description="Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis.">&ndash;&gt;-->
<!--&lt;!&ndash;                                                                <img src="content/space/images/home_space_blog4.jpg" alt="" width="1920" height="1280" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" class="rev-slidebg" data-no-retina>&ndash;&gt;-->
<!--&lt;!&ndash;                                                                <div class="tp-caption tp-shape tp-shapewrapper tp-resizeme rs-parallaxlevel-0" id="slide-2281-layer-3" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="normal" data-transform_idle="o:1;" data-transform_in="opacity:0;s:1500;e:Power3.easeInOut;" data-transform_out="opacity:0;s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-start="1000" data-basealign="slide" data-responsive_offset="on" style="z-index: 5;background-color:rgba(0, 0, 0, 0.35);border-color:rgba(0, 0, 0, 1.00);"></div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                                <div class="tp-caption Newspaper-Title tp-resizeme rs-parallaxlevel-0" id="slide-2281-layer-1" data-x="['left','left','left','left']" data-hoffset="['50','50','50','30']" data-y="['top','top','top','top']" data-voffset="['165','135','105','130']" data-fontsize="['50','50','50','30']" data-lineheight="['55','55','55','35']" data-fontweight="['700','400','400','400']" data-width="['600','600','600','420']" data-height="none" data-whitespace="normal" data-transform_idle="o:1;" data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;" data-mask_in="x:0px;y:0px;" data-mask_out="x:0;y:0;" data-start="1000" data-splitin="none" data-splitout="none" data-responsive_offset="on" style="z-index: 6; min-width: 600px; max-width: 600px; white-space: normal; font-weight: 700;">&ndash;&gt;-->
<!--&lt;!&ndash;                                                                    Vivamus sit amet metus sem uspendisse pellen&ndash;&gt;-->
<!--&lt;!&ndash;                                                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                                <div class="tp-caption Newspaper-Subtitle tp-resizeme rs-parallaxlevel-0" id="slide-2281-layer-2" data-x="['left','left','left','left']" data-hoffset="['50','50','50','30']" data-y="['top','top','top','top']" data-voffset="['140','110','80','100']" data-fontweight="['400','900','900','900']" data-color="['rgba(255, 255, 255, 1.00)','rgba(168, 216, 238, 1.00)','rgba(168, 216, 238, 1.00)','rgba(168, 216, 238, 1.00)']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;" data-mask_in="x:0px;y:0px;" data-mask_out="x:0;y:0;" data-start="1000" data-splitin="none" data-splitout="none" data-responsive_offset="on" style="z-index: 7; white-space: nowrap; font-weight: 400; color: rgba(255, 255, 255, 1.00);text-transform:uppercase;">&ndash;&gt;-->
<!--&lt;!&ndash;                                                                    May 7, 2014&ndash;&gt;-->
<!--&lt;!&ndash;                                                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                                <a class="tp-caption Newspaper-Button rev-btn rs-parallaxlevel-0" href="content/space/item-4.html" target="_self" id="slide-2281-layer-5" data-x="['left','left','left','left']" data-hoffset="['53','53','53','30']" data-y="['top','top','top','top']" data-voffset="['361','331','301','245']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power1.easeInOut;" data-style_hover="c:rgba(0, 0, 0, 1.00);bg:rgba(255, 255, 255, 1.00);cursor:pointer;" data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;" data-mask_in="x:0px;y:0px;" data-mask_out="x:0;y:0;" data-start="1000" data-splitin="none" data-splitout="none" data-actions='' data-responsive_offset="on" data-responsive="off" style="z-index: 8; white-space: nowrap;outline:none;box-shadow:none;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;">Read more </a>&ndash;&gt;-->
<!--&lt;!&ndash;                                                            </li>&ndash;&gt;-->
<!--&lt;!&ndash;                                                            <li data-index="rs-2277" data-transition="parallaxvertical" data-slotamount="default" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb="content/space/images/home_space_blog1-100x50.jpg" data-rotate="0" data-saveperformance="off" data-title="Vestibulum commodo volutpat laoreet" data-param1="Planets" data-description="Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.">&ndash;&gt;-->
<!--&lt;!&ndash;                                                                <img src="content/space/images/home_space_blog1.jpg" alt="" width="1920" height="1280" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" class="rev-slidebg" data-no-retina>&ndash;&gt;-->
<!--&lt;!&ndash;                                                                <div class="tp-caption tp-shape tp-shapewrapper tp-resizeme rs-parallaxlevel-0" id="slide-2277-layer-3" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="normal" data-transform_idle="o:1;" data-transform_in="opacity:0;s:1500;e:Power3.easeInOut;" data-transform_out="opacity:0;s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-start="1000" data-basealign="slide" data-responsive_offset="on" style="z-index: 5;background-color:rgba(0, 0, 0, 0.35);border-color:rgba(0, 0, 0, 1.00);"></div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                                <div class="tp-caption Newspaper-Title tp-resizeme rs-parallaxlevel-0" id="slide-2277-layer-1" data-x="['left','left','left','left']" data-hoffset="['50','50','50','30']" data-y="['top','top','top','top']" data-voffset="['165','135','105','130']" data-fontsize="['50','50','50','30']" data-lineheight="['55','55','55','35']" data-fontweight="['700','400','400','400']" data-width="['600','600','600','420']" data-height="none" data-whitespace="normal" data-transform_idle="o:1;" data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;" data-mask_in="x:0px;y:0px;" data-mask_out="x:0;y:0;" data-start="1000" data-splitin="none" data-splitout="none" data-responsive_offset="on" style="z-index: 6; min-width: 600px; max-width: 600px; white-space: normal; font-weight: 700;">&ndash;&gt;-->
<!--&lt;!&ndash;                                                                    Vestibulum commodo volutpat laoreet&ndash;&gt;-->
<!--&lt;!&ndash;                                                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                                <div class="tp-caption Newspaper-Subtitle tp-resizeme rs-parallaxlevel-0" id="slide-2277-layer-2" data-x="['left','left','left','left']" data-hoffset="['50','50','50','30']" data-y="['top','top','top','top']" data-voffset="['140','110','80','100']" data-fontweight="['400','900','900','900']" data-color="['rgba(255, 255, 255, 1.00)','rgba(168, 216, 238, 1.00)','rgba(168, 216, 238, 1.00)','rgba(168, 216, 238, 1.00)']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;" data-mask_in="x:0px;y:0px;" data-mask_out="x:0;y:0;" data-start="1000" data-splitin="none" data-splitout="none" data-responsive_offset="on" style="z-index: 7; white-space: nowrap; font-weight: 400; color: rgba(255, 255, 255, 1.00);text-transform:uppercase;">&ndash;&gt;-->
<!--&lt;!&ndash;                                                                    May 8, 2014&ndash;&gt;-->
<!--&lt;!&ndash;                                                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                                <a class="tp-caption Newspaper-Button rev-btn rs-parallaxlevel-0" href="content/space/item-3.html" target="_self" id="slide-2277-layer-5" data-x="['left','left','left','left']" data-hoffset="['53','53','53','30']" data-y="['top','top','top','top']" data-voffset="['361','331','301','245']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power1.easeInOut;" data-style_hover="c:rgba(0, 0, 0, 1.00);bg:rgba(255, 255, 255, 1.00);cursor:pointer;" data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;" data-mask_in="x:0px;y:0px;" data-mask_out="x:0;y:0;" data-start="1000" data-splitin="none" data-splitout="none" data-actions='' data-responsive_offset="on" data-responsive="off" style="z-index: 8; white-space: nowrap;outline:none;box-shadow:none;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;">Read more </a>&ndash;&gt;-->
<!--&lt;!&ndash;                                                            </li>&ndash;&gt;-->
<!--&lt;!&ndash;                                                            <li data-index="rs-2275" data-transition="parallaxvertical" data-slotamount="default" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb="content/space/images/home_space_blog3-100x50.jpg" data-rotate="0" data-saveperformance="off" data-title="Vestibulum ante ipsum primis" data-param1="Earth" data-description="Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.">&ndash;&gt;-->
<!--&lt;!&ndash;                                                                <img src="content/space/images/home_space_blog3.jpg" alt="" width="1920" height="1280" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" class="rev-slidebg" data-no-retina>&ndash;&gt;-->
<!--&lt;!&ndash;                                                                <div class="tp-caption tp-shape tp-shapewrapper tp-resizeme rs-parallaxlevel-0" id="slide-2275-layer-3" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="normal" data-transform_idle="o:1;" data-transform_in="opacity:0;s:1500;e:Power3.easeInOut;" data-transform_out="opacity:0;s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-start="1000" data-basealign="slide" data-responsive_offset="on" style="z-index: 5;background-color:rgba(0, 0, 0, 0.35);border-color:rgba(0, 0, 0, 1.00);"></div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                                <div class="tp-caption Newspaper-Title tp-resizeme rs-parallaxlevel-0" id="slide-2275-layer-1" data-x="['left','left','left','left']" data-hoffset="['50','50','50','30']" data-y="['top','top','top','top']" data-voffset="['165','135','105','130']" data-fontsize="['50','50','50','30']" data-lineheight="['55','55','55','35']" data-fontweight="['700','400','400','400']" data-width="['600','600','600','420']" data-height="none" data-whitespace="normal" data-transform_idle="o:1;" data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;" data-mask_in="x:0px;y:0px;" data-mask_out="x:0;y:0;" data-start="1000" data-splitin="none" data-splitout="none" data-responsive_offset="on" style="z-index: 6; min-width: 600px; max-width: 600px; white-space: normal; font-weight: 700;">&ndash;&gt;-->
<!--&lt;!&ndash;                                                                    Vestibulum ante ipsum primis&ndash;&gt;-->
<!--&lt;!&ndash;                                                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                                <div class="tp-caption Newspaper-Subtitle tp-resizeme rs-parallaxlevel-0" id="slide-2275-layer-2" data-x="['left','left','left','left']" data-hoffset="['50','50','50','30']" data-y="['top','top','top','top']" data-voffset="['140','110','80','100']" data-fontweight="['400','900','900','900']" data-color="['rgba(255, 255, 255, 1.00)','rgba(168, 216, 238, 1.00)','rgba(168, 216, 238, 1.00)','rgba(168, 216, 238, 1.00)']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;" data-mask_in="x:0px;y:0px;" data-mask_out="x:0;y:0;" data-start="1000" data-splitin="none" data-splitout="none" data-responsive_offset="on" style="z-index: 7; white-space: nowrap; font-weight: 400; color: rgba(255, 255, 255, 1.00);text-transform:uppercase;">&ndash;&gt;-->
<!--&lt;!&ndash;                                                                    May 9, 2014&ndash;&gt;-->
<!--&lt;!&ndash;                                                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                                <a class="tp-caption Newspaper-Button rev-btn rs-parallaxlevel-0" href="content/space/item-2.html" target="_self" id="slide-2275-layer-5" data-x="['left','left','left','left']" data-hoffset="['53','53','53','30']" data-y="['top','top','top','top']" data-voffset="['361','331','301','245']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power1.easeInOut;" data-style_hover="c:rgba(0, 0, 0, 1.00);bg:rgba(255, 255, 255, 1.00);cursor:pointer;" data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;e:Power3.easeInOut;" data-mask_in="x:0px;y:0px;" data-mask_out="x:0;y:0;" data-start="1000" data-splitin="none" data-splitout="none" data-actions='' data-responsive_offset="on" data-responsive="off" style="z-index: 8; white-space: nowrap;outline:none;box-shadow:none;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;">Read more </a>&ndash;&gt;-->
<!--&lt;!&ndash;                                                            </li>&ndash;&gt;-->
<!--&lt;!&ndash;                                                        </ul>&ndash;&gt;-->
<!--&lt;!&ndash;                                                        <div class="tp-static-layers"></div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                        <div class="tp-bannertimer tp-bottom flv_viz_hid"></div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                            </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                            </div>&ndash;&gt;-->
<!--&lt;!&ndash;                            <div class="section" style="padding-top:90px; padding-bottom:50px; ">&ndash;&gt;-->
<!--&lt;!&ndash;                                <div class="section_wrapper clearfix">&ndash;&gt;-->
<!--&lt;!&ndash;                                    <div class="items_group clearfix">&ndash;&gt;-->
<!--&lt;!&ndash;                                        &lt;!&ndash; One Fourth (1/4) Column &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                                        <div class="column one-fourth column_column ">&ndash;&gt;-->
<!--&lt;!&ndash;                                            <div class="column_attr" style=" padding:0 8% 0 0;">&ndash;&gt;-->
<!--&lt;!&ndash;                                                <hr class="no_line hrmargin_b_40" />&ndash;&gt;-->
<!--&lt;!&ndash;                                                <h3>Meet scientists</h3>&ndash;&gt;-->
<!--&lt;!&ndash;                                                <hr class="no_line hrmargin_b_30" />&ndash;&gt;-->
<!--&lt;!&ndash;                                                <a class="button button_large button_theme button_js" href="content/space/stuff.html"><span class="button_label">Read more</span></a>&ndash;&gt;-->
<!--&lt;!&ndash;                                            </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                        &lt;!&ndash; Three Fourth (3/4) Column &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                                        <div class="column three-fourth column_column space-border">&ndash;&gt;-->
<!--&lt;!&ndash;                                            <div class="column_attr" style=" padding:0 0 0 8%;">&ndash;&gt;-->
<!--&lt;!&ndash;                                                <hr class="no_line hrmargin_b_40" />&ndash;&gt;-->
<!--&lt;!&ndash;                                                <div class="column one">&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</h6>&ndash;&gt;-->
<!--&lt;!&ndash;                                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                &lt;!&ndash; One Third (1/3) Column &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                                                <div class="column one-third">&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <div style="margin-right: 20%;">&ndash;&gt;-->
<!--&lt;!&ndash;                                                        <div class="image_frame image_item no_link scale-with-grid alignnone no_border">&ndash;&gt;-->
<!--&lt;!&ndash;                                                            <div class="image_wrapper"><img class="scale-with-grid" src="content/space/images/home_space_staff1.jpg" alt="" width="380" height="342" />&ndash;&gt;-->
<!--&lt;!&ndash;                                                            </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                        <hr class="no_line hrmargin_b_20" />&ndash;&gt;-->
<!--&lt;!&ndash;                                                        <h5>Martines walanti</h5>&ndash;&gt;-->
<!--&lt;!&ndash;                                                        <p>&ndash;&gt;-->
<!--&lt;!&ndash;                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolorsi architecto beatae vitae dicta sunt explicabo.&ndash;&gt;-->
<!--&lt;!&ndash;                                                        </p>&ndash;&gt;-->
<!--&lt;!&ndash;                                                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                &lt;!&ndash; One Third (1/3) Column &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                                                <div class="column one-third">&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <div style="margin-right: 20%;">&ndash;&gt;-->
<!--&lt;!&ndash;                                                        <div class="image_frame image_item no_link scale-with-grid alignnone no_border">&ndash;&gt;-->
<!--&lt;!&ndash;                                                            <div class="image_wrapper"><img class="scale-with-grid" src="content/space/images/home_space_staff2.jpg" alt="" width="380" height="342" />&ndash;&gt;-->
<!--&lt;!&ndash;                                                            </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                        <hr class="no_line hrmargin_b_20" />&ndash;&gt;-->
<!--&lt;!&ndash;                                                        <h5>Quoponum allen rolenpa</h5>&ndash;&gt;-->
<!--&lt;!&ndash;                                                        <p>&ndash;&gt;-->
<!--&lt;!&ndash;                                                            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolorsi architecto beatae vitae dicta sunt explicabo.&ndash;&gt;-->
<!--&lt;!&ndash;                                                        </p>&ndash;&gt;-->
<!--&lt;!&ndash;                                                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                &lt;!&ndash; One Third (1/3) Column &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                                                <div class="column one-third">&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <div style="margin-right: 20%;">&ndash;&gt;-->
<!--&lt;!&ndash;                                                        <div class="image_frame image_item no_link scale-with-grid alignnone no_border">&ndash;&gt;-->
<!--&lt;!&ndash;                                                            <div class="image_wrapper"><img class="scale-with-grid" src="content/space/images/home_space_staff3.jpg" alt="" width="380" height="342" />&ndash;&gt;-->
<!--&lt;!&ndash;                                                            </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                        <hr class="no_line hrmargin_b_20" />&ndash;&gt;-->
<!--&lt;!&ndash;                                                        <h5>Labore et dolorsi architecto</h5>&ndash;&gt;-->
<!--&lt;!&ndash;                                                        <p>&ndash;&gt;-->
<!--&lt;!&ndash;                                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&ndash;&gt;-->
<!--&lt;!&ndash;                                                        </p>&ndash;&gt;-->
<!--&lt;!&ndash;                                                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                            </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                            </div>&ndash;&gt;-->
<!--&lt;!&ndash;                            <div class="section no-margin equal-height " style="padding-top:0px; padding-bottom:0px; background-color:#090b14; background-image:url(content/space/images/home_space_sectionbg2.jpg); background-repeat:no-repeat; background-position:center top; ">&ndash;&gt;-->
<!--&lt;!&ndash;                                <div class="section_wrapper clearfix">&ndash;&gt;-->
<!--&lt;!&ndash;                                    <div class="items_group clearfix">&ndash;&gt;-->
<!--&lt;!&ndash;                                        &lt;!&ndash; One Second (1/2) Column &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                                        <div class="column one-second column_column ">&ndash;&gt;-->
<!--&lt;!&ndash;                                            <div class="column_attr">&ndash;&gt;-->
<!--&lt;!&ndash;                                                <div style="padding: 60px 40px 70px; background: url(content/space/images/home_space_box_bg.png) no-repeat top right; height: 100%; box-sizing: border-box; -webkit-box-sizing: border-box;">&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <h4>Dolor et omnien quan:</h4>&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <hr class="no_line hrmargin_b_30" />&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <div class="list_item lists_2 clearfix">&ndash;&gt;-->
<!--&lt;!&ndash;                                                        <div class="list_left list_image"><img src="content/space/images/home_space_list_1.png" alt="Tincidunt mauris" class="scale-with-grid" width="58" height="65" />&ndash;&gt;-->
<!--&lt;!&ndash;                                                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                        <div class="list_right">&ndash;&gt;-->
<!--&lt;!&ndash;                                                            <h4>Tincidunt mauris</h4>&ndash;&gt;-->
<!--&lt;!&ndash;                                                            <div class="desc">&ndash;&gt;-->
<!--&lt;!&ndash;                                                                Vivamus tincidunt nisl dolor, sit amet posuere lorem viverra sed. Sed scelerisque, ex a pretium egestas, tortor ex faucibus orci, eget placerat lacus elit amet.&ndash;&gt;-->
<!--&lt;!&ndash;                                                            </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <hr class="no_line hrmargin_b_30" />&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <div class="list_item lists_2 clearfix">&ndash;&gt;-->
<!--&lt;!&ndash;                                                        <div class="list_left list_image"><img src="content/space/images/home_space_list_2.png" alt="Vestibulum commodo" class="scale-with-grid" width="58" height="65" />&ndash;&gt;-->
<!--&lt;!&ndash;                                                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                        <div class="list_right">&ndash;&gt;-->
<!--&lt;!&ndash;                                                            <h4>Vestibulum commodo</h4>&ndash;&gt;-->
<!--&lt;!&ndash;                                                            <div class="desc">&ndash;&gt;-->
<!--&lt;!&ndash;                                                                Suspendisse at purus nec nunc porttitor rutrum at auctor turpis. Aliquam tellus magna, tempor non iaculis in, tincidunt commodo enim.&ndash;&gt;-->
<!--&lt;!&ndash;                                                            </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <hr class="no_line hrmargin_b_30" />&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <div class="list_item lists_2 clearfix">&ndash;&gt;-->
<!--&lt;!&ndash;                                                        <div class="list_left list_image"><img src="content/space/images/home_space_list_3.png" alt="Malesuada fames" class="scale-with-grid" width="58" height="65" />&ndash;&gt;-->
<!--&lt;!&ndash;                                                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                        <div class="list_right">&ndash;&gt;-->
<!--&lt;!&ndash;                                                            <h4>Malesuada fames</h4>&ndash;&gt;-->
<!--&lt;!&ndash;                                                            <div class="desc">&ndash;&gt;-->
<!--&lt;!&ndash;                                                                Sed quis nisl pulvinar, vehicula augue ut, efficitur ipsum. Maecenas bibendum tortor auctor, scelerisque mi id, laoreet risus.&ndash;&gt;-->
<!--&lt;!&ndash;                                                            </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                            </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                        &lt;!&ndash; One Second (1/2) Column &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                                        <div class="column one-second column_column ">&ndash;&gt;-->
<!--&lt;!&ndash;                                            <div class="column_attr" style=" padding:60px 40px 70px;">&ndash;&gt;-->
<!--&lt;!&ndash;                                                <h3 style="color: #fff;">Lorem ipsum dolor mit samet</h3>&ndash;&gt;-->
<!--&lt;!&ndash;                                                <h5 style="color: #fff;">Nunc non ante ipsum. Aliquam et malesuada felis! Vivamus at velit ac mauris ornare dapibus vitae sit amet est. Etiam porttitor semper sem at mollis turpis duis.</h5>&ndash;&gt;-->
<!--&lt;!&ndash;                                                <hr class="no_line hrmargin_b_30" />&ndash;&gt;-->
<!--&lt;!&ndash;                                                <ul class="list_check" style="font-size: 13px; color: #fff;">&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <li style="background: url(content/space/images/home_space_list_w.png) no-repeat; padding-left: 30px;">&ndash;&gt;-->
<!--&lt;!&ndash;                                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.&ndash;&gt;-->
<!--&lt;!&ndash;                                                    </li>&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <li style="background: url(content/space/images/home_space_list_w.png) no-repeat; padding-left: 30px;">&ndash;&gt;-->
<!--&lt;!&ndash;                                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&ndash;&gt;-->
<!--&lt;!&ndash;                                                    </li>&ndash;&gt;-->
<!--&lt;!&ndash;                                                    <li style="background: url(content/space/images/home_space_list_w.png) no-repeat; padding-left: 30px;">&ndash;&gt;-->
<!--&lt;!&ndash;                                                        Incidunt ut labore et dolore magnam aliquam.&ndash;&gt;-->
<!--&lt;!&ndash;                                                    </li>&ndash;&gt;-->
<!--&lt;!&ndash;                                                </ul>&ndash;&gt;-->
<!--&lt;!&ndash;                                            </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                            </div>&ndash;&gt;-->
<!--&lt;!&ndash;                            <div class="section the_content no_content">&ndash;&gt;-->
<!--&lt;!&ndash;                                <div class="section_wrapper">&ndash;&gt;-->
<!--&lt;!&ndash;                                    <div class="the_content_wrapper"></div>&ndash;&gt;-->
<!--&lt;!&ndash;                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                            </div>&ndash;&gt;-->
<!--&lt;!&ndash;                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--            &lt;!&ndash; Footer&ndash;&gt;/-->
<!--&lt;!&ndash;            <footer id="Footer" class="clearfix">&ndash;&gt;-->
<!--&lt;!&ndash;                &lt;!&ndash; Footer - First area &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="footer_action">&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="container">&ndash;&gt;-->
<!--&lt;!&ndash;                        &lt;!&ndash; One full width row&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                        <div class="column one column_column">&ndash;&gt;-->
<!--&lt;!&ndash;                            <h4 style="color: #a6a6a8; margin: 15px 0;">Vestibulum commodo volutpat convallis ac</h4>&ndash;&gt;-->
<!--&lt;!&ndash;                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="widgets_wrapper">&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="container">&ndash;&gt;-->
<!--&lt;!&ndash;                        &lt;!&ndash; One Fourth (1/4) Column &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                        <div class="column one-fourth">&ndash;&gt;-->
<!--&lt;!&ndash;                            &lt;!&ndash; Meta Links Area &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                            <aside id="meta-2" class="widget widget_meta">&ndash;&gt;-->
<!--&lt;!&ndash;                                <h4>Useful links</h4>&ndash;&gt;-->
<!--&lt;!&ndash;                                <ul>&ndash;&gt;-->
<!--&lt;!&ndash;                                    <li>&ndash;&gt;-->
<!--&lt;!&ndash;                                        <a href="content/space/wp-login.html">Log in</a>&ndash;&gt;-->
<!--&lt;!&ndash;                                    </li>&ndash;&gt;-->
<!--&lt;!&ndash;                                    <li>&ndash;&gt;-->
<!--&lt;!&ndash;                                        <a href="#">Entries <abbr title="Really Simple Syndication">RSS</abbr></a>&ndash;&gt;-->
<!--&lt;!&ndash;                                    </li>&ndash;&gt;-->
<!--&lt;!&ndash;                                    <li>&ndash;&gt;-->
<!--&lt;!&ndash;                                        <a href="#">Comments <abbr title="Really Simple Syndication">RSS</abbr></a>&ndash;&gt;-->
<!--&lt;!&ndash;                                    </li>&ndash;&gt;-->
<!--&lt;!&ndash;                                    <li>&ndash;&gt;-->
<!--&lt;!&ndash;                                        <a href="https://wordpress.org/" title="Powered by WordPress, state-of-the-art semantic personal publishing platform.">WordPress.org</a>&ndash;&gt;-->
<!--&lt;!&ndash;                                    </li>&ndash;&gt;-->
<!--&lt;!&ndash;                                </ul>&ndash;&gt;-->
<!--&lt;!&ndash;                            </aside>&ndash;&gt;-->
<!--&lt;!&ndash;                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                        &lt;!&ndash; One Fourth (1/4) Column &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                        <div class="column one-fourth">&ndash;&gt;-->
<!--&lt;!&ndash;                            &lt;!&ndash; Recent Comments Area &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                            <aside class="widget widget_mfn_recent_comments">&ndash;&gt;-->
<!--&lt;!&ndash;                                <h4>Latest comments</h4>&ndash;&gt;-->
<!--&lt;!&ndash;                                <div class="Recent_comments">&ndash;&gt;-->
<!--&lt;!&ndash;                                    <ul>&ndash;&gt;-->
<!--&lt;!&ndash;                                        <li>&ndash;&gt;-->
<!--&lt;!&ndash;                                            <span class="date_label">December 31, 2014</span>&ndash;&gt;-->
<!--&lt;!&ndash;                                            <p>&ndash;&gt;-->
<!--&lt;!&ndash;                                                <i class="icon-user"></i><strong>Sara</strong> commented on <a href="content/space/item-2.html#comment-3" title="Sara | Vestibulum ante ipsum primis">Vestibulum ante ipsum primis</a>&ndash;&gt;-->
<!--&lt;!&ndash;                                            </p>&ndash;&gt;-->
<!--&lt;!&ndash;                                        </li>&ndash;&gt;-->
<!--&lt;!&ndash;                                        <li>&ndash;&gt;-->
<!--&lt;!&ndash;                                            <span class="date_label">December 31, 2014</span>&ndash;&gt;-->
<!--&lt;!&ndash;                                            <p>&ndash;&gt;-->
<!--&lt;!&ndash;                                                <i class="icon-user"></i><strong>Mark</strong> commented on <a href="content/space/item-2.html#comment-2" title="Mark | Vestibulum ante ipsum primis">Vestibulum ante ipsum primis</a>&ndash;&gt;-->
<!--&lt;!&ndash;                                            </p>&ndash;&gt;-->
<!--&lt;!&ndash;                                        </li>&ndash;&gt;-->
<!--&lt;!&ndash;                                    </ul>&ndash;&gt;-->
<!--&lt;!&ndash;                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                            </aside>&ndash;&gt;-->
<!--&lt;!&ndash;                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                        &lt;!&ndash; One Fourth (1/4) Column &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                        <div class="column one-fourth">&ndash;&gt;-->
<!--&lt;!&ndash;                            &lt;!&ndash; Text Area &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                            <aside class="widget widget_text">&ndash;&gt;-->
<!--&lt;!&ndash;                                <h4>About us</h4>&ndash;&gt;-->
<!--&lt;!&ndash;                                <div class="textwidget">&ndash;&gt;-->
<!--&lt;!&ndash;                                    <h6 style="color: #97A1AD;">Interdum nulla lectus vel justo. Curabitur fringilla nisi a ex.</h6>&ndash;&gt;-->
<!--&lt;!&ndash;                                    <p>&ndash;&gt;-->
<!--&lt;!&ndash;                                        Praesent vel iaculis erat. Mauris congue tortor a aliquam sodales. Duis quis odio id dolor fermentum bibendum. Nam iaculis viverra urna.&ndash;&gt;-->
<!--&lt;!&ndash;                                    </p>&ndash;&gt;-->
<!--&lt;!&ndash;                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                            </aside>&ndash;&gt;-->
<!--&lt;!&ndash;                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                        &lt;!&ndash; One Fourth (1/4) Column &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                        <div class="column one-fourth">&ndash;&gt;-->
<!--&lt;!&ndash;                            &lt;!&ndash;Tag Cloud &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                            <aside class="widget widget_tag_cloud">&ndash;&gt;-->
<!--&lt;!&ndash;                                <h4>Tags</h4>&ndash;&gt;-->
<!--&lt;!&ndash;                                <div class="tagcloud">&ndash;&gt;-->
<!--&lt;!&ndash;                                    <a href="" class='tag-link-4' title='1 topic' style='font-size: 8pt;'>Framework</a><a href='content/space/tag-grid.html' class='tag-link-5' title='1 topic' style='font-size: 8pt;'>Grid</a><a href='content/space/tag-motion.html' class='tag-link-9' title='1 topic' style='font-size: 8pt;'>Motion</a><a href='content/space/tag-video.html' class='tag-link-8' title='2 topics' style='font-size: 22pt;'>Video</a><a href='content/space/tag-wordpress.html' class='tag-link-7' title='2 topics' style='font-size: 22pt;'>Wordpress</a>&ndash;&gt;-->
<!--&lt;!&ndash;                                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                            </aside>&ndash;&gt;-->
<!--&lt;!&ndash;                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                &lt;!&ndash; Footer copyright&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="footer_copy">&ndash;&gt;-->
<!--&lt;!&ndash;                    <div class="container">&ndash;&gt;-->
<!--&lt;!&ndash;                        <div class="column one">&ndash;&gt;-->

<!--&lt;!&ndash;                            <div class="copyright">&ndash;&gt;-->
<!--&lt;!&ndash;                                &copy; 2017 BeSpace - BeTheme. Muffin group - HTML by <a target="_blank" rel="nofollow" href="http://bit.ly/1M6lijQ">BeantownThemes</a>&ndash;&gt;-->
<!--&lt;!&ndash;                            </div>&ndash;&gt;-->
<!--&lt;!&ndash;                            &lt;!&ndash;Social info area&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;                            <ul class="social"></ul>&ndash;&gt;-->
<!--&lt;!&ndash;                        </div>&ndash;&gt;-->
<!--&lt;!&ndash;                    </div>&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;            </footer>&ndash;&gt;-->
<!--        </div>/-->
    </div>
</template>

<script>

    export default {
        name: 'app',
        components: {}
    }
</script>

<style lang="css">

    @import './assets/css/global.css';
    @import './assets/content/space/css/structure.css';
    @import './assets/content/space/css/space.css';
    @import './assets/content/space/css/custom.css';
    @import './assets/plugins/rs-plugin/css/settings.css';

</style>
