<script lang="ts" setup>
const { picture, pictureSmall } = defineProps<{
  picture: string;
  pictureSmall: string;
}>();

const loadingClass: Ref<string> = ref("");
</script>

<template>
  <div
    class="picture--blurred"
    :style="{ backgroundImage: `url(${pictureSmall})` }"
    :class="loadingClass"
  >
    <NuxtImg
      :src="picture"
      alt="не удалось загрузить фото"
      class="picture"
      loading="lazy"
      ref="img"
      @load="loadingClass = 'loaded'"
    />
  </div>
</template>

<style lang="scss" scoped>
.picture {
  opacity: 0;
}

.picture--blurred {
  aspect-ratio: 16/9;
  overflow: hidden;
  background-size: cover;
  filter: blur(25px);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0;
    animation: pulse 2.5s infinite;
    background-color: white;
  }

  &.loaded {
    filter: blur(0);
    background-image: none;
  }

  &.loaded::before {
    animation: none;
    content: none;
  }

  & > .picture {
    opacity: 0;
    transition: opacity 250ms ease-in-out;
  }

  &.loaded > .picture {
    opacity: 1;
  }
}

@keyframes pulse {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.1;
  }
  100% {
    opacity: 0;
  }
}
</style>
