<script setup lang="ts">
import { useAppStore } from "~/stores/store";

const store = useAppStore();
</script>

<template>
  <Banner />
  <AboutMe />
  <SwiperList :photosets="store.carsPhotosets" />
</template>
