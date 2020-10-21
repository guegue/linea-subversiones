<template>
  <div id="Content">
    <div class="content_wrapper clearfix">
      <div class="sections_group">
        <div
          id="post-2275"
          class="no-title no-share post-2275 post format-standard has-post-thumbnail category-earth tag-grid"
        >
          <div class="section section-post-header">
            <div class="section_wrapper clearfix">
              <!-- One full width row-->
              <div class="column one post-header">
                <div class="title_wrapper">
                  <div class="post-meta clearfix">
                    <div
                      v-if="detailsItem.author.length > 0"
                      class="author-date"
                    >
                      <span class="vcard author post-author">
                        Publicado por
                        <i class="icon-user"></i>
                        <span class="fn">
                          <a href="javascript:;">{{ detailsItem.author }}</a>
                        </span>
                      </span>
                      <span v-if="detailsItem.date.length > 0" class="date">
                        <i class="icon-clock"></i>
                        <time
                          class="entry-date"
                          datetime="2014-05-09T09:28:12+00:00"
                          itemprop="datePublished"
                        >
                          {{ detailsItem.date }}
                        </time>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Post Content-->
          <div class="post-wrapper-content">
            <div class="entry-content">
              <div class="section the_content has_content">
                <div class="section_wrapper">
                  <div
                    class="column"
                    :class="{
                      'one-second': detailsItem.coordinates.length > 0,
                    }"
                  >
                    <h4 v-if="detailsItem.abstract.length > 0">Resumen</h4>
                    <p
                      v-if="detailsItem.abstract.length > 0"
                      class="big text-justify"
                    >
                      {{ detailsItem.abstract }}
                    </p>
                    <h4 v-if="detailsItem.description.length > 0">
                      Descripci&oacute;n
                    </h4>
                    <p
                      v-if="detailsItem.description.length > 0"
                      class="big2 text-justify"
                    >
                      {{ detailsItem.description }}
                    </p>
                    <h4 v-if="detailsItem.source.length > 0">Fuente</h4>
                    <p
                      v-if="detailsItem.source.length > 0"
                      class="big2 text-justify"
                    >
                      {{ detailsItem.source }}
                    </p>
                    <h4 v-if="detailsItem.provenance.length > 0">
                      Procedencia
                    </h4>
                    <p
                      v-if="detailsItem.provenance.length > 0"
                      class="big2 text-justify"
                    >
                      {{ detailsItem.provenance }}
                    </p>
                  </div>

                  <div
                    v-if="detailsItem.coordinates.length > 0"
                    class="column one-second"
                  >
                    <coordinates-map
                      :coordinates="detailsItem.coordinates"
                    ></coordinates-map>
                  </div>
                </div>
              </div>
            </div>
            <!--Pagination-->
          </div>
          <!--Media Tabs-->
          <div
            v-if="
              detailsItem.images.length > 0 ||
              detailsItem.audios.length > 0 ||
              detailsItem.videos.length > 0 ||
              detailsItem.documents.length > 0
            "
            class="section"
          >
            <div class="section_wrapper clearfix">
              <div class="column one">
                <main>
                  <input
                    v-if="detailsItem.images.length > 0"
                    id="tab1"
                    type="radio"
                    name="tabs"
                    :checked="exist_img"
                  />
                  <label v-if="detailsItem.images.length > 0" for="tab1">
                    <i class="far fa-image"></i> Imagenes
                  </label>

                  <input
                    v-if="detailsItem.audios.length > 0"
                    id="tab2"
                    type="radio"
                    name="tabs"
                    :checked="exist_audio"
                  />
                  <label v-if="detailsItem.audios.length > 0" for="tab2">
                    <i class="fas fa-volume-up"></i> Audios
                  </label>

                  <input
                    v-if="detailsItem.videos.length > 0"
                    id="tab3"
                    type="radio"
                    name="tabs"
                    :checked="exist_video"
                  />
                  <label v-if="detailsItem.videos.length > 0" for="tab3">
                    <i class="fas fa-film"></i> Videos
                  </label>

                  <input
                    v-if="detailsItem.documents.length > 0"
                    id="tab4"
                    type="radio"
                    name="tabs"
                    :checked="exist_document"
                  />
                  <label v-if="detailsItem.documents.length > 0" for="tab4">
                    <i class="far fa-file"></i> Documentos
                  </label>

                  <section v-if="detailsItem.images.length > 0" id="content1">
                    <viewer :images="detailsItem.images"></viewer>
                  </section>

                  <section v-if="detailsItem.audios.length > 0" id="content2">
                    <audio-player :audios="detailsItem.audios"></audio-player>
                  </section>

                  <section v-if="detailsItem.videos.length > 0" id="content3">
                    <div class="section">
                      <div class="section_wrapper clearfix">
                        <video-player
                          :videos="detailsItem.videos"
                        ></video-player>
                      </div>
                    </div>
                  </section>

                  <section
                    v-if="detailsItem.documents.length > 0"
                    id="content4"
                  >
                    <div class="section">
                      <div class="section_wrapper clearfix">
                        <document :documents="detailsItem.documents"></document>
                      </div>
                    </div>
                  </section>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Sidebar area-->
      <div class="sidebar sidebar-1 four columns">
        <div class="widget-area clearfix">
          <br />

          <!-- Categories Area -->
          <aside id="categories-2" class="widget widget_categories">
            <h3>Otros Sitios</h3>
            <ul>
              <li
                v-for="site in sites"
                :key="site.id"
                class="cat-item cat-item-14"
              >
                <a :href="'/' + site.slug">{{ site.title }}</a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AudioPlayer from '../components/AudioPlayer';
import Viewer from '../components/Viewer';
import VideoPlayer from '../components/VideoPlayer';
import Document from '../components/Document';
import CoordinatesMap from '../components/Coordinates-Map';

export default {
  name: 'ContainerDetail',
  components: {
    AudioPlayer,
    Viewer,
    VideoPlayer,
    Document,
    CoordinatesMap,
  },
  props: ['detailsItem', 'sites'],
  data() {
    return {
      exist_img: false,
      exist_audio: false,
      exist_video: false,
      exist_document: false,
    };
  },
  updated() {
    const size_img = this.detailsItem.images.length;
    const size_audio = this.detailsItem.audios.length;
    const size_video = this.detailsItem.videos.length;
    const size_document = this.detailsItem.documents.length;

    if (size_img > 0) {
      this.exist_img = true;
    } else if (size_audio > 0) {
      this.exist_audio = true;
    } else if (size_video > 0) {
      this.exist_video = true;
    } else if (size_document > 0) {
      this.exist_document = true;
    }
  },
};
</script>

<style scoped>
main {
  max-width: 100%;
  /*padding: 40px;*/
  /*border: 1px solid rgba(0, 0, 0, 0.2);*/
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

section {
  display: none;
  padding: 20px 0 0;
  border-top: 1px solid #abc;
}

input {
  display: none;
}

label {
  display: inline-block;
  margin: 0 0 -1px;
  padding: 15px 25px;
  font-weight: 600;
  text-align: center;
  color: #abc;
  border: 1px solid transparent;
}

label:before {
  font-weight: normal;
  margin-right: 10px;
}

label:hover {
  color: #789;
  cursor: pointer;
}

input:checked + label {
  color: #0af;
  border: 1px solid #abc;
  border-top: 2px solid #0af;
  border-bottom: 1px solid #fff;
}

#tab1:checked ~ #content1,
#tab2:checked ~ #content2,
#tab3:checked ~ #content3,
#tab4:checked ~ #content4 {
  display: block;
}

@media screen and (max-width: 800px) {
  label {
    font-size: 0;
  }

  label:before {
    margin: 0;
    font-size: 18px;
  }
}

@media screen and (max-width: 500px) {
  label {
    padding: 15px;
  }
}
</style>
