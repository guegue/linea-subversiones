<template>
  <div class="column one">
    <!-- Hidden video div -->

    <!--Videos-->
    <div>
      <ul id="div-videos" class="video list-unstyled w-video">
        <li
          v-for="(video, index) in videos"
          :key="index"
          class="m-1 column one-third video-square video"
          @click="showVideos(index)"
        >
          <a href="javascript:;">
            <img
              class="img-responsive img-video"
              :src="video.img_large"
              :alt="video.title"
            />
            <div class="demo-gallery-poster d-none">
              <img
                src="http://sachinchoolur.github.io/lightgallery.js/static/img/play-button.png"
              />
            </div>
            <div class="video_item_section video_item_stats clearfix">
              <span class="pb-1"> {{ video.title }}</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  props: ['videos'],
  methods: {
    showVideos(idvideo) {
      const videos = [];
      for (const video of this.videos) {
        if (video.type === 'video') {
          videos.push({
            html: `<video class="lg-video-object lg-html5" controls preload="none"><source src="${video.url}" type="video/mp4">${video.title}</video>`,
            thumb: video.img_medium,
          });
        } else {
          videos.push({
            src: video.url,
            thumb: video.img_medium,
          });
        }
      }

      window.lightGallery(document.getElementById('div-videos'), {
        dynamic: true,
        dynamicEl: videos,
        index: idvideo,
        videojs: true,
        cssEasing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        controls: true,
        progressBar: true,
        thumbnail: true,
      });
    },
  },
};
</script>

<style scoped>
.img-video {
  width: 260px !important;
  height: 200px !important;
  object-fit: cover;
}

li {
  list-style: none !important;
}
</style>
