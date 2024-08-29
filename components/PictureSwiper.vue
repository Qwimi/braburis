<script lang="ts" setup>
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Thumbs } from "swiper/modules";

const modules = [FreeMode, Thumbs];

const swiperInstanse = ref();
const onSwiper = (swiper: any) => {
  swiperInstanse.value = swiper;
};

const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper;
};

const { photoset } = defineProps<{ photoset: Photoset }>();
</script>

<template>
  <div class="swiper--container">
    <swiper
      @swiper="onSwiper"
      :loop="true"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="modules"
      class="swiper"
    >
      <swiper-slide
        v-for="(photo, index) in photoset?.photos"
        :key="photo"
        class="swiper__slide"
      >
        <ImageItem :picture="photo" :picture-small="photoset.thumbs[index]" />
      </swiper-slide>
    </swiper>

    <button
      class="swiper__button swiper__button--prev"
      @click="swiperInstanse?.slidePrev()"
    >
      <svg viewBox="0 0 32 32" height="32" width="32">
        <use href="~/assets/sprite.svg#arrow-left" />
      </svg>
    </button>

    <button
      class="swiper__button swiper__button--next"
      @click="swiperInstanse?.slideNext()"
    >
      <svg viewBox="0 0 32 32" height="32" width="32">
        <use href="~/assets/sprite.svg#arrow-right" />
      </svg>
    </button>
  </div>
  <swiper
    @swiper="setThumbsSwiper"
    :slidesPerView="'auto'"
    :freeMode="true"
    :watchSlidesProgress="true"
    :modules="modules"
    class="swiper--thumb"
  >
    <swiper-slide
      v-for="photo in photoset?.thumbs"
      :key="photo"
      class="swiper__slide swiper__slide--thumb"
    >
      <img :src="photo" alt="не получилось загрузить фото" loading="lazy" />
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
.swiper {
  &__slide {
    aspect-ratio: 16/10;
    object-fit: cover;
    &--thumb {
      width: 150px;
      height: fit-content;
      margin-right: 1.5rem;

      @media (max-width: 768px) {
        width: 100px;
      }

      @media (max-width: 425px) {
        width: 75px;
      }
    }
  }

  &--thumb {
    cursor: grab;
  }

  &--container {
    margin-bottom: 1em;
    position: relative;
  }
}

.swiper__button {
  position: absolute;
  cursor: pointer;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  padding: 0;
  color: #fff;
  text-align: center;
  background: 0 0;
  border: 0;
  opacity: 0.5;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 1;
  }

  &--prev {
    left: -15%;

    @media (max-width: 1024px) {
      left: -10%;
    }

    @media (max-width: 768px) {
      left: -5%;
    }

    @media (max-width: 425px) {
      left: 0;
    }
  }

  &--next {
    right: -15%;

    @media (max-width: 1024px) {
      right: -10%;
    }

    @media (max-width: 768px) {
      right: -5%;
    }

    @media (max-width: 425px) {
      right: 0;
    }
  }
}
</style>
