<template>
    <!-- Main Content -->
    <div id="Content">
        <div class="content_wrapper clearfix">
            <div class="sections_group">
                <div class="extra_content">
                    <div class="section the_content no_content">
                        <div class="section_wrapper">
                            <div class="the_content_wrapper"></div>
                        </div>
                    </div>
                </div>

                <Filtro></Filtro>

                <div class="section">
                    <div class="section_wrapper clearfix">
                        <!-- Contents -->
                        <div class="column one-second column_blog"
                             v-for="(content,index) in contents" :key="index">
                            <div class="blog_wrapper isotope_wrapper">
                                <div class="posts_group lm_wrapper photo col-3">
                                    <div class="post-item isotope-item clearfix post-2275 post format-standard has-post-thumbnail category-earth tag-grid">
                                        <div class="date_label">
                                            {{content.date}}
                                        </div>
                                        <div class="image_frame post-photo-wrapper scale-with-grid">
                                            <div class="image_wrapper">
                                                <a href="javascript:;">
                                                    <div class="mask"></div>
                                                    <img width="1200" height="480"
                                                         :src="content.url_img"
                                                         class="scale-with-grid wp-post-image" alt="home_space_blog3"/>
                                                </a>
                                                <div class="image_links double">
                                                    <a href="images/home_space_blog3-1200x800.jpg" class="zoom"
                                                       rel="prettyphoto"><i class="icon-search"></i></a><a
                                                        href="javascript:;" class="link"><i class="icon-link"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="post-desc-wrapper">
                                            <div class="post-desc">
                                                <div class="post-head">
                                                    <div class="post-meta clearfix">
                                                        <div class="author-date">
                                                            <span class="vcard author post-author" v-if="(content.author !== '')">
                                                                <span class="label">Publicado por </span>
                                                                <i class="icon-user"></i>
                                                                <span class="fn">
                                                                <a href="#">{{content.author}}</a>
                                                            </span>
                                                            </span>
                                                            <span class="date" v-if="(content.date !== '')">
                                                                <i class="icon-calendar"></i>
                                                                <span class="post-date updated">{{content.date}}</span>
                                                            </span>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="post-title" v-if="(content.title !== '')">
                                                    <h2 class="entry-title">
                                                        <a href="javascript:;">{{content.title}}</a>
                                                    </h2>
                                                </div>
                                                <div class="post-excerpt" v-if="(content.description !== '')">
                                                    <p class="big">
                                                      {{content.description}}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Filtro from '../components/Filtros'

    export default {
        name: "Container-Article",
        props: ['contents'],
        components: {
            Filtro
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>