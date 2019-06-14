<template>
    <!-- Main Content -->
    <div id="Content">
        <div class="content_wrapper clearfix">
            <div class="sections_group">

                <!--descripcion del sitio-->
                <div v-if="summary.length > 0" class="section">
                    <div class="section_wrapper clearfix">
                        <!--Descripcion conjunto de items-->
                        <div class="column one column_column ">
                            <div class="column_attr align_center" style=" padding:0 7%;">
                                <h4>{{summary}}</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <Filtro></Filtro>

                <div class="section">
                    <div class="section_wrapper clearfix">
                        <!--Descripcion conjunto de items-->
                        <div class="column one column_column ">
                            <div style=" padding:0 7%;">
                                <div class="text-justify" v-for="(description,index) in descriptions" :key="index"
                                     v-html="description">
                                </div>
                            </div>
                        </div>
                        <!-- Contents -->
                        <div class="column one-third column_blog height-col"
                             v-for="(content,index) in contents" :key="index">
                            <div class="blog_wrapper isotope_wrapper">
                                <div class="posts_group lm_wrapper photo col-3">
                                    <div class="post-item isotope-item clearfix post-2275 post format-standard has-post-thumbnail category-earth tag-grid">
                                        <div class="date_label">
                                            {{content.date}}
                                        </div>
                                        <div class="image_frame post-photo-wrapper scale-with-grid">
                                            <div class="image_wrapper" :id="'img-item_'+content.id">
                                                <a v-if="content.url_img !== ''" :href="content.url_img">
                                                    <div class="mask"></div>
                                                    <img :src="content.url_img"
                                                         class="scale-with-grid wp-post-image img-cover"
                                                         alt="home_space_blog3"/>
                                                </a>
                                                <a v-else href="@/assets/no-image-icon.png">
                                                    <div class="mask"></div>
                                                    <img src="@/assets/no-image-icon.png"
                                                         class="scale-with-grid wp-post-image img-cover"
                                                         alt="home_space_blog3"/>
                                                </a>
                                                <div class="image_links double">
                                                    <a role="button" class="zoom cursor-hand"
                                                       @click="showImage('img-item_'+content.id,content.url_img,content.title)"
                                                       rel="prettyphoto">
                                                        <i class="icon-search"></i>
                                                    </a>
                                                    <a :href="content.url_img" class="link">
                                                        <i class="icon-link"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="post-desc-wrapper">
                                            <div class="post-desc">
                                                <div class="post-head">
                                                    <div class="post-meta clearfix">
                                                        <div class="author-date">
                                                            <span class="vcard author post-author"
                                                                  v-if="(content.author !== '')">
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
                                                    <h2 class="entry-title mb-8px">
                                                        <a :href="urlPath +content.id">{{content.title}}</a>
                                                    </h2>
                                                </div>
                                                <div class="post-excerpt" v-if="(content.description !== '')">
                                                    <p class="big text-justify" v-if="content.description.length > 200">
                                                        {{content.description.slice(0,190)}}...
                                                        <a :href="urlPath +content.id" class="color-azul-oscuro">Leer
                                                            m&aacute;s</a>
                                                    </p>
                                                    <p class="big text-justify" v-else>
                                                        {{content.description}}<a :href="urlPath +content.id"
                                                                                  class="color-azul-oscuro">Leer
                                                        m&aacute;s</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>







                        <hr>
                        <h1>relacionados</h1>
                        <hr>

                        <!-- Contents -->
                        <div class="column one-fourth column_blog height-col"
                             v-for="(content,index) in related_content" :key="index">
                            <div class="blog_wrapper isotope_wrapper">
                                <div class="posts_group lm_wrapper photo col-3">
                                    <div class="post-item isotope-item clearfix post-2275 post format-standard has-post-thumbnail category-earth tag-grid">
                                        <div class="date_label">
                                            {{content.date}}
                                        </div>
                                        <div class="image_frame post-photo-wrapper scale-with-grid">
                                            <div class="image_wrapper" :id="'img-item_'+content.id">
                                                <a v-if="content.url_img !== ''" :href="content.url_img">
                                                    <div class="mask"></div>
                                                    <img :src="content.url_img"
                                                         class="scale-with-grid wp-post-image img-cover"
                                                         alt="home_space_blog3"/>
                                                </a>
                                                <a v-else href="@/assets/no-image-icon.png">
                                                    <div class="mask"></div>
                                                    <img src="@/assets/no-image-icon.png"
                                                         class="scale-with-grid wp-post-image img-cover"
                                                         alt="home_space_blog3"/>
                                                </a>
                                                <div class="image_links double">
                                                    <a role="button" class="zoom cursor-hand"
                                                       @click="showImage('img-item_'+content.id,content.url_img,content.title)"
                                                       rel="prettyphoto">
                                                        <i class="icon-search"></i>
                                                    </a>
                                                    <a :href="content.url_img" class="link">
                                                        <i class="icon-link"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="post-desc-wrapper">
                                            <div class="post-desc">
                                                <div class="post-head">
                                                    <div class="post-meta clearfix">
                                                        <div class="author-date">
                                                            <span class="vcard author post-author"
                                                                  v-if="(content.author !== '')">
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
                                                    <h2 class="entry-title mb-8px">
                                                        <a :href="urlPath +content.id">{{content.title}}</a>
                                                    </h2>
                                                </div>
                                                <div class="post-excerpt" v-if="(content.description !== '')">
                                                    <p class="big text-justify" v-if="content.description.length > 200">
                                                        {{content.description.slice(0,150)}}...
                                                        <a :href="urlPath +content.id" class="color-azul-oscuro">Leer
                                                            m&aacute;s</a>
                                                    </p>
                                                    <p class="big text-justify" v-else>
                                                        {{content.description}}<a :href="urlPath +content.id"
                                                                                  class="color-azul-oscuro">Leer
                                                        m&aacute;s</a>
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

            <div class="sections_group">
                <div class="section" style="padding-top:90px; padding-bottom:50px; ">
                    <div class="section_wrapper clearfix">
                        <div class="items_group clearfix">
                            <!-- One Fourth (1/4) Column -->
                            <div class="column one-fourth column_column ">
                                <div class="column_attr" style=" padding:0 8% 0 0;">
                                    <hr class="no_line hrmargin_b_40" />
                                    <h3>Recursos Relacionados</h3>
                                    <hr class="no_line hrmargin_b_30" />
                                    <a class="button button_large button_theme button_js" href="content/space/stuff.html"><span class="button_label">Read more</span></a>
                                </div>
                            </div>
                            <!-- Three Fourth (3/4) Column -->
                            <div class="column three-fourth column_column space-border">
                                <div class="column_attr" style=" padding:0 0 0 8%;">
                                    <hr class="no_line hrmargin_b_40" />
                                    <div class="column one">
                                        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</h6>
                                    </div>
                                    <!-- One Third (1/3) Column -->
                                    <div class="column one-third">
                                        <div style="margin-right: 20%;">
                                            <div class="image_frame image_item no_link scale-with-grid alignnone no_border">
                                                <div class="image_wrapper"><img class="scale-with-grid" src="content/space/images/home_space_staff1.jpg" alt="" width="380" height="342" />
                                                </div>
                                            </div>
                                            <hr class="no_line hrmargin_b_20" />
                                            <h5>Martines walanti</h5>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolorsi architecto beatae vitae dicta sunt explicabo.
                                            </p>
                                        </div>
                                    </div>
                                    <!-- One Third (1/3) Column -->
                                    <div class="column one-third">
                                        <div style="margin-right: 20%;">
                                            <div class="image_frame image_item no_link scale-with-grid alignnone no_border">
                                                <div class="image_wrapper"><img class="scale-with-grid" src="content/space/images/home_space_staff2.jpg" alt="" width="380" height="342" />
                                                </div>
                                            </div>
                                            <hr class="no_line hrmargin_b_20" />
                                            <h5>Quoponum allen rolenpa</h5>
                                            <p>
                                                Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolorsi architecto beatae vitae dicta sunt explicabo.
                                            </p>
                                        </div>
                                    </div>
                                    <!-- One Third (1/3) Column -->
                                    <div class="column one-third">
                                        <div style="margin-right: 20%;">
                                            <div class="image_frame image_item no_link scale-with-grid alignnone no_border">
                                                <div class="image_wrapper"><img class="scale-with-grid" src="content/space/images/home_space_staff3.jpg" alt="" width="380" height="342" />
                                                </div>
                                            </div>
                                            <hr class="no_line hrmargin_b_20" />
                                            <h5>Labore et dolorsi architecto</h5>
                                            <p>
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
</template>

<script>
    import Filtro from '../components/Filtros'

    export default {
        name: "Container-Article",
        props: ['contents', 'descriptions', 'summary', 'urlPath','related_content'],
        components: {
            Filtro
        },
        methods: {
            showImage(id, url, title) {
                let source = {
                    src: url,
                    thumb: url,
                    subHtml: '<h4>' + title + '</h4>',
                    caption: '<h4>' + title + '</h4>',
                };

                window.lightGallery(document.getElementById(id), {
                    dynamic: true,
                    subHtmlSelectorRelative: true,
                    dynamicEl: [source],
                });
            }
        }
    }
</script>

<style scoped>

    .cursor-hand {
        cursor: pointer;
    }

</style>
