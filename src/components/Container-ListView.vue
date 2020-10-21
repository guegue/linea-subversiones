<template>
  <!-- Main Content -->
  <div id="Content">
    <div class="content_wrapper clearfix">
      <div class="sections_group">
        <!--descripcion del sitio-->
        <div v-if="summary.length > 0" class="section">
          <div class="section_wrapper clearfix">
            <!--Descripcion conjunto de items-->
            <div class="column one column_column">
              <div class="column_attr align_center" style="padding: 0 7%">
                <h4>{{ summary }}</h4>
              </div>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section_wrapper clearfix">
            <!--Descripcion conjunto de items-->
            <div class="column one column_column">
              <div style="padding: 0 7%">
                <div
                  v-for="(description, index) in descriptions"
                  :key="index"
                  class="text-justify"
                  v-html="description"
                ></div>
              </div>
            </div>
            <!-- Contents -->
            <div
              v-for="contentPagination in contents"
              :id="'pagination' + contentPagination.id_page"
              :key="contentPagination.id_page"
              class="container-main"
              :class="{ 'd-none': currentPage !== contentPagination.id_page }"
            >
              <div
                v-for="(content, index) in contentPagination.content"
                :key="index"
                class="column one-third column_blog height-col"
              >
                >
                <div class="blog_wrapper isotope_wrapper">
                  <div class="posts_group lm_wrapper photo col-3">
                    <div
                      class="post-item isotope-item clearfix post-2275 post format-standard has-post-thumbnail category-earth tag-grid"
                    >
                      <div class="date_label">
                        {{ content.date }}
                      </div>
                      <div
                        class="image_frame post-photo-wrapper scale-with-grid"
                      >
                        <div
                          :id="'img-item_' + content.id"
                          class="image_wrapper"
                        >
                          <div v-if="content.url_img !== ''">
                            <div class="mask"></div>
                            <img
                              :src="content.url_img_large"
                              class="scale-with-grid wp-post-image img-cover"
                              alt="home_space_blog3"
                            />
                          </div>
                          <div v-else>
                            <div class="mask"></div>
                            <img
                              src="@/assets/no-image-icon.png"
                              class="scale-with-grid wp-post-image img-cover"
                              alt="home_space_blog3"
                            />
                          </div>
                          <div
                            class="image_links"
                            :class="{ double: content.url_img !== '' }"
                          >
                            <a
                              v-if="content.url_img !== ''"
                              role="button"
                              class="zoom cursor-hand"
                              rel="prettyphoto"
                              @click="
                                showImage(
                                  'img-item_' + content.id,
                                  content.url_img,
                                  content.title
                                )
                              "
                            >
                              <i class="fas fa-search"></i>
                            </a>
                            <a :href="content.url_img" class="link">
                              <i class="fas fa-link"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="post-desc-wrapper">
                        <div class="post-desc">
                          <div class="post-head">
                            <div class="post-meta clearfix">
                              <div class="author-date">
                                <span
                                  v-if="content.author !== ''"
                                  class="vcard author post-author"
                                >
                                  >
                                  <span class="label">Publicado por </span>
                                  <i class="fas fa-user"></i>
                                  <span class="fn">
                                    <a href="#"
                                      >&nbsp;{{ content.author }}&nbsp;</a
                                    >
                                  </span>
                                </span>
                                <span v-if="content.date !== ''" class="date">
                                  <i class="far fa-calendar"></i>
                                  <span class="post-date updated"
                                    >&nbsp;{{ content.date }}&nbsp;</span
                                  >
                                </span>
                              </div>
                            </div>
                          </div>
                          <div v-if="content.title !== ''" class="post-title">
                            <h2
                              v-if="content.title.length < 55"
                              class="entry-title mb-8px"
                              :title="content.title"
                            >
                              <router-link
                                tag="a"
                                :to="{
                                  name: 'detail',
                                  params: {
                                    namesite: names.site,
                                    namepage: names.page,
                                    iditem: content.id,
                                  },
                                }"
                                >{{ content.title }}
                              </router-link>
                            </h2>
                            <h2
                              v-else
                              class="entry-title mb-8px text-justify"
                              :title="content.title"
                            >
                              <router-link
                                tag="a"
                                :to="{
                                  name: 'detail',
                                  params: {
                                    namesite: names.site,
                                    namepage: names.page,
                                    iditem: content.id,
                                  },
                                }"
                                >{{ content.title.slice(0, 50) }}...
                              </router-link>
                            </h2>
                          </div>
                          <div
                            v-if="content.description !== ''"
                            class="post-excerpt"
                          >
                            <p
                              v-if="content.description.length > 150"
                              class="big text-justify"
                            >
                              {{ content.description.slice(0, 149) }}
                              <router-link
                                tag="a"
                                :to="{
                                  name: 'detail',
                                  params: {
                                    namesite: names.site,
                                    namepage: names.page,
                                    iditem: content.id,
                                  },
                                }"
                                class="color-azul-oscuro"
                                >...Leer m&aacute;s
                              </router-link>
                            </p>
                            <p v-else class="big text-justify">
                              {{ content.description }}
                              <router-link
                                tag="a"
                                :to="{
                                  name: 'detail',
                                  params: {
                                    namesite: names.site,
                                    namepage: names.page,
                                    iditem: content.id,
                                  },
                                }"
                                class="color-azul-oscuro"
                                >...Leer m&aacute;s
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
            <div class="column one post-pager" style="margin-top: 2em">
              <!-- Navigation Area -->
              <div class="pager-single">
                <a
                  v-for="(numberPage, index) in contents.length"
                  :key="index"
                  href="javascript:;"
                  :class="{
                    'active-pagination-option': currentPage === numberPage,
                  }"
                  @click="showNextPagination(numberPage)"
                >
                  <span>{{ numberPage }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr v-if="related_content.length > 0" />
      <div v-if="related_content.length > 0" class="sections_group">
        <div class="section" style="padding-top: 90px; padding-bottom: 50px">
          <div class="section_wrapper clearfix">
            <div class="items_group clearfix">
              <!-- One Fourth (1/4) Column -->
              <div class="column one-fourth column_column">
                <div class="column_attr" style="padding: 0 8% 0 0">
                  <hr class="no_line hrmargin_b_40" />
                  <h3>Recursos Relacionados</h3>
                  <hr class="no_line hrmargin_b_30" />
                </div>
              </div>
              <!-- Three Fourth (3/4) Column -->
              <div class="column three-fourth column_column space-border">
                <div class="column_attr" style="padding: 0 0 0 8%">
                  <!-- One Third (1/3) Column -->
                  <div
                    v-for="(content, index) in related_content"
                    :key="index"
                    class="column one-third m-1 height-item-related"
                  >
                    <div style="margin-right: 20%; margin-bottom: 15px">
                      <h5 class="hrmargin_b_5 text-white">
                        <router-link
                          tag="a"
                          :to="{
                            name: 'detail',
                            params: {
                              namesite: names.site,
                              namepage: names.page,
                              iditem: content.id,
                            },
                          }"
                          >{{ content.title }}
                        </router-link>
                      </h5>
                      <p class="text-justify">
                        {{ content.description.slice(0, 119) }}
                        <router-link
                          tag="a"
                          class="color-azul-oscuro"
                          :to="{
                            name: 'detail',
                            params: {
                              namesite: names.site,
                              namepage: names.page,
                              iditem: content.id,
                            },
                          }"
                          >...Leer m&aacute;s
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContainerArticle',
  props: ['contents', 'descriptions', 'summary', 'names', 'relatedContent'],
  data() {
    return {
      currentPage: 1,
    };
  },
  mounted() {},
  methods: {
    showImage(id, url, title) {
      const source = {
        src: url,
        thumb: url,
        subHtml: `<h4 style="color:white !important">${title}</h4>`,
        caption: `<h4 style="color:white !important">${title}</h4>`,
      };

      window.lightGallery(document.getElementById(id), {
        dynamic: true,
        subHtmlSelectorRelative: true,
        dynamicEl: [source],
      });
    },
    showNextPagination(numberPageCurrent) {
      this.currentPage = numberPageCurrent;
      const elm = document.querySelector('.content_wrapper');
      setTimeout(() => {
        window.scrollTo({
          behavior: 'smooth',
          left: 0,
          top: elm.offsetTop,
        });
      }, 500);
    },
  },
};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

.cursor-hand {
  cursor: pointer;
}

.active-pagination-option {
  color: #000 !important;
}

.active-pagination-option span {
  border-bottom: 1px solid rgba(0, 0, 0, 1);
}

.d-none img {
  display: none;
}
</style>
