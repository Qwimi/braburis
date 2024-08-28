<script setup lang="ts"></script>

<template>
  <section>
    <div class="wrapper">
      <article class="about--bio">
        <h2 class="about__title title">Обо мне</h2>
        <p class="about__text">Доброго времени суток, дорогой посетитель!</p>
        <p class="about__text">
          Меня зовут Борис, и я автомобильный фотограф из Москвы. Можно было
          написать много текста, но я уверен, что моё портфолио скажет всё само
          за себя.
        </p>
        <p class="about__text">
          Обсудить сотрудничество, детали заказа и договориться о фотосессии
          можно, связавшись со мной через указанные социальные сети.
        </p>
      </article>
      <div class="about__photo">
        <img
          src="~/assets/about-me-photo.webp"
          alt="не удалось загрузить фотографию"
        />
        <div class="about__links">
          <h4 class="about__links-title title">Контакты:</h4>
          <ul class="about__links-list">
            <li>
              <a
                href="https://vk.com/away.php?utf=1&to=https%3A%2F%2Fwww.instagram.com%2Fbraburis_%3Figsh%3DMW43aG5haWl1YXNxYg%253D%253D%26utm_source%3Dqr"
                class="about__link"
              >
                <svg class="about__link-icon" width="30" height="30">
                  <use href="~/assets/sprite.svg#instagram" />
                </svg>

                <p>Instagram</p>
              </a>
            </li>
            <li>
              <a href="https://t.me/UncleVupsen" class="about__link">
                <svg class="about__link-icon" width="30" height="30">
                  <use href="~/assets/sprite.svg#telegram" />
                </svg>

                <p>Telegram</p>
              </a>
            </li>
            <li>
              <a href="https://vk.com/braburisphoto" class="about__link">
                <svg class="about__link-icon" width="30" height="30">
                  <use href="~/assets/sprite.svg#vk" />
                </svg>

                <p>VK</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@mixin textMixin {
  font-size: 1.5em;
  @media (max-width: 1024px) {
    font-size: 1.25em;
  }

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 425px) {
    font-size: 1.25em;
  }
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1.25rem;
  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }
}

.about {
  &--bio {
    grid-column: span 3;
  }

  &__text {
    margin-bottom: 0.75em;
    @include textMixin;
  }

  &__photo {
    grid-column: 5/8;
    aspect-ratio: 3/4;
    position: relative;
    @media (max-width: 1024px) {
      grid-column: 4/8;
    }
  }

  &__links {
    color: #101114;
    padding: 1.5rem 2.5rem;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }

  &__links-list {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__links-title {
    font-size: 1.25em;
    margin-bottom: 1rem;
    text-align: left;

    @media (max-width: 768px) {
      margin-bottom: 0.5em;
    }
  }

  &__link-icon {
    height: 2rem;

    @media (max-width: 768px) {
      height: 1.5rem;
    }
  }

  &__link {
    color: #101114;
    text-decoration: none;
    display: flex;
    gap: 0.55em;
    align-items: center;
    @include textMixin;
    @media (max-width: 768px) {
      font-size: 1.5em;
    }
  }
}
</style>
