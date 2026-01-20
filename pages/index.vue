<script setup lang="ts">
export interface Photoset {
  id: number
  name: string
  photos: Array<string>
  thumbs: Array<string>
}

const { data } = await useAsyncData<Photoset[]>(
  'photosets',
  () => $fetch('/photosets.json')
)
</script>

<template>
  <Banner />
  <AboutMe />
  <SwiperList v-if="data" :photosets="data" />
</template>
