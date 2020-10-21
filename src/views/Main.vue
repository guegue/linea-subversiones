<template>
  <div class="text-center m-3">
    <ul>
      <li v-for="site in sites" :key="site.id">
        <router-link
          tag="a"
          :to="{ name: 'site', params: { namesite: site.slug } }"
        >
          <span>{{ site.title }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import GlobalFunction from '../mixins/globalFunctions';

export default {
  name: 'Main',
  mixins: [GlobalFunction],
  created() {
    this.getAllSites();
  },
};
</script>

<style scoped></style>
