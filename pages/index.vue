<script setup>
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue';

useHead({
})

onMounted(() => {
  useLocaleStore()
})

const { locale } = useI18n({ useScope: 'global' })

/* Services */
const { data: skills } = await useFetch('/api/skills')

/* Services */
const { data: about } = await useFetch('/api/about')
</script>

<template>
  <article class="about active" data-page="about">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.about') }}
      </h2>
    </header>

    <section class="about-text">
      <ul class="about-list">
        <AboutItem v-for="about in about" :key="about.id" :about="about" />
      </ul>
    </section>

    <section class="service">
      <br />
      <ul class="service-list">
        <Skills v-for="skill in skills" :key="skill.id" :skill="skill" />
      </ul>
    </section>
  </article>
</template>