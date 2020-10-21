<template>
  <div class="section">
    <div class="section_wrapper clearfix">
      <!--Imagenes-->
      <div
        v-for="(image, index) in images"
        id="div-images"
        :key="index"
        class="column one-fourth single-photo-wrapper"
        style="height: 170px"
      >
        <div class="cursor-hand" @click="showCollectionImage(index)">
          <img
            :src="image.url_large"
            class="square-size-image"
            :alt="image.title"
          />
          <div class="caption text-justify">
            <h5>{{ image.title }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Viewer',
  props: ['images'],
  methods: {
    showCollectionImage(index) {
      let collection;
      collection = [];
      for (const image of this.images) {
        collection.push({
          src: image.url,
          thumb: image.url,
          subHtml: `<h4 style="color:white !important">${image.title}</h4>`,
          caption: `<h4 style="color:white !important">${image.title}</h4>`,
        });
      }
      window.lightGallery(document.getElementById('div-images'), {
        dynamic: true,
        subHtmlSelectorRelative: true,
        thumbnail: true,
        dynamicEl: collection,
        index,
      });
    },
  },
};
</script>
