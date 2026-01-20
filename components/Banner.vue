<script setup lang="ts"></script>

<template>
  <div class="banner">
    <h1 class="title">BRABURIS</h1>
    <h2 class="subtitle">AUTOMOTIVE PHOTOGRAPHER</h2>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  position: relative;
  background: url(~/assets/banner.webp);
  background-size: cover;
  background-position: center center;
  text-align: center;
  height: 100vh;
}

.title {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  font-size: clamp(24px, 6vw, 96px);
}

.subtitle {
  position: absolute;
  bottom: 7.5%;
  left: 50%;
  transform: translateX(-50%);
  font-size: clamp(16px, 4vw, 36px);
  font-weight: 700;
  white-space: nowrap;
}
</style>
