<script lang="ts" setup>
const { photosets } = defineProps<{ photosets: Photoset[] }>();
</script>

<template>
  <section>
    <div class="wrapper">
      <h2 class="title">Фотосеты</h2>

      <div v-for="photoset in photosets" :key="photoset.id">
        <PictureSwiper :photoset="photoset" />
        <div class="divider"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.title {
  margin-bottom: 1rem;
}

.divider {
  width: 100%;
  margin: 6em 0;
  height: 1em;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    height: 100%;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 140%;
    max-width: 95vw;
    background-image: url("~/assets/bg.svg");
    background-repeat: space;
  }
}
</style>
