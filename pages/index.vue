<script setup lang="ts">
import AboutMe from "~/components/aboutMe.vue";
import { useAppStore } from "~/stores/store";

const store = useAppStore();
</script>

<template>
  <Banner />
  <AboutMe />
  <SwiperList :photosets="store.carsPhotosets" />
</template>
