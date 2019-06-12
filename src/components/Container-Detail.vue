<template>
    <div id="Content">
        <div class="content_wrapper clearfix">
            <div class="sections_group">
                <div id="post-2275"
                     class="no-title no-share post-2275 post  format-standard has-post-thumbnail  category-earth  tag-grid ">
                    <div class="section section-post-header">
                        <div class="section_wrapper clearfix">
                            <!-- Posts Navigation -->

                            <!-- One full width row-->
                            <div class="column one post-nav">
                                <ul class="next-prev-nav">
                                    <li class="prev">
                                        <a class="button button_js" :href="backPage"><span class="button_icon"><i
                                                class="icon-left-open"></i></span></a>
                                    </li>
                                </ul>

                            </div>
                            <!-- Post Header-->
                            <!-- One full width row-->
                            <div class="column one post-header">

                                <div class="title_wrapper">
                                    <div class="post-meta clearfix">
                                        <div class="author-date" v-if="detailsItem.author.length>0">
                                            <span class="vcard author post-author">
                                                Publicado por
                                                <i class="icon-user"></i>
                                                <span class="fn">
                                                    <a href="javascript:;">{{detailsItem.author}}</a>
                                                </span>
                                            </span>
                                            <span class="date" v-if="detailsItem.date.length>0">
                                                <i class="icon-clock"></i>
                                                <time class="entry-date" datetime="2014-05-09T09:28:12+00:00"
                                                      itemprop="datePublished">
													{{detailsItem.date}}
												</time>
                                            </span>
                                        </div>
                                        <div class="category meta-categories">
                                            <span class="cat-btn">Categories <i class="icon-down-dir"></i></span>
                                            <div class="cat-wrapper">
                                                <ul class="post-categories">
                                                    <li>
                                                        <a href="category-earth.html" rel="category tag">Earth</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="category mata-tags">
                                            <span class="cat-btn">Tags <i class="icon-down-dir"></i></span>
                                            <div class="cat-wrapper">
                                                <ul>
                                                    <li>
                                                        <a href="tag-framework.html">Framework</a>
                                                    </li>
                                                    <li>
                                                        <a href="tag-grid.html">Grid</a>
                                                    </li>
                                                    <li>
                                                        <a href="tag-wordpress.html">Wordpress</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Post Featured Element (image / video / gallery)-->
                            <!-- One full width row-->

                            <div class="section">
                                <div class="section_wrapper clearfix">
                                    <Viewer v-bind:images="detailsItem.images"></Viewer>
                                    <video-player  v-bind:videos="detailsItem.videos"></video-player>
                                </div>
                            </div>

                        </div>
                    </div>

                    <audio-player v-bind:audios="detailsItem.audios"></audio-player>
                    <!-- Post Content-->
                    <div class="post-wrapper-content">
                        <div class="entry-content">
                            <div class="section the_content has_content">
                                <div class="section_wrapper">
                                    <div class="the_content_wrapper">
                                        <h3>{{detailsItem.title}}</h3>
                                        <p class="big">
                                            {{detailsItem.description}}
                                        </p>
                                        <h4>Fuente</h4>
                                        <p class="big">
                                            {{detailsItem.source}}
                                        </p>
                                        <h4>Procedencia</h4>
                                        <p class="big">
                                            {{detailsItem.provenance}}
                                        </p>
                                        <h4>Resumen</h4>
                                        <div class="blockquote" v-if="detailsItem.abstract.length>0">
                                            <blockquote>
                                                {{detailsItem.abstract}}
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--Pagination-->
                        <!--Author Info Area-->
                        <div class="section section-post-about">
                            <div class="section_wrapper clearfix">
                                <!-- One full width row-->
                                <div class="column one author-box">
                                    <div class="author-box-wrapper" v-if="detailsItem.author.length>0">
                                        <div class="avatar-wrapper">
                                            <img alt='admin'
                                                 src='http://0.gravatar.com/avatar/057e2eb392b95a2ecfc9d32d554e3917?s=64&amp;d=mm&amp;r=g'
                                                 class='avatar avatar-64 photo' height='64' width='64'/>
                                        </div>
                                        <div class="desc-wrapper">
                                            <h5><a href="javascript:;">{{detailsItem.author}}</a></h5>
                                            <div class="desc"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Related posts area-->
                    <div class="section section-post-related">
                        <div class="section_wrapper clearfix"></div>
                    </div>

                </div>
            </div>
            <!-- Sidebar area-->
            <div class="sidebar sidebar-1 four columns">
                <div class="widget-area clearfix m-2">

                    <!-- Text Area -->
                    <aside class="widget widget_text">
                        <h3>About us</h3>
                        <div class="textwidget">
                            Mauris imperdiet, urna mi, gravida sod ales. Vivamus hendrerit nulla erat ornare tortor in
                            vestibulum id.
                        </div>
                    </aside>
                    <!-- Categories Area -->

                    <!-- Archives Area -->

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AudioPlayer from '../components/AudioPlayer'
    import Viewer from '../components/Viewer'
    import VideoPlayer from '../components/VideoPlayer'

    export default {
        name: "Container-Detail",
        props: ['detailsItem', 'backPage'],
        components: {
            AudioPlayer,
            Viewer,
            VideoPlayer,
        },
        updated() {

        }
    }
</script>

<style scoped>
</style>