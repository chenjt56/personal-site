<script setup lang="ts">
const skills = [
  'Vue 3',
  'React',
  'TypeScript',
  'JavaScript',
  'HTML/CSS',
  'Nuxt 3',
  'Tailwind CSS',
  '小程序开发',
  'Webpack/Vite',
  'Git',
  'Node.js',
  'REST API'
];
</script>

<template>
  <section class="mb-24">
    <h2
      class="text-lg font-semibold mb-6 text-gray-500 dark:text-gray-400 uppercase tracking-wider text-sm"
    >
      技能
    </h2>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="skill in skills"
        :key="skill"
        class="px-3 py-1.5 rounded-full text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
      >
        {{ skill }}
      </span>
    </div>
  </section>
</template>
