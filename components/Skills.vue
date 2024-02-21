<script setup>
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue';

const props = defineProps({
  skill: Object,
})

onMounted(() => {
  useLocaleStore()
})

const { locale } = useI18n({ useScope: 'global' })
</script>

<template>
  <li class="service-item">
    <div class="service-icon-box">
      <img v-if="skill.image !== null && skill.icon !== ''" :src="skill.image" alt="mobile app icon" class="w-40">
      <Icon v-else :icon="skill.icon" class="text-ranko-500 text-[3rem] mx-auto" style="width: 40px" />
    </div>

    <div class="service-content-box">
      <h4 class="h4 service-item-title">
        {{ skill.title }}
      </h4>

      <p class="service-item-text">
        {{ skill.description?.en }}
      </p>
    </div>
  </li>
</template>
