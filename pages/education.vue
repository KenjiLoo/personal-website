<script setup>
useHead({
  title: 'Education',
})
</script>

<template>
  <article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.education') }}
      </h2>
    </header>

    <section class="timeline">
      <ol class="timeline-list">

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            University of Nottingham
          </h4>
          <span>From April 2019 — Until July 2023</span>
          <p class="timeline-text-bold">
            BSc Computer Science with Artificial Intelligence
          </p>
          <p class="timeline-text">
            About my university: 
            <NuxtLink to="https://www.nottingham.ac.uk/studywithus/ugstudy/courses/UG/Computer-Science-and-Artificial-Intelligence-with-Year-in-Industry-BSc-Hons-U6UCMPAIY.html" class="italic text-slate-400" target="_blank">University of Nottingham: BSc Computer Science with Artificial Intelligence</NuxtLink>
            <br>
            <span class="timeline-item-title h4">Some achievements during my academic career:</span>
            - Foundation in Science Student Representative <br> 
            - Directed a Christmas Musical <br>
            - Finished 3 internships in Front-end, Back-end, and Web3 Development respectively<br>
            - Graduated with an Honours
          </p>
        </li>
        
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Premfield International School
          </h4>
          <span>From Jan 2015 — Until Nov 2018</span>
          <p class="timeline-text-bold">
            High School
          </p>
          <p class="timeline-text">
            <br>
            <span class="timeline-item-title h4">Some achievements during my academic career:</span>
            - Head Prefect <br> 
            - Head of our school's musical ensemble <br>
            - School Salutatorian <br>
            - 2 times Bronze in Interschool Basketball Tournaments <br>
            - Silver in Interschool Captainball Tournaments <br> 
            - 2 times Gold in school's talent show in group vocals
          </p>
        </li>
      </ol>
    </section>
  </article>
</template>
