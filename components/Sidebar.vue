<template>
  <aside class="sidebar" :class="{ active: isOpen }">
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="/images/avatar.png" alt="Kenji Loo" width="80">
      </figure>

      <div class="info-content">
        <h1 class="name" title="Kenji Loo">
          Kenji Loo Xuen Yi
        </h1>
        <p class="title text-center xl:block flex items-center justify-center gap-1">
          <span>Software Engineer</span>
        </p>
      </div>

      <button class="info_more-btn" @click="isOpen = !isOpen">
        <span>Show Contacts</span>
        <ion-icon name="chevron-down" />
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator" />

      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-github" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Github
            </p>

            <a href="https://github.com/KenjiLoo" class="contact-link" target="_blank">KenjiLoo</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-linkedin" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Linkedin
            </p>

            <a href="https://www.linkedin.com/in/kenji-loo/" class="contact-link" target="_blank">Kenji Loo Xuen Yi</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="location-outline" />
          </div>

          <div class="contact-info">
            <p class="contact-title">
              Location
            </p>

            <address>Kuala Lumpur, Malaysia</address>
          </div>
        </li>
      </ul>

      <div class="separator" />

      <ul class="social-list">
        <li class="social-item">
          <NuxtLink to="mailto:kenjilooxy@gmail.com" class="social-link" target="_blank">
            <ion-icon name="mail-outline" /> <span class="timeline-text"> kenjilooxy@gmail.com </span>
          </NuxtLink>

          <div class="separator" />

          <NuxtLink to="mailto:kenjilooxy@gmail.com" class="social-link" target="_blank">
            <ion-icon name="call-outline" /> <span class="timeline-text"> +60192883322 </span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
let isOpen = ref(false)

function toggleMenu() {
  isOpen = !isOpen
}

</script>

