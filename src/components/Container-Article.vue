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

                <Filters></Filters>

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
                        <div v-for="contentPagination in contents" :key="contentPagination.id_page"
                             class="container-main" :id="'pagination'+contentPagination.id_page"
                             :class="{'d-none': (currentPage !== contentPagination.id_page)}">
                            <div class="column one-third column_blog height-col"
                                 v-for="(content,index) in contentPagination.content" :key="index">
                                <div class="blog_wrapper isotope_wrapper">
                                    <div class="posts_group lm_wrapper photo col-3">
                                        <div class="post-item isotope-item clearfix post-2275 post format-standard has-post-thumbnail category-earth tag-grid">
                                            <div class="date_label">
                                                {{content.date}}
                                            </div>
                                            <div class="image_frame post-photo-wrapper scale-with-grid">
                                                <div class="image_wrapper" :id="'img-item_'+content.id">
                                                    <a v-if="content.url_img !== ''" :href="content.url_img"
                                                       target="_blank">
                                                        <div class="mask"></div>
                                                        <img :src="content.url_img"
                                                             class="scale-with-grid wp-post-image img-cover"
                                                             alt="home_space_blog3"/>
                                                    </a>
                                                    <a v-else href="@/assets/no-image-icon.png" target="_blank">
                                                        <div class="mask"></div>
                                                        <img src="@/assets/no-image-icon.png"
                                                             class="scale-with-grid wp-post-image img-cover"
                                                             alt="home_space_blog3"/>
                                                    </a>
                                                    <div class="image_links "
                                                         :class="{'double':(content.url_img !== '')}">
                                                        <a v-if="content.url_img !== ''" role="button"
                                                           class="zoom cursor-hand"
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
                                                            <a :to="{ name:'detail',
                                                            params: {
                                                                namesite:names.site,
                                                                namepage:names.page,
                                                                iditem:contentPagination.id_page,
                                                            } }">{{content.title}} {{contentPagination.id_page}} </a>
                                                        </h2>
                                                    </div>
                                                    <div class="post-excerpt" v-if="(content.description !== '')">
                                                        <p class="big text-justify"
                                                           v-if="content.description.length > 150">
                                                            {{content.description.slice(0,149)}}
                                                            <router-link tag="a" :to="{ name:'detail',
                                                            params: {
                                                                namesite:names.site,
                                                                namepage:names.page,
                                                                iditem:contentPagination.id_page,
                                                            } }" class="color-azul-oscuro">...Leer m&aacute;s
                                                            </router-link>
                                                        </p>
                                                        <p class="big text-justify" v-else>
                                                            {{content.description}}
                                                            <router-link tag="a" :to="{ name:'detail',
                                                            params: {
                                                                namesite:names.site,
                                                                namepage:names.page,
                                                                iditem:contentPagination.id_page,
                                                            } }" class="color-azul-oscuro">...Leer m&aacute;s
                                                            </router-link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <!--pagination-->
                        <div class="column one post-pager">
                            <!-- Navigation Area -->
                            <div class="pager-single">
                                <a href="javascript:;"
                                   v-for="(numberPage,index) in contents.length"
                                   @click="showNextPagination(numberPage)"
                                   :class="{'active-pagination-option': (currentPage === numberPage)}"
                                   :key="index">
                                    <span>{{numberPage}}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr v-if="related_content.length > 0">
            <div class="sections_group" v-if="related_content.length > 0">
                <div class="section" style="padding-top:90px; padding-bottom:50px">
                    <div class="section_wrapper clearfix">
                        <div class="items_group clearfix">
                            <!-- One Fourth (1/4) Column -->
                            <div class="column one-fourth column_column ">
                                <div class="column_attr" style=" padding:0 8% 0 0;">
                                    <hr class="no_line hrmargin_b_40"/>
                                    <h3>Recursos Relacionados</h3>
                                    <hr class="no_line hrmargin_b_30"/>
                                </div>
                            </div>
                            <!-- Three Fourth (3/4) Column -->
                            <div class="column three-fourth column_column space-border">
                                <div class="column_attr" style=" padding:0 0 0 8%;">
                                    <!-- One Third (1/3) Column -->
                                    <div class="column one-third m-1 height-item-related"
                                         v-for="(content,index) in related_content"
                                         :key="index">
                                        <div style="margin-right: 20%;margin-bottom: 15px;">
                                            <h5 class="hrmargin_b_5 text-white">
                                                <a :href="urlPath +content.id">{{content.title}}</a>
                                            </h5>
                                            <p class="text-justify">
                                                {{content.description.slice(0,119)}}
                                                <a :href="urlPath +content.id" class="color-azul-oscuro">...Leer
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
</template>

<script>
    import Filters from './Filters'

    export default {
        name: "Container-Article",
        props: ['contents', 'descriptions', 'summary', 'names', 'related_content'],
        components: {
            Filters
        },
        data() {
            return {
                urlPath: '',
                currentPage: 1,
            }
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
            },
            showNextPagination(numberPageCurrent) {
                this.currentPage = numberPageCurrent;
            }
        }
    }
</script>

<style scoped>

    .cursor-hand {
        cursor: pointer;
    }

    .active-pagination-option {
        color: #000 !important;

    }

    .active-pagination-option span {
        border-bottom: 1px solid rgba(0, 0, 0, 1);
    }

</style>
