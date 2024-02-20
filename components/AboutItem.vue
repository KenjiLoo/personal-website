<script setup>
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue';

const props = defineProps({
  about: Object,
})

onMounted(() => {
  useLocaleStore()
})

const { locale } = useI18n({ useScope: 'global' })
</script>

<template>
  <li class="about-item">

    <div class="about-content-box">
      <p class="about-item-text">
        Kenji Loo Xuen Yi is a Software Engineer who is passionate about Blockchain Technology, Software Systems and Architecture Design, as well as anything related to code. Overall, Kenji's goal is to be an effecient and effective problem solver.
        <br><br>
        As a Software Engineer, Kenji aims to write elegant code that is clean and maintainable that solves problems the best way possible. 
        <br><br>
        On a daily basis, Kenji builds and maintains WebApps of all shapes and sizes, with a focus on honing his craft to be the best he can be. 
      </p>
    </div>
  </li>
</template>
