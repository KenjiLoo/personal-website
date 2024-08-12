<script setup>
useHead({
  title: 'Resume',
})
</script>

<template>
  <article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.resume') }}
      </h2>
    </header>

    <section class="timeline">
      <ol class="timeline-list">

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Active Directory Advertising Sdn. Bhd
          </h4>
          <span>From July 2023 — Until Present</span>
          <p class="timeline-item-desc">
            Kuala Lumpur, Malaysia
          </p>
          <p class="timeline-text-bold">
            Software Engineer
          </p>
          <p class="timeline-text">
            - Designed & Built 2 large-scale projects to production & 3 internal projects within 1 year with Laravel and Vue.js <br>
            - Expertise in building RESTful APIs with Laravel and Postman and designing effective Database Schemas and Software Architecture.<br>
            - Microservices approach in system architecture is used to design and build apps. <br>
            - Reduced development time by 60% by co-leading an API Boilerplate development with Laravel.<br>
            - Responsible for writing 2 user handbooks and documentation.<br>
            - Optimized APIs with server-side caching and writing code with the best time complexity.<br>
            - Responsible for training and guidance for newcomers in the Research and Development Department.<br>
            - Responsible for code-reviews, ensuring coding standards PSR and ES06 are upheld and code is clean & optimized.<br>
            - Developed projects using Agile to ensure efficiency and accuracy during project development.<br>
            - Version control with Git & Sourcetree, with Bitbucket and Trello to ensure operational smoothness.<br>
          </p>
        </li>
        
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Self-Employed
          </h4>
          <span>From Nov 2021 — Until Nov 2023</span>
          <p class="timeline-item-desc">
            Kuala Lumpur, Malaysia
          </p>
          <p class="timeline-text-bold">
            Freelance Web Developer
          </p>
          <p class="timeline-text">
            - Use Wordpress, PHP, Google Sites, and other Web Development tools to build E-Commerce, Booking, and service websites.<br>
            Portfolio: <br>
            <NuxtLink to="http://www.drimhq.com" class="italic text-slate-400" target="_blank">- www.drimhq.com (E Commerce)</NuxtLink>
            <NuxtLink to="" class="italic text-slate-400" target="_blank">- www.havilahcap.com (Service website)</NuxtLink>
            <NuxtLink to="http://www.b2b2cplatform.com" class="italic text-slate-400" target="_blank">- www.b2b2cplatform.com (E Commerce)</NuxtLink>
            <NuxtLink to="http://www.helolokal.com" class="italic text-slate-400" target="_blank">- www.helolokal.com (Booking website)</NuxtLink>
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Neoverse Sdn. Bhd
          </h4>
          <span>From Jun 2022 — Until Aug 2022</span>
          <p class="timeline-item-desc">
            Kuala Lumpur, Malaysia
          </p>
          <p class="timeline-text-bold">
            Web3 Software Engineer Intern
          </p>
          <p class="timeline-text">
            - Develop DApps with React & Moralis, and smart contracts with Solidity <br>
            - Built DAOs for users who owns the needed NFT from the company to use <br>
            - Built DEX & Fiat Exchange platform <br>
            - Included Web2 and Web3 logins for the relavant platforms <br>
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Markt.inc Agency
          </h4>
          <span>From Oct 2021 — Until Jan 2022</span>
          <p class="timeline-item-desc">
            Jakarata, Indonesia (Remote)
          </p>
          <p class="timeline-text-bold">
            Software Engineer Intern
          </p>
          <p class="timeline-text">
            - Build Web Apps with Laravel and Vue.js <br>
            - Develop CRUD functions for client's web app projects <br>
            - Design Database Schemas for client's web app projects <br>
            - Implement Front End interface for CRUD functions with Vue.js in Laravel <br>
            - Use MYSQL for database implementation <br>
            - Use GitLab for version control <br>
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Green Packet (kipleX)
          </h4>
          <span>From July 2021 — Until Sep 2021</span>
          <p class="timeline-item-desc">
            Kuala Lumpur, Malaysia (remote)
          </p>
          <p class="timeline-text-bold">
            Software Engineer Intern
          </p>
          <p class="timeline-text">
            - Work with Front-End Development using Angular (includes technology like Typescript (a strict syntactical superset of Javascript), HTML, SCSS (Sass), Nebular)  <br>
            - Collaborated with Company's Designers on Figma <br>
            - Test a newly launched web-app with user stories  <br>
            - Build a landing page for the company  <br>
            - Build a refer-a-client page for the company <br>
            - Work on a few components for an up-and-coming web-app project <br>
            - Use GitLab for version control <br>
          </p>
        </li>

      </ol>
    </section>
  </article>
</template>
